// Netlify Serverless Function (v2): Groq API Proxy
// API key tersimpan aman di server Netlify, tidak pernah dikirim ke browser

const COMPACT_SYSTEM_PROMPT = `You are the AI Portfolio Assistant representing Feri Mauliandi Saputra.
Your role is to introduce Feri to recruiters, hiring managers, and collaborators with accurate technical depth.

ABOUT FERI:
- Status: Fresh Graduate in Computer Engineering (Graduated December 2026) from Universitas Syiah Kuala.
- Thesis: "Sistem Deteksi Penyakit Daun Cabai Menggunakan Model YOLOv11 dan Web Streamlit". Benchmarked 5 deep learning architectures: YOLOv11n, YOLOv11s, YOLOv26n, YOLOv26s, and RT-DETR-L. The YOLOv11s model achieved the highest test mAP@0.5 of 0.903 (90.3%) and was implemented into Streamlit and deployed in the ChiliCare project.
- Core Focus: Generative AI, Large Language Models (LLMs), Agentic AI, Multi-Agent Workflows (LangGraph, LangChain), and advanced RAG architectures.
- Secondary Focus: Computer Vision (YOLOv11, RT-DETR, YOLOv8) and UAV Drone Robotics.
- Practical Edge: Hands-on experience developing LLM agent workflows (FastAPI, Streamlit) and deploying embedded systems on NVIDIA Jetson, Raspberry Pi, Pixhawk, and ArduPilot.
- Career Goals: Actively seeking Junior AI Engineer positions, AI Engineering roles, and collaborative research projects.
- Contacts: Email (feri.19022004@gmail.com), GitHub (github.com/FeriMauliandi), LinkedIn (linkedin.com/in/ferimauliandisaputra).

FEATURED AI PROJECTS (TECHNICAL DETAILS):
1. ChiliCare (Chili Leaf Disease Detection & RAG):
   - Integrates Feri's benchmark-winning thesis model (YOLOv11s, achieving top test mAP@0.5 of 0.903 against YOLOv11n, YOLOv26n, YOLOv26s, RT-DETR-L).
   - Dual-purpose backend: Combines computer vision detection with an LLM/RAG assistant via ChromaDB and LangChain to generate detailed visual diagnostic reports and interactive farmer consultations.
   - Stack: YOLOv11s (mAP 90.3%), Python, LangChain, ChromaDB, FastAPI, Streamlit.

2. NutriGraph AI (Nutrition Estimation with VLM + Agentic RAG):
   - Autonomous multi-agent pipeline orchestrated with LangGraph for dietary and nutritional analysis.
   - Uses Vision-Language Models (VLM) for food identification, automated USDA FoodData API querying, and Hybrid Search (Vector + Multiquery + BM25).
   - Cleanly decoupled FastAPI backend with an interactive Streamlit frontend.

3. KawanKerjaAI (Labor Regulation RAG Chatbot):
   - Domain-specific smart assistant that analyzes and answers queries regarding Indonesian labor regulations, specifically PP No. 35/2021.
   - Ingests legal documents into ChromaDB vector storage and employs Ollama for local LLM inference (privacy-first and zero-cloud cost), cleanly integrated with a FastAPI backend and Streamlit interface.
   - Stack: LangChain, ChromaDB, Ollama, Python, FastAPI, Streamlit.

4. UAVs & Autonomous Robotics Development:
   - 3+ years hands-on experience building, calibrating, and flying Fixed Wing and VTOL drones for competitive robotics and aerial surveys.
   - Lead Programmer and Ground Station Operator at Seulawah UAV Team.
   - Achievements: Awarded Best Team (Tim Terbaik) in the Fixed Wing Division at KRTI 2026; Finalist in KRTI 2024 VTOL division.
   - Stack: Pixhawk, ArduPilot, PX4, DroneKit, Jetson Nano, Raspberry Pi.

5. IHSG Stock Fundamental Explainer:
   - Financial AI assistant that processes structured Indonesian stock market metrics from Yahoo Finance (yfinance) and explains fundamental valuation indicators in plain language using LangChain and Streamlit.

EXPERIENCE & CREDENTIALS:
- Best Team (Tim Terbaik) in Fixed Wing Division at Kontes Robot Terbang Indonesia (KRTI 2026), Pusat Prestasi Nasional.
- Finalist KRTI 2024, Pusat Prestasi Nasional (Robotics Flight Competition).
- PT Angkasa Pura (Sep-Oct 2025), Backend Developer Intern: Developed CRUD inventory management application tracking UPS power systems to optimize airport asset workflows.
- Introduction to Data Science with Python certification, DQLab (2025).

CORE TECH STACK:
- Languages: Python, JavaScript, C/C++ (Arduino/Embedded).
- Frameworks & AI: PyTorch, TensorFlow, LangChain, LangGraph, LangSmith, ChromaDB, Hugging Face, OpenCV, Ollama.
- Backend & DevOps: FastAPI, Docker, Node.js, Git, Linux/Ubuntu, Postman.
- Hardware: NVIDIA Jetson Nano, Raspberry Pi, Arduino, Pixhawk, ArduPilot.

RESPONSE RULES:
- Tone: Friendly, direct, technically competent, and professional. Avoid marketing fluff or empty praise.
- LANGUAGE: Always strictly match the language used by the user in their prompt. If the user writes in English, reply entirely in English. If the user writes in Indonesian, reply entirely in Indonesian. Never force a specific language; adapt automatically to whatever language the user inputs.
- LENGTH: Keep responses focused and concise (3 to 5 sentences or 3 to 4 bullet points max). Do NOT write overly long walls of text.
- FORMATTING: NEVER use markdown headers ('###', '##', '#'). NEVER use raw asterisks for titles. Use clean bullet points ('•') and bold text for key terms.`;

export default async (req, context) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  }

  // Hanya terima POST
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  }

  const apiKey = process.env.GROQ_API_KEY;
  const model = process.env.GROQ_MODEL || 'qwen/qwen3.8-27b';

  if (!apiKey) {
    return new Response(
      JSON.stringify({ error: 'GROQ_API_KEY is not configured in Netlify Environment Variables.' }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  }

  try {
    const body = await req.json();
    const { message, history = [] } = body;

    if (!message || typeof message !== 'string') {
      return new Response(
        JSON.stringify({ error: 'Missing or invalid "message" field.' }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        }
      );
    }

    // Budget token: hanya ambil 2 pesan terakhir
    const recentHistory = history.slice(-2).map((msg) => ({
      role: msg.role === 'user' ? 'user' : 'assistant',
      content: String(msg.content).slice(0, 300),
    }));

    const payloadMessages = [
      { role: 'system', content: COMPACT_SYSTEM_PROMPT },
      ...recentHistory,
      { role: 'user', content: message },
    ];

    const groqResponse = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        messages: payloadMessages,
        temperature: 0.5,
        max_tokens: 260,
      }),
    });

    if (!groqResponse.ok) {
      const errData = await groqResponse.json().catch(() => ({}));
      const errorMsg = errData?.error?.message || `Groq API error ${groqResponse.status}`;

      if (groqResponse.status === 429) {
        return new Response(JSON.stringify({ error: 'RATE_LIMIT_HIT' }), {
          status: 429,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        });
      }

      return new Response(JSON.stringify({ error: errorMsg }), {
        status: groqResponse.status,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      });
    }

    const data = await groqResponse.json();
    const reply = data?.choices?.[0]?.message?.content || '';

    return new Response(JSON.stringify({ reply }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (err) {
    console.error('Netlify function error:', err);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  }
};

// URL path kustom agar bisa dipanggil via /api/chat langsung
export const config = {
  path: '/api/chat',
};

import { useState, useRef, useEffect } from 'react';
import { FiMessageCircle, FiX, FiSend, FiCpu, FiAlertCircle } from 'react-icons/fi';

// ============================================================
// SYSTEM PROMPT — BALANCED & INFORMATIVE (~700 tokens)
// ============================================================
// Cukup detail dan informatif untuk menjawab pertanyaan teknis
// mendalam, namun tetap aman dari kuota 6.000 TPM Groq.
// Respon SELALU menyesuaikan bahasa yang diinput oleh pengguna.
// ============================================================
const COMPACT_SYSTEM_PROMPT = `You are the AI Portfolio Assistant representing Feri Mauliandi Saputra.
Your role is to introduce Feri to recruiters, hiring managers, and collaborators with accurate technical depth.

ABOUT FERI:
- Status: AI Engineer & Computer Engineering student based in Universitas Syiah Kuala.
- Core Focus: Generative AI, Large Language Models (LLMs), Agentic AI, Multi-Agent Workflows (LangGraph, LangChain), and advanced RAG architectures.
- Secondary Focus: Computer Vision (YOLOv8/v11, DETR) and UAV Drone Robotics.
- Unique Edge: Combines cognitive AI reasoning workflows (LLMs & Agents) with practical full-stack deployment (FastAPI, Streamlit) and embedded hardware systems (deploying models on NVIDIA Jetson Nano, Raspberry Pi, Pixhawk, and ArduPilot).
- Career Goals: Actively seeking AI Engineering internships, junior full-time positions, and collaborative research projects.
- Contacts: Email (feri.19022004@gmail.com), GitHub (github.com/FeriMauliandi), LinkedIn (linkedin.com/in/ferimauliandisaputra).

FEATURED AI PROJECTS (TECHNICAL DETAILS):
1. ChiliCare (Chili Leaf Disease Detection & RAG):
   - Integrates YOLOv11 for real-time agricultural disease classification on chili plants.
   - Dual-purpose backend: Combines computer vision detection with an LLM/RAG assistant via ChromaDB and LangChain to generate detailed visual diagnostic reports and interactive farmer consultations.
   - Stack: YOLOv11, Python, LangChain, ChromaDB, FastAPI.

2. NutriGraph AI (Nutrition Estimation with VLM + Agentic RAG):
   - Autonomous multi-agent pipeline orchestrated with LangGraph for dietary and nutritional analysis.
   - Uses Vision-Language Models (VLM) for food identification, automated USDA FoodData API querying, and Hybrid Search (Vector + Multiquery + BM25).
   - Cleanly decoupled FastAPI backend with an interactive Streamlit frontend.

3. RAG Chatbot for Catfish Aquaculture:
   - Domain-specific smart assistant that ingests local PDF documentation on catfish farming into ChromaDB vector storage.
   - Employs Ollama for local LLM inference (privacy-first & zero-cloud cost) connected via FastAPI dan Streamlit.

4. UAVs & Autonomous Robotics Development:
   - 3+ years hands-on experience building, calibrating, and flying Fixed Wing & VTOL drones for competitive robotics and aerial surveys.
   - Lead Programmer & Ground Station Operator at Seulawah UAV Team.
   - Achievements: Awarded Best Team (Tim Terbaik) - Divisi Fixed Wing at KRTI 2026; Finalist in KRTI 2024 divisi VTOL.
   - Stack: Pixhawk, ArduPilot, PX4, DroneKit, Jetson Nano, Raspberry Pi.

5. IHSG Stock Fundamental Explainer:
   - Financial AI assistant that processes structured Indonesian stock market metrics from Yahoo Finance (yfinance) and explains fundamental valuation indicators in plain, understandable language using LangChain and Streamlit.

EXPERIENCE & CREDENTIALS:
- Best Team (Tim Terbaik) - Divisi Fixed Wing di Kontes Robot Terbang Indonesia (KRTI) 2026 — Pusat Prestasi Nasional.
- Finalist KRTI 2024 — Pusat Prestasi Nasional (Robotics Flight Competition).
- PT Angkasa Pura (Sep-Oct 2025): Backend Developer Intern — Developed CRUD inventory management application tracking UPS power systems to optimize airport asset workflows.
- Introduction to Data Science with Python certification — DQLab (2025).

CORE TECH STACK:
- Languages: Python, JavaScript, C/C++ (Arduino/Embedded).
- Frameworks & AI: PyTorch, TensorFlow, LangChain, LangGraph, LangSmith, ChromaDB, Hugging Face, OpenCV, Ollama.
- Backend & DevOps: FastAPI, Docker, Node.js, Git, Linux/Ubuntu, Postman.
- Hardware: NVIDIA Jetson Nano, Raspberry Pi, Arduino, Pixhawk, ArduPilot.

RESPONSE RULES:
- Tone: Friendly, humble, technically competent, and professional.
- LANGUAGE: Always strictly match the language used by the user in their prompt. If the user writes in English, reply entirely in English. If the user writes in Indonesian, reply entirely in Indonesian. Never force a specific language; adapt automatically to whatever language the user inputs.
- LENGTH: Keep responses focused and concise (3 to 5 sentences or 3 to 4 bullet points max). Do NOT write overly long walls of text.
- FORMATTING: NEVER use markdown headers ('###', '##', '#'). NEVER use raw asterisks for titles. Use clean bullet points ('•') and bold text for key terms.`;

const SUGGESTED_QUESTIONS = [
  "Siapa Feri dan apa keahliannya?",
  "What are Feri's top AI projects?",
  "Apa pengalaman Feri di UAV & robotics?",
  "How can I contact Feri?",
];

// Parser aman untuk membersihkan format markdown kasar (###, **, dll)
function formatMessageContent(text) {
  if (!text) return null;

  const cleanedText = text
    .replace(/^#{1,6}\s+/gm, '')
    .replace(/\n#{1,6}\s+/g, '\n')
    .replace(/^\*\s+/gm, '• ')
    .replace(/^-\s+/gm, '• ');

  const lines = cleanedText.split('\n');

  return lines.map((line, lineIdx) => {
    const parts = line.split(/(\*\*[^*]+\*\*)/g);

    return (
      <span key={lineIdx} className="block min-h-[1.1rem]">
        {parts.map((part, partIdx) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            const boldText = part.slice(2, -2);
            return (
              <strong key={partIdx} className="font-extrabold text-[#1E2D24]">
                {boldText}
              </strong>
            );
          }
          return <span key={partIdx}>{part}</span>;
        })}
      </span>
    );
  });
}

export default function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Halo! 👋 Saya asisten AI Feri Mauliandi Saputra.\n\nTanyakan apa saja tentang skill, project AI, atau pengalaman UAV Feri secara singkat dan langsung! (Feel free to ask in English or Indonesian)",
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [rateLimitWarning, setRateLimitWarning] = useState(null);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY || '';
  const GROQ_MODEL = import.meta.env.VITE_GROQ_MODEL || 'qwen/qwen3.8-27b';
  const isGroqConfigured = Boolean(GROQ_API_KEY && GROQ_API_KEY.trim().length > 0 && !GROQ_API_KEY.includes('your_groq_api_key'));

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && isOpen) setIsOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen]);

  // Panggil Groq API dengan Token Budgeting ketat
  const callGroqAPI = async (userMessage, chatHistory) => {
    // Ambil HANYA 2 pesan terakhir (hemat token drastis agar tidak kena limit 6.000 TPM)
    const recentHistory = chatHistory.slice(-2).map((msg) => ({
      role: msg.role === 'user' ? 'user' : 'assistant',
      content: msg.content.slice(0, 300),
    }));

    const payloadMessages = [
      { role: 'system', content: COMPACT_SYSTEM_PROMPT },
      ...recentHistory,
      { role: 'user', content: userMessage },
    ];

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: GROQ_MODEL,
        messages: payloadMessages,
        temperature: 0.5,
        max_tokens: 260,
      }),
    });

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      const errorMsg = errData?.error?.message || `HTTP ${response.status}: ${response.statusText}`;

      if (response.status === 429 || errorMsg.toLowerCase().includes('rate limit')) {
        throw new Error('RATE_LIMIT_HIT');
      }
      throw new Error(errorMsg);
    }

    const data = await response.json();
    return data?.choices?.[0]?.message?.content || 'Maaf, tidak ada respons dari model.';
  };

  // Fallback offline jika API key belum dimasukkan (merespon sesuai bahasa yang diinput)
  const getOfflineFallbackResponse = (userText) => {
    const lower = userText.toLowerCase();
    const isEnglish = /\b(who|what|where|how|tell|project|projects|experience|skill|skills|contact|email|hire|hello|hi)\b/i.test(lower);

    if (isEnglish) {
      if (lower.includes('project') || lower.includes('work')) {
        return `Feri's featured projects:\n• NutriGraph AI (Multi-Agent RAG with LangGraph for nutrition analysis)\n• RAG Chatbot for Catfish Aquaculture (ChromaDB + Ollama)\n• ChiliCare (YOLOv11 + LLM/RAG chili leaf disease detection)\n• IHSG Stock Fundamental Explainer (LLM + Structured Data)\n• UAV Robotics (National KRTI Fixed Wing 2026 Champion)`;
      }
      if (lower.includes('who') || lower.includes('about') || lower.includes('feri')) {
        return `Feri Mauliandi Saputra is an AI Engineer and Computer Engineering student specializing in LLMs, Agentic AI, Multi-Agent Workflows, and RAG architectures, with secondary expertise in Computer Vision and autonomous UAV systems.`;
      }
      if (lower.includes('contact') || lower.includes('email') || lower.includes('reach')) {
        return `You can reach Feri via email at feri.19022004@gmail.com or on LinkedIn: linkedin.com/in/ferimauliandisaputra/`;
      }
      return `Feel free to ask about Feri's AI engineering skills, projects, UAV robotics research, or contact information!`;
    }

    // Default Indonesian response
    if (lower.includes('project') || lower.includes('proyek') || lower.includes('karya')) {
      return `Proyek unggulan Feri:\n• NutriGraph AI (Multi-Agent RAG & LangGraph estimasi nutrisi)\n• RAG Chatbot Budidaya Lele (ChromaDB + Ollama)\n• ChiliCare (YOLOv11 + LLM/RAG deteksi penyakit cabai)\n• IHSG Stock Fundamental Explainer (LLM + Structured Data)\n• UAV KRTI Finalist 2024 & Juara 2026`;
    }
    if (lower.includes('siapa') || lower.includes('tentang')) {
      return `Feri Mauliandi Saputra adalah AI Engineer & Mahasiswa Teknik Komputer yang berfokus utama pada LLMs, Agentic AI, Multi-Agent Workflows, dan RAG, dengan keahlian sekunder di bidang Computer Vision dan robotika drone (UAV).`;
    }
    if (lower.includes('kontak') || lower.includes('email') || lower.includes('hubungi')) {
      return `Hubungi Feri melalui email: feri.19022004@gmail.com atau LinkedIn: linkedin.com/in/ferimauliandisaputra/`;
    }
    return `Silakan tanyakan tentang keahlian AI, proyek, riset UAV, atau kontak Feri!`;
  };

  const handleSend = async (text) => {
    const messageText = (typeof text === 'string' ? text : '') || input.trim();
    if (!messageText || isTyping) return;

    const userMsg = { role: 'user', content: messageText };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);
    setRateLimitWarning(null);

    try {
      if (isGroqConfigured) {
        const reply = await callGroqAPI(messageText, messages);
        setMessages((prev) => [...prev, { role: 'assistant', content: reply }]);
      } else {
        await new Promise((resolve) => setTimeout(resolve, 500));
        const reply = getOfflineFallbackResponse(messageText);
        setMessages((prev) => [...prev, { role: 'assistant', content: reply }]);
      }
    } catch (err) {
      console.error('Groq Error:', err);
      if (err.message === 'RATE_LIMIT_HIT') {
        const isEnglish = /\b(who|what|where|how|tell|project|experience|skills|contact|email)\b/i.test(messageText);
        setRateLimitWarning(isEnglish ? 'Groq TPM rate limit reached. Please wait 10-20 seconds.' : 'Batas kuota TPM Groq tercapai. Tunggu 10-20 detik.');
        setMessages((prev) => [
          ...prev,
          {
            role: 'assistant',
            content: isEnglish
              ? '⏳ Groq request rate limit exceeded temporarily. Please wait 15-20 seconds before asking again.'
              : '⏳ Kuota request Groq sementara penuh (Rate Limit). Mohon tunggu sekitar 15-20 detik sebelum mengirim pesan berikutnya.',
          },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            role: 'assistant',
            content: `⚠️ Kendala: ${err.message}`,
          },
        ]);
      }
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-[80] w-16 h-16 bg-[#2D6A4F] text-[#FFFDF7] rounded-2xl ghibli-border flex items-center justify-center hover:bg-[#E07A5F] transition-all hover:-translate-y-1 group cursor-pointer"
          style={{ boxShadow: '4px 4px 0px #1E2D24' }}
          aria-label="Buka AI Chat Assistant"
        >
          <FiMessageCircle size={28} strokeWidth={2.5} />
          <span className="absolute -top-2 -right-2 z-10">
            <span className="animate-ping absolute inline-flex h-5 w-5 rounded-full bg-[#E9C46A] opacity-75"></span>
            <span className="relative inline-flex h-5 w-5 bg-[#E9C46A] ghibli-border rounded-full items-center justify-center">
              <span className="text-[7px] font-black text-[#1E2D24]">AI</span>
            </span>
          </span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div
          className="fixed bottom-4 right-4 z-[90] w-[calc(100vw-2rem)] sm:w-[420px] flex flex-col bg-[#FFFDF7] overflow-hidden animate-scaleIn"
          style={{
            height: 'min(580px, 80vh)',
            border: '2px solid #1E2D24',
            borderRadius: '1.25rem',
            boxShadow: '0 10px 24px -4px rgba(29,53,87,0.12), 4px 4px 0px #2D6A4F',
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-3.5 bg-[#2D6A4F] border-b-2 border-[#1E2D24] shrink-0">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 bg-[#D8F3DC] rounded-xl flex items-center justify-center shrink-0"
                style={{ border: '2px solid #1E2D24' }}
              >
                <FiCpu className="text-[#2D6A4F]" size={20} strokeWidth={2.5} />
              </div>
              <div>
                <p className="text-[#FFFDF7] font-bold text-sm leading-tight flex items-center gap-1.5">
                  AI Portfolio Assistant
                  <span className="w-2 h-2 rounded-full bg-[#E9C46A] animate-pulse"></span>
                </p>
                <p className="text-[#B7E4C7] text-[11px] font-semibold flex items-center gap-1">
                  ⚡ Groq • <span className="font-mono text-[10px] text-white bg-[#1B4332] px-1.5 py-0.2 rounded truncate max-w-[150px]">{GROQ_MODEL}</span>
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#FFFDF7] hover:text-[#E9C46A] transition-colors p-1.5 hover:bg-[#1B4332] rounded-lg cursor-pointer"
              aria-label="Tutup chat"
            >
              <FiX size={22} strokeWidth={2.5} />
            </button>
          </div>

          {/* Banner Peringatan jika API Key belum terkonfigurasi */}
          {!isGroqConfigured && (
            <div className="bg-[#FDEEDC] border-b-2 border-[#1E2D24] px-4 py-2 flex items-center gap-2 shrink-0">
              <FiAlertCircle className="text-[#E07A5F] shrink-0" size={16} />
              <p className="text-[11px] font-bold text-[#1E2D24] leading-tight">
                Mode Offline. Tambahkan <code className="bg-[#FFFDF7] px-1 rounded">VITE_GROQ_API_KEY</code> di file <code className="bg-[#FFFDF7] px-1 rounded">.env</code>.
              </p>
            </div>
          )}

          {/* Banner jika Rate Limit terjadi */}
          {rateLimitWarning && (
            <div className="bg-[#FDEEDC] border-b-2 border-[#1E2D24] px-4 py-2 flex items-center gap-2 shrink-0 animate-scaleIn">
              <FiAlertCircle className="text-[#E07A5F] shrink-0" size={16} />
              <p className="text-[11px] font-bold text-[#E07A5F] leading-tight">
                {rateLimitWarning}
              </p>
            </div>
          )}

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3" style={{ backgroundColor: 'rgba(230,244,234,0.2)' }}>
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[85%] px-4 py-3 text-[13px] font-semibold leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-[#2D6A4F] text-[#FFFDF7] rounded-2xl rounded-br-md border-2 border-[#1E2D24]'
                      : 'bg-[#FFFDF7] text-[#1E2D24] rounded-2xl rounded-bl-md border-2 border-[#1E2D24]'
                  }`}
                  style={msg.role === 'assistant' ? { boxShadow: '2px 2px 0px rgba(45,106,79,0.15)' } : {}}
                >
                  {formatMessageContent(msg.content)}
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div
                  className="bg-[#FFFDF7] rounded-2xl rounded-bl-md px-5 py-3.5 border-2 border-[#1E2D24]"
                  style={{ boxShadow: '2px 2px 0px rgba(45,106,79,0.15)' }}
                >
                  <div className="flex gap-1.5 items-center">
                    <span className="w-2 h-2 rounded-full bg-[#2D6A4F] animate-bounce" style={{ animationDelay: '0ms' }}></span>
                    <span className="w-2 h-2 rounded-full bg-[#52B788] animate-bounce" style={{ animationDelay: '150ms' }}></span>
                    <span className="w-2 h-2 rounded-full bg-[#74C69D] animate-bounce" style={{ animationDelay: '300ms' }}></span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Questions */}
          {messages.length <= 1 && !isTyping && (
            <div className="px-3 py-2.5 flex flex-wrap gap-1.5 border-t border-dashed border-[#1E2D24]/15 shrink-0 bg-[#FFFDF7]">
              {SUGGESTED_QUESTIONS.map((q, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(q)}
                  className="text-[11px] font-bold px-2.5 py-1.5 bg-[#D8F3DC] rounded-lg hover:bg-[#E9C46A] transition-colors border border-[#1E2D24]/30 cursor-pointer"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input Area */}
          <div className="p-3 border-t-2 border-[#1E2D24] bg-[#FFFDF7] flex gap-2 shrink-0">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Tanya dalam Bahasa Indonesia atau English..."
              className="flex-1 px-4 py-2.5 rounded-xl text-sm font-semibold outline-none transition-colors border-2 border-[#1E2D24]/30 focus:border-[#2D6A4F] bg-[#E6F4EA]/20"
              disabled={isTyping}
            />
            <button
              onClick={() => handleSend()}
              disabled={!input.trim() || isTyping}
              className="w-11 h-11 bg-[#2D6A4F] text-[#FFFDF7] rounded-xl flex items-center justify-center hover:bg-[#E07A5F] transition-all disabled:opacity-40 disabled:cursor-not-allowed shrink-0 border-2 border-[#1E2D24] cursor-pointer"
              style={{ boxShadow: '2px 2px 0px #1E2D24' }}
              aria-label="Kirim pesan"
            >
              <FiSend size={16} strokeWidth={2.5} />
            </button>
          </div>

          {/* Footer note */}
          <div className="px-3 py-1.5 bg-[#F3E9D2] text-center shrink-0 border-t border-[#1E2D24]/20 flex items-center justify-between text-[10px] font-bold text-[#1E2D24]/70">
            <span>Powered by Groq LPUs</span>
            <span className="font-mono">Auto Language Detection</span>
          </div>
        </div>
      )}
    </>
  );
}

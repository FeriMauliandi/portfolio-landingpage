import { useState, useRef, useEffect } from 'react';
import { FiMessageCircle, FiX, FiSend, FiCpu, FiAlertCircle, FiMinus } from 'react-icons/fi';

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

// Fallback offline jika backend proxy belum tersedia
function getOfflineFallbackResponse(userText) {
  const lower = userText.toLowerCase();
  const isEnglish = /\b(who|what|where|how|tell|project|projects|experience|skill|skills|contact|email|hire|hello|hi)\b/i.test(lower);

  if (isEnglish) {
    if (lower.includes('project') || lower.includes('work') || lower.includes('thesis') || lower.includes('skripsi')) {
      return `Feri's featured projects:\n• ChiliCare (Thesis benchmark winner: YOLOv11s mAP@0.5=0.903 + LLM/RAG)\n• NutriGraph AI (Multi-Agent RAG with LangGraph for nutrition analysis)\n• KawanKerjaAI (Labor Regulation RAG Chatbot with ChromaDB & Ollama)\n• IHSG Stock Fundamental Explainer (LLM + Structured Data)\n• UAV Robotics (National KRTI Fixed Wing 2026 Champion)`;
    }
    if (lower.includes('who') || lower.includes('about') || lower.includes('feri') || lower.includes('education') || lower.includes('graduat')) {
      return `Feri Mauliandi Saputra is a Fresh Graduate in Computer Engineering (Dec 2026) from Universitas Syiah Kuala and Junior AI Engineer specializing in LLMs, Agentic AI, Multi-Agent Workflows, and Computer Vision (thesis benchmark on YOLOv11s with 90.3% mAP).`;
    }
    if (lower.includes('contact') || lower.includes('email') || lower.includes('reach')) {
      return `You can reach Feri via email at feri.19022004@gmail.com or on LinkedIn: linkedin.com/in/ferimauliandisaputra/`;
    }
    return `Feel free to ask about Feri's AI engineering skills, projects, thesis research, or contact information!`;
  }

  if (lower.includes('project') || lower.includes('proyek') || lower.includes('karya') || lower.includes('skripsi') || lower.includes('thesis')) {
    return `Proyek unggulan Feri:\n• ChiliCare (Hasil riset skripsi: YOLOv11s mAP@0.5=0,903 + LLM/RAG)\n• NutriGraph AI (Multi-Agent RAG & LangGraph estimasi nutrisi)\n• KawanKerjaAI (RAG Chatbot Regulasi Ketenagakerjaan PP 35/2021)\n• IHSG Stock Fundamental Explainer (LLM + Structured Data)\n• UAV KRTI Finalist 2024 & Juara 2026`;
  }
  if (lower.includes('siapa') || lower.includes('tentang') || lower.includes('pendidikan') || lower.includes('lulus') || lower.includes('kuliah')) {
    return `Feri Mauliandi Saputra adalah Fresh Graduate S1 Teknik Komputer (Lulus Desember 2026) dari Universitas Syiah Kuala & Junior AI Engineer yang berfokus pada LLMs, Agentic AI, Multi-Agent Workflows, dan Computer Vision (skripsi benchmark YOLOv11s dengan mAP 0,903).`;
  }
  if (lower.includes('kontak') || lower.includes('email') || lower.includes('hubungi')) {
    return `Hubungi Feri melalui email: feri.19022004@gmail.com atau LinkedIn: linkedin.com/in/ferimauliandisaputra/`;
  }
  return `Silakan tanyakan tentang keahlian AI, proyek, riset UAV, atau kontak Feri!`;
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
  const [backendAvailable, setBackendAvailable] = useState(null);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Cek apakah backend proxy tersedia saat pertama kali chat dibuka
  useEffect(() => {
    if (!isOpen || backendAvailable !== null) return;

    fetch('/api/chat', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ message: '__ping__' }) })
      .then((res) => {
        // Jika mendapat respons HTTP (even error), backend tersedia
        setBackendAvailable(res.ok || res.status === 400 || res.status === 429 || res.status === 500);
      })
      .catch(() => {
        // Fetch gagal total (CORS, network, 404 HTML) → pakai fallback
        setBackendAvailable(false);
      });
  }, [isOpen, backendAvailable]);

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

  // Panggil backend proxy /api/chat
  const callBackendProxy = async (userMessage, chatHistory) => {
    const recentHistory = chatHistory.slice(-2).map((msg) => ({
      role: msg.role,
      content: msg.content.slice(0, 300),
    }));

    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message: userMessage,
        history: recentHistory,
      }),
    });

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));

      if (response.status === 429 || errData?.error === 'RATE_LIMIT_HIT') {
        throw new Error('RATE_LIMIT_HIT');
      }
      throw new Error(errData?.error || `Server error ${response.status}`);
    }

    const data = await response.json();
    return data?.reply || 'Maaf, tidak ada respons dari model.';
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
      if (backendAvailable) {
        const reply = await callBackendProxy(messageText, messages);
        setMessages((prev) => [...prev, { role: 'assistant', content: reply }]);
      } else {
        await new Promise((resolve) => setTimeout(resolve, 500));
        const reply = getOfflineFallbackResponse(messageText);
        setMessages((prev) => [...prev, { role: 'assistant', content: reply }]);
      }
    } catch (err) {
      console.error('Chat error:', err);
      if (err.message === 'RATE_LIMIT_HIT') {
        const isEnglish = /\b(who|what|where|how|tell|project|experience|skills|contact|email)\b/i.test(messageText);
        setRateLimitWarning(isEnglish ? 'Rate limit reached. Please wait 10-20 seconds.' : 'Batas kuota tercapai. Tunggu 10-20 detik.');
        setMessages((prev) => [
          ...prev,
          {
            role: 'assistant',
            content: isEnglish
              ? '⏳ Request rate limit exceeded temporarily. Please wait 15-20 seconds before asking again.'
              : '⏳ Kuota request sementara penuh (Rate Limit). Mohon tunggu sekitar 15-20 detik sebelum mengirim pesan berikutnya.',
          },
        ]);
      } else {
        // Jika backend error, fallback ke offline
        const reply = getOfflineFallbackResponse(messageText);
        setMessages((prev) => [...prev, { role: 'assistant', content: reply }]);
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

  const modeLabel = backendAvailable === null
    ? 'Connecting...'
    : backendAvailable
      ? '⚡ AI-Powered'
      : '📋 Quick-Response Mode';

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
                <p className="text-[#B7E4C7] text-[11px] font-semibold">
                  {modeLabel}
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

          {/* Banner jika backend tidak tersedia */}
          {backendAvailable === false && (
            <div className="bg-[#FDEEDC] border-b-2 border-[#1E2D24] px-4 py-2 flex items-center gap-2 shrink-0">
              <FiAlertCircle className="text-[#E07A5F] shrink-0" size={16} />
              <p className="text-[11px] font-bold text-[#1E2D24] leading-tight">
                Mode Offline <FiMinus size={11} className="inline opacity-60 mx-0.5" /> respons template lokal. Konfigurasikan environment variable di Netlify untuk respons AI penuh.
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
            <span>{backendAvailable ? 'Secured Server Proxy' : 'Offline Mode'}</span>
            <span className="font-mono">Auto Language Detection</span>
          </div>
        </div>
      )}
    </>
  );
}

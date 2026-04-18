import React, { useState, useEffect } from 'react';
import { FiMail, FiGithub, FiLinkedin, FiCode, FiBriefcase, FiAward } from 'react-icons/fi';
import fotoFeri from './assets/feri.jpg'; // Pastikan path-nya sesuai

export default function PersonalPortfolio() {
  const [activeTab, setActiveTab] = useState('projects');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animationClass = entry.target.getAttribute('data-animation');
            if (animationClass) {
              entry.target.classList.add(animationClass);
              entry.target.classList.remove('opacity-0');
            }
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    const timeoutId = setTimeout(() => {
      const elements = document.querySelectorAll('.scroll-reveal');
      elements.forEach((el) => {
        if (el.classList.contains('opacity-0')) {
          observer.observe(el);
        }
      });
    }, 50);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [activeTab]);

  const portfolioData = {
    projects: [
      {
        id: 1,
        title: 'ChiliCare: Leaf Disease Detection',
        description: 'Automated chili leaf disease detection system integrating deep learning models for agricultural applications.',
        tech: ['YOLOv11', 'Python', 'FastAPI', 'Streamlit'],
        image: '🌶️',
        color: 'from-red-500 to-orange-500',
        github: 'https://github.com/FeriMauliandi/Chili-Leaf-Disease-Detection-with-YOLOv11-and-LLM-Based-RAG'
      },
      {
        id: 2,
        title: 'RAG-Based LLM Application',
        description: 'Custom Retrieval-Augmented Generation pipelines integrating local LLMs with vector databases for intelligent document QA.',
        tech: ['LangChain', 'ChromaDB', 'Ollama', 'RAGAS'],
        image: '🤖',
        color: 'from-blue-500 to-cyan-500',
        github: 'https://github.com/FeriMauliandi/RAG-chatbot-Streamlit-FastAPI'
      },
      {
        id: 3,
        title: 'UAV & FPV Drone Development',
        description: 'Building, configuring, and testing FPV drones and Tinywhoops for competitive robotics and aerial mapping.',
        tech: ['Betaflight', 'Flight Controllers', 'Hardware'],
        image: '🚁',
        color: 'from-purple-500 to-indigo-500',
        github: 'https://github.com/ferimauliandisaputra'
      },
      {
        id: 4,
        title: 'Market Sentiment & Tech Analysis',
        description: 'Automated monitoring scripts for IHSG stock screening (PBV ratios) and crypto futures liquidation heatmaps.',
        tech: ['Python', 'Data APIs', 'Technical Analysis'],
        image: '📈',
        color: 'from-emerald-500 to-green-500',
        github: 'https://github.com/FeriMauliandi/LLM-based-IHSG-Stock-Fundamental-Explainer-with-Structured-Data'
      }
    ],
    experience: [
      {
        id: 1,
        role: 'backend developer intern',
        company: 'PT Angkasa Pura',
        period: 'september 2025 - oktober 2025',
        description: 'Developed a CRUD application system for recording and tracking UPS inventory data to streamline asset management workflows.',
        color: 'bg-blue-500'
      },
      {
        id: 2,
        role: 'Robotics Team Member',
        company: 'Kontes Robot Terbang Indonesia (KRTI)',
        period: '2023 - 2026',
        description: 'Active participant in Unmanned Aerial Vehicle (UAV) development, focusing on drone configuration, testing, and flight optimization.',
        color: 'bg-purple-500'
      },
    ],
    certifications: [
      {
        id: 1,
        name: 'Deep Learning Specialization',
        issuer: 'Coursera',
        year: '2025',
        image: 'https://placehold.co/600x400/3b82f6/ffffff?text=Deep+Learning+Cert'
      },
      {
        id: 2,
        name: 'Computer Vision Practitioner',
        issuer: 'Tech Institute',
        year: '2025',
        image: 'https://placehold.co/600x400/8b5cf6/ffffff?text=CV+Practitioner'
      },
      {
        id: 3,
        name: 'Python for Data Science & AI',
        issuer: 'DataCamp',
        year: '2024',
        image: 'https://placehold.co/600x400/10b981/ffffff?text=Python+AI+Cert'
      },
      {
        id: 4,
        name: 'Backend API Development',
        issuer: 'Online Bootcamp',
        year: '2024',
        image: 'https://placehold.co/600x400/14b8a6/ffffff?text=FastAPI+Cert'
      }
    ]
  };

  const FloatingShape = ({ delay, duration, className }) => (
    <div
      className={`absolute rounded-full opacity-20 ${className}`}
      style={{
        animation: `float ${duration}s ease-in-out ${delay}s infinite alternate`
      }}
    />
  );

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@400;500;700&display=swap');
        
        html {
          scroll-behavior: smooth;
          scroll-padding-top: 80px; 
        }

        body {
          font-family: 'DM Sans', sans-serif;
          margin: 0;
          padding: 0;
        }
        
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Syne', sans-serif;
        }
        
        /* Animasi berputar untuk blob background */
        @keyframes float {
          0% { transform: translate(0, 0) rotate(0deg); }
          100% { transform: translate(30px, 30px) rotate(180deg); }
        }

        /* Animasi mengambang khusus untuk Badge (tanpa putaran) */
        @keyframes float-badge {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.85); }
          to { opacity: 1; transform: scale(1); }
        }
        
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-slideInUp { animation: slideInUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) both; }
        .animate-slideInLeft { animation: slideInLeft 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) both; }
        .animate-slideInRight { animation: slideInRight 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) both; }
        .animate-scaleIn { animation: scaleIn 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) both; }
        
        .gradient-text {
          background: linear-gradient(135deg, #2563eb 0%, #7c3aed 50%, #db2777 100%);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientShift 3s ease infinite;
        }
        
        .card-hover { transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); }
        .card-hover:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
        }
        
        .blob { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
        
        .tech-badge { transition: all 0.3s ease; }
        .tech-badge:hover {
          transform: scale(1.05);
          background-color: #475569;
        }
      `}</style>

      {/* Floating Background Shapes */}
      <FloatingShape delay="0" duration="8" className="w-64 h-64 bg-blue-300 blob top-20 left-10" />
      <FloatingShape delay="1" duration="10" className="w-48 h-48 bg-indigo-300 blob top-1/3 right-20" />
      <FloatingShape delay="2" duration="12" className="w-56 h-56 bg-purple-300 blob bottom-20 left-1/4" />
      <FloatingShape delay="1.5" duration="9" className="w-40 h-40 bg-teal-300 blob top-2/3 right-1/3" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">🚀<span className='gradient-text'> FeriM.</span></div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Home</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">About</a>
              <a href="#portfolio" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Portfolio</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-25 md:pt-10 pb-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center mt-8 md:mt-0">
          <div className="space-y-6 scroll-reveal opacity-0" data-animation="animate-slideInLeft">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
              👋 Hi, I am Feri Mauliandi Saputra
            </div>
            <h1 className="text-6xl md:text-7xl font-bold leading-tight">
              Aspiring <span className="gradient-text">AI Engineer</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Computer Engineering student passionate about Computer Vision, Generative AI, and building intelligent backend solutions.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium">Computer Vision</span>
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">LLMs Developer</span>
              <span className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">Python/FastAPI</span>
              <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Robotics & UAVs</span>
            </div>
            <a href="#contact">
              <button className="px-8 py-4 mt-4 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold hover:shadow-xl transition-all transform hover:scale-105">
                Let's Connect →
              </button>
            </a>
          </div>

          <div className="relative scroll-reveal opacity-0" data-animation="animate-slideInRight">
            {/* Background Blobs (Tetap berputar pelan) */}
            <div
              className="absolute -top-8 -right-8 w-40 h-40 bg-linear-to-br from-purple-400 to-pink-400 rounded-3xl blob opacity-60 z-0"
              style={{ animation: 'float 6s ease-in-out infinite' }}
            ></div>
            <div
              className="absolute -bottom-8 -left-8 w-48 h-48 bg-linear-to-br from-teal-400 to-blue-400 rounded-3xl blob opacity-60 z-0"
              style={{ animation: 'float 8s ease-in-out infinite reverse' }}
            ></div>

            {/* Bingkai Kaca & Foto Utama */}
            <div className="relative z-10 p-3 bg-white/40 backdrop-blur-lg rounded-[2.5rem] shadow-2xl border border-white/60">
              <div className="w-full aspect-square rounded-3xl overflow-hidden bg-slate-200 relative group">
                <img
                  src={fotoFeri}
                  alt="Feri Mauliandi Saputra"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-indigo-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>

            {/* Badge 1 - Kiri Atas (Computer Vision) */}
            <div
              className="absolute top-8 -left-4 md:-left-10 z-20 bg-white/90 backdrop-blur-md p-3 md:p-4 rounded-2xl shadow-xl border border-white/50 flex items-center gap-3"
              style={{ animation: 'float-badge 4s ease-in-out infinite' }}
            >
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-xl shadow-inner">👁️</div>
              <div className="text-left hidden sm:block">
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Focus On</p>
                <p className="text-gray-900 font-bold text-sm">Computer Vision</p>
              </div>
            </div>

            {/* Badge 2 - Kanan Atas (Robotics) */}
            <div
              className="absolute top-28 -right-4 md:-right-12 z-20 bg-white/90 backdrop-blur-md p-3 md:p-4 rounded-2xl shadow-xl border border-white/50 flex items-center gap-3"
              style={{ animation: 'float-badge 4.5s ease-in-out 1s infinite' }}
            >
              <div className="text-right hidden sm:block">
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Hardware</p>
                <p className="text-gray-900 font-bold text-sm">Robotics & UAVs</p>
              </div>
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-xl shadow-inner">🤖</div>
            </div>

            {/* Badge 3 - Kiri Bawah (LLM & RAG) */}
            <div
              className="absolute bottom-28 -left-4 md:-left-12 z-20 bg-white/90 backdrop-blur-md p-3 md:p-4 rounded-2xl shadow-xl border border-white/50 flex items-center gap-3"
              style={{ animation: 'float-badge 5s ease-in-out 2s infinite' }}
            >
              <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-xl shadow-inner">🧠</div>
              <div className="text-left hidden sm:block">
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Generative AI</p>
                <p className="text-gray-900 font-bold text-sm">LLMs & RAG</p>
              </div>
            </div>

            {/* Badge 4 - Kanan Bawah (Open to Work) */}
            <div
              className="absolute bottom-8 -right-2 md:-right-6 z-20 bg-white/90 backdrop-blur-md px-5 py-3 rounded-2xl shadow-xl border border-white/50 flex items-center gap-3"
              style={{ animation: 'float-badge 4s ease-in-out 0.5s infinite' }}
            >
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.7)]"></div>
              <p className="text-gray-900 font-bold text-sm">Open to Work & Internship Opportunity</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 scroll-reveal opacity-0" data-animation="animate-slideInUp">
            <h2 className="text-5xl font-bold mb-4">About Me</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mt-4">
              I am an AI Engineer with a strong foundation in Computer Engineering. I specialize in developing practical artificial intelligence solutions, focusing on Deep Learning architectures, object detection models (YOLOv8/v11), and building cutting-edge Large Language Model (LLM) applications using Retrieval-Augmented Generation (RAG). My technical stack is heavily centered around Python, FastAPI, and local AI toolchains.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg card-hover border-4 border-blue-100 scroll-reveal opacity-0" data-animation="animate-slideInUp" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-3xl">
                👁️
              </div>
              <h3 className="text-2xl font-bold mb-3">Computer Vision</h3>
              <p className="text-gray-600 leading-relaxed">Training and fine-tuning object detection models (YOLO, RT-DETR) for practical use cases, including agricultural monitoring and plant disease detection.</p>
            </div>

            <div className="bg-linear-to-br from-blue-500 to-indigo-600 rounded-3xl p-8 shadow-lg text-white card-hover scroll-reveal opacity-0" data-animation="animate-slideInUp" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center mb-6 text-3xl">
                🧠
              </div>
              <h3 className="text-2xl font-bold mb-3">Generative AI & RAG</h3>
              <p className="leading-relaxed">Architecting intelligent data-retrieval systems by integrating LangChain, ChromaDB vector stores, and local LLM models (Ollama) evaluated with RAGAS.</p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg card-hover border-4 border-indigo-100 scroll-reveal opacity-0" data-animation="animate-slideInUp" style={{ animationDelay: '0.3s' }}>
              <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6 text-3xl">
                ⚙️
              </div>
              <h3 className="text-2xl font-bold mb-3">Backend Architecture</h3>
              <p className="text-gray-600 leading-relaxed">Building robust, high-performance API endpoints and data processing pipelines utilizing Python and FastAPI to seamlessly serve AI models.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Showcase Section */}
      <section id="portfolio" className="relative py-20 px-6 bg-linear-to-br from-slate-800 to-slate-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 scroll-reveal opacity-0" data-animation="animate-slideInUp">
            <h2 className="text-5xl font-bold mb-6">Technical Journey</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore my latest AI projects, internships, competitive robotics experience, and technical expertise.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap scroll-reveal opacity-0" data-animation="animate-scaleIn">
            <button
              onClick={() => setActiveTab('projects')}
              className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold transition-all ${activeTab === 'projects'
                ? 'bg-linear-to-r from-blue-500 to-indigo-500 text-white shadow-lg scale-105'
                : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                }`}
            >
              <FiCode size={20} />
              Projects
            </button>
            <button
              onClick={() => setActiveTab('experience')}
              className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold transition-all ${activeTab === 'experience'
                ? 'bg-linear-to-r from-blue-500 to-indigo-500 text-white shadow-lg scale-105'
                : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                }`}
            >
              <FiBriefcase size={20} />
              Experience
            </button>
            <button
              onClick={() => setActiveTab('certifications')}
              className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold transition-all ${activeTab === 'certifications'
                ? 'bg-linear-to-r from-blue-500 to-indigo-500 text-white shadow-lg scale-105'
                : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                }`}
            >
              <FiAward size={20} />
              Certificates
            </button>
          </div>

          {/* Projects Tab */}
          {activeTab === 'projects' && (
            <div className="grid md:grid-cols-2 gap-8">
              {portfolioData.projects.map((project, idx) => (
                <div
                  key={project.id}
                  className="bg-slate-700/50 backdrop-blur rounded-3xl p-8 card-hover border border-slate-600 scroll-reveal opacity-0 flex flex-col justify-between"
                  data-animation="animate-scaleIn"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div>
                    <div className={`w-20 h-20 bg-linear-to-br ${project.color} rounded-2xl flex items-center justify-center text-4xl mb-6 shadow-lg`}>
                      {project.image}
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                    <p className="text-gray-300 mb-6">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-slate-600 rounded-full text-sm tech-badge">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto pt-4 border-t border-slate-600/50">
                    <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-900 text-blue-400 hover:text-blue-300 rounded-xl transition-all font-medium border border-slate-700 hover:border-slate-500">
                      <FiGithub size={18} /> View Repository
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Experience Tab */}
          {activeTab === 'experience' && (
            <div className="space-y-6 max-w-3xl mx-auto">
              {portfolioData.experience.map((exp, idx) => (
                <div
                  key={exp.id}
                  className="bg-slate-700/50 backdrop-blur rounded-3xl p-8 card-hover border border-slate-600 scroll-reveal opacity-0"
                  data-animation="animate-slideInLeft"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="flex items-start gap-6">
                    <div className={`w-16 h-16 ${exp.color} rounded-2xl flex items-center justify-center text-2xl shrink-0 shadow-lg`}>
                      💼
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">{exp.role}</h3>
                      <p className="text-blue-400 font-semibold mb-2">{exp.company}</p>
                      <p className="text-gray-400 text-sm mb-3">{exp.period}</p>
                      <p className="text-gray-300">{exp.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Certifications Tab */}
          {activeTab === 'certifications' && (
            <div className="grid md:grid-cols-2 gap-8">
              {portfolioData.certifications.map((cert, idx) => (
                <div
                  key={cert.id}
                  className="bg-slate-700/50 backdrop-blur rounded-3xl overflow-hidden card-hover border border-slate-600 scroll-reveal opacity-0"
                  data-animation="animate-scaleIn"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="h-48 w-full bg-slate-800 relative group">
                    <img
                      src={cert.image}
                      alt={cert.name}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  </div>

                  <div className="p-6 relative">
                    <h3 className="text-xl font-bold mb-2">{cert.name}</h3>
                    <p className="text-blue-400 font-semibold mb-1">{cert.issuer}</p>
                    <p className="text-gray-400 text-sm">{cert.year}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 px-6 bg-linear-to-br from-blue-100 via-indigo-100 to-purple-100">
        <div className="max-w-4xl mx-auto text-center">
          <div className="scroll-reveal opacity-0" data-animation="animate-slideInUp">
            <h2 className="text-5xl font-bold mb-6">Let's Work Together!</h2>
            <p className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto">
              I am actively looking for AI Engineering internships and collaborative projects. Feel free to reach out via email or connect with me on LinkedIn!
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <a href="mailto:your.email@example.com" className="flex items-center gap-3 px-8 py-4 bg-white rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                <FiMail className="text-blue-600" size={24} />
                <span className="font-semibold">Email Me</span>
              </a>
              <a href="https://github.com/ferimauliandisaputra" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-8 py-4 bg-linear-to-r from-gray-800 to-gray-900 text-white rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                <FiGithub size={24} />
                <span className="font-semibold">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/ferimauliandisaputra/" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-8 py-4 bg-linear-to-r from-blue-600 to-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                <FiLinkedin size={24} />
                <span className="font-semibold">LinkedIn</span>
              </a>
            </div>

            <div className="bg-white rounded-3xl p-12 shadow-xl max-w-2xl mx-auto">
              <h3 className="text-3xl font-bold mb-8">Send a Message</h3>
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-blue-500 outline-none transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-blue-500 outline-none transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    rows="6"
                    placeholder="Your Message"
                    className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-blue-500 outline-none transition-colors resize-none"
                  ></textarea>
                </div>
                <button className="w-full px-8 py-4 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold hover:shadow-xl transition-all transform hover:scale-105">
                  Send Message →
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-3xl font-bold gradient-text mb-4">Feri Mauliandi Saputra</div>
          <p className="text-gray-400 mb-6">Aspiring AI Engineer • Computer Engineering</p>
          <div className="flex justify-center gap-6">
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Terms</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </div>
          <p className="mt-6 text-sm text-gray-500">© 2026 All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
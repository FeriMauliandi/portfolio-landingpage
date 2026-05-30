import React, { useState, useEffect } from 'react';
import { FiMail, FiGithub, FiLinkedin, FiCode, FiBriefcase, FiAward, FiChevronLeft, FiChevronRight, FiMenu, FiX } from 'react-icons/fi';

import { SiJavascript, SiPython, SiFastapi, SiPytorch, SiTensorflow, SiNodedotjs, SiGithub, SiGit, SiUbuntu, SiArduino, SiNotion, SiLangchain, SiOpencv, SiPostman, SiRaspberrypi, SiDocker, SiHuggingface } from 'react-icons/si';
import { FaTerminal, FaDatabase, FaMicrochip, FaPlane } from 'react-icons/fa';

import fotoFeri from './assets/feri.jpg';
import chili1 from './assets/chili1.png';
import chili2 from './assets/chilicare.jpg';
import lele from './assets/lele.png';
import ihsg from './assets/saham.png';
import ihsg1 from './assets/saham1.png';
import drone1 from './assets/krti1.jpeg';
import drone2 from './assets/krti.jpeg';
import drone3 from './assets/uav.jpeg';
import drone4 from './assets/uav1.png';
import drone5 from './assets/uav2.jpeg';
import drone6 from './assets/uav3.jpg';


const ProjectCard = ({ project, idx }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (project.images.length <= 1 || isLightboxOpen) return;
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);
    return () => clearInterval(timer);
  }, [currentIndex, isLightboxOpen, project.images.length]);

  useEffect(() => {
    if (isLightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isLightboxOpen]);

  return (
    <>
      <div
        className={`${project.bgColor} brutal-box p-6 md:p-8 card-hover scroll-reveal opacity-0 flex flex-col justify-between`}
        data-animation="animate-scaleIn"
        style={{ animationDelay: `${idx * 0.1}s` }}
      >
        <div>
          <div className="relative w-full h-56 md:h-64 rounded-[2rem] overflow-hidden mb-6 group bg-white brutal-border">
            <img
              src={project.images[currentIndex]}
              alt={`${project.title} - Slide ${currentIndex + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 cursor-zoom-in"
              onClick={() => setIsLightboxOpen(true)}
            />

            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

            {project.images.length > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-white brutal-border text-black p-2 rounded-full opacity-0 group-hover:opacity-100 hover:bg-[#FFC27A] transition-all z-10 hover:-translate-y-1"
                >
                  <FiChevronLeft size={24} strokeWidth={3} />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-white brutal-border text-black p-2 rounded-full opacity-0 group-hover:opacity-100 hover:bg-[#FFC27A] transition-all z-10 hover:-translate-y-1"
                >
                  <FiChevronRight size={24} strokeWidth={3} />
                </button>
              </>
            )}

            {project.images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {project.images.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={() => setCurrentIndex(dotIdx)}
                    className={`h-3 rounded-full border-[3px] border-black transition-all duration-300 ${currentIndex === dotIdx ? 'bg-[#9b82f3] w-6' : 'bg-white w-3 hover:bg-[#C4F069]'
                      }`}
                  />
                ))}
              </div>
            )}
          </div>

          <h3 className="text-2xl font-black mb-3 text-black tracking-tight leading-tight">{project.title}</h3>
          <span className={`px-4 py-1.5 bg-white brutal-border text-black rounded-full text-xs font-bold inline-block w-fit shadow-[2px_2px_0px_#000] mb-4`}>
            {project.level}
          </span>
          <p className="text-gray-900 font-medium mb-6 leading-relaxed text-sm md:text-base">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech, i) => (
              <span key={i} className="px-3 py-1 bg-white brutal-border rounded-full text-xs font-bold text-black shadow-[2px_2px_0px_#000]">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-auto pt-4 border-t-[3px] border-black">
          <a href={project.github} target="_blank" rel="noreferrer" className="brutal-btn bg-black text-white w-full sm:w-auto inline-flex items-center justify-center gap-2 hover:bg-white hover:text-black">
            <FiGithub size={20} strokeWidth={3} /> View Repository
          </a>
        </div>
      </div>

      {/* MODAL FULLSCREEN (LIGHTBOX) */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#9b82f3]/90 backdrop-blur-sm p-4 md:p-10 cursor-zoom-out"
          onClick={() => setIsLightboxOpen(false)}
        >
          <button
            className="absolute top-6 right-6 text-black bg-[#FFB5DA] brutal-border hover:bg-[#C4F069] p-3 rounded-full transition-colors z-50 hover:-translate-y-1"
            onClick={() => setIsLightboxOpen(false)}
          >
            <FiX size={28} strokeWidth={3} />
          </button>

          <img
            src={project.images[currentIndex]}
            alt={`${project.title} Fullscreen`}
            className="max-w-full max-h-full object-contain brutal-box bg-white cursor-default animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          />

          {project.images.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 bg-[#C4F069] brutal-border text-black p-4 rounded-full transition-all z-50 hover:bg-[#FFC27A] hover:-translate-y-1"
              >
                <FiChevronLeft size={32} strokeWidth={3} />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 bg-[#C4F069] brutal-border text-black p-4 rounded-full transition-all z-50 hover:bg-[#FFC27A] hover:-translate-y-1"
              >
                <FiChevronRight size={32} strokeWidth={3} />
              </button>
            </>
          )}

          <div className="absolute bottom-6 text-black bg-white brutal-border font-bold tracking-widest px-6 py-2 rounded-full shadow-[4px_4px_0px_#000]">
            {currentIndex + 1} / {project.images.length}
          </div>
        </div>
      )}
    </>
  );
};

export default function PersonalPortfolio() {
  const [activeTab, setActiveTab] = useState('projects');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const techStack = [
    { name: 'PYTHON', bg: 'bg-[#3776AB]', text: 'text-white', icon: <SiPython /> },
    { name: 'JAVASCRIPT', bg: 'bg-[#F7DF1E]', text: 'text-black', icon: <SiJavascript /> },
    { name: 'LANGCHAIN', bg: 'bg-[#1C3C3A]', text: 'text-white', icon: <SiLangchain /> },
    { name: 'CHROMADB', bg: 'bg-[#F04C22]', text: 'text-white', icon: <FaDatabase /> },
    { name: 'FASTAPI', bg: 'bg-[#009688]', text: 'text-white', icon: <SiFastapi /> },
    { name: 'PYTORCH', bg: 'bg-[#EE4C2C]', text: 'text-white', icon: <SiPytorch /> },
    { name: 'TENSORFLOW', bg: 'bg-[#FF6F00]', text: 'text-white', icon: <SiTensorflow /> },
    { name: 'DOCKER', bg: 'bg-[#2496ED]', text: 'text-white', icon: <SiDocker /> },
    { name: 'HUGGING FACE', bg: 'bg-[#FFD21E]', text: 'text-black', icon: <SiHuggingface /> },
    { name: 'OPENCV', bg: 'bg-[#5C3EE8]', text: 'text-white', icon: <SiOpencv /> },
    { name: 'WINDOWS TERMINAL', bg: 'bg-[#4D4D4D]', text: 'text-white', icon: <FaTerminal /> },
    { name: 'UBUNTU', bg: 'bg-[#E95420]', text: 'text-white', icon: <SiUbuntu /> },
    { name: 'NODE.JS', bg: 'bg-[#339933]', text: 'text-white', icon: <SiNodedotjs /> },
    { name: 'GITHUB', bg: 'bg-[#181717]', text: 'text-white', icon: <SiGithub /> },
    { name: 'GIT', bg: 'bg-[#F05032]', text: 'text-white', icon: <SiGit /> },
    { name: 'ARDUINO', bg: 'bg-[#00979D]', text: 'text-white', icon: <SiArduino /> },
    { name: 'NOTION', bg: 'bg-[#000000]', text: 'text-white', icon: <SiNotion /> },
    { name: 'POSTMAN', bg: 'bg-[#FF6C37]', text: 'text-white', icon: <SiPostman /> },
    { name: 'RASPBERRYPI', bg: 'bg-[#C51A4A]', text: 'text-white', icon: <SiRaspberrypi /> },
    { name: 'NVIDIA JETSON', bg: 'bg-[#76B900]', text: 'text-white', icon: <FaMicrochip /> },
    { name: 'ARDUPILOT', bg: 'bg-[#0066CC]', text: 'text-white', icon: <FaPlane /> },
  ];

  const portfolioData = {
    projects: [
      {
        id: 1,
        title: 'Chilicare: Chili Leaf Disease Detection with YOLOv11 and RAG',
        level: 'Intermediate',
        description: 'An integrated agricultural assistant. It uses YOLOv11 for disease detection and a dual-purpose LLM/RAG backend to provide detailed visual diagnosis explanations and interactive expert consultations.',
        tech: ['YOLOv11', 'Python', 'LangChain', 'ChromaDB', 'Chatbot', 'fastAPI'],
        images: [
          chili2
        ],
        bgColor: 'bg-[#FFC27A]', // Oranye
        github: 'https://github.com/FeriMauliandi/Chili-Leaf-Disease-Detection-with-YOLOv11-and-LLM-Based-RAG'
      },
      {
        id: 2,
        title: 'RAG chatbot with Streamlit & FastAPI',
        level: 'Intermediate',
        description: 'A RAG-powered smart assistant for catfish farming. It extracts knowledge from local PDF documents using ChromaDB and an LLM to provide accurate, context-aware answers to user queries.',
        tech: ['LangChain', 'ChromaDB', 'Ollama', 'Python', 'FastAPI', 'Streamlit'],
        images: [
          lele
        ],
        bgColor: 'bg-[#C4F069]', // Hijau
        github: 'https://github.com/FeriMauliandi/RAG-chatbot-Streamlit-FastAPI'
      },
      {
        id: 3,
        title: 'UAVs Development (programming, hardware & ground station)',
        level: 'Advanced',
        description: 'Building, configuring, and testing UAVs (VTOL, Fixed Wing, Long endurance Low altitude) for competitive robotics, surveying and aerial mapping.',
        tech: ['Ardupilot', 'Flight Controllers', 'Jetson Nano', 'DroneKit', 'Raspberry Pi', 'ground station configuration'],
        images: [
          drone1,
          drone2,
          drone3,
          drone4,
          drone5,
          drone6
        ],
        bgColor: 'bg-[#FFB5DA]', // Pink
        github: 'https://github.com/ferimauliandisaputra'
      },
      {
        id: 4,
        title: 'LLM-based IHSG Stock Fundamental Explainer with Structured Data',
        level: 'Basic',
        description: 'An LLM-powered system that explains IHSG stock fundamental indicators using structured financial data (Yahoo Finance) and LangChain.',
        tech: ['Python', 'LLM', 'LangChain', 'yfinance', 'Streamlit'],
        images: [
          ihsg,
          ihsg1
        ],
        bgColor: 'bg-[#FFC27A]', // Oranye
        github: 'https://github.com/FeriMauliandi/LLM-based-IHSG-Stock-Fundamental-Explainer-with-Structured-Data'
      }
    ],
    experience: [
      {
        id: 1,
        role: 'Backend Developer Intern',
        company: 'PT Angkasa Pura',
        period: 'September 2025 - Oktober 2025',
        description: 'Developed a CRUD application system for recording and tracking UPS inventory data to streamline asset management workflows.',
        color: 'bg-[#C4F069]'
      },
      {
        id: 2,
        role: 'Lead Programmer & Ground Station Operator',
        company: 'Seulawah Team & KRTI',
        period: '2023 - 2026',
        description: 'Active participant in Unmanned Aerial Vehicle (UAV) development, focusing on drone configuration, testing, and flight optimization.',
        color: 'bg-[#FFC27A]'
      },
    ],
    certifications: [
      {
        id: 1,
        name: 'Introduction to Python',
        issuer: 'Sololearn',
        year: '2025',
        image: 'https://placehold.co/600x400/9b82f3/ffffff?text=Python+Cert'
      },
      {
        id: 2,
        name: 'Introduction to Data Science with Python',
        issuer: 'DQlab',
        year: '2025',
        image: 'https://placehold.co/600x400/c4f069/000000?text=Data+Science+Cert'
      },
      {
        id: 3,
        name: 'Finalist Kontes Robot Terbang Indonesia 2024',
        issuer: 'Pusat Prestasi Nasional',
        year: '2024',
        image: 'https://placehold.co/600x400/ffb5da/000000?text=KRTI+Finalist'
      }
    ]
  };

  const FloatingShape = ({ delay, duration, className }) => (
    <div
      className={`absolute brutal-border shadow-[4px_4px_0px_#000] ${className}`}
      style={{
        animation: `float ${duration}s ease-in-out ${delay}s infinite alternate`
      }}
    />
  );

  return (
    <div className="min-h-screen bg-[#9b82f3] overflow-hidden text-black font-sans selection:bg-black selection:text-[#C4F069]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700;800;900&family=DM+Sans:wght@400;500;700;800&display=swap');
        
        html {
          scroll-behavior: smooth;
          scroll-padding-top: 80px; 
        }

        body {
          font-family: 'DM Sans', sans-serif;
          margin: 0;
          padding: 0;
          background-color: #9b82f3;
          color: #000;
        }
        
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Space Grotesk', sans-serif;
          letter-spacing: -0.02em;
        }
        
        @keyframes float {
          0% { transform: translate(0, 0) rotate(0deg); }
          100% { transform: translate(15px, 25px) rotate(10deg); }
        }

        @keyframes float-badge {
          0%, 100% { transform: translateY(0px) rotate(-2deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
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
        
        .animate-slideInUp { animation: slideInUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) both; }
        .animate-slideInLeft { animation: slideInLeft 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) both; }
        .animate-slideInRight { animation: slideInRight 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) both; }
        .animate-scaleIn { animation: scaleIn 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) both; }
        
        .brutal-border {
          border: 3px solid #111;
        }

        .brutal-shadow {
          box-shadow: 6px 6px 0px #111;
        }

        .brutal-box {
          border: 3px solid #111;
          border-radius: 2rem;
          box-shadow: 6px 6px 0px #111;
          transition: all 0.2s ease-in-out;
        }

        .brutal-btn {
          border: 2px solid #111;
          border-radius: 999px;
          box-shadow: 4px 4px 0px #111;
          font-weight: 800;
          padding: 0.65rem 1.65rem;
          transition: all 0.2s ease-in-out;
          cursor: pointer;
        }

        .brutal-btn:hover {
          transform: translate(2px, 2px);
          box-shadow: 2px 2px 0px #111;
        }
        
        .brutal-btn:active {
          transform: translate(4px, 4px);
          box-shadow: 0px 0px 0px #111;
        }

        .card-hover:hover {
          transform: translate(-4px, -4px);
          box-shadow: 10px 10px 0px #111;
        }
      `}</style>

      {/* Floating Background Shapes */}
      <FloatingShape delay="0" duration="8" className="w-48 h-48 bg-[#FFC27A] rounded-full top-20 left-10" />
      <FloatingShape delay="1" duration="10" className="w-32 h-32 bg-[#C4F069] rounded-full top-1/3 right-20" />
      <FloatingShape delay="2" duration="12" className="w-56 h-56 bg-[#FFB5DA] rounded-full bottom-20 left-1/4" />
      <FloatingShape delay="1.5" duration="9" className="w-40 h-40 bg-white rounded-full top-2/3 right-1/3" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white brutal-border border-t-0 border-l-0 border-r-0">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-black tracking-tight uppercase">🚀 Feri<span className="text-[#9b82f3]">.M</span></div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-black hover:text-[#9b82f3] transition-colors font-bold">Home</a>
              <a href="#about" className="text-black hover:text-[#FFC27A] transition-colors font-bold">About</a>
              <a href="#portfolio" className="text-black hover:text-[#C4F069] transition-colors font-bold">Portfolio</a>
              <a href="#contact" className="text-black hover:text-[#FFB5DA] transition-colors font-bold">Contact</a>
            </div>

            <button className="md:hidden bg-[#C4F069] brutal-border p-2 rounded-xl shadow-[4px_4px_0px_#111]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <FiX size={24} strokeWidth={3} /> : <FiMenu size={24} strokeWidth={3} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b-[3px] border-black flex flex-col p-6 gap-4">
            <a href="#home" onClick={() => setIsMenuOpen(false)} className="text-black font-bold text-lg">Home</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-black font-bold text-lg">About</a>
            <a href="#portfolio" onClick={() => setIsMenuOpen(false)} className="text-black font-bold text-lg">Portfolio</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-black font-bold text-lg">Contact</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-5 pt-16 md:pt-10 pb-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 md:gap-22 items-center mt-8 md:mt-0">
          <div className="space-y-2 md:space-y-6 scroll-reveal opacity-0 relative z-10" data-animation="animate-slideInLeft">
            <div className="inline-block px-4 py-2 bg-[#C4F069] text-black brutal-border rounded-full text-xs md:text-sm font-black shadow-[4px_4px_0px_#111]">
              👋 Hi, I am Feri Mauliandi Saputra
            </div>
            <h1 className="text-[40px] md:text-7xl font-black leading-none text-black uppercase">
              Aspiring <br /><span className="bg-white px-2 inline-block brutal-border mt-1 shadow-[4px_4px_0px_#111] -rotate-1">AI Engineer</span>
            </h1>
            <p className="text-sm md:text-xl text-black font-bold leading-relaxed bg-white/60 backdrop-blur-sm p-3 brutal-border rounded-2xl shadow-[4px_4px_0px_#111]">
              Computer Engineering student passionate about Computer Vision, Generative AI, and building intelligent systems that integrate software and hardware.
            </p>
            <div className="flex flex-wrap gap-1 py-0">
              <span className="px-3 py-2 bg-[#FFB5DA] brutal-border shadow-[3px_3px_0px_#111] text-black rounded-full text-xs md:text-sm font-bold">Computer Vision</span>
              <span className="px-3 py-2 bg-[#C4F069] brutal-border shadow-[3px_3px_0px_#111] text-black rounded-full text-xs md:text-sm font-bold">LLMs & RAG</span>
              <span className="px-3 py-2 bg-[#FFC27A] brutal-border shadow-[3px_3px_0px_#111] text-black rounded-full text-xs md:text-sm font-bold">UAVs & Robotics</span>
            </div>
            <div className="">
              <a href="#contact" className="brutal-btn bg-white text-black inline-block text-lg hover:bg-black hover:text-white">
                Let's Connect →
              </a>
            </div>
          </div>

          <div className="w-full max-w-md mx-auto transform scale-95 md:scale-110 origin-center transition-all duration-300">
            <div className="-mt-20 md:mt-0 relative scroll-reveal opacity-0" data-animation="animate-slideInRight">

              {/* Kontainer Foto Utama */}
              <div className="relative z-10 p-2 bg-[#FFC27A] brutal-box">
                <div className="w-full aspect-square rounded-[1.5rem] overflow-hidden bg-white brutal-border relative group">
                  <img
                    src={fotoFeri}
                    alt="Feri Mauliandi Saputra"
                    className="w-full h-full object-cover group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>

              {/* Badge 1: Computer Vision */}
              <div
                className="absolute top-5 -left-4 md:-left-10 z-20 bg-white brutal-border p-3 md:p-4 rounded-3xl shadow-[4px_4px_0px_#111] flex items-center gap-3"
                style={{ animation: 'float-badge 4s ease-in-out infinite' }}
              >
                <div className="w-12 h-12 bg-[#FFB5DA] brutal-border rounded-full flex items-center justify-center text-2xl">👁️</div>
                <div className="text-left hidden sm:block">
                  <p className="text-[10px] text-black font-black uppercase tracking-wider">Computer Vision</p>
                  <p className="text-gray-900 font-bold text-sm">YOLO & DETR</p>
                </div>
              </div>

              {/* Badge 2: Hardware */}
              <div
                className="absolute top-30 -right-4 md:-right-12 z-20 bg-white brutal-border p-3 md:p-4 rounded-3xl shadow-[4px_4px_0px_#111] flex items-center gap-3"
                style={{ animation: 'float-badge 4.5s ease-in-out 1s infinite' }}
              >
                <div className="text-right hidden sm:block">
                  <p className="text-[10px] text-black font-black uppercase tracking-wider">Hardware</p>
                  <p className="text-gray-900 font-bold text-sm">Robotics & UAVs</p>
                </div>
                <div className="w-12 h-12 bg-[#C4F069] brutal-border rounded-full flex items-center justify-center text-2xl">🤖</div>
              </div>

              {/* Badge 3: Generative AI */}
              <div
                className="absolute bottom-24 -left-4 md:-left-12 z-20 bg-white brutal-border p-3 md:p-4 rounded-3xl shadow-[4px_4px_0px_#111] flex items-center gap-3"
                style={{ animation: 'float-badge 5s ease-in-out 2s infinite' }}
              >
                <div className="w-12 h-12 bg-[#FFC27A] brutal-border rounded-full flex items-center justify-center text-2xl">🧠</div>
                <div className="text-left hidden sm:block">
                  <p className="text-[10px] text-black font-black uppercase tracking-wider">Generative AI</p>
                  <p className="text-gray-900 font-bold text-sm">LLMs & RAG</p>
                </div>
              </div>

              {/* Badge 4: Open for Work */}
              <div
                className="absolute bottom-6 -right-2 md:-right-10 z-20 bg-[#C4F069] brutal-border px-5 py-3 rounded-full shadow-[4px_4px_0px_#111] flex items-center gap-3"
                style={{ animation: 'float-badge 4s ease-in-out 0.5s infinite' }}
              >
                <div className="w-4 h-4 bg-[#9b82f3] border-2 border-black rounded-full animate-pulse"></div>
                <p className="text-black font-black text-xs md:text-sm uppercase tracking-tight">Open for Work & Internship Opportunities</p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="relative py-20 px-6 bg-[#FFC27A] border-y-[3px] border-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 scroll-reveal opacity-0" data-animation="animate-slideInUp">
            <h2 className="text-4xl md:text-6xl font-black mb-2 inline-block bg-white text-black px-8 py-3 brutal-border shadow-[6px_6px_0px_#111] -rotate-2 uppercase">About Me</h2>
            <p className="text-lg md:text-xl text-black font-medium max-w-4xl mx-auto leading-relaxed mt-6 brutal-box p-6 bg-[#C4F069] text-left md:text-center">
              I am an AI Engineer with a strong foundation in Computer Engineering. I specialize in developing practical artificial intelligence solutions, focusing on Deep Learning architectures, object detection models (YOLOv8/v11), and building cutting-edge Large Language Model (LLM) applications using Retrieval-Augmented Generation (RAG). My passion lies in creating intelligent systems that seamlessly integrate software and hardware, particularly in the fields of computer vision and robotics. I am eager to apply my skills and knowledge to real-world challenges and contribute to innovative projects in the AI domain.
            </p>

            <div className="mt-10 pt-4 flex flex-col items-center">
              <h3 className="text-3xl font-black mb-10 text-black flex items-center gap-3 bg-[#FFB5DA] px-8 py-3 brutal-border shadow-[4px_4px_0px_#111] rotate-1 uppercase">
                Tech Stack
              </h3>
              <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-5xl">
                {techStack.map((tech, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-2 px-4 py-2.5 ${tech.bg} ${tech.text} text-[11px] md:text-sm font-black tracking-widest rounded-full brutal-border shadow-[4px_4px_0px_#111] hover:-translate-y-1 hover:shadow-[6px_6px_0px_#111] transition-all cursor-default`}
                  >
                    <span className="text-lg md:text-xl">{tech.icon}</span>
                    {tech.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Showcase Section */}
      <section id="portfolio" className="relative py-20 px-6 bg-[#9b82f3]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 scroll-reveal opacity-0" data-animation="animate-slideInUp">
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-black uppercase">Technical Journey</h2>
            <p className="text-lg text-black font-bold max-w-3xl mx-auto bg-[#FFC27A] inline-block px-6 py-4 brutal-border shadow-[4px_4px_0px_#111]">
              Explore my latest AI projects, internships, competitive robotics experience, and technical expertise.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center gap-2 mb-8 flex-wrap scroll-reveal opacity-0" data-animation="animate-scaleIn">
            <button
              onClick={() => setActiveTab('projects')}
              className={`flex items-center gap-2 px-6 py-3 font-black transition-all brutal-btn ${activeTab === 'projects'
                ? 'bg-black text-white shadow-[2px_2px_0px_#111] translate-y-1'
                : 'bg-white text-black hover:bg-[#C4F069]'
                }`}
            >
              <FiCode size={20} strokeWidth={3} />
              Projects
            </button>
            <button
              onClick={() => setActiveTab('experience')}
              className={`flex items-center gap-2 px-6 py-3 font-black transition-all brutal-btn ${activeTab === 'experience'
                ? 'bg-black text-white shadow-[2px_2px_0px_#111] translate-y-1'
                : 'bg-white text-black hover:bg-[#C4F069]'
                }`}
            >
              <FiBriefcase size={20} strokeWidth={3} />
              Experience
            </button>
            <button
              onClick={() => setActiveTab('certifications')}
              className={`flex items-center gap-2 px-6 py-3 font-black transition-all brutal-btn ${activeTab === 'certifications'
                ? 'bg-black text-white shadow-[2px_2px_0px_#111] translate-y-1'
                : 'bg-white text-black hover:bg-[#C4F069]'
                }`}
            >
              <FiAward size={20} strokeWidth={3} />
              Certificates
            </button>
          </div>

          {/* Projects Tab */}
          {activeTab === 'projects' && (
            <div className="grid md:grid-cols-2 gap-8">
              {portfolioData.projects.map((project, idx) => (
                <ProjectCard key={project.id} project={project} idx={idx} />
              ))}
            </div>
          )}

          {/* Experience Tab */}
          {activeTab === 'experience' && (
            <div className="space-y-8 max-w-3xl mx-auto">
              {portfolioData.experience.map((exp, idx) => (
                <div
                  key={exp.id}
                  className="bg-white brutal-box p-8 card-hover scroll-reveal opacity-0"
                  data-animation="animate-slideInLeft"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="flex items-start gap-6 flex-col md:flex-row">
                    <div className={`w-20 h-20 ${exp.color} brutal-border rounded-[1.5rem] flex items-center justify-center text-4xl shrink-0 shadow-[4px_4px_0px_#111] -rotate-3`}>
                      💼
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl font-black mb-2 text-black leading-tight">{exp.role}</h3>
                      <p className="text-lg font-bold bg-[#FFB5DA] inline-block px-4 py-1.5 brutal-border rounded-full mb-3 shadow-[2px_2px_0px_#111]">{exp.company}</p>
                      <p className="text-gray-800 font-bold text-sm mb-4 bg-[#FFC27A] px-3 py-1 inline-block brutal-border rounded-full ml-2">{exp.period}</p>
                      <p className="text-black font-medium text-base md:text-lg leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Certifications Tab */}
          {activeTab === 'certifications' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioData.certifications.map((cert, idx) => (
                <div
                  key={cert.id}
                  className="bg-white brutal-box overflow-hidden card-hover scroll-reveal opacity-0 flex flex-col"
                  data-animation="animate-scaleIn"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="h-48 w-full border-b-[3px] border-black">
                    <img
                      src={cert.image}
                      alt={cert.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between bg-white">
                    <div>
                      <h3 className="text-xl font-black mb-3 leading-tight">{cert.name}</h3>
                      <p className="text-black font-bold bg-[#C4F069] inline-block px-3 py-1 brutal-border shadow-[2px_2px_0px_#111] rounded-full text-xs mb-4">{cert.issuer}</p>
                    </div>
                    <p className="text-black font-black text-right text-lg">{cert.year}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 px-6 bg-[#FFB5DA] border-t-[3px] border-black">
        <div className="max-w-4xl mx-auto text-center">
          <div className="scroll-reveal opacity-0" data-animation="animate-slideInUp">
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-black uppercase">Let's Work Together!</h2>
            <p className="text-lg text-black font-bold mb-12 max-w-2xl mx-auto bg-white inline-block px-6 py-3 brutal-border shadow-[4px_4px_0px_#111] rotate-1">
              I am actively looking for AI Engineering internships and collaborative projects. Feel free to reach out via email or connect with me on LinkedIn!
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <a href="mailto:your.email@example.com" className="flex items-center gap-2 bg-white text-black brutal-btn hover:bg-[#FFC27A]">
                <FiMail size={24} strokeWidth={3} />
                <span className="font-black text-base">Email Me</span>
              </a>
              <a href="https://github.com/FeriMauliandi" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-black text-white brutal-btn hover:bg-white hover:text-black">
                <FiGithub size={24} strokeWidth={3} />
                <span className="font-black text-base">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/ferimauliandisaputra/" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-[#9b82f3] text-black brutal-btn hover:bg-[#C4F069]">
                <FiLinkedin size={24} strokeWidth={3} />
                <span className="font-black text-base">LinkedIn</span>
              </a>
            </div>

            <div className="bg-white brutal-box p-8 md:p-12 max-w-2xl mx-auto text-left relative bg-[#C4F069]">
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-[#FFC27A] brutal-border rounded-full flex items-center justify-center text-3xl shadow-[4px_4px_0px_#111] rotate-12">
                ✉️
              </div>
              <h3 className="text-3xl font-black mb-8 uppercase">Add more</h3>
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-6 py-4 rounded-[1.5rem] brutal-border focus:border-black focus:ring-0 outline-none transition-colors shadow-[4px_4px_0px_#111] font-bold text-lg bg-white"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-6 py-4 rounded-[1.5rem] brutal-border focus:border-black focus:ring-0 outline-none transition-colors shadow-[4px_4px_0px_#111] font-bold text-lg bg-white"
                  />
                </div>
                <div>
                  <textarea
                    rows="4"
                    placeholder="Your Message"
                    className="w-full px-6 py-4 rounded-[1.5rem] brutal-border focus:border-black focus:ring-0 outline-none transition-colors shadow-[4px_4px_0px_#111] font-bold text-lg bg-white resize-none"
                  ></textarea>
                </div>
                <button type="button" className="w-full bg-black text-white text-xl brutal-btn hover:bg-[#9b82f3] hover:text-black mt-2">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 bg-white border-t-[3px] border-black text-black">
        <div className="max-w-6xl mx-auto text-center flex flex-col items-center">
          <div className="text-4xl font-black tracking-tight mb-4 uppercase">Feri<span className="text-[#9b82f3]">.M</span></div>
          <p className="bg-[#C4F069] px-4 py-1 rounded-full brutal-border font-bold text-sm mb-8 shadow-[2px_2px_0px_#111]">Aspiring AI Engineer • Computer Engineering</p>
          <div className="flex justify-center gap-8 mb-8">
            <a href="#" className="font-bold hover:text-[#9b82f3] hover:-translate-y-1 transition-all">Privacy</a>
            <a href="#" className="font-bold hover:text-[#FFC27A] hover:-translate-y-1 transition-all">Terms</a>
            <a href="#contact" className="font-bold hover:text-[#FFB5DA] hover:-translate-y-1 transition-all">Contact</a>
          </div>
          <div className="w-24 h-1 bg-black rounded-full mb-6"></div>
          <p className="text-sm font-bold text-gray-500">© 2026 All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
import React, { useState, useEffect } from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import { FiMail, FiGithub, FiLinkedin, FiCode, FiBriefcase, FiAward, FiChevronLeft, FiChevronRight, FiMenu, FiX } from 'react-icons/fi';

import { SiJavascript, SiPython, SiFastapi, SiPytorch, SiTensorflow, SiNodedotjs, SiGithub, SiGit, SiUbuntu, SiArduino, SiNotion, SiLangchain, SiOpencv, SiPostman, SiRaspberrypi, SiDocker, SiHuggingface } from 'react-icons/si';
import { FaTerminal, FaNetworkWired, FaTools, FaDatabase, FaMicrochip, FaPlane } from 'react-icons/fa';

import fotoFeri from './assets/feri1.jpg';
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
import dietary from './assets/dietary.png';
import sertif from './assets/sertif.png';

// 1. Komponen Animasi Daun & Kelopak Bunga Berjatuhan (Ghibli Wind Effect)
const FallingLeaves = () => {
  const leaves = [
    { id: 1, left: '5%', delay: '0s', duration: '14s', size: 16, color: '#689F75', type: 'leaf' },
    { id: 2, left: '15%', delay: '3s', duration: '18s', size: 13, color: '#F4B6C2', type: 'petal' },
    { id: 3, left: '28%', delay: '7s', duration: '15s', size: 18, color: '#8AB892', type: 'leaf' },
    { id: 4, left: '42%', delay: '1.5s', duration: '16s', size: 14, color: '#E8B86D', type: 'leaf' },
    { id: 5, left: '58%', delay: '5s', duration: '19s', size: 12, color: '#F4B6C2', type: 'petal' },
    { id: 6, left: '72%', delay: '2s', duration: '13s', size: 17, color: '#4A7C59', type: 'leaf' },
    { id: 7, left: '85%', delay: '8s', duration: '17s', size: 15, color: '#8AB892', type: 'leaf' },
    { id: 8, left: '92%', delay: '4s', duration: '15s', size: 13, color: '#F4B6C2', type: 'petal' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className="absolute -top-10 opacity-75"
          style={{
            left: leaf.left,
            animation: `leaf-fall ${leaf.duration} linear ${leaf.delay} infinite`,
          }}
        >
          <svg
            width={leaf.size}
            height={leaf.size}
            viewBox="0 0 24 24"
            fill={leaf.color}
            style={{
              animation: `leaf-sway 3.5s ease-in-out ${leaf.delay} infinite alternate`,
            }}
          >
            {leaf.type === 'leaf' ? (
              <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
            ) : (
              <path d="M12,2C9,7 4,9 4,14C4,18.42 7.58,22 12,22C16.42,22 20,18.42 20,14C20,9 15,7 12,2Z" />
            )}
          </svg>
        </div>
      ))}
    </div>
  );
};

// 2. Elemen Awan Ghibli yang Lembut
const FloatingCloud = ({ delay, duration, className }) => (
  <div
    className={`absolute pointer-events-none opacity-60 ${className}`}
    style={{
      animation: `float ${duration}s ease-in-out ${delay}s infinite alternate`,
    }}
  >
    <svg viewBox="0 0 200 100" className="w-full h-full fill-white drop-shadow-[0_8px_16px_rgba(91,143,168,0.15)]">
      <path d="M 45 80 L 160 80 C 180 80 190 65 185 50 C 180 35 165 30 155 35 C 145 15 115 10 95 25 C 75 10 45 20 40 45 C 20 45 10 60 20 75 C 25 80 35 80 45 80 Z" />
    </svg>
  </div>
);

// 3. Elemen Susuwatari (Soot Sprite) + Permen Bintang (Konpeito)
const SootSprite = ({ className, delay = 0, starColor = '#F4B6C2' }) => (
  <div
    className={`fixed md:absolute z-20 pointer-events-none select-none flex items-end gap-1 ${className}`}
    style={{ animation: `float-badge 4s ease-in-out ${delay}s infinite` }}
  >
    <div className="w-10 h-10 bg-[#2A2927] rounded-full flex items-center justify-center gap-1 shadow-[0_4px_10px_rgba(0,0,0,0.2)] border-2 border-dashed border-[#1a1918] relative">
      <div className="w-3 h-3 bg-white rounded-full flex items-center justify-center">
        <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
      </div>
      <div className="w-3 h-3 bg-white rounded-full flex items-center justify-center">
        <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
      </div>
    </div>
    {/* Konpeito Star Candy */}
    <svg width="16" height="16" viewBox="0 0 24 24" fill={starColor} stroke="#3E3A35" strokeWidth="2" className="animate-spin-slow">
      <polygon points="12,2 15,9 22,9 16,14 18,21 12,17 6,21 8,14 2,9 9,9" />
    </svg>
  </div>
);

// 4. Ilustrasi SVG Perbukitan Ghibli + Kincir Angin (Pembatas Hero -> About)
const GhibliHillsDivider = () => (
  <div className="w-full overflow-hidden leading-none relative z-10 -mt-20 pointer-events-none select-none">
    <svg viewBox="0 0 1440 220" className="w-full h-[90px] sm:h-[140px] md:h-[190px] block" preserveAspectRatio="none">
      {/* Bukit Jauh (Biru Kehijauan Kabut) */}
      <path
        fill="#B5D2CB"
        d="M0,120 C240,40 480,170 720,100 C960,30 1200,130 1440,70 L1440,220 L0,220 Z"
      />
      {/* Bukit Tengah (Hijau Hutan Muda) */}
      <path
        fill="#8AB892"
        d="M0,150 C320,80 640,190 960,115 C1180,65 1320,140 1440,110 L1440,220 L0,220 Z"
      />
      {/* Siluet Kincir Angin (Nuansa The Wind Rises / Nausicaa) */}
      <g transform="translate(1120, 48)">
        <line x1="0" y1="0" x2="-4" y2="75" stroke="#3E3A35" strokeWidth="3.5" />
        <line x1="0" y1="0" x2="4" y2="75" stroke="#3E3A35" strokeWidth="3.5" />
        <g className="origin-center" style={{ animation: 'spin-slow 12s linear infinite' }}>
          <line x1="-28" y1="0" x2="28" y2="0" stroke="#3E3A35" strokeWidth="2.5" />
          <line x1="0" y1="-28" x2="0" y2="28" stroke="#3E3A35" strokeWidth="2.5" />
          <rect x="6" y="-5" width="18" height="4" fill="#FDFBF7" stroke="#3E3A35" strokeWidth="1" />
          <rect x="-24" y="1" width="18" height="4" fill="#FDFBF7" stroke="#3E3A35" strokeWidth="1" />
          <rect x="1" y="6" width="4" height="18" fill="#FDFBF7" stroke="#3E3A35" strokeWidth="1" />
          <rect x="-5" y="-24" width="4" height="18" fill="#FDFBF7" stroke="#3E3A35" strokeWidth="1" />
          <circle cx="0" cy="0" r="3.5" fill="#D66853" stroke="#3E3A35" strokeWidth="1.5" />
        </g>
      </g>
      {/* Deretan Pohon Cemara Kecil */}
      <g fill="#3A6B4C">
        <polygon points="220,105 212,132 228,132" />
        <polygon points="236,112 229,136 243,136" />
        <polygon points="890,95 882,124 898,124" />
      </g>
      {/* Bukit Depan (Menyatu dengan warna section About #EBF2EA) */}
      <path
        fill="#EBF2EA"
        stroke="#3E3A35"
        strokeWidth="2.5"
        d="M-10,185 C380,115 760,215 1140,145 C1290,118 1380,155 1450,140 L1450,225 L-10,225 Z"
      />
    </svg>
  </div>
);

// 5. Ilustrasi Roh Hutan (Kodama) + Siluet Bukit di atas Footer
const FooterGhibliScene = () => (
  <div className="w-full overflow-hidden leading-none relative z-10 bg-[#F4E3D3] pt-8 pointer-events-none select-none">
    {/* Kodama (Forest Spirits) di atas bukit */}
    <div className="max-w-6xl mx-auto px-10 flex justify-between items-end -mb-3 relative z-20">
      <div className="flex items-end gap-3">
        {/* Kodama 1 */}
        <svg width="34" height="46" viewBox="0 0 40 55" className="drop-shadow-sm" style={{ animation: 'kodama-tilt 3s ease-in-out infinite alternate' }}>
          <path d="M15,24 L13,50 L18,50 L20,38 L22,50 L27,50 L25,24 Z" fill="#FDFBF7" stroke="#3E3A35" strokeWidth="2" />
          <ellipse cx="20" cy="15" rx="13" ry="11" fill="#FDFBF7" stroke="#3E3A35" strokeWidth="2" />
          <circle cx="15" cy="13" r="2.2" fill="#2C3531" />
          <circle cx="25" cy="14" r="1.8" fill="#2C3531" />
          <ellipse cx="20" cy="20" rx="2" ry="2.5" fill="#2C3531" />
        </svg>
        {/* Kodama 2 (Kecil) */}
        <svg width="26" height="36" viewBox="0 0 40 55" className="drop-shadow-sm" style={{ animation: 'kodama-tilt 2.4s ease-in-out 1s infinite alternate-reverse' }}>
          <path d="M15,24 L14,48 L19,48 L20,38 L21,48 L26,48 L25,24 Z" fill="#FDFBF7" stroke="#3E3A35" strokeWidth="2" />
          <ellipse cx="20" cy="15" rx="12" ry="11" fill="#FDFBF7" stroke="#3E3A35" strokeWidth="2" />
          <circle cx="15" cy="14" r="2" fill="#2C3531" />
          <circle cx="24" cy="12" r="2.3" fill="#2C3531" />
          <circle cx="20" cy="19" r="1.8" fill="#2C3531" />
        </svg>
      </div>

      {/* Siluet Tunas / Daun Kecil Kanan */}
      <div className="text-2xl">🌱</div>
    </div>

    <svg viewBox="0 0 1440 90" className="w-full h-[50px] md:h-[75px] block" preserveAspectRatio="none">
      <path
        fill="#8AB892"
        d="M0,45 C360,90 720,0 1080,50 C1260,75 1360,30 1440,40 L1440,90 L0,90 Z"
      />
      <path
        fill="#FDFBF7"
        stroke="#3E3A35"
        strokeWidth="2.5"
        d="M-10,65 C420,15 840,95 1450,35 L1450,95 L-10,95 Z"
      />
    </svg>
  </div>
);

// Kartu GitHub dengan nuansa hijau hutan & kayu Ghibli
const GithubCard = ({ username }) => {
  const lastMonths = (contributions) => {
    const cutoff = new Date();
    cutoff.setMonth(cutoff.getMonth() - 10);
    return contributions.filter((day) => new Date(day.date) >= cutoff);
  };

  return (
    <div className="w-full bg-[#FDFBF7] text-[#2C3531] ghibli-box p-5 md:p-8 text-left">
      <div className="flex items-center justify-between gap-4 mb-6 flex-wrap">
        <div className="flex items-center gap-4">
          <img
            src={`https://github.com/${username}.png`}
            alt={username}
            className="w-12 h-12 rounded-full border-2 border-[#3E3A35] object-cover shadow-[2px_2px_0px_#8C7A6B]"
          />
          <span className="font-bold text-base md:text-lg text-[#2C3531] font-serif">@{username}</span>
        </div>
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noreferrer"
          className="ghibli-btn bg-[#3A6B4C] text-[#FDFBF7] inline-flex items-center gap-2 text-sm md:text-base hover:bg-[#D66853] hover:text-white"
        >
          View Profile <FiGithub size={18} strokeWidth={2.5} />
        </a>
      </div>

      <div className="overflow-x-auto pb-2">
        <GitHubCalendar
          username={username}
          colorScheme="light"
          blockSize={14}
          blockMargin={4}
          fontSize={13}
          weekStart={0}
          showWeekdayLabels
          transformData={lastMonths}
          theme={{
            light: ['#EFECE6', '#C8E0C9', '#8AB892', '#4E875E', '#2B5336'],
          }}
          labels={{
            totalCount: '{{count}} contributions in the last 10 months',
            legend: { less: 'Less', more: 'More' },
          }}
          style={{ color: '#2C3531' }}
          tooltips={{
            activity: {
              text: (activity) => {
                const date = new Date(activity.date + 'T00:00:00').toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                });
                return `${activity.count} ${activity.count === 1 ? 'contribution' : 'contributions'} on ${date}`;
              },
              placement: 'top',
              hoverRestMs: 100,
              withArrow: true,
            },
          }}
        />
      </div>
    </div>
  );
};

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
    }, 2500);
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
        className={`${project.bgColor} ghibli-box p-6 md:p-8 card-hover scroll-reveal opacity-0 flex flex-col justify-between relative overflow-hidden`}
        data-animation="animate-scaleIn"
        style={{ animationDelay: `${idx * 0.1}s` }}
      >
        <div>
          <div className="relative w-full h-56 md:h-64 rounded-[1.5rem] overflow-hidden mb-6 group bg-[#FDFBF7] ghibli-border shadow-inner">
            <img
              src={project.images[currentIndex]}
              alt={`${project.title} Slide ${currentIndex + 1}`}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 cursor-zoom-in"
              onClick={() => setIsLightboxOpen(true)}
            />

            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#2C3531]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

            {project.images.length > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-[#FDFBF7]/90 ghibli-border text-[#2C3531] p-2 rounded-full opacity-0 group-hover:opacity-100 hover:bg-[#E8B86D] transition-all z-10"
                >
                  <FiChevronLeft size={22} strokeWidth={2.5} />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#FDFBF7]/90 ghibli-border text-[#2C3531] p-2 rounded-full opacity-0 group-hover:opacity-100 hover:bg-[#E8B86D] transition-all z-10"
                >
                  <FiChevronRight size={22} strokeWidth={2.5} />
                </button>
              </>
            )}

            {project.images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {project.images.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={() => setCurrentIndex(dotIdx)}
                    className={`h-2.5 rounded-full border border-[#3E3A35] transition-all duration-300 ${currentIndex === dotIdx ? 'bg-[#3A6B4C] w-6' : 'bg-[#FDFBF7] w-2.5 hover:bg-[#E8B86D]'
                      }`}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="px-3.5 py-1 bg-[#FDFBF7]/90 ghibli-border text-[#3A6B4C] rounded-full text-xs font-bold inline-block w-fit shadow-[2px_2px_0px_rgba(62,58,53,0.12)]">
              🌿 {project.level}
            </span>
          </div>

          <h3 className="text-2xl font-bold mb-3 text-[#2C3531] tracking-tight leading-snug">{project.title}</h3>
          <p className="text-[#4A5550] font-medium mb-6 leading-relaxed text-sm md:text-base">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech, i) => (
              <span key={i} className="px-3 py-1 bg-[#FDFBF7]/80 ghibli-border rounded-full text-xs font-bold text-[#3E3A35]">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-auto pt-4 border-t-2 border-dashed border-[#3E3A35]/20">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="ghibli-btn bg-[#3A6B4C] text-[#FDFBF7] w-full sm:w-auto inline-flex items-center justify-center gap-2 hover:bg-[#D66853] hover:text-white text-sm"
          >
            <FiGithub size={18} strokeWidth={2.5} /> View Repository
          </a>
        </div>
      </div>

      {/* MODAL FULLSCREEN (LIGHTBOX) */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#2C3531]/85 backdrop-blur-md p-4 md:p-10 cursor-zoom-out"
          onClick={() => setIsLightboxOpen(false)}
        >
          <button
            className="absolute top-6 right-6 text-[#2C3531] bg-[#FDFBF7] ghibli-border hover:bg-[#D66853] hover:text-white p-3 rounded-full transition-colors z-50"
            onClick={() => setIsLightboxOpen(false)}
          >
            <FiX size={26} strokeWidth={2.5} />
          </button>

          <img
            src={project.images[currentIndex]}
            alt={`${project.title} Fullscreen`}
            loading="lazy"
            className="max-w-full max-h-full object-contain ghibli-box bg-[#FDFBF7] p-2 cursor-default animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          />

          {project.images.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 bg-[#FDFBF7] ghibli-border text-[#2C3531] p-3.5 rounded-full transition-all z-50 hover:bg-[#E8B86D]"
              >
                <FiChevronLeft size={28} strokeWidth={2.5} />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 bg-[#FDFBF7] ghibli-border text-[#2C3531] p-3.5 rounded-full transition-all z-50 hover:bg-[#E8B86D]"
              >
                <FiChevronRight size={28} strokeWidth={2.5} />
              </button>
            </>
          )}

          <div className="absolute bottom-6 text-[#2C3531] bg-[#FDFBF7] ghibli-border font-bold tracking-widest px-6 py-2 rounded-full">
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
  const [githubUsername] = useState('FeriMauliandi');

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
    { name: 'PYTHON', bg: 'bg-[#4A7C59]', text: 'text-[#FDFBF7]', icon: <SiPython /> },
    { name: 'JAVASCRIPT', bg: 'bg-[#E8B86D]', text: 'text-[#2C3531]', icon: <SiJavascript /> },
    { name: 'LANGCHAIN', bg: 'bg-[#2C4A3E]', text: 'text-[#FDFBF7]', icon: <SiLangchain /> },
    { name: 'LANGGRAPH', bg: 'bg-[#3A6B4C]', text: 'text-[#FDFBF7]', icon: <FaNetworkWired /> },
    { name: 'LANGSMITH', bg: 'bg-[#5B8FA8]', text: 'text-[#FDFBF7]', icon: <FaTools /> },
    { name: 'CHROMADB', bg: 'bg-[#D66853]', text: 'text-[#FDFBF7]', icon: <FaDatabase /> },
    { name: 'FASTAPI', bg: 'bg-[#3B7A57]', text: 'text-[#FDFBF7]', icon: <SiFastapi /> },
    { name: 'PYTORCH', bg: 'bg-[#C85A32]', text: 'text-[#FDFBF7]', icon: <SiPytorch /> },
    { name: 'TENSORFLOW', bg: 'bg-[#E08A44]', text: 'text-[#FDFBF7]', icon: <SiTensorflow /> },
    { name: 'DOCKER', bg: 'bg-[#4A89AA]', text: 'text-[#FDFBF7]', icon: <SiDocker /> },
    { name: 'HUGGING FACE', bg: 'bg-[#F2C97D]', text: 'text-[#2C3531]', icon: <SiHuggingface /> },
    { name: 'OPENCV', bg: 'bg-[#5C6B9C]', text: 'text-[#FDFBF7]', icon: <SiOpencv /> },
    { name: 'WINDOWS TERMINAL', bg: 'bg-[#524D47]', text: 'text-[#FDFBF7]', icon: <FaTerminal /> },
    { name: 'UBUNTU', bg: 'bg-[#D1603D]', text: 'text-[#FDFBF7]', icon: <SiUbuntu /> },
    { name: 'NODE.JS', bg: 'bg-[#53824B]', text: 'text-[#FDFBF7]', icon: <SiNodedotjs /> },
    { name: 'GITHUB', bg: 'bg-[#3E3A35]', text: 'text-[#FDFBF7]', icon: <SiGithub /> },
    { name: 'GIT', bg: 'bg-[#C95B3C]', text: 'text-[#FDFBF7]', icon: <SiGit /> },
    { name: 'ARDUINO', bg: 'bg-[#468284]', text: 'text-[#FDFBF7]', icon: <SiArduino /> },
    { name: 'NOTION', bg: 'bg-[#FDFBF7]', text: 'text-[#2C3531]', icon: <SiNotion /> },
    { name: 'POSTMAN', bg: 'bg-[#D97248]', text: 'text-[#FDFBF7]', icon: <SiPostman /> },
    { name: 'RASPBERRYPI', bg: 'bg-[#A84255]', text: 'text-[#FDFBF7]', icon: <SiRaspberrypi /> },
    { name: 'NVIDIA JETSON', bg: 'bg-[#6B8E23]', text: 'text-[#FDFBF7]', icon: <FaMicrochip /> },
    { name: 'ARDUPILOT', bg: 'bg-[#4F7CAC]', text: 'text-[#FDFBF7]', icon: <FaPlane /> },
  ];

  const portfolioData = {
    projects: [
      {
        id: 1,
        title: 'Chilicare: Chili Leaf Disease Detection with YOLOv11 and RAG',
        level: 'Intermediate',
        description: 'An integrated agricultural assistant. It uses YOLOv11 for disease detection and a dual-purpose LLM/RAG backend to provide detailed visual diagnosis explanations and interactive expert consultations.',
        tech: ['YOLOv11', 'Python', 'LangChain', 'ChromaDB', 'Chatbot', 'FastAPI'],
        images: [chili2],
        bgColor: 'bg-[#E6F0DC]',
        github: 'https://github.com/FeriMauliandi/Chili-Leaf-Disease-Detection-with-YOLOv11-and-LLM-Based-RAG'
      },
      {
        id: 2,
        title: 'NutriGraph AI: Nutrition Estimation with VLM + Agentic RAG',
        level: 'Intermediate',
        description: 'A Python-based Agentic RAG AI for nutritional analysis. Orchestrated with LangGraph, this multi-agent system executes text extraction, USDA API data fetching, and Advance Search (Vector + Multiquery + BM25), utilizing a cleanly decoupled architecture between a FastAPI backend and a Streamlit frontend.',
        tech: ['Python', 'LLM', 'VLM', 'LangGraph', 'Streamlit', 'FastAPI'],
        images: [dietary],
        bgColor: 'bg-[#F9E6D8]',
        github: 'https://github.com/FeriMauliandi/NutriGraph_AI-nutrition-agentic-RAG'
      },
      {
        id: 3,
        title: 'RAG Chatbot with Streamlit & FastAPI',
        level: 'Intermediate',
        description: 'A RAG-powered smart assistant for catfish farming. It extracts knowledge from local PDF documents using ChromaDB and an LLM to provide accurate, context-aware answers to user queries.',
        tech: ['LangChain', 'ChromaDB', 'Ollama', 'Python', 'FastAPI', 'Streamlit'],
        images: [lele],
        bgColor: 'bg-[#DFEEF5]',
        github: 'https://github.com/FeriMauliandi/RAG-chatbot-Streamlit-FastAPI'
      },
      {
        id: 4,
        title: 'UAVs Development (Programming, Hardware & Ground Station)',
        level: 'Advanced',
        description: 'Building, configuring, and testing UAVs (VTOL, Fixed Wing, Long endurance Low altitude) for competitive robotics, surveying and aerial mapping.',
        tech: ['Ardupilot', 'Flight Controllers', 'Jetson Nano', 'DroneKit', 'Raspberry Pi', 'Ground Station'],
        images: [drone1, drone2, drone3, drone4, drone5, drone6],
        bgColor: 'bg-[#F5EBD6]',
        github: 'https://github.com/ferimauliandisaputra'
      },
      {
        id: 5,
        title: 'LLM-based IHSG Stock Fundamental Explainer with Structured Data',
        level: 'Basic',
        description: 'An LLM-powered system that explains IHSG stock fundamental indicators using structured financial data (Yahoo Finance) and LangChain.',
        tech: ['Python', 'LLM', 'LangChain', 'yfinance', 'Streamlit'],
        images: [ihsg, ihsg1],
        bgColor: 'bg-[#F4E1E6]',
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
        color: 'bg-[#E6F0DC]'
      },
      {
        id: 2,
        role: 'Lead Programmer & Ground Station Operator',
        company: 'Seulawah Team & KRTI',
        period: '2023 - 2026',
        description: 'Active participant in Unmanned Aerial Vehicle (UAV) development, focusing on drone configuration, testing, and flight optimization.',
        color: 'bg-[#DFEEF5]'
      },
    ],
    certifications: [
      {
        id: 1,
        name: 'Finalist Kontes Robot Terbang Indonesia 2024',
        issuer: 'Pusat Prestasi Nasional',
        year: '2024',
        image: sertif
      },
      {
        id: 2,
        name: 'Introduction to Data Science with Python',
        issuer: 'DQlab',
        year: '2025',
        image: 'https://placehold.co/600x400/E6F0DC/2C3531?text=Data+Science+Cert'
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#F5F2EB] overflow-hidden text-[#2C3531] font-sans selection:bg-[#3A6B4C] selection:text-[#FDFBF7] relative">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,700;0,9..144,800;1,9..144,600&family=Quicksand:wght@500;600;700&display=swap');
        
        html {
          scroll-behavior: smooth;
          scroll-padding-top: 80px; 
        }

        body {
          font-family: 'Quicksand', sans-serif;
          margin: 0;
          padding: 0;
          background-color: #F5F2EB;
          color: #2C3531;
        }
        
        h1, h2, h3, h4, h5, h6, .font-serif {
          font-family: 'Fraunces', serif;
          letter-spacing: -0.01em;
        }
        
        @keyframes float {
          0% { transform: translate(0, 0) scale(1); }
          100% { transform: translate(25px, -12px) scale(1.04); }
        }

        @keyframes float-badge {
          0%, 100% { transform: translateY(0px) rotate(-1deg); }
          50% { transform: translateY(-8px) rotate(1.5deg); }
        }

        /* Animasi Daun & Kelopak Bunga Jatuh */
        @keyframes leaf-fall {
          0% {
            transform: translateY(-10vh) translateX(0px);
            opacity: 0;
          }
          10% {
            opacity: 0.8;
          }
          90% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(110vh) translateX(120px);
            opacity: 0;
          }
        }

        @keyframes leaf-sway {
          0% {
            transform: rotate(-25deg) scale(0.95);
          }
          100% {
            transform: rotate(35deg) scale(1.05);
          }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes kodama-tilt {
          0%, 70% { transform: rotate(0deg); }
          85% { transform: rotate(10deg); }
          100% { transform: rotate(-8deg); }
        }

        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
        
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.92); }
          to { opacity: 1; transform: scale(1); }
        }
        
        .animate-slideInUp { animation: slideInUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .animate-slideInLeft { animation: slideInLeft 0.9s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .animate-slideInRight { animation: slideInRight 0.9s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .animate-scaleIn { animation: scaleIn 0.8s cubic-bezier(0.22, 1, 0.36, 1) both; }
        
        /* Ghibli Storybook Borders & Boxes */
        .ghibli-border {
          border: 2px solid #3E3A35;
        }

        .ghibli-box {
          border: 2px solid #3E3A35;
          border-radius: 1.75rem;
          box-shadow: 0 8px 20px -4px rgba(62, 58, 53, 0.12), 4px 4px 0px #8C7A6B;
          transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .ghibli-btn {
          border: 2px solid #3E3A35;
          border-radius: 999px;
          box-shadow: 3px 3px 0px #5C5346;
          font-weight: 700;
          padding: 0.65rem 1.65rem;
          transition: all 0.25s ease;
          cursor: pointer;
        }

        .ghibli-btn:hover {
          transform: translateY(-2px);
          box-shadow: 4px 5px 0px #3E3A35;
        }
        
        .ghibli-btn:active {
          transform: translateY(2px);
          box-shadow: 1px 1px 0px #3E3A35;
        }

        .card-hover:hover {
          transform: translateY(-6px);
          box-shadow: 0 14px 28px -6px rgba(62, 58, 53, 0.18), 6px 6px 0px #5C5346;
        }

        .tech-badge {
          transition: all 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .tech-badge:hover {
          transform: translateY(-4px) scale(1.04);
          box-shadow: 3px 4px 0px #3E3A35 !important;
        }

        .social-btn {
          transition: all 0.25s ease;
        }

        .social-btn:hover {
          transform: translateY(-3px);
          box-shadow: 4px 5px 0px #3E3A35;
        }
      `}</style>

      {/* Efek Daun & Kelopak Bunga Berjatuhan */}
      <FallingLeaves />

      {/* Awan Ilustrasi Ghibli di Latar Belakang */}
      <FloatingCloud delay="0" duration="12" className="w-64 h-32 top-20 left-6" />
      <FloatingCloud delay="2" duration="16" className="w-80 h-40 top-28 right-12" />
      <FloatingCloud delay="1" duration="14" className="w-56 h-28 top-1/2 left-1/3" />

      {/* Susuwatari (Soot Sprites) + Konpeito */}
      <SootSprite className="top-24 right-8 hidden lg:flex" delay={0.5} starColor="#F4B6C2" />
      <SootSprite className="bottom-24 left-8 hidden lg:flex" delay={1.8} starColor="#E8B86D" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FDFBF7]/90 backdrop-blur-md border-b-2 border-[#3E3A35]">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold tracking-tight font-serif flex items-center gap-2 text-[#2C3531]">
              <span>🍃</span> Feri<span className="text-[#3A6B4C]">.M</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-[#2C3531] hover:text-[#3A6B4C] transition-colors font-bold">Home</a>
              <a href="#about" className="text-[#2C3531] hover:text-[#D66853] transition-colors font-bold">About</a>
              <a href="#portfolio" className="text-[#2C3531] hover:text-[#5B8FA8] transition-colors font-bold">Portfolio</a>
              <a href="#contact" className="text-[#2C3531] hover:text-[#3A6B4C] transition-colors font-bold">Contact</a>
            </div>

            <button
              className="md:hidden bg-[#E6F0DC] ghibli-border p-2 rounded-xl shadow-[2px_2px_0px_#3E3A35]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FiX size={24} strokeWidth={2.5} /> : <FiMenu size={24} strokeWidth={2.5} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#FDFBF7] border-b-2 border-[#3E3A35] flex flex-col p-6 gap-4">
            <a href="#home" onClick={() => setIsMenuOpen(false)} className="text-[#2C3531] font-bold text-lg">Home</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-[#2C3531] font-bold text-lg">About</a>
            <a href="#portfolio" onClick={() => setIsMenuOpen(false)} className="text-[#2C3531] font-bold text-lg">Portfolio</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-[#2C3531] font-bold text-lg">Contact</a>
          </div>
        )}
      </nav>

      {/* Hero Section - Langit Musim Panas Ghibli */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-5 pt-24 md:pt-20 pb-28 bg-gradient-to-b from-[#BCE0FD]/60 via-[#DFEEF5]/80 to-[#F5F2EB]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center mt-4 md:mt-0 relative z-20">
          <div className="space-y-4 md:space-y-6 scroll-reveal opacity-0" data-animation="animate-slideInLeft">
            <div className="inline-block px-4 py-2 bg-[#E6F0DC] text-[#2C3531] ghibli-border rounded-full text-xs md:text-sm font-bold shadow-[3px_3px_0px_#8C7A6B]">
              🌱 Hi, I am Feri Mauliandi Saputra
            </div>

            <h1 className="text-[42px] md:text-6xl lg:text-7xl font-bold leading-tight text-[#2C3531]">
              Junior <br />
              <span className="bg-[#FDFBF7] text-[#3A6B4C] px-4 py-1 inline-block ghibli-border rounded-2xl mt-2 shadow-[4px_4px_0px_#8C7A6B] -rotate-1">
                AI Engineer
              </span>
            </h1>

            <p className="text-sm md:text-lg text-[#3E3A35] font-semibold leading-relaxed bg-[#FDFBF7]/90 backdrop-blur-sm p-5 ghibli-border rounded-2xl shadow-[4px_4px_0px_rgba(62,58,53,0.1)]">
              Computer Engineering student passionate about Computer Vision, Generative AI, and crafting intelligent systems that harmonize software and hardware.
            </p>

            <div className="flex flex-wrap gap-2 py-1">
              <span className="px-4 py-2 bg-[#F9E6D8] ghibli-border shadow-[2px_2px_0px_#8C7A6B] text-[#2C3531] rounded-full text-xs md:text-sm font-bold">
                👁️ Computer Vision
              </span>
              <span className="px-4 py-2 bg-[#E6F0DC] ghibli-border shadow-[2px_2px_0px_#8C7A6B] text-[#2C3531] rounded-full text-xs md:text-sm font-bold">
                ✨ LLMs & RAG
              </span>
              <span className="px-4 py-2 bg-[#DFEEF5] ghibli-border shadow-[2px_2px_0px_#8C7A6B] text-[#2C3531] rounded-full text-xs md:text-sm font-bold">
                🍃 UAVs & Robotics
              </span>
            </div>

            <div className="pt-2">
              <a href="#contact" className="ghibli-btn bg-[#D66853] text-[#FDFBF7] inline-block text-base md:text-lg hover:bg-[#3A6B4C] hover:text-white">
                Let's Connect →
              </a>
            </div>
          </div>

          <div className="w-full max-w-md mx-auto transform scale-95 md:scale-105 origin-center transition-all duration-300 mt-10 md:mt-0">
            <div className="relative scroll-reveal opacity-0" data-animation="animate-slideInRight">

              {/* Bingkai Foto Utama bergaya Buku Ilustrasi Kayu */}
              <div className="relative z-10 p-3 bg-[#E8D8C8] ghibli-box">
                <div className="w-full aspect-square rounded-[1.25rem] overflow-hidden bg-[#FDFBF7] ghibli-border relative group">
                  <img
                    src={fotoFeri}
                    alt="Feri Mauliandi Saputra"
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                  />
                </div>
              </div>

              {/* Badge 1: Computer Vision */}
              <div
                className="absolute top-5 -left-4 md:-left-10 z-20 bg-[#FDFBF7] ghibli-border p-3 md:p-3.5 rounded-2xl shadow-[3px_3px_0px_#8C7A6B] flex items-center gap-3"
                style={{ animation: 'float-badge 4s ease-in-out infinite' }}
              >
                <div className="w-11 h-11 bg-[#F9E6D8] ghibli-border rounded-full flex items-center justify-center text-xl">👁️</div>
                <div className="text-left hidden sm:block">
                  <p className="text-[10px] text-[#5C5346] font-bold uppercase tracking-wider">Computer Vision</p>
                  <p className="text-[#2C3531] font-bold text-sm font-serif">YOLO & DETR</p>
                </div>
              </div>

              {/* Badge 2: Hardware / Glider */}
              <div
                className="absolute top-28 -right-4 md:-right-12 z-20 bg-[#FDFBF7] ghibli-border p-3 md:p-3.5 rounded-2xl shadow-[3px_3px_0px_#8C7A6B] flex items-center gap-3"
                style={{ animation: 'float-badge 4.5s ease-in-out 1s infinite' }}
              >
                <div className="text-right hidden sm:block">
                  <p className="text-[10px] text-[#5C5346] font-bold uppercase tracking-wider">Hardware</p>
                  <p className="text-[#2C3531] font-bold text-sm font-serif">Robotics & UAVs</p>
                </div>
                <div className="w-11 h-11 bg-[#DFEEF5] ghibli-border rounded-full flex items-center justify-center text-xl">🛩️</div>
              </div>

              {/* Badge 3: Generative AI */}
              <div
                className="absolute bottom-24 -left-4 md:-left-12 z-20 bg-[#FDFBF7] ghibli-border p-3 md:p-3.5 rounded-2xl shadow-[3px_3px_0px_#8C7A6B] flex items-center gap-3"
                style={{ animation: 'float-badge 5s ease-in-out 2s infinite' }}
              >
                <div className="w-11 h-11 bg-[#E6F0DC] ghibli-border rounded-full flex items-center justify-center text-xl">🌳</div>
                <div className="text-left hidden sm:block">
                  <p className="text-[10px] text-[#5C5346] font-bold uppercase tracking-wider">Generative AI</p>
                  <p className="text-[#2C3531] font-bold text-sm font-serif">LLMs & RAG</p>
                </div>
              </div>

              {/* Badge 4: Open for Work */}
              <div
                className="absolute -bottom-4 -right-2 md:-right-8 z-20 bg-[#E6F0DC] ghibli-border px-4 py-2.5 rounded-full shadow-[3px_3px_0px_#8C7A6B] flex items-center gap-2.5"
                style={{ animation: 'float-badge 4s ease-in-out 0.5s infinite' }}
              >
                <div className="w-3.5 h-3.5 bg-[#3A6B4C] border border-[#2C3531] rounded-full animate-pulse"></div>
                <p className="text-[#2C3531] font-bold text-xs md:text-sm tracking-tight">Open for Work & Internships</p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Ilustrasi SVG Perbukitan & Kincir Angin Ghibli */}
      <GhibliHillsDivider />

      {/* About Me Section - Nuansa Hutan Totoro (Meadow Sage) */}
      <section id="about" className="relative py-16 px-6 bg-[#EBF2EA] border-b-2 border-[#3E3A35]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 scroll-reveal opacity-0" data-animation="animate-slideInUp">
            <span className="text-sm font-bold uppercase tracking-widest text-[#3A6B4C] block mb-2">✦ Story & Background ✦</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 inline-block bg-[#FDFBF7] text-[#2C3531] px-8 py-3 ghibli-box -rotate-1">
              About Me
            </h2>

            <p className="text-base md:text-xl text-[#2C3531] font-semibold max-w-4xl mx-auto leading-relaxed mt-6 ghibli-box p-6 md:p-8 bg-[#FDFBF7] text-left md:text-center">
              Junior AI Engineer specializing in Deep Learning, computer vision (YOLOv8/v11), and building intelligent systems across Agentic AI, Multi-Agent, Multimodal, and RAG architectures. Also a UAV Researcher with 3 years of experience in autonomous drone systems using Pixhawk, ArduPilot, and PX4 — bridging cutting-edge AI with real-world hardware.
            </p>

            <div className="mt-14 pt-4 flex flex-col items-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-8 text-[#2C3531] flex items-center gap-3 bg-[#F9E6D8] px-7 py-2.5 ghibli-border rounded-full shadow-[3px_3px_0px_#8C7A6B]">
                <span>🛠️</span> Tech Stack & Tools
              </h3>

              <div className="flex flex-wrap justify-center gap-3 max-w-5xl">
                {techStack.map((tech, index) => (
                  <div
                    key={index}
                    className={`tech-badge flex items-center gap-2 px-4 py-2 ${tech.bg} ${tech.text} text-xs md:text-sm font-bold tracking-wider rounded-full ghibli-border shadow-[2px_2px_0px_#8C7A6B] cursor-default`}
                  >
                    <span className="text-base md:text-lg">{tech.icon}</span>
                    {tech.name}
                  </div>
                ))}
              </div>

              <h3 className="text-2xl md:text-3xl font-bold mt-16 mb-8 text-[#2C3531] flex items-center gap-3 bg-[#DFEEF5] px-7 py-2.5 ghibli-border rounded-full shadow-[3px_3px_0px_#8C7A6B]">
                <span>🌱</span> GitHub Contributions
              </h3>
              <div className="w-full max-w-4xl">
                <GithubCard username={githubUsername} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Showcase Section - Warm Parchment */}
      <section id="portfolio" className="relative py-20 px-6 bg-[#F5F2EB]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 scroll-reveal opacity-0" data-animation="animate-slideInUp">
            <span className="text-sm font-bold uppercase tracking-widest text-[#D66853] block mb-2">✦ Works & Chronicles ✦</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#2C3531]">Technical Journey</h2>
            <p className="text-base md:text-lg text-[#2C3531] font-semibold max-w-3xl mx-auto bg-[#FDFBF7] inline-block px-6 py-4 ghibli-box">
              Explore my latest AI projects, internships, competitive robotics experience, and technical expertise.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center gap-3 mb-12 flex-wrap scroll-reveal opacity-0" data-animation="animate-scaleIn">
            <button
              onClick={() => setActiveTab('projects')}
              className={`flex items-center gap-2 px-6 py-3 font-bold transition-all ghibli-btn ${activeTab === 'projects'
                  ? 'bg-[#3A6B4C] text-[#FDFBF7] translate-y-0.5'
                  : 'bg-[#FDFBF7] text-[#2C3531] hover:bg-[#E6F0DC]'
                }`}
            >
              <FiCode size={18} strokeWidth={2.5} />
              Projects
            </button>
            <button
              onClick={() => setActiveTab('experience')}
              className={`flex items-center gap-2 px-6 py-3 font-bold transition-all ghibli-btn ${activeTab === 'experience'
                  ? 'bg-[#3A6B4C] text-[#FDFBF7] translate-y-0.5'
                  : 'bg-[#FDFBF7] text-[#2C3531] hover:bg-[#E6F0DC]'
                }`}
            >
              <FiBriefcase size={18} strokeWidth={2.5} />
              Experience
            </button>
            <button
              onClick={() => setActiveTab('certifications')}
              className={`flex items-center gap-2 px-6 py-3 font-bold transition-all ghibli-btn ${activeTab === 'certifications'
                  ? 'bg-[#3A6B4C] text-[#FDFBF7] translate-y-0.5'
                  : 'bg-[#FDFBF7] text-[#2C3531] hover:bg-[#E6F0DC]'
                }`}
            >
              <FiAward size={18} strokeWidth={2.5} />
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
                  className="bg-[#FDFBF7] ghibli-box p-8 card-hover scroll-reveal opacity-0"
                  data-animation="animate-slideInLeft"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="flex items-start gap-6 flex-col md:flex-row">
                    <div className={`w-16 h-16 ${exp.color} ghibli-border rounded-2xl flex items-center justify-center text-3xl shrink-0 shadow-[3px_3px_0px_#8C7A6B]`}>
                      💼
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold mb-2 text-[#2C3531] leading-tight">{exp.role}</h3>
                      <div className="flex flex-wrap items-center gap-2 mb-4">
                        <span className="text-sm font-bold bg-[#F9E6D8] px-4 py-1 ghibli-border rounded-full">
                          {exp.company}
                        </span>
                        <span className="text-[#3E3A35] font-bold text-xs bg-[#E6F0DC] px-3 py-1 ghibli-border rounded-full">
                          🗓️ {exp.period}
                        </span>
                      </div>
                      <p className="text-[#4A5550] font-medium text-base leading-relaxed">{exp.description}</p>
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
                  className="bg-[#FDFBF7] ghibli-box overflow-hidden card-hover scroll-reveal opacity-0 flex flex-col"
                  data-animation="animate-scaleIn"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="h-48 w-full border-b-2 border-[#3E3A35]">
                    <img
                      src={cert.image}
                      alt={cert.name}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between bg-[#FDFBF7]">
                    <div>
                      <h3 className="text-xl font-bold mb-3 leading-snug text-[#2C3531]">{cert.name}</h3>
                      <p className="text-[#2C3531] font-bold bg-[#E6F0DC] inline-block px-3 py-1 ghibli-border rounded-full text-xs mb-4">
                        {cert.issuer}
                      </p>
                    </div>
                    <p className="text-[#3A6B4C] font-bold text-right text-lg font-serif">{cert.year}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact Section - Warm Sunset Meadow */}
      <section id="contact" className="relative pt-20 pb-8 px-6 bg-[#F4E3D3] border-t-2 border-[#3E3A35]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="scroll-reveal opacity-0" data-animation="animate-slideInUp">
            <span className="text-sm font-bold uppercase tracking-widest text-[#D66853] block mb-2">✦ Send a Postcard ✦</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#2C3531]">Let's Work Together!</h2>
            <p className="text-base md:text-lg text-[#2C3531] font-semibold mb-10 max-w-2xl mx-auto bg-[#FDFBF7] inline-block px-6 py-4 ghibli-box">
              I am actively looking for AI Engineering internships and collaborative projects. Feel free to reach out via email or connect with me on LinkedIn!
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-14">
              <a href="mailto:your.email@example.com" className="social-btn flex items-center gap-2 bg-[#FDFBF7] text-[#2C3531] ghibli-btn hover:bg-[#E8B86D]">
                <FiMail size={20} strokeWidth={2.5} />
                <span className="font-bold text-base">Email Me</span>
              </a>
              <a href="https://github.com/FeriMauliandi" target="_blank" rel="noreferrer" className="social-btn flex items-center gap-2 bg-[#3E3A35] text-[#FDFBF7] ghibli-btn hover:bg-[#3A6B4C]">
                <FiGithub size={20} strokeWidth={2.5} />
                <span className="font-bold text-base">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/ferimauliandisaputra/" target="_blank" rel="noreferrer" className="social-btn flex items-center gap-2 bg-[#5B8FA8] text-[#FDFBF7] ghibli-btn hover:bg-[#3A6B4C]">
                <FiLinkedin size={20} strokeWidth={2.5} />
                <span className="font-bold text-base">LinkedIn</span>
              </a>
            </div>

            <div className="bg-[#FDFBF7] ghibli-box p-8 md:p-12 max-w-2xl mx-auto text-left relative">
              <div className="absolute -top-6 -right-4 w-14 h-14 bg-[#E6F0DC] ghibli-border rounded-full flex items-center justify-center text-2xl shadow-[3px_3px_0px_#8C7A6B] rotate-12">
                🕊️
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#2C3531]">Send a Message</h3>
              <form className="space-y-5">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-5 py-3.5 rounded-2xl ghibli-border focus:border-[#3A6B4C] focus:ring-0 outline-none transition-colors shadow-[2px_2px_0px_#8C7A6B] font-semibold text-base bg-[#F5F2EB]/60"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-5 py-3.5 rounded-2xl ghibli-border focus:border-[#3A6B4C] focus:ring-0 outline-none transition-colors shadow-[2px_2px_0px_#8C7A6B] font-semibold text-base bg-[#F5F2EB]/60"
                  />
                </div>
                <div>
                  <textarea
                    rows="4"
                    placeholder="Write your message here..."
                    className="w-full px-5 py-3.5 rounded-2xl ghibli-border focus:border-[#3A6B4C] focus:ring-0 outline-none transition-colors shadow-[2px_2px_0px_#8C7A6B] font-semibold text-base bg-[#F5F2EB]/60 resize-none"
                  ></textarea>
                </div>
                <button
                  type="button"
                  className="w-full bg-[#3A6B4C] text-[#FDFBF7] text-lg ghibli-btn hover:bg-[#D66853] mt-2"
                >
                  Send Message 🍃
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Siluet Bukit & Roh Hutan (Kodama) sebelum Footer */}
      <FooterGhibliScene />

      {/* Footer */}
      <footer className="relative py-12 px-6 bg-[#FDFBF7] text-[#2C3531]">
        <div className="max-w-6xl mx-auto text-center flex flex-col items-center">
          <div className="text-3xl font-bold tracking-tight mb-3 font-serif">
            🍃 Feri<span className="text-[#3A6B4C]">.M</span>
          </div>
          <p className="bg-[#E6F0DC] px-5 py-1.5 rounded-full ghibli-border font-bold text-xs md:text-sm mb-6 shadow-[2px_2px_0px_#8C7A6B]">
            Aspiring AI Engineer • Computer Engineering
          </p>
          <div className="flex justify-center gap-8 mb-6">
            <a href="#home" className="font-bold hover:text-[#3A6B4C] hover:-translate-y-0.5 transition-all">Home</a>
            <a href="#portfolio" className="font-bold hover:text-[#D66853] hover:-translate-y-0.5 transition-all">Portfolio</a>
            <a href="#contact" className="font-bold hover:text-[#5B8FA8] hover:-translate-y-0.5 transition-all">Contact</a>
          </div>
          <div className="w-20 h-0.5 bg-[#8C7A6B]/40 rounded-full mb-5"></div>
          <p className="text-xs font-bold text-[#6E6A63]">© 2026 Feri Mauliandi Saputra. Crafted with Studio Ghibli vibes.</p>
        </div>
      </footer>
    </div>
  );
}
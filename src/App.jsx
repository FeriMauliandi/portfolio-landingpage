import React, { useState, useEffect } from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import { FiMail, FiGithub, FiLinkedin, FiCode, FiBriefcase, FiAward, FiChevronLeft, FiChevronRight, FiMenu, FiX, FiCompass, FiCpu, FiNavigation } from 'react-icons/fi';

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

// 1. Komponen Animasi Angin Sepoi-Sepoi & Glider Kertas (Ghibli Aviation Breeze)
const GentleBreeze = () => {
  const gusts = [
    { id: 1, top: '16%', delay: '0s', duration: '8s', scale: 1 },
    { id: 2, top: '44%', delay: '3s', duration: '10s', scale: 0.9 },
    { id: 3, top: '70%', delay: '1.5s', duration: '9s', scale: 1.1 },
    { id: 4, top: '85%', delay: '5s', duration: '11s', scale: 0.85 },
  ];

  const gliders = [
    { id: 1, top: '22%', delay: '2s', duration: '18s' },
    { id: 2, top: '62%', delay: '9s', duration: '22s' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
      {/* Garis Aliran Angin (Aerodynamic Wind Lines) */}
      {gusts.map((gust) => (
        <div
          key={gust.id}
          className="absolute -left-64 w-full"
          style={{
            top: gust.top,
            transform: `scale(${gust.scale})`,
            animation: `breeze-drift ${gust.duration} ease-in-out ${gust.delay} infinite`,
          }}
        >
          <svg width="380" height="80" viewBox="0 0 380 80" fill="none">
            <path
              d="M10,45 Q120,15 230,45 T350,30"
              stroke="#FFFFFF"
              strokeWidth="2.5"
              strokeLinecap="round"
              className="breeze-path opacity-75"
              style={{ animationDelay: gust.delay }}
            />
            <path
              d="M45,60 Q150,35 255,60 T365,48"
              stroke="#52B788"
              strokeWidth="1.8"
              strokeLinecap="round"
              className="breeze-path opacity-45"
              style={{ animationDelay: gust.delay }}
            />
          </svg>
        </div>
      ))}

      {/* Siluet Glider Kecil Melayang Mengikuti Angin (Ala The Wind Rises) */}
      {gliders.map((glider) => (
        <div
          key={`glider-${glider.id}`}
          className="absolute -left-16"
          style={{
            top: glider.top,
            animation: `seed-float ${glider.duration} linear ${glider.delay} infinite`,
          }}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="#FFFDF7" stroke="#1E2D24" strokeWidth="1.5" className="drop-shadow-sm opacity-85">
            <path d="M22 2L11 13" />
            <path d="M22 2L15 22L11 13L2 9L22 2Z" />
          </svg>
        </div>
      ))}
    </div>
  );
};

// 2. Komponen Daun Hutan Segar (Tanpa Kelopak Bunga Pink)
const FallingLeaves = () => {
  const leaves = [
    { id: 1, left: '4%', delay: '0s', duration: '13s', size: 16, color: '#2D6A4F' },
    { id: 2, left: '16%', delay: '2.5s', duration: '16s', size: 14, color: '#52B788' },
    { id: 3, left: '29%', delay: '6s', duration: '14s', size: 18, color: '#40916C' },
    { id: 4, left: '43%', delay: '1.2s', duration: '15s', size: 15, color: '#E9C46A' },
    { id: 5, left: '58%', delay: '4.5s', duration: '17s', size: 14, color: '#52B788' },
    { id: 6, left: '71%', delay: '2s', duration: '12s', size: 17, color: '#2D6A4F' },
    { id: 7, left: '84%', delay: '7.5s', duration: '16s', size: 15, color: '#74C69D' },
    { id: 8, left: '93%', delay: '3.8s', duration: '14s', size: 14, color: '#E07A5F' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className="absolute -top-10 opacity-80"
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
              animation: `leaf-sway 3s ease-in-out ${leaf.delay} infinite alternate`,
            }}
          >
            <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
          </svg>
        </div>
      ))}
    </div>
  );
};

// 3. Elemen Awan Kumulus Ghibli
const FloatingCloud = ({ delay, duration, className }) => (
  <div
    className={`absolute pointer-events-none opacity-85 ${className}`}
    style={{
      animation: `float ${duration}s ease-in-out ${delay}s infinite alternate`,
    }}
  >
    <svg viewBox="0 0 200 100" className="w-full h-full fill-white drop-shadow-[0_10px_18px_rgba(29,53,87,0.1)]">
      <path d="M 45 80 L 160 80 C 180 80 190 65 185 50 C 180 35 165 30 155 35 C 145 15 115 10 95 25 C 75 10 45 20 40 45 C 20 45 10 60 20 75 C 25 80 35 80 45 80 Z" />
    </svg>
  </div>
);

// 4. Ilustrasi Perbukitan Pedesaan Ghibli, Pohon Cemara & Kincir Angin
const GhibliHillsDivider = () => (
  <div className="w-full overflow-hidden leading-none relative z-10 -mt-24 pointer-events-none select-none">
    <svg viewBox="0 0 1440 230" className="w-full h-[100px] sm:h-[150px] md:h-[200px] block" preserveAspectRatio="none">
      {/* Bukit Jauh (Biru Langit Gunung) */}
      <path
        fill="#8ECAE6"
        opacity="0.55"
        d="M0,120 C240,40 480,170 720,100 C960,30 1200,130 1440,70 L1440,230 L0,230 Z"
      />
      {/* Bukit Tengah (Hijau Hutan Segar) */}
      <path
        fill="#52B788"
        d="M0,150 C320,80 640,190 960,115 C1180,65 1320,140 1440,110 L1440,230 L0,230 Z"
      />
      {/* Kincir Angin / Menara Angin Berputar */}
      <g transform="translate(1120, 48)">
        <line x1="0" y1="0" x2="-4" y2="75" stroke="#1E2D24" strokeWidth="3.5" />
        <line x1="0" y1="0" x2="4" y2="75" stroke="#1E2D24" strokeWidth="3.5" />
        <g className="origin-center" style={{ animation: 'spin-slow 8s linear infinite' }}>
          <line x1="-28" y1="0" x2="28" y2="0" stroke="#1E2D24" strokeWidth="2.5" />
          <line x1="0" y1="-28" x2="0" y2="28" stroke="#1E2D24" strokeWidth="2.5" />
          <rect x="6" y="-5" width="18" height="4" fill="#FFFDF7" stroke="#1E2D24" strokeWidth="1" />
          <rect x="-24" y="1" width="18" height="4" fill="#FFFDF7" stroke="#1E2D24" strokeWidth="1" />
          <rect x="1" y="6" width="4" height="18" fill="#FFFDF7" stroke="#1E2D24" strokeWidth="1" />
          <rect x="-5" y="-24" width="4" height="18" fill="#FFFDF7" stroke="#1E2D24" strokeWidth="1" />
          <circle cx="0" cy="0" r="4" fill="#E07A5F" stroke="#1E2D24" strokeWidth="1.5" />
        </g>
      </g>
      {/* Deretan Pohon Pinus/Cemara */}
      <g fill="#1B4332" className="animate-grass-sway">
        <polygon points="220,98 208,134 232,134" />
        <polygon points="240,106 230,138 250,138" />
        <polygon points="890,90 878,126 902,126" />
        <polygon points="910,100 900,128 920,128" />
      </g>
      {/* Rumput Padang yang Bergoyang Ditiup Angin */}
      <g stroke="#1B4332" strokeWidth="2.5" strokeLinecap="round" fill="none" className="animate-grass-sway">
        <path d="M140,175 Q148,155 156,148" />
        <path d="M145,175 Q142,158 135,152" />
        <path d="M520,178 Q530,158 538,150" />
        <path d="M526,178 Q522,162 516,154" />
        <path d="M1020,158 Q1028,140 1036,134" />
      </g>
      {/* Bukit Depan (Menyatu dengan warna section About #E6F4EA) */}
      <path
        fill="#E6F4EA"
        stroke="#1E2D24"
        strokeWidth="2.5"
        d="M-10,185 C380,115 760,215 1140,145 C1290,118 1380,155 1450,140 L1450,235 L-10,235 Z"
      />
    </svg>
  </div>
);

// 5. Ilustrasi Roh Hutan (Kodama) + Perbukitan di atas Footer
const FooterGhibliScene = () => (
  <div className="w-full overflow-hidden leading-none relative z-10 bg-[#F3E9D2] pt-8 pointer-events-none select-none">
    <div className="max-w-6xl mx-auto px-10 flex justify-between items-end -mb-3 relative z-20">
      <div className="flex items-end gap-3">
        <svg width="34" height="46" viewBox="0 0 40 55" className="drop-shadow-sm" style={{ animation: 'kodama-tilt 3s ease-in-out infinite alternate' }}>
          <path d="M15,24 L13,50 L18,50 L20,38 L22,50 L27,50 L25,24 Z" fill="#FFFDF7" stroke="#1E2D24" strokeWidth="2" />
          <ellipse cx="20" cy="15" rx="13" ry="11" fill="#FFFDF7" stroke="#1E2D24" strokeWidth="2" />
          <circle cx="15" cy="13" r="2.2" fill="#1E2D24" />
          <circle cx="25" cy="14" r="1.8" fill="#1E2D24" />
          <ellipse cx="20" cy="20" rx="2" ry="2.5" fill="#1E2D24" />
        </svg>
        <svg width="26" height="36" viewBox="0 0 40 55" className="drop-shadow-sm" style={{ animation: 'kodama-tilt 2.4s ease-in-out 1s infinite alternate-reverse' }}>
          <path d="M15,24 L14,48 L19,48 L20,38 L21,48 L26,48 L25,24 Z" fill="#FFFDF7" stroke="#1E2D24" strokeWidth="2" />
          <ellipse cx="20" cy="15" rx="12" ry="11" fill="#FFFDF7" stroke="#1E2D24" strokeWidth="2" />
          <circle cx="15" cy="14" r="2" fill="#1E2D24" />
          <circle cx="24" cy="12" r="2.3" fill="#1E2D24" />
          <circle cx="20" cy="19" r="1.8" fill="#1E2D24" />
        </svg>
      </div>
      <div className="text-2xl animate-grass-sway">🌲🍃</div>
    </div>

    <svg viewBox="0 0 1440 90" className="w-full h-[50px] md:h-[75px] block" preserveAspectRatio="none">
      <path
        fill="#52B788"
        d="M0,45 C360,90 720,0 1080,50 C1260,75 1360,30 1440,40 L1440,90 L0,90 Z"
      />
      <path
        fill="#FFFDF7"
        stroke="#1E2D24"
        strokeWidth="2.5"
        d="M-10,65 C420,15 840,95 1450,35 L1450,95 L-10,95 Z"
      />
    </svg>
  </div>
);

// Kartu GitHub
const GithubCard = ({ username }) => {
  const lastMonths = (contributions) => {
    const cutoff = new Date();
    cutoff.setMonth(cutoff.getMonth() - 10);
    return contributions.filter((day) => new Date(day.date) >= cutoff);
  };

  return (
    <div className="w-full bg-[#FFFDF7] text-[#1E2D24] ghibli-box p-5 md:p-8 text-left">
      <div className="flex items-center justify-between gap-4 mb-6 flex-wrap">
        <div className="flex items-center gap-4">
          <img
            src={`https://github.com/${username}.png`}
            alt={username}
            className="w-12 h-12 rounded-xl border-2 border-[#1E2D24] object-cover shadow-[3px_3px_0px_#2D6A4F]"
          />
          <span className="font-bold text-base md:text-lg text-[#1E2D24] font-serif">@{username}</span>
        </div>
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noreferrer"
          className="ghibli-btn bg-[#2D6A4F] text-[#FFFDF7] inline-flex items-center gap-2 text-sm md:text-base hover:bg-[#E07A5F] hover:text-white"
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
            light: ['#E6F4EA', '#B7E4C7', '#52B788', '#2D6A4F', '#1B4332'],
          }}
          labels={{
            totalCount: '{{count}} contributions in the last 10 months',
            legend: { less: 'Less', more: 'More' },
          }}
          style={{ color: '#1E2D24' }}
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
          <div className="relative w-full h-56 md:h-64 rounded-2xl overflow-hidden mb-6 group bg-[#FFFDF7] ghibli-border shadow-inner">
            <img
              src={project.images[currentIndex]}
              alt={`${project.title} Slide ${currentIndex + 1}`}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 cursor-zoom-in"
              onClick={() => setIsLightboxOpen(true)}
            />

            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#1E2D24]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

            {project.images.length > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-[#FFFDF7]/95 ghibli-border text-[#1E2D24] p-2 rounded-xl opacity-0 group-hover:opacity-100 hover:bg-[#E9C46A] transition-all z-10"
                >
                  <FiChevronLeft size={22} strokeWidth={2.5} />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#FFFDF7]/95 ghibli-border text-[#1E2D24] p-2 rounded-xl opacity-0 group-hover:opacity-100 hover:bg-[#E9C46A] transition-all z-10"
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
                    className={`h-2.5 rounded-full border border-[#1E2D24] transition-all duration-300 ${currentIndex === dotIdx ? 'bg-[#2D6A4F] w-6' : 'bg-[#FFFDF7] w-2.5 hover:bg-[#E9C46A]'
                      }`}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="px-3.5 py-1 bg-[#FFFDF7] ghibli-border text-[#2D6A4F] rounded-lg text-xs font-extrabold inline-block w-fit shadow-[2px_2px_0px_#52B788] uppercase tracking-wider">
              ⚙️ {project.level}
            </span>
          </div>

          <h3 className="text-2xl font-bold mb-3 text-[#1E2D24] tracking-tight leading-snug">{project.title}</h3>
          <p className="text-[#2F3E35] font-semibold mb-6 leading-relaxed text-sm md:text-base">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech, i) => (
              <span key={i} className="px-3 py-1 bg-[#FFFDF7] ghibli-border rounded-lg text-xs font-bold text-[#1E2D24] shadow-[1px_2px_0px_rgba(30,45,36,0.15)]">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-auto pt-4 border-t-2 border-dashed border-[#1E2D24]/20">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="ghibli-btn bg-[#2D6A4F] text-[#FFFDF7] w-full sm:w-auto inline-flex items-center justify-center gap-2 hover:bg-[#E07A5F] hover:text-white text-sm"
          >
            <FiGithub size={18} strokeWidth={2.5} /> View Repository
          </a>
        </div>
      </div>

      {/* MODAL FULLSCREEN (LIGHTBOX) */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1E2D24]/85 backdrop-blur-md p-4 md:p-10 cursor-zoom-out"
          onClick={() => setIsLightboxOpen(false)}
        >
          <button
            className="absolute top-6 right-6 text-[#1E2D24] bg-[#FFFDF7] ghibli-border hover:bg-[#E07A5F] hover:text-white p-3 rounded-xl transition-colors z-50"
            onClick={() => setIsLightboxOpen(false)}
          >
            <FiX size={26} strokeWidth={2.5} />
          </button>

          <img
            src={project.images[currentIndex]}
            alt={`${project.title} Fullscreen`}
            loading="lazy"
            className="max-w-full max-h-full object-contain ghibli-box bg-[#FFFDF7] p-2 cursor-default animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          />

          {project.images.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 bg-[#FFFDF7] ghibli-border text-[#1E2D24] p-3.5 rounded-xl transition-all z-50 hover:bg-[#E9C46A]"
              >
                <FiChevronLeft size={28} strokeWidth={2.5} />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 bg-[#FFFDF7] ghibli-border text-[#1E2D24] p-3.5 rounded-xl transition-all z-50 hover:bg-[#E9C46A]"
              >
                <FiChevronRight size={28} strokeWidth={2.5} />
              </button>
            </>
          )}

          <div className="absolute bottom-6 text-[#1E2D24] bg-[#FFFDF7] ghibli-border font-bold tracking-widest px-6 py-2 rounded-xl">
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

  // Tech stack dengan warna segar & maskulin (Forest, Cobalt, Amber, Slate)
  const techStack = [
    { name: 'PYTHON', bg: 'bg-[#2B6CB0]', text: 'text-[#FFFDF7]', icon: <SiPython /> },
    { name: 'JAVASCRIPT', bg: 'bg-[#E9C46A]', text: 'text-[#1E2D24]', icon: <SiJavascript /> },
    { name: 'LANGCHAIN', bg: 'bg-[#1B4332]', text: 'text-[#FFFDF7]', icon: <SiLangchain /> },
    { name: 'LANGGRAPH', bg: 'bg-[#2D6A4F]', text: 'text-[#FFFDF7]', icon: <FaNetworkWired /> },
    { name: 'LANGSMITH', bg: 'bg-[#3B7A57]', text: 'text-[#FFFDF7]', icon: <FaTools /> },
    { name: 'CHROMADB', bg: 'bg-[#E07A5F]', text: 'text-[#FFFDF7]', icon: <FaDatabase /> },
    { name: 'FASTAPI', bg: 'bg-[#2A9D8F]', text: 'text-[#FFFDF7]', icon: <SiFastapi /> },
    { name: 'PYTORCH', bg: 'bg-[#D95D39]', text: 'text-[#FFFDF7]', icon: <SiPytorch /> },
    { name: 'TENSORFLOW', bg: 'bg-[#F4A261]', text: 'text-[#1E2D24]', icon: <SiTensorflow /> },
    { name: 'DOCKER', bg: 'bg-[#3182CE]', text: 'text-[#FFFDF7]', icon: <SiDocker /> },
    { name: 'HUGGING FACE', bg: 'bg-[#E9C46A]', text: 'text-[#1E2D24]', icon: <SiHuggingface /> },
    { name: 'OPENCV', bg: 'bg-[#2C5282]', text: 'text-[#FFFDF7]', icon: <SiOpencv /> },
    { name: 'WINDOWS TERMINAL', bg: 'bg-[#2D3748]', text: 'text-[#FFFDF7]', icon: <FaTerminal /> },
    { name: 'UBUNTU', bg: 'bg-[#DD6B20]', text: 'text-[#FFFDF7]', icon: <SiUbuntu /> },
    { name: 'NODE.JS', bg: 'bg-[#38A169]', text: 'text-[#FFFDF7]', icon: <SiNodedotjs /> },
    { name: 'GITHUB', bg: 'bg-[#1E2D24]', text: 'text-[#FFFDF7]', icon: <SiGithub /> },
    { name: 'GIT', bg: 'bg-[#C05621]', text: 'text-[#FFFDF7]', icon: <SiGit /> },
    { name: 'ARDUINO', bg: 'bg-[#2A9D8F]', text: 'text-[#FFFDF7]', icon: <SiArduino /> },
    { name: 'NOTION', bg: 'bg-[#FFFDF7]', text: 'text-[#1E2D24]', icon: <SiNotion /> },
    { name: 'POSTMAN', bg: 'bg-[#ED8936]', text: 'text-[#1E2D24]', icon: <SiPostman /> },
    { name: 'RASPBERRYPI', bg: 'bg-[#9B2C2C]', text: 'text-[#FFFDF7]', icon: <SiRaspberrypi /> },
    { name: 'NVIDIA JETSON', bg: 'bg-[#52B788]', text: 'text-[#1E2D24]', icon: <FaMicrochip /> },
    { name: 'ARDUPILOT', bg: 'bg-[#1E4E8C]', text: 'text-[#FFFDF7]', icon: <FaPlane /> },
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
        bgColor: 'bg-[#D8F3DC]', // Hijau Hutan Muda Segar
        github: 'https://github.com/FeriMauliandi/Chili-Leaf-Disease-Detection-with-YOLOv11-and-LLM-Based-RAG'
      },
      {
        id: 2,
        title: 'NutriGraph AI: Nutrition Estimation with VLM + Agentic RAG',
        level: 'Intermediate',
        description: 'A Python-based Agentic RAG AI for nutritional analysis. Orchestrated with LangGraph, this multi-agent system executes text extraction, USDA API data fetching, and Advance Search (Vector + Multiquery + BM25), utilizing a cleanly decoupled architecture between a FastAPI backend and a Streamlit frontend.',
        tech: ['Python', 'LLM', 'VLM', 'LangGraph', 'Streamlit', 'FastAPI'],
        images: [dietary],
        bgColor: 'bg-[#FDEEDC]', // Warm Sand / Amber Muda
        github: 'https://github.com/FeriMauliandi/NutriGraph_AI-nutrition-agentic-RAG'
      },
      {
        id: 3,
        title: 'RAG Chatbot with Streamlit & FastAPI',
        level: 'Intermediate',
        description: 'A RAG-powered smart assistant for catfish farming. It extracts knowledge from local PDF documents using ChromaDB and an LLM to provide accurate, context-aware answers to user queries.',
        tech: ['LangChain', 'ChromaDB', 'Ollama', 'Python', 'FastAPI', 'Streamlit'],
        images: [lele],
        bgColor: 'bg-[#DDF2FD]', // Biru Langit Dirgantara Cerah
        github: 'https://github.com/FeriMauliandi/RAG-chatbot-Streamlit-FastAPI'
      },
      {
        id: 4,
        title: 'UAVs Development (Programming, Hardware & Ground Station)',
        level: 'Advanced',
        description: 'Building, configuring, and testing UAVs (VTOL, Fixed Wing, Long endurance Low altitude) for competitive robotics, surveying and aerial mapping.',
        tech: ['Ardupilot', 'Flight Controllers', 'Jetson Nano', 'DroneKit', 'Raspberry Pi', 'Ground Station'],
        images: [drone1, drone2, drone3, drone4, drone5, drone6],
        bgColor: 'bg-[#F3E9D2]', // Khaki Kertas Peta Ekspedisi
        github: 'https://github.com/ferimauliandisaputra'
      },
      {
        id: 5,
        title: 'LLM-based IHSG Stock Fundamental Explainer with Structured Data',
        level: 'Basic',
        description: 'An LLM-powered system that explains IHSG stock fundamental indicators using structured financial data (Yahoo Finance) and LangChain.',
        tech: ['Python', 'LLM', 'LangChain', 'yfinance', 'Streamlit'],
        images: [ihsg, ihsg1],
        bgColor: 'bg-[#E2ECE9]', // Sage Slate Segar
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
        color: 'bg-[#D8F3DC]'
      },
      {
        id: 2,
        role: 'Lead Programmer & Ground Station Operator',
        company: 'Seulawah Team & KRTI',
        period: '2023 - 2026',
        description: 'Active participant in Unmanned Aerial Vehicle (UAV) development, focusing on drone configuration, testing, and flight optimization.',
        color: 'bg-[#FDEEDC]'
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
        image: 'https://placehold.co/600x400/D8F3DC/1E2D24?text=Data+Science+Cert'
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#FFFDF7] overflow-hidden text-[#1E2D24] font-sans selection:bg-[#2D6A4F] selection:text-[#FFFDF7] relative">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,600;0,9..144,700;0,9..144,800;1,9..144,600&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');
        
        html {
          scroll-behavior: smooth;
          scroll-padding-top: 80px; 
        }

        body {
          font-family: 'Plus Jakarta Sans', sans-serif;
          margin: 0;
          padding: 0;
          background-color: #FFFDF7;
          color: #1E2D24;
        }
        
        h1, h2, h3, h4, h5, h6, .font-serif {
          font-family: 'Fraunces', serif;
          letter-spacing: -0.01em;
        }
        
        @keyframes float {
          0% { transform: translate(0, 0) scale(1); }
          100% { transform: translate(28px, -12px) scale(1.04); }
        }

        @keyframes float-badge {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-7px); }
        }

        @keyframes breeze-drift {
          0% { transform: translateX(-20vw) translateY(0px); opacity: 0; }
          20% { opacity: 0.85; }
          80% { opacity: 0.85; }
          100% { transform: translateX(115vw) translateY(-25px); opacity: 0; }
        }

        @keyframes breeze-draw {
          0% { stroke-dasharray: 0 400; stroke-dashoffset: 0; }
          50% { stroke-dasharray: 220 400; stroke-dashoffset: -60; }
          100% { stroke-dasharray: 0 400; stroke-dashoffset: -360; }
        }

        .breeze-path {
          animation: breeze-draw 5s ease-in-out infinite;
        }

        @keyframes seed-float {
          0% { transform: translateX(-10vw) translateY(0px) rotate(-5deg); opacity: 0; }
          15% { opacity: 0.9; }
          50% { transform: translateX(50vw) translateY(-35px) rotate(8deg); }
          85% { opacity: 0.9; }
          100% { transform: translateX(110vw) translateY(-10px) rotate(-5deg); opacity: 0; }
        }

        @keyframes grass-sway {
          0% { transform: skewX(-4deg); }
          100% { transform: skewX(6deg); }
        }

        .animate-grass-sway {
          transform-origin: bottom center;
          animation: grass-sway 3.2s ease-in-out infinite alternate;
        }

        @keyframes leaf-fall {
          0% { transform: translateY(-10vh) translateX(0px); opacity: 0; }
          10% { opacity: 0.85; }
          90% { opacity: 0.85; }
          100% { transform: translateY(110vh) translateX(180px); opacity: 0; }
        }

        @keyframes leaf-sway {
          0% { transform: rotate(-25deg) scale(0.95); }
          100% { transform: rotate(35deg) scale(1.05); }
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
          animation: spin-slow 12s linear infinite;
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
        
        .ghibli-border {
          border: 2px solid #1E2D24;
        }

        .ghibli-box {
          border: 2px solid #1E2D24;
          border-radius: 1.25rem;
          box-shadow: 0 10px 24px -4px rgba(29, 53, 87, 0.12), 4px 4px 0px #2D6A4F;
          transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .ghibli-btn {
          border: 2px solid #1E2D24;
          border-radius: 0.85rem;
          box-shadow: 3px 3px 0px #1E2D24;
          font-weight: 700;
          padding: 0.7rem 1.65rem;
          transition: all 0.25s ease;
          cursor: pointer;
        }

        .ghibli-btn:hover {
          transform: translateY(-2px);
          box-shadow: 4px 5px 0px #1E2D24;
        }
        
        .ghibli-btn:active {
          transform: translateY(2px);
          box-shadow: 1px 1px 0px #1E2D24;
        }

        .card-hover:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 32px -6px rgba(45, 106, 79, 0.25), 6px 6px 0px #1E2D24;
        }

        .tech-badge {
          transition: all 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .tech-badge:hover {
          transform: translateY(-4px) scale(1.04);
          box-shadow: 3px 4px 0px #1E2D24 !important;
        }

        .social-btn {
          transition: all 0.25s ease;
        }

        .social-btn:hover {
          transform: translateY(-3px);
          box-shadow: 4px 5px 0px #1E2D24;
        }
      `}</style>

      {/* Efek Angin Sepoi-Sepoi & Daun Hutan Segar */}
      <GentleBreeze />
      <FallingLeaves />

      {/* Awan Kumulus Putih Cerah */}
      <FloatingCloud delay="0" duration="12" className="w-64 h-32 top-20 left-6" />
      <FloatingCloud delay="2" duration="16" className="w-80 h-40 top-28 right-12" />
      <FloatingCloud delay="1" duration="14" className="w-56 h-28 top-1/2 left-1/3" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FFFDF7]/90 backdrop-blur-md border-b-2 border-[#1E2D24]">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold tracking-tight font-serif flex items-center gap-2 text-[#1E2D24]">
              <FiCompass className="text-[#2D6A4F] animate-spin-slow" size={26} />
              <span>Feri<span className="text-[#2D6A4F]">.M</span></span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-[#1E2D24] hover:text-[#2D6A4F] transition-colors font-bold">Home</a>
              <a href="#about" className="text-[#1E2D24] hover:text-[#E07A5F] transition-colors font-bold">About</a>
              <a href="#portfolio" className="text-[#1E2D24] hover:text-[#2B6CB0] transition-colors font-bold">Portfolio</a>
              <a href="#contact" className="text-[#1E2D24] hover:text-[#2D6A4F] transition-colors font-bold">Contact</a>
            </div>

            <button
              className="md:hidden bg-[#D8F3DC] ghibli-border p-2 rounded-xl shadow-[2px_2px_0px_#1E2D24]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FiX size={24} strokeWidth={2.5} /> : <FiMenu size={24} strokeWidth={2.5} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#FFFDF7] border-b-2 border-[#1E2D24] flex flex-col p-6 gap-4">
            <a href="#home" onClick={() => setIsMenuOpen(false)} className="text-[#1E2D24] font-bold text-lg">Home</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-[#1E2D24] font-bold text-lg">About</a>
            <a href="#portfolio" onClick={() => setIsMenuOpen(false)} className="text-[#1E2D24] font-bold text-lg">Portfolio</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-[#1E2D24] font-bold text-lg">Contact</a>
          </div>
        )}
      </nav>

      {/* HERO SECTION: Kiri & Kanan Bergaya "Ghibli Aviation & Woodland Engineer" */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-5 pt-24 md:pt-20 pb-28 bg-gradient-to-b from-[#90E0EF]/55 via-[#D8F3DC]/70 to-[#FFFDF7]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-14 items-center mt-4 md:mt-0 relative z-20">

          {/* BAGIAN KIRI: Teks & Identitas Bergaya Jurnal Insinyur Ghibli */}
          <div className="space-y-5 scroll-reveal opacity-0" data-animation="animate-slideInLeft">

            {/* Badge Sapaan dengan Kompas Ekspedisi */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-[#F3E9D2] text-[#1E2D24] ghibli-border rounded-xl text-xs md:text-sm font-extrabold shadow-[3px_3px_0px_#2D6A4F]">
              <FiCompass className="text-[#E07A5F] shrink-0" size={18} />
              <span>Hi, I am Feri Mauliandi Saputra</span>
            </div>

            {/* Judul Utama yang Tegas & Berkarakter */}
            <div>
              <div className="flex items-center gap-3 mb-1">
                <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#2D6A4F] bg-[#D8F3DC] px-3 py-1 rounded-md border border-[#1E2D24]/30">
                  Field & Aero-AI Log
                </span>
              </div>
              <h1 className="text-[44px] md:text-6xl lg:text-7xl font-extrabold leading-none text-[#1E2D24] tracking-tight">
                Junior <br />
                <span className="bg-[#2D6A4F] text-[#FFFDF7] px-5 py-1.5 inline-block ghibli-border rounded-2xl mt-2 shadow-[5px_5px_0px_#E9C46A]">
                  AI Engineer
                </span>
              </h1>
            </div>

            {/* Kotak Deskripsi Bergaya Catatan Lapangan (Field Notes) */}
            <div className="relative bg-[#FFFDF7]/95 backdrop-blur-sm p-5 pl-6 ghibli-border rounded-2xl shadow-[4px_4px_0px_rgba(45,106,79,0.2)] border-l-[6px] border-l-[#2D6A4F]">
              <p className="text-sm md:text-lg text-[#1E2D24] font-semibold leading-relaxed">
                Computer Engineering student passionate about Computer Vision, Generative AI, and crafting intelligent systems that harmonize software and hardware.
              </p>
            </div>

            {/* Skill Tags Berbentuk Modul Teknis (Tanpa Warna Pink) */}
            <div className="flex flex-wrap gap-2.5 py-1">
              <span className="px-3.5 py-2 bg-[#DDF2FD] ghibli-border shadow-[2px_2px_0px_#1E2D24] text-[#1E2D24] rounded-xl text-xs md:text-sm font-extrabold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#2B6CB0]"></span>
                Computer Vision
              </span>
              <span className="px-3.5 py-2 bg-[#D8F3DC] ghibli-border shadow-[2px_2px_0px_#1E2D24] text-[#1E2D24] rounded-xl text-xs md:text-sm font-extrabold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#2D6A4F]"></span>
                LLMs & RAG
              </span>
              <span className="px-3.5 py-2 bg-[#FDEEDC] ghibli-border shadow-[2px_2px_0px_#1E2D24] text-[#1E2D24] rounded-xl text-xs md:text-sm font-extrabold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#E07A5F]"></span>
                UAVs & Robotics
              </span>
            </div>

            {/* Tombol CTA Maskulin (Terracotta Amber & Forest Green) */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="ghibli-btn bg-[#E07A5F] text-[#FFFDF7] inline-flex items-center gap-2.5 text-base md:text-lg hover:bg-[#2D6A4F] hover:text-white"
              >
                <span>Let's Connect</span>
                <FiNavigation size={18} className="rotate-45" />
              </a>
              <a
                href="#portfolio"
                className="ghibli-btn bg-[#FFFDF7] text-[#1E2D24] inline-flex items-center gap-2 text-base hover:bg-[#E9C46A]"
              >
                Explore Works
              </a>
            </div>
          </div>

          {/* BAGIAN KANAN: Bingkai Ekspedisi Dirgantara (The Wind Rises / Laputa Style) */}
          <div className="w-full max-w-md mx-auto mt-10 md:mt-0 relative">
            <div className="relative scroll-reveal opacity-0" data-animation="animate-slideInRight">

              {/* Piringan Kompas Angin Berputar Halus di Belakang Bingkai */}
              <svg
                className="absolute -top-8 -right-8 w-36 h-36 text-[#2D6A4F]/20 animate-spin-slow pointer-events-none z-0"
                viewBox="0 0 100 100"
                fill="none"
              >
                <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
                <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="1" />
                <polygon points="50,2 54,14 46,14" fill="currentColor" />
                <polygon points="50,98 54,86 46,86" fill="currentColor" />
                <polygon points="2,50 14,54 14,46" fill="currentColor" />
                <polygon points="98,50 86,54 86,46" fill="currentColor" />
              </svg>

              {/* Bingkai Utama: Field Expedition Frame dengan Sudut Siku Kuningan */}
              <div className="relative z-10 p-3.5 bg-[#F3E9D2] border-2 border-[#1E2D24] rounded-3xl shadow-[8px_8px_0px_#2D6A4F] transition-transform duration-500">

                {/* Plat Siku Kuningan (Brass Corner Brackets) di Keempat Sudut */}
                <div className="w-4 h-4 border-t-[3px] border-l-[3px] border-[#1E2D24] absolute top-2 left-2 rounded-tl-md pointer-events-none" />
                <div className="w-4 h-4 border-t-[3px] border-r-[3px] border-[#1E2D24] absolute top-2 right-2 rounded-tr-md pointer-events-none" />
                <div className="w-4 h-4 border-b-[3px] border-l-[3px] border-[#1E2D24] absolute bottom-2 left-2 rounded-bl-md pointer-events-none" />
                <div className="w-4 h-4 border-b-[3px] border-r-[3px] border-[#1E2D24] absolute bottom-2 right-2 rounded-br-md pointer-events-none" />

                {/* Header Kecil di Atas Foto ala Logbook Penerbangan */}
                <div className="flex items-center justify-between px-2 pb-2 text-[11px] font-extrabold tracking-widest uppercase text-[#2D6A4F]">
                  <span>✦ FLIGHT & AI LOG // 01</span>
                  <span>UAV-RES</span>
                </div>

                {/* Kontainer Foto */}
                <div className="w-full aspect-square rounded-2xl overflow-hidden bg-[#FFFDF7] border-2 border-[#1E2D24] relative group">
                  <img
                    src={fotoFeri}
                    alt="Feri Mauliandi Saputra"
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                  />
                  {/* Grid Bidik Tipis di Atas Foto */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E2D24]/30 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Badge 1: Computer Vision (Gaya Modul Sensor Optik) */}
              <div
                className="absolute top-8 -left-4 md:-left-12 z-20 bg-[#FFFDF7] border-2 border-[#1E2D24] px-3.5 py-2.5 rounded-2xl shadow-[4px_4px_0px_#1E2D24] flex items-center gap-3"
                style={{ animation: 'float-badge 4.5s ease-in-out infinite' }}
              >
                <div className="w-10 h-10 bg-[#DDF2FD] border-2 border-[#1E2D24] rounded-xl flex items-center justify-center shrink-0">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1E2D24" strokeWidth="2">
                    <circle cx="12" cy="12" r="8" fill="#FFFDF7" />
                    <circle cx="12" cy="12" r="3" fill="#2B6CB0" />
                    <line x1="12" y1="2" x2="12" y2="5" />
                    <line x1="12" y1="19" x2="12" y2="22" />
                    <line x1="2" y1="12" x2="5" y2="12" />
                    <line x1="19" y1="12" x2="22" y2="12" />
                  </svg>
                </div>
                <div className="text-left hidden sm:block pr-1">
                  <p className="text-[10px] text-[#2B6CB0] font-extrabold uppercase tracking-wider">Computer Vision</p>
                  <p className="text-[#1E2D24] font-bold text-sm font-serif">YOLO & DETR</p>
                </div>
              </div>

              {/* Badge 2: Hardware / UAV (Gaya Modul Avionik) */}
              <div
                className="absolute top-1/3 -right-4 md:-right-12 z-20 bg-[#FFFDF7] border-2 border-[#1E2D24] px-3.5 py-2.5 rounded-2xl shadow-[4px_4px_0px_#1E2D24] flex items-center gap-3"
                style={{ animation: 'float-badge 5s ease-in-out 1s infinite' }}
              >
                <div className="text-right hidden sm:block pl-1">
                  <p className="text-[10px] text-[#E07A5F] font-extrabold uppercase tracking-wider">Hardware</p>
                  <p className="text-[#1E2D24] font-bold text-sm font-serif">Robotics & UAVs</p>
                </div>
                <div className="w-10 h-10 bg-[#FDEEDC] border-2 border-[#1E2D24] rounded-xl flex items-center justify-center shrink-0">
                  <FaPlane className="text-[#E07A5F] -rotate-45" size={18} />
                </div>
              </div>

              {/* Badge 3: Generative AI (Gaya Modul Arsitektur AI) */}
              <div
                className="absolute bottom-20 -left-4 md:-left-10 z-20 bg-[#FFFDF7] border-2 border-[#1E2D24] px-3.5 py-2.5 rounded-2xl shadow-[4px_4px_0px_#1E2D24] flex items-center gap-3"
                style={{ animation: 'float-badge 5.5s ease-in-out 2s infinite' }}
              >
                <div className="w-10 h-10 bg-[#D8F3DC] border-2 border-[#1E2D24] rounded-xl flex items-center justify-center shrink-0">
                  <FiCpu className="text-[#2D6A4F]" size={20} strokeWidth={2.5} />
                </div>
                <div className="text-left hidden sm:block pr-1">
                  <p className="text-[10px] text-[#2D6A4F] font-extrabold uppercase tracking-wider">Generative AI</p>
                  <p className="text-[#1E2D24] font-bold text-sm font-serif">LLMs & RAG</p>
                </div>
              </div>

              {/* Badge 4: Open for Work (Indikator Hijau Zamrud Tegas) */}
              <div
                className="absolute -bottom-5 right-2 md:-right-4 z-20 bg-[#E9C46A] border-2 border-[#1E2D24] px-4 py-2 rounded-xl shadow-[4px_4px_0px_#1E2D24] flex items-center gap-2.5"
                style={{ animation: 'float-badge 4s ease-in-out 0.5s infinite' }}
              >
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2D6A4F] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#2D6A4F] border border-[#1E2D24]"></span>
                </span>
                <p className="text-[#1E2D24] font-extrabold text-xs md:text-sm tracking-tight">
                  Open for Work & Internships
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Ilustrasi SVG Perbukitan Hijau Segar & Kincir Angin */}
      <GhibliHillsDivider />

      {/* About Me Section - Nuansa Padang Rumput Segar */}
      <section id="about" className="relative py-16 px-6 bg-[#E6F4EA] border-b-2 border-[#1E2D24]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 scroll-reveal opacity-0" data-animation="animate-slideInUp">
            <span className="text-sm font-extrabold uppercase tracking-widest text-[#2D6A4F] block mb-2">✦ Story & Background ✦</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 inline-block bg-[#FFFDF7] text-[#1E2D24] px-8 py-3 ghibli-box">
              About Me
            </h2>

            <p className="text-base md:text-xl text-[#1E2D24] font-semibold max-w-4xl mx-auto leading-relaxed mt-6 ghibli-box p-6 md:p-8 bg-[#FFFDF7] text-left md:text-center">
              Junior AI Engineer specializing in Deep Learning, computer vision (YOLOv8/v11), and building intelligent systems across Agentic AI, Multi-Agent, Multimodal, and RAG architectures. Also a UAV Researcher with 3 years of experience in autonomous drone systems using Pixhawk, ArduPilot, and PX4 — bridging cutting-edge AI with real-world hardware.
            </p>

            <div className="mt-14 pt-4 flex flex-col items-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-8 text-[#1E2D24] flex items-center gap-3 bg-[#E9C46A] px-7 py-2.5 ghibli-border rounded-xl shadow-[3px_3px_0px_#2D6A4F]">
                <span>🛠️</span> Tech Stack & Tools
              </h3>

              <div className="flex flex-wrap justify-center gap-3 max-w-5xl">
                {techStack.map((tech, index) => (
                  <div
                    key={index}
                    className={`tech-badge flex items-center gap-2 px-4 py-2 ${tech.bg} ${tech.text} text-xs md:text-sm font-bold tracking-wider rounded-xl ghibli-border shadow-[2px_2px_0px_#1E2D24] cursor-default`}
                  >
                    <span className="text-base md:text-lg">{tech.icon}</span>
                    {tech.name}
                  </div>
                ))}
              </div>

              <h3 className="text-2xl md:text-3xl font-bold mt-16 mb-8 text-[#1E2D24] flex items-center gap-3 bg-[#DDF2FD] px-7 py-2.5 ghibli-border rounded-xl shadow-[3px_3px_0px_#2D6A4F]">
                <span>🌱</span> GitHub Contributions
              </h3>
              <div className="w-full max-w-4xl">
                <GithubCard username={githubUsername} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Showcase Section */}
      <section id="portfolio" className="relative py-20 px-6 bg-[#FFFDF7]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 scroll-reveal opacity-0" data-animation="animate-slideInUp">
            <span className="text-sm font-extrabold uppercase tracking-widest text-[#E07A5F] block mb-2">✦ Works & Chronicles ✦</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1E2D24]">Technical Journey</h2>
            <p className="text-base md:text-lg text-[#1E2D24] font-semibold max-w-3xl mx-auto bg-[#D8F3DC] inline-block px-6 py-4 ghibli-box">
              Explore my latest AI projects, internships, competitive robotics experience, and technical expertise.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center gap-3 mb-12 flex-wrap scroll-reveal opacity-0" data-animation="animate-scaleIn">
            <button
              onClick={() => setActiveTab('projects')}
              className={`flex items-center gap-2 px-6 py-3 font-bold transition-all ghibli-btn ${activeTab === 'projects'
                  ? 'bg-[#2D6A4F] text-[#FFFDF7] translate-y-0.5'
                  : 'bg-[#FFFDF7] text-[#1E2D24] hover:bg-[#D8F3DC]'
                }`}
            >
              <FiCode size={18} strokeWidth={2.5} />
              Projects
            </button>
            <button
              onClick={() => setActiveTab('experience')}
              className={`flex items-center gap-2 px-6 py-3 font-bold transition-all ghibli-btn ${activeTab === 'experience'
                  ? 'bg-[#2D6A4F] text-[#FFFDF7] translate-y-0.5'
                  : 'bg-[#FFFDF7] text-[#1E2D24] hover:bg-[#D8F3DC]'
                }`}
            >
              <FiBriefcase size={18} strokeWidth={2.5} />
              Experience
            </button>
            <button
              onClick={() => setActiveTab('certifications')}
              className={`flex items-center gap-2 px-6 py-3 font-bold transition-all ghibli-btn ${activeTab === 'certifications'
                  ? 'bg-[#2D6A4F] text-[#FFFDF7] translate-y-0.5'
                  : 'bg-[#FFFDF7] text-[#1E2D24] hover:bg-[#D8F3DC]'
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
                  className="bg-[#FFFDF7] ghibli-box p-8 card-hover scroll-reveal opacity-0"
                  data-animation="animate-slideInLeft"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="flex items-start gap-6 flex-col md:flex-row">
                    <div className={`w-16 h-16 ${exp.color} ghibli-border rounded-2xl flex items-center justify-center text-3xl shrink-0 shadow-[3px_3px_0px_#2D6A4F]`}>
                      💼
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold mb-2 text-[#1E2D24] leading-tight">{exp.role}</h3>
                      <div className="flex flex-wrap items-center gap-2 mb-4">
                        <span className="text-sm font-bold bg-[#E9C46A] px-4 py-1 ghibli-border rounded-lg">
                          {exp.company}
                        </span>
                        <span className="text-[#1E2D24] font-bold text-xs bg-[#D8F3DC] px-3 py-1 ghibli-border rounded-lg">
                          🗓️ {exp.period}
                        </span>
                      </div>
                      <p className="text-[#2F3E35] font-semibold text-base leading-relaxed">{exp.description}</p>
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
                  className="bg-[#FFFDF7] ghibli-box overflow-hidden card-hover scroll-reveal opacity-0 flex flex-col"
                  data-animation="animate-scaleIn"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="h-48 w-full border-b-2 border-[#1E2D24]">
                    <img
                      src={cert.image}
                      alt={cert.name}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between bg-[#FFFDF7]">
                    <div>
                      <h3 className="text-xl font-bold mb-3 leading-snug text-[#1E2D24]">{cert.name}</h3>
                      <p className="text-[#1E2D24] font-bold bg-[#D8F3DC] inline-block px-3 py-1 ghibli-border rounded-lg text-xs mb-4">
                        {cert.issuer}
                      </p>
                    </div>
                    <p className="text-[#2D6A4F] font-bold text-right text-lg font-serif">{cert.year}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact Section - Nuansa Kertas Peta Ekspedisi Hangat */}
      <section id="contact" className="relative pt-20 pb-8 px-6 bg-[#F3E9D2] border-t-2 border-[#1E2D24]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="scroll-reveal opacity-0" data-animation="animate-slideInUp">
            <span className="text-sm font-extrabold uppercase tracking-widest text-[#E07A5F] block mb-2">✦ Dispatch & Contact ✦</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1E2D24]">Let's Work Together!</h2>
            <p className="text-base md:text-lg text-[#1E2D24] font-semibold mb-10 max-w-2xl mx-auto bg-[#FFFDF7] inline-block px-6 py-4 ghibli-box">
              I am actively looking for AI Engineering internships and collaborative projects. Feel free to reach out via email or connect with me on LinkedIn!
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-14">
              <a href="mailto:your.email@example.com" className="social-btn flex items-center gap-2 bg-[#FFFDF7] text-[#1E2D24] ghibli-btn hover:bg-[#E9C46A]">
                <FiMail size={20} strokeWidth={2.5} />
                <span className="font-bold text-base">Email Me</span>
              </a>
              <a href="https://github.com/FeriMauliandi" target="_blank" rel="noreferrer" className="social-btn flex items-center gap-2 bg-[#1E2D24] text-[#FFFDF7] ghibli-btn hover:bg-[#2D6A4F]">
                <FiGithub size={20} strokeWidth={2.5} />
                <span className="font-bold text-base">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/ferimauliandisaputra/" target="_blank" rel="noreferrer" className="social-btn flex items-center gap-2 bg-[#2B6CB0] text-[#FFFDF7] ghibli-btn hover:bg-[#2D6A4F]">
                <FiLinkedin size={20} strokeWidth={2.5} />
                <span className="font-bold text-base">LinkedIn</span>
              </a>
            </div>

            <div className="bg-[#FFFDF7] ghibli-box p-8 md:p-12 max-w-2xl mx-auto text-left relative">
              <div className="absolute -top-6 -right-4 w-14 h-14 bg-[#E9C46A] ghibli-border rounded-2xl flex items-center justify-center text-2xl shadow-[3px_3px_0px_#2D6A4F] rotate-6">
                🧭
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#1E2D24]">Send a Message</h3>
              <form className="space-y-5">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-5 py-3.5 rounded-xl ghibli-border focus:border-[#2D6A4F] focus:ring-0 outline-none transition-colors shadow-[2px_2px_0px_#52B788] font-semibold text-base bg-[#E6F4EA]/50"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-5 py-3.5 rounded-xl ghibli-border focus:border-[#2D6A4F] focus:ring-0 outline-none transition-colors shadow-[2px_2px_0px_#52B788] font-semibold text-base bg-[#E6F4EA]/50"
                  />
                </div>
                <div>
                  <textarea
                    rows="4"
                    placeholder="Write your message here..."
                    className="w-full px-5 py-3.5 rounded-xl ghibli-border focus:border-[#2D6A4F] focus:ring-0 outline-none transition-colors shadow-[2px_2px_0px_#52B788] font-semibold text-base bg-[#E6F4EA]/50 resize-none"
                  ></textarea>
                </div>
                <button
                  type="button"
                  className="w-full bg-[#2D6A4F] text-[#FFFDF7] text-lg ghibli-btn hover:bg-[#E07A5F] mt-2"
                >
                  Send Message ✈️
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Siluet Bukit & Roh Hutan (Kodama) sebelum Footer */}
      <FooterGhibliScene />

      {/* Footer */}
      <footer className="relative py-12 px-6 bg-[#FFFDF7] text-[#1E2D24]">
        <div className="max-w-6xl mx-auto text-center flex flex-col items-center">
          <div className="text-3xl font-bold tracking-tight mb-3 font-serif flex items-center gap-2">
            <FiCompass className="text-[#2D6A4F]" size={28} />
            <span>Feri<span className="text-[#2D6A4F]">.M</span></span>
          </div>
          <p className="bg-[#D8F3DC] px-5 py-1.5 rounded-xl ghibli-border font-bold text-xs md:text-sm mb-6 shadow-[2px_2px_0px_#2D6A4F]">
            Aspiring AI Engineer • Computer Engineering
          </p>
          <div className="flex justify-center gap-8 mb-6">
            <a href="#home" className="font-bold hover:text-[#2D6A4F] hover:-translate-y-0.5 transition-all">Home</a>
            <a href="#portfolio" className="font-bold hover:text-[#E07A5F] hover:-translate-y-0.5 transition-all">Portfolio</a>
            <a href="#contact" className="font-bold hover:text-[#2B6CB0] hover:-translate-y-0.5 transition-all">Contact</a>
          </div>
          <div className="w-20 h-0.5 bg-[#52B788]/50 rounded-full mb-5"></div>
          <p className="text-xs font-bold text-[#4A5D52]">© 2026 Feri Mauliandi Saputra. Crafted with Studio Ghibli vibes.</p>
        </div>
      </footer>
    </div>
  );
}
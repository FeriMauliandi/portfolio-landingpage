import React, { useState, useEffect } from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import { 
  FiMail, FiGithub, FiLinkedin, FiCode, FiBriefcase, FiAward, 
  FiChevronLeft, FiChevronRight, FiMenu, FiX, FiCompass, FiCpu, 
  FiNavigation, FiDownload, FiBookOpen, FiMapPin, FiCalendar, 
  FiSettings, FiMinus, FiStar, FiEye, FiExternalLink 
} from 'react-icons/fi';

import { 
  SiJavascript, SiPython, SiFastapi, SiPytorch, SiTensorflow, 
  SiNodedotjs, SiGithub, SiGit, SiUbuntu, SiArduino, SiNotion, 
  SiLangchain, SiOpencv, SiPostman, SiRaspberrypi, SiDocker, 
  SiHuggingface 
} from 'react-icons/si';

import { 
  FaTerminal, FaNetworkWired, FaTools, FaDatabase, FaMicrochip, 
  FaPlane, FaGraduationCap, FaSeedling, FaUniversity, FaScroll, 
  FaStar 
} from 'react-icons/fa';

import { HiSparkles } from 'react-icons/hi2';

import fotoFeri from './assets/feri1.jpg';
import chili2 from './assets/chilicareai.jpg';
import kawankerja from './assets/kawankerja2.png';
import kawankerja1 from './assets/kawankerja1.png';
import ihsg from './assets/stockai1.png';
import ihsg1 from './assets/finsight.png';
import drone1 from './assets/krti1.jpeg';
import drone2 from './assets/krti.jpeg';
import drone3 from './assets/uav.jpeg';
import drone4 from './assets/uav1.png';
import drone5 from './assets/uav2.jpeg';
import drone6 from './assets/uav3.jpg';
import dietary from './assets/dietary.png';
import sertif from './assets/sertif.png';
import AIChatWidget from './components/AIChatWidget';
import LanguageToggle from './components/LanguageToggle';
import { translations } from './data/translations';

// 1. Komponen Daun Hutan Gugur (Minimalis: 3 helai pelan, hemat CPU/GPU)
const FallingLeaves = () => {
  const leaves = [
    { id: 1, left: '6%', delay: '0s', duration: '20s', size: 14, color: '#2D6A4F' },
    { id: 2, left: '48%', delay: '7s', duration: '23s', size: 15, color: '#52B788' },
    { id: 3, left: '90%', delay: '14s', duration: '21s', size: 13, color: '#40916C' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden" aria-hidden="true">
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className="absolute -top-10 opacity-60"
          style={{
            left: leaf.left,
            animation: `leaf-fall ${leaf.duration} linear ${leaf.delay} infinite`,
            willChange: 'transform',
          }}
        >
          <svg
            width={leaf.size}
            height={leaf.size}
            viewBox="0 0 24 24"
            fill={leaf.color}
          >
            <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
          </svg>
        </div>
      ))}
    </div>
  );
};

// 2. Elemen Awan Kumulus di Langit Hero
const FloatingCloud = ({ delay, duration, className }) => (
  <div
    className={`absolute pointer-events-none opacity-80 ${className}`}
    style={{
      animation: `float ${duration}s ease-in-out ${delay}s infinite alternate`,
      willChange: 'transform',
    }}
    aria-hidden="true"
  >
    <svg viewBox="0 0 200 100" className="w-full h-full fill-white drop-shadow-[0_8px_16px_rgba(29,53,87,0.08)]">
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
      <g fill="#1B4332">
        <polygon points="220,98 208,134 232,134" />
        <polygon points="240,106 230,138 250,138" />
        <polygon points="890,90 878,126 902,126" />
        <polygon points="910,100 900,128 920,128" />
      </g>
      {/* Rumput Padang */}
      <g stroke="#1B4332" strokeWidth="2.5" strokeLinecap="round" fill="none">
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
        <svg width="34" height="46" viewBox="0 0 40 55" className="drop-shadow-sm">
          <path d="M15,24 L13,50 L18,50 L20,38 L22,50 L27,50 L25,24 Z" fill="#FFFDF7" stroke="#1E2D24" strokeWidth="2" />
          <ellipse cx="20" cy="15" rx="13" ry="11" fill="#FFFDF7" stroke="#1E2D24" strokeWidth="2" />
          <circle cx="15" cy="13" r="2.2" fill="#1E2D24" />
          <circle cx="25" cy="14" r="1.8" fill="#1E2D24" />
          <ellipse cx="20" cy="20" rx="2" ry="2.5" fill="#1E2D24" />
        </svg>
        <svg width="26" height="36" viewBox="0 0 40 55" className="drop-shadow-sm">
          <path d="M15,24 L14,48 L19,48 L20,38 L21,48 L26,48 L25,24 Z" fill="#FFFDF7" stroke="#1E2D24" strokeWidth="2" />
          <ellipse cx="20" cy="15" rx="12" ry="11" fill="#FFFDF7" stroke="#1E2D24" strokeWidth="2" />
          <circle cx="15" cy="14" r="2" fill="#1E2D24" />
          <circle cx="24" cy="12" r="2.3" fill="#1E2D24" />
          <circle cx="20" cy="19" r="1.8" fill="#1E2D24" />
        </svg>
      </div>
      <div className="text-2xl">🌲🍃</div>
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
const GithubCard = ({ username, lang = 'en', t }) => {
  const [monthsToShow, setMonthsToShow] = useState(10);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 640px)');
    const updateLayout = () => {
      const mobile = mediaQuery.matches;
      setIsMobile(mobile);
      setMonthsToShow(mobile ? 4 : 10);
    };

    updateLayout();
    mediaQuery.addEventListener('change', updateLayout);
    return () => mediaQuery.removeEventListener('change', updateLayout);
  }, []);

  const lastMonths = (contributions) => {
    const cutoff = new Date();
    cutoff.setMonth(cutoff.getMonth() - monthsToShow);
    return contributions.filter((day) => new Date(day.date) >= cutoff);
  };

  const contributionsLabel = monthsToShow < 10
    ? (t?.about?.githubContributionsShort || `${monthsToShow} months`)
    : (t?.about?.githubContributions || 'contributions in the last 10 months');

  return (
    <div className="w-full min-w-0 overflow-hidden bg-[#FFFDF7] text-[#1E2D24] ghibli-box p-5 md:p-8 text-left">
      <div className="w-full max-w-4xl mx-auto">
        <div className="flex items-center justify-between gap-4 mb-4 flex-wrap">
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
          {t?.about?.githubViewProfile || 'View Profile'} <FiGithub size={18} strokeWidth={2.5} />
        </a>
      </div>

      <div className="w-full min-w-0 overflow-x-auto pb-2 flex justify-center">
        <GitHubCalendar
          username={username}
          colorScheme="light"
          blockSize={isMobile ? 9 : 14}
          blockMargin={isMobile ? 3 : 4}
          fontSize={isMobile ? 9 : 13}
          weekStart={0}
          showWeekdayLabels
          transformData={lastMonths}
          theme={{
            light: ['#E6F4EA', '#B7E4C7', '#52B788', '#2D6A4F', '#1B4332'],
          }}
          labels={{
            totalCount: `{{count}} ${contributionsLabel}`,
            legend: {
              less: t?.about?.githubLess || 'Less',
              more: t?.about?.githubMore || 'More',
            },
          }}
          style={{ color: '#1E2D24' }}
          tooltips={{
            activity: {
              text: (activity) => {
                const dateLocale = lang === 'id' ? 'id-ID' : 'en-US';
                const date = new Date(activity.date + 'T00:00:00').toLocaleDateString(dateLocale, {
                  month: 'long',
                  day: 'numeric',
                });
                const countUnit = lang === 'id' 
                  ? 'kontribusi' 
                  : (activity.count === 1 ? 'contribution' : 'contributions');
                const onWord = lang === 'id' ? 'pada' : 'on';
                return `${activity.count} ${countUnit} ${onWord} ${date}`;
              },
              placement: 'top',
              hoverRestMs: 100,
              withArrow: true,
            },
          }}
        />
      </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project, idx, viewRepoText = 'View Repository', viewDemoText = 'Live Demo' }) => {
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
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-[#FFFDF7]/95 ghibli-border text-[#1E2D24] p-2 rounded-xl opacity-0 group-hover:opacity-100 hover:bg-[#E9C46A] transition-all z-10 cursor-pointer"
                >
                  <FiChevronLeft size={22} strokeWidth={2.5} />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#FFFDF7]/95 ghibli-border text-[#1E2D24] p-2 rounded-xl opacity-0 group-hover:opacity-100 hover:bg-[#E9C46A] transition-all z-10 cursor-pointer"
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
                    className={`h-2.5 rounded-full border border-[#1E2D24] transition-all duration-300 cursor-pointer ${
                      currentIndex === dotIdx ? 'bg-[#2D6A4F] w-6' : 'bg-[#FFFDF7] w-2.5 hover:bg-[#E9C46A]'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="px-3.5 py-1 bg-[#FFFDF7] ghibli-border text-[#2D6A4F] rounded-lg text-xs font-extrabold inline-flex items-center gap-1.5 w-fit shadow-[2px_2px_0px_#52B788] uppercase tracking-wider">
              <FiSettings size={12} className="text-[#2D6A4F]" />
              {project.level}
            </span>
            {project.featured && (
              <span className="px-2.5 py-0.5 bg-[#E9C46A] text-[#1E2D24] ghibli-border rounded-lg text-xs font-extrabold shadow-[1px_1px_0px_#1E2D24] inline-flex items-center gap-1">
                <FaStar size={11} className="text-[#1E2D24]" />
                Featured
              </span>
            )}
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

        <div className="mt-auto pt-4 border-t-2 border-dashed border-[#1E2D24]/20 flex flex-wrap gap-2.5">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="ghibli-btn bg-[#E07A5F] text-[#FFFDF7] w-full sm:w-auto inline-flex items-center justify-center gap-2 hover:bg-[#2D6A4F] hover:text-white text-sm"
            >
              <FiExternalLink size={18} strokeWidth={2.5} /> {viewDemoText}
            </a>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="ghibli-btn bg-[#2D6A4F] text-[#FFFDF7] w-full sm:w-auto inline-flex items-center justify-center gap-2 hover:bg-[#E07A5F] hover:text-white text-sm"
          >
            <FiGithub size={18} strokeWidth={2.5} /> {viewRepoText}
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
            className="absolute top-6 right-6 text-[#1E2D24] bg-[#FFFDF7] ghibli-border hover:bg-[#E07A5F] hover:text-white p-3 rounded-xl transition-colors z-50 cursor-pointer"
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
                className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 bg-[#FFFDF7] ghibli-border text-[#1E2D24] p-3.5 rounded-xl transition-all z-50 hover:bg-[#E9C46A] cursor-pointer"
              >
                <FiChevronLeft size={28} strokeWidth={2.5} />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 bg-[#FFFDF7] ghibli-border text-[#1E2D24] p-3.5 rounded-xl transition-all z-50 hover:bg-[#E9C46A] cursor-pointer"
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
  const [lang, setLang] = useState(() => {
    try {
      const saved = localStorage.getItem('portfolio_lang');
      if (saved === 'id' || saved === 'en') return saved;
    } catch {
      // ignore
    }
    return 'en'; // Default English
  });

  const handleToggleLang = (newLang) => {
    setLang(newLang);
    try {
      localStorage.setItem('portfolio_lang', newLang);
    } catch {
      // ignore
    }
  };

  const t = translations[lang] || translations.en;

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const [activeTab, setActiveTab] = useState('projects');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCvPreviewOpen, setIsCvPreviewOpen] = useState(false);
  const [githubUsername] = useState('FeriMauliandi');
  const CONTACT_EMAIL = 'feri.19022004@gmail.com';
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState(null);

  // Kunci scroll & tangani tombol Escape saat pratinjau CV terbuka
  useEffect(() => {
    if (!isCvPreviewOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsCvPreviewOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isCvPreviewOpen]);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = contactForm;
    if (!name.trim() || !email.trim() || !message.trim()) {
      setFormStatus('incomplete');
      setTimeout(() => setFormStatus(null), 3000);
      return;
    }
    const subject = encodeURIComponent(`Portfolio Message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setFormStatus('success');
    setContactForm({ name: '', email: '', message: '' });
    setTimeout(() => setFormStatus(null), 5000);
  };

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
  }, [activeTab, lang]);

  // Tech stack dengan warna segar & maskulin (Forest, Cobalt, Amber, Slate)
  const techStack = [
    { name: 'PYTHON', bg: 'bg-[#2B6CB0]', text: 'text-[#FFFDF7]', icon: <SiPython /> },
    { name: 'LANGGRAPH', bg: 'bg-[#2D6A4F]', text: 'text-[#FFFDF7]', icon: <FaNetworkWired /> },
    { name: 'LANGCHAIN', bg: 'bg-[#1B4332]', text: 'text-[#FFFDF7]', icon: <SiLangchain /> },
    { name: 'CHROMADB', bg: 'bg-[#E07A5F]', text: 'text-[#FFFDF7]', icon: <FaDatabase /> },
    { name: 'LANGSMITH', bg: 'bg-[#3B7A57]', text: 'text-[#FFFDF7]', icon: <FaTools /> },
    { name: 'FASTAPI', bg: 'bg-[#2A9D8F]', text: 'text-[#FFFDF7]', icon: <SiFastapi /> },
    { name: 'HUGGING FACE', bg: 'bg-[#E9C46A]', text: 'text-[#1E2D24]', icon: <SiHuggingface /> },
    { name: 'PYTORCH', bg: 'bg-[#D95D39]', text: 'text-[#FFFDF7]', icon: <SiPytorch /> },
    { name: 'TENSORFLOW', bg: 'bg-[#F4A261]', text: 'text-[#1E2D24]', icon: <SiTensorflow /> },
    { name: 'OPENCV', bg: 'bg-[#2C5282]', text: 'text-[#FFFDF7]', icon: <SiOpencv /> },
    { name: 'DOCKER', bg: 'bg-[#3182CE]', text: 'text-[#FFFDF7]', icon: <SiDocker /> },
    { name: 'JAVASCRIPT', bg: 'bg-[#E9C46A]', text: 'text-[#1E2D24]', icon: <SiJavascript /> },
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

  // Map project items dengan data media & tema
  const projectMetadata = [
    { images: [dietary], bgColor: 'bg-[#FDEEDC]', github: 'https://github.com/FeriMauliandi/NutriGraph_AI-nutrition-agentic-RAG', featured: false },
    { images: [kawankerja, kawankerja1], bgColor: 'bg-[#DDF2FD]', github: 'https://github.com/FeriMauliandi/RAG-chatbot-Streamlit-FastAPI', featured: false },
    { images: [chili2], bgColor: 'bg-[#D8F3DC]', github: 'https://github.com/FeriMauliandi/Chili-Leaf-Disease-Detection-with-YOLOv11-and-LLM-Based-RAG', demo: 'https://chilicareai.netlify.app', featured: true },
    { images: [ihsg, ihsg1], bgColor: 'bg-[#E2ECE9]', github: 'https://github.com/FeriMauliandi/LLM-based-IHSG-Stock-Fundamental-Explainer-with-Structured-Data', featured: false },
    { images: [drone1, drone2, drone3, drone4, drone5, drone6], bgColor: 'bg-[#F3E9D2]', github: 'https://github.com/ferimauliandisaputra', featured: true }
  ];

  const projects = t.portfolio.projects.map((proj, idx) => ({
    ...proj,
    images: projectMetadata[idx]?.images || [dietary],
    bgColor: projectMetadata[idx]?.bgColor || 'bg-[#FDEEDC]',
    github: projectMetadata[idx]?.github || 'https://github.com/FeriMauliandi',
    demo: projectMetadata[idx]?.demo || null,
    featured: projectMetadata[idx]?.featured || false
  }));

  const experienceColors = ['bg-[#D8F3DC]', 'bg-[#FDEEDC]'];
  const experience = t.portfolio.experience.map((exp, idx) => ({
    ...exp,
    color: experienceColors[idx % experienceColors.length]
  }));

  const certImages = [drone1, sertif, null];
  const certifications = t.portfolio.certifications.map((cert, idx) => ({
    ...cert,
    image: certImages[idx] || null
  }));

  const education = t.portfolio.education || [];

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

        /* 1. Animasi Daun Gugur Lembut */
        @keyframes leaf-fall {
          0% { transform: translateY(-8vh) rotate(0deg); opacity: 0; }
          15% { opacity: 0.65; }
          85% { opacity: 0.65; }
          100% { transform: translateY(105vh) rotate(25deg); opacity: 0; }
        }

        /* 2. Animasi Kincir Angin */
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }

        /* Dukungan Aksesibilitas: Matikan total jika mode hemat gerak aktif di OS */
        @media (prefers-reduced-motion: reduce) {
          *, ::before, ::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
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

      {/* 1 dari 3: Daun Gugur Minimalis (3 helai pelan di pinggir, sangat hemat CPU) */}
      <FallingLeaves />

      {/* 2 dari 3: Awan Kumulus di Langit Hero */}
      <FloatingCloud delay="0" duration="14" className="w-64 h-32 top-20 left-6" />
      <FloatingCloud delay="2" duration="18" className="w-80 h-40 top-28 right-12" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FFFDF7]/90 backdrop-blur-md border-b-2 border-[#1E2D24]">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold tracking-tight font-serif flex items-center gap-2 text-[#1E2D24]">
              <FiCompass className="text-[#2D6A4F] animate-spin-slow" size={26} />
              <span>Feri<span className="text-[#2D6A4F]">.M</span></span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-7">
              <a href="#home" className="text-[#1E2D24] hover:text-[#2D6A4F] transition-colors font-bold">{t.nav.home}</a>
              <a href="#about" className="text-[#1E2D24] hover:text-[#E07A5F] transition-colors font-bold">{t.nav.about}</a>
              <a href="#portfolio" className="text-[#1E2D24] hover:text-[#2B6CB0] transition-colors font-bold">{t.nav.portfolio}</a>
              <a href="#contact" className="text-[#1E2D24] hover:text-[#2D6A4F] transition-colors font-bold">{t.nav.contact}</a>
              
              {/* Language Selector Toggle Desktop */}
              <LanguageToggle currentLang={lang} onToggle={handleToggleLang} />
            </div>

            {/* Mobile Actions: Language Toggle & Menu Button */}
            <div className="flex items-center gap-2 md:hidden">
              <LanguageToggle currentLang={lang} onToggle={handleToggleLang} />
              
              <button
                className="bg-[#D8F3DC] ghibli-border p-2 rounded-xl shadow-[2px_2px_0px_#1E2D24] cursor-pointer"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle Navigation Menu"
              >
                {isMenuOpen ? <FiX size={24} strokeWidth={2.5} /> : <FiMenu size={24} strokeWidth={2.5} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#FFFDF7] border-b-2 border-[#1E2D24] flex flex-col p-6 gap-4">
            <a href="#home" onClick={() => setIsMenuOpen(false)} className="text-[#1E2D24] font-bold text-lg">{t.nav.home}</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-[#1E2D24] font-bold text-lg">{t.nav.about}</a>
            <a href="#portfolio" onClick={() => setIsMenuOpen(false)} className="text-[#1E2D24] font-bold text-lg">{t.nav.portfolio}</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-[#1E2D24] font-bold text-lg">{t.nav.contact}</a>
          </div>
        )}
      </nav>

      {/* HERO SECTION: Kiri & Kanan Bergaya "Ghibli Aviation & Woodland Engineer" */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-5 pt-24 md:pt-20 pb-28 bg-gradient-to-b from-[#90E0EF]/55 via-[#D8F3DC]/70 to-[#FFFDF7]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-14 items-center mt-4 md:mt-0 relative z-20">

          {/* BAGIAN KIRI: Teks & Identitas Bergaya Jurnal Insinyur Ghibli */}
          <div className="space-y-5 scroll-reveal opacity-0 min-w-0" data-animation="animate-slideInLeft">

            {/* Badge Sapaan dengan Kompas Ekspedisi */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-[#F3E9D2] text-[#1E2D24] ghibli-border rounded-xl text-xs md:text-sm font-extrabold shadow-[3px_3px_0px_#2D6A4F]">
              <FiCompass className="text-[#E07A5F] shrink-0" size={18} />
              <span>{t.hero.greeting}</span>
            </div>

            {/* Judul Utama yang Tegas & Berkarakter */}
            <div>
              <h1 className="text-[44px] md:text-6xl lg:text-7xl font-extrabold leading-none text-[#1E2D24] tracking-tight">
                {t.hero.rolePrefix} <br />
                <span className="bg-[#2D6A4F] text-[#FFFDF7] px-4 py-1.5 inline-block ghibli-border rounded-2xl mt-2 shadow-[5px_5px_0px_#E9C46A]">
                  {t.hero.roleTitle}
                </span>
              </h1>
            </div>

            {/* Kotak Deskripsi Bergaya Catatan Lapangan (Field Notes) */}
            <div className="relative bg-[#FFFDF7]/95 backdrop-blur-sm p-3 pl-5 ghibli-border rounded-2xl shadow-[4px_4px_0px_rgba(45,106,79,0.2)] border-l-[6px] border-l-[#2D6A4F]">
              <p className="text-sm md:text-lg text-[#1E2D24] font-semibold leading-relaxed">
                {t.hero.description}
              </p>
            </div>

            {/* Tombol GitHub & LinkedIn */}
            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/FeriMauliandi"
                target="_blank"
                rel="noreferrer"
                className="ghibli-btn bg-[#1E2D24] text-[#FFFDF7] inline-flex items-center gap-2 text-sm md:text-base hover:bg-[#2D6A4F] hover:text-white"
              >
                <FiGithub size={18} strokeWidth={2.5} />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/ferimauliandisaputra/"
                target="_blank"
                rel="noreferrer"
                className="ghibli-btn bg-[#2B6CB0] text-[#FFFDF7] inline-flex items-center gap-2 text-sm md:text-base hover:bg-[#1E4E8C] hover:text-white"
              >
                <FiLinkedin size={18} strokeWidth={2.5} />
                <span>LinkedIn</span>
              </a>
            </div>

            {/* Tombol CV: menampilkan pratinjau dulu sebelum diunduh */}
            <div className="pt-1 flex flex-wrap items-center">
              <button
                type="button"
                onClick={() => setIsCvPreviewOpen(true)}
                aria-haspopup="dialog"
                aria-expanded={isCvPreviewOpen}
                className="ghibli-btn bg-[#E07A5F] text-[#FFFDF7] inline-flex items-center gap-2.5 text-base md:text-lg hover:bg-[#2D6A4F] hover:text-white"
              >
                <FiEye size={19} strokeWidth={2.5} />
                <span>{t.hero.ctaDownloadCv || 'Download CV'}</span>
              </button>
            </div>
          </div>

          {/* BAGIAN KANAN: Bingkai Ekspedisi Dirgantara */}
          <div className="w-full max-w-sm sm:max-w-md mx-auto mt-2 md:mt-0 px-2 sm:px-0 relative min-w-0">
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

              {/* Bingkai Utama: Field Expedition Frame */}
              <div className="relative z-10 p-3.5 bg-[#F3E9D2] border-2 border-[#1E2D24] rounded-3xl shadow-[8px_8px_0px_#2D6A4F] transition-transform duration-500">

                {/* Plat Siku Kuningan (Brass Corner Brackets) di Keempat Sudut */}
                <div className="w-4 h-4 border-t-[3px] border-l-[3px] border-[#1E2D24] absolute top-2 left-2 rounded-tl-md pointer-events-none" />
                <div className="w-4 h-4 border-t-[3px] border-r-[3px] border-[#1E2D24] absolute top-2 right-2 rounded-tr-md pointer-events-none" />
                <div className="w-4 h-4 border-b-[3px] border-l-[3px] border-[#1E2D24] absolute bottom-2 left-2 rounded-bl-md pointer-events-none" />
                <div className="w-4 h-4 border-b-[3px] border-r-[3px] border-[#1E2D24] absolute bottom-2 right-2 rounded-br-md pointer-events-none" />

                {/* Header Kecil di Atas Foto ala Logbook Penerbangan */}
                <div className="flex items-center justify-between px-2 pb-2 text-[11px] font-extrabold tracking-widest uppercase text-[#2D6A4F]">
                  <span className="inline-flex items-center gap-1.5">
                    <HiSparkles size={13} className="text-[#E07A5F]" />
                    {t.hero.flightLogTitle}
                  </span>
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
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E2D24]/30 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Badge 1: Generative AI & Agentic AI (Top Left) */}
              <div
                className="absolute top-4 sm:top-8 -left-2 sm:-left-6 md:-left-12 z-20 bg-[#FFFDF7] border-2 border-[#1E2D24] px-2.5 py-1.5 sm:px-3 sm:py-2 md:px-3.5 md:py-2.5 rounded-xl md:rounded-2xl shadow-[3px_3px_0px_#1E2D24] md:shadow-[4px_4px_0px_#1E2D24] flex items-center gap-2 sm:gap-2.5 md:gap-3"
                style={{ animation: 'float-badge 4.5s ease-in-out infinite' }}
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-[#D8F3DC] border-2 border-[#1E2D24] rounded-lg md:rounded-xl flex items-center justify-center shrink-0">
                  <FiCpu className="text-[#2D6A4F]" size={16} strokeWidth={2.5} />
                </div>
                <div className="text-left pr-0.5 md:pr-1">
                  <p className="text-[9px] sm:text-[10px] text-[#2D6A4F] font-extrabold uppercase tracking-wider leading-tight">{t.hero.badgeAgenticSub}</p>
                  <p className="text-[#1E2D24] font-bold text-xs sm:text-sm font-serif leading-tight">{t.hero.badgeAgenticMain}</p>
                </div>
              </div>

              {/* Badge 2: Hardware / UAV */}
              <div
                className="absolute top-1/3 -right-2 sm:-right-6 md:-right-12 z-20 bg-[#FFFDF7] border-2 border-[#1E2D24] px-2.5 py-1.5 sm:px-3 sm:py-2 md:px-3.5 md:py-2.5 rounded-xl md:rounded-2xl shadow-[3px_3px_0px_#1E2D24] md:shadow-[4px_4px_0px_#1E2D24] flex items-center gap-2 sm:gap-2.5 md:gap-3"
                style={{ animation: 'float-badge 5s ease-in-out 1s infinite' }}
              >
                <div className="text-right pl-0.5 md:pl-1">
                  <p className="text-[9px] sm:text-[10px] text-[#E07A5F] font-extrabold uppercase tracking-wider leading-tight">{t.hero.badgeHwSub}</p>
                  <p className="text-[#1E2D24] font-bold text-xs sm:text-sm font-serif leading-tight">{t.hero.badgeHwMain}</p>
                </div>
                <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-[#FDEEDC] border-2 border-[#1E2D24] rounded-lg md:rounded-xl flex items-center justify-center shrink-0">
                  <FaPlane className="text-[#E07A5F] -rotate-45" size={15} />
                </div>
              </div>

              {/* Badge 3: Computer Vision (Bottom Left) */}
              <div
                className="absolute bottom-14 sm:bottom-18 md:bottom-20 -left-2 sm:-left-6 md:-left-10 z-20 bg-[#FFFDF7] border-2 border-[#1E2D24] px-2.5 py-1.5 sm:px-3 sm:py-2 md:px-3.5 md:py-2.5 rounded-xl md:rounded-2xl shadow-[3px_3px_0px_#1E2D24] md:shadow-[4px_4px_0px_#1E2D24] flex items-center gap-2 sm:gap-2.5 md:gap-3"
                style={{ animation: 'float-badge 5.5s ease-in-out 2s infinite' }}
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-[#DDF2FD] border-2 border-[#1E2D24] rounded-lg md:rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" stroke="#1E2D24" strokeWidth="2">
                    <circle cx="12" cy="12" r="8" fill="#FFFDF7" />
                    <circle cx="12" cy="12" r="3" fill="#2B6CB0" />
                    <line x1="12" y1="2" x2="12" y2="5" />
                    <line x1="12" y1="19" x2="12" y2="22" />
                    <line x1="2" y1="12" x2="5" y2="12" />
                    <line x1="19" y1="12" x2="22" y2="12" />
                  </svg>
                </div>
                <div className="text-left pr-0.5 md:pr-1">
                  <p className="text-[9px] sm:text-[10px] text-[#2B6CB0] font-extrabold uppercase tracking-wider leading-tight">{t.hero.badgeCvSub}</p>
                  <p className="text-[#1E2D24] font-bold text-xs sm:text-sm font-serif leading-tight">{t.hero.badgeCvMain}</p>
                </div>
              </div>

              {/* Badge 4: Open for Work */}
              <div
                className="absolute -bottom-5 right-1 sm:right-2 md:-right-4 z-20 bg-[#E9C46A] border-2 border-[#1E2D24] px-3 py-1.5 md:px-4 md:py-2 rounded-xl shadow-[3px_3px_0px_#1E2D24] md:shadow-[4px_4px_0px_#1E2D24] flex items-center gap-2"
                style={{ animation: 'float-badge 4s ease-in-out 0.5s infinite' }}
              >
                <span className="relative flex h-2.5 w-2.5 md:h-3 md:w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2D6A4F] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 md:h-3 md:w-3 bg-[#2D6A4F] border border-[#1E2D24]"></span>
                </span>
                <p className="text-[#1E2D24] font-extrabold text-[11px] sm:text-xs md:text-sm tracking-tight leading-tight">
                  {t.hero.badgeOpenWork}
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Quick Info: Horizontal Flowing Strip */}
      <div className="relative z-20 -mt-12 md:-mt-32 mb-10 md:mb-2 bg-gradient-to-b from-transparent via-[#D8F3DC]/40 to-transparent">
        <div className="max-w-6xl mx-auto px-5">
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2 py-4 text-[12px] sm:text-sm md:text-sm">
            {[
              { icon: <FiMapPin size={13} className="text-[#2D6A4F]" />, label: t.hero.quickInfo?.basedIn, value: t.hero.quickInfo?.basedInValue },
              { icon: <FiBriefcase size={13} className="text-[#E07A5F]" />, label: t.hero.quickInfo?.openTo, value: t.hero.quickInfo?.openToValue },
              { icon: <FiCompass size={13} className="text-[#2B6CB0]" />, label: t.hero.quickInfo?.availability, value: t.hero.quickInfo?.availabilityValue },
              { icon: <FiCode size={13} className="text-[#2D6A4F]" />, label: t.hero.quickInfo?.workPref, value: t.hero.quickInfo?.workPrefValue },
              { icon: <FiMail size={13} className="text-[#E07A5F]" />, label: t.hero.quickInfo?.languages, value: t.hero.quickInfo?.languagesValue },
            ].map((item, i, arr) => (
              <span key={i} className="inline-flex items-center gap-1.5 whitespace-normal sm:whitespace-nowrap text-center">
                {item.icon}
                <span className="font-extrabold text-[#1E2D24]">{item.label}:</span>
                <span className="font-semibold text-[#2F3E35]">{item.value}</span>
                {i < arr.length - 1 && (
                  <span className="text-[#52B788] font-bold mx-1 select-none inline-flex items-center">
                    <FiMinus size={11} />
                  </span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Ilustrasi SVG Perbukitan Hijau Segar & Kincir Angin */}
      <GhibliHillsDivider />

      {/* About Me Section - Nuansa Padang Rumput Segar */}
      <section id="about" className="relative py-14 px-5 md:px-6 bg-[#E6F4EA] border-b-2 border-[#1E2D24]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center mb-8 scroll-reveal opacity-0" data-animation="animate-slideInUp">
            <span className="text-xs md:text-sm font-extrabold uppercase tracking-widest text-[#2D6A4F] inline-flex items-center gap-2 mb-2.5">
              <HiSparkles size={13} className="text-[#E07A5F]" />
              {t.about.tag}
              <HiSparkles size={13} className="text-[#E07A5F]" />
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E2D24] bg-[#FFFDF7] px-6 py-2.5 ghibli-box">
              {t.about.title}
            </h2>
          </div>

          {/* Desktop: bio + tech stack berdampingan, GitHub full-width. Mobile: satu kolom. */}
          <div className="grid md:grid-cols-2 gap-5 md:gap-6 items-stretch">
            {/* Bio */}
            <div
              className="min-w-0 bg-[#FFFDF7] ghibli-box p-6 md:p-7 scroll-reveal opacity-0 flex flex-col"
              data-animation="animate-slideInLeft"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-9 h-9 bg-[#D8F3DC] ghibli-border rounded-lg flex items-center justify-center shadow-[2px_2px_0px_#2D6A4F] shrink-0">
                  <FaScroll size={15} className="text-[#1E2D24]" />
                </span>
                <h3 className="text-base md:text-lg font-bold text-[#1E2D24]">{t.about.bioTitle}</h3>
              </div>
              <p className="text-sm md:text-base text-[#2F3E35] font-semibold leading-relaxed">
                {t.about.bio}
              </p>
            </div>

            {/* Tech Stack */}
            <div
              className="min-w-0 bg-[#FFFDF7] ghibli-box p-6 md:p-7 scroll-reveal opacity-0 flex flex-col"
              data-animation="animate-slideInRight"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-9 h-9 bg-[#E9C46A] ghibli-border rounded-lg flex items-center justify-center shadow-[2px_2px_0px_#2D6A4F] shrink-0">
                  <FaTools size={16} className="text-[#1E2D24]" />
                </span>
                <h3 className="text-base md:text-lg font-bold text-[#1E2D24]">{t.about.techStackTitle}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                  <div
                    key={index}
                    className={`tech-badge flex items-center gap-1.5 px-2.5 py-1.5 ${tech.bg} ${tech.text} text-[10px] md:text-xs font-bold tracking-wide rounded-lg ghibli-border shadow-[1px_2px_0px_#1E2D24] cursor-default`}
                  >
                    <span className="text-sm">{tech.icon}</span>
                    {tech.name}
                  </div>
                ))}
              </div>
            </div>

            {/* GitHub Contributions */}
            <div
              className="md:col-span-2 min-w-0 scroll-reveal opacity-0"
              data-animation="animate-slideInUp"
            >
              <div className="flex items-center gap-2 mb-3">
                <FaSeedling size={18} className="text-[#2D6A4F]" />
                <h3 className="text-xs md:text-sm font-extrabold uppercase tracking-widest text-[#2D6A4F]">
                  {t.about.githubTitle}
                </h3>
              </div>
              <GithubCard username={githubUsername} lang={lang} t={t} />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Showcase Section */}
      <section id="portfolio" className="relative py-20 px-6 bg-[#FFFDF7]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center mb-10 scroll-reveal opacity-0" data-animation="animate-slideInUp">
            <span className="text-sm font-extrabold uppercase tracking-widest text-[#E07A5F] inline-flex items-center gap-2 mb-3">
              <HiSparkles size={14} className="text-[#2D6A4F]" />
              {t.portfolio.tag}
              <HiSparkles size={14} className="text-[#2D6A4F]" />
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1E2D24]">{t.portfolio.title}</h2>
            <p className="text-base md:text-lg text-[#1E2D24] font-semibold max-w-3xl mx-auto bg-[#D8F3DC] inline-block px-6 py-4 ghibli-box">
              {t.portfolio.subtitle}
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center gap-3 mb-12 flex-wrap scroll-reveal opacity-0" data-animation="animate-scaleIn">
            <button
              onClick={() => setActiveTab('projects')}
              className={`flex items-center gap-2 px-6 py-3 font-bold transition-all ghibli-btn cursor-pointer ${activeTab === 'projects'
                  ? 'bg-[#2D6A4F] text-[#FFFDF7] translate-y-0.5'
                  : 'bg-[#FFFDF7] text-[#1E2D24] hover:bg-[#D8F3DC]'
                }`}
            >
              <FiCode size={18} strokeWidth={2.5} />
              {t.portfolio.tabProjects}
            </button>
            <button
              onClick={() => setActiveTab('experience')}
              className={`flex items-center gap-2 px-6 py-3 font-bold transition-all ghibli-btn cursor-pointer ${activeTab === 'experience'
                  ? 'bg-[#2D6A4F] text-[#FFFDF7] translate-y-0.5'
                  : 'bg-[#FFFDF7] text-[#1E2D24] hover:bg-[#D8F3DC]'
                }`}
            >
              <FiBriefcase size={18} strokeWidth={2.5} />
              {t.portfolio.tabExperience}
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`flex items-center gap-2 px-6 py-3 font-bold transition-all ghibli-btn cursor-pointer ${activeTab === 'education'
                  ? 'bg-[#2D6A4F] text-[#FFFDF7] translate-y-0.5'
                  : 'bg-[#FFFDF7] text-[#1E2D24] hover:bg-[#D8F3DC]'
                }`}
            >
              <FaGraduationCap size={19} />
              {t.portfolio.tabEducation || 'Pendidikan'}
            </button>
            <button
              onClick={() => setActiveTab('certifications')}
              className={`flex items-center gap-2 px-6 py-3 font-bold transition-all ghibli-btn cursor-pointer ${activeTab === 'certifications'
                  ? 'bg-[#2D6A4F] text-[#FFFDF7] translate-y-0.5'
                  : 'bg-[#FFFDF7] text-[#1E2D24] hover:bg-[#D8F3DC]'
                }`}
            >
              <FaScroll size={17} />
              {t.portfolio.tabCertificates}
            </button>
          </div>

          {/* Projects Tab */}
          {activeTab === 'projects' && (
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, idx) => (
                <ProjectCard key={project.id} project={project} idx={idx} viewRepoText={t.portfolio.viewRepo} viewDemoText={t.portfolio.viewDemo} />
              ))}
            </div>
          )}

          {/* Experience Tab */}
          {activeTab === 'experience' && (
            <div className="space-y-8 max-w-3xl mx-auto">
              {experience.map((exp, idx) => (
                <div
                  key={exp.id}
                  className="bg-[#FFFDF7] ghibli-box p-8 card-hover scroll-reveal opacity-0"
                  data-animation="animate-slideInLeft"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="flex items-start gap-6 flex-col md:flex-row">
                    <div className={`w-16 h-16 ${exp.color} ghibli-border rounded-2xl flex items-center justify-center shrink-0 shadow-[3px_3px_0px_#2D6A4F]`}>
                      <FiBriefcase size={26} className="text-[#1E2D24]" strokeWidth={2.5} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold mb-2 text-[#1E2D24] leading-tight">{exp.role}</h3>
                      <div className="flex flex-wrap items-center gap-2 mb-4">
                        <span className="text-sm font-bold bg-[#E9C46A] px-4 py-1 ghibli-border rounded-lg inline-flex items-center gap-1.5">
                          <FaUniversity size={13} className="text-[#1E2D24]" />
                          {exp.company}
                        </span>
                        <span className="text-[#1E2D24] font-bold text-xs bg-[#D8F3DC] px-3 py-1 ghibli-border rounded-lg inline-flex items-center gap-1.5">
                          <FiCalendar size={12} className="text-[#2D6A4F]" />
                          {exp.period}
                        </span>
                        <span className="text-[#1E2D24] font-bold text-xs bg-[#FDEEDC] px-3 py-1 ghibli-border rounded-lg inline-flex items-center gap-1.5">
                          <FiMapPin size={12} className="text-[#E07A5F]" />
                          Banda Aceh
                        </span>
                      </div>
                      <p className="text-[#2F3E35] font-semibold text-base leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Education Tab */}
          {activeTab === 'education' && (
            <div className="space-y-8 max-w-3xl mx-auto">
              {education.map((edu, idx) => (
                <div
                  key={edu.id}
                  className="bg-[#FFFDF7] ghibli-box p-6 md:p-8 card-hover scroll-reveal opacity-0"
                  data-animation="animate-slideInLeft"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                      <h3 className="text-2xl md:text-3xl font-bold text-[#1E2D24] leading-tight font-serif flex items-center gap-2.5">
                        <FaGraduationCap size={24} className="text-[#2D6A4F] shrink-0" />
                        {edu.degree}
                      </h3>
                      <span className="px-3 py-1 bg-[#D8F3DC] ghibli-border rounded-lg text-xs font-extrabold text-[#2D6A4F]">
                        {edu.status}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-2.5 mb-4">
                      <span className="text-xs font-bold bg-[#E9C46A] px-3 py-1 ghibli-border rounded-lg text-[#1E2D24] inline-flex items-center gap-1.5">
                        <FaUniversity size={13} className="text-[#1E2D24]" />
                        {edu.institution}
                      </span>
                      <span className="text-[#1E2D24] font-bold text-xs bg-[#F3E9D2] px-3 py-1 ghibli-border rounded-lg inline-flex items-center gap-1.5">
                        <FiMapPin size={12} className="text-[#E07A5F]" />
                        {edu.location}
                      </span>
                      <span className="text-[#1E2D24] font-bold text-xs bg-[#FFFDF7] px-3 py-1 ghibli-border rounded-lg inline-flex items-center gap-1.5">
                        <FiCalendar size={12} className="text-[#2D6A4F]" />
                        {edu.period}
                      </span>
                    </div>

                    <p className="text-[#2F3E35] font-semibold text-sm md:text-base leading-relaxed mb-5">
                      {edu.description}
                    </p>

                    {/* Skripsi / Thesis Highlight Box */}
                    {edu.thesisTitle && (
                      <div className="mb-5 p-5 bg-[#FDEEDC]/80 ghibli-border rounded-2xl shadow-[3px_3px_0px_#2D6A4F] border-l-[6px] border-l-[#2D6A4F]">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                          <span className="text-[11px] md:text-xs font-black uppercase tracking-wider text-[#2D6A4F] flex items-center gap-1.5">
                            <FiBookOpen size={14} /> {edu.thesisLabel || 'Skripsi'}
                          </span>
                          {edu.thesisMetric && (
                            <span className="px-2.5 py-0.5 bg-[#2D6A4F] text-[#FFFDF7] ghibli-border rounded-lg text-xs font-extrabold shadow-[1px_1px_0px_#1E2D24] inline-flex items-center gap-1.5">
                              <FaStar size={11} className="text-[#E9C46A]" />
                              {edu.thesisMetric}
                            </span>
                          )}
                        </div>
                        <h4 className="font-extrabold text-base md:text-lg text-[#1E2D24] mb-2 leading-snug font-serif">
                          "{edu.thesisTitle}"
                        </h4>
                        <p className="text-xs md:text-sm text-[#2F3E35] font-semibold leading-relaxed">
                          {edu.thesisDetail}
                        </p>
                      </div>
                    )}

                    {/* Academic Highlights */}
                    {edu.highlights?.length > 0 && (
                      <div className="pt-3 border-t border-dashed border-[#1E2D24]/20">
                        <p className="text-xs font-extrabold uppercase tracking-wider text-[#E07A5F] mb-2.5">
                          {edu.highlightsTitle}
                        </p>
                        <ul className="space-y-2 text-xs md:text-sm font-semibold text-[#2F3E35]">
                          {edu.highlights.map((hl, hIdx) => (
                            <li key={hIdx} className="flex items-start gap-2">
                              <span className="mt-1 shrink-0 text-[#E07A5F]">
                                <FaStar size={10} />
                              </span>
                              <span>{hl}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Certifications Tab */}
          {activeTab === 'certifications' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certifications.map((cert, idx) => (
                <div
                  key={cert.id}
                  className="bg-[#FFFDF7] ghibli-box overflow-hidden card-hover scroll-reveal opacity-0 flex flex-col"
                  data-animation="animate-scaleIn"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="h-48 w-full border-b-2 border-[#1E2D24]">
                    {cert.image ? (
                      <img
                        src={cert.image}
                        alt={cert.name}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-[#D8F3DC] via-[#DDF2FD] to-[#FDEEDC] flex items-center justify-center">
                        <div className="text-center px-6">
                          <FaScroll size={36} className="text-[#2D6A4F] mx-auto mb-2" />
                          <p className="text-xs font-bold text-[#2D6A4F] leading-snug">{cert.name}</p>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between bg-[#FFFDF7]">
                    <div>
                      <h3 className="text-xl font-bold mb-3 leading-snug text-[#1E2D24]">{cert.name}</h3>
                      <p className="text-[#1E2D24] font-bold bg-[#D8F3DC] inline-flex items-center gap-1.5 px-3 py-1 ghibli-border rounded-lg text-xs mb-4">
                        <FaScroll size={12} className="text-[#2D6A4F]" />
                        {cert.issuer}
                      </p>
                    </div>
                    <p className="text-[#2D6A4F] font-bold text-right text-lg font-serif inline-flex items-center justify-end gap-1.5">
                      <FiCalendar size={15} className="text-[#2D6A4F]" />
                      {cert.year}
                    </p>
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
          <div className="flex flex-col items-center scroll-reveal opacity-0" data-animation="animate-slideInUp">
            <span className="text-sm font-extrabold uppercase tracking-widest text-[#E07A5F] inline-flex items-center gap-2 mb-3">
              <HiSparkles size={14} className="text-[#E9C46A]" />
              {t.contact.tag}
              <HiSparkles size={14} className="text-[#E9C46A]" />
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1E2D24]">{t.contact.title}</h2>
            <p className="text-base md:text-lg text-[#1E2D24] font-semibold mb-10 max-w-2xl mx-auto bg-[#FFFDF7] inline-block px-6 py-4 ghibli-box">
              {t.contact.subtitle}
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-14">
              <a href={`mailto:${CONTACT_EMAIL}`} className="social-btn flex items-center gap-2 bg-[#FFFDF7] text-[#1E2D24] ghibli-btn hover:bg-[#E9C46A]">
                <FiMail size={20} strokeWidth={2.5} />
                <span className="font-bold text-base">{t.contact.emailBtn}</span>
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
              <div className="absolute -top-6 -right-4 w-14 h-14 bg-[#E9C46A] ghibli-border rounded-2xl flex items-center justify-center shadow-[3px_3px_0px_#2D6A4F] rotate-6">
                <FiCompass size={28} className="text-[#1E2D24]" strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#1E2D24]">{t.contact.formTitle}</h3>
              <form className="space-y-5" onSubmit={handleContactSubmit}>
                {formStatus === 'success' && (
                  <div className="p-4 bg-[#D8F3DC] ghibli-border rounded-xl text-center animate-scaleIn">
                    <p className="font-bold text-[#2D6A4F] text-sm">{t.contact.successMsg}</p>
                  </div>
                )}
                {formStatus === 'incomplete' && (
                  <div className="p-4 bg-[#FDEEDC] ghibli-border rounded-xl text-center animate-scaleIn">
                    <p className="font-bold text-[#E07A5F] text-sm">{t.contact.incompleteMsg}</p>
                  </div>
                )}
                <div>
                  <input
                    type="text"
                    placeholder={t.contact.namePlaceholder}
                    value={contactForm.name}
                    onChange={(e) => setContactForm(prev => ({ ...prev, name: e.target.value }))}
                    required
                    className="w-full px-5 py-3.5 rounded-xl ghibli-border focus:border-[#2D6A4F] focus:ring-0 outline-none transition-colors shadow-[2px_2px_0px_#52B788] font-semibold text-base bg-[#E6F4EA]/50"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder={t.contact.emailPlaceholder}
                    value={contactForm.email}
                    onChange={(e) => setContactForm(prev => ({ ...prev, email: e.target.value }))}
                    required
                    className="w-full px-5 py-3.5 rounded-xl ghibli-border focus:border-[#2D6A4F] focus:ring-0 outline-none transition-colors shadow-[2px_2px_0px_#52B788] font-semibold text-base bg-[#E6F4EA]/50"
                  />
                </div>
                <div>
                  <textarea
                    rows="4"
                    placeholder={t.contact.messagePlaceholder}
                    value={contactForm.message}
                    onChange={(e) => setContactForm(prev => ({ ...prev, message: e.target.value }))}
                    required
                    className="w-full px-5 py-3.5 rounded-xl ghibli-border focus:border-[#2D6A4F] focus:ring-0 outline-none transition-colors shadow-[2px_2px_0px_#52B788] font-semibold text-base bg-[#E6F4EA]/50 resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#2D6A4F] text-[#FFFDF7] text-lg ghibli-btn hover:bg-[#E07A5F] mt-2"
                >
                  {t.contact.sendBtn}
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
            {t.footer.role}
          </p>
          <div className="flex justify-center gap-8 mb-6">
            <a href="#home" className="font-bold hover:text-[#2D6A4F] hover:-translate-y-0.5 transition-all">{t.nav.home}</a>
            <a href="#portfolio" className="font-bold hover:text-[#E07A5F] hover:-translate-y-0.5 transition-all">{t.nav.portfolio}</a>
            <a href="#contact" className="font-bold hover:text-[#2B6CB0] hover:-translate-y-0.5 transition-all">{t.nav.contact}</a>
          </div>
          <div className="w-20 h-0.5 bg-[#52B788]/50 rounded-full mb-5"></div>
          <p className="text-xs font-bold text-[#4A5D52]">{t.footer.copyright}</p>
        </div>
      </footer>

      {/* Modal Pratinjau CV: tampil dulu sebelum pengguna mengunduh */}
      {isCvPreviewOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-[#1E2D24]/70 backdrop-blur-sm"
          onClick={() => setIsCvPreviewOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="cv-preview-title"
        >
          <div
            className="flex flex-col w-full max-w-4xl h-[88vh] sm:h-[85vh] bg-[#FFFDF7] border-2 border-[#1E2D24] rounded-2xl shadow-[6px_6px_0px_#2D6A4F] overflow-hidden"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Header Modal */}
            <div className="flex items-center justify-between gap-3 px-4 sm:px-6 py-3 bg-[#F3E9D2] border-b-2 border-[#1E2D24]">
              <div className="flex items-center gap-2.5 min-w-0">
                <FiBookOpen className="text-[#2D6A4F] shrink-0" size={20} strokeWidth={2.5} />
                <h3 id="cv-preview-title" className="font-extrabold text-sm sm:text-lg text-[#1E2D24] truncate">
                  {t.hero.cvPreviewTitle}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsCvPreviewOpen(false)}
                aria-label={t.hero.cvPreviewClose}
                className="shrink-0 bg-[#E07A5F] text-[#FFFDF7] border-2 border-[#1E2D24] rounded-lg p-1.5 shadow-[2px_2px_0px_#1E2D24] hover:bg-[#2D6A4F] transition-colors cursor-pointer"
              >
                <FiX size={20} strokeWidth={2.5} />
              </button>
            </div>

            {/* Viewer PDF */}
            <div className="flex-1 min-h-0 bg-[#E6F4EA]">
              <iframe
                src="/cv.pdf#view=FitH&toolbar=0&navpanes=0"
                title={t.hero.cvPreviewTitle}
                className="w-full h-full border-0"
              />
            </div>

            {/* Footer Modal: Aksi */}
            <div className="flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 py-3 bg-[#F3E9D2] border-t-2 border-[#1E2D24]">
              <p className="hidden sm:block text-xs font-bold text-[#4A5D52]">
                {t.hero.cvPreviewHint}
              </p>
              <div className="flex flex-wrap items-center gap-2.5 ml-auto">
                <a
                  href="/cv.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFFDF7] text-[#1E2D24] border-2 border-[#1E2D24] rounded-xl shadow-[2px_2px_0px_#1E2D24] font-bold text-sm hover:bg-[#D8F3DC] transition-colors"
                >
                  <FiExternalLink size={16} strokeWidth={2.5} />
                  <span>{t.hero.cvPreviewOpenNewTab}</span>
                </a>
                <a
                  href="/cv.pdf"
                  download="CV_Feri_Mauliandi.pdf"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#2D6A4F] text-[#FFFDF7] border-2 border-[#1E2D24] rounded-xl shadow-[2px_2px_0px_#1E2D24] font-bold text-sm hover:bg-[#E07A5F] transition-colors"
                >
                  <FiDownload size={16} strokeWidth={2.5} />
                  <span>{t.hero.cvPreviewDownload}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* AI Portfolio Assistant - Live Demo (Respon otomatis mendeteksi bahasa input pengguna) */}
      <AIChatWidget />
    </div>
  );
}

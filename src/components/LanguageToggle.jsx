import React from 'react';
import { FiGlobe } from 'react-icons/fi';

export default function LanguageToggle({ currentLang, onToggle, className = '' }) {
  return (
    <div
      className={`inline-flex items-center gap-1 p-1 bg-[#FFFDF7] border-2 border-[#1E2D24] rounded-xl shadow-[2px_2px_0px_#1E2D24] select-none ${className}`}
      role="group"
      aria-label="Pilih Bahasa / Language Selector"
    >
      <div className="pl-1.5 pr-0.5 text-[#2D6A4F] flex items-center justify-center">
        <FiGlobe size={15} strokeWidth={2.5} />
      </div>

      {/* Tombol Bahasa Indonesia */}
      <button
        type="button"
        onClick={() => onToggle('id')}
        className={`px-2.5 py-1 rounded-lg text-xs md:text-sm font-extrabold tracking-wider transition-all duration-200 cursor-pointer ${
          currentLang === 'id'
            ? 'bg-[#2D6A4F] text-[#FFFDF7] shadow-[1px_1px_0px_#1E2D24]'
            : 'text-[#1E2D24] hover:bg-[#D8F3DC] opacity-75 hover:opacity-100'
        }`}
        title="Bahasa Indonesia"
      >
        ID
      </button>

      {/* Pembatas Ringan */}
      <div className="w-[1.5px] h-3.5 bg-[#1E2D24]/20 mx-0.5" />

      {/* Tombol English */}
      <button
        type="button"
        onClick={() => onToggle('en')}
        className={`px-2.5 py-1 rounded-lg text-xs md:text-sm font-extrabold tracking-wider transition-all duration-200 cursor-pointer ${
          currentLang === 'en'
            ? 'bg-[#2D6A4F] text-[#FFFDF7] shadow-[1px_1px_0px_#1E2D24]'
            : 'text-[#1E2D24] hover:bg-[#D8F3DC] opacity-75 hover:opacity-100'
        }`}
        title="English"
      >
        EN
      </button>
    </div>
  );
}

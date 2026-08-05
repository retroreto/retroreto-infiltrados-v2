import React from 'react';
import logoInfiltradosSmall from '../assets/images/logo-infiltrados-white-small.webp';

interface RetroRetoLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
}

export const RetroRetoLogo: React.FC<RetroRetoLogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = true
}) => {
  const sizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl sm:text-3xl',
    lg: 'text-3xl sm:text-4xl',
    xl: 'text-4xl sm:text-5xl'
  };

  const imageSizes = {
    sm: 'h-6 sm:h-7',
    md: 'h-8 sm:h-10',
    lg: 'h-10 sm:h-12',
    xl: 'h-12 sm:h-16'
  };

  return (
    <div className={`flex flex-col items-center justify-center text-center select-none ${className}`}>
      {/* Logo Main Row */}
      <div className={`flex items-center justify-center gap-1.5 sm:gap-2 font-black tracking-tight uppercase leading-none ${sizeClasses[size]}`}>
        {/* RETRO */}
        <span className="text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)]">
          RETRO
        </span>

        {/* Imagen Oficial Integrada en el centro */}
        <div className={`relative inline-flex items-center justify-center shrink-0 ${imageSizes[size]}`}>
          <img
            src={logoInfiltradosSmall}
            alt="RetroReto Logo"
            className="w-auto h-full object-contain drop-shadow-[0_0_12px_rgba(0,240,255,0.6)]"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* RETO */}
        <span className="text-[#E52E2E] drop-shadow-[0_0_15px_rgba(229,46,46,0.6)]">
          RETO
        </span>
      </div>

      {/* Subtitle / Tagline */}
      {showSubtitle && (
        <div className="mt-1.5 flex items-center justify-center gap-2">
          <div className="h-[1px] w-6 sm:w-10 bg-gradient-to-r from-transparent to-[#00F0FF]/60" />
          <span className="text-[10px] sm:text-xs font-black tracking-[0.28em] text-[#00F0FF] uppercase drop-shadow-[0_0_8px_rgba(0,240,255,0.4)]">
            INFILTRADOS EN EL TIEMPO
          </span>
          <div className="h-[1px] w-6 sm:w-10 bg-gradient-to-l from-transparent to-[#00F0FF]/60" />
        </div>
      )}
    </div>
  );
};

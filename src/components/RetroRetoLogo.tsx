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
  // Tamaños adaptativos para la imagen según el prop recibido
  const imageSizeClasses = {
    sm: 'max-h-7',
    md: 'max-h-9 sm:max-h-10',
    lg: 'max-h-12 sm:max-h-14',
    xl: 'max-h-16 sm:max-h-20'
  };

  return (
    <div className={`flex flex-col items-center justify-center text-center select-none ${className}`}>
      {/* Logo Main Image Row */}
      <div className="flex items-center justify-center w-full py-1">
        <img
          src={logoInfiltradosSmall}
          alt="RetroReto Infiltrados en el Tiempo"
          className={`w-full object-contain drop-shadow-[0_0_20px_rgba(0,242,255,0.4)] transition-transform duration-300 ${imageSizeClasses[size]}`}
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Subtitle / Tagline opcional */}
      {showSubtitle && (
        <div className="mt-2 flex items-center justify-center gap-2">
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

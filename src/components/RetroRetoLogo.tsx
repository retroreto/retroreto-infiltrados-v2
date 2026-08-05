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
  // Si el Navbar pide tamaño 'sm', renderizamos directamente la imagen oficial .webp optimizada para la barra
  if (size === 'sm') {
    return (
      <div className={`flex items-center select-none ${className}`}>
        <img
          src={logoInfiltradosSmall}
          alt="RetroReto Logo"
          className="h-7 sm:h-8 w-auto object-contain drop-shadow-[0_0_10px_rgba(0,240,255,0.4)]"
          referrerPolicy="no-referrer"
        />
      </div>
    );
  }

  // Para los tamaños grandes (md, lg, xl) mantenemos la estructura original con texto y subtítulo
  const sizeClasses = {
    md: 'text-2xl sm:text-3xl',
    lg: 'text-3xl sm:text-4xl',
    xl: 'text-4xl sm:text-5xl'
  };

  const helmetSizes = {
    md: 'w-8 h-8 sm:w-10 sm:h-10',
    lg: 'w-10 h-10 sm:w-12 sm:h-12',
    xl: 'w-12 h-12 sm:w-16 sm:h-16'
  };

  return (
    <div className={`flex flex-col items-center justify-center text-center select-none ${className}`}>
      <div className={`flex items-center justify-center gap-1.5 sm:gap-2 font-black tracking-tight uppercase leading-none ${sizeClasses[size]}`}>
        <span className="text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)]">
          RETRO
        </span>

        <div className={`relative inline-flex items-center justify-center shrink-0 ${helmetSizes[size]}`}>
          <img
            src={logoInfiltradosSmall}
            alt="RetroReto Logo"
            className="w-full h-full object-contain drop-shadow-[0_0_12px_rgba(0,240,255,0.6)]"
            referrerPolicy="no-referrer"
          />
        </div>

        <span className="text-[#E52E2E] drop-shadow-[0_0_15px_rgba(229,46,46,0.6)]">
          RETO
        </span>
      </div>

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

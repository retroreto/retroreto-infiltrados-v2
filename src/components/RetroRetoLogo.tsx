import React, { useState } from 'react';
import logoImg from '../assets/logo-infiltrados-white-small.webp';

// Dentro de RetroRetoLogo:
<img
  src={logoImg}
  alt="Infiltrados RetroReto Logo"
  className={`object-contain shrink-0 max-w-full ${imgSizeClasses[size]}`}
/>

export const RetroRetoLogo: React.FC<RetroRetoLogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = true
}) => {
  const [imgError, setImgError] = useState(false);

  // Clases de altura proporcional según la ubicación en la UI
  const imgSizeClasses = {
    sm: 'h-6 sm:h-7 w-auto',   // Navbar pequeño
    md: 'h-8 sm:h-10 w-auto',  // Tamaño mediano
    lg: 'h-10 sm:h-12 w-auto', // Tamaño grande
    xl: 'h-14 sm:h-20 w-auto'  // Encabezado principal (HomeView)
  };

  return (
    <div className={`flex flex-col items-center justify-center text-center select-none ${className}`}>
      {/* Carga del logo mediante Vite */}
      {!imgError ? (
        <img
          src={logoImg}
          alt="Infiltrados RetroReto Logo"
          onError={() => setImgError(true)}
          className={`object-contain shrink-0 max-w-full drop-shadow-[0_0_12px_rgba(0,240,255,0.4)] ${imgSizeClasses[size]}`}
        />
      ) : (
        /* Fallback visual si la imagen falla */
        <span className="font-black text-white text-xl uppercase">RETRO RETO</span>
      )}

      {/* Subtítulo opcional */}
      {showSubtitle && (
        <div className="mt-2 flex items-center justify-center gap-2">
          <div className="h-[1px] w-6 sm:w-10 bg-gradient-to-r from-transparent to-[#00F0FF]/60" />
          <span className="text-[10px] sm:text-xs font-black tracking-[0.28em] text-[#00F0FF] uppercase">
            INFILTRADOS EN EL TIEMPO
          </span>
          <div className="h-[1px] w-6 sm:w-10 bg-gradient-to-l from-transparent to-[#00F0FF]/60" />
        </div>
      )}
    </div>
  );
};

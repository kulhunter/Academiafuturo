import React from 'react';

interface LogoFuturoProps {
  variant?: 'color' | 'black' | 'white';
  layout?: 'horizontal' | 'vertical' | 'icon';
  className?: string;
}

export default function LogoFuturo({ variant = 'color', layout = 'horizontal', className = '' }: LogoFuturoProps) {
  // Colores según variante
  const primaryColor = variant === 'white' ? '#FFFFFF' : (variant === 'black' ? '#1e293b' : '#1e293b'); // Dark Slate

  // SVG Base (Cuadrado sólido con bordes redondeados según tríptico)
  const IconSVG = (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
      <rect width="40" height="40" rx="12" fill={primaryColor} />
    </svg>
  );

  const TextSVG = (
    <div className={`flex flex-col ${layout === 'horizontal' ? 'ml-3' : 'mt-2 items-center text-center'}`}>
      <span style={{ color: primaryColor, fontSize: layout === 'vertical' ? '2rem' : '1.8rem', lineHeight: 1 }} className="font-black italic tracking-tighter uppercase">
        FUTURO
      </span>
      <span style={{ color: variant === 'color' ? '#64748b' : primaryColor, fontSize: '0.6rem', letterSpacing: '0.2em' }} className="font-bold uppercase opacity-90 mt-1">
        Escuela de Conductores
      </span>
    </div>
  );

  if (layout === 'icon') {
    return <div className={`inline-flex ${className}`}>{IconSVG}</div>;
  }

  if (layout === 'vertical') {
    return (
      <div className={`inline-flex flex-col items-center justify-center ${className}`}>
        {IconSVG}
        {TextSVG}
      </div>
    );
  }

  // Horizontal (Default)
  return (
    <div className={`inline-flex items-center ${className}`}>
      {IconSVG}
      {TextSVG}
    </div>
  );
}

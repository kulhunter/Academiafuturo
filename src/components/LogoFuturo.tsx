import React from 'react';

interface LogoFuturoProps {
  variant?: 'color' | 'black' | 'white';
  layout?: 'horizontal' | 'vertical' | 'icon';
  className?: string;
}

export default function LogoFuturo({ variant = 'color', layout = 'horizontal', className = '' }: LogoFuturoProps) {
  // Colores según variante
  const primaryColor = variant === 'white' ? '#FFFFFF' : (variant === 'black' ? '#1e293b' : '#1e293b'); // Dark Slate
  const accentColor = variant === 'white' ? '#FFFFFF' : (variant === 'black' ? '#1e293b' : '#facc15'); // Yellow
  const neutralColor = variant === 'white' ? '#FFFFFF' : (variant === 'black' ? '#1e293b' : '#FFFFFF');

  // SVG Base (El cuadrito ajedrezado estilizado, símbolo de meta/carreras)
  const IconSVG = (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
      <rect width="40" height="40" rx="8" fill={primaryColor} />
      <path d="M10 10H20V20H10V10Z" fill={neutralColor} />
      <path d="M20 20H30V30H20V20Z" fill={neutralColor} />
      <path d="M20 10H30V20H20V10Z" fill={accentColor} />
      <path d="M10 20H20V30H10V20Z" fill={accentColor} />
    </svg>
  );

  const TextSVG = (
    <div className={`flex flex-col ${layout === 'horizontal' ? 'ml-3' : 'mt-3 items-center text-center'}`}>
      <span style={{ color: primaryColor, fontSize: layout === 'vertical' ? '1.8rem' : '1.5rem', lineHeight: 1 }} className="font-black italic tracking-tighter uppercase">
        Futuro
      </span>
      <span style={{ color: variant === 'color' ? '#64748b' : primaryColor, fontSize: '0.65rem', letterSpacing: '0.15em' }} className="font-bold uppercase opacity-80">
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

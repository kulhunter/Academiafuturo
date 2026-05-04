import React from 'react';

interface LogoFuturoProps {
  variant?: 'color' | 'black' | 'white';
  layout?: 'horizontal' | 'vertical' | 'icon';
  className?: string;
}

export default function LogoFuturo({ variant = 'color', layout = 'horizontal', className = '' }: LogoFuturoProps) {
  // Colores según variante
  const primaryColor = variant === 'white' ? '#FFFFFF' : (variant === 'black' ? '#0f172a' : '#0f172a'); // Slate-900
  const accentColor = variant === 'white' ? '#3b82f6' : '#2563eb'; // Blue-500 or Blue-600

  // SVG Base (Modern steering wheel or simplified geometric path)
  const IconSVG = (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
      <rect width="40" height="40" rx="12" fill={primaryColor} />
      <path d="M20 8C13.3726 8 8 13.3726 8 20C8 26.6274 13.3726 32 20 32C26.6274 32 32 26.6274 32 20C32 13.3726 26.6274 8 20 8ZM20 10V14C23.3137 14 26 16.6863 26 20C26 23.3137 23.3137 26 20 26V30C14.4772 30 10 25.5228 10 20C10 14.4772 14.4772 10 20 10Z" fill={accentColor} />
      <circle cx="20" cy="20" r="3" fill={accentColor} />
    </svg>
  );

  const TextSVG = (
    <div className={`flex flex-col ${layout === 'horizontal' ? 'ml-3' : 'mt-3 items-center text-center'}`}>
      <div className="flex flex-col leading-none">
        <span style={{ color: variant === 'color' ? '#64748b' : primaryColor, fontSize: '0.65rem', letterSpacing: '0.1em' }} className="font-black uppercase mb-1">
          Escuela de Conductores
        </span>
        <span style={{ color: primaryColor, fontSize: layout === 'vertical' ? '2.5rem' : '1.8rem' }} className="font-black italic tracking-tighter uppercase leading-none">
          FUTURO
        </span>
      </div>
      {layout === 'vertical' && (
        <span style={{ color: accentColor, fontSize: '0.6rem', letterSpacing: '0.15em' }} className="font-bold uppercase mt-2 border-t border-slate-200 pt-2 px-4">
          Experiencia · Seriedad · Responsabilidad
        </span>
      )}
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

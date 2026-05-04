import React from 'react';

interface LogoFuturoProps {
  variant?: 'color' | 'black' | 'white';
  layout?: 'horizontal' | 'vertical' | 'icon';
  className?: string;
}

export default function LogoFuturo({ variant = 'color', layout = 'horizontal', className = '' }: LogoFuturoProps) {
  const isWhite = variant === 'white';
  const squareColor = isWhite ? '#FFFFFF' : '#fbbf24'; // Yellow-400 or White
  const textColor = isWhite ? '#FFFFFF' : '#1e293b';
  const subtitleColor = isWhite ? '#cbd5e1' : '#64748b';

  const IconSVG = (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
      <rect width="48" height="48" rx="12" fill={isWhite ? 'rgba(255,255,255,0.1)' : '#1e293b'} />
      <rect x="10" y="10" width="14" height="14" rx="3" fill={squareColor} />
      <rect x="24" y="24" width="14" height="14" rx="3" fill={squareColor} />
    </svg>
  );

  const TextSVG = (
    <div className={`flex flex-col ${layout === 'horizontal' ? 'ml-3' : 'mt-3 items-center text-center'}`}>
      <span className="font-black italic uppercase leading-none tracking-tighter" style={{ color: textColor, fontSize: layout === 'vertical' ? '2.5rem' : '1.8rem' }}>
        FUTURO
      </span>
      <span className="font-black uppercase tracking-[0.2em]" style={{ color: subtitleColor, fontSize: '0.6rem' }}>
        Escuela de Conductores
      </span>
      {layout === 'vertical' && (
        <span style={{ color: squareColor, fontSize: '0.55rem', letterSpacing: '0.1em' }} className="font-bold uppercase mt-2 border-t border-slate-200 pt-2 px-4">
          Experiencia · Seriedad · Responsabilidad
        </span>
      )}
    </div>
  );

  if (layout === 'icon') {
    return <div className={`inline-flex ${className}`}>{IconSVG}</div>;
  }

  return (
    <div className={`inline-flex ${layout === 'vertical' ? 'flex-col items-center text-center' : 'items-center'} ${className}`}>
      {IconSVG}
      {TextSVG}
    </div>
  );
}

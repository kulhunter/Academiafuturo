'use client';
import { useEffect } from 'react';
import LogoFuturo from '@/components/LogoFuturo';

export default function PitchDeck() {
  useEffect(() => {
    // Basic setup for scroll snapping effects if needed
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="h-screen w-screen overflow-y-auto snap-y snap-mandatory bg-slate-900 text-slate-100 font-sans selection:bg-yellow-400 selection:text-slate-900 scroll-smooth">
      
      {/* Slide 1: Portada */}
      <section className="h-screen w-full snap-start flex flex-col justify-center items-center relative p-8">
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="z-10 text-center max-w-4xl">
          <div className="mb-12">
            <LogoFuturo variant="white" layout="vertical" />
          </div>
          <div className="inline-block bg-yellow-400 text-slate-900 px-6 py-2 rounded-full font-black uppercase tracking-widest text-xs mb-8">
            Estrategia Digital 2026
          </div>
          <h1 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-none mb-6">
            Conducir es un<br/><span className="text-yellow-400">Acto de Confianza.</span>
          </h1>
          <p className="text-xl md:text-2xl font-bold text-slate-400 max-w-2xl mx-auto">
            Transformando la experiencia de Escuela Futuro: De enseñar a manejar, a eliminar el miedo.
          </p>
        </div>
        <div className="absolute bottom-10 animate-bounce text-yellow-400 opacity-50">
          <i className="fa-solid fa-chevron-down text-3xl"></i>
        </div>
      </section>

      {/* Slide 2: El Diagnóstico */}
      <section className="h-screen w-full snap-start flex items-center p-8 bg-slate-50 text-slate-900 relative">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block bg-yellow-400 text-slate-900 px-6 py-2 rounded-full font-black uppercase tracking-widest text-xs mb-6">
              El Diagnóstico
            </div>
            <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none mb-8">
              El verdadero problema<br/>no es el auto,<br/><span className="text-yellow-500">Es el Miedo.</span>
            </h2>
            <p className="text-xl font-bold text-slate-600 mb-6">
              Quien busca una escuela en Macul o Peñalolén no está comprando &quot;horas en un citycar&quot;. Está buscando a alguien que no le grite si se le apaga el motor.
            </p>
            <p className="text-xl font-bold text-slate-600">
              <strong className="text-slate-900">El diferencial de Escuela Futuro no es el simulador. Es la humanidad.</strong> Es la paciencia infinita del instructor en el asiento del copiloto. Nuestra misión digital es transmitir esa misma paz antes de que el alumno pague un peso.
            </p>
          </div>
          <div className="h-[60vh] rounded-3xl overflow-hidden shadow-2xl relative">
            <img src="https://images.unsplash.com/photo-1516224498413-84ecf3a1e7fc?q=80&w=1280" alt="Instructor paciente" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Slide 3: Datos SEO */}
      <section className="h-screen w-full snap-start flex items-center p-8 bg-slate-900 relative">
        <div className="max-w-7xl mx-auto w-full">
          <div className="mb-12 text-center">
             <div className="inline-block bg-yellow-400 text-slate-900 px-6 py-2 rounded-full font-black uppercase tracking-widest text-xs mb-6">
              Oportunidad de Mercado
            </div>
            <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter leading-none text-white">
              Hay miles de personas<br/>buscando <span className="text-yellow-400">ahora mismo.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700">
              <div className="text-5xl font-black text-yellow-400 mb-4">+2.500</div>
              <h3 className="text-xl font-black text-white uppercase mb-2">Búsquedas Mensuales</h3>
              <p className="text-slate-400 font-bold text-sm">Vecinos de Macul y Peñalolén buscan términos como &quot;escuela de conductores cerca de mi&quot; o &quot;clases de manejo macul&quot;.</p>
            </div>
            <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700">
              <div className="text-5xl font-black text-yellow-400 mb-4">Competencia</div>
              <h3 className="text-xl font-black text-white uppercase mb-2">Automóvil Club & Macol</h3>
              <p className="text-slate-400 font-bold text-sm">Venden volumen y tradición. Sus webs parecen instituciones públicas. Ignoran el dolor emocional del usuario principiante.</p>
            </div>
            <div className="bg-yellow-400 p-8 rounded-3xl border border-yellow-500 text-slate-900">
              <div className="text-5xl font-black mb-4"><i className="fa-solid fa-trophy"></i></div>
              <h3 className="text-xl font-black uppercase mb-2">Nuestra Estrategia</h3>
              <p className="font-bold text-sm text-slate-800">SEO Hiper-Local + Autoridad de Nicho. Un blog que responda cómo es el circuito municipal y un diseño web empático que reduzca el rebote.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 4: Solución */}
      <section className="h-screen w-full snap-start flex items-center p-8 bg-white text-slate-900 relative">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 space-y-6">
             <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 text-xl flex-shrink-0"><i className="fa-solid fa-location-dot"></i></div>
                <div>
                  <h4 className="font-black uppercase text-lg">Cercanía Local</h4>
                  <p className="text-slate-500 text-sm font-bold">Landings específicas para Peñalolén y Macul dominando Google Maps.</p>
                </div>
             </div>
             <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 text-xl flex-shrink-0"><i className="fa-brands fa-whatsapp"></i></div>
                <div>
                  <h4 className="font-black uppercase text-lg">Embudo de Empatía</h4>
                  <p className="text-slate-500 text-sm font-bold">En vez de un frío &quot;Comprar&quot;, un flujo hacia WhatsApp para dar seguridad humana antes del pago.</p>
                </div>
             </div>
             <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 text-xl flex-shrink-0"><i className="fa-solid fa-laptop-code"></i></div>
                <div>
                  <h4 className="font-black uppercase text-lg">Tecnología Anti-Estrés</h4>
                  <p className="text-slate-500 text-sm font-bold">El simulador no es para cobrar más, es una herramienta terapéutica para equivocarse en casa y no en el municipio.</p>
                </div>
             </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="inline-block bg-yellow-400 text-slate-900 px-6 py-2 rounded-full font-black uppercase tracking-widest text-xs mb-6">
              La Nueva Web
            </div>
            <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none mb-8">
              Una web que<br/><span className="text-yellow-500">da la bienvenida.</span>
            </h2>
            <p className="text-xl font-bold text-slate-600">
              Transformamos la página en la mejor recepcionista: Clara, moderna, amigable y extremadamente rápida, construida con la tecnología que usan las empresas líderes (Next.js & GitHub Pages).
            </p>
          </div>
        </div>
      </section>

      {/* Slide 5: Cierre */}
      <section className="h-screen w-full snap-start flex flex-col justify-center items-center relative p-8 bg-slate-900 text-center">
        <div className="max-w-3xl mx-auto">
          <LogoFuturo variant="white" layout="icon" className="mb-8 scale-150" />
          <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none mb-8 text-white">
            Hagamos que las<br/><span className="text-yellow-400">cosas pasen.</span>
          </h2>
          <p className="text-xl font-bold text-slate-400 mb-12">
            Una inversión enfocada en transformar cada visitante asustado en un alumno seguro y un promotor de por vida de la Escuela Futuro.
          </p>
          
          <a href="/" className="inline-block bg-yellow-400 text-slate-900 px-10 py-5 rounded-full font-black uppercase tracking-widest text-sm hover:bg-white transition-all transform hover:scale-105 shadow-2xl shadow-yellow-400/20">
            Ver el Sitio Web Terminado
          </a>
        </div>
      </section>

    </div>
  );
}

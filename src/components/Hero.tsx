export default function Hero() {
  return (
    <header className="min-h-[650px] flex items-center relative overflow-hidden bg-slate-900">
        <div 
          className="absolute inset-0 z-0 opacity-40 mix-blend-overlay"
          style={{
            backgroundImage: "url('/images/hero-image.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        ></div>
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
        <div className="checker-pattern h-4 w-full absolute bottom-0 left-0 z-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 w-full py-20 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
                <div className="inline-flex items-center gap-2 bg-green-500 text-white font-black px-4 py-1.5 rounded-sm text-xs uppercase tracking-widest mb-6 shadow-lg shadow-green-500/20">
                    <i className="fa-solid fa-circle-check"></i> 95% de Aprobación Municipal
                </div>
                <h1 className="text-5xl lg:text-7xl font-black leading-[0.95] italic uppercase tracking-tighter mb-6">
                    Aprende con paciencia,<br/><span className="text-yellow-400">asegura tu</span> Licencia.
                </h1>
                <p className="text-lg text-slate-300 font-bold mb-8 leading-relaxed max-w-lg">
                    Deja los nervios atrás. Te formamos desde cero con instructores dedicados, vehículos modernos Citycar y preparación psicotécnica incluida.
                </p>
                <div className="flex flex-wrap gap-4">
                    <a href="#planes" className="bg-yellow-400 text-slate-900 font-black px-8 py-4 rounded hover:bg-white transition text-center uppercase tracking-widest flex items-center gap-2 shadow-[0_0_20px_rgba(250,204,21,0.3)]">
                        Ver Planes y Valores <i className="fa-solid fa-arrow-right"></i>
                    </a>
                </div>
            </div>
            
            <div className="hidden lg:flex justify-end">
                <div className="bg-white/10 backdrop-blur-md p-8 border border-white/20 rounded-2xl w-80 text-white shadow-2xl transform rotate-3 hover:rotate-0 transition duration-500">
                    <div className="flex text-yellow-400 text-xl mb-4 gap-1">
                        <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                    </div>
                    <p className="font-bold italic text-lg leading-tight mb-6">&quot;Los profesores tienen una paciencia infinita. Gracias al curso garantizado pude superar mi miedo a manejar en tráfico real.&quot;</p>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center font-black text-yellow-400 border-2 border-yellow-400">MG</div>
                        <div>
                            <div className="font-black text-sm">María González</div>
                            <div className="text-xs text-green-400 font-bold">Aprobada en Sede Peñalolén</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

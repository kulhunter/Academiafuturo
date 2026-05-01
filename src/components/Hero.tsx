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
                <h1 className="text-5xl lg:text-7xl font-black leading-[0.95] italic uppercase tracking-tighter mb-6">
                    Aprende con paciencia,<br/><span className="text-yellow-400">asegura tu</span> Licencia.
                </h1>
                <p className="text-lg text-slate-300 font-bold mb-8 leading-relaxed max-w-lg">
                    Deja los nervios atrás. Te formamos desde cero con clases prácticas individuales y profesores que te enseñan con verdadera paciencia y dedicación.
                </p>
                <div className="flex flex-wrap gap-4">
                    <a href="#planes" className="bg-yellow-400 text-slate-900 font-black px-8 py-4 rounded hover:bg-white transition text-center uppercase tracking-widest flex items-center gap-2 shadow-[0_0_20px_rgba(250,204,21,0.3)]">
                        Ver Planes y Valores <i className="fa-solid fa-arrow-right"></i>
                    </a>
                </div>
            </div>
            <div className="hidden lg:flex justify-end relative">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-yellow-400 rounded-full blur-3xl opacity-20"></div>
            </div>
        </div>
    </header>
  )
}

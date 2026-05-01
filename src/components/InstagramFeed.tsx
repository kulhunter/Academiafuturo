'use client';
import Script from 'next/script';
import { useEffect } from 'react';

export default function InstagramFeed() {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const instgrm = (window as any).instgrm;
    if (instgrm) {
      instgrm.Embeds.process();
    }
  }, []);

  const embeds = [
    "https://www.instagram.com/p/CnK3eMHu_Oh/",
    "https://www.instagram.com/p/CnDtc8vODMu/",
    "https://www.instagram.com/p/CnDsw6zuyUu/",
    "https://www.instagram.com/p/B_jOAuWjHBh/",
    "https://www.instagram.com/p/CnDspViO690/"
  ];

  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden">
      <Script 
        src="https://www.instagram.com/embed.js" 
        strategy="afterInteractive" 
        onLoad={() => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const instgrm = (window as any).instgrm;
          if (instgrm) {
            instgrm.Embeds.process();
          }
        }}
      />
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 text-center md:text-left gap-6">
          <div>
            <span className="text-yellow-400 font-black tracking-widest uppercase text-sm mb-2 block">
              <i className="fa-brands fa-instagram mr-2"></i> Nuestra Comunidad
            </span>
            <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter">
              Pasión por <span className="text-yellow-400">Enseñar</span>
            </h2>
          </div>
          <a href="https://www.instagram.com/escueladeconductoresfuturo/" target="_blank" rel="noreferrer" className="bg-yellow-400 text-slate-900 font-black px-8 py-4 rounded-xl text-sm uppercase tracking-widest hover:bg-white transition-all shadow-lg">
            Seguir en Instagram
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {embeds.slice(0, 3).map((url, i) => (
            <div key={i} className="flex justify-center transform hover:scale-[1.02] transition-transform duration-500">
              <div className="w-full max-w-[400px] bg-white rounded-2xl p-1 shadow-2xl">
                <blockquote 
                  className="instagram-media" 
                  data-instgrm-permalink={url} 
                  data-instgrm-version="14"
                  style={{ 
                      background: '#FFF', 
                      border: 0, 
                      borderRadius: '16px', 
                      boxShadow: 'none', 
                      margin: '0', 
                      width: '100%' 
                  }}
                >
                </blockquote>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
            <p className="text-slate-400 font-bold mb-8 italic">Únete a los cientos de alumnos que ya perdieron el miedo a conducir.</p>
            <div className="h-px w-32 bg-slate-800 mx-auto"></div>
        </div>
      </div>
    </section>
  );
}

'use client';
import Script from 'next/script';
import { useEffect } from 'react';

export default function InstagramFeed() {
  useEffect(() => {
    // @ts-ignore
    if (window.instgrm) {
      // @ts-ignore
      window.instgrm.Embeds.process();
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
    <section className="py-24 bg-slate-50">
      <Script 
        src="https://www.instagram.com/embed.js" 
        strategy="afterInteractive" 
        onLoad={() => {
          // @ts-ignore
          if (window.instgrm) {
            // @ts-ignore
            window.instgrm.Embeds.process();
          }
        }}
      />
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-yellow-500 font-black tracking-widest uppercase text-sm mb-2 block">
              <i className="fa-brands fa-instagram"></i> Síguenos en Instagram
            </span>
            <h2 className="text-3xl font-black text-slate-900 uppercase italic">Nuestra Comunidad</h2>
          </div>
          <a href="https://www.instagram.com/escueladeconductoresfuturo/" target="_blank" rel="noreferrer" className="hidden md:inline-block bg-white text-slate-900 font-black px-6 py-2 rounded shadow-sm text-sm uppercase tracking-widest hover:bg-slate-900 hover:text-white transition">
            Ver Instagram
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {embeds.slice(0, 4).map((url, i) => (
            <div key={i} className="flex justify-center bg-white p-2 rounded-xl shadow-sm border border-slate-100">
              <blockquote 
                className="instagram-media" 
                data-instgrm-permalink={url} 
                data-instgrm-version="14"
                style={{ 
                    background: '#FFF', 
                    border: 0, 
                    borderRadius: '3px', 
                    boxShadow: 'none', 
                    margin: '1px', 
                    maxWidth: '540px', 
                    minWidth: '326px', 
                    padding: 0, 
                    width: '99.375%' 
                }}
              >
              </blockquote>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <a href="https://www.instagram.com/escueladeconductoresfuturo/" target="_blank" rel="noreferrer" className="inline-block bg-white text-slate-900 font-black px-6 py-3 rounded text-sm uppercase tracking-widest hover:bg-slate-200 transition w-full shadow-sm">
            Ver Instagram
          </a>
        </div>
      </div>
    </section>
  );
}

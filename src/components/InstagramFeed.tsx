export default function InstagramFeed() {
  const images = [
    "https://instagram.fscl9-1.fna.fbcdn.net/v/t51.82787-15/622657250_18079451723010387_6531971613768587850_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=100&ig_cache_key=MzAxMTQ2MzI2ODAwNzY3MDY4OQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjcyMHg3MjAuc2RyLkMzIn0%3D&_nc_ohc=Ip2G9l73oN0Q7kNvwGDCqM4&_nc_oc=Adr7kKpV85KHxHbCG1YRmvcla_dv_MmBcAzQTtQKQLKR2ybJt_R",
    "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=600&h=600",
    "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=600&h=600",
    "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&q=80&w=600&h=600"
  ];

  return (
    <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-end mb-12">
                <div>
                    <span className="text-yellow-500 font-black tracking-widest uppercase text-sm mb-2 block"><i className="fa-brands fa-instagram"></i> Síguenos en Instagram</span>
                    <h2 className="text-3xl font-black text-slate-900 uppercase italic">Nuestra Comunidad</h2>
                </div>
                <a href="https://www.instagram.com/escueladeconductoresfuturo/" target="_blank" rel="noreferrer" className="hidden md:inline-block bg-slate-100 text-slate-900 font-black px-6 py-2 rounded text-sm uppercase tracking-widest hover:bg-slate-200 transition">
                    Ver Instagram
                </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {images.map((src, i) => (
                    <a key={i} href="https://www.instagram.com/escueladeconductoresfuturo/" target="_blank" rel="noreferrer" className="relative group overflow-hidden rounded-xl aspect-square block">
                        <img src={src} alt="Instagram Post" className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500" />
                        <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                            <i className="fa-brands fa-instagram text-4xl text-white"></i>
                        </div>
                    </a>
                ))}
            </div>
            
            <div className="mt-8 text-center md:hidden">
                <a href="https://www.instagram.com/escueladeconductoresfuturo/" target="_blank" rel="noreferrer" className="inline-block bg-slate-100 text-slate-900 font-black px-6 py-3 rounded text-sm uppercase tracking-widest hover:bg-slate-200 transition w-full">
                    Ver Instagram
                </a>
            </div>
        </div>
    </section>
  )
}

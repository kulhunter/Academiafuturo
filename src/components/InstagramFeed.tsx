export default function InstagramFeed() {
  const images = [
    "/images/hero-image.jpg",
    "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=600&h=600",
    "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=600&h=600",
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

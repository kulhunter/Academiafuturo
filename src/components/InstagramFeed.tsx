'use client';
import { Camera, Heart, MessageCircle, ExternalLink } from 'lucide-react';

const instagramPosts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=600",
    likes: 124,
    comments: 12,
    url: "https://www.instagram.com/escueladeconductoresfuturo/"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=600",
    likes: 89,
    comments: 5,
    url: "https://www.instagram.com/escueladeconductoresfuturo/"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=600",
    likes: 210,
    comments: 18,
    url: "https://www.instagram.com/escueladeconductoresfuturo/"
  }
];

export default function InstagramFeed() {
  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 text-center md:text-left gap-6">
          <div>
            <span className="inline-flex items-center gap-2 bg-blue-600/20 text-blue-400 px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase mb-4">
              <Camera className="w-4 h-4" />
              Nuestra Comunidad
            </span>
            <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter">
              Pasión por <span className="text-blue-500">Enseñar</span>
            </h2>
          </div>
          <a 
            href="https://www.instagram.com/escueladeconductoresfuturo/" 
            target="_blank" 
            rel="noreferrer" 
            className="group bg-blue-600 text-white font-black px-8 py-4 rounded-xl text-sm uppercase tracking-widest hover:bg-white hover:text-blue-600 transition-all shadow-xl shadow-blue-600/20 flex items-center gap-2"
          >
            Seguir en Instagram
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {instagramPosts.map((post) => (
            <a 
              key={post.id} 
              href={post.url}
              target="_blank"
              rel="noreferrer"
              className="group relative bg-slate-800 rounded-3xl overflow-hidden aspect-square shadow-2xl"
            >
              <img 
                src={post.image} 
                alt="Instagram post" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity bg-blue-600/40 backdrop-blur-[2px]">
                <div className="flex items-center gap-2 font-black text-xl">
                  <Heart className="w-6 h-6 fill-current" />
                  {post.likes}
                </div>
                <div className="flex items-center gap-2 font-black text-xl">
                  <MessageCircle className="w-6 h-6 fill-current" />
                  {post.comments}
                </div>
              </div>

              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:bg-white group-hover:text-blue-600 transition-colors">
                  <i className="fa-brands fa-instagram text-xl"></i>
                </div>
              </div>
            </a>
          ))}
        </div>
        
        <div className="mt-16 text-center">
            <p className="text-slate-500 font-bold mb-8 italic">Únete a los cientos de alumnos que ya perdieron el miedo a conducir.</p>
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-blue-600 to-transparent mx-auto"></div>
        </div>
      </div>
    </section>
  );
}

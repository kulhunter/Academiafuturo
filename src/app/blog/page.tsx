import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Metadata } from 'next'
import { getSortedPostsData } from '@/lib/markdown'

export const metadata: Metadata = {
  title: 'Blog Vial | Escuela de Conductores Futuro',
  description: 'Consejos de conducción, normativa de tránsito en Chile y tips para aprobar tu examen práctico y teórico municipal.',
}

export default function BlogIndex() {
  const posts = getSortedPostsData();

  return (
    <div className="scroll-smooth bg-slate-50 text-slate-800 font-sans min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-slate-900 py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter mb-4">Blog Vial</h1>
            <p className="text-slate-300 font-bold max-w-2xl mx-auto">Todo lo que necesitas saber para ser un conductor responsable, desde tips mecánicos hasta consejos para superar los nervios del examen municipal.</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-16">
          {posts.length === 0 ? (
            <div className="text-center py-20 text-slate-500">
              <i className="fa-regular fa-folder-open text-4xl mb-4"></i>
              <p className="font-bold text-lg">Aún no hay artículos publicados. ¡Vuelve pronto!</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl transition-shadow group flex flex-col">
                  {post.imageUrl && (
                    <div className="h-48 overflow-hidden bg-slate-100">
                      <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                  )}
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="text-xs font-bold text-yellow-500 mb-2">{new Date(post.date).toLocaleDateString('es-CL')}</div>
                    <h2 className="text-xl font-black text-slate-900 mb-3 line-clamp-2">{post.title}</h2>
                    <p className="text-sm font-bold text-slate-500 line-clamp-3 mb-4">{post.content.replace(/<[^>]+>/g, '').substring(0, 150)}...</p>
                    <div className="mt-auto pt-4 border-t border-slate-100 font-black text-sm text-slate-900 uppercase tracking-widest flex items-center justify-between">
                      <span>Leer Más</span>
                      <i className="fa-solid fa-arrow-right text-yellow-500 transform group-hover:translate-x-2 transition-transform"></i>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Link from 'next/link'
import { getPostData, getSortedPostsData } from '@/lib/markdown'

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  try {
    const post = await getPostData(params.slug);
    return {
      title: `${post.title} | Blog Vial Futuro`,
      description: post.content.replace(/<[^>]+>/g, '').substring(0, 160) + '...',
      openGraph: {
        title: post.title,
        description: post.content.replace(/<[^>]+>/g, '').substring(0, 160) + '...',
        images: post.imageUrl ? [post.imageUrl] : [],
      }
    }
  } catch {
    return { title: 'Post no encontrado' }
  }
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  let post;
  try {
    post = await getPostData(params.slug);
  } catch {
    notFound();
  }

  return (
    <div className="scroll-smooth bg-slate-50 text-slate-800 font-sans min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <article className="max-w-4xl mx-auto px-4 py-16">
          <Link href="/blog" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 font-bold text-sm mb-8 transition-colors">
            <i className="fa-solid fa-arrow-left"></i> Volver al Blog
          </Link>
          
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-4">{post.title}</h1>
            <div className="flex items-center gap-4 text-sm font-bold text-slate-500">
              <span><i className="fa-regular fa-calendar text-yellow-500 mr-2"></i>{new Date(post.date).toLocaleDateString('es-CL')}</span>
              <span><i className="fa-regular fa-user text-yellow-500 mr-2"></i>Equipo Futuro</span>
            </div>
          </header>

          {post.imageUrl && (
            <div className="mb-12 rounded-2xl overflow-hidden shadow-lg border border-slate-200">
              <img src={post.imageUrl} alt={post.title} className="w-full h-auto object-cover max-h-[500px]" />
            </div>
          )}

          <div 
            className="prose prose-lg prose-slate max-w-none prose-headings:font-black prose-headings:italic prose-headings:uppercase prose-a:text-yellow-600 prose-a:font-bold hover:prose-a:text-yellow-500 prose-img:rounded-xl"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-16 pt-8 border-t border-slate-200">
            <div className="bg-slate-900 rounded-2xl p-8 text-center text-white">
              <h3 className="text-2xl font-black italic uppercase mb-2">¿Listo para aprender de verdad?</h3>
              <p className="text-slate-300 font-bold mb-6">Inscríbete en nuestros cursos con instructores pacientes y autos modernos.</p>
              <Link href="/#planes" className="inline-block bg-yellow-400 text-slate-900 font-black uppercase tracking-widest text-sm px-8 py-4 rounded-xl hover:bg-white transition-all">
                Ver Planes de Conducción
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}

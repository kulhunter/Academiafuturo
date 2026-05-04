import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Sedes from '@/components/Sedes'
import Pricing from '@/components/Pricing'
import Reviews from '@/components/Reviews'
import InstagramFeed from '@/components/InstagramFeed'
import StudySystemCTA from '@/components/StudySystemCTA'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Escuela de Conductores Futuro | Licencia Clase B en Santiago',
  description: 'Aprende a conducir con paciencia y vehículos modernos. Sedes en Macul y Peñalolén. Escuela de conductores acreditada en Chile con alto porcentaje de aprobación.',
  openGraph: {
    title: 'Escuela de Conductores Futuro | Licencia Clase B',
    description: 'Aprende a conducir con paciencia y vehículos modernos en Santiago.',
    url: 'https://www.escuelafuturo.cl', // Replace with real URL
    siteName: 'Escuela Futuro',
    locale: 'es_CL',
    type: 'website',
  },
}

export default function Home() {
  return (
    <div className="scroll-smooth bg-slate-50 text-slate-800 font-sans">
      <Navbar />
      <main>
        <Hero />
        <Sedes />
        
        {/* Beneficios extraídos del tríptico real */}
        <section id="beneficios" className="py-16 bg-slate-900 text-white">
            <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-center">
                <div className="p-6">
                    <i className="fa-solid fa-user-graduate text-4xl text-blue-500 mb-4"></i>
                    <h3 className="font-black uppercase mb-2">Clases Individuales</h3>
                    <p className="text-sm font-bold text-slate-400">Prácticas de manejo individuales. 1 alumno por auto para tu total concentración.</p>
                </div>
                <div className="p-6 border-y md:border-y-0 md:border-x border-slate-700">
                    <i className="fa-solid fa-heart text-4xl text-blue-500 mb-4"></i>
                    <h3 className="font-black uppercase mb-2">Que te enseñen y no regañen</h3>
                    <p className="text-sm font-bold text-slate-400">Atención personalizada con paciencia, lejos del estrés de las grandes cadenas.</p>
                </div>
                <div className="p-6">
                    <i className="fa-solid fa-car text-4xl text-blue-500 mb-4"></i>
                    <h3 className="font-black uppercase mb-2">Asesoría Técnica</h3>
                    <p className="text-sm font-bold text-slate-400">Conocimientos de tu automóvil y asesoría técnica para la compra de tu primer auto.</p>
                </div>
            </div>
        </section>

        {/* Sección de Sistema de Estudio (NUEVO) */}
        <section className="py-24 bg-slate-100">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <div className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full font-black uppercase tracking-widest text-xs mb-6 shadow-xl shadow-blue-600/20">
                    Tecnología para la Tranquilidad
                </div>
                <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter text-slate-900 mb-6">
                    Estudia con nuestro <span className="text-blue-600">Sistema Premium</span>
                </h2>
                <p className="text-lg font-bold text-slate-600 mb-12 max-w-2xl mx-auto">
                    El examen teórico municipal aterra a muchos postulantes. Equivócate aquí todas las veces que quieras. Te preparamos hasta que estés listo.
                </p>
                
                <StudySystemCTA />
            </div>
        </section>

        <Pricing />
        <Reviews />
        <InstagramFeed />
      </main>
      <Footer />
      
      {/* Schema Markup para LocalBusiness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AutoDrivingSchool",
            "name": "Escuela de Conductores Futuro",
            "image": "https://www.escuelafuturo.cl/images/hero-image.jpg",
            "@id": "",
            "url": "https://www.escuelafuturo.cl",
            "telephone": "+56222214190",
            "address": [
              {
                "@type": "PostalAddress",
                "streetAddress": "Av. Macul 4186",
                "addressLocality": "Macul",
                "addressRegion": "RM",
                "addressCountry": "CL"
              },
              {
                "@type": "PostalAddress",
                "streetAddress": "Av. Egaña 1834",
                "addressLocality": "Peñalolén",
                "addressRegion": "RM",
                "addressCountry": "CL"
              }
            ]
          })
        }}
      />
    </div>
  )
}

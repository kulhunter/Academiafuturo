import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Sedes from '@/components/Sedes'
import Pricing from '@/components/Pricing'
import Reviews from '@/components/Reviews'
import InstagramFeed from '@/components/InstagramFeed'
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
        
        {/* Beneficios adicionales extraídos del competidor */}
        <section id="beneficios" className="py-16 bg-slate-900 text-white">
            <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-center">
                <div className="p-6">
                    <i className="fa-solid fa-car-side text-4xl text-yellow-400 mb-4"></i>
                    <h3 className="font-black uppercase mb-2">Flota Moderna</h3>
                    <p className="text-sm font-bold text-slate-400">Aprende en vehículos Citycar fáciles de maniobrar y estacionar.</p>
                </div>
                <div className="p-6 border-y md:border-y-0 md:border-x border-slate-700">
                    <i className="fa-solid fa-brain text-4xl text-yellow-400 mb-4"></i>
                    <h3 className="font-black uppercase mb-2">Preparación Psicotécnica</h3>
                    <p className="text-sm font-bold text-slate-400">Te entrenamos para superar los nervios y las pruebas de reflejo.</p>
                </div>
                <div className="p-6">
                    <i className="fa-solid fa-handshake-angle text-4xl text-yellow-400 mb-4"></i>
                    <h3 className="font-black uppercase mb-2">Profesores Pacientes</h3>
                    <p className="text-sm font-bold text-slate-400">Atención personalizada, lejos del estrés de las grandes cadenas.</p>
                </div>
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

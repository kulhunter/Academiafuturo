'use client';
import { useEffect } from 'react';
import LogoFuturo from '@/components/LogoFuturo';
import { Globe, BookOpen, ShieldCheck, Heart, UserCheck, MessageCircle, Laptop, Award, BadgeCheck } from 'lucide-react';
import Link from 'next/link';

export default function PitchDeck() {
  useEffect(() => {
    // Basic setup for scroll snapping effects if needed
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="h-screen w-screen overflow-y-auto snap-y snap-mandatory bg-slate-900 text-slate-100 font-sans selection:bg-blue-600 selection:text-white scroll-smooth">
      
      {/* Slide 1: Portada */}
      <section className="h-screen w-full snap-start flex flex-col justify-center items-center relative p-8 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-900">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="z-10 text-center max-w-4xl">
          <div className="mb-12 scale-150 transform transition-all duration-1000">
            <LogoFuturo variant="white" layout="vertical" />
          </div>
          <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-full font-black uppercase tracking-widest text-xs mb-8 shadow-xl shadow-blue-600/20">
            <BadgeCheck className="w-4 h-4" />
            Propuesta Comercial 2026
          </div>
          <h1 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter leading-none mb-6">
            Experiencia,<br/><span className="text-blue-500">Seriedad y Responsabilidad.</span>
          </h1>
          <p className="text-xl md:text-2xl font-bold text-slate-400 max-w-2xl mx-auto">
            Evolución Digital: De una presencia básica a una Plataforma de Estudio Premium.
          </p>
        </div>
      </section>

      {/* Slide 2: El Enfoque Humano */}
      <section className="h-screen w-full snap-start flex items-center p-8 bg-slate-50 text-slate-900 relative">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full font-black uppercase tracking-widest text-xs mb-6">
              Nuestra Filosofía
            </div>
            <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none mb-8">
              Conducir es un<br/><span className="text-blue-600">Acto de Confianza.</span>
            </h2>
            <p className="text-xl font-bold text-slate-600 mb-6">
              En <strong className="text-slate-900 uppercase">Escuela de Conductores Futuro</strong>, no vendemos &quot;horas de manejo&quot;. Vendemos la seguridad de que cualquier persona puede aprender con paciencia y sin miedo.
            </p>
            <p className="text-xl font-bold text-slate-600">
              <strong className="text-slate-900 italic">Nuestro diferencial es la humanidad.</strong> La web debe ser el reflejo de esa paz que el instructor transmite en el asiento del copiloto.
            </p>
          </div>
          <div className="h-[60vh] rounded-3xl overflow-hidden shadow-2xl relative border-8 border-white">
            <img src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=1280" alt="Instructor paciente" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Slide 3: El Nuevo Sistema de Estudio */}
      <section className="h-screen w-full snap-start flex items-center p-8 bg-slate-900 text-white relative">
        <div className="max-w-7xl mx-auto w-full">
          <div className="mb-12 text-center">
             <div className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full font-black uppercase tracking-widest text-xs mb-6">
              La Innovación Integral
            </div>
            <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter leading-none text-white">
              Sistema de Estudio<br/><span className="text-blue-500">100% Integrado en la Web.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 hover:border-blue-500 transition-all">
              <div className="w-16 h-16 bg-blue-900/50 rounded-2xl flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-black text-white uppercase mb-2">Capítulos Estructurados</h3>
              <p className="text-slate-400 font-bold text-sm">Base de datos de 280+ preguntas divididas en bloques de 40 para un aprendizaje progresivo y menos estresante.</p>
            </div>
            <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 hover:border-blue-500 transition-all">
              <div className="w-16 h-16 bg-blue-900/50 rounded-2xl flex items-center justify-center mb-6">
                <Laptop className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-black text-white uppercase mb-2">Sin Apps Externas</h3>
              <p className="text-slate-400 font-bold text-sm">Todo sucede en academiafuturo.cl. Mayor autoridad de dominio y mejor experiencia de usuario en móviles y PC.</p>
            </div>
            <div className="bg-blue-600 p-8 rounded-3xl border border-blue-500 text-white shadow-2xl shadow-blue-600/30">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-black uppercase mb-2">Herramienta Terapéutica</h3>
              <p className="font-bold text-sm text-blue-50">Reducimos la ansiedad del examen teórico municipal permitiendo que el alumno practique en un entorno amigable y conocido.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 4: Inversión Optimizada */}
      <section className="h-screen w-full snap-start flex items-center p-8 bg-slate-50 text-slate-900 relative">
        <div className="max-w-5xl mx-auto w-full">
          <div className="text-center mb-12">
            <div className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full font-black uppercase tracking-widest text-xs mb-6 shadow-xl shadow-blue-600/20">
              Presupuesto Cerrado
            </div>
            <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none">
              Una inversión<br/><span className="text-blue-600">a medida de la excelencia.</span>
            </h2>
          </div>
          
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-slate-900/5">
            <table className="w-full text-left border-collapse">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="p-8 text-xl font-black uppercase">Concepto de Inversión</th>
                  <th className="p-8 text-xl font-black uppercase text-right">Valor</th>
                </tr>
              </thead>
              <tbody className="font-bold text-slate-600">
                <tr className="border-b border-slate-100">
                  <td className="p-8">
                    <div className="flex flex-col">
                      <span className="text-slate-900 text-lg uppercase font-black mb-1">Proyecto Evolución Integral</span>
                      <ul className="text-sm font-medium list-disc list-inside space-y-1">
                        <li>Diseño Web Human Centric (Escuela de Conductores Futuro)</li>
                        <li>Sistema de Estudio por Capítulos Integrado (Preguntas Clase B)</li>
                        <li>Optimización SEO y Embudo de Ventas a WhatsApp</li>
                        <li>Gestión y Registro de Dominio .CL (Incluido por 1 año)</li>
                      </ul>
                    </div>
                  </td>
                  <td className="p-8 text-right text-slate-900 text-4xl font-black">3 UF</td>
                </tr>
                <tr className="bg-slate-50 text-slate-500">
                  <td colSpan={2} className="p-6 text-sm italic">
                    * Valor total neto (No incluye IVA). <br/>
                    * Pago vía Boleta de Honorarios con retención del % correspondiente por el SII (Emisor o Receptor según preferencia).
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-8 flex items-center justify-center gap-8 opacity-50">
            <div className="flex items-center gap-2 font-black uppercase text-xs">
              <ShieldCheck className="w-5 h-5 text-green-600" /> Transparencia Total
            </div>
            <div className="flex items-center gap-2 font-black uppercase text-xs">
              <Award className="w-5 h-5 text-blue-600" /> Calidad Garantizada
            </div>
          </div>
        </div>
      </section>

      {/* Slide 5: El Futuro es Hoy */}
      <section className="h-screen w-full snap-start flex flex-col justify-center items-center relative p-8 bg-slate-900 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <LogoFuturo variant="white" layout="vertical" />
          </div>
          <h2 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter leading-none mb-12 text-white">
            ¿Comenzamos el<br/><span className="text-blue-500">Nuevo Viaje?</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 max-w-2xl mx-auto">
            <Link href="/" className="group bg-slate-800 text-white p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition-all font-black uppercase tracking-widest text-xs flex flex-col items-center gap-4">
              <Globe className="w-10 h-10 text-blue-500 group-hover:scale-110 transition-transform" />
              Ver Plataforma Actual
            </Link>
            <Link href="/estudio" className="group bg-blue-600 text-white p-8 rounded-2xl border border-blue-500 hover:bg-blue-500 transition-all font-black uppercase tracking-widest text-xs flex flex-col items-center gap-4 shadow-2xl shadow-blue-600/30">
              <BookOpen className="w-10 h-10 text-white group-hover:scale-110 transition-transform" />
              Probar Sistema de Estudio
            </Link>
          </div>

          <div className="mt-12 opacity-50 flex flex-col items-center">
             <span className="font-black uppercase tracking-widest text-sm mb-2">Desarrollado con pasión por</span>
             <img src="https://dantagle.cl/wp-content/uploads/2023/06/Logo-Dantagle-Blanco.png" alt="Dantagle.cl" className="h-8 brightness-0 invert opacity-80" />
             <span className="font-bold text-xs mt-2">dantagle.cl</span>
          </div>
        </div>
      </section>

    </div>
  );
}

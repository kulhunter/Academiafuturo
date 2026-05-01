'use client';
import { useEffect } from 'react';
import LogoFuturo from '@/components/LogoFuturo';

export default function PitchDeck() {
  useEffect(() => {
    // Basic setup for scroll snapping effects if needed
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="h-screen w-screen overflow-y-auto snap-y snap-mandatory bg-slate-900 text-slate-100 font-sans selection:bg-yellow-400 selection:text-slate-900 scroll-smooth">
      
      {/* Slide 1: Portada */}
      <section className="h-screen w-full snap-start flex flex-col justify-center items-center relative p-8">
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="z-10 text-center max-w-4xl">
          <div className="mb-12">
            <LogoFuturo variant="white" layout="vertical" />
          </div>
          <div className="inline-block bg-yellow-400 text-slate-900 px-6 py-2 rounded-full font-black uppercase tracking-widest text-xs mb-8">
            Estrategia Digital 2024
          </div>
          <h1 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-none mb-6">
            Conducir es un<br/><span className="text-yellow-400">Acto de Confianza.</span>
          </h1>
          <p className="text-xl md:text-2xl font-bold text-slate-400 max-w-2xl mx-auto">
            Transformando la experiencia de Escuela Futuro: De enseñar a manejar, a eliminar el miedo.
          </p>
        </div>
        <div className="absolute bottom-10 animate-bounce text-yellow-400 opacity-50">
          <i className="fa-solid fa-chevron-down text-3xl"></i>
        </div>
      </section>

      {/* Slide 2: El Diagnóstico */}
      <section className="h-screen w-full snap-start flex items-center p-8 bg-slate-50 text-slate-900 relative">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block bg-yellow-400 text-slate-900 px-6 py-2 rounded-full font-black uppercase tracking-widest text-xs mb-6">
              El Diagnóstico
            </div>
            <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none mb-8">
              El verdadero problema<br/>no es el auto,<br/><span className="text-yellow-500">Es el Miedo.</span>
            </h2>
            <p className="text-xl font-bold text-slate-600 mb-6">
              Quien busca una escuela en Macul o Peñalolén no está comprando &quot;horas en un citycar&quot;. Está buscando a alguien que no le grite si se le apaga el motor.
            </p>
            <p className="text-xl font-bold text-slate-600">
              <strong className="text-slate-900">El diferencial de Escuela Futuro no es el simulador. Es la humanidad.</strong> Es la paciencia infinita del instructor en el asiento del copiloto. Nuestra misión digital es transmitir esa misma paz antes de que el alumno pague un peso.
            </p>
          </div>
          <div className="h-[60vh] rounded-3xl overflow-hidden shadow-2xl relative">
            <img src="https://images.unsplash.com/photo-1516224498413-84ecf3a1e7fc?q=80&w=1280" alt="Instructor paciente" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Slide 3: Datos SEO */}
      <section className="h-screen w-full snap-start flex items-center p-8 bg-slate-900 relative">
        <div className="max-w-7xl mx-auto w-full">
          <div className="mb-12 text-center">
             <div className="inline-block bg-yellow-400 text-slate-900 px-6 py-2 rounded-full font-black uppercase tracking-widest text-xs mb-6">
              Oportunidad de Mercado
            </div>
            <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter leading-none text-white">
              Hay miles de personas<br/>buscando <span className="text-yellow-400">ahora mismo.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700">
              <div className="text-5xl font-black text-yellow-400 mb-4">+2.500</div>
              <h3 className="text-xl font-black text-white uppercase mb-2">Búsquedas Mensuales</h3>
              <p className="text-slate-400 font-bold text-sm">Vecinos de Macul y Peñalolén buscan términos como &quot;escuela de conductores cerca de mi&quot; o &quot;clases de manejo macul&quot;.</p>
            </div>
            <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700">
              <div className="text-5xl font-black text-yellow-400 mb-4">Competencia</div>
              <h3 className="text-xl font-black text-white uppercase mb-2">Automóvil Club & Macol</h3>
              <p className="text-slate-400 font-bold text-sm">Venden volumen y tradición. Sus webs parecen instituciones públicas. Ignoran el dolor emocional del usuario principiante.</p>
            </div>
            <div className="bg-yellow-400 p-8 rounded-3xl border border-yellow-500 text-slate-900">
              <div className="text-5xl font-black mb-4"><i className="fa-solid fa-trophy"></i></div>
              <h3 className="text-xl font-black uppercase mb-2">Nuestra Estrategia</h3>
              <p className="font-bold text-sm text-slate-800">SEO Hiper-Local + Autoridad de Nicho. Un blog que responda cómo es el circuito municipal y un diseño web empático que reduzca el rebote.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 4: El Proceso de Matrícula (Embudo de Empatía) */}
      <section className="h-screen w-full snap-start flex items-center p-8 bg-white text-slate-900 relative">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block bg-yellow-400 text-slate-900 px-6 py-2 rounded-full font-black uppercase tracking-widest text-xs mb-6">
              El Proceso de Matrícula
            </div>
            <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none mb-8">
              Vender desde la<br/><span className="text-yellow-500">Empatía.</span>
            </h2>
            <p className="text-xl font-bold text-slate-600 mb-6">
              Las páginas web antiguas obligan al usuario a &quot;Comprar&quot; fríamente. Nosotros crearemos un <strong>Embudo de Contacto</strong>.
            </p>
            <p className="text-xl font-bold text-slate-600">
              Cuando el alumno elija su plan, la web le pedirá sus datos básicos para asignarle el instructor con más paciencia. De ahí, la web envía esos datos directo a su WhatsApp.
            </p>
          </div>
          <div className="bg-[#fff8f1] p-8 rounded-3xl border-2 border-dashed border-yellow-400">
            <h3 className="text-2xl font-black mb-4">Ejemplo de mensaje automático:</h3>
            <p className="text-lg text-slate-600 italic font-medium mb-6">
              &quot;¡Hola Escuela Futuro! Me llamo Camila, quiero tomar el Plan Completo en la Sede Macul. Me da un poco de miedo el tráfico, ¿me pueden orientar?&quot;
            </p>
            <div className="flex items-center gap-2 text-green-600 font-black text-xl justify-end">
              <i className="fa-brands fa-whatsapp"></i> Llega directo a su celular.
            </div>
          </div>
        </div>
      </section>

      {/* Slide 5: Tecnología Anti-Estrés */}
      <section className="h-screen w-full snap-start flex items-center p-8 bg-slate-900 text-white relative">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="bg-slate-800 p-10 rounded-3xl border border-slate-700">
            <i className="fa-solid fa-laptop-code text-5xl text-yellow-400 mb-6"></i>
            <h3 className="text-3xl font-black uppercase italic mb-4 text-white">Plataforma de Ensayo Privada</h3>
            <p className="text-slate-400 font-bold text-lg">
              Simulador oficial con preguntas de la Conaset y corrección en tiempo real, exclusivo para alumnos de la academia.
            </p>
          </div>
          <div>
            <div className="inline-block bg-yellow-400 text-slate-900 px-6 py-2 rounded-full font-black uppercase tracking-widest text-xs mb-6">
              El Valor Agregado
            </div>
            <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none mb-8">
              Tecnología para la<br/><span className="text-yellow-400">Tranquilidad.</span>
            </h2>
            <p className="text-xl font-bold text-slate-400 mb-6">
              El software no es un gasto, es una <strong>herramienta terapéutica</strong>. El examen teórico municipal aterra a los postulantes.
            </p>
            <p className="text-xl font-bold text-slate-400">
              Ustedes le dicen al alumno: &quot;Equivócate aquí en tu casa, todas las veces que quieras. Nosotros te cuidamos hasta que estés listo&quot;.
            </p>
          </div>
        </div>
      </section>

      {/* Slide 6: Inversión */}
      <section className="h-screen w-full snap-start flex items-center p-8 bg-yellow-400 text-slate-900 relative">
        <div className="max-w-4xl mx-auto w-full">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none">
              Hagamos que las<br/>cosas pasen.
            </h2>
          </div>
          
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-slate-900/10">
            <table className="w-full text-left border-collapse">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="p-6 text-xl font-black uppercase">Concepto de Inversión</th>
                  <th className="p-6 text-xl font-black uppercase text-right">Valor</th>
                </tr>
              </thead>
              <tbody className="font-bold text-slate-600">
                <tr className="border-b border-slate-100">
                  <td className="p-6"><strong>Sitio Web Integral:</strong> Diseño empático, Embudo a WhatsApp, Mapas de Sedes y 10 Artículos de Educación Vial.</td>
                  <td className="p-6 text-right text-slate-900 text-xl">3 UF</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="p-6"><strong>Plataforma Anti-Estrés:</strong> Implementación del Software privado de simulacro de Examen Clase B.</td>
                  <td className="p-6 text-right text-slate-900 text-xl">5 UF</td>
                </tr>
                <tr className="bg-slate-50 text-slate-900">
                  <td className="p-6 text-xl font-black uppercase">Inversión Total Proyecto 2024</td>
                  <td className="p-6 text-right text-3xl font-black">8 UF</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-8 text-center text-sm font-black uppercase tracking-widest opacity-60 italic">
            Con la captura de tan solo 1 o 2 alumnos, el proyecto queda 100% pagado.
          </p>
        </div>
      </section>

      {/* Slide 7: Cierre Final */}
      <section className="h-screen w-full snap-start flex flex-col justify-center items-center relative p-8 bg-slate-900 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter leading-none mb-12 text-white">
            ¡GRACIAS!
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <a href="/" className="bg-slate-800 text-white p-6 rounded-2xl border border-slate-700 hover:border-yellow-400 transition-all font-black uppercase tracking-widest text-xs flex flex-col items-center gap-4">
              <i className="fa-solid fa-globe text-3xl text-yellow-400"></i>
              Ver la Web
            </a>
            <a href="https://wa.me/56942051897" target="_blank" className="bg-slate-800 text-white p-6 rounded-2xl border border-slate-700 hover:border-yellow-400 transition-all font-black uppercase tracking-widest text-xs flex flex-col items-center gap-4">
              <i className="fa-brands fa-whatsapp text-3xl text-yellow-400"></i>
              Ver la App
            </a>
            <a href="/blog" className="bg-slate-800 text-white p-6 rounded-2xl border border-slate-700 hover:border-yellow-400 transition-all font-black uppercase tracking-widest text-xs flex flex-col items-center gap-4">
              <i className="fa-solid fa-book-open text-3xl text-yellow-400"></i>
              Ver el Blog
            </a>
          </div>

          <div className="mt-12 opacity-50 flex flex-col items-center">
             <span className="font-black uppercase tracking-widest text-sm mb-2">Un proyecto de</span>
             <img src="https://dantagle.cl/wp-content/uploads/2023/06/Logo-Dantagle-Blanco.png" alt="Dantagle.cl" className="h-8 brightness-0 invert opacity-80" />
             <span className="font-bold text-xs mt-2">dantagle.cl</span>
          </div>
        </div>
      </section>

    </div>
  );
}

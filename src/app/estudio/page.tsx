import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { BookOpen, ArrowRight, UserCheck, ShieldCheck, Heart } from 'lucide-react';

const ranges = [
  { start: 1, end: 40, label: 'Capítulo 1: Fundamentos y Seguridad' },
  { start: 41, end: 80, label: 'Capítulo 2: Control del Vehículo' },
  { start: 81, end: 120, label: 'Capítulo 3: Factores Humanos' },
  { start: 121, end: 160, label: 'Capítulo 4: Normas de Circulación' },
  { start: 161, end: 200, label: 'Capítulo 5: Situaciones de Riesgo' },
  { start: 201, end: 240, label: 'Capítulo 6: Conducción en Condiciones Especiales' },
  { start: 241, end: 280, label: 'Capítulo 7: Señalización y Accidentes' },
];

export default function EstudioPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow min-h-screen bg-slate-50 pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4">
          {/* Human Welcome Section */}
          <section className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-blue-900/5 mb-12 border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full -mr-32 -mt-32 blur-3xl opacity-50" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
                <Heart className="w-4 h-4 fill-current" />
                <span>Bienvenida Humanizada</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
                Bienvenido a <span className="text-blue-600">Academia Futuro</span>
              </h1>
              
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Sabemos que aprender a conducir puede generar nervios o ansiedad. En Escuela de Conductores Futuro, 
                no solo te preparamos para un examen; te acompañamos con <span className="font-semibold text-slate-900">paciencia, experiencia y cercanía</span>.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="flex flex-col gap-3">
                  <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-600">
                    <UserCheck className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-slate-900">Enfoque Humano</h3>
                  <p className="text-sm text-slate-500">Instructores con vocación que entienden tus miedos.</p>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-slate-900">Seguridad Total</h3>
                  <p className="text-sm text-slate-500">Aprende paso a paso en un ambiente controlado.</p>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-slate-900">Estudio Guiado</h3>
                  <p className="text-sm text-slate-500">Sistema dividido por capítulos para tu comodidad.</p>
                </div>
              </div>

              <div className="p-6 bg-slate-900 rounded-2xl text-white">
                <p className="text-slate-300 italic mb-2">
                  &quot;Nuestra meta no es que obtengas la licencia, sino que te sientas seguro y feliz detrás del volante.&quot;
                </p>
                <p className="font-bold">— Equipo Academia Futuro</p>
              </div>
            </div>
          </section>

          {/* Chapters Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Tu Plan de Estudio</h2>
            <p className="text-slate-500">Selecciona un capítulo para comenzar a estudiar el banco de preguntas oficial.</p>
          </div>

          <div className="grid gap-4">
            {ranges.map((range, idx) => (
              <Link 
                key={idx}
                href={`/estudio/${range.start}-${range.end}`}
                className="group bg-white p-6 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all flex items-center justify-between"
              >
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <span className="text-xl font-bold">{idx + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {range.label}
                    </h3>
                    <p className="text-sm text-slate-500">
                      Preguntas {range.start} a {range.end}
                    </p>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-50 text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-all">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

import Link from 'next/link';
import { BookOpen, ShieldCheck, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function StudySystemCTA() {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100 flex flex-col md:flex-row max-w-5xl mx-auto">
      <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
          <Zap className="w-4 h-4 fill-current" />
          <span>Exclusivo para Alumnos</span>
        </div>
        
        <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 leading-tight uppercase italic italic">
          Plataforma de <span className="text-blue-600">Estudio Premium</span>
        </h3>
        
        <p className="text-slate-600 font-medium mb-8 leading-relaxed">
          Hemos integrado todo nuestro banco de preguntas oficial (280+ preguntas Clase B) en un sistema dividido por capítulos para que estudies a tu ritmo, sin estrés y desde cualquier dispositivo.
        </p>

        <div className="space-y-4 mb-8">
          <div className="flex items-center gap-3 text-slate-700">
            <CheckCircle2 className="w-5 h-5 text-green-500" />
            <span className="font-bold">Dividido por Capítulos (1-40, 41-80...)</span>
          </div>
          <div className="flex items-center gap-3 text-slate-700">
            <CheckCircle2 className="w-5 h-5 text-green-500" />
            <span className="font-bold">Interactivo con Feedback Inmediato</span>
          </div>
          <div className="flex items-center gap-3 text-slate-700">
            <CheckCircle2 className="w-5 h-5 text-green-500" />
            <span className="font-bold">Optimizado para Móviles</span>
          </div>
        </div>

        <Link 
          href="/estudio" 
          className="bg-blue-600 text-white px-8 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 flex items-center justify-center gap-3 group"
        >
          Ir al Sistema de Estudio
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <div className="md:w-1/2 bg-slate-900 relative p-12 flex items-center justify-center overflow-hidden">
        {/* Abstract visual representing the study system */}
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        <div className="relative z-10 grid grid-cols-2 gap-4 w-full">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className={`p-4 rounded-xl border border-white/10 ${i === 1 ? 'bg-blue-600 border-blue-500' : 'bg-white/5'} backdrop-blur-sm`}>
              <div className="text-xs font-black text-white/50 mb-1 uppercase tracking-tighter">Capítulo {i}</div>
              <div className="h-1 w-full bg-white/10 rounded-full mt-2 overflow-hidden">
                <div className="h-full bg-white/40" style={{ width: i === 1 ? '60%' : '0%' }}></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Floating badge */}
        <div className="absolute bottom-12 left-12 right-12 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl flex items-center gap-4">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-900">
            <BookOpen className="w-6 h-6" />
          </div>
          <div className="text-white">
            <div className="text-sm font-black uppercase">280+ Preguntas</div>
            <div className="text-[10px] opacity-60">Actualizadas 2026</div>
          </div>
        </div>
      </div>
    </div>
  );
}

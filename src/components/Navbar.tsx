import Link from 'next/link';
import LogoFuturo from './LogoFuturo';
import { BookOpen, MapPin, Phone } from 'lucide-react';

export default function Navbar() {
  return (
    <>
      <div className="bg-slate-900 text-slate-300 text-[10px] md:text-xs py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-center md:justify-between items-center font-bold">
            <div className="hidden md:flex gap-6">
                <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-blue-400" /> Sedes: Macul y Peñalolén</span>
                <span className="flex items-center gap-1"><Phone className="w-3 h-3 text-blue-400" /> Macul: 22214190 | Peñalolén: 22721648</span>
            </div>
            <div className="flex gap-4 items-center">
                <span className="text-blue-400 uppercase tracking-widest">Escuela Acreditada - MTT</span>
                <a href="https://www.instagram.com/escueladeconductoresfuturo/" target="_blank" rel="noreferrer" className="hover:text-white transition"><i className="fa-brands fa-instagram text-lg"></i></a>
            </div>
        </div>
      </div>

      <nav className="bg-white sticky top-0 z-50 shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
                <LogoFuturo variant="color" layout="horizontal" />
            </Link>
            <div className="hidden lg:flex items-center gap-8 font-black text-slate-600 text-xs uppercase tracking-widest">
                <Link href="/#sedes" className="hover:text-blue-600 transition">Sedes y Contacto</Link>
                <Link href="/estudio" className="hover:text-blue-600 transition flex items-center gap-1 text-blue-600">
                  <BookOpen className="w-4 h-4" />
                  Sistema de Estudio
                </Link>
                <Link href="/#planes" className="hover:text-blue-600 transition">Planes</Link>
                <Link href="/blog" className="hover:text-blue-600 transition">Blog Vial</Link>
            </div>
            <Link href="/#planes" className="hidden md:flex bg-blue-600 text-white px-6 py-2.5 rounded-xl font-black hover:bg-slate-900 transition items-center gap-2 uppercase tracking-widest text-xs shadow-lg shadow-blue-600/20">
                Matricúlate Aquí
            </Link>
        </div>
      </nav>
    </>
  )
}

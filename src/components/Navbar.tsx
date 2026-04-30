import Link from 'next/link';
import LogoFuturo from './LogoFuturo';

export default function Navbar() {
  return (
    <>
      <div className="bg-slate-900 text-slate-300 text-xs py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-center md:justify-between items-center font-bold">
            <div className="hidden md:flex gap-6">
                <span><i className="fa-solid fa-location-dot text-yellow-400 mr-1"></i> Sedes: Macul y Peñalolén</span>
                <span><i className="fa-solid fa-phone text-yellow-400 mr-1"></i> Macul: 22214190 | Peñalolén: 22721648</span>
            </div>
            <div className="flex gap-4 items-center">
                <span className="text-yellow-400">Escuela Acreditada - Ministerio de Transportes</span>
                <a href="https://www.instagram.com/escueladeconductoresfuturo/" target="_blank" rel="noreferrer" className="hover:text-white transition"><i className="fa-brands fa-instagram text-lg"></i></a>
            </div>
        </div>
      </div>

      <nav className="bg-white sticky top-0 z-50 shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
                <LogoFuturo variant="color" layout="horizontal" />
            </Link>
            <div className="hidden lg:flex items-center gap-8 font-black text-slate-600 text-sm uppercase tracking-wide">
                <a href="/#sedes" className="hover:text-yellow-500 transition">Sedes y Contacto</a>
                <a href="/#beneficios" className="hover:text-yellow-500 transition">Beneficios</a>
                <a href="/#planes" className="hover:text-yellow-500 transition text-slate-900"><i className="fa-solid fa-tag text-yellow-500"></i> Promociones</a>
                <Link href="/blog" className="hover:text-yellow-500 transition">Blog Vial</Link>
            </div>
            <a href="/#planes" className="hidden md:flex bg-yellow-400 text-slate-900 px-6 py-2.5 rounded font-black hover:bg-slate-900 hover:text-yellow-400 transition items-center gap-2 uppercase tracking-widest text-sm shadow-lg shadow-yellow-400/30">
                Matricúlate Aquí
            </a>
        </div>
      </nav>
    </>
  )
}

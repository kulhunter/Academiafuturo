import LogoFuturo from './LogoFuturo';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-12 border-b border-slate-800 pb-12 mb-8">
            <div>
                <div className="mb-6 inline-block">
                    <LogoFuturo variant="white" layout="horizontal" />
                </div>
                <p className="text-sm font-bold leading-relaxed mb-6">Escuela de Conductores Profesional en la Región Metropolitana. R.U.T. 9.250.838-2. Autorizados por el Ministerio de Transportes.</p>
            </div>
            <div>
                <h4 className="text-white font-black uppercase tracking-widest mb-6">Red de Sedes</h4>
                <ul className="space-y-4 text-sm font-bold">
                    <li><i className="fa-solid fa-location-dot text-yellow-400 w-5"></i> <strong>Sede Macul:</strong> Av. Macul 4186 (Tel: 222214190)</li>
                    <li><i className="fa-solid fa-location-dot text-yellow-400 w-5"></i> <strong>Sede Peñalolén:</strong> Av. Egaña 1834 (Tel: 233050774 / 233458775)</li>
                    <li><i className="fa-solid fa-mobile-screen-button text-yellow-400 w-5"></i> <strong>WhatsApp:</strong> +56 9 4205 1897</li>
                </ul>
            </div>
            <div>
                <h4 className="text-white font-black uppercase tracking-widest mb-6">Accesos</h4>
                <ul className="space-y-2 text-sm font-bold">
                    <li><a href="/#planes" className="hover:text-yellow-400 transition">Ver Planes Disponibles</a></li>
                    <li><a href="/blog" className="hover:text-yellow-400 transition">Blog Vial</a></li>
                    <li><a href="https://kulhunter.github.io/examen_claseB/" target="_blank" rel="noreferrer" className="hover:text-yellow-400 transition">Acceso Privado Alumnos</a></li>
                </ul>
            </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold text-slate-600">
            <div>&copy; {new Date().getFullYear()} Escuela de Conductores Futuro. Experiencia, Seriedad y Responsabilidad.</div>
        </div>
    </footer>
  )
}

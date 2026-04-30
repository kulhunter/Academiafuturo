export default function Sedes() {
  return (
    <section id="sedes" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-black text-slate-900 uppercase italic">Nuestras Sedes Autorizadas</h2>
                <div className="h-1.5 w-24 bg-yellow-400 mx-auto mt-4"></div>
                <p className="mt-4 text-slate-500 font-bold max-w-2xl mx-auto">Visítanos o comunícate directamente con la escuela que te quede más cómoda. Contamos con circuito práctico en ambas comunas.</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-10">
                <div className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden shadow-sm flex flex-col">
                    <div className="h-64 w-full bg-slate-200">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3327.3248383827435!2d-70.5985093!3d-33.4929314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662d011f061e8eb%3A0xe5eb6c42968c9be8!2sAv.%20Macul%204186%2C%20Macul%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses-419!2scl!4v1714512345678!5m2!1ses-419!2scl" width="100%" height="100%" style={{border:0}} allowFullScreen loading="lazy"></iframe>
                    </div>
                    <div className="p-8">
                        <div className="inline-block bg-yellow-400 text-slate-900 font-black px-3 py-1 rounded text-xs uppercase mb-3">Sede Macul</div>
                        <h3 className="text-2xl font-black text-slate-900 mb-4">Av. Macul 4186</h3>
                        <ul className="space-y-3 font-bold text-slate-600 mb-6 text-sm">
                            <li><i className="fa-solid fa-location-dot text-slate-400 w-5"></i> Comuna: Macul, Región Metropolitana</li>
                            <li><i className="fa-solid fa-phone text-slate-400 w-5"></i> Teléfono: (2) 2221 4190</li>
                            <li><i className="fa-regular fa-clock text-slate-400 w-5"></i> Horario: Lunes a Viernes 09:00 a 19:00 hrs</li>
                        </ul>
                    </div>
                </div>

                <div className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden shadow-sm flex flex-col">
                    <div className="h-64 w-full bg-slate-200">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.6186064032895!2d-70.5513222!3d-33.4657199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf80e30327f3%3A0xf695b00c5c632832!2sAv.%20Ega%C3%B1a%201834%2C%20Pe%C3%B1alol%C3%A9n%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses-419!2scl!4v1714512345679!5m2!1ses-419!2scl" width="100%" height="100%" style={{border:0}} allowFullScreen loading="lazy"></iframe>
                    </div>
                    <div className="p-8">
                        <div className="inline-block bg-yellow-400 text-slate-900 font-black px-3 py-1 rounded text-xs uppercase mb-3">Sede Peñalolén</div>
                        <h3 className="text-2xl font-black text-slate-900 mb-4">Av. Egaña 1834</h3>
                        <ul className="space-y-3 font-bold text-slate-600 mb-6 text-sm">
                            <li><i className="fa-solid fa-location-dot text-slate-400 w-5"></i> Comuna: Peñalolén, Región Metropolitana</li>
                            <li><i className="fa-solid fa-phone text-slate-400 w-5"></i> Teléfono: (2) 2272 1648</li>
                            <li><i className="fa-regular fa-clock text-slate-400 w-5"></i> Horario: Lunes a Viernes 09:00 a 19:00 hrs</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

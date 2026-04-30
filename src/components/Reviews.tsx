export default function Reviews() {
  const reviews = [
    {
      author: "Carlos P.",
      date: "Hace 1 semana",
      text: "Excelente escuela. Fui con mucho miedo porque había reprobado antes en otro lado. El profesor fue súper paciente y el Citycar estaba nuevecito, muy fácil de estacionar. ¡Aprobé a la primera en Macul!",
      rating: 5,
      avatar: "CP"
    },
    {
      author: "Valentina M.",
      date: "Hace 2 semanas",
      text: "Recomiendo el curso garantizado. Te preparan no solo para sacar la licencia, sino para manejar de verdad en Santiago. El test psicotécnico de práctica me salvó de los nervios.",
      rating: 5,
      avatar: "VM"
    },
    {
      author: "Ignacio R.",
      date: "Hace 1 mes",
      text: "La sede Peñalolén un 7. Me pasaron el auto para rendir el examen práctico y los profes te enseñan todos los tips del circuito municipal. Vale cada peso.",
      rating: 5,
      avatar: "IR"
    }
  ];

  return (
    <section className="py-24 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
                <span className="text-blue-600 font-black tracking-widest uppercase text-sm mb-2 block">Testimonios Reales</span>
                <h2 className="text-4xl font-black text-slate-900 uppercase italic">Lo que dicen nuestros alumnos</h2>
                <div className="h-1.5 w-24 bg-yellow-400 mx-auto mt-6"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {reviews.map((review, i) => (
                    <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center font-black text-blue-600">
                                {review.avatar}
                            </div>
                            <div>
                                <h4 className="font-black text-slate-900">{review.author}</h4>
                                <div className="text-xs text-slate-500 font-bold">{review.date}</div>
                            </div>
                            <div className="ml-auto">
                                <i className="fa-brands fa-google text-2xl text-slate-300"></i>
                            </div>
                        </div>
                        <div className="flex text-yellow-400 text-sm mb-4 gap-1">
                            {[...Array(review.rating)].map((_, i) => <i key={i} className="fa-solid fa-star"></i>)}
                        </div>
                        <p className="text-slate-600 font-bold text-sm leading-relaxed">&quot;{review.text}&quot;</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

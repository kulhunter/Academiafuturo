export default function Reviews() {
  const reviews = [
    {
      author: "Francisco Carrasco",
      date: "Hace 1 año",
      text: "Una escuela fantástica sinceramente, nada que reprochar, te ayudan y te dan la confianza para poder sacar tu licencia y aprobarla incluso a la primera.",
      rating: 5,
      avatar: "FC",
      link: "https://share.google/IPxDFhwurmn4jPkIV"
    },
    {
      author: "Raisa Diaz",
      date: "Hace 1 año",
      text: "Excelente experiencia! Los instructores son muy claros en sus explicaciones y amorosos 😊 Muchas gracias Osvaldo, Alejandro, Gabriel y Angel.",
      rating: 5,
      avatar: "RD",
      link: "https://share.google/Q9kFdApdBIAWKgeGM"
    },
    {
      author: "Santiago Brevis",
      date: "Hace 1 año",
      text: "Me inscribi a la escuela sin haber manejado nunca, logre sacar la licencia a la primera, los profes son sumamente amables.",
      rating: 5,
      avatar: "SB",
      link: "https://share.google/8EJedB7efBLejrxIu"
    },
    {
      author: "Gabriela Fernández",
      date: "Hace 1 año",
      text: "Buenísima escuela! Tomé el curso en la sucursal de Av. Macul y todo cumplió con mis expectativas, e incluso, las superaron.",
      rating: 5,
      avatar: "GF",
      link: "https://share.google/8WCsCuJ7NJKetP6O1"
    },
    {
      author: "María Maturana",
      date: "Hace 1 año",
      text: "Excelente escuela!!!! Tanto en material de estudio, como de facilidades de test teóricos. Además de poder ensayar psicotécnico.",
      rating: 5,
      avatar: "MM",
      link: "https://share.google/NzpLBVdFh3srhMjqd"
    },
    {
      author: "Olga Millacura Ramirez",
      date: "Hace 4 años",
      text: "Hice mi curso en Egaña, profesores al 100% una paciencia única, muy buenos todos, siempre están preguntando si entendiste.",
      rating: 5,
      avatar: "OM",
      link: "https://share.google/eSOjcblSHJvsNhM0J"
    },
    {
      author: "Mariela Morales Diaz",
      date: "Hace 3 años",
      text: "La escuela de peñalolen de av. Egaña 1834 es una escuela en la cual se aprende mucho. Todos son excelentes personas.",
      rating: 5,
      avatar: "MD",
      link: "https://share.google/gTsi7x4vXItD7PARx"
    },
    {
      author: "Verónica Araya",
      date: "Hace 3 años",
      text: "Muy buena Escuela de Conduccion, muy buenos profesores y el anfitrion Don Robinson muy amable y paciente.",
      rating: 5,
      avatar: "VA",
      link: "https://share.google/x9lPzjQENUidxFt5I"
    },
    {
      author: "Katalina Gómez",
      date: "Hace 2 años",
      text: "Aprobé mi examen de conducir la semana pasada, agradezco al profesor Robinson pero en especial al profe Gabriel.",
      rating: 5,
      avatar: "KG",
      link: "https://share.google/i22uc6ldVr0EXrJJt"
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
                    <a 
                        key={i} 
                        href={review.link} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-all group block"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center font-black text-blue-600">
                                {review.avatar}
                            </div>
                            <div>
                                <h4 className="font-black text-slate-900 group-hover:text-blue-600 transition-colors">{review.author}</h4>
                                <div className="text-xs text-slate-500 font-bold">{review.date}</div>
                            </div>
                            <div className="ml-auto">
                                <i className="fa-brands fa-google text-2xl text-slate-200 group-hover:text-slate-400 transition-colors"></i>
                            </div>
                        </div>
                        <div className="flex text-yellow-400 text-sm mb-4 gap-1">
                            {[...Array(review.rating)].map((_, i) => <i key={i} className="fa-solid fa-star"></i>)}
                        </div>
                        <p className="text-slate-600 font-bold text-sm leading-relaxed mb-4">&quot;{review.text}&quot;</p>
                        <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-blue-500 transition-colors">
                            <i className="fa-solid fa-arrow-up-right-from-square mr-1"></i> Ver reseña original
                        </div>
                    </a>
                ))}
            </div>
        </div>
    </section>
  )
}

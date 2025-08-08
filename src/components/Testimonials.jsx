const testimonials = [
  {
    name: 'Laura G.',
    text: 'Excelente trabajo en mi cocina integral. Cumplieron los tiempos y el resultado fue impecable.',
  },
  {
    name: 'Carlos M.',
    text: 'El drywall del apartamento quedó perfecto. Muy buena asesoría y terminados.',
  },
  {
    name: 'Ana P.',
    text: 'Pintura y closets a medida con acabados de lujo. Muy recomendados.',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-20 scroll-mt-24">
      <div className="container-section">
        <div className="text-center max-w-2xl mx-auto" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-deepblue dark:text-white">Testimonios</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-3">Clientes que confiaron en nosotros.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure key={t.name} className="card p-6" data-aos="fade-up">
              <blockquote className="text-gray-700 dark:text-gray-300">“{t.text}”</blockquote>
              <figcaption className="mt-4 font-semibold text-deepblue dark:text-white">{t.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}


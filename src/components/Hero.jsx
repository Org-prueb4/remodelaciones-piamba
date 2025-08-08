import { useEffect, useState } from 'react'

const images = [
  'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1505691723518-36a1a3140a76?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?q=80&w=2069&auto=format&fit=crop',
]

export default function Hero() {
  const [index, setIndex] = useState(0)
  const total = images.length

  useEffect(() => {
    if (total <= 1) return
    const id = setInterval(() => setIndex((i) => (i + 1) % total), 3000)
    return () => clearInterval(id)
  }, [total])

  return (
    <section id="inicio" className="relative min-h-[85dvh] grid place-items-center scroll-mt-24 overflow-hidden">
      {/* Fondo slider */}
      <div className="absolute inset-0">
        {images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt="Trabajos realizados"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${i === index ? 'opacity-100' : 'opacity-0'}`}
          />)
        )}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent dark:from-black/70" />

      {/* Contenido */}
      <div className="relative container-section text-center text-white space-y-6" data-aos="fade-up">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold">
          Acabados profesionales para tu hogar
        </h1>
        <p className="max-w-2xl mx-auto text-lg/relaxed text-white/90">
          Cocinas integrales, drywall, pintura, closets y más. Calidad, puntualidad y detalle en cada proyecto.
        </p>
        <div className="flex items-center justify-center gap-4">
          <a href="#servicios" className="btn-primary">Ver servicios</a>
          <a href="#contacto" className="btn-outline">Cotiza ahora</a>
        </div>
      </div>
    </section>
  )
}


export default function About() {
  return (
    <section id="quienes" className="py-20 bg-gray-50 dark:bg-[#0a0f1a] scroll-mt-24">
      <div className="container-section grid lg:grid-cols-2 gap-10 items-center">
        <div data-aos="fade-right" className="space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-deepblue dark:text-white">¿Quiénes somos?</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Somos un equipo con más de 10 años de experiencia en remodelaciones y acabados de alta calidad. Nos
            especializamos en la instalación de cocinas integrales, construcción en drywall, pintura profesional,
            closets a medida y centros de entretenimiento. Nuestro compromiso es entregar resultados impecables y a
            tiempo, cuidando cada detalle.
          </p>
          <ul className="grid sm:grid-cols-2 gap-3 text-gray-700 dark:text-gray-300">
            <li>✓ Garantía en cada proyecto</li>
            <li>✓ Materiales de primera</li>
            <li>✓ Equipo profesional</li>
            <li>✓ Atención personalizada</li>
          </ul>
        </div>
        <div data-aos="fade-left" className="card overflow-hidden">
          <img alt="Equipo trabajando" className="w-full h-80 object-cover" src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2069&auto=format&fit=crop" />
        </div>
      </div>
    </section>
  )
}


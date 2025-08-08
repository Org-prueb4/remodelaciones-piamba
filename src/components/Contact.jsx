import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa'

export default function Contact() {
  const phoneDisplay = '+57 312 466 9507'
  const phoneRaw = '573124669507'
  const email = 'faiverjimenez2016@gmail.com'
  const whatsUrl = `https://wa.me/${phoneRaw}`
  const telUrl = `tel:${phoneRaw}`
  const mailUrl = `mailto:${email}`
  const mapsUrl = 'https://maps.google.com/?q=Carrera+91a+%2341+sur+24,+Bogotá,+Colombia'

  return (
    <section id="contacto" className="py-20 bg-gray-50 dark:bg-[#0a0f1a] scroll-mt-24">
      <div className="container-section grid lg:grid-cols-2 gap-10 items-start">
        <div data-aos="fade-right" className="space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-deepblue dark:text-white">Contáctanos</h2>
          <p className="text-gray-600 dark:text-gray-300">Estamos listos para ayudarte con tu proyecto de remodelación. Escríbenos o llámanos y coordinamos una visita.</p>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="card p-5">
              <div className="flex items-center gap-3 text-deepblue dark:text-white font-semibold"><FaPhoneAlt /> Teléfono</div>
              <p className="mt-1 text-gray-700 dark:text-gray-300">{phoneDisplay}</p>
              <div className="mt-3 flex gap-3">
                <a href={telUrl} className="btn-outline">Llamar</a>
                <a href={whatsUrl} target="_blank" rel="noreferrer" className="btn-primary"><FaWhatsapp /> WhatsApp</a>
              </div>
            </div>
            <div className="card p-5">
              <div className="flex items-center gap-3 text-deepblue dark:text-white font-semibold"><FaEnvelope /> Correo</div>
              <p className="mt-1 text-gray-700 dark:text-gray-300">{email}</p>
              <div className="mt-3"><a href={mailUrl} className="btn-outline">Enviar correo</a></div>
            </div>
            <div className="card p-5">
              <div className="flex items-center gap-3 text-deepblue dark:text-white font-semibold"><FaMapMarkerAlt /> Ubicación</div>
              <p className="mt-1 text-gray-700 dark:text-gray-300">Carrera 91a #41 sur 24, Bogotá, Colombia</p>
              <div className="mt-3"><a href={mapsUrl} target="_blank" rel="noreferrer" className="btn-outline">Ver en Google Maps</a></div>
            </div>
            <div className="card p-5">
              <div className="flex items-center gap-3 text-deepblue dark:text-white font-semibold"><FaClock /> Horarios</div>
              <ul className="mt-1 text-gray-700 dark:text-gray-300 space-y-1">
                <li>Lunes a Viernes: 8:00 am – 6:00 pm</li>
                <li>Sábado: 9:00 am – 2:00 pm</li>
                <li>Domingo y festivos: Cerrado</li>
              </ul>
            </div>
          </div>
        </div>

        <div data-aos="fade-left" className="card p-6">
          <h3 className="text-xl font-semibold text-deepblue dark:text-white">¿Prefieres escribirnos por WhatsApp?</h3>
          <p className="mt-2 text-gray-700 dark:text-gray-300">Haz clic en el botón para abrir una conversación directa y cuéntanos qué necesitas.</p>
          <div className="mt-4"><a href={`${whatsUrl}?text=${encodeURIComponent('Hola, quisiera más información sobre los servicios de acabados')}`} target="_blank" rel="noreferrer" className="btn-primary"><FaWhatsapp /> Escribir por WhatsApp</a></div>

          <div className="mt-6">
            <h4 className="font-semibold text-deepblue dark:text-white">Cobertura</h4>
            <p className="text-gray-700 dark:text-gray-300">Atendemos Bogotá y área metropolitana. Consultar disponibilidad para otras ciudades.</p>
          </div>
        </div>
      </div>
    </section>
  )
}


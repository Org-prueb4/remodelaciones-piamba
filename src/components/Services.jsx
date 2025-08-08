import { useMemo, useState } from 'react'
import { FaPaintRoller, FaCouch, FaRulerCombined, FaHammer, FaDoorOpen, FaCubes } from 'react-icons/fa'
import Modal from './Modal'
import ImageSlider from './ImageSlider'

const services = [
  {
    icon: FaCubes,
    title: 'Cocinas integrales',
    desc: 'Diseño, fabricación e instalación de cocinas modernas y funcionales.',
    gallery: [
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1505691723518-36a1a3140a76?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2070&auto=format&fit=crop',
    ],
    info: 'Cocinas integrales a medida con materiales de alta calidad, herrajes silenciosos y diseño funcional.',
  },
  {
    icon: FaHammer,
    title: 'Drywall y cielorrasos',
    desc: 'Construcción de muros, plafones, nichos y acabados en yeso.',
    gallery: [
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2069&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1505843513577-22bb7d21e455?q=80&w=2069&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?q=80&w=2069&auto=format&fit=crop',
    ],
    info: 'Sistemas livianos con excelente aislamiento y terminación. Diseño de nichos e iluminación integrada.',
  },
  {
    icon: FaPaintRoller,
    title: 'Pintura profesional',
    desc: 'Alisado, estuco y pintura con terminados finos, interiores y exteriores.',
    gallery: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?q=80&w=2069&auto=format&fit=crop',
    ],
    info: 'Preparación de superficies, corrección de imperfecciones y aplicación de pintura premium.',
  },
  {
    icon: FaDoorOpen,
    title: 'Closets y carpintería',
    desc: 'Closets a medida, puertas, muebles y centros de entretenimiento.',
    gallery: [
      'https://images.unsplash.com/photo-1552324190-9e86fa095c4a?q=80&w=2069&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1598300053650-7431a7d80d1c?q=80&w=2069&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1974&auto=format&fit=crop',
    ],
    info: 'Mobiliario a medida con melamina, madera y acabados en poliuretano. Organización inteligente.',
  },
  {
    icon: FaRulerCombined,
    title: 'Diseño y asesoría',
    desc: 'Acompañamiento técnico y estético para tu proyecto.',
    gallery: [
      'https://images.unsplash.com/photo-1499952127939-9bbf5af6b0af?q=80&w=2069&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?q=80&w=2034&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2070&auto=format&fit=crop',
    ],
    info: 'Propuestas 3D, selección de materiales y acompañamiento en compras para garantizar el resultado.',
  },
  {
    icon: FaCouch,
    title: 'Acabados integrales',
    desc: 'Pisos, enchapes, iluminación y detalles decorativos.',
    gallery: [
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1505691723518-36a1a3140a76?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2069&auto=format&fit=crop',
    ],
    info: 'Soluciones integrales de piso a techo, iluminación decorativa y acabados de lujo.',
  }
]

export default function Services() {
  const [open, setOpen] = useState(false)
  const [current, setCurrent] = useState(null)

  const onOpen = (service) => {
    setCurrent(service)
    setOpen(true)
  }
  const onClose = () => setOpen(false)

  const modalTitle = useMemo(() => current?.title ?? '', [current])

  return (
    <section id="servicios" className="py-20 scroll-mt-24">
      <div className="container-section">
        <div className="text-center max-w-2xl mx-auto" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-deepblue dark:text-white">Servicios</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-3">Soluciones completas en acabados para apartamentos y hogares.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const { icon: Icon, title, desc } = service
            return (
            <button key={title} className="text-left card p-6 hover:shadow-lg transition" data-aos="fade-up" onClick={() => onOpen(service)}>
              <div className="w-12 h-12 grid place-items-center rounded-lg bg-primary-600/10 text-primary-700 dark:text-primary-300">
                <Icon className="text-2xl" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-deepblue dark:text-white">{title}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{desc}</p>
            </button>
          )})}
        </div>
      </div>

      <Modal isOpen={open} onClose={onClose} title={modalTitle}>
        {current && (
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <ImageSlider images={current.gallery} caption={current.info} />
            </div>
            <div className="space-y-3">
              <h4 className="text-xl font-semibold">¿Qué incluye?</h4>
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
                <li>Asesoría personalizada y toma de medidas</li>
                <li>Selección de materiales y acabados</li>
                <li>Instalación profesional y limpieza</li>
                <li>Garantía por escrito</li>
              </ul>
              <div className="pt-2">
                <a className="btn-primary" href={`https://wa.me/573001234567?text=${encodeURIComponent('Hola, quiero información sobre ' + current.title)}`} target="_blank" rel="noreferrer">Cotizar por WhatsApp</a>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  )
}


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
      'https://remodelaciones-piamba.s3.us-east-2.amazonaws.com/SAVE_20250808_144105.jpg',
      'https://remodelaciones-piamba.s3.us-east-2.amazonaws.com/SAVE_20250808_144114.jpg',
      'https://remodelaciones-piamba.s3.us-east-2.amazonaws.com/SAVE_20250808_144135.jpg',
    ],
    info: 'Cocinas integrales a medida con materiales de alta calidad, herrajes silenciosos y diseño funcional.',
  },
  {
    icon: FaHammer,
    title: 'Drywall y cielorrasos',
    desc: 'Construcción de muros, plafones, nichos y acabados en yeso.',
    gallery: [
      'https://remodelaciones-piamba.s3.us-east-2.amazonaws.com/SAVE_20250808_144142.jpg',
      'https://remodelaciones-piamba.s3.us-east-2.amazonaws.com/SAVE_20250808_144150.jpg',
      'https://remodelaciones-piamba.s3.us-east-2.amazonaws.com/SAVE_20250808_144159.jpg',
    ],
    info: 'Sistemas livianos con excelente aislamiento y terminación. Diseño de nichos e iluminación integrada.',
  },
  {
    icon: FaPaintRoller,
    title: 'Pintura profesional',
    desc: 'Alisado, estuco y pintura con terminados finos, interiores y exteriores.',
    gallery: [
      'https://remodelaciones-piamba.s3.us-east-2.amazonaws.com/SAVE_20250808_144206.jpg',
      'https://remodelaciones-piamba.s3.us-east-2.amazonaws.com/SAVE_20250808_144213.jpg',
      'https://remodelaciones-piamba.s3.us-east-2.amazonaws.com/SAVE_20250808_144220.jpg',
    ],
    info: 'Preparación de superficies, corrección de imperfecciones y aplicación de pintura premium.',
  },
  {
    icon: FaDoorOpen,
    title: 'Closets y carpintería',
    desc: 'Closets a medida, puertas, muebles y centros de entretenimiento.',
    gallery: [
      'https://remodelaciones-piamba.s3.us-east-2.amazonaws.com/SAVE_20250808_144228.jpg',
      'https://remodelaciones-piamba.s3.us-east-2.amazonaws.com/SAVE_20250808_144236.jpg',
      'https://remodelaciones-piamba.s3.us-east-2.amazonaws.com/SAVE_20250808_144244.jpg',
    ],
    info: 'Mobiliario a medida con melamina, madera y acabados en poliuretano. Organización inteligente.',
  },
  {
    icon: FaRulerCombined,
    title: 'Diseño y asesoría',
    desc: 'Acompañamiento técnico y estético para tu proyecto.',
    gallery: [
      'https://remodelaciones-piamba.s3.us-east-2.amazonaws.com/SAVE_20250808_144105.jpg',
      'https://remodelaciones-piamba.s3.us-east-2.amazonaws.com/SAVE_20250808_144114.jpg',
      'https://remodelaciones-piamba.s3.us-east-2.amazonaws.com/SAVE_20250808_144135.jpg',
    ],
    info: 'Propuestas 3D, selección de materiales y acompañamiento en compras para garantizar el resultado.',
  },
  {
    icon: FaCouch,
    title: 'Acabados integrales',
    desc: 'Pisos, enchapes, iluminación y detalles decorativos.',
    gallery: [
      'https://remodelaciones-piamba.s3.us-east-2.amazonaws.com/SAVE_20250808_144142.jpg',
      'https://remodelaciones-piamba.s3.us-east-2.amazonaws.com/SAVE_20250808_144150.jpg',
      'https://remodelaciones-piamba.s3.us-east-2.amazonaws.com/SAVE_20250808_144159.jpg',
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
                <a className="btn-primary" href={`https://wa.me/573124669507?text=${encodeURIComponent('Hola, quiero información sobre ' + current.title)}`} target="_blank" rel="noreferrer">Cotizar por WhatsApp</a>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  )
}


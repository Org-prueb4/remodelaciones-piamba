import { useState, useEffect } from 'react'
import Modal from './Modal'
import ImageSlider from './ImageSlider'

const images = [
  'https://remodelaciones-piamba.s3.us-east-2.amazonaws.com/SAVE_20250808_144142.jpg',
  'https://remodelaciones-piamba.s3.us-east-2.amazonaws.com/SAVE_20250808_144150.jpg',
  'https://remodelaciones-piamba.s3.us-east-2.amazonaws.com/SAVE_20250808_144159.jpg',
  'https://remodelaciones-piamba.s3.us-east-2.amazonaws.com/SAVE_20250808_144206.jpg',
  'https://remodelaciones-piamba.s3.us-east-2.amazonaws.com/SAVE_20250808_144213.jpg',
  'https://remodelaciones-piamba.s3.us-east-2.amazonaws.com/SAVE_20250808_144220.jpg',
  'https://remodelaciones-piamba.s3.us-east-2.amazonaws.com/SAVE_20250808_144228.jpg',
  'https://remodelaciones-piamba.s3.us-east-2.amazonaws.com/SAVE_20250808_144236.jpg',
  'https://remodelaciones-piamba.s3.us-east-2.amazonaws.com/SAVE_20250808_144244.jpg',
]

export default function Gallery() {
  const [active, setActive] = useState(0)
  const [open, setOpen] = useState(false)
  const [imageOrientations, setImageOrientations] = useState({})
  
  const openModal = (idx) => { setActive(idx); setOpen(true) }
  const closeModal = () => setOpen(false)

  // Función para detectar la orientación de las imágenes
  useEffect(() => {
    const checkImageOrientation = (src, index) => {
      const img = new Image()
      img.onload = () => {
        const isVertical = img.height > img.width
        setImageOrientations(prev => ({
          ...prev,
          [index]: isVertical ? 'vertical' : 'horizontal'
        }))
      }
      img.src = src
    }

    images.forEach((src, index) => {
      checkImageOrientation(src, index)
    })
  }, [])

  const getImageClass = (index) => {
    const orientation = imageOrientations[index]
    if (orientation === 'vertical') {
      return 'w-full h-full object-cover object-center'
    }
    return 'w-full h-full object-cover'
  }

  return (
    <section id="galeria" className="py-20 bg-gray-50 dark:bg-[#0a0f1a] scroll-mt-24">
      <div className="container-section">
        <div className="text-center max-w-2xl mx-auto" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-deepblue dark:text-white">Galería</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-3">Algunos de nuestros trabajos recientes.</p>
        </div>

        <div className="mt-10 grid lg:grid-cols-2 gap-6 items-start">
          <div className="card overflow-hidden" data-aos="zoom-in">
            <button onClick={() => openModal(active)} className="block w-full">
              <img 
                className={`w-full h-[420px] ${getImageClass(active)}`} 
                alt="Trabajo" 
                src={images[active]} 
              />
            </button>
          </div>
          <div className="grid grid-cols-3 gap-4" data-aos="fade-left">
            {images.map((src, idx) => (
              <button key={src} onClick={() => setActive(idx)} onDoubleClick={() => openModal(idx)} className={`relative group rounded-lg overflow-hidden aspect-video ${active === idx ? 'ring-2 ring-gold' : ''}`}>
                <img 
                  src={src} 
                  alt="Miniatura" 
                  className={`${getImageClass(idx)} transition-transform group-hover:scale-105`} 
                />
              </button>
            ))}
          </div>
        </div>
        <Modal isOpen={open} onClose={closeModal} title="Miniatura">
          <ImageSlider images={images} caption={null} initialIndex={active} auto={false} />
        </Modal>
      </div>
    </section>
  )
}


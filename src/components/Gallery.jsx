import { useState } from 'react'
import Modal from './Modal'
import ImageSlider from './ImageSlider'

const images = [
  'https://images.unsplash.com/photo-1505691723518-36a1a3140a76?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?q=80&w=2069&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2069&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1505843513577-22bb7d21e455?q=80&w=2069&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1552324190-9e86fa095c4a?q=80&w=2069&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1598300053650-7431a7d80d1c?q=80&w=2069&auto=format&fit=crop',
]

export default function Gallery() {
  const [active, setActive] = useState(0)
  const [open, setOpen] = useState(false)
  const openModal = (idx) => { setActive(idx); setOpen(true) }
  const closeModal = () => setOpen(false)
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
              <img className="w-full h-[420px] object-cover" alt="Trabajo" src={images[active]} />
            </button>
          </div>
          <div className="grid grid-cols-3 gap-4" data-aos="fade-left">
            {images.map((src, idx) => (
              <button key={src} onClick={() => setActive(idx)} onDoubleClick={() => openModal(idx)} className={`relative group rounded-lg overflow-hidden aspect-video ${active === idx ? 'ring-2 ring-gold' : ''}`}>
                <img src={src} alt="Miniatura" className="w-full h-full object-cover transition-transform group-hover:scale-105" />
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


import { useState, useRef } from 'react'
import Modal from './Modal'

const videos = [
  {
    title: 'Cocina integral – instalación',
    thumb: 'https://remodelaciones-piamba.s3.us-east-2.amazonaws.com/SAVE_20250808_144114.jpg',
    src: 'https://remodelaciones-piamba.s3.us-east-2.amazonaws.com/VID-20250808-WA0010.mp4',
    desc: 'Proceso de instalación y terminación de cocina integral a medida.'
  },
  {
    title: 'Drywall – nichos e iluminación',
    thumb: 'https://remodelaciones-piamba.s3.us-east-2.amazonaws.com/SAVE_20250808_144135.jpg',
    src: 'https://remodelaciones-piamba.s3.us-east-2.amazonaws.com/VID-20250808-WA0011.mp4',
    desc: 'Construcción de nichos con iluminación integrada en drywall.'
  },
  {
    title: 'Pintura profesional – acabado final',
    thumb: 'https://remodelaciones-piamba.s3.us-east-2.amazonaws.com/SAVE_20250808_144142.jpg',
    src: 'https://remodelaciones-piamba.s3.us-east-2.amazonaws.com/VID-20250808-WA0012.mp4',
    desc: 'Alisado, estuco y aplicación de pintura premium.'
  },
  {
    title: 'Closets a medida',
    thumb: 'https://remodelaciones-piamba.s3.us-east-2.amazonaws.com/SAVE_20250808_144150.jpg',
    src: 'https://remodelaciones-piamba.s3.us-east-2.amazonaws.com/VID-20250808-WA0013.mp4',
    desc: 'Fabricación e instalación de closets personalizados.'
  },
  {
    title: 'Acabados integrales',
    thumb: 'https://remodelaciones-piamba.s3.us-east-2.amazonaws.com/SAVE_20250808_144159.jpg',
    src: 'https://remodelaciones-piamba.s3.us-east-2.amazonaws.com/VID-20250808-WA0024.mp4',
    desc: 'Soluciones completas de piso a techo.'
  },
  {
    title: 'Diseño y asesoría',
    thumb: 'https://remodelaciones-piamba.s3.us-east-2.amazonaws.com/SAVE_20250808_144206.jpg',
    src: 'https://remodelaciones-piamba.s3.us-east-2.amazonaws.com/VID-20250808-WA0026.mp4',
    desc: 'Acompañamiento técnico y estético para tu proyecto.'
  },
]

export default function ServiceVideos() {
  const [open, setOpen] = useState(false)
  const [current, setCurrent] = useState(null)
  const videoRef = useRef(null)

  const openVideo = (item) => { 
    setCurrent(item); 
    setOpen(true) 
  }
  
  const closeVideo = () => { 
    setOpen(false)
    // Pausar el video cuando se cierra el modal
    if (videoRef.current) {
      videoRef.current.pause()
    }
  }

  // Reproducir automáticamente cuando se abre el modal
  const handleModalOpen = () => {
    if (videoRef.current) {
      videoRef.current.play()
    }
  }

  return (
    <section id="videos" className="py-20 scroll-mt-24 bg-white dark:bg-[#0b1220]">
      <div className="container-section">
        <div className="text-center max-w-2xl mx-auto" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-deepblue dark:text-white">Videos de servicios</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-3">Muestra de procesos y resultados en proyectos reales.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <div key={video.title} className="card overflow-hidden" data-aos="fade-up" data-aos-delay={index * 100}>
              <button onClick={() => openVideo(video)} className="block w-full text-left">
                <div className="relative aspect-video bg-gray-100 overflow-hidden">
                  <img 
                    src={video.thumb} 
                    alt={video.title}
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-primary-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-deepblue dark:text-white mb-2">{video.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{video.desc}</p>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>

      <Modal isOpen={open} onClose={closeVideo} title={current?.title || ''}>
        {current && (
          <div className="space-y-4">
            <div className="aspect-video bg-black rounded-lg overflow-hidden">
              <video 
                ref={videoRef}
                controls 
                autoPlay
                muted
                className="w-full h-full"
                poster={current.thumb}
                onLoadedData={handleModalOpen}
              >
                <source src={current.src} type="video/mp4" />
                Tu navegador no soporta el elemento de video.
              </video>
            </div>
            <div className="text-gray-700 dark:text-gray-300">
              <p>{current.desc}</p>
            </div>
          </div>
        )}
      </Modal>
    </section>
  )
}


import { useState } from 'react'
import Modal from './Modal'

const videos = [
  {
    title: 'Cocina integral – instalación',
    thumb: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2070&auto=format&fit=crop',
    src: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
    desc: 'Proceso de instalación y terminación de cocina integral a medida.'
  },
  {
    title: 'Drywall – nichos e iluminación',
    thumb: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2069&auto=format&fit=crop',
    src: 'https://media.w3.org/2010/05/bunny/trailer.mp4',
    desc: 'Construcción de nichos con iluminación integrada en drywall.'
  },
  {
    title: 'Pintura profesional – acabado final',
    thumb: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop',
    src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    desc: 'Alisado, estuco y aplicación de pintura premium.'
  },
]

export default function ServiceVideos() {
  const [open, setOpen] = useState(false)
  const [current, setCurrent] = useState(null)

  const openVideo = (item) => { setCurrent(item); setOpen(true) }
  const closeVideo = () => setOpen(false)

  return (
    <section id="videos" className="py-20 scroll-mt-24 bg-white dark:bg-[#0b1220]">
      <div className="container-section">
        <div className="text-center max-w-2xl mx-auto" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-deepblue dark:text-white">Videos de servicios</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-3">Muestra de procesos y resultados en proyectos reales.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((v) => (
            <button key={v.title} onClick={() => openVideo(v)} className="text-left card overflow-hidden group">
              <div className="relative aspect-video">
                <img src={v.thumb} alt={v.title} className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />
                <span className="absolute inset-0 grid place-items-center text-white text-4xl">▶</span>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-deepblue dark:text-white">{v.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 line-clamp-2">{v.desc}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      <Modal isOpen={open} onClose={closeVideo} title={current?.title ?? 'Video'}>
        {current && (
          <div className="space-y-3">
            <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-black">
              <video src={current.src} controls autoPlay className="w-full h-full" />
            </div>
            <p className="text-gray-700 dark:text-gray-300">{current.desc}</p>
          </div>
        )}
      </Modal>
    </section>
  )
}


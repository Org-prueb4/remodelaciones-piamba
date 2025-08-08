import { useEffect, useMemo, useState } from 'react'

export default function ImageSlider({ images = [], caption, initialIndex = 0, auto = true, intervalMs = 2000 }) {
  const safeInitial = useMemo(() => {
    if (initialIndex < 0) return 0
    return initialIndex
  }, [initialIndex])
  const [index, setIndex] = useState(safeInitial)
  const total = images.length
  const prev = () => setIndex((i) => (i - 1 + total) % total)
  const next = () => setIndex((i) => (i + 1) % total)

  useEffect(() => {
    if (!auto || total <= 1) return
    const id = setInterval(next, intervalMs)
    return () => clearInterval(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [total, auto, intervalMs])

  if (total === 0) return null

  return (
    <div className="w-full">
      <div className="relative w-full h-[320px] sm:h-[420px] lg:h-[520px] overflow-hidden rounded-lg">
        <img
          src={images[index]}
          alt={`Imagen ${index + 1} de ${total}`}
          className="w-full h-full object-cover"
        />
        <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 text-white w-9 h-9 grid place-items-center hover:bg-black/60" aria-label="Anterior">‹</button>
        <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 text-white w-9 h-9 grid place-items-center hover:bg-black/60" aria-label="Siguiente">›</button>
      </div>
      <div className="flex items-center justify-between mt-3">
        <div className="text-sm text-gray-600 dark:text-gray-300">{caption}</div>
        <div className="flex gap-1">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Ir a la imagen ${i + 1}`}
              className={`w-2.5 h-2.5 rounded-full ${i === index ? 'bg-primary-600' : 'bg-gray-300 dark:bg-white/20'}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}


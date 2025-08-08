import { useEffect, useRef } from 'react'

export default function Modal({ isOpen, onClose, title, children }) {
  const dialogRef = useRef(null)

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'Tab') {
        // simple focus trap
        const focusables = dialogRef.current?.querySelectorAll(
          'a, button, textarea, input, select, [tabindex]:not([tabindex="-1"])',
        )
        if (!focusables || focusables.length === 0) return
        const first = focusables[0]
        const last = focusables[focusables.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener('keydown', onKey)
    document.body.classList.add('overflow-hidden')
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.classList.remove('overflow-hidden')
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100]">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />
      <div className="absolute inset-0 grid place-items-center p-4">
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          className="card w-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col"
        >
          <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur border-b border-gray-200/70 dark:border-white/10">
            <h3 className="text-lg font-semibold">{title}</h3>
            <button onClick={onClose} className="rounded-md px-3 py-1.5 hover:bg-white/10" aria-label="Cerrar">✕</button>
          </div>
          <div className="p-4 sm:p-6 overflow-y-auto flex-1">{children}</div>
        </div>
      </div>
    </div>
  )
}


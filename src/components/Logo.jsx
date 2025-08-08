import { FaTools } from 'react-icons/fa'

export default function Logo({ className = '' }) {
  return (
    <a href="#inicio" className={`inline-flex items-center gap-3 ${className}`} aria-label="Ir al inicio">
      <span className="relative grid place-items-center w-11 h-11 rounded-xl bg-gradient-to-br from-gold to-yellow-400 ring-1 ring-black/5 shadow-soft">
        <FaTools className="text-deepblue text-2xl drop-shadow" />
        <span className="absolute inset-0 rounded-xl pointer-events-none shadow-[inset_0_1px_6px_rgba(255,255,255,0.35)]/50" />
      </span>
      <span className="leading-tight">
        <span className="block text-deepblue dark:text-white font-semibold text-base sm:text-lg">Remodelaciones</span>
        <span className="relative inline-block font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-300 tracking-wide text-lg sm:text-2xl">
          Piamba
          <span className="absolute -bottom-1 left-0 right-0 h-1 rounded-full bg-gradient-to-r from-gold to-yellow-300"></span>
        </span>
      </span>
    </a>
  )
}


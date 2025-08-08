import { useEffect, useState } from 'react'
import { FaTools } from 'react-icons/fa'
import Logo from './Logo'

const navItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Videos', href: '#videos' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar({ dark, onToggleDark }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('inicio')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sectionIds = navItems.map((n) => n.href.replace('#', ''))
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el) => Boolean(el))

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      {
        root: null,
        // Activa cuando la sección está entre ~10%-60% del viewport
        rootMargin: '-10% 0px -60% 0px',
        threshold: 0.01,
      },
    )

    sections.forEach((sec) => observer.observe(sec))

    return () => observer.disconnect()
  }, [])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-colors`}>
      <div className={`absolute inset-0 pointer-events-none ${
        scrolled
          ? 'bg-white/70 dark:bg-[#0b1220]/70 backdrop-blur-md shadow-sm border-b border-black/5 dark:border-white/10'
          : 'bg-white/35 dark:bg-[#0b1220]/35 backdrop-blur-sm border-b border-transparent'
      }`} />
      <nav className="relative z-10 container-section flex items-center justify-between py-4">
        <Logo />

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = active === item.href.replace('#', '')
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? 'page' : undefined}
                className={`text-sm font-medium transition relative ${
                  isActive
                    ? 'text-primary-600 dark:text-primary-300'
                    : 'text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary-600 dark:bg-primary-400 rounded-full" />
                )}
              </a>
            )
          })}
          <button className="btn-primary" onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}>
            Contáctanos
          </button>
          <button aria-label="Toggle dark mode" className="ml-2 rounded-md p-2 border border-white/10 hover:bg-white/10" onClick={onToggleDark}>
            {dark ? '🌙' : '☀️'}
          </button>
        </div>

        <button className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-gray-300 dark:border-white/10" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          <span className="sr-only">Menu</span>
          <div className="w-5 space-y-1.5">
            <span className="block h-0.5 bg-current"></span>
            <span className="block h-0.5 bg-current"></span>
            <span className="block h-0.5 bg-current"></span>
          </div>
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-gray-200/70 dark:border-white/10 bg-white/90 dark:bg-[#0b1220]/90 backdrop-blur">
          <div className="container-section py-4 space-y-3">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="block text-gray-800 dark:text-gray-100 font-medium" onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-3 pt-2">
              <button className="btn-primary flex-1" onClick={() => { setOpen(false); document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' }) }}>
                Contáctanos
              </button>
              <button aria-label="Toggle dark mode" className="rounded-md p-2 border border-white/10 hover:bg-white/10" onClick={onToggleDark}>
                {dark ? '🌙' : '☀️'}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}


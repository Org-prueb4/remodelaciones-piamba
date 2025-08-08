import { FaFacebook, FaTiktok } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-gray-200/70 dark:border-white/5">
      <div className="container-section py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-gray-600 dark:text-gray-400">© {new Date().getFullYear()} Remodelaciones Piamba. Todos los derechos reservados.</p>
        <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
          <a href="https://www.facebook.com/people/Remodelaciones-y-terminados-faiver-Piamba/100040327058373/" target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:text-primary-600"><FaFacebook /></a>
          <a href="https://www.tiktok.com/@faiverjimenez2/video/7483740424608156934" target="_blank" rel="noreferrer" aria-label="TikTok" className="hover:text-primary-600"><FaTiktok /></a>
        </div>
      </div>
    </footer>
  )
}


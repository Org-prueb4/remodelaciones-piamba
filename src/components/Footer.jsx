import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-gray-200/70 dark:border-white/5">
      <div className="container-section py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-gray-600 dark:text-gray-400">© {new Date().getFullYear()} Remodelaciones Piamba. Todos los derechos reservados.</p>
        <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
          <a href="#" aria-label="Facebook" className="hover:text-primary-600"><FaFacebook /></a>
          <a href="#" aria-label="Instagram" className="hover:text-primary-600"><FaInstagram /></a>
          <a href="#" aria-label="TikTok" className="hover:text-primary-600"><FaTiktok /></a>
        </div>
      </div>
    </footer>
  )
}


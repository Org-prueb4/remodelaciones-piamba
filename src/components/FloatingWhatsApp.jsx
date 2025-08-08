import { FaWhatsapp } from 'react-icons/fa'

export default function FloatingWhatsApp() {
  const phone = '+573124669507'
  const url = `https://wa.me/${phone.replace(/\D/g, '')}`
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 grid place-items-center w-14 h-14 rounded-full bg-green-500 text-white shadow-soft hover:bg-green-600"
      aria-label="WhatsApp"
    >
      <FaWhatsapp className="text-3xl" />
    </a>
  )
}


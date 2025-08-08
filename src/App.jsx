import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Gallery from './components/Gallery'
import ServiceVideos from './components/ServiceVideos'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import Footer from './components/Footer'

function App() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    AOS.init({ duration: 700, once: true, easing: 'ease-out-quad' })
  }, [])

  useEffect(() => {
    const root = document.documentElement
    if (dark) root.classList.add('dark')
    else root.classList.remove('dark')
  }, [dark])

  return (
    <div className="min-h-dvh flex flex-col bg-white dark:bg-[#0b1220]">
      <Navbar dark={dark} onToggleDark={() => setDark((v) => !v)} />
      <main>
        <Hero />
        <About />
        <Services />
        <ServiceVideos />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}

export default App

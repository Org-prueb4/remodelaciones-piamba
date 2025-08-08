## Remodelaciones Piamba – Landing Page

Landing page moderna y profesional para un negocio de acabados de apartamentos. Construida con React, Vite y Tailwind CSS. Incluye animaciones, modo oscuro y una arquitectura de componentes limpia.

### Características principales
- Secciones: Header con navegación, Hero con slider de fondo, ¿Quiénes somos?, Servicios, Videos de servicios, Galería, Testimonios, Contacto y Footer.
- Scrollspy: el ítem del menú se resalta según la sección visible.
- Hero slider: imágenes con transición por fade cada 3 segundos.
- Servicios: tarjetas clicables; cada servicio abre un modal con slider de imágenes y detalles.
- Galería: imagen principal + miniaturas; modal de visualización en grande.
- Videos: grilla con miniaturas; modal con reproductor de video.
- Contacto: información de teléfono, WhatsApp, correo, ubicación y horarios (sin formulario).
- Botón flotante de WhatsApp.
- Dark mode por clase.
- Diseño responsive, sombras suaves, transiciones y `backdrop-blur` en el header.

### Stack
- Vite + React
- Tailwind CSS
- AOS (animaciones on scroll)
- React Icons

### Scripts
- `npm run dev`: entorno de desarrollo con HMR.
- `npm run build`: build de producción.
- `npm run preview`: previsualización del build.
- `npm run lint`: linting (ESLint).

### Estructura de carpetas
```
src/
  components/
    About.jsx            // ¿Quiénes somos?
    Contact.jsx          // Información y CTAs de contacto
    FloatingWhatsApp.jsx // Botón flotante de WhatsApp
    Footer.jsx
    Gallery.jsx          // Galería + modal de imágenes
    Hero.jsx             // Slider de fondo + CTA
    ImageSlider.jsx      // Slider reutilizable (autoavance opcional)
    Logo.jsx             // Emblema + wordmark
    Modal.jsx            // Modal accesible reutilizable
    Navbar.jsx           // Header, navegación y scrollspy
    ServiceVideos.jsx    // Sección de videos con modal
    Services.jsx         // Tarjetas de servicios + modal por servicio
    Testimonials.jsx
  index.css              // Tailwind y utilidades personalizadas
  App.jsx
  main.jsx
```

### Configuración de Tailwind
- `tailwind.config.js` escanea `index.html` y archivos en `src/**/*.{js,jsx,ts,tsx}`.
- `darkMode: 'class'`.
- Extensiones: paleta `primary`, `deepblue`, `gold`; tipografía `Poppins`.

### Variables y enlaces importantes
- WhatsApp: `+57 300 123 4567` (editable en `FloatingWhatsApp.jsx` y `Contact.jsx`).
- Títulos/textos: personalizables en cada componente de sección.
- Imágenes: actualmente se usan URLs de Unsplash a modo de ejemplo.

### Cómo ejecutar
1. `npm install`
2. `npm run dev`
3. Abrir `http://localhost:5173`

### Deploy (estático)
- Ejecutar `npm run build` y servir el contenido de `dist/` (Netlify, Vercel, GitHub Pages, etc.).

### Git y repositorio
```
git init
git add .
git commit -m "chore: initial commit"
git branch -M main
git remote add origin git@github.com:Org-prueb4/remodelaciones-piamba.git
git push -u origin main
```

### Notas de accesibilidad
- Modal con `role="dialog"`, `aria-modal` y cierre con `Esc`.
- Botones con `aria-label` donde aplica.
- Colores con buen contraste y foco visible.

### Próximas mejoras sugeridas
- Integrar un servicio de envío (Formspree/EmailJS) si se necesita formulario.
- Reemplazo de imágenes por assets propios y optimización.
- i18n, SEO avanzado y Open Graph.

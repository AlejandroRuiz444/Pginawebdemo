# 🌙 Dream Tape Landing Page - LIFULL

Landing page completa para el producto **Dream Tape** de LIFULL, diseñada específicamente para Shopify con enfoque en conversión y experiencia de usuario premium.

## 📦 Archivos Creados

### Assets (JavaScript y CSS)
- `assets/dream-tape-styles.css` - Sistema de diseño completo con paleta oscura premium
- `assets/dream-tape.js` - Animaciones, interactions y comportamientos interactivos

### Sections (Componentes Liquid)
- `sections/dream-tape-announcement-ticker.liquid` - Ticker superior animado
- `sections/dream-tape-header.liquid` - Navegación sticky con carrito
- `sections/dream-tape-hero.liquid` - Hero section con producto, precio y CTA
- `sections/dream-tape-problem-sections.liquid` - Secciones de problemas/soluciones (modular)
- `sections/dream-tape-testimonials.liquid` - Grid de testimonios de clientes
- `sections/dream-tape-before-after.liquid` - Slider interactivo antes/después
- `sections/dream-tape-comparison.liquid` - Tabla comparativa de características
- `sections/dream-tape-cta-ticker.liquid` - Ticker rotativo de mensajes CTA
- `sections/dream-tape-video.liquid` - Video embebido (YouTube/Vimeo)
- `sections/dream-tape-faq.liquid` - Accordion de preguntas frecuentes
- `sections/dream-tape-footer-ticker.liquid` - Ticker inferior
- `sections/dream-tape-footer.liquid` - Footer con newsletter
- `sections/dream-tape-floating-cta.liquid` - CTA flotante mobile

### Templates y Layouts
- `templates/page.dream-tape.json` - Template JSON con todas las secciones configuradas
- `layout/theme.dream-tape.liquid` - Layout personalizado que carga los assets

## 🚀 Instalación

### 1. Subir archivos al tema de Shopify

Todos los archivos están listos. Solo necesitas asegurarte de que estén sincronizados con tu tienda Shopify.

### 2. Crear una página nueva en Shopify

1. Ve a **Online Store → Pages**
2. Clic en **Add page**
3. Título de la página: `Dream Tape` (o el que prefieras)
4. En el panel derecho, en **Template**, selecciona: **page.dream-tape**
5. Guarda la página

### 3. Configurar el producto

1. En el Theme Editor, ve a la página que creaste
2. En la sección **Dream Tape Hero**, agrega:
   - El **Variant ID** del producto Dream Tape
   - Las imágenes del producto
   - Los precios correctos
3. Configura las demás secciones según tu contenido

## ⚙️ Configuración de Secciones

### Hero Section
- **Product Variant ID**: Obligatorio para que funcione el botón "Agregar al carrito"
- **Imágenes**: Imagen principal + 4 miniaturas
- **Precios**: Configurables desde el Theme Editor
- **Badges de confianza**: Editables

### Problem Sections
Esta sección es modular. Cada bloque puede tener uno de 3 layouts:
- **split_image**: Imagen y texto lado a lado
- **features_grid**: Grid de 4 características con íconos
- **lists**: Dos listas comparativas (problemas vs soluciones)

### Testimonials
Agrega tantos testimonios como necesites desde el Theme Editor. Cada uno tiene:
- Texto del testimonio
- Nombre del autor (se genera avatar automáticamente con inicial)

### Comparison Table
Agrega filas de características. Cada fila tiene:
- Nombre de la característica
- ✅ o ❌ para LIFULL
- ✅ o ❌ para competidores

### Before & After
Dos opciones:
1. **Con imágenes**: Sube imagen "antes" e "después" → slider interactivo
2. **Sin imágenes**: Se muestra un diseño alternativo con listas

### FAQ
Accordion con preguntas frecuentes. Solo una pregunta abierta a la vez.

### Video
Soporta:
- YouTube (automáticamente detecta y embebe)
- Vimeo (automáticamente detecta y embebe)
- Cualquier URL de iframe

## 🎨 Personalización de Colores

Edita las variables CSS en `dream-tape-styles.css` (líneas 8-22):

```css
:root {
  --dt-bg-primary: #0A0E1A;        /* Fondo principal */
  --dt-bg-secondary: #111827;      /* Fondo alternativo */
  --dt-accent-primary: #6366F1;    /* Violeta CTA */
  --dt-accent-warm: #F4C842;       /* Dorado - estrellas */
  --dt-text-primary: #FFFFFF;      /* Texto principal */
  --dt-text-secondary: #A8B4C8;    /* Texto secundario */
  --dt-card-bg: #1E2535;           /* Fondo de cards */
  --dt-urgency: #FF5757;           /* Rojo urgencia */
  --dt-success: #22C55E;           /* Verde éxito */
}
```

## 🛠️ Funcionalidades Implementadas

### ✅ Animaciones
- Scroll animations con IntersectionObserver
- Fade in + slide up en elementos
- Stagger delays para efecto secuencial
- Animación de estrellas parpadeantes en el hero
- Pulso continuo en botones CTA
- Transiciones suaves en hovers

### ✅ Comportamientos Interactivos
- Header sticky con shadow al hacer scroll
- CTA flotante mobile (aparece cuando hero CTA sale de viewport)
- Galería de producto con thumbnails clickeables
- Accordion FAQ (solo uno abierto a la vez)
- Before/After slider draggable
- Newsletter form con feedback visual
- Ticker infinito (announcement bars)
- Rotación automática de mensajes CTA (cada 3 segundos)
- Contador de urgencia con stock aleatorio

### ✅ Responsive
- Breakpoints: Desktop (≥1024px), Tablet (768-1023px), Mobile (<768px)
- Grid layouts que se adaptan automáticamente
- Tipografía escalada con `clamp()`
- Navegación colapsada en mobile
- CTA flotante solo en mobile

### ✅ Performance
- Lazy loading de imágenes
- Throttle en eventos de scroll
- IntersectionObserver para animaciones eficientes
- CSS animations con `will-change`
- Fuentes con `display: swap`
- WebP recomendado para imágenes

## 📱 Integración con Shopify

### Add to Cart
El botón CTA está preparado para integrarse con el carrito de Shopify. En `dream-tape.js` (línea 320+), encontrarás el código comentado para hacer el fetch al cart API:

```javascript
fetch('/cart/add.js', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    items: [{ id: variantId, quantity: 1 }]
  })
})
```

Solo necesitas descomentar y configurar el `variant_id` en la sección hero.

### Newsletter
El formulario de newsletter usa el endpoint estándar de Shopify `/contact#newsletter`. Se integra automáticamente con tu tienda.

### Carrito
El ícono del carrito muestra `{{ cart.item_count }}` en tiempo real.

## 🎯 Orden de Secciones en la Página

1. **Announcement Ticker** (superior)
2. **Header** (navegación)
3. **Hero** (producto principal + CTA)
4. **Problem Sections** (6 secciones de problemas/soluciones)
5. **Testimonials** (5 testimonios)
6. **Before & After** (comparación)
7. **Comparison Table** (tabla de características)
8. **CTA Ticker** (mensajes rotativos)
9. **Video** (opcional)
10. **FAQ** (3 preguntas)
11. **Footer Ticker** (inferior)
12. **Footer** (newsletter + copyright)
13. **Floating CTA** (mobile, sticky bottom)

## 📋 Checklist de Configuración

- [ ] Subir todos los archivos al tema
- [ ] Crear página con template `page.dream-tape`
- [ ] Configurar Variant ID del producto en Hero
- [ ] Subir imágenes del producto (1 principal + 4 thumbnails)
- [ ] Configurar precios en Hero
- [ ] Personalizar testimonios (5 mínimo recomendado)
- [ ] Configurar tabla comparativa
- [ ] Agregar video URL (YouTube/Vimeo)
- [ ] Personalizar FAQs
- [ ] Configurar textos de footer y newsletter
- [ ] Probar en mobile y desktop
- [ ] Verificar que el botón CTA agrega al carrito correctamente

## 🔧 Soporte Técnico

### Colores no se aplican
Verifica que `dream-tape-styles.css` esté cargándose correctamente en el layout.

### Animaciones no funcionan
Verifica que `dream-tape.js` esté cargándose. Revisa la consola del navegador.

### El botón CTA no agrega al carrito
Asegúrate de haber configurado el `product_variant_id` en la sección Hero.

### El layout no se ve bien en mobile
El diseño es responsive. Limpia caché y prueba en un dispositivo real o DevTools.

## 🌟 Características Destacadas

- **100% Shopify Native**: Usa Liquid, secciones JSON y assets estándar
- **Theme Editor Compatible**: Todas las secciones son editables desde el Theme Editor
- **Modular**: Agrega/quita secciones fácilmente
- **Alto rendimiento**: Optimizado para Core Web Vitals
- **Accesibilidad**: Semántica HTML5, ARIA labels
- **SEO Ready**: Meta tags, alt texts, estructura semántica

---

**Hecho con 💜 para LIFULL**  
¿Preguntas? Revisa la documentación de Shopify: https://shopify.dev/docs/themes

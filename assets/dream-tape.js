// @ts-nocheck
/**
 * DREAM TAPE LANDING PAGE - LIFULL
 * JavaScript para animaciones, interacciones y comportamientos
 */

class DreamTapePage {
  constructor() {
    this.init();
  }

  init() {
    // Esperar a que el DOM esté listo
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.setup());
    } else {
      this.setup();
    }
  }

  setup() {
    this.setupScrollAnimations();
    this.setupHeaderBehavior();
    this.setupFloatingCTA();
    this.setupStarsAnimation();
    this.setupGallery();
    this.setupFAQ();
    this.setupCTATicker();
    this.setupUrgencyCounter();
    this.setupBeforeAfterSlider();
    this.setupTickers();
  }

  // ==================== SCROLL ANIMATIONS ====================
  setupScrollAnimations() {
    const animatedElements = document.querySelectorAll('.dt-animate');
    
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
      });

      animatedElements.forEach(el => observer.observe(el));
    } else {
      // Fallback para navegadores sin soporte
      animatedElements.forEach(el => el.classList.add('visible'));
    }
  }

  // ==================== HEADER STICKY BEHAVIOR ====================
  setupHeaderBehavior() {
    const header = document.querySelector('.dt-header');
    if (!header) return;

    let lastScroll = 0;

    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      
      if (currentScroll > 80) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
      
      lastScroll = currentScroll;
    }, { passive: true });
  }

  // ==================== FLOATING CTA (MOBILE) ====================
  setupFloatingCTA() {
    const floatingCTA = document.querySelector('.dt-floating-cta');
    const heroCTA = document.querySelector('.dt-hero .dt-cta-button');
    
    if (!floatingCTA || !heroCTA) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          floatingCTA.classList.remove('visible');
        } else {
          floatingCTA.classList.add('visible');
        }
      });
    }, {
      threshold: 0
    });

    observer.observe(heroCTA);
  }

  // ==================== STARS ANIMATION ====================
  setupStarsAnimation() {
    const canvas = document.querySelector('.dt-stars-canvas');
    if (!canvas) return;

    const starsCount = 40;
    
    for (let i = 0; i < starsCount; i++) {
      const star = document.createElement('div');
      star.className = 'dt-star';
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.animationDelay = `${Math.random() * 5}s`;
      star.style.animationDuration = `${2 + Math.random() * 3}s`;
      canvas.appendChild(star);
    }
  }

  // ==================== PRODUCT GALLERY ====================
  setupGallery() {
    const mainImage = document.querySelector('.dt-main-image');
    const thumbnails = document.querySelectorAll('.dt-thumbnail');
    
    if (!mainImage || thumbnails.length === 0) return;

    thumbnails.forEach(thumb => {
      thumb.addEventListener('click', () => {
        // Remover active de todos
        thumbnails.forEach(t => t.classList.remove('active'));
        
        // Agregar active al clickeado
        thumb.classList.add('active');
        
        // Cambiar imagen principal con fade
        if (mainImage instanceof HTMLImageElement) {
          mainImage.style.opacity = '0';
          
          setTimeout(() => {
            if (mainImage instanceof HTMLImageElement && thumb instanceof HTMLImageElement) {
              mainImage.src = thumb.dataset.fullImage || thumb.src;
              mainImage.style.opacity = '1';
            }
          }, 150);
        }
      });
    });
  }

  // ==================== FAQ ACCORDION ====================
  setupFAQ() {
    const accordionItems = document.querySelectorAll('.dt-accordion-item');
    
    accordionItems.forEach(item => {
      const question = item.querySelector('.dt-accordion-question');
      
      if (!question) return;
      
      question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Cerrar todos
        accordionItems.forEach(i => i.classList.remove('active'));
        
        // Abrir el clickeado si no estaba activo
        if (!isActive) {
          item.classList.add('active');
        }
      });
    });
  }

  // ==================== CTA TICKER ROTATIVO ====================
  setupCTATicker() {
    const tickerMessage = document.querySelector('.dt-ticker-message');
    if (!tickerMessage || !(tickerMessage instanceof HTMLElement)) return;

    const messages = [
      '🔥 Empieza a dormir mejor esta noche',
      '🌙 Respira mejor. Duerme profundo.',
      '💤 Transforma tu descanso hoy',
      '✨ Duerme bien. Vive mejor.',
      '🛒 Prueba Dream Tape hoy mismo'
    ];

    let currentIndex = 0;

    const rotateMessage = () => {
      if (!(tickerMessage instanceof HTMLElement)) return;
      
      tickerMessage.style.opacity = '0';
      tickerMessage.style.transform = 'translateY(10px)';
      
      setTimeout(() => {
        if (!(tickerMessage instanceof HTMLElement)) return;
        currentIndex = (currentIndex + 1) % messages.length;
        const message = messages[currentIndex];
        if (message) {
          tickerMessage.textContent = message;
        }
        tickerMessage.style.opacity = '1';
        tickerMessage.style.transform = 'translateY(0)';
      }, 300);
    };

    // Rotar cada 3 segundos
    setInterval(rotateMessage, 3000);
  }

  // ==================== URGENCY COUNTER ====================
  setupUrgencyCounter() {
    const urgencyText = document.querySelector('.dt-urgency-text');
    if (!urgencyText) return;

    // Número aleatorio entre 8 y 15
    const getRandomStock = () => Math.floor(Math.random() * 8) + 8;
    
    let currentStock = getRandomStock();
    const stockNumber = urgencyText.querySelector('.stock-number');
    
    if (stockNumber && stockNumber instanceof HTMLElement) {
      stockNumber.textContent = String(currentStock);
      
      // Cambiar aleatoriamente cada 30-60 segundos
      setInterval(() => {
        if (!(stockNumber instanceof HTMLElement)) return;
        const newStock = getRandomStock();
        stockNumber.style.opacity = '0';
        
        setTimeout(() => {
          if (!(stockNumber instanceof HTMLElement)) return;
          stockNumber.textContent = String(newStock);
          stockNumber.style.opacity = '1';
        }, 300);
      }, 45000);
    }
  }

  // ==================== BEFORE/AFTER SLIDER ====================
  setupBeforeAfterSlider() {
    const container = document.querySelector('.dt-before-after');
    if (!container) return;

    const handle = container.querySelector('.dt-slider-handle');
    const afterImage = container.querySelector('.dt-after-image');
    
    if (!handle || !afterImage) return;
    if (!(handle instanceof HTMLElement) || !(afterImage instanceof HTMLElement)) return;

    let isDragging = false;

    const updateSlider = (x) => {
      if (!(handle instanceof HTMLElement) || !(afterImage instanceof HTMLElement)) return;
      const rect = container.getBoundingClientRect();
      const position = Math.max(0, Math.min(x - rect.left, rect.width));
      const percentage = (position / rect.width) * 100;
      
      handle.style.left = `${percentage}%`;
      afterImage.style.clipPath = `inset(0 0 0 ${percentage}%)`;
    };

    handle.addEventListener('mousedown', (e) => {
      isDragging = true;
      e.preventDefault();
    });

    handle.addEventListener('touchstart', (e) => {
      isDragging = true;
    }, { passive: true });

    document.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      updateSlider(e.clientX);
    });

    document.addEventListener('touchmove', (e) => {
      if (!isDragging || !e.touches || !e.touches[0]) return;
      updateSlider(e.touches[0].clientX);
    }, { passive: true });

    document.addEventListener('mouseup', () => {
      isDragging = false;
    });

    document.addEventListener('touchend', () => {
      isDragging = false;
    });

    // Click directo en la imagen
    container.addEventListener('click', (e) => {
      if (!e.target || e.target === handle || (e.target instanceof Node && handle.contains(e.target))) return;
      if (e instanceof MouseEvent) {
        updateSlider(e.clientX);
      }
    });
  }

  // ==================== TICKERS (ANNOUNCEMENT & FOOTER) ====================
  setupTickers() {
    const tickers = document.querySelectorAll('.dt-ticker-wrapper');
    
    tickers.forEach(ticker => {
      // Clonar el contenido para crear loop infinito
      const content = ticker.innerHTML;
      ticker.innerHTML = content + content + content;
    });
  }
}

// ==================== NEWSLETTER FORM ====================
function setupNewsletterForm() {
  const form = document.querySelector('.dt-newsletter-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const input = form.querySelector('.dt-newsletter-input');
    const button = form.querySelector('.dt-newsletter-button');
    
    if (!input || !(input instanceof HTMLInputElement)) return;
    if (!button || !(button instanceof HTMLButtonElement)) return;
    
    const email = input.value;

    if (!email || !email.includes('@')) {
      alert('Por favor ingresa un email válido');
      return;
    }

    // Cambiar estado del botón
    const originalText = button.textContent;
    button.textContent = 'SUSCRIBIENDO...';
    button.disabled = true;

    // Simular envío (aquí se integraría con Shopify/Klaviyo/etc)
    setTimeout(() => {
      button.textContent = '✓ SUSCRITO';
      button.style.background = 'var(--dt-success)';
      input.value = '';
      
      setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
        button.style.background = '';
      }, 2000);
    }, 1500);
  });
}

// ==================== ADD TO CART ====================
function setupAddToCart() {
  const ctaButtons = document.querySelectorAll('.dt-cta-button, .dt-floating-cta button');
  
  ctaButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      // Aquí se integraría con el carrito de Shopify
      // Por ahora solo agregamos feedback visual
      
      if (!(button instanceof HTMLElement)) return;
      
      const originalText = button.textContent;
      button.textContent = '✓ AGREGADO AL CARRITO';
      button.style.background = 'var(--dt-success)';
      
      setTimeout(() => {
        if (!(button instanceof HTMLElement)) return;
        button.textContent = originalText;
        button.style.background = '';
      }, 2000);
      
      // Ejemplo de cómo agregar al carrito de Shopify:
      /*
      const variantId = button.dataset.variantId;
      fetch('/cart/add.js', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: [{
            id: variantId,
            quantity: 1
          }]
        })
      })
      .then(response => response.json())
      .then(data => {
        console.log('Added to cart:', data);
        // Actualizar badge del carrito
      })
      .catch(error => {
        console.error('Error:', error);
      });
      */
    });
  });
}

// ==================== SMOOTH SCROLL ====================
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      
      if (target) {
        const offsetTop = target.offsetTop - 103; // 38px announcement + 65px header
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
}

// ==================== PERFORMANCE OPTIMIZATIONS ====================
// Throttle function para eventos de scroll
function throttle(func, wait) {
  let timeout = undefined;
  let lastRan = undefined;
  
  return function executedFunction(...args) {
    if (!lastRan) {
      func.apply(this, args);
      lastRan = Date.now();
    } else {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        if (lastRan && Date.now() - lastRan >= wait) {
          func.apply(this, args);
          lastRan = Date.now();
        }
      }, wait - (Date.now() - lastRan));
    }
  };
}

// ==================== LAZY LOADING IMAGES ====================
function setupLazyLoading() {
  if ('loading' in HTMLImageElement.prototype) {
    // El navegador soporta lazy loading nativo
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
      if (img instanceof HTMLImageElement && img.dataset.src) {
        img.src = img.dataset.src;
      }
    });
  } else {
    // Usar IntersectionObserver para navegadores antiguos
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img instanceof HTMLImageElement && img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
          }
          imageObserver.unobserve(img);
        }
      });
    });
    
    images.forEach(img => imageObserver.observe(img));
  }
}

// ==================== INICIALIZACIÓN ====================
// Inicializar la página
const dreamTape = new DreamTapePage();

// Inicializar otras funciones cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    setupNewsletterForm();
    setupAddToCart();
    setupSmoothScroll();
    setupLazyLoading();
  });
} else {
  setupNewsletterForm();
  setupAddToCart();
  setupSmoothScroll();
  setupLazyLoading();
}

// Exportar para uso en otros scripts si es necesario
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { DreamTapePage };
}

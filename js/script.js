// ============================================
// FUNCIONALIDAD INTERACTIVA DEL SITIO
// ============================================

// Smooth scroll para los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Validación del formulario de contacto
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        
        // Obtener valores del formulario
        const nombre = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const mensaje = this.querySelector('textarea').value;
        
        // Validación básica
        if (nombre.trim() === '' || email.trim() === '' || mensaje.trim() === '') {
            alert('Por favor, completa todos los campos');
            return;
        }
        
        // Validar email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, ingresa un email válido');
            return;
        }
        
        // Simular envío
        alert(`¡Gracias ${nombre}! Tu mensaje ha sido recibido. Te contactaremos pronto en ${email}`);
        
        // Limpiar formulario
        this.reset();
    });
}

// Efecto de aparición al hacer scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar todas las tarjetas
document.querySelectorAll('.card, .ejemplo-card').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
});

// Cambiar color del header al hacer scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.boxShadow = 'var(--shadow)';
    }
});

// Copiar código al hacer clic en bloques de código
document.querySelectorAll('.ejemplo-card pre').forEach(codeBlock => {
    codeBlock.style.cursor = 'pointer';
    codeBlock.style.position = 'relative';
    
    codeBlock.addEventListener('click', function() {
        const code = this.textContent;
        navigator.clipboard.writeText(code).then(() => {
            // Mostrar feedback visual
            const originalBg = this.style.background;
            this.style.background = 'rgba(34, 197, 94, 0.2)';
            
            setTimeout(() => {
                this.style.background = originalBg;
            }, 1000);
        });
    });
    
    // Agregar tooltip
    const tooltip = document.createElement('div');
    tooltip.textContent = 'Haz clic para copiar';
    tooltip.style.cssText = `
        position: absolute;
        top: 10px;
        right: 10px;
        background: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 5px 10px;
        border-radius: 5px;
        font-size: 0.8rem;
        opacity: 0;
        transition: opacity 0.3s ease;
        pointer-events: none;
    `;
    codeBlock.appendChild(tooltip);
    
    codeBlock.addEventListener('mouseenter', () => {
        tooltip.style.opacity = '1';
    });
    
    codeBlock.addEventListener('mouseleave', () => {
        tooltip.style.opacity = '0';
    });
});

// Animación de contador para estadísticas (si se agrega)
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Detectar navegador y agregar clase si es necesario
if (navigator.userAgent.indexOf('Safari') > -1 && navigator.userAgent.indexOf('Chrome') === -1) {
    document.body.classList.add('safari');
}

// Log de carga
console.log('✅ Sitio web de Estructuras de Datos cargado correctamente');
console.log('📚 Autor: Samuel Torres Atehortua');
console.log('🎓 Tema: Estructuras de Datos en Python');


// Variables globales
let currentPage = 0;
const messages = document.querySelectorAll('.message');
const totalPages = messages.length;
const title = document.getElementById('title');
const messageContainer = document.getElementById('message-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const pageIndicator = document.getElementById('page-indicator');
const catsContainer = document.getElementById('cats-container');
const bubbles = document.querySelector('.bubbles');
const body = document.body;
const pulse = document.querySelector('.pulse');

// Inicialización
window.onload = function() {
    init();
};

// Función para crear burbujas de fondo
function createBubbles() {
    bubbles.innerHTML = '';
    const count = 15;
    
    for (let i = 0; i < count; i++) {
        const size = Math.random() * 100 + 30;
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${Math.random() * 100}%`;
        bubble.style.top = `${Math.random() * 100}%`;
        bubble.style.animationDelay = `${Math.random() * 8}s`;
        
        bubbles.appendChild(bubble);
    }
}

// Animación del título letra por letra
function animateTitle(text) {
    title.innerHTML = text; // Simplificado para evitar problemas
}

// Crear gatitos animados
function createCats() {
    catsContainer.style.display = 'block';
    
    const count = 40; // Más gatitos
    const catEmojis = ['🐱', '😺', '😸', '😹', '😻', '😼', '😽', '🙀', '😿', '😾', '🐈', '🐈‍⬛', '🐾'];
    
    for (let i = 0; i < count; i++) {
        setTimeout(() => {
            const cat = document.createElement('div');
            cat.classList.add('cat');
            
            // Emoji de gatito aleatorio
            const randomEmoji = catEmojis[Math.floor(Math.random() * catEmojis.length)];
            cat.textContent = randomEmoji;
            
            // Tamaño aleatorio
            const size = Math.random() * 20 + 20;
            cat.style.fontSize = `${size}px`;
            
            // Posición aleatoria
            cat.style.left = `${Math.random() * 100}%`;
            
            // Velocidad y rotación aleatorias
            const duration = Math.random() * 3 + 5; // 5-8 segundos
            
            // Aplicar animación directamente en el estilo
            cat.style.animation = `catFall ${duration}s linear forwards`;
            
            catsContainer.appendChild(cat);
            
            // Remover gatitos después de la animación
            setTimeout(() => {
                if (cat && cat.parentElement) {
                    cat.parentElement.removeChild(cat);
                }
            }, duration * 1000 + 200);
        }, i * 100);
    }
}

// Función para activar la animación de pulso
function activatePulse() {
    pulse.style.animation = 'none';
    void pulse.offsetWidth; // Forzar reflow
    pulse.style.animation = 'pulse 2s ease-out forwards';
}

// Función para mostrar sorpresa especial
function showSpecialSurprise() {
    activatePulse();
    createCats();
    
    // Cambiar el título temporalmente
    const originalTitle = title.textContent;
    title.innerHTML = '❤️ Te Quiero Mucho ❤️';
    
    setTimeout(() => {
        title.innerHTML = originalTitle;
    }, 5000);
}

// Crear indicadores de página
function createPageIndicators() {
    pageIndicator.innerHTML = '';
    
    for (let i = 0; i < totalPages; i++) {
        const dot = document.createElement('div');
        dot.classList.add('page-dot');
        if (i === currentPage) {
            dot.classList.add('active');
        }
        
        // Asignar evento directamente
        dot.onclick = function() {
            showPage(i);
        };
        
        pageIndicator.appendChild(dot);
    }
}

// Actualizar los indicadores de página
function updatePageIndicators() {
    const dots = document.querySelectorAll('.page-dot');
    dots.forEach((dot, index) => {
        if (index === currentPage) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Función para ir a la página siguiente
function nextPage() {
    if (currentPage < totalPages - 1) {
        showPage(currentPage + 1);
    }
}

// Función para ir a la página anterior
function prevPage() {
    if (currentPage > 0) {
        showPage(currentPage - 1);
    }
}

// Actualizar el estado de los botones de navegación
function updateNavButtons() {
    prevBtn.disabled = currentPage === 0;
    nextBtn.disabled = currentPage === totalPages - 1;
}

// Función para cambiar el tema
function changeTheme(element) {
    const theme = element.getAttribute('data-theme');
    
    // Actualizar el tema
    if (theme === 'default') {
        body.removeAttribute('data-theme');
    } else {
        body.setAttribute('data-theme', theme);
    }
    
    // Guardar en localStorage
    localStorage.setItem('special-theme', theme);
    
    // Actualizar clase activa
    document.querySelectorAll('.theme-option').forEach(opt => {
        opt.classList.remove('active');
    });
    element.classList.add('active');
    
    // Recrear burbujas
    createBubbles();
}

// Función simplificada para mostrar una página específica
function showPage(pageIndex) {
    if (pageIndex === currentPage) return;
    
    // Ocultar todas las páginas primero
    messages.forEach(message => {
        message.style.display = 'none';
        message.classList.remove('active');
    });
    
    // Mostrar la página seleccionada
    messages[pageIndex].style.display = 'block';
    messages[pageIndex].classList.add('active');
    
    // Actualizar página actual
    currentPage = pageIndex;
    
    // Actualizar título
    const newTitle = messages[pageIndex].getAttribute('data-title') || 'Para Ti';
    title.textContent = newTitle;
    
    // Actualizar botones de navegación
    updateNavButtons();
    
    // Actualizar indicadores
    updatePageIndicators();
    
    // Efecto de pulso
    activatePulse();
}

// Inicializar todo
function init() {
    createBubbles();
    createPageIndicators();
    
    // Mostrar la primera página
    // Asegurarnos que todos los mensajes están ocultos excepto el primero
    messages.forEach((message, index) => {
        if (index === 0) {
            message.style.display = 'block';
            message.classList.add('active');
        } else {
            message.style.display = 'none';
            message.classList.remove('active');
        }
    });
    
    // Actualizar título con el primer mensaje
    if (messages[0]) {
        title.textContent = messages[0].getAttribute('data-title') || 'Para Ti';
    }
    
    // Actualizar botones de navegación
    currentPage = 0;
    updateNavButtons();
    
    // Cargar tema guardado si existe
    const storedTheme = localStorage.getItem('special-theme');
    if (storedTheme) {
        document.querySelectorAll('.theme-option').forEach(option => {
            if (option.getAttribute('data-theme') === storedTheme) {
                changeTheme(option);
            }
        });
    }
    
    // Añadir controles de teclado
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowRight') {
            nextPage();
        } else if (e.key === 'ArrowLeft') {
            prevPage();
        } else if (e.key === 'c') {
            createCats();
        } else if (e.key === 's') {
            showSpecialSurprise();
        }
    });
}
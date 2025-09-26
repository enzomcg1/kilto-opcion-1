// Product data for carousel
const productData = {
    digital: [
        {
            id: 0,
            title: "Fregadero Digital Premium",
            description: "Fregadero inteligente con tecnología digital avanzada, control táctil intuitivo y múltiples funciones que revolucionan tu experiencia en la cocina. Incluye sistema de temperatura controlada, temporizador inteligente y conexión WiFi para control remoto.",
            price: "€1,299.00",
            oldPrice: "€1,599.00",
            image: "imgs/fregaderos/fregaderodigital/fregadero0.jpeg",
            features: ["Tecnología Digital", "Control Táctil", "WiFi", "Temperatura Controlada", "Temporizador Inteligente"],
            specs: {
                "Material": "Acero Inoxidable 316L",
                "Dimensiones": "80 x 50 x 20 cm",
                "Capacidad": "45 litros",
                "Peso": "12 kg",
                "Garantía": "5 años"
            },
            benefits: [
                "Ahorro de agua hasta 40%",
                "Control de temperatura preciso",
                "Fácil limpieza automática",
                "Diseño moderno y elegante",
                "Instalación profesional incluida"
            ]
        },
        {
            id: 1,
            title: "Fregadero Digital Compacto",
            description: "Perfecto para cocinas pequeñas sin sacrificar funcionalidad. Todas las características digitales en un diseño compacto y elegante que se adapta perfectamente a espacios reducidos.",
            price: "€899.00",
            image: "imgs/fregaderos/fregaderodigital/fregadero1.jpeg",
            features: ["Compacto", "Digital", "Espacio Reducido", "Funcionalidad Completa"],
            specs: {
                "Material": "Acero Inoxidable 304",
                "Dimensiones": "60 x 40 x 18 cm",
                "Capacidad": "30 litros",
                "Peso": "8 kg",
                "Garantía": "3 años"
            },
            benefits: [
                "Ideal para cocinas pequeñas",
                "Tecnología digital completa",
                "Fácil instalación",
                "Mantenimiento mínimo",
                "Excelente relación calidad-precio"
            ]
        },
        {
            id: 4,
            title: "Fregadero Digital Profesional",
            description: "Diseñado específicamente para cocinas profesionales y comerciales. Resistencia extrema, tecnología de última generación y controles avanzados para uso intensivo diario.",
            price: "€1,599.00",
            image: "imgs/fregaderos/fregaderodigital/fregadero4.jpeg",
            features: ["Profesional", "Tecnología Avanzada", "Resistencia Extrema", "Uso Intensivo"],
            specs: {
                "Material": "Acero Inoxidable 316L Premium",
                "Dimensiones": "100 x 60 x 25 cm",
                "Capacidad": "65 litros",
                "Peso": "18 kg",
                "Garantía": "7 años"
            },
            benefits: [
                "Resistente a uso intensivo",
                "Tecnología de última generación",
                "Control profesional avanzado",
                "Máxima durabilidad",
                "Soporte técnico especializado"
            ]
        },
        {
            id: 7,
            title: "Fregadero Digital Elegante",
            description: "La combinación perfecta entre elegancia y funcionalidad digital. Diseño sofisticado que complementa cualquier estilo de cocina moderna con tecnología de vanguardia.",
            price: "€1,199.00",
            image: "imgs/fregaderos/fregaderodigital/fregadero7.jpeg",
            features: ["Elegante", "Moderno", "Diseño Sofisticado", "Tecnología Vanguardia"],
            specs: {
                "Material": "Acero Inoxidable 316L",
                "Dimensiones": "85 x 55 x 22 cm",
                "Capacidad": "50 litros",
                "Peso": "14 kg",
                "Garantía": "5 años"
            },
            benefits: [
                "Diseño elegante y moderno",
                "Tecnología de vanguardia",
                "Fácil integración en cualquier cocina",
                "Acabados de lujo",
                "Funcionalidad completa"
            ]
        },
        {
            id: 8,
            title: "Fregadero Digital Innovador",
            description: "La última innovación en fregaderos digitales con características revolucionarias. Sistema de reconocimiento de voz, control por gestos y inteligencia artificial integrada.",
            price: "€1,799.00",
            image: "imgs/fregaderos/fregaderodigital/fregadero8.jpeg",
            features: ["Innovador", "Última Generación", "Reconocimiento de Voz", "Control por Gestos", "IA Integrada"],
            specs: {
                "Material": "Acero Inoxidable 316L + Cristal",
                "Dimensiones": "90 x 60 x 25 cm",
                "Capacidad": "55 litros",
                "Peso": "16 kg",
                "Garantía": "10 años"
            },
            benefits: [
                "Control por voz y gestos",
                "Inteligencia artificial integrada",
                "Tecnología más avanzada del mercado",
                "Máxima innovación",
                "Garantía extendida de 10 años"
            ]
        }
    ],
    normal: [
        {
            id: 10,
            title: "Fregadero Clásico Acero",
            description: "Fregadero tradicional de acero inoxidable de alta calidad. Resistente, duradero y fácil de mantener. Perfecto para uso diario intensivo con garantía de larga duración.",
            price: "€299.00",
            image: "imgs/fregaderos/fregaderonormal/fregadero10.jpg",
            features: ["Acero Inoxidable", "Resistente", "Fácil Mantenimiento", "Garantía Larga Duración"],
            specs: {
                "Material": "Acero Inoxidable 304",
                "Dimensiones": "75 x 45 x 20 cm",
                "Capacidad": "40 litros",
                "Peso": "10 kg",
                "Garantía": "2 años"
            },
            benefits: [
                "Excelente relación calidad-precio",
                "Fácil mantenimiento",
                "Resistente y duradero",
                "Diseño clásico atemporal",
                "Instalación sencilla"
            ]
        },
        {
            id: 2,
            title: "Fregadero Moderno Rectangular",
            description: "Diseño rectangular moderno con acabados de alta calidad y gran capacidad. Ideal para familias numerosas o cocinas con mucho uso diario.",
            price: "€399.00",
            image: "imgs/fregaderos/fregaderonormal/fregadero2.jpeg",
            features: ["Rectangular", "Gran Capacidad", "Acabados Premium", "Familiar"],
            specs: {
                "Material": "Acero Inoxidable 304",
                "Dimensiones": "90 x 50 x 22 cm",
                "Capacidad": "55 litros",
                "Peso": "12 kg",
                "Garantía": "3 años"
            },
            benefits: [
                "Gran capacidad para familias",
                "Diseño moderno rectangular",
                "Acabados de alta calidad",
                "Ideal para uso intensivo",
                "Fácil limpieza"
            ]
        },
        {
            id: 3,
            title: "Fregadero Doble Cubeta",
            description: "Dos cubetas independientes para mayor versatilidad en la cocina. Permite lavar y enjuagar simultáneamente, optimizando el tiempo y la eficiencia.",
            price: "€499.00",
            image: "imgs/fregaderos/fregaderonormal/fregadero3.jpeg",
            features: ["Doble Cubeta", "Versátil", "Eficiencia", "Lavado Simultáneo"],
            specs: {
                "Material": "Acero Inoxidable 304",
                "Dimensiones": "80 x 50 x 20 cm",
                "Capacidad": "35 + 25 litros",
                "Peso": "14 kg",
                "Garantía": "3 años"
            },
            benefits: [
                "Doble funcionalidad",
                "Mayor eficiencia en la cocina",
                "Lavado y enjuague simultáneo",
                "Versatilidad máxima",
                "Diseño práctico"
            ]
        },
        {
            id: 5,
            title: "Fregadero con Accesorios",
            description: "Incluye tabla de cortar integrada, escurridor removible y otros accesorios prácticos que maximizan la funcionalidad de tu espacio de cocina.",
            price: "€599.00",
            image: "imgs/fregaderos/fregaderonormal/fregadero5.jpeg",
            features: ["Con Accesorios", "Completo", "Tabla Integrada", "Escurridor Removible"],
            specs: {
                "Material": "Acero Inoxidable 304",
                "Dimensiones": "85 x 55 x 22 cm",
                "Capacidad": "50 litros",
                "Peso": "15 kg",
                "Garantía": "3 años"
            },
            benefits: [
                "Accesorios incluidos",
                "Máxima funcionalidad",
                "Tabla de cortar integrada",
                "Escurridor removible",
                "Solución completa"
            ]
        },
        {
            id: 6,
            title: "Fregadero Premium",
            description: "Serie premium con acabados de lujo y máxima durabilidad. Diseño exclusivo con materiales de la más alta calidad para cocinas de lujo.",
            price: "€799.00",
            image: "imgs/fregaderos/fregaderonormal/fregadero6.jpeg",
            features: ["Premium", "Lujo", "Acabados Exclusivos", "Máxima Calidad"],
            specs: {
                "Material": "Acero Inoxidable 316L",
                "Dimensiones": "95 x 60 x 25 cm",
                "Capacidad": "60 litros",
                "Peso": "18 kg",
                "Garantía": "5 años"
            },
            benefits: [
                "Acabados de lujo",
                "Máxima calidad de materiales",
                "Diseño exclusivo",
                "Durabilidad extrema",
                "Garantía extendida"
            ]
        },
        {
            id: 9,
            title: "Fregadero Económico",
            description: "Excelente relación calidad-precio para presupuestos ajustados. Mantiene la calidad Kilto con un precio accesible sin comprometer la durabilidad.",
            price: "€199.00",
            image: "imgs/fregaderos/fregaderonormal/fregadero9.jpeg",
            features: ["Económico", "Calidad-Precio", "Accesible", "Durabilidad Garantizada"],
            specs: {
                "Material": "Acero Inoxidable 304",
                "Dimensiones": "70 x 40 x 18 cm",
                "Capacidad": "30 litros",
                "Peso": "8 kg",
                "Garantía": "2 años"
            },
            benefits: [
                "Excelente relación calidad-precio",
                "Calidad Kilto garantizada",
                "Precio muy accesible",
                "Durabilidad comprobada",
                "Perfecto para presupuestos ajustados"
            ]
        }
    ]
};

// Global variables
let currentCategory = 'all';
let currentProducts = [];
let currentIndex = 0;
let comparisonProducts = [];

// DOM Elements
const categoryButtons = document.querySelectorAll('.category-btn');
const carousel = document.getElementById('productCarousel');
const carouselDots = document.getElementById('carouselDots');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const productDetailsPanel = document.getElementById('productDetailsPanel');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadProducts('all');
    setupEventListeners();
});

// Setup event listeners
function setupEventListeners() {
    // Category buttons
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            currentCategory = button.getAttribute('data-category');
            loadProducts(currentCategory);
        });
    });

    // Carousel navigation
    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < currentProducts.length - 1) {
            currentIndex++;
            updateCarousel();
        }
    });

    // Action buttons
    document.getElementById('whatsappBtn').addEventListener('click', () => {
        const product = currentProducts[currentIndex];
        const message = `Hola, me interesa obtener más información sobre el producto: ${product.title} (${product.price}). ¿Podrían enviarme más detalles?`;
        const whatsappUrl = `https://wa.me/34634872287?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    });

    document.getElementById('compareBtn').addEventListener('click', () => {
        const product = currentProducts[currentIndex];
        addToComparison(product);
    });

    // Zoom functionality
    document.getElementById('zoomBtn').addEventListener('click', () => {
        const product = currentProducts[currentIndex];
        openZoomModal(product.image);
    });

    // Modal close buttons
    document.querySelector('.zoom-close').addEventListener('click', closeZoomModal);
    document.querySelector('.comparison-close').addEventListener('click', closeComparisonModal);

    // Close modals when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('zoom-modal')) {
            closeZoomModal();
        }
        if (e.target.classList.contains('comparison-modal')) {
            closeComparisonModal();
        }
    });
}

// Load products based on category
function loadProducts(category) {
    if (category === 'all') {
        currentProducts = [...productData.digital, ...productData.normal];
    } else {
        currentProducts = productData[category] || [];
    }
    
    currentIndex = 0;
    renderCarousel();
    updateCarousel();
    updateProductDetails();
}

// Render carousel
function renderCarousel() {
    carousel.innerHTML = '';
    carouselDots.innerHTML = '';

    currentProducts.forEach((product, index) => {
        // Create carousel item
        const carouselItem = document.createElement('div');
        carouselItem.className = 'carousel-item';
        carouselItem.innerHTML = `
            <div class="carousel-item-image">
                <img src="${product.image}" alt="${product.title}">
                <div class="carousel-item-overlay">
                    <span>Ver Detalles</span>
                </div>
            </div>
            <div class="carousel-item-info">
                <h3 class="carousel-item-title">${product.title}</h3>
                <div class="carousel-item-price">${product.price}</div>
                <div class="carousel-item-category">${currentCategory === 'all' ? (productData.digital.includes(product) ? 'Digital' : 'Tradicional') : (currentCategory === 'digital' ? 'Digital' : 'Tradicional')}</div>
            </div>
        `;

        carouselItem.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
            updateProductDetails();
        });

        carousel.appendChild(carouselItem);

        // Create dot
        const dot = document.createElement('div');
        dot.className = 'dot';
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
            updateProductDetails();
        });
        carouselDots.appendChild(dot);
    });
}

// Update carousel position
function updateCarousel() {
    const items = document.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.dot');
    
    // Remove active class from all items and dots
    items.forEach(item => item.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Add active class to current item and dot
    if (items[currentIndex]) {
        items[currentIndex].classList.add('active');
    }
    if (dots[currentIndex]) {
        dots[currentIndex].classList.add('active');
    }
    
    // Update carousel position
    const translateX = -currentIndex * 320; // 300px width + 20px gap
    carousel.style.transform = `translateX(${translateX}px)`;
    
    // Update navigation buttons
    prevBtn.style.opacity = currentIndex === 0 ? '0.5' : '1';
    nextBtn.style.opacity = currentIndex === currentProducts.length - 1 ? '0.5' : '1';
    
    // Update product details
    updateProductDetails();
}

// Update product details panel
function updateProductDetails() {
    if (currentProducts.length === 0) return;
    
    const product = currentProducts[currentIndex];
    
    // Update image
    document.getElementById('detailImage').src = product.image;
    document.getElementById('detailImage').alt = product.title;
    
    // Update title and description
    document.getElementById('detailTitle').textContent = product.title;
    document.getElementById('detailDescription').textContent = product.description;
    
    // Update price
    document.getElementById('currentPrice').textContent = product.price;
    const oldPriceElement = document.getElementById('oldPrice');
    if (product.oldPrice) {
        oldPriceElement.textContent = product.oldPrice;
        oldPriceElement.style.display = 'inline';
    } else {
        oldPriceElement.style.display = 'none';
    }
    
    // Update specifications
    const specsContainer = document.getElementById('productSpecs');
    specsContainer.innerHTML = '<h3>Especificaciones Técnicas</h3>';
    Object.entries(product.specs).forEach(([key, value]) => {
        const specItem = document.createElement('div');
        specItem.className = 'spec-item';
        specItem.innerHTML = `
            <span class="spec-label">${key}:</span>
            <span class="spec-value">${value}</span>
        `;
        specsContainer.appendChild(specItem);
    });
    
    // Update features
    const featuresContainer = document.getElementById('productFeaturesDetailed');
    featuresContainer.innerHTML = '<h3>Características Principales</h3>';
    const featuresGrid = document.createElement('div');
    featuresGrid.className = 'features-grid';
    product.features.forEach(feature => {
        const featureItem = document.createElement('div');
        featureItem.className = 'feature-item';
        featureItem.textContent = feature;
        featuresGrid.appendChild(featureItem);
    });
    featuresContainer.appendChild(featuresGrid);
    
    // Update benefits
    const benefitsContainer = document.getElementById('productBenefits');
    benefitsContainer.innerHTML = '';
    product.benefits.forEach(benefit => {
        const benefitItem = document.createElement('li');
        benefitItem.textContent = benefit;
        benefitsContainer.appendChild(benefitItem);
    });
}

// Zoom modal functions
function openZoomModal(imageSrc) {
    document.getElementById('zoomedImage').src = imageSrc;
    document.getElementById('imageZoomModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeZoomModal() {
    document.getElementById('imageZoomModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Comparison functions
function addToComparison(product) {
    if (comparisonProducts.length >= 3) {
        alert('Máximo 3 productos para comparar. Elimina uno antes de añadir otro.');
        return;
    }
    
    if (!comparisonProducts.find(p => p.id === product.id)) {
        comparisonProducts.push(product);
        updateComparisonButton();
        showComparisonNotification();
        
        // Si ya hay productos para comparar, mostrar el modal de comparación
        if (comparisonProducts.length >= 2) {
            showComparisonModal();
        }
    } else {
        alert('Este producto ya está en la comparación');
    }
}

function updateComparisonButton() {
    const compareBtn = document.getElementById('compareBtn');
    if (comparisonProducts.length > 0) {
        compareBtn.innerHTML = `<i class="fas fa-balance-scale"></i> Comparar (${comparisonProducts.length})`;
        compareBtn.style.background = '#ffcc00';
        compareBtn.style.color = '#8B0000';
    } else {
        compareBtn.innerHTML = '<i class="fas fa-balance-scale"></i> Comparar';
        compareBtn.style.background = '#f8f9fa';
        compareBtn.style.color = '#8B0000';
    }
}

function showComparisonNotification() {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #8B0000;
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        z-index: 4000;
        animation: slideInRight 0.3s ease;
    `;
    notification.textContent = `Producto añadido a la comparación (${comparisonProducts.length}/3)`;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

function showComparisonModal() {
    const modal = document.getElementById('comparisonModal');
    const body = document.getElementById('comparisonBody');
    
    body.innerHTML = `
        <div class="comparison-grid">
            ${comparisonProducts.map(product => `
                <div class="comparison-item">
                    <div class="comparison-header">
                        <img src="${product.image}" alt="${product.title}">
                        <h3>${product.title}</h3>
                        <button class="remove-from-comparison" onclick="removeFromComparison(${product.id})">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                    <div class="comparison-content">
                        <div class="comparison-price">${product.price}</div>
                        <div class="comparison-category">${product.category === 'digital' ? 'Digital' : 'Tradicional'}</div>
                        <div class="comparison-features">
                            <h4>Características:</h4>
                            <ul>
                                ${product.features.map(feature => `<li>${feature}</li>`).join('')}
                            </ul>
                        </div>
                        <div class="comparison-specs">
                            <h4>Especificaciones:</h4>
                            <div class="specs-list">
                                ${Object.entries(product.specs).map(([key, value]) => `
                                    <div class="spec-item">
                                        <span class="spec-key">${key}:</span>
                                        <span class="spec-value">${value}</span>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
        <div class="comparison-actions">
            <button class="clear-comparison-btn" onclick="clearComparison()">
                <i class="fas fa-trash"></i>
                Limpiar Comparación
            </button>
            <button class="whatsapp-comparison-btn" onclick="sendComparisonWhatsApp()">
                <i class="fab fa-whatsapp"></i>
                Enviar por WhatsApp
            </button>
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function removeFromComparison(productId) {
    comparisonProducts = comparisonProducts.filter(p => p.id !== productId);
    updateComparisonButton();
    
    if (comparisonProducts.length === 0) {
        closeComparisonModal();
    } else {
        showComparisonModal(); // Refresh the modal
    }
}

function clearComparison() {
    comparisonProducts = [];
    updateComparisonButton();
    closeComparisonModal();
}

function sendComparisonWhatsApp() {
    let message = `Hola, me interesa comparar estos productos de Kilto:\n\n`;
    
    comparisonProducts.forEach((product, index) => {
        message += `${index + 1}. ${product.title} - ${product.price}\n`;
        message += `   Características: ${product.features.slice(0, 3).join(', ')}\n\n`;
    });
    
    message += `¿Podrían ayudarme a decidir cuál es el mejor para mi cocina?`;
    
    const whatsappUrl = `https://wa.me/34634872287?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

function closeComparisonModal() {
    document.getElementById('comparisonModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft' && currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    } else if (e.key === 'ArrowRight' && currentIndex < currentProducts.length - 1) {
        currentIndex++;
        updateCarousel();
    } else if (e.key === 'Escape') {
        closeZoomModal();
        closeComparisonModal();
    }
});

// Auto-play carousel (optional)
let autoPlayInterval;
function startAutoPlay() {
    autoPlayInterval = setInterval(() => {
        if (currentIndex < currentProducts.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateCarousel();
    }, 5000);
}

function stopAutoPlay() {
    clearInterval(autoPlayInterval);
}

// Start auto-play when page loads
// startAutoPlay();

// Stop auto-play on user interaction
document.addEventListener('click', stopAutoPlay);
document.addEventListener('keydown', stopAutoPlay);

// ========================================
// MOBILE TOUCH/SWIPE FUNCTIONALITY
// ========================================

let touchStartX = 0;
let touchEndX = 0;
let touchStartY = 0;
let touchEndY = 0;
const minSwipeDistance = 50;

// Touch events for carousel
const carouselWrapper = document.querySelector('.carousel-wrapper');

if (carouselWrapper) {
    carouselWrapper.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        touchStartY = e.changedTouches[0].screenY;
    });

    carouselWrapper.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        touchEndY = e.changedTouches[0].screenY;
        handleSwipe();
    });
}

function handleSwipe() {
    const deltaX = touchEndX - touchStartX;
    const deltaY = touchEndY - touchStartY;
    
    // Check if it's a horizontal swipe (not vertical scroll)
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > minSwipeDistance) {
        if (deltaX > 0) {
            // Swipe right - go to previous
            if (currentIndex > 0) {
                currentIndex--;
                updateCarousel();
            }
        } else {
            // Swipe left - go to next
            if (currentIndex < currentProducts.length - 1) {
                currentIndex++;
                updateCarousel();
            }
        }
    }
}

// ========================================
// MOBILE-SPECIFIC ENHANCEMENTS
// ========================================

// Detect mobile device
function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
           window.innerWidth <= 768;
}

// Optimize carousel for mobile
function optimizeForMobile() {
    if (isMobile()) {
        // Add mobile-specific classes
        document.body.classList.add('mobile-device');
        
        // Adjust carousel behavior for mobile
        const carouselItems = document.querySelectorAll('.carousel-item');
        carouselItems.forEach(item => {
            item.addEventListener('touchstart', (e) => {
                e.preventDefault();
            }, { passive: false });
        });
        
        // Improve button accessibility for touch
        const buttons = document.querySelectorAll('.carousel-btn, .primary-btn, .secondary-btn, .tertiary-btn, .category-btn');
        buttons.forEach(button => {
            button.style.minHeight = '44px';
            button.style.minWidth = '44px';
        });
    }
}

// Initialize mobile optimizations
document.addEventListener('DOMContentLoaded', optimizeForMobile);

// ========================================
// RESPONSIVE CAROUSEL ADJUSTMENTS
// ========================================

function adjustCarouselForScreenSize() {
    const screenWidth = window.innerWidth;
    const carouselItems = document.querySelectorAll('.carousel-item');
    
    if (screenWidth <= 480) {
        // Mobile portrait - show fewer items
        carouselItems.forEach(item => {
            item.style.minWidth = '180px';
        });
    } else if (screenWidth <= 768) {
        // Mobile landscape/tablet portrait
        carouselItems.forEach(item => {
            item.style.minWidth = '240px';
        });
    } else if (screenWidth <= 1024) {
        // Tablet landscape
        carouselItems.forEach(item => {
            item.style.minWidth = '280px';
        });
    } else {
        // Desktop
        carouselItems.forEach(item => {
            item.style.minWidth = '320px';
        });
    }
}

// Adjust carousel on resize
window.addEventListener('resize', () => {
    adjustCarouselForScreenSize();
    optimizeForMobile();
});

// Initial adjustment
adjustCarouselForScreenSize();

// ========================================
// MOBILE MODAL IMPROVEMENTS
// ========================================

// Improve modal behavior on mobile
function improveMobileModals() {
    const comparisonModal = document.getElementById('comparisonModal');
    
    if (comparisonModal && isMobile()) {
        // Prevent body scroll when modal is open
        const originalBodyOverflow = document.body.style.overflow;
        
        comparisonModal.addEventListener('show', () => {
            document.body.style.overflow = 'hidden';
        });
        
        comparisonModal.addEventListener('hide', () => {
            document.body.style.overflow = originalBodyOverflow;
        });
        
        // Close modal when tapping outside on mobile
        comparisonModal.addEventListener('click', (e) => {
            if (e.target === comparisonModal) {
                closeComparisonModal();
            }
        });
    }
}

// Initialize mobile modal improvements
document.addEventListener('DOMContentLoaded', improveMobileModals);

// ========================================
// PERFORMANCE OPTIMIZATIONS FOR MOBILE
// ========================================

// Lazy load images for better mobile performance
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', lazyLoadImages);
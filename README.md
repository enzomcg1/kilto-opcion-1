# Kilto - Carrusel Interactivo de Fregaderos

## 📱 Características Principales

### 🎠 Carrusel Interactivo
- **Navegación fluida** con botones y gestos táctiles
- **Swipe horizontal** para dispositivos móviles
- **Transiciones suaves** entre productos
- **Diseño responsivo** para todos los dispositivos

### 📱 Optimización Móvil Completa
- **Touch/Swipe**: Desliza horizontalmente para navegar
- **Responsive Design**: Adaptado para móviles, tablets y desktop
- **Touch Targets**: Botones optimizados para dedos (44px mínimo)
- **Performance**: Carga optimizada para conexiones móviles
- **Accesibilidad**: Soporte completo para lectores de pantalla

### 🛍️ Funcionalidades de Producto
- **WhatsApp Integration**: Consultas directas por producto específico
- **Comparación**: Compara hasta 3 productos simultáneamente
- **Filtros por Categoría**: Digital vs Normal
- **Información Detallada**: Especificaciones técnicas completas

## 📱 Breakpoints Responsivos

| Dispositivo | Ancho | Características |
|-------------|-------|-----------------|
| **Desktop** | >1024px | Carrusel completo, hover effects |
| **Tablet Landscape** | 768-1024px | Carrusel adaptado, controles medianos |
| **Tablet Portrait** | 600-768px | Carrusel vertical, botones apilados |
| **Mobile Landscape** | 480-600px | Carrusel compacto, swipe habilitado |
| **Mobile Portrait** | 360-480px | Carrusel mínimo, controles táctiles |
| **Extra Small** | <360px | Diseño ultra-compacto |

## 🎯 Características Móviles Específicas

### Gestos Táctiles
- **Swipe Left**: Siguiente producto
- **Swipe Right**: Producto anterior
- **Tap**: Seleccionar producto
- **Pinch**: Zoom en imágenes (nativo del navegador)

### Optimizaciones de Performance
- **Lazy Loading**: Carga diferida de imágenes
- **Touch Optimization**: Gestos optimizados para pantallas táctiles
- **Memory Management**: Gestión eficiente de memoria móvil
- **Network Optimization**: Carga adaptativa según conexión

### Accesibilidad Móvil
- **Voice Over**: Soporte completo para lectores de pantalla
- **High Contrast**: Modo de alto contraste automático
- **Large Text**: Escalado automático de texto
- **Focus Management**: Navegación por teclado optimizada

## 🚀 Instalación y Despliegue

### Netlify (Recomendado)
1. Sube la carpeta completa a Netlify
2. El sitio se desplegará automáticamente
3. Funciona perfectamente en todos los dispositivos

### Vercel
1. Sube la carpeta completa a Vercel
2. Configuración automática con `vercel.json`
3. Optimizado para rendimiento móvil

### Local Development
```bash
# Servir localmente
python -m http.server 8000
# o
npx serve .
```

## 📱 Testing Móvil

### Herramientas Recomendadas
- **Chrome DevTools**: Simulación de dispositivos
- **Firefox Responsive**: Testing responsivo
- **Real Device Testing**: iPhone, Android, iPad

### Puntos de Prueba Críticos
- ✅ Swipe horizontal funciona
- ✅ Botones son fáciles de tocar
- ✅ Texto es legible sin zoom
- ✅ Imágenes cargan correctamente
- ✅ WhatsApp abre correctamente
- ✅ Comparación funciona en móvil

## 🎨 Personalización

### Colores Principales
- **Primario**: #8B0000 (Rojo oscuro)
- **Secundario**: #25D366 (Verde WhatsApp)
- **Acento**: #FFD700 (Dorado)
- **Fondo**: Gradiente azul-gris

### Tipografía
- **Principal**: Segoe UI, Tahoma, Geneva, Verdana
- **Tamaños**: Escalado automático para móviles
- **Pesos**: Regular, Medium, Bold

## 🔧 Configuración Avanzada

### WhatsApp Integration
```javascript
// Número configurado
const whatsappNumber = '+34634872287';

// Mensaje personalizado por producto
const message = `Hola, me interesa obtener más información sobre el producto: ${productTitle} (${productPrice}). ¿Podrían enviarme más detalles?`;
```

### Comparación de Productos
- **Máximo**: 3 productos simultáneamente
- **Funciones**: Agregar, remover, limpiar, enviar por WhatsApp
- **Modal**: Responsive y táctil

## 📊 Performance

### Métricas Objetivo
- **First Contentful Paint**: <1.5s
- **Largest Contentful Paint**: <2.5s
- **Cumulative Layout Shift**: <0.1
- **Time to Interactive**: <3.5s

### Optimizaciones Implementadas
- **Image Optimization**: Compresión automática
- **CSS Minification**: Estilos optimizados
- **JavaScript Optimization**: Código minificado
- **Caching**: Headers de caché optimizados

## 🐛 Troubleshooting Móvil

### Problemas Comunes
1. **Swipe no funciona**: Verificar touch events
2. **Botones muy pequeños**: Verificar min-height 44px
3. **Texto muy pequeño**: Verificar viewport meta tag
4. **Imágenes no cargan**: Verificar rutas relativas

### Soluciones
- Usar `test.html` para diagnóstico
- Verificar consola del navegador
- Probar en diferentes dispositivos
- Verificar conexión a internet

## 📞 Soporte

Para soporte técnico o consultas sobre productos:
- **WhatsApp**: +34 634 87 22 87
- **Email**: info@kilto.com
- **Web**: www.kilto.com

---

**Desarrollado con ❤️ para Kilto - Fregaderos de Cocina Premium**
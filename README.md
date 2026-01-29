# ✨ Portfolio Elegante - Diseñadora Web & Gráfica

Portfolio profesional con estética femenina, elegante y urbana. Colores pasteles suaves con animaciones delicadas pero efectivas.

## 🎨 Cambios Implementados

### ✅ Problemas Solucionados
- **Sin loading screen** - Carga inmediata sin atascos
- **Navegación directa** - Click en menú lleva directo a la sección
- **Cursor centrado** - Alineado perfectamente con el cursor del sistema
- **Animaciones efectivas** - GSAP funcionando correctamente con scroll triggers

### ✅ Nuevas Características
- **Sección "Sobre mí"** - Con foto, biografía y habilidades
- **Estética elegante-urbana** - Colores pasteles con toques sofisticados
- **Tipografías refinadas** - Cormorant Garamond + Montserrat

## 🌸 Paleta de Colores Pastel

```css
--cream: #faf8f5;      /* Fondo principal (crema suave) */
--lavender: #d4c5e2;   /* Acento principal (lavanda) */
--sage: #b8c5b3;       /* Acento secundario (salvia) */
--blush: #f4d9d0;      /* Acento terciario (rubor) */
--sky: #c9daea;        /* Acento cuaternario (cielo) */
--charcoal: #3a3a3a;   /* Texto oscuro */
```

## 🎯 Secciones

1. **Hero** - Presentación elegante con título serif
2. **Sobre mí** - Foto, biografía de 3 párrafos y skills
3. **Proyectos Web** - 2 proyectos con imágenes y descripciones
4. **Diseño Gráfico** - 2 proyectos con estilo alternado
5. **Contacto** - CTA suave con información de contacto

## 🎬 Animaciones Sutiles

### Carga Inicial
- Hero title aparece línea por línea
- Fade in suave en todos los elementos
- Sin loading screen (carga directa)

### Scroll Triggers
- Sobre mí: imagen desde la izquierda, contenido desde abajo
- Proyectos: fade + scale en imágenes, slide lateral en info
- Tags: aparecen con stagger suave
- Parallax delicado en todas las imágenes

### Interacciones
- Cursor personalizado centrado correctamente
- Hover suave en todos los elementos
- Navegación smooth sin lag
- Botón CTA con scale on hover

## 📝 Personalizar Contenido

### Sobre Mí
En `index.html`, líneas 60-70:
```html
<p>Tu primera biografía aquí...</p>
<p>Tu segunda biografía aquí...</p>
<p>Tu tercera biografía aquí...</p>
```

### Skills
Líneas 72-77:
```html
<span class="skill">Tu Skill 1</span>
<span class="skill">Tu Skill 2</span>
```

### Imagen de Perfil
En `css/style.css`, línea 245:
```css
.image-placeholder {
    background-image: url('../media/img/tu-foto.jpg');
    background-size: cover;
    background-position: center;
}
```

### Proyectos
Reemplaza gradientes por tus imágenes (líneas 480-500):
```css
.web-1 {
    background-image: url('../media/img/proyecto-web-1.jpg');
}
```

## 🎨 Cambiar Paleta de Colores

En `css/style.css`, modifica las variables (líneas 10-17):

### Opciones de Paleta

**Versión Rosa Suave:**
```css
--cream: #fff5f7;
--lavender: #ffc9d9;
--sage: #d4a5a5;
--blush: #ffb3ba;
```

**Versión Azul Serenidad:**
```css
--cream: #f5f9ff;
--lavender: #b8d4f1;
--sage: #a8c5e2;
--blush: #d4e4f7;
```

**Versión Verde Menta:**
```css
--cream: #f5faf8;
--lavender: #c5e8df;
--sage: #a8d5ba;
--blush: #d4f1e8;
```

## 🔧 Tecnologías

- **jQuery 3.7.1** - Manipulación DOM
- **GSAP 3.12.5** - Animaciones profesionales
- **ScrollTrigger** - Animaciones por scroll
- **CSS Grid + Flexbox** - Layout responsive
- **Google Fonts** - Tipografías elegantes

## 📁 Estructura

```
portfolio/
├── index.html           # HTML con sección Sobre mí
├── css/
│   └── style.css       # Estética pastel elegante
├── js/
│   └── script.js       # Animaciones sutiles
└── media/
    └── img/            # Tus imágenes aquí
```

## 🚀 Uso Rápido

1. **Descarga** todos los archivos
2. **Añade tu foto** de perfil en `media/img/`
3. **Edita** la biografía en el HTML
4. **Cambia** los gradientes por tus imágenes en el CSS
5. **Personaliza** colores si lo deseas
6. **Abre** index.html ¡Listo!

## 📱 Responsive

✅ **Desktop** (1024px+) - Layout completo  
✅ **Tablet** (768px-1024px) - Una columna adaptada  
✅ **Mobile** (<768px) - Optimizado para móvil  

## 💡 Tips de Diseño

1. **Imágenes suaves** - Usa fotos con colores pasteles
2. **Textos concisos** - La elegancia está en la brevedad
3. **Espacios generosos** - Deja respirar el diseño
4. **Consistencia** - Mantén la paleta en todas tus imágenes
5. **Fotografía de calidad** - Invierte en buenas fotos

## 🌐 Desplegar

### GitHub Pages
```bash
git init
git add .
git commit -m "Portfolio inicial"
git push origin main
```

### Netlify
Arrastra la carpeta completa a Netlify Drop

## 🎯 Lo Que Hace Especial Este Portfolio

✅ **Estética distintiva** - Colores pasteles únicos  
✅ **Tipografía elegante** - Serif + Sans armoniosa  
✅ **Sin atascos** - Navegación fluida garantizada  
✅ **Cursor correcto** - Centrado perfectamente  
✅ **Animaciones sutiles** - Profesionales sin excesos  
✅ **Sección personal** - Conecta emocionalmente  
✅ **Mobile perfect** - Funciona en todos los dispositivos  

## 🐛 Si Algo Falla

1. Abre la consola (F12)
2. Verifica que aparezca: "✨ Portfolio Cargado"
3. Comprueba los 3 checks verdes
4. Refresca con Ctrl + Shift + R

---

**Diseñado con amor y atención al detalle** 🌸

# Mecanizados UPC — Rediseño Digital

Proyecto de rediseño web para **Mecanizados UPC** (Rubí, Barcelona) — empresa de mecanizado CNC de precisión. El rediseño se inspira en la estructura de contenido de [tiyoo.cn](http://www.tiyoo.cn/index.html) pero con identidad propia: paleta azul prusia, estilo editorial técnico, tipografías Newsreader + Inter + JetBrains Mono.

## Cómo abrirlo

El proyecto usa React con Babel standalone (sin build). Como el HTML carga JSX vía `<script src="...">`, **no funciona al abrirlo directamente con doble clic** (Chrome bloquea `file://` por CORS).

Dos opciones para verlo:

**Opción A — Servidor local (recomendado)**
```bash
cd "carpeta del proyecto"
python -m http.server 8000
```
Luego abre: `http://localhost:8000/Web Mecanizados Digital.html`

**Opción B — Netlify Drop**
Arrastra la carpeta entera a [app.netlify.com/drop](https://app.netlify.com/drop) y obtendrás una URL pública.

## Estructura

```
.
├── Web Mecanizados Digital.html   Entry point (carga React + los JSX)
├── shared/
│   ├── data.js                    Datos del cliente: empresa, productos, sectores, servicios
│   └── placeholder.jsx            Componente Placeholder + mapeos PRODUCT_IMAGES + CNC_CATALOG (21 piezas)
├── v2/
│   ├── v2-app.jsx                 App shell con router y navegación entre páginas
│   ├── v2-home.jsx                Página home: hero, productos destacados, sectores, soluciones, contadores + CTA
│   ├── v2-pages.jsx               Services / Products / About / Contact / Modal / Footer
│   └── v2.css                     Estilos globales y variables CSS
├── fotos/                         21 imágenes de piezas CNC (TY-001 … TY-066)
├── sectores/                      6 imágenes para el carrusel de sectores
└── servicios/                     4 imágenes para las cards de servicios (fuente: Tiyoo)
```

## Stack técnico

- **React 18** (UMD, sin build)
- **Babel standalone** (compila JSX en el navegador)
- **CSS variables** para theming
- Sin dependencias de npm, todo vive en un solo HTML + scripts externos

## Paleta de color (CSS variables en `v2.css`)

```
--bg:             #eef1f5   Fondo principal
--paper:          #f6f8fb   Fondo claro secciones
--ink:            #0d1b2e   Texto principal (azul muy oscuro)
--ink-soft:       #3d4d63   Texto secundario
--ink-mute:       #7a8698   Texto deshabilitado
--rule:           #b8c3d1   Bordes
--accent:         #1e3a5f   Azul prusia principal
--accent-deep:    #0a1a30   Azul casi negro
--accent-bright:  #4a7ab8   Azul brillante (acento activo)
```

Color secundario para acentos puntuales: **naranja `#e07b3f`** (usado sobre todo en dots y el carrusel de sectores).

## Tipografía

- **Serif (display/h1-h3):** Newsreader (Google Fonts), weight 300, letter-spacing -0.022em
- **Sans (body):** Inter, 15px/1.55 base
- **Mono (kickers, contadores, etiquetas técnicas):** JetBrains Mono

## Estado actual / qué hay hecho

- ✅ **Home**: hero oscuro + "Qué fabricamos" (4 productos) + slider lineal de sectores con autoplay (4 cards visibles, loop infinito) + bloque "Solución" + contadores animados con efecto wow (cuenta atrás + halos + partículas) + CTA magnético
- ✅ **Productos**: hero con breadcrumb + 8 categorías (solo CNC con contenido, las otras muestran "Catálogo en preparación") + grid de 21 piezas con paginación de 10/página + cards con hover zoom + tinte azul + línea inferior animada (solo código visible, estilo Tiyoo)
- ✅ **Servicios**: hero oscuro + 4 cards 2x2 (CNC, Maquinaria, Ingeniería, Estructuras) con foto, número grande, kicker, nombre, descripción, 4 bullets + CTA wow al final
- ⏳ **About / Contact**: siguen con el diseño antiguo, pendientes de actualizar a la línea moderna
- ⏳ **Modal de producto**: pendiente de revisar

## Datos del cliente

- **Nombre:** Mecanizados UPC S.L.
- **Fundado:** 2013 (+10 años)
- **Ubicación:** Carrer Alt, 9 — Rubí, 08191 Barcelona
- **Teléfono:** +34 938 63 69 76
- **Email:** oficinatecnica@mecanizadosupc.com
- **Web actual a reemplazar:** https://www.mecanizadosupc.com/

## Próximos pasos sugeridos

1. Rediseñar página **About** con la misma línea (hero oscuro + secciones con fotos reales del taller)
2. Rediseñar página **Contact** con formulario multistep moderno
3. Actualizar el **modal** que se abre al hacer clic en una pieza para que tenga ficha técnica completa
4. Reemplazar imágenes de sectores (algunas siguen siendo genéricas) con fotos reales del cliente cuando las tengamos
5. Revisión responsive en mobile
6. Migración final a **WordPress + Divi** (el cliente lo tiene en esa plataforma)

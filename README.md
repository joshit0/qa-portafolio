# Portafolio - Jose Quispe Pino

Portafolio profesional estatico de **Jose Quispe Pino**, Senior QA Automation Engineer.
Construido con **HTML, CSS y JavaScript vanilla**, sin backend, sin base de datos y sin
dependencias. Compatible con **GitHub Pages**.

## Contenido

- **Professional Summary**.
- **Technical Skills**: las 10 categorias profesionales del CV (en ingles).
- **Experiencia**: Inetum, Softtek, BCP, Baufest, Practia y Trans Solutions Systems.
- **Reconocimientos**: CRACK del Q 2026 y EmbedEX 2024.
- **Proyectos**: BPuzzle (React Native, Expo, TypeScript) y proyectos demostrativos de
  automatizacion.
- **Educacion y certificaciones**: TECSUP, PURDUE y CertiProf.
- **Contacto**: LinkedIn, correo electronico y WhatsApp directo (mensaje prellenado).
- **Selector de idioma ES/EN** (se guarda en `localStorage`).
- Modo **oscuro** por defecto, con conmutador a modo claro (se guarda en `localStorage`).
- Paleta **esmeralda/teal**, tipografia del sistema (cero dependencias).
- Detalles de UX: barra de progreso de scroll, header compacto, boton volver arriba,
  copiar email y **exportar a PDF** (estilos de impresion tipo CV).
- Hero con una ventana de codigo que muestra un ejemplo de automatizacion de APIs con
  **Karate DSL** (`checkout.feature`).
- Diseno **responsive** y accesible (foco visible, `aria-*`, enlace de salto,
  `prefers-reduced-motion`).
- Metadatos para compartir: Open Graph/Twitter + datos estructurados JSON-LD.

## Estructura de archivos

```
portafolio/
|-- index.html      # Estructura y contenido
|-- styles.css      # Sistema de diseno, temas claro/oscuro, responsive e impresion
|-- script.js       # Tema, idioma, scroll, copiar email, PDF y animaciones
|-- favicon.svg     # Icono del sitio
|-- og-image.svg    # Imagen social (vectorial)
|-- og-image.png    # Imagen social para Open Graph (1200x630)
`-- README.md       # Este archivo
```

## Exportar a PDF / Imprimir

El boton **Imprimir / Guardar PDF** (en el hero y en Contacto) abre el dialogo de
impresion del navegador. Elige **Guardar como PDF** para obtener una version tipo CV
en blanco y negro, sin menu ni botones. Los estilos de impresion estan en `styles.css`
dentro de `@media print`.

## Probar la web localmente

Opcion 1 - abrir directamente:

- Haz doble clic en `index.html` o abrelo en el navegador.

Opcion 2 - servidor local (recomendado, evita restricciones de `file://`):

Con Python (viene con la mayoria de equipos):

```powershell
python -m http.server 8000
```

Luego abre: http://localhost:8000

Con Node.js:

```powershell
npx serve .
```

o

```powershell
npx http-server -p 8000
```

### Elegir idioma desde la URL

Puedes forzar el idioma abriendo la web con el parametro `lang`:

- Espanol: `https://joshit0.github.io/portafolio/?lang=es`
- Ingles: `https://joshit0.github.io/portafolio/?lang=en`

El parametro de la URL tiene prioridad sobre lo guardado en el navegador. Si no
envias `lang`, se usa el idioma guardado o, si no hay, el del navegador. Al pulsar el
selector ES/EN, la URL se actualiza automaticamente para que puedas copiarla y
compartirla en el idioma correcto.

## Publicar gratis en GitHub Pages

> No se ha publicado nada. Sigue estos pasos cuando tu lo decidas.

1. Crea un repositorio en GitHub, por ejemplo `portafolio` (publico).
2. Desde la carpeta del proyecto, inicializa y sube el codigo:

```powershell
git init
git add .
git commit -m "Portafolio profesional"
git branch -M main
git remote add origin https://github.com/joshit0/portafolio.git
git push -u origin main
```

3. En GitHub: **Settings > Pages**.
4. En **Build and deployment > Source**, selecciona **Deploy from a branch**.
5. En **Branch**, elige `main` y la carpeta `/ (root)`. Guarda.
6. Espera 1-2 minutos. Tu web quedara en:

```
https://joshit0.github.io/portafolio/
```

### Usar un repositorio con tu nombre de usuario (URL sin subcarpeta)

Si nombras el repositorio `joshit0.github.io`, la web quedara en
`https://joshit0.github.io/` (raiz). El resto de pasos es igual.

## Personalizacion recomendada (antes de publicar)

El contenido ya esta cargado desde tu CV. Solo quedan detalles opcionales:

- **Proyectos demostrativos**: cuando publiques cada repositorio, anade el enlace real
  en su tarjeta y reemplaza la etiqueta "Proximamente" por el enlace.
- **BPuzzle**: anade el enlace cuando decidas publicarlo.
- **Imagen social**: `og-image.png` ya existe. Al publicar, actualiza en `index.html` la
  meta `og:image` con la URL absoluta (ej.
  `https://joshit0.github.io/portafolio/og-image.png`) para que LinkedIn/WhatsApp
  muestren la vista previa. Si quieres cambiar el diseno, edita `og-image.svg` y
  regenera el PNG.
- **Impresion / PDF**: si quieres afinar el resultado impreso, ajusta el bloque
  `@media print` en `styles.css`.

## Personalizar el idioma en la URL para postulaciones

- En ingles: `https://joshit0.github.io/portafolio/?lang=en`
- En espanol: `https://joshit0.github.io/portafolio/?lang=es`

## Aviso

- No se incluye codigo confidencial ni datos internos de ninguna empresa.
- No se inventaron repositorios, metricas ni logros.
- Contacto: `joseqp92@gmail.com`, https://www.linkedin.com/in/josequispepino/ y
  WhatsApp +51 947 755 781 (https://wa.me/51947755781).

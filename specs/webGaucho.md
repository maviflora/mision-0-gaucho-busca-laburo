# Spec: web de Gaucho (`webGaucho/index.html`)

Nació como réplica del estilo de 108 Supply y desde el 26/11/2026 es la base de la web de Gaucho (se mudó a `webGaucho/index.html`).

Fecha: 26/11/2026. Pedido de Mavi: analizar https://108.supply/ y replicar **su estilo** con los datos de Gaucho ya recolectados. Hecha por Claude directamente (sin Codex).

## Análisis de 108 Supply (lo que se replica)

| Rasgo | Cómo es en 108 Supply | Cómo se traduce a Gaucho |
|---|---|---|
| Base | Página negra pura, texto `#EFF1F0` | Fondo `--gaucho-crema-tomy` con puntitos de tinta, texto `--gaucho-azul-omnibot` |
| Navegación | Píldoras flotantes y fijas arriba: logo, links, "Sign in", CTA lima | Logo "GAUCHO", links Quién soy / Mis laburos / Mi gente / Mi taller / Charlemos, CTA rojo ojos "Contratame" |
| Hero | Panel gigante de esquinas redondeadas (~27px) con foto full-bleed y una tarjeta mono flotante abajo a la derecha | Panel con la foto del cartel de neón de Paisanos y tarjeta mono "Omnibot 5402 · TOMY · 1984" |
| Tarjeta de acento | Tarjeta lima (acento de 108) con números condensados ultra pesados | Tarjeta amarillo Sol con la fecha del Hackware ("5 / 09 2026") en tipografía condensada |
| Tipografía | Grotesca (Diatype) con tracking apretado; etiquetas en mono (Geist Mono) en mayúsculas | Geist + Geist Mono + Anton (Google Fonts) |
| Titulares | Dos tonos: primera frase en color pleno, segunda en gris | Igual (segunda frase en marrón sombrero) |
| Prueba social | Fila "Usado por diseñadores en..." con logos en marquee | "Me vieron en": Paisanos, SLA, LABITCONF, Wallbit, Hackware, La Ofi, como texto (sin logos de terceros) |
| Panel claro | Panel blanco redondeado con encabezado mono de 3 columnas y carrusel de tarjetas (nombre + categoría + precio) | Paneles de papel crema: "Mis laburos" con carrusel de tarjetas (nombre + qué hice + fecha) y flechas |
| Aviso inferior | Píldora flotante con punto lima y cierre | "Busco laburo · Disponible", con punto rojo y botón para cerrar |

No se copia: logo, textos, imágenes ni la tipografía propietaria de 108 Supply.

## Contenido (de `docs/investigacionGaucho.md` y de la maqueta archivada)

Secciones, en orden, con su id y su entrada en la nav:

| Sección | Id | Nav | Contenido |
|---|---|---|---|
| Hero | `inicio` (el `<main>`) | logo "GAUCHO" | Foto del cartel de neón de Paisanos, título "Gaucho", tarjeta Sol del Hackware y tarjeta mono "Busco laburo · DevRel en Paisanos" |
| Perfil | `perfil` | Quién soy | Frase en dos tonos (Omnibot del 84, DevRel y contenido en Paisanos) y chips que llevan a las otras secciones |
| Me vieron en | (sin id) | (no está en la nav) | Cinta infinita con los 6 nombres y una línea de links debajo |
| Mis laburos | `cinta` | Mis laburos | Carrusel de 4 tarjetas: Hackware (jurado, 05/09/2026), LABITCONF (hablé y fui embajador, 31/10/2026), Wallbit (presenté la tarjeta, 19/11/2026) y La Ofi (anfitrión, 2026). **Gaucho Adventures no está acá**: es un juego, va en `#comunidad` |
| Comunidad e historia | `comunidad` | Mi gente | Línea de tiempo (SLA Live, El Origen, Gaucho Adventures, Misión Despertar, Gauchomentary), "Mis pelis y mis juegos" (El Origen, Gauchomentary, Gaucho Adventures) y "Lo que me dibujaron, renderizaron y estamparon" (arte de fans, 9 piezas, la última es el lugar reservado para la chinita) |
| Mi taller | `taller` | Mi taller | Tres empresas candidatas: Toyota Argentina (autos), Bosch Professional (herramientas), Arbit Ingeniería (sensores e IoT). Son ideas de Gaucho, sin contacto ni logos confirmados (la página lo dice) |
| Charlemos | `entrevista` | Charlemos y CTA "Contratame" | Llamada simulada local (ver abajo) |
| Pie | (sin id) | (no está en la nav) | Franja de 4 colores, "Dónde encontrarme" (X, LinkedIn, Paisanos, La Ofi, LABITCONF, Gauchomentary, GauchoStudio) y firma |

- Entrevista: llamada simulada local, de la que no sale nada. Botones **Llamame** (arranca la llamada), **Ver mi CV** (comparte pantalla y aparece el "CV falso", `assets/Gaucho/cvFalso/gaucho_bikini_cv_falso.png`, ver `docs/notasDeMavi.md`) y **Cortar** (cuelga y oculta la pantalla compartida). Arranca sin sonido.
- No se inventan datos: lo no confirmado se rotula como tal en la página.

## Reglas técnicas (verificables)

- Archivo único: `webGaucho/index.html`, CSS y JS vanilla integrados, mobile first.
- Ids de sección: `perfil`, `cinta`, `comunidad`, `taller`, `entrevista` (en ese orden en la página: `comunidad` va entre `cinta` y `taller`). Los laburos (`#cinta`) y la comunidad (`#comunidad`) están separados.
- Paleta y modo (pedido de Mavi, 26/11/2026): la página es **clara** (`color-scheme: light`), con los colores del CV real (`docs/designKits/propuestas/cv/cv.css`): fondo crema TOMY con puntitos de tinta, texto azul Omnibot, bordes marrón sombrero, superficies crema plástico, acento rojo ojos (texto negro encima, nunca rojo sobre crema), franja de 4 colores. Todos los colores salen de `docs/designKits/paletas.md`: sin hex fuera de `:root`, sin lima (es de 108 Supply) y sin fondos oscuros salvo la foto del hero. Los neutros se derivan con `color-mix()`.
- **Voz (26/11/2026, pedido de Mavi):** la página entera suena a Gaucho hablando, según `docs/investigacionGaucho.md` sección 3.5. Primera persona, voseo, vocabulario de taller (fierros, Raspberry, soldadura, protección térmica), chiste en la última cláusula, cargadas con cariño, sin emojis. Todo el microcopy va en su voz (nav: Quién soy / Mis laburos / Mi gente / Mi taller / Charlemos; botones: Contratame, Llamame, Ver mi CV, Cortar). Frases reales suyas: "con menos dramatismo y más soldadura", "negocio cerrado", "ruedas y opiniones". Solo el `<title>` y la meta description quedan en tercera persona, por SEO (sección 18). Prohibido copiar titulares de 108 Supply.
- **Links (26/11/2026):** 23 links externos, solo con URLs de la investigación (nada inventado): X y LinkedIn de Gaucho, Paisanos, La Ofi, LABITCONF, post de Wallbit, reel de Instagram de Hackware, El Origen, Gauchomentary, GauchoStudio. SLA Live, Gaucho Adventures y Misión Despertar enlazan a búsquedas en X que la investigación cita como fuente (no hay link directo; pendiente en `webGaucho/README.md`). Todos abren en pestaña nueva con `rel="noopener noreferrer"`. Siguen prohibidos los recursos externos (scripts, estilos, imágenes) salvo Google Fonts.
- **Favicon (26/11/2026):** logo elegido por Mavi, opción 1 "Frente" (`docs/logo/guiaDelLogo.md`). Archivos en `webGaucho/`: `favicon-16.png` (16x16), `favicon-32.png` (32x32), `favicon.ico` (los dos PNG incrustados tal cual) y `apple-touch-icon.png` (180x180, sprite ampliado 5x sobre crema TOMY). Declarados en el `<head>` con rutas relativas. Es pixel art: **nunca se reescala con suavizado**, solo por vecino más cercano y en escala entera. Se regeneran con `python tools/generarFaviconGaucho.py`.
- **Cinta infinita "Me vieron en" (26/11/2026):** dos mitades idénticas (`.marquee-mitad`), cada una con 4 vueltas de los 6 nombres (~3900 px), porque la animación corre el 50 % y, si cada mitad es más corta que la pantalla, queda un hueco a la derecha en pantallas anchas. Cubre hasta ~3900 px de ancho. Con `prefers-reduced-motion: reduce` la cinta se frena.
- **Tarjetas de laburos homogéneas (26/11/2026):** todas con la misma proporción (`aspect-ratio: 4 / 5`), con un borde mínimo (`padding: 8px`) y con la foto llenando el marco (`object-fit: cover`). Las fotos ya están recortadas (`specs/recortesDeAssets.md`), así que `cover` no corta nada importante. El carrusel deja 22 px de `padding-block` (compensado con margen negativo) para que la tarjeta elevada no se recorte. Ajustes del control visual: `.ficha` lleva `min-width: 0` y el pie puede pasar a otra línea, para que en móvil todas las tarjetas midan lo mismo aunque un pie sea más largo; el afiche de Hackware (`object-position: 15% 50%`) y el cartel de neón (`30% 50%`) tienen encuadre propio para no cortar el nombre de la primera persona ni la P de PAISANOS. En "Mi gente" las fotos se ven enteras: van en posición absoluta dentro del marco (`position: relative`), porque con `height: 100%` la fila de la grilla crecía con la foto y se recortaba.
- **Hover de las tarjetas de laburos:** al pasar el mouse (o enfocar con teclado) la tarjeta se adelanta: sube 10 px, escala 1.035 y gana sombra y fondo crema plástico. Solo con `prefers-reduced-motion: no-preference` y, para el hover, solo en dispositivos con `hover: hover`.
- **Comunidad (`#comunidad`):** las piezas de arte de fans (`.pieza`) van en marcos cuadrados con la foto **entera** (`object-fit: contain`), porque mezclan encuadres muy distintos. Incluye un lugar reservado (`.foto-pendiente`, borde punteado, "Mavi y la chinita") para la foto de Mavi con la estampita de la chinita: no existe todavía y **no se inventa**.
- Aviso flotante inferior con botón de cierre (oculta el aviso).
- Accesibilidad: `lang="es"`, `prefers-reduced-motion`, arranca en silencio, botones con nombre, contraste AA, texto alternativo en todas las imágenes.
- Sin recursos externos salvo Google Fonts. Fotos por rutas relativas `../assets/Gaucho/...` que existan.

## Verificación

- Web: `node --test tests/webGaucho.test.mjs`
- Despliegue en Vercel: `node --test tests/despliegueVercel.test.mjs` (ver `specs/despliegueVercel.md`)

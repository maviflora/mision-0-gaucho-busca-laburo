# Spec: web de Gaucho (`webGaucho/index.html`)

Nació como réplica del estilo de 108 Supply y desde el 26/11/2026 es la base de la web de Gaucho (se mudó de `webGaucho/index.html` a `webGaucho/index.html`).

Fecha: 26/11/2026. Pedido de Mavi: analizar https://108.supply/ y replicar **su estilo** con los datos de Gaucho ya recolectados. Hecha por Claude directamente (sin Codex).

## Análisis de 108 Supply (lo que se replica)

| Rasgo | Cómo es en 108 Supply | Cómo se traduce a Gaucho |
|---|---|---|
| Base | Página negra pura, texto `#EFF1F0` | Fondo `--gaucho-crema-tomy` con puntitos de tinta, texto `--gaucho-azul-omnibot` |
| Navegación | Píldoras flotantes y fijas arriba: logo, links, "Sign in", CTA lima | Logo "GAUCHO", Ficha / La cinta / Taller / Entrevista, CTA rojo ojos "Contratar a Gaucho" |
| Hero | Panel gigante de esquinas redondeadas (~27px) con foto full-bleed y una tarjeta mono flotante abajo a la derecha | Panel con la foto del cartel de neón de Paisanos y tarjeta mono "Omnibot 5402 · TOMY 1984" |
| Tarjeta de acento | Tarjeta lima (acento de 108) con números condensados ultra pesados | Tarjeta amarillo Sol con la fecha del Hackware en tipografía condensada |
| Tipografía | Grotesca (Diatype) con tracking apretado; etiquetas en mono (Geist Mono) en mayúsculas | Geist + Geist Mono + Anton (Google Fonts) |
| Titulares | Dos tonos: primera frase en color pleno, segunda en gris | Igual |
| Prueba social | Fila "Usado por diseñadores en..." con logos en marquee | "Visto en": Paisanos, SLA, LABITCONF, Wallbit, Hackware, La Ofi, como texto (sin logos de terceros) |
| Panel claro | Panel blanco redondeado con encabezado mono de 3 columnas y carrusel de tarjetas gris claro (`#EFF1F0`, nombre + categoría + precio) | Panel claro "La cinta": tarjetas de laburos (nombre + categoría + fecha) con flechas |
| Aviso inferior | Píldora flotante con punto lima y cierre | "Gaucho busca laburo · Disponible" |

No se copia: logo, textos, imágenes ni la tipografía propietaria de 108 Supply.

## Contenido (de `docs/investigacionGaucho.md` y de la maqueta archivada)

- Perfil: Omnibot 5402 de TOMY (1984), DevRel y creador de contenido en Paisanos.
- Laburos anteriores: Hackware (jurado, 05/09/2026), LABITCONF (speaker y embajador, 31/10/2026), Wallbit (presentador, 19/11/2026), La Ofi (anfitrión), Gaucho Adventures (juego).
- Laburos (`#cinta`): solo trabajos reales: Hackware, LABITCONF, Wallbit, La Ofi. Al pasar el mouse (o enfocar con teclado) cada tarjeta se adelanta: sube 10px, escala 1.035 y gana sombra. Solo con `prefers-reduced-motion: no-preference` y en dispositivos con hover.
- Comunidad e historia (`#comunidad`, 26/11/2026, pedido de Mavi): separada de los laburos. Línea de tiempo (SLA Live, El Origen, Gaucho Adventures, Misión Despertar, Gauchomentary), pelis y juegos (El Origen, Gauchomentary, Gaucho Adventures) y arte de fans (estampita San Gaucho, dibujo de Facundo Burgos, render de GauchoStudio, merch, pixel art, "do it for him", portada y foto del juego). Incluye un lugar reservado (`.foto-pendiente`) para la foto de Mavi con la estampita de la chinita: no existe todavía, no se inventa.
- Dónde le gustaría laburar: autos, herramientas, sensores (Toyota Argentina, Bosch Professional, Arbit Ingeniería: empresas candidatas, sin contacto confirmado).
- Entrevista: llamada simulada local. Al compartir pantalla aparece el "CV falso" (`assets/Gaucho/cvFalso/gaucho_bikini_cv_falso.png`), ver `docs/notasDeMavi.md`.
- No se inventan datos: lo no confirmado se rotula "a confirmar".

## Reglas técnicas

- Archivo único: `webGaucho/index.html`, CSS y JS vanilla integrados, mobile first.
- Ids de sección de la maqueta: `perfil`, `cinta`, `taller`, `entrevista`, más `comunidad` (nueva, entre `cinta` y `taller`).
- Paleta y modo (actualizado 26/11/2026, pedido de Mavi): la página es **clara**, con los colores del CV real (`docs/designKits/propuestas/cv/cv.css`): fondo crema TOMY con puntitos de tinta, texto azul Omnibot, bordes marrón sombrero, superficies crema plástico, acento rojo ojos (texto negro encima, nunca rojo sobre crema), franja de 4 colores. Todos los colores salen de `docs/designKits/paletas.md`: sin hex fuera de `:root`, sin lima (es de 108 Supply) y sin fondos oscuros salvo la foto del hero. Los neutros se derivan con `color-mix()`.
- Vuelve a cumplir la regla de "modo claro" de la ronda 2 (`color-scheme: light`).
- **Voz (26/11/2026, pedido de Mavi):** la página entera suena a Gaucho hablando, según `docs/investigacionGaucho.md` sección 3.5. Primera persona, voseo, vocabulario de taller (fierros, Raspberry, soldadura, protección térmica), chiste en la última cláusula, cargadas con cariño, sin emojis. Todo el microcopy va en su voz (nav: Quién soy / Mis laburos / Mi gente / Mi taller / Charlemos; botones: Contratame, Llamame, Ver mi CV, Cortar). Frases reales suyas: "con menos dramatismo y más soldadura", "negocio cerrado", "ruedas y opiniones". Solo el `<title>` y la meta description quedan en tercera persona, por SEO (sección 18). Prohibido copiar titulares de 108 Supply.
- **Links (26/11/2026):** a todo lo que se pudo, solo con URLs de la investigación (nada inventado): X y LinkedIn de Gaucho, Paisanos, La Ofi, LABITCONF, post de Wallbit, reel de Hackware, El Origen, Gauchomentary, GauchoStudio. Hackware, SLA Live, Gaucho Adventures y Misión Despertar enlazan a búsquedas en X que la investigación cita como fuente (no hay link directo). Los externos abren en pestaña nueva con `rel="noopener noreferrer"`. Siguen prohibidos los recursos externos (scripts, estilos, imágenes) salvo Google Fonts.
- **Favicon (26/11/2026):** logo elegido por Mavi, opción 1 "Frente" (`docs/logo/guiaDelLogo.md`). Archivos en `webGaucho/`: `favicon-16.png` (16x16), `favicon-32.png` (32x32), `favicon.ico` (los dos PNG incrustados tal cual) y `apple-touch-icon.png` (180x180, sprite ampliado 5x sobre crema TOMY). Declarados en el `<head>` con rutas relativas. Es pixel art: **nunca se reescala con suavizado**, solo por vecino más cercano y en escala entera. Se regeneran con `python tools/generarFaviconGaucho.py`.
- **Cinta infinita "Me vieron en" (26/11/2026):** dos mitades idénticas (`.marquee-mitad`), cada una con 4 vueltas de los 6 nombres (~3900 px), porque la animación corre el 50 % y, si cada mitad es más corta que la pantalla, queda un hueco a la derecha en pantallas anchas. Cubre hasta ~3900 px de ancho. Un test lo verifica.
- Accesibilidad: `lang="es"`, `prefers-reduced-motion`, arranca en silencio, botones con nombre, contraste AA.
- Sin recursos externos salvo Google Fonts. Fotos por rutas relativas `../assets/Gaucho/...` que existan.

## Verificación

`node --test tests/webGaucho.test.mjs`

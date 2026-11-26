# Spec: CV real de Gaucho

> **25/11/2026:** el CV falso "Gaucho por dentro" (y sus 3 variantes de póster) se archivó en `docs/designKits/archivo/cv/`. La idea nueva del CV falso es una foto de Gaucho en bikini que aparece al compartir pantalla en la llamada (ver `docs/notasDeMavi.md`). Lo que sigue describe la entrega original; solo el CV real sigue vigente (R1 a R6, R10 a R12).

Fecha: 24/11/2026. Estado: implementación inicial (solo las dos hojas; la secuencia que las conecta se hace después).

## Objetivo

Dos hojas de CV que **se ven iguales a primera vista** (mismo título, mismo encabezado, mismas secciones, misma tipografía):

1. **CV real** (`docs/designKits/propuestas/cv/cvReal.html`): el CV de verdad de Gaucho, con su experiencia confirmada.
2. **CV falso** (`docs/designKits/propuestas/cv/cvFalso.html`), "Gaucho por dentro" (idea B de `docs/experienciasCreativasGaucho.md`): el robot abierto, pieza por pieza, con sus specs reales. Parece un CV, pero es el equivalente a mandar una foto en ropa interior. Cuando Gaucho pasa este archivo por error, la persona se da cuenta, le da vergüenza y corta la llamada.

La secuencia del "error" (cuándo y cómo se manda cada uno) queda **fuera de alcance** de esta spec.

## Fuentes de contenido

- Experiencia: `docs/investigacionGaucho.md` secciones 7.1, 7.2 (perfil A titular + perfil B como proyectos, sugerido en la sección 7.2 y todavía sin decisión final de Mavi) y 15.3.
- Specs técnicos: `docs/investigacionGaucho.md`, bloque "SPECS TÉCNICOS DE GAUCHO" (escrito por Mavi, sacado de subtítulos automáticos del video de SLA: pueden tener errores).
- Marca: paleta y tipografías del kit seleccionado `docs/designKits/archivo/webPortfolioSeleccionado/propuesta1_catalogoTomy.html` (Anton, Chivo, IBM Plex Mono; crema TOMY, azul Omnibot, rojo ojos).

## Reglas de contenido

- Solo hechos **CONFIRMADOS**. No se inventan logros con números (el "80% menos de tiempo de respuesta" del perfil B queda afuera).
- No se inventan modelos de componentes. Raspberry Pi: modelo desconocido, no se menciona. ReSpeaker: solo "HAT con 2 micrófonos".
- El canal de contacto "Contratar" no está definido con Paisanos: se usan los perfiles reales de X y LinkedIn y se avisa que el mail está pendiente.
- El humor sale de los textos reales de Gaucho (fallas honestas, "ruedas y opiniones").

## Requisitos (cada uno tiene su test en `tests/cv.test.mjs`)

| # | Requisito |
|---|---|
| R1 | Existen `cvReal.html`, `cvFalso.html` y la hoja de estilos compartida `cv.css`. |
| R2 | Ambas páginas tienen `lang="es-AR"`, viewport, el **mismo `<title>`** (para que la vista previa de un link sea idéntica) y un único `<h1>` con "Gaucho". |
| R3 | Ambas tienen los mismos títulos de sección `h2`, en el mismo orden: Perfil, Experiencia, Formación, Habilidades, Idiomas, Contacto. Es lo que hace creíble el disfraz. |
| R4 | El CV real incluye las 14 experiencias de la sección 15.3 (por nombre clave). |
| R5 | El CV real incluye los links reales de X y LinkedIn, y no contiene marcas de datos inventados. |
| R6 | El CV real no contiene el corte del robot (nada de `data-pieza`). |
| R7 | El CV falso incluye las piezas: ojos, cámara, ESP32, driver de motores, motores, Raspberry Pi, ReSpeaker, parlante. Cada pieza tiene nombre, spec y número. |
| R8 | En el CV falso, cada pieza de la lista aparece también en el dibujo (mismo número). |
| R9 | El CV falso incluye el pipeline de voz completo (wake word, WAV, speech to text, LLM, streaming, parlante) y el modo "seguime". |
| R10 | Accesibilidad: toda `img` tiene `alt`, el SVG tiene `role="img"` y `<title>`, las imágenes locales existen. |
| R11 | `cv.css` tiene reglas `@media print` (el CV es una hoja imprimible) y respeta `prefers-reduced-motion` si hay animaciones. |
| R12 | Sin JavaScript ni dependencias externas salvo las fuentes de Google ya usadas por el kit. |

## Fuera de alcance

- La secuencia de la llamada (reclutador pide el CV, Gaucho manda el falso, corte de llamada).
- Interacciones (tocar los ojos para encenderlos, etc.): la hoja es estática.
- Generar el PDF.

## Variantes del póster (24/11/2026)

El póster de "Gaucho por dentro" se pidió como un mix entre una foto de vista explotada (piezas flotando separadas) y un cuadro tipo Grid Studio (piezas apoyadas en un marco, cada una con su línea y su rótulo), con la paleta de Gaucho. Se entregan 3 variantes de `cvFalso.html`, generadas por `tools/generarVariantesCvFalso.mjs`:

| Archivo | Idea |
|---|---|
| `cvFalsoV1_cuadroKnolling.html` | Cuadro negro con papel crema, piezas apoyadas en grilla, rótulo debajo de cada una y ficha al pie. |
| `cvFalsoV2_explosionNoche.html` | Fondo azul Omnibot con grilla, sol del merch detrás y piezas separadas en diagonal con rótulos a los costados. |
| `cvFalsoV3_afichePorDentro.html` | Cuadro con afiche TOMY: título GAUCHO con franjas, sol rojo con rayas y vista explotada en columna. |

Requisitos (tests en `tests/cvVariantes.test.mjs`):

| # | Requisito |
|---|---|
| V1 | Las tres existen y son distintas entre sí. |
| V2 | Mantienen el disfraz: mismo `<title>`, mismas seis secciones y la foto del robot cerrado en el encabezado. |
| V3 | Dibujan las 8 piezas, con el número de la leyenda, y cada una tiene su línea guía (`class="guia"`). |
| V4 | Un único SVG accesible (`role="img"` y `<title>`), sin JavaScript ni recursos externos salvo fuentes. |

Nota técnica: los colores de las piezas van como estilos en línea porque los estilos por clase no llegan adentro de un `<symbol>` usado con `<use>`.

# Página de Gaucho: propuestas de la ronda 2

Hechas el 25/11/2026 después de rechazar la ronda 1 (archivada en `../../archivo/paginaGaucho/`). Spec: `specs/paginaGauchoPropuestasV2.md`. Tests: `tests/paginaGauchoPropuestasV2.test.mjs`. Paleta: [`paletas.md`](../../paletas.md). Ninguna está seleccionada.

Referencias, con el mismo peso: [108 Supply](https://108.supply/), [Haptic](https://www.haptic.studio/) y [Michael Pumo](https://michaelpumo.com/) (en modo claro).

| Archivo | Idea | Qué toma de las referencias |
|---|---|---|
| `propuesta1_retratoAbierto.html` | Retrato abierto | Retrato dividido de Pumo, aire entre bloques de Haptic, encuadre dominante de 108 Supply. |
| `propuesta2_escenaEnVivo.html` | Escena en vivo | Título al pie de una imagen escénica de Haptic, cambio de foto a demanda de 108 Supply, CTA personal de Pumo. |
| `propuesta3_pliegoFotografico.html` | Pliego fotográfico | Cambios de escala de 108 Supply, pausas entre piezas de Haptic, retrato con voz personal de Pumo. |
| `propuesta4_perfilContinuo.html` | Perfil continuo | Presencia personal de Pumo, navegación discreta de Haptic, contraste de escala de 108 Supply. |
| `propuesta5_conversacionPrimero.html` | Conversación primero | La llamada como acción principal (Haptic), superficies claras modulares (Pumo), selección a demanda (108 Supply). |

Todas están en modo claro, con CSS y JavaScript vanilla integrados. Incluyen las secciones `perfil`, `cinta`, `entrevista` y `taller`, y la secuencia local del "CV falso" (la foto de Gaucho en bikini, `assets/Gaucho/cvFalso/`).

## Cómo verlas

Abrí cualquier `.html` en el navegador. Las fotos usan rutas relativas `../../../../assets/`.

## Pendiente

Elegir una (o pedir otra ronda). Al elegir, copiala a `seleccionados/paginaGaucho/` y conservá el original.

## Réplica del estilo de 108 Supply (26/11/2026)

Pedido aparte de las 5 propuestas: Mavi pidió replicar el estilo de [108 Supply](https://108.supply/) con los datos de Gaucho. Hecha por Claude directamente (sin Codex). Spec: `specs/paginaGauchoReplica108Supply.md`. Tests: `tests/paginaGauchoReplica108Supply.test.mjs`.

| Archivo | Idea | Qué toma de 108 Supply |
|---|---|---|
| `replica108Supply_gaucho.html` | Página negra con paneles redondeados | Nav en píldoras flotantes con CTA lima, hero de foto full-bleed con tarjeta mono, títulos en dos tonos, "Visto en" en marquee, panel claro con carrusel, aviso flotante inferior |

Tiene una sección `#comunidad` (Comunidad e historia) debajo de los laburos, con las pelis, los juegos y el arte de fans; falta la foto con la chinita. Es clara y usa los colores del CV real (crema TOMY con puntitos de tinta, azul Omnibot, marrón sombrero, rojo ojos), sin la lima ni el fondo negro de 108 Supply. No copia logo, textos ni imágenes de 108 Supply. Para verla hace falta un servidor local (por ejemplo `python -m http.server` desde la raíz del repo) o abrir el `.html` directo en el navegador.

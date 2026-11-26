# Spec: 5 propuestas de diseño de la página de Gaucho

> **Estado: rechazada por Mavi.** Las 5 propuestas se movieron a `docs/designKits/archivo/paginaGaucho/` como registro del proceso.

## Objetivo

Generar 5 interpretaciones visuales nuevas de la maqueta de la página de Gaucho, con la paleta de marca de Gaucho (`docs/investigacionGaucho.md` sección 5.2) y un toque de su identidad. Ninguna reemplaza a `propuesta1_manualDeUsuario.html`, que Mavi conserva como referencia.

## Referencias de diseño que eligió Mavi

- 108 Supply (https://108.supply/)
- Haptic (https://www.haptic.studio/)
- Michael Pumo (https://michaelpumo.com/), **pero en modo claro, no oscuro**.

## Reglas

- Salida original: `docs/designKits/propuestas/paginaGaucho/propuesta2_*.html` a `propuesta6_*.html`. Cada una es un HTML único con CSS y JS vanilla integrados, mobile first.
- **Modo claro**: fondo claro (crema TOMY o similar) y `color-scheme: light`. El azul y el negro se usan para texto y acentos, no de fondo principal.
- Paleta: solo tokens `--gaucho-*` de la sección 5.5 de la investigación. Rojo `#F3462E` nunca como texto sobre crema (contraste 2.9).
- Mismo contenido y ids de sección que `propuesta1_manualDeUsuario.html`: `cv-falso`, `perfil`, `cinta`, `entrevista`, `taller`. El texto sale de ese archivo y de los .md guía; no inventar datos de Gaucho.
- Las 5 deben diferir de verdad en layout y movimiento, no solo en color. Cada una mezcla las 3 referencias en distinto grado.
- Cada una lleva al menos un guiño de identidad de Gaucho (ojos rojos como indicador, franja 80s, ficha técnica, cassette, etc.).
- Accesibilidad: `lang="es"`, `prefers-reduced-motion` respetado, arranca en silencio.
- Fotos: rutas relativas `../../../../assets/Gaucho/...`.
- Sin dependencias externas salvo Google Fonts (con fuentes de respaldo).

## Cómo se verifica

`node --test tests/paginaGaucho5Propuestas.test.mjs`

# Spec: 5 propuestas nuevas de diseño de la página de Gaucho (ronda 2)

Fecha: 25/11/2026. La ronda 1 (`specs/paginaGaucho5Propuestas.md`) fue rechazada por Mavi y está en `docs/designKits/archivo/paginaGaucho/`. El design kit arrancó de cero: solo se conserva la paleta (`docs/designKits/paletas.md`).

## Objetivo

5 propuestas de diseño **distintas entre sí y distintas de las archivadas**, basadas en 3 páginas de referencia y con la paleta de Gaucho.

## Referencias (mismo peso las tres)

- 108 Supply: https://108.supply/
- Haptic: https://www.haptic.studio/
- Michael Pumo: https://michaelpumo.com/ (en **modo claro**, no oscuro)

Land-book (`land-book.com/websites/103197-108-supply-website-and-motion-templates` y `.../100677-haptic-a-a-design-studio-for-startups-and-scaleups`) bloquea lectores automáticos: ver los sitios reales.

## Reglas

- Salida: `docs/designKits/propuestas/paginaGaucho/propuesta1_*.html` a `propuesta5_*.html`. HTML único con CSS y JS vanilla integrados, mobile first.
- Paleta: solo tokens `--gaucho-*` de `docs/designKits/paletas.md`. Fondo claro base (`color-scheme: light`). Rojo `#F3462E` nunca como texto sobre crema.
- No repetir ideas de las archivadas (manual de usuario, retícula TOMY, turno de taller, lado A/B, archivo de oficio, panel Omnibot). Mirarlas solo para no repetirlas.
- Menos gimmick y más oficio: priorizar jerarquía tipográfica, grilla, espaciado y un movimiento sobrio, como en las referencias. La identidad de Gaucho aparece como un toque, no como disfraz.
- Mismas secciones e ids que la maqueta (`perfil`, `cinta`, `entrevista`, `taller`, más `cv-falso` si aplica) para poder comparar. Texto sacado de `docs/designKits/archivo/paginaGaucho/propuesta1_manualDeUsuario.html` y de los .md; no inventar datos de Gaucho. El "CV falso" ahora es una foto (`assets/Gaucho/cvFalso/gaucho_bikini_cv_falso.png`) que aparece al compartir pantalla en la llamada: ver `docs/notasDeMavi.md`.
- Accesibilidad: `lang="es"`, `prefers-reduced-motion`, arranca en silencio.
- Fotos con rutas relativas `../../../../assets/Gaucho/...`.
- Sin dependencias externas salvo Google Fonts.

## Verificación

`node --test tests/paginaGauchoPropuestasV2.test.mjs`

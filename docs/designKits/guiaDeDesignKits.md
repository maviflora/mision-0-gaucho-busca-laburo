# Design kit de Gaucho

El design kit **arranca de cero**. Mavi rechazó todo lo anterior y se conservó solo la paleta de colores: [`paletas.md`](paletas.md).

## Carpetas

- `paletas.md`: paleta de marca y tokens CSS. Es lo único vigente.
- `archivo/`: todo lo que se descartó, para tener trazabilidad del proceso. No es referencia de diseño vigente.
  - `archivo/webPortfolio/` y `archivo/webPortfolioSeleccionado/`: las tres direcciones del portfolio y la copia que se había elegido (Catálogo TOMY 1984).
  - `archivo/paginaGaucho/`: las seis interpretaciones de la maqueta (detalle en [`guiaDePaginaGaucho.md`](archivo/paginaGaucho/guiaDePaginaGaucho.md)).
  - `archivo/videos16bit/` y `archivo/videosRealista/`: los dos kits de video.
  - `archivo/cv/`: el CV falso "Gaucho por dentro", sus variantes, el generador y los tests viejos (ver [`guiaDelArchivoCv.md`](archivo/cv/guiaDelArchivoCv.md)).
- `propuestas/paginaGaucho/`: las 5 propuestas nuevas de la página (ronda 2), todavía sin elegir (ver [`guiaDePaginaGaucho.md`](propuestas/paginaGaucho/guiaDePaginaGaucho.md)).
- `propuestas/cv/`: solo el CV real, que se mantiene (ver [`guiaDelCvDeGaucho.md`](propuestas/cv/guiaDelCvDeGaucho.md)). Sus estilos todavía usan la paleta y tipografías del kit archivado "Catálogo TOMY 1984".

Cada propuesta nueva va en `propuestas/<tema>/`. Cuando Mavi elija una, copiá el HTML a `seleccionados/<tema>/`, conservá el original y actualizá el índice con la insignia y su enlace. Revisá los links relativos al copiar. Lo que Mavi rechace se mueve a `archivo/`.

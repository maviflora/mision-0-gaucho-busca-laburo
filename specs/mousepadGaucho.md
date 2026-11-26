# Spec: mousepad de Gaucho

## Objetivo

Producir 6 diseños de un mousepad de Gaucho para mandar a imprimir. Todos comparten el recurso visual de **tiras de cómic de fondo** (referencias: `docs/mousepad/referencias/`) y cada uno cambia el estilo del personaje.

## Medidas

- Tamaño real: 120 cm x 60 cm, proporción 2:1 horizontal.
- Lienzo ideal: 7087 x 3543 px (150 dpi). Si el generador no llega a esa resolución, entregar la mayor posible en 2:1 (por ejemplo 2048 x 1024) y escalarla después.
- Margen de seguridad: 3 cm (2,5 % del ancho) hacia adentro, sin texto ni detalles importantes. Sangrado: el fondo de cómic llega hasta el borde.
- Zonas de uso: el teclado ocupa la parte baja de la izquierda y el mouse se mueve a la derecha. El personaje principal va en el centro o centro-derecha. Los easter eggs chicos se reparten por todo el lienzo para que se descubran de a poco.

## Estilos

| N | Estilo | Base visual |
|---|---|---|
| 1 | Gaucho Adventures (SEGA 16-bit) | `assets/Gaucho/fotitos/juego/` |
| 2 | Pixel art | `assets/Gaucho/fotitos/arte/gaucho_pixel_art_sombrero_y_saco.png` |
| 3 | Realista | `assets/Gaucho/fotitos/fotos/` y `render3d/` |
| 4 | Merch oficial TOMY 1984 | `assets/Gaucho/fotitos/arte/merch_oficial_gaucho_omnibot_tomy_1984.png` |
| 5 | Gaucho malo (campera de cuero) | `assets/Gaucho/fotitos/fotos/gaucho_campera_cuero_y_lentes_gonzalo_martinese.png` |
| 6 | Gaucho cordobés | `assets/Gaucho/fotitos/fotos/gaucho_robot_cartel_neon_paisanos_bandera.png` y `render3d/` |

## Reglas de contenido

- Los easter eggs salen solo de hechos confirmados en `docs/investigacionGaucho.md` y `assets/fuentes.md`. No inventar datos técnicos ni logros.
- Cada diseño lleva al menos 6 easter eggs.
- Usar solo material registrado en `assets/fuentes.md` y `docs/investigacionGaucho.md`.
- Texto dentro de los globos y cartelitos: español rioplatense, corto, con el humor de taller de Gaucho.
- Los ojos de Gaucho son siempre el punto más luminoso del diseño.

## Entregables

- `docs/mousepad/disenios.md`: brief y prompt de cada diseño.
- `docs/mousepad/resultados/disenioN_<estilo>.png`: un PNG por diseño, generado por Codex.
- Si un diseño no se pudo generar, dejar anotado el motivo en `docs/mousepad/disenios.md`.

## Criterios de aceptación

1. Hay 6 diseños, cada uno con su estilo y su prompt.
2. Cada diseño cita las imágenes de referencia reales del proyecto.
3. Cada diseño tiene al menos 6 easter eggs.
4. Los tests de `tests/mousepad.test.mjs` pasan (`node --test tests/mousepad.test.mjs`).

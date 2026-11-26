# Paletas de Gaucho

Es lo único del design kit que se conserva. Todo lo demás se archivó en [`archivo/`](archivo/) y el design kit arranca de cero. La fuente de estos colores es `docs/investigacionGaucho.md` (secciones 4.3 y 5); si cambia allá, actualizá esta copia.

## Paleta de marca

| Token (CSS) | Nombre | Hex | Para qué | Basado en |
|---|---|---|---|---|
| `--gaucho-taller` | Negro taller | `#0B0F14` | Fondo principal dark | piso/cuero/pantallas |
| `--gaucho-azul-omnibot` | Azul Omnibot | `#0A2B46` | Fondo de tarjetas, headers | merch (`#0A2B46`) |
| `--gaucho-azul-tinta` | Azul tinta | `#133A51` | Títulos sobre crema | merch |
| `--gaucho-crema-tomy` | Crema TOMY | `#F4E2C4` | Fondo "papel", texto sobre oscuro | estampita/merch |
| `--gaucho-crema-sucio` | Crema plástico | `#E8C69D` | Superficies secundarias, bordes | merch |
| `--gaucho-rojo-ojos` | Rojo ojos | `#F3462E` | **Acento principal** (CTA, estado "escuchando") | ojos del merch |
| `--gaucho-rojo-glow` | Rojo glow | `#FF6A55` | Resplandor/hover de los ojos | ojos (más claros) |
| `--gaucho-sol` | Amarillo Sol | `#EAA540` | Acento secundario, cintas, badges | cinta San Gaucho |
| `--gaucho-celeste` | Celeste bandera | `#74ACDF` | Links, elementos "argentinos" | bandera |
| `--gaucho-naranja-sunset` | Naranja sunset | `#F28409` | Rayas 80s, ilustraciones | Hackware / merch |
| `--gaucho-marron-sombrero` | Marrón sombrero | `#523823` | Detalles de cuero/sombrero | pixel art |
| `--gaucho-noche` | Azul noche pixel | `#000320` | Fondo de modo "juego 16-bit" | pixel art |
| `--gaucho-lima` | Lima Paisanos (opcional) | ~`#D8F500` **[a medir]** | Guiño a Paisanos (logo), usarlo muy poco | logo Paisanos |

Contrastes calculados (WCAG, texto normal pide 4.5, grande 3): crema `#F4E2C4` sobre azul `#0A2B46` = **11.4**; crema sobre negro `#0B0F14` = **15.1**; rojo `#F3462E` sobre negro `#0B0F14` = **5.2** (ok para botones/enlaces sobre oscuro); amarillo `#EAA540` sobre azul `#0A2B46` = **6.9**; negro `#0B0F14` sobre rojo `#F3462E` = **5.2** (texto negro sobre botón rojo); celeste `#74ACDF` sobre azul `#0A2B46` = **6.0**. **Ojo:** rojo `#F3462E` sobre crema = **2.9** (no usar para texto sobre crema; usar azul tinta); blanco sobre rojo = 3.7 (solo texto grande).

**Franja 80s (la "marca gráfica")**: 4 líneas paralelas en este orden: `#F3462E` → `#F28409` → `#EAA540` → `#74ACDF`. Se usa como separador de secciones y como subrayado del título.

## Tokens listos para CSS

```css
:root {
  /* Fondos y superficies */
  --gaucho-taller: #0B0F14;
  --gaucho-azul-omnibot: #0A2B46;
  --gaucho-azul-tinta: #133A51;
  --gaucho-crema-tomy: #F4E2C4;
  --gaucho-crema-sucio: #E8C69D;
  --gaucho-noche: #000320;

  /* Acentos */
  --gaucho-rojo-ojos: #F3462E;
  --gaucho-rojo-glow: #FF6A55;
  --gaucho-sol: #EAA540;
  --gaucho-celeste: #74ACDF;
  --gaucho-naranja-sunset: #F28409;
  --gaucho-marron-sombrero: #523823;

  /* Franja 80s (de arriba hacia abajo) */
  --gaucho-franja: linear-gradient(
    #F3462E 0 25%, #F28409 25% 50%, #EAA540 50% 75%, #74ACDF 75% 100%
  );
}
```

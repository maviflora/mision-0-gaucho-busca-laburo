# Spec: logo de Gaucho en 16 bits (favicon de la pestaña)

Fecha: 26/11/2026. Pedido de Mavi: "3 opciones de loguito con forma full body de Gaucho, en 16 bits, para poner de loguito en la pestaña del browser". Lo hace Codex orquestado desde Orca (CLAUDE.md); Claude lo integra después.

## Objetivo

3 opciones **distintas entre sí** de un sprite de Gaucho **de cuerpo entero** (cabeza con ojos y cámara, torso con panel y casetera, brazos-pinza, base con ruedas), que se lea bien a 16x16 px como favicon.

## Reglas de diseño

- Estilo pixel art de 16 bits (era SNES/Megadrive, como la portada de Gaucho Adventures): píxeles nítidos, contorno oscuro, sombreado con 2 o 3 tonos por color, sin antialiasing ni degradés.
- Rasgos que no pueden faltar (`docs/investigacionGaucho.md` sección 4.2): **ojos rojos luminosos**, cámara Raspberry con flex ámbar entre los ojos, plástico crema TOMY, panel "computer programming" y casetera, brazos con pinza, base con ruedas.
- Paleta: solo colores de `docs/designKits/paletas.md` (negro taller `#0B0F14`, azul Omnibot `#0A2B46`, crema TOMY `#F4E2C4`, crema plástico `#E8C69D`, rojo ojos `#F3462E`, rojo glow `#FF6A55`, sol `#EAA540`, celeste `#74ACDF`, naranja sunset `#F28409`, marrón sombrero `#523823`). Se permiten tonos intermedios de sombreado derivados de esos.
- Fondo **transparente**. Tiene que leerse sobre pestañas claras y oscuras (por eso contorno oscuro o una silueta clara marcada).
- Las 3 opciones tienen que diferir en la idea, no solo en el color. Sugerencias: (1) Gaucho tal cual es, de frente y erguido; (2) Gaucho con sombrero de ala (fedora/cowboy, ver `assets/Gaucho/fotitos/arte/gaucho_pixel_art_sombrero_y_saco.png`); (3) Gaucho en pose de acción o saludando, con pinza levantada. Codex puede proponer otras si le salen mejor.

## Entregables en `docs/logo/`

Por cada opción N (1 a 3), con un nombre corto que describa la idea (`<nombre>`):

| Archivo | Qué es |
|---|---|
| `opcionN_<nombre>_32.png` | Sprite maestro 32x32 px, fondo transparente. |
| `opcionN_<nombre>_16.png` | Versión para favicon, 16x16 px, retocada a mano (no solo reducida). |
| `opcionN_<nombre>_512.png` | El maestro ampliado 16x (vecino más cercano, sin suavizado) para verlo. |

Además:

- `hojaDeOpciones.png`: las 3 opciones lado a lado, a 512 px, sobre fondo claro y sobre fondo oscuro.
- `guiaDelLogo.md`: qué idea tiene cada opción y cuál recomienda Codex.
- Opcional: el script que generó los sprites (`tools/generarLogoGaucho.py`), legible y comentado.

## Qué NO se toca

Nada fuera de `docs/logo/` y `tools/generarLogoGaucho.py`. No se edita `notasDeMavi.md` ni la página. No se elige ninguna opción: la elige Mavi.

## Verificación

`node --test tests/logoGaucho.test.mjs`

## Estado

26/11/2026: Mavi eligió la **opción 1 (Frente)**. Ya es el favicon de `webGaucho/` (ver `specs/webGaucho.md` y `tools/generarFaviconGaucho.py`).

# Opciones de logo de Gaucho

La [hoja de opciones](hojaDeOpciones.png) muestra los tres maestros a 512 × 512, en orden de izquierda a derecha. Arriba están sobre crema TOMY y abajo sobre negro taller.

| Opción | Idea | Favicon |
| --- | --- | --- |
| 1. Frente | El Omnibot erguido, con la cúpula despejada y las pinzas a la misma altura. La cara y la base ancha siguen la proporción de la foto de Paisanos. | [16 × 16](opcion1_frente_16.png) |
| 2. Sombrero | El ala ancha y ladeada retoma el sombrero de la ilustración pixel art. La copa y la cinta le dan un perfil reconocible de gaucho. | [16 × 16](opcion2_sombrero_16.png) |
| 3. Saludo | Gaucho levanta una pinza abierta. El cuerpo se desplaza hacia la izquierda para dejar lugar al gesto. | [16 × 16](opcion3_saludo_16.png) |

Recomiendo **Frente** para la pestaña por la separación entre los ojos, el panel y las ruedas a 16 × 16. La elección final queda abierta.

Cada favicon se dibujó en su propia grilla. El archivo de 32 × 32 es el maestro y el de 512 × 512 es su ampliación exacta por vecino más cercano. Para regenerar los PNG desde la raíz del proyecto, ejecutá `python tools/generarLogoGaucho.py` con Pillow instalado.


## Elegida

Mavi eligió la **opción 1 (Frente)** el 26/11/2026. Ya se usa de favicon en `webGaucho/` (`favicon-16.png`, `favicon-32.png`, `favicon.ico` y `apple-touch-icon.png`, generados con `python tools/generarFaviconGaucho.py`).

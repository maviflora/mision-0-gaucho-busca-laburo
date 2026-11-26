# Spec: recorte y upscale de las fotos de Gaucho

## Objetivo
Las fotos de `assets/Gaucho/fotitos` estaban guardadas como capturas de pantalla de celular
(1179x2556, con barras de Instagram). Mavi mandó imágenes de "cómo tienen que quedar". Hay que
recortar cada captura a ese encuadre, reemplazar el archivo, y darle upscale a dos fotos:
San Gaucho (recortar márgenes y ampliar) y el cartel de neón de Paisanos (solo ampliar).

## Resultado final
| Archivo (en `assets/Gaucho/fotitos/`) | Medidas finales | Proporción (ancho/alto) | Tratamiento |
|---|---|---|---|
| `arte/do_it_for_him_thecualcaexperience.png` | 1147x1435 | 0,799 | recorte |
| `arte/gaucho_pixel_art_sombrero_y_saco.png` | 809x1106 | 0,731 | recorte |
| `arte/la_creacion_del_gaucho_dibujo_facundo_burgos.png` | 1158x1522 | 0,761 | recorte |
| `arte/merch_oficial_gaucho_omnibot_tomy_1984.png` | 1176x1421 | 0,828 | recorte |
| `arte/san_gaucho_estampita_patrono_del_codigo.jpeg` | 1242x1786 | 0,695 | recorte pegado a la estampita, enderezado por perspectiva y upscale x2 |
| `eventos/charla_fijacion_labitconf_gaucho_en_escenario.png` | 1043x1327 | 0,786 | recorte |
| `eventos/hackware_jurados_gaucho_devrel.png` | 925x984 | 0,940 | recorte |
| `fotos/gaucho_campera_cuero_y_lentes_gonzalo_martinese.png` | 895x889 | 1,007 | recorte |
| `fotos/gaucho_robot_cartel_neon_paisanos_bandera.png` | 1856x1638 | 1,133 | upscale x2 (de 928x819) |
| `juego/gaucho_adventures_juego_sega_gonzalo_martinese.png` | 1164x1415 | 0,823 | recorte |

Nota sobre San Gaucho: la referencia de Mavi tiene proporción 0,717 y la estampita real, sin 8 px de
margen por lado, da 0,695. Se aceptó esa diferencia (tolerancia propia de 4 % en el test) porque
igualarla obligaría a cortar contenido o a dejar mantel a la vista.

## Método
1. **Recortes de capturas**: `tools/ubicarRecortes.py` ubica cada imagen de referencia de Mavi dentro
   de la captura original por template matching; las coordenadas resultantes quedan fijas en
   `CAJAS_DE_CAPTURAS` de `tools/recortarAssets.py`.
2. **Estampita**: se detecta la hoja clara contra el mantel oscuro (con apertura morfológica para
   ignorar las líneas del mantel), se enderezan las cuatro esquinas por transformación de
   perspectiva, se sacan 8 px de margen por lado y se amplía x2.
3. **Upscale**: modelo EDSR x2 (OpenCV `dnn_superres`, requiere `opencv-contrib-python-headless` 4.11;
   el 5.x no lee el `.pb`). El modelo completo no entra en memoria, así que se procesa por mosaicos de
   160 px con 12 px de superposición descartada para evitar costuras.

## Cómo reproducirlo
```
pip install opencv-contrib-python-headless==4.11.* numpy pillow
# modelo: https://github.com/Saafke/EDSR_Tensorflow/raw/master/models/EDSR_x2.pb
python tools/recortarAssets.py ruta/al/EDSR_x2.pb
node --test tests/recortesDeAssets.test.mjs
```
El script es idempotente: se saltea lo que ya tiene las medidas finales. San Gaucho tarda unos minutos
y el neón unos 15 minutos.

## Recuperar los originales
Los originales (capturas de 1179x2556, estampita de 1512x2016, neón de 928x819) están en el historial
de git: `git checkout HEAD -- <ruta>` (o `git checkout <commit> -- <ruta>`) y se vuelve a correr el script.

## Tests
`tests/recortesDeAssets.test.mjs` verifica proporción contra la referencia, que no siga siendo captura
de celular, ancho mínimo (sin pérdida de resolución) y que el neón mida exactamente el doble.

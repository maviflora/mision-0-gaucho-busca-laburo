"""
Recorta y mejora las fotos de assets/Gaucho/fotitos que estaban guardadas como captura de pantalla.

Qué hace (spec: specs/recortesDeAssets.md):
  1. Capturas de Instagram/celular: recorta la foto real con las cajas que salen de ubicarRecortes.py
     (la referencia que Mavi mandó "como tiene que quedar"), en la resolución original.
  2. San Gaucho: encuentra la estampita sobre el mantel, la endereza, la recorta sin márgenes y le hace upscale x2.
  3. Cartel de neón de Paisanos: upscale x2.

El upscale usa el modelo EDSR x2 de OpenCV (super-resolución con red neuronal).
Descarga del modelo: https://github.com/Saafke/EDSR_Tensorflow/raw/master/models/EDSR_x2.pb

Uso: python tools/recortarAssets.py <ruta/al/EDSR_x2.pb>
Los originales quedan en el historial de git (git checkout -- assets/Gaucho/fotitos/... los recupera).
"""
import sys
from pathlib import Path

import cv2
import numpy as np

CARPETA_FOTITOS = Path(__file__).resolve().parent.parent / "assets" / "Gaucho" / "fotitos"

# Cajas (izquierda, arriba, derecha, abajo) en píxeles de la captura original de 1179x2556.
# Salen de tools/ubicarRecortes.py comparando contra las imágenes que mandó Mavi.
CAJAS_DE_CAPTURAS = {
    "arte/do_it_for_him_thecualcaexperience.png": (9, 650, 1156, 2085),
    "arte/gaucho_pixel_art_sombrero_y_saco.png": (185, 685, 994, 1791),
    "arte/la_creacion_del_gaucho_dibujo_facundo_burgos.png": (18, 446, 1176, 1968),
    "arte/merch_oficial_gaucho_omnibot_tomy_1984.png": (3, 538, 1179, 1959),
    "eventos/charla_fijacion_labitconf_gaucho_en_escenario.png": (38, 573, 1081, 1900),
    "eventos/hackware_jurados_gaucho_devrel.png": (127, 650, 1052, 1634),
    "fotos/gaucho_campera_cuero_y_lentes_gonzalo_martinese.png": (151, 842, 1046, 1731),
    "juego/gaucho_adventures_juego_sega_gonzalo_martinese.png": (9, 629, 1173, 2044),
}

ESTAMPITA = "arte/san_gaucho_estampita_patrono_del_codigo.jpeg"
CARTEL_DE_NEON = "fotos/gaucho_robot_cartel_neon_paisanos_bandera.png"
LADO_DE_LA_APERTURA = 61                # más ancho que las líneas del mantel, más angosto que la estampita
MARGEN_A_RECORTAR_DE_LA_ESTAMPITA = 8  # píxeles hacia adentro, para sacar el borde redondeado y el mantel
CALIDAD_JPEG = 95


def leer_imagen(ruta):
    """Lee una imagen conservando el canal alfa si lo tiene (compatible con rutas con tildes o espacios)."""
    return cv2.imdecode(np.fromfile(str(ruta), dtype=np.uint8), cv2.IMREAD_UNCHANGED)


def guardar_imagen(ruta, imagen):
    """Guarda en PNG o JPEG según la extensión, sin perder calidad."""
    extension = ruta.suffix.lower()
    parametros = [cv2.IMWRITE_JPEG_QUALITY, CALIDAD_JPEG] if extension in (".jpg", ".jpeg") else []
    correcto, bytes_codificados = cv2.imencode(extension, imagen, parametros)
    assert correcto, f"No se pudo codificar {ruta}"
    bytes_codificados.tofile(str(ruta))


def crear_super_resolucion(ruta_del_modelo):
    """Carga el modelo EDSR x2 de OpenCV."""
    modelo = cv2.dnn_superres.DnnSuperResImpl_create()
    modelo.readModel(str(ruta_del_modelo))
    modelo.setModel("edsr", 2)
    return modelo


LADO_DEL_MOSAICO = 160      # el modelo completo no entra en memoria con una foto entera: se procesa por mosaicos
SUPERPOSICION_DE_MOSAICOS = 12   # borde extra de cada mosaico, que se descarta para que no se noten las costuras
FACTOR_DE_AMPLIACION = 2
MEDIDAS_DE_UNA_CAPTURA = (2556, 1179)   # alto, ancho de las capturas de celular originales
MEDIDAS_DE_LA_FOTO_DE_LA_ESTAMPITA = (2016, 1512)
MEDIDAS_DEL_CARTEL_DE_NEON = (819, 928)


def duplicar_resolucion_en_mosaicos(modelo, imagen_bgr):
    """Upscale x2 de una imagen de 3 canales, mosaico por mosaico, y las pega en la imagen final."""
    alto, ancho = imagen_bgr.shape[:2]
    resultado = np.zeros((alto * FACTOR_DE_AMPLIACION, ancho * FACTOR_DE_AMPLIACION, 3), dtype=np.uint8)
    for arriba in range(0, alto, LADO_DEL_MOSAICO):
        for izquierda in range(0, ancho, LADO_DEL_MOSAICO):
            desde_y, desde_x = max(arriba - SUPERPOSICION_DE_MOSAICOS, 0), max(izquierda - SUPERPOSICION_DE_MOSAICOS, 0)
            hasta_y = min(arriba + LADO_DEL_MOSAICO + SUPERPOSICION_DE_MOSAICOS, alto)
            hasta_x = min(izquierda + LADO_DEL_MOSAICO + SUPERPOSICION_DE_MOSAICOS, ancho)
            mosaico_mejorado = modelo.upsample(imagen_bgr[desde_y:hasta_y, desde_x:hasta_x])
            recorte_y = (arriba - desde_y) * FACTOR_DE_AMPLIACION
            recorte_x = (izquierda - desde_x) * FACTOR_DE_AMPLIACION
            alto_util = (min(arriba + LADO_DEL_MOSAICO, alto) - arriba) * FACTOR_DE_AMPLIACION
            ancho_util = (min(izquierda + LADO_DEL_MOSAICO, ancho) - izquierda) * FACTOR_DE_AMPLIACION
            resultado[arriba * FACTOR_DE_AMPLIACION:arriba * FACTOR_DE_AMPLIACION + alto_util,
                      izquierda * FACTOR_DE_AMPLIACION:izquierda * FACTOR_DE_AMPLIACION + ancho_util] = \
                mosaico_mejorado[recorte_y:recorte_y + alto_util, recorte_x:recorte_x + ancho_util]
    return resultado


def duplicar_resolucion(modelo, imagen):
    """Upscale x2 con la red neuronal. Si hay canal alfa, el alfa se agranda aparte con bicubic."""
    if imagen.ndim == 3 and imagen.shape[2] == 4:
        color = duplicar_resolucion_en_mosaicos(modelo, np.ascontiguousarray(imagen[:, :, :3]))
        alfa = cv2.resize(imagen[:, :, 3], (color.shape[1], color.shape[0]), interpolation=cv2.INTER_CUBIC)
        return np.dstack([color, alfa])
    return duplicar_resolucion_en_mosaicos(modelo, imagen)


def recortar_capturas():
    """Recorta cada captura con su caja y reemplaza el archivo. Se saltea las que ya están recortadas."""
    for nombre, (izquierda, arriba, derecha, abajo) in CAJAS_DE_CAPTURAS.items():
        ruta = CARPETA_FOTITOS / nombre
        captura = leer_imagen(ruta)
        if captura.shape[:2] != MEDIDAS_DE_UNA_CAPTURA:
            print(f"ya recortada, se saltea: {nombre} ({captura.shape[1]}x{captura.shape[0]})")
            continue
        recorte = captura[arriba:abajo, izquierda:derecha]
        guardar_imagen(ruta, recorte)
        print(f"recortada {nombre}: {recorte.shape[1]}x{recorte.shape[0]}")


def encontrar_estampita(imagen):
    """Devuelve las 4 esquinas de la estampita (clara) sobre el mantel oscuro, ordenadas: arriba-izq, arriba-der, abajo-der, abajo-izq."""
    gris = cv2.GaussianBlur(cv2.cvtColor(imagen, cv2.COLOR_BGR2GRAY), (9, 9), 0)
    _, mascara = cv2.threshold(gris, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)
    # El mantel tiene líneas claras finas que se pegan a la estampita: una apertura grande las borra
    # (la estampita es una mancha ancha y sobrevive) y después se rellenan los huecos de adentro.
    mascara = cv2.morphologyEx(mascara, cv2.MORPH_OPEN, np.ones((LADO_DE_LA_APERTURA, LADO_DE_LA_APERTURA), np.uint8))
    mascara = cv2.morphologyEx(mascara, cv2.MORPH_CLOSE, np.ones((25, 25), np.uint8))
    contornos, _ = cv2.findContours(mascara, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    contorno_mas_grande = max(contornos, key=cv2.contourArea)
    esquinas = cv2.boxPoints(cv2.minAreaRect(contorno_mas_grande))
    suma, diferencia = esquinas.sum(axis=1), np.diff(esquinas, axis=1).ravel()
    return np.float32([
        esquinas[np.argmin(suma)], esquinas[np.argmin(diferencia)],
        esquinas[np.argmax(suma)], esquinas[np.argmax(diferencia)],
    ])


def recortar_estampita(modelo):
    """Endereza la estampita, la recorta sin márgenes y le hace upscale x2."""
    ruta = CARPETA_FOTITOS / ESTAMPITA
    imagen = leer_imagen(ruta)
    if imagen.shape[:2] != MEDIDAS_DE_LA_FOTO_DE_LA_ESTAMPITA:
        print(f"estampita ya procesada, se saltea ({imagen.shape[1]}x{imagen.shape[0]})")
        return
    arriba_izq, arriba_der, abajo_der, abajo_izq = encontrar_estampita(imagen)
    ancho = int(round((np.linalg.norm(arriba_der - arriba_izq) + np.linalg.norm(abajo_der - abajo_izq)) / 2))
    alto = int(round((np.linalg.norm(abajo_izq - arriba_izq) + np.linalg.norm(abajo_der - arriba_der)) / 2))
    destino = np.float32([[0, 0], [ancho, 0], [ancho, alto], [0, alto]])
    enderezada = cv2.warpPerspective(
        imagen, cv2.getPerspectiveTransform(np.float32([arriba_izq, arriba_der, abajo_der, abajo_izq]), destino),
        (ancho, alto), flags=cv2.INTER_CUBIC)
    m = MARGEN_A_RECORTAR_DE_LA_ESTAMPITA
    sin_margenes = enderezada[m:alto - m, m:ancho - m]
    mejorada = duplicar_resolucion(modelo, sin_margenes)
    guardar_imagen(ruta, mejorada)
    print(f"estampita: {sin_margenes.shape[1]}x{sin_margenes.shape[0]} -> {mejorada.shape[1]}x{mejorada.shape[0]}")


def mejorar_cartel_de_neon(modelo):
    """Upscale x2 del cartel de neón de Paisanos."""
    ruta = CARPETA_FOTITOS / CARTEL_DE_NEON
    original = leer_imagen(ruta)
    if original.shape[:2] != MEDIDAS_DEL_CARTEL_DE_NEON:
        print(f"cartel de neón ya mejorado, se saltea ({original.shape[1]}x{original.shape[0]})")
        return
    mejorada = duplicar_resolucion(modelo, original)
    guardar_imagen(ruta, mejorada)
    print(f"cartel de neón: {original.shape[1]}x{original.shape[0]} -> {mejorada.shape[1]}x{mejorada.shape[0]}")


if __name__ == "__main__":
    modelo_edsr = crear_super_resolucion(sys.argv[1])
    recortar_capturas()
    recortar_estampita(modelo_edsr)
    mejorar_cartel_de_neon(modelo_edsr)

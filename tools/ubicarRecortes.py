"""
Ubica dónde cae cada recorte de referencia (el que Mavi mandó "como tiene que quedar")
dentro de la captura original en alta resolución de assets/Gaucho/fotitos.

Cómo funciona: la referencia es una versión reducida del recorte. Se achica el original
en varias escalas y se busca la referencia con template matching (correlación normalizada).
La mejor escala y posición dan el rectángulo, que se convierte de vuelta a píxeles originales.

Uso: python tools/ubicarRecortes.py <referencia.png> <original> [<original> ...]
Imprime, por original, el puntaje y la caja (izquierda, arriba, derecha, abajo) en píxeles del original.
"""
import sys

import cv2
import numpy as np

ESCALAS_A_PROBAR = np.linspace(0.12, 1.2, 55)   # tamaño de la referencia respecto del original
PUNTAJE_MINIMO_CONFIABLE = 0.80                 # por debajo de esto, la coincidencia no es de fiar


def leer_en_gris(ruta):
    """Lee una imagen (PNG o JPEG, con o sin alfa) y la devuelve en escala de grises."""
    imagen = cv2.imdecode(np.fromfile(ruta, dtype=np.uint8), cv2.IMREAD_COLOR)
    return cv2.cvtColor(imagen, cv2.COLOR_BGR2GRAY)


PASO_DE_ESCALA_FINA = 0.0015                     # segunda pasada, alrededor de la mejor escala gruesa
MARGEN_DE_ESCALA_FINA = 0.03


def _mejor_en_escalas(original_gris, referencia_gris, escalas):
    """Prueba cada escala y devuelve (puntaje, caja, escala) de la mejor, con la caja en píxeles del original."""
    alto_ref, ancho_ref = referencia_gris.shape
    mejor = (-1.0, None, None)
    for escala in escalas:
        original_chico = cv2.resize(original_gris, None, fx=escala, fy=escala, interpolation=cv2.INTER_AREA)
        if original_chico.shape[0] < alto_ref or original_chico.shape[1] < ancho_ref:
            continue
        resultado = cv2.matchTemplate(original_chico, referencia_gris, cv2.TM_CCOEFF_NORMED)
        _, puntaje, _, (x, y) = cv2.minMaxLoc(resultado)
        if puntaje > mejor[0]:
            izquierda, arriba = x / escala, y / escala
            derecha, abajo = (x + ancho_ref) / escala, (y + alto_ref) / escala
            mejor = (puntaje, (round(izquierda), round(arriba), round(derecha), round(abajo)), escala)
    return mejor


def buscar_referencia(original_gris, referencia_gris):
    """
    Devuelve (puntaje, caja) de la mejor coincidencia, con la caja en píxeles del original.
    Hace una pasada gruesa y otra fina alrededor de la mejor escala, para que los bordes sean exactos.
    """
    _, _, escala_gruesa = _mejor_en_escalas(original_gris, referencia_gris, ESCALAS_A_PROBAR)
    if escala_gruesa is None:
        return -1.0, None
    escalas_finas = np.arange(escala_gruesa - MARGEN_DE_ESCALA_FINA,
                              escala_gruesa + MARGEN_DE_ESCALA_FINA, PASO_DE_ESCALA_FINA)
    puntaje, caja, _ = _mejor_en_escalas(original_gris, referencia_gris, escalas_finas)
    return puntaje, caja


if __name__ == "__main__":
    referencia = leer_en_gris(sys.argv[1])
    for ruta_original in sys.argv[2:]:
        puntaje, caja = buscar_referencia(leer_en_gris(ruta_original), referencia)
        confiable = "OK" if puntaje >= PUNTAJE_MINIMO_CONFIABLE else "DUDOSO"
        print(f"{puntaje:.3f} {confiable:7} {caja}  {ruta_original}")

"""Dibuja los maestros y los favicons de Gaucho con Pillow."""
from pathlib import Path

from PIL import Image, ImageDraw

COLORES = {
    ".": (0, 0, 0, 0),
    "#": "#0B0F14", "N": "#0A2B46", "B": "#133A51",
    "C": "#F4E2C4", "P": "#E8C69D", "T": "#B89572",
    "R": "#F3462E", "L": "#FF6A55", "D": "#9C2B24",
    "A": "#EAA540", "S": "#74ACDF", "M": "#523823", "H": "#9C6D3C",
    # Grises y verde obtenidos mezclando colores de la paleta.
    "g": "#696B6F", "G": "#A3A29A", "v": "#678D78",
}
DESTINO = Path(__file__).resolve().parents[1] / "docs" / "logo"

# Cada carácter representa un píxel. Se redibujaron ojos, controles y ruedas
# para conservarlos en la cuadrícula del favicon.
FAVICONS = {
    "frente": """
................
.....######.....
....#CCCCPP#....
...#CLLvvLLP#...
...#CRRARRTP#...
..##CCCCCCPP##..
.#G##CCCCPP##G#.
.#g#CNNNANP#Gg#.
.#g#CBCBBNP#Gg#.
.###CNNRNNP####.
...#CPPPPTP#....
...#CPTTTTP#....
..#CCCCCCPPP#...
..###########...
...#g#...#g#....
................
""",
    "sombrero": """
......#####.....
.....#HHHM#.....
.....#MMMN#.....
..###HHHHMMM##..
...##CCCCPP##...
...#CLLvLLP#....
..##CRRARRP##...
.#G##CCCCP##G#..
.#g#CNNNAP#Gg#..
.###CBSBBP####..
...#CNRNNP#.....
...#CPPPTP#.....
..#CCCCCPPP#....
..##########....
...#g#..#g#.....
................
""",
    "saludo": """
............#.#.
....######..#G#.
...#CCCCPP#.#g#.
..#CLLvLLP#.#G#.
..#CRRARRP##Gg#.
..#CCCCCCPP#G#..
.##CCCCPP##g#...
#G#CNNANP#G#....
#g#CSBBNP##.....
###CNRNNP#......
..#CPPPTP#......
..#CPTTTP#......
.#CCCCCPPP#.....
.##########.....
..#g#..#g#......
................
""",
}


def dibujar_maestro(nombre):
    """Traza las piezas con coordenadas enteras de la cuadrícula 32 × 32."""
    imagen = Image.new("RGBA", (32, 32))
    dibujo = ImageDraw.Draw(imagen)
    centro = 13 if nombre == "saludo" else 15

    def poligono(puntos, color, borde=None):
        dibujo.polygon(
            [(centro + x, y) for x, y in puntos],
            fill=COLORES[color], outline=COLORES[borde] if borde else None,
        )

    def rectangulo(x1, y1, x2, y2, color, borde=None):
        dibujo.rectangle(
            (centro + x1, y1, centro + x2, y2),
            fill=COLORES[color], outline=COLORES[borde] if borde else None,
        )

    # Brazos y pinzas, detrás de la carcasa.
    for lado in (-1, 1):
        if lado == 1 and nombre == "saludo":
            continue
        poligono([(lado*x, y) for x, y in [
            (8, 14), (12, 14), (13, 16), (13, 22), (9, 23), (8, 21)
        ]], "g", "#")
        rectangulo(lado * 11, 16, lado * 11, 20, "G")
        ajuste_pinza = 2 if nombre == "saludo" else 0
        poligono([(lado * x + ajuste_pinza, y) for x, y in [
            (9, 20), (13, 20), (14, 21), (14, 24), (11, 24),
            (11, 23), (10, 23), (10, 24), (8, 24), (8, 21)
        ]], "N", "#")
        extremos = sorted((lado * 10 + ajuste_pinza, lado * 12 + ajuste_pinza))
        rectangulo(extremos[0], 21, extremos[1], 21, "G")

    if nombre == "saludo":
        poligono([(8, 15), (11, 15), (13, 13), (13, 8), (17, 7),
                  (17, 14), (15, 17), (11, 20), (8, 19)], "g", "#")
        poligono([(10, 16), (14, 13), (14, 9), (15, 9),
                  (15, 14), (11, 17)], "G")
        poligono([(14, 2), (15, 2), (15, 5), (16, 5), (16, 2),
                  (17, 2), (17, 7), (16, 9), (14, 9), (13, 8),
                  (13, 4)], "N", "#")
        rectangulo(14, 4, 14, 6, "g")
        rectangulo(16, 3, 16, 5, "g")
        rectangulo(14, 7, 16, 7, "G")

    # Carcasa, ruedas y zócalo biselado del Omnibot.
    for x in (-8, 5):
        rectangulo(x, 27, x + 3, 30, "g", "#")
        rectangulo(x + 1, 30, x + 2, 30, "g")
    poligono([(-9, 13), (9, 13), (9, 24), (7, 26), (-7, 26),
              (-9, 24)], "P", "#")
    rectangulo(-8, 14, -7, 23, "C")
    rectangulo(7, 15, 8, 24, "T")
    for y in (23, 25):
        rectangulo(-6, y, 6, y, "T")
    poligono([(-9, 25), (9, 25), (11, 27), (11, 29), (-11, 29),
              (-11, 27)], "P", "#")
    rectangulo(-9, 26, 8, 26, "C")
    rectangulo(-10, 27, 10, 27, "T")

    # Panel de programación y casetera con dos carretes y un botón rojo.
    rectangulo(-6, 15, 6, 18, "N", "#")
    rectangulo(-5, 16, 0, 16, "v")
    rectangulo(-5, 17, 0, 17, "B")
    rectangulo(2, 16, 3, 16, "S")
    rectangulo(5, 16, 5, 16, "A")
    rectangulo(2, 17, 5, 17, "G")
    rectangulo(-6, 19, 6, 22, "N", "#")
    rectangulo(-4, 20, 4, 20, "G")
    rectangulo(-3, 20, -3, 20, "#")
    rectangulo(3, 20, 3, 20, "#")
    rectangulo(-4, 21, -2, 21, "R")
    rectangulo(0, 21, 4, 21, "B")

    # Cúpula, visor y cámara Raspberry. El flex cae sobre el borde frontal.
    poligono([(-4, 2), (4, 2), (7, 4), (8, 8), (10, 10),
              (11, 11), (11, 12), (9, 14), (-9, 14), (-11, 12),
              (-11, 11), (-8, 9), (-7, 5)], "C", "#")
    poligono([(4, 3), (6, 5), (7, 9), (10, 11), (9, 12),
              (3, 12), (5, 9)], "P")
    rectangulo(-8, 13, 8, 13, "T")
    poligono([(-5, 5), (5, 5), (7, 7), (7, 9), (6, 10),
              (-6, 10), (-7, 9), (-7, 7)], "N", "#")
    for x in (-4, 4):
        poligono([(x-1, 6), (x+1, 6), (x+2, 7), (x+2, 8),
                  (x+1, 9), (x-1, 9), (x-2, 8), (x-2, 7)], "D")
        rectangulo(x - 1, 7, x + 1, 8, "R")
        rectangulo(x - 1, 7, x, 7, "L")
    rectangulo(-1, 7, 1, 8, "v")
    rectangulo(0, 7, 0, 7, "#")
    rectangulo(0, 9, 0, 11, "A")
    rectangulo(0, 11, 1, 11, "A")

    if nombre == "sombrero":
        # Copa ladeada, cinta oscura y ala ancha sobre la cúpula.
        poligono([(-7, 4), (-6, 1), (-2, 1), (0, 2), (2, 1),
                  (5, 1), (7, 3), (8, 5), (12, 4), (13, 5),
                  (12, 6), (8, 7), (6, 6), (-6, 6), (-10, 7),
                  (-13, 6), (-13, 5)], "M", "#")
        poligono([(-6, 3), (-5, 2), (-2, 2), (0, 3), (3, 2),
                  (5, 2), (6, 3), (2, 4), (-5, 4)], "H")
        rectangulo(-6, 4, 6, 4, "N")
        rectangulo(-10, 5, -5, 5, "H")
        rectangulo(7, 5, 11, 5, "H")

    return imagen


def dibujar_favicon(grilla):
    filas = grilla.strip().splitlines()
    if len(filas) != 16 or any(len(fila) != 16 for fila in filas):
        raise ValueError("La grilla del favicon debe medir 16 × 16 píxeles")

    imagen = Image.new("RGBA", (16, 16))
    dibujo = ImageDraw.Draw(imagen)
    for y, fila in enumerate(filas):
        for x, simbolo in enumerate(fila):
            dibujo.point((x, y), fill=COLORES[simbolo])
    return imagen


def generar_logos():
    DESTINO.mkdir(parents=True, exist_ok=True)
    lado = 512
    hoja = Image.new("RGBA", (3 * lado, 2 * lado), COLORES["C"])
    ImageDraw.Draw(hoja).rectangle(
        (0, lado, hoja.width - 1, hoja.height - 1), fill=COLORES["#"],
    )

    for numero, (nombre, grilla) in enumerate(FAVICONS.items(), start=1):
        prefijo = f"opcion{numero}_{nombre}"
        maestro = dibujar_maestro(nombre)
        vista = maestro.resize((lado, lado), Image.Resampling.NEAREST)
        maestro.save(DESTINO / f"{prefijo}_32.png")
        dibujar_favicon(grilla).save(DESTINO / f"{prefijo}_16.png")
        vista.save(DESTINO / f"{prefijo}_512.png")

        x = (numero - 1) * lado
        hoja.alpha_composite(vista, (x, 0))
        hoja.alpha_composite(vista, (x, lado))

    hoja.save(DESTINO / "hojaDeOpciones.png")


if __name__ == "__main__":
    generar_logos()

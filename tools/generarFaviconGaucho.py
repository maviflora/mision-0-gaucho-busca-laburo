"""Genera los archivos del favicon de la web de Gaucho a partir del logo elegido.

Logo elegido por Mavi: opción 1 "Frente" (docs/logo/guiaDelLogo.md).

Produce en webGaucho/:
  - favicon-16.png y favicon-32.png: copias exactas de los PNG de docs/logo/.
  - favicon.ico: contiene los dos PNG tal cual (el formato ICO admite PNG como carga útil),
    así el pixel art no se reescala ni se suaviza.
  - apple-touch-icon.png: 180x180, sprite de 32x32 ampliado 5x por vecino más cercano
    (160x160) y centrado sobre crema TOMY, porque iOS no admite transparencia.

Uso, desde la raíz del proyecto:  python tools/generarFaviconGaucho.py
Solo el apple-touch-icon necesita Pillow; el resto usa la biblioteca estándar.
"""
import shutil
import struct
from pathlib import Path

RAIZ_DEL_PROYECTO = Path(__file__).resolve().parent.parent
CARPETA_DEL_LOGO = RAIZ_DEL_PROYECTO / "docs" / "logo"
CARPETA_DE_LA_WEB = RAIZ_DEL_PROYECTO / "webGaucho"

COLOR_CREMA_TOMY = (0xF4, 0xE2, 0xC4, 255)
MEDIDA_DEL_APPLE_TOUCH_ICON = 180
ESCALA_ENTERA_DEL_APPLE_TOUCH_ICON = 5  # 32 px * 5 = 160 px, centrado en 180


def leer_medidas_del_png(bytes_del_png: bytes) -> tuple[int, int]:
    """Devuelve (ancho, alto) leyéndolos del bloque IHDR (bytes 16 a 23, big endian)."""
    return struct.unpack(">II", bytes_del_png[16:24])


def armar_ico_con_pngs(rutas_de_pngs: list[Path]) -> bytes:
    """Arma un .ico que incrusta cada PNG sin tocarlo.

    Estructura: ICONDIR (6 bytes) + una ICONDIRENTRY (16 bytes) por imagen + los bytes de cada PNG.
    """
    imagenes = [ruta.read_bytes() for ruta in rutas_de_pngs]
    cabecera = struct.pack("<HHH", 0, 1, len(imagenes))  # reservado, tipo 1 = ícono, cantidad

    desplazamiento = len(cabecera) + 16 * len(imagenes)  # donde empieza el primer PNG
    entradas = b""
    for bytes_del_png in imagenes:
        ancho, alto = leer_medidas_del_png(bytes_del_png)
        entradas += struct.pack(
            "<BBBBHHII",
            ancho % 256,  # en ICO, 256 se escribe como 0
            alto % 256,
            0,  # cantidad de colores de la paleta (0 = sin paleta)
            0,  # reservado
            1,  # planos de color
            32,  # bits por píxel
            len(bytes_del_png),
            desplazamiento,
        )
        desplazamiento += len(bytes_del_png)

    return cabecera + entradas + b"".join(imagenes)


def crear_apple_touch_icon(ruta_del_sprite: Path, ruta_de_salida: Path) -> None:
    """Amplía el sprite por vecino más cercano y lo centra sobre un lienzo crema."""
    from PIL import Image  # import local: solo este paso necesita Pillow

    sprite = Image.open(ruta_del_sprite).convert("RGBA")
    medida_ampliada = sprite.width * ESCALA_ENTERA_DEL_APPLE_TOUCH_ICON
    sprite_ampliado = sprite.resize((medida_ampliada, medida_ampliada), Image.NEAREST)

    lienzo = Image.new("RGBA", (MEDIDA_DEL_APPLE_TOUCH_ICON,) * 2, COLOR_CREMA_TOMY)
    margen = (MEDIDA_DEL_APPLE_TOUCH_ICON - medida_ampliada) // 2
    lienzo.paste(sprite_ampliado, (margen, margen), sprite_ampliado)  # el sprite como máscara
    lienzo.convert("RGB").save(ruta_de_salida)


def main() -> None:
    ruta_16 = CARPETA_DE_LA_WEB / "favicon-16.png"
    ruta_32 = CARPETA_DE_LA_WEB / "favicon-32.png"
    shutil.copyfile(CARPETA_DEL_LOGO / "opcion1_frente_16.png", ruta_16)
    shutil.copyfile(CARPETA_DEL_LOGO / "opcion1_frente_32.png", ruta_32)
    (CARPETA_DE_LA_WEB / "favicon.ico").write_bytes(armar_ico_con_pngs([ruta_16, ruta_32]))
    crear_apple_touch_icon(ruta_32, CARPETA_DE_LA_WEB / "apple-touch-icon.png")
    print("Favicon generado en", CARPETA_DE_LA_WEB)


if __name__ == "__main__":
    main()

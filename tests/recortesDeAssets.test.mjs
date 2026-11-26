// Tests de los recortes y upscales de las fotos de assets/Gaucho/fotitos (spec: specs/recortesDeAssets.md).
// Las proporciones salen de las imágenes que Mavi mandó "como tienen que quedar".
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const CARPETA_FOTITOS = join(import.meta.dirname, '..', 'assets', 'Gaucho', 'fotitos');
const TOLERANCIA_DE_PROPORCION = 0.015; // 1,5 %: los bordes pueden diferir unos pocos píxeles
const PROPORCION_DE_UNA_CAPTURA_DE_CELULAR = 1179 / 2556; // lo que NO tiene que quedar

/** Lee ancho y alto de un PNG (cabecera IHDR) o de un JPEG (marcador SOF). */
function leerMedidas(ruta) {
  const bytes = readFileSync(ruta);
  if (bytes.toString('ascii', 1, 4) === 'PNG') {
    return { ancho: bytes.readUInt32BE(16), alto: bytes.readUInt32BE(20) };
  }
  let posicion = 2;
  while (posicion < bytes.length) {
    const marcador = bytes[posicion + 1];
    const largo = bytes.readUInt16BE(posicion + 2);
    const esMarcadorSof = marcador >= 0xc0 && marcador <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marcador);
    if (esMarcadorSof) return { alto: bytes.readUInt16BE(posicion + 5), ancho: bytes.readUInt16BE(posicion + 7) };
    posicion += 2 + largo;
  }
  throw new Error(`No se pudieron leer las medidas de ${ruta}`);
}

// archivo, proporción ancho/alto de la referencia de Mavi, ancho mínimo (alta resolución conservada),
// tolerancia de proporción opcional (por defecto TOLERANCIA_DE_PROPORCION)
const RECORTES = [
  ['arte/do_it_for_him_thecualcaexperience.png', 390 / 488, 1100],
  ['arte/gaucho_pixel_art_sombrero_y_saco.png', 275 / 376, 780],
  ['arte/la_creacion_del_gaucho_dibujo_facundo_burgos.png', 392 / 515, 1100],
  ['arte/merch_oficial_gaucho_omnibot_tomy_1984.png', 400 / 483, 1100],
  ['eventos/charla_fijacion_labitconf_gaucho_en_escenario.png', 353 / 449, 1000],
  ['eventos/hackware_jurados_gaucho_devrel.png', 313 / 333, 880],
  ['fotos/gaucho_campera_cuero_y_lentes_gonzalo_martinese.png', 303 / 301, 860],
  ['juego/gaucho_adventures_juego_sega_gonzalo_martinese.png', 394 / 479, 1100],
  // San Gaucho: recorte pegado a la estampita y upscale x2 (la foto original rondaba los 600 px de ancho).
  // Tolerancia propia (4 %): la estampita real, enderezada y sin 8 px de margen por lado, da 0,695 y la
  // referencia de Mavi 0,717; para llegar a 0,717 habría que cortar contenido o dejar mantel a la vista.
  ['arte/san_gaucho_estampita_patrono_del_codigo.jpeg', 274 / 382, 1000, 0.04],
];

for (const [archivo, proporcionEsperada, anchoMinimo, tolerancia = TOLERANCIA_DE_PROPORCION] of RECORTES) {
  test(`${archivo} está recortada como la referencia y sin perder resolución`, () => {
    const { ancho, alto } = leerMedidas(join(CARPETA_FOTITOS, archivo));
    const proporcion = ancho / alto;
    assert.ok(
      Math.abs(proporcion - proporcionEsperada) / proporcionEsperada < tolerancia,
      `proporción ${proporcion.toFixed(3)} distinta de la esperada ${proporcionEsperada.toFixed(3)} (${ancho}x${alto})`,
    );
    assert.notEqual(Math.round(proporcion * 1000), Math.round(PROPORCION_DE_UNA_CAPTURA_DE_CELULAR * 1000), 'sigue siendo captura de pantalla');
    assert.ok(ancho >= anchoMinimo, `ancho ${ancho} menor que ${anchoMinimo}: se perdió resolución`);
  });
}

test('el cartel de neón de Paisanos tiene upscale x2', () => {
  const { ancho, alto } = leerMedidas(join(CARPETA_FOTITOS, 'fotos', 'gaucho_robot_cartel_neon_paisanos_bandera.png'));
  assert.deepEqual([ancho, alto], [928 * 2, 819 * 2]);
});

// Tests de las 3 opciones de logo de Gaucho en 16 bits (spec: specs/logoGaucho16bits.md).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const CARPETA_LOGO = join(import.meta.dirname, '..', 'docs', 'logo');
const CANTIDAD_DE_OPCIONES = 3;
const TIPO_DE_COLOR_RGBA = 6; // IHDR: color type 6 = RGB con canal alfa (fondo transparente)

/** Lee ancho, alto y tipo de color de un PNG desde su cabecera IHDR. */
function leerCabeceraPng(ruta) {
  const bytes = readFileSync(ruta);
  assert.equal(bytes.toString('ascii', 1, 4), 'PNG', `${ruta} no es un PNG`);
  return { ancho: bytes.readUInt32BE(16), alto: bytes.readUInt32BE(20), tipoDeColor: bytes[25] };
}

/** Busca el archivo de la opción N con el sufijo dado (por ejemplo "_32.png"). */
function archivoDeOpcion(numero, sufijo) {
  if (!existsSync(CARPETA_LOGO)) return undefined;
  return readdirSync(CARPETA_LOGO).find((nombre) => nombre.startsWith(`opcion${numero}_`) && nombre.endsWith(sufijo));
}

test('existe la carpeta docs/logo con la guía y la hoja de opciones', () => {
  assert.ok(existsSync(join(CARPETA_LOGO, 'guiaDelLogo.md')), 'falta guiaDelLogo.md');
  assert.ok(existsSync(join(CARPETA_LOGO, 'hojaDeOpciones.png')), 'falta hojaDeOpciones.png');
});

for (let numero = 1; numero <= CANTIDAD_DE_OPCIONES; numero += 1) {
  test(`la opción ${numero} trae sprite 32, favicon 16 y vista 512, con fondo transparente`, () => {
    const medidasEsperadas = { '_32.png': 32, '_16.png': 16, '_512.png': 512 };
    for (const [sufijo, lado] of Object.entries(medidasEsperadas)) {
      const nombre = archivoDeOpcion(numero, sufijo);
      assert.ok(nombre, `falta opcion${numero}_*${sufijo}`);
      const { ancho, alto, tipoDeColor } = leerCabeceraPng(join(CARPETA_LOGO, nombre));
      assert.deepEqual([ancho, alto], [lado, lado], `${nombre} debe ser ${lado}x${lado}`);
      assert.equal(tipoDeColor, TIPO_DE_COLOR_RGBA, `${nombre} necesita canal alfa (fondo transparente)`);
    }
  });
}

test('las 3 opciones tienen nombres distintos (ideas distintas)', () => {
  const nombres = [1, 2, 3].map((numero) => archivoDeOpcion(numero, '_32.png'));
  assert.equal(new Set(nombres).size, CANTIDAD_DE_OPCIONES);
});

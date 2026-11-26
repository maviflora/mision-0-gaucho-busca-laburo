// Tests del brief de diseños del mousepad de Gaucho (120x60 cm).
// Verifican que los 6 diseños estén completos antes de mandarlos a Codex.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const RAIZ_PROYECTO = join(import.meta.dirname, '..');
const RUTA_BRIEFS = join(RAIZ_PROYECTO, 'docs', 'mousepad', 'disenios.md');
const RUTA_SPEC = join(RAIZ_PROYECTO, 'specs', 'mousepadGaucho.md');
const CANTIDAD_DISENIOS = 6;
const MINIMO_EASTER_EGGS_POR_DISENIO = 6;

/** Devuelve el texto de cada sección "## Diseño N" del archivo de briefs. */
function leerSeccionesDeDisenio() {
  const texto = readFileSync(RUTA_BRIEFS, 'utf8');
  return texto.split(/^## Diseño \d/m).slice(1);
}

test('existen la spec y el archivo de briefs', () => {
  assert.ok(existsSync(RUTA_SPEC), 'falta specs/mousepadGaucho.md');
  assert.ok(existsSync(RUTA_BRIEFS), 'falta docs/mousepad/disenios.md');
});

test('la spec fija el tamaño real 120x60 cm y la proporción 2:1', () => {
  const spec = readFileSync(RUTA_SPEC, 'utf8');
  assert.match(spec, /120\s*cm\s*x\s*60\s*cm/i);
  assert.match(spec, /2:1/);
});

test('hay exactamente 6 diseños', () => {
  assert.equal(leerSeccionesDeDisenio().length, CANTIDAD_DISENIOS);
});

test('cada diseño pide tiras de comic de fondo y tiene un prompt', () => {
  for (const seccion of leerSeccionesDeDisenio()) {
    assert.match(seccion, /tiras? de c[oó]mic/i);
    assert.match(seccion, /\*\*Prompt para Codex:\*\*/);
  }
});

test('cada diseño tiene al menos 6 easter eggs', () => {
  for (const seccion of leerSeccionesDeDisenio()) {
    const bloque = seccion.split('**Easter eggs:**')[1] ?? '';
    const cantidad = (bloque.match(/^- /gm) ?? []).length;
    assert.ok(cantidad >= MINIMO_EASTER_EGGS_POR_DISENIO, `solo ${cantidad} easter eggs`);
  }
});

test('todas las imágenes de referencia citadas existen en el proyecto', () => {
  const texto = readFileSync(RUTA_BRIEFS, 'utf8');
  const rutas = [...texto.matchAll(/`((?:assets|docs)\/[^`]+\.(?:png|jpe?g))`/g)].map((m) => m[1]);
  assert.ok(rutas.length > 0, 'no se citó ninguna referencia');
  for (const ruta of rutas) {
    assert.ok(existsSync(join(RAIZ_PROYECTO, ruta)), `no existe ${ruta}`);
  }
});

// Tests de las 5 propuestas nuevas (ronda 2) de la página de Gaucho: docs/designKits/propuestas/paginaGaucho.
// Verifican reglas objetivas de la spec: modo claro, paleta, ids de sección, accesibilidad.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const CARPETA_PROPUESTAS = join(
  import.meta.dirname, '..', 'docs', 'designKits', 'propuestas', 'paginaGaucho',
);
const CANTIDAD_ESPERADA = 5;
const IDS_DE_SECCION_OBLIGATORIOS = ['perfil', 'cinta', 'entrevista', 'taller'];
const MINIMO_TOKENS_DE_PALETA = 4;

/** Devuelve { nombre, html } de cada propuesta nueva (propuesta2_ en adelante). */
function leerPropuestasNuevas() {
  return readdirSync(CARPETA_PROPUESTAS)
    .filter((nombre) => /^propuesta[1-5]_.+\.html$/.test(nombre))
    .map((nombre) => ({ nombre, html: readFileSync(join(CARPETA_PROPUESTAS, nombre), 'utf8') }));
}

test('hay exactamente 5 propuestas nuevas', () => {
  assert.equal(leerPropuestasNuevas().length, CANTIDAD_ESPERADA);
});

test('cada propuesta es modo claro y accesible', () => {
  for (const { nombre, html } of leerPropuestasNuevas()) {
    assert.match(html, /<html[^>]*lang="es"/, `${nombre}: falta lang="es"`);
    assert.match(html, /color-scheme:\s*light/, `${nombre}: falta color-scheme: light`);
    assert.match(html, /prefers-reduced-motion/, `${nombre}: no respeta movimiento reducido`);
    assert.match(html, /<meta[^>]+viewport/, `${nombre}: falta viewport`);
  }
});

test('cada propuesta usa tokens de la paleta de Gaucho', () => {
  for (const { nombre, html } of leerPropuestasNuevas()) {
    const tokensUsados = new Set(html.match(/--gaucho-[a-z-]+/g) ?? []);
    assert.ok(tokensUsados.size >= MINIMO_TOKENS_DE_PALETA, `${nombre}: pocos tokens --gaucho-*`);
  }
});

test('cada propuesta conserva las secciones de la maqueta', () => {
  for (const { nombre, html } of leerPropuestasNuevas()) {
    for (const id of IDS_DE_SECCION_OBLIGATORIOS) {
      assert.match(html, new RegExp(`id="${id}"`), `${nombre}: falta id="${id}"`);
    }
  }
});

test('no cargan scripts ni estilos externos salvo Google Fonts', () => {
  for (const { nombre, html } of leerPropuestasNuevas()) {
    const externos = html.match(/(?:src|href)="https?:\/\/[^"]+"/g) ?? [];
    const noPermitidos = externos.filter((url) => !/fonts\.(googleapis|gstatic)\.com/.test(url));
    assert.deepEqual(noPermitidos, [], `${nombre}: recursos externos no permitidos`);
  }
});

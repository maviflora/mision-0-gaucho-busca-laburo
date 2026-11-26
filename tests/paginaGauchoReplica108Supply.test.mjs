// Tests de la réplica del estilo de 108 Supply con datos de Gaucho.
// Spec: specs/paginaGauchoReplica108Supply.md
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';

const RUTA_PAGINA = join(
  import.meta.dirname, '..', 'docs', 'designKits', 'propuestas', 'paginaGaucho',
  'replica108Supply_gaucho.html',
);
const IDS_DE_SECCION_OBLIGATORIOS = ['perfil', 'cinta', 'taller', 'entrevista'];
const MINIMO_TOKENS_DE_PALETA = 6;

const html = existsSync(RUTA_PAGINA) ? readFileSync(RUTA_PAGINA, 'utf8') : '';

test('la página existe', () => {
  assert.ok(html.length > 0, 'falta replica108Supply_gaucho.html');
});

test('es accesible: idioma, viewport y movimiento reducido', () => {
  assert.match(html, /<html[^>]*lang="es"/);
  assert.match(html, /<meta[^>]+viewport/);
  assert.match(html, /prefers-reduced-motion/);
});

test('conserva las secciones de la maqueta', () => {
  for (const id of IDS_DE_SECCION_OBLIGATORIOS) {
    assert.match(html, new RegExp(`id="${id}"`), `falta id="${id}"`);
  }
});

test('usa tokens de la paleta de Gaucho, incluida la lima', () => {
  const tokensUsados = new Set(html.match(/--gaucho-[a-z-]+/g) ?? []);
  assert.ok(tokensUsados.size >= MINIMO_TOKENS_DE_PALETA, 'pocos tokens --gaucho-*');
  assert.ok(tokensUsados.has('--gaucho-lima'), 'falta --gaucho-lima');
});

test('replica los rasgos de 108 Supply: nav en píldoras, panel claro, aviso flotante', () => {
  assert.match(html, /class="[^"]*\bnav-pildoras\b/, 'falta la navegación en píldoras');
  assert.match(html, /class="[^"]*\bpanel-claro\b/, 'falta el panel claro redondeado');
  assert.match(html, /class="[^"]*\baviso-flotante\b/, 'falta el aviso flotante inferior');
  assert.match(html, /Geist Mono/, 'falta la tipografía mono de las etiquetas');
});

test('no copia contenido ni marca de 108 Supply', () => {
  assert.doesNotMatch(html, /Black Friday|Bailey Hart|Mockup Gem|Get All Access|\$\d+/);
});

test('no carga recursos externos salvo Google Fonts', () => {
  const externos = html.match(/(?:src|href)="https?:\/\/[^"]+"/g) ?? [];
  const noPermitidos = externos.filter((url) => !/fonts\.(googleapis|gstatic)\.com/.test(url));
  assert.deepEqual(noPermitidos, []);
});

test('todas las imágenes locales existen en disco', () => {
  const rutas = [...html.matchAll(/src="(\.\.\/[^"]+)"/g)].map((coincidencia) => coincidencia[1]);
  assert.ok(rutas.length >= 5, 'se esperaban al menos 5 imágenes');
  for (const ruta of rutas) {
    assert.ok(existsSync(join(dirname(RUTA_PAGINA), ruta)), `no existe: ${ruta}`);
  }
});

test('las imágenes tienen texto alternativo', () => {
  const imagenes = html.match(/<img\b[^>]*>/g) ?? [];
  for (const etiqueta of imagenes) {
    assert.match(etiqueta, /alt="[^"]+"/, `imagen sin alt: ${etiqueta}`);
  }
});

test('incluye el contenido real de Gaucho', () => {
  for (const dato of ['Omnibot', 'Paisanos', 'Hackware', 'LABITCONF', 'Wallbit', 'cvFalso']) {
    assert.ok(html.includes(dato), `falta: ${dato}`);
  }
});

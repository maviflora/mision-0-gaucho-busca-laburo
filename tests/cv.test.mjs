// Tests del CV real de Gaucho (spec: specs/cvGaucho.md). El CV falso se archivó: ver docs/designKits/archivo/cv/.
// Se corren con: node --test tests/
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const carpetaDelCv = resolve(dirname(fileURLToPath(import.meta.url)), '../docs/designKits/propuestas/cv');
const rutaCvReal = resolve(carpetaDelCv, 'cvReal.html');
const rutaEstilos = resolve(carpetaDelCv, 'cv.css');

/** Lee un archivo de texto; devuelve '' si todavía no existe, así los tests fallan con un mensaje claro. */
const leerTexto = (ruta) => (existsSync(ruta) ? readFileSync(ruta, 'utf8') : '');

const cvReal = leerTexto(rutaCvReal);
const estilos = leerTexto(rutaEstilos);

/** Saca las etiquetas HTML de un fragmento y deja solo el texto. */
const textoPlano = (html) => html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();

/** Devuelve el texto de todos los <h2> de una página, en orden. */
const titulosDeSeccion = (html) =>
  [...html.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/g)].map((coincidencia) => textoPlano(coincidencia[1]));

const SECCIONES_DEL_CV = ['Perfil', 'Experiencia', 'Formación', 'Habilidades', 'Idiomas', 'Contacto'];

// ---------- R1 ----------
test('R1: existen el CV real y sus estilos', () => {
  assert.ok(existsSync(rutaCvReal), 'falta docs/designKits/propuestas/cv/cvReal.html');
  assert.ok(existsSync(rutaEstilos), 'falta docs/designKits/propuestas/cv/cv.css');
});

// ---------- R2 ----------
for (const [nombre, html] of [['real', cvReal]]) {
  test(`R2: el CV ${nombre} tiene lang, viewport, estilos compartidos y un único h1 con Gaucho`, () => {
    assert.match(html, /<html[^>]*lang="es-AR"/);
    assert.match(html, /<meta name="viewport"/);
    assert.match(html, /<link rel="stylesheet" href="cv\.css">/);
    const titulosH1 = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)];
    assert.equal(titulosH1.length, 1, 'debe haber exactamente un h1');
    assert.match(textoPlano(titulosH1[0][1]), /Gaucho/i);
  });
}

// ---------- R3 ----------
test('R3: el CV real tiene las secciones esperadas, en orden', () => {
  assert.deepEqual(titulosDeSeccion(cvReal), SECCIONES_DEL_CV);
});

// ---------- R4 ----------
test('R4: el CV real incluye las 14 experiencias del inventario (sección 15.3)', () => {
  const experienciasEsperadas = [
    'Misión Despertar',
    'SLA Live',
    'El Origen',
    'Gaucho Adventures',
    'Hackware',
    'React BA',
    'opencode',
    'LABITCONF',
    'Gauchomentary',
    'La Ofi',
    'Wallbit',
    'Loly',
    'Ato',
    'San Gaucho',
  ];
  const textoDelCv = textoPlano(cvReal);
  for (const experiencia of experienciasEsperadas) {
    assert.ok(textoDelCv.includes(experiencia), `falta la experiencia "${experiencia}" en el CV real`);
  }
});

// ---------- R5 ----------
test('R5: el CV real linkea a X y LinkedIn reales y no tiene datos inventados', () => {
  assert.ok(cvReal.includes('https://x.com/gauchopaisano'));
  assert.ok(cvReal.includes('https://www.linkedin.com/in/gaucho-paisano/'));
  assert.doesNotMatch(cvReal, /INVENTADO/i);
  assert.doesNotMatch(cvReal, /80\s?%/, 'el 80% del perfil B es un logro inventado');
});

// ---------- R6 ----------
test('R6: el CV real no contiene el corte del robot', () => {
  assert.doesNotMatch(cvReal, /data-pieza/);
  assert.doesNotMatch(cvReal, /<svg/);
});

// ---------- R10 ----------
for (const [nombre, html] of [['real', cvReal]]) {
  test(`R10: accesibilidad del CV ${nombre} (alt, SVG con título, imágenes que existen)`, () => {
    for (const etiquetaImg of html.match(/<img[^>]*>/g) ?? []) {
      const alt = etiquetaImg.match(/alt="([^"]*)"/);
      assert.ok(alt && alt[1].trim() !== '', `img sin alt: ${etiquetaImg}`);
      const origen = etiquetaImg.match(/src="([^"]+)"/)?.[1];
      assert.ok(origen && !/^https?:/.test(origen), 'las imágenes deben ser locales');
      assert.ok(existsSync(resolve(carpetaDelCv, origen)), `la imagen no existe: ${origen}`);
    }
    for (const svg of html.match(/<svg[\s\S]*?<\/svg>/g) ?? []) {
      assert.match(svg, /<svg[^>]*role="img"/);
      assert.match(svg, /<title[^>]*>[^<]+<\/title>/);
    }
  });
}

test('R10: el CV real muestra al menos una foto de Gaucho', () => {
  assert.match(cvReal, /<img[^>]*src="[^"]*gaucho_robot_cartel_neon_paisanos_bandera\.png"/);
});

// ---------- R11 ----------
test('R11: los estilos tienen reglas de impresión y respetan reduced-motion', () => {
  assert.match(estilos, /@media print/);
  if (/animation|transition/.test(estilos)) {
    assert.match(estilos, /prefers-reduced-motion/);
  }
});

// ---------- R12 ----------
for (const [nombre, html] of [['real', cvReal]]) {
  test(`R12: el CV ${nombre} no usa JavaScript ni recursos externos salvo las fuentes`, () => {
    assert.doesNotMatch(html, /<script/i);
    const recursosExternos = html.match(/(?:src|href)="https?:[^"]+"/g) ?? [];
    for (const recurso of recursosExternos) {
      const esFuente = recurso.includes('fonts.googleapis.com');
      const esLinkDePersona = /href="https:\/\/(x\.com|www\.linkedin\.com|www\.instagram\.com|www\.youtube\.com|ofi\.paisanos\.io|gaucho-studio\.vercel\.app|www\.paisanos\.io)/.test(recurso);
      assert.ok(esFuente || esLinkDePersona, `recurso externo no previsto: ${recurso}`);
    }
  });
}

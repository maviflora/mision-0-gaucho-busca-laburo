// Tests de las 3 variantes del póster del CV falso (spec: specs/cvGaucho.md, sección "Variantes del póster").
// Se corren con: node --test tests/
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const carpetaDelCv = resolve(dirname(fileURLToPath(import.meta.url)), '../docs/designKits/propuestas/cv');

/** Las tres variantes que se piden: nombre de archivo y qué las distingue. */
const VARIANTES = [
  { archivo: 'cvFalsoV1_cuadroKnolling.html', idea: 'cuadro enmarcado con piezas apoyadas en grilla (knolling)' },
  { archivo: 'cvFalsoV2_explosionNoche.html', idea: 'vista explotada en diagonal sobre azul Omnibot de noche' },
  { archivo: 'cvFalsoV3_afichePorDentro.html', idea: 'cuadro con afiche TOMY: vista explotada en columna y ficha de specs' },
];

const IDS_DE_PIEZAS = ['ojos', 'camara', 'esp32', 'driver', 'motores', 'raspberry', 'respeaker', 'parlante'];
const SECCIONES_DEL_CV = ['Perfil', 'Experiencia', 'Formación', 'Habilidades', 'Idiomas', 'Contacto'];

const leerTexto = (ruta) => (existsSync(ruta) ? readFileSync(ruta, 'utf8') : '');
const textoPlano = (html) => html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
const titulosDeSeccion = (html) =>
  [...html.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/g)].map((coincidencia) => textoPlano(coincidencia[1]));
const tituloDePagina = (html) => textoPlano(html.match(/<title>([\s\S]*?)<\/title>/)?.[1] ?? '');

const cvReal = leerTexto(resolve(carpetaDelCv, 'cvReal.html'));

for (const { archivo, idea } of VARIANTES) {
  const html = leerTexto(resolve(carpetaDelCv, archivo));

  test(`${archivo}: existe (${idea})`, () => {
    assert.ok(existsSync(resolve(carpetaDelCv, archivo)), `falta ${archivo}`);
  });

  test(`${archivo}: mantiene el disfraz de CV (mismo título y mismas secciones que el real)`, () => {
    assert.equal(tituloDePagina(html), tituloDePagina(cvReal));
    assert.deepEqual(titulosDeSeccion(html), SECCIONES_DEL_CV);
    assert.match(html, /<link rel="stylesheet" href="cv\.css">/);
  });

  test(`${archivo}: el encabezado muestra la foto del robot cerrado, como el CV real`, () => {
    assert.match(html, /<img[^>]*src="[^"]*gaucho_robot_cartel_neon_paisanos_bandera\.png"/);
  });

  test(`${archivo}: dibuja las 8 piezas numeradas y coinciden con la leyenda`, () => {
    const dibujo = html.match(/<svg[\s\S]*?<\/svg>/)?.[0] ?? '';
    assert.notEqual(dibujo, '', 'falta el SVG del póster');
    const numerosDeLaLeyenda = Object.fromEntries(
      [...html.matchAll(/<li[^>]*data-pieza="([^"]+)"[^>]*>[\s\S]*?class="numero-pieza"[^>]*>(\d+)</g)].map(
        (coincidencia) => [coincidencia[1], coincidencia[2]],
      ),
    );
    for (const id of IDS_DE_PIEZAS) {
      const pieza = dibujo.match(new RegExp(`<g[^>]*data-pieza="${id}"[^>]*>([\\s\\S]*?)</g>`));
      assert.ok(pieza, `la pieza "${id}" no está dibujada`);
      assert.ok(numerosDeLaLeyenda[id], `la pieza "${id}" no está en la leyenda`);
      assert.match(textoPlano(pieza[1]), new RegExp(`(^|\\s)${numerosDeLaLeyenda[id]}(\\s|$)`), `falta el número de "${id}"`);
    }
  });

  test(`${archivo}: el póster tiene líneas guía (una por pieza) y es accesible`, () => {
    const dibujo = html.match(/<svg[\s\S]*?<\/svg>/)?.[0] ?? '';
    assert.match(dibujo, /<svg[^>]*role="img"/);
    assert.match(dibujo, /<title[^>]*>[^<]+<\/title>/);
    for (const id of IDS_DE_PIEZAS) {
      const pieza = dibujo.match(new RegExp(`<g[^>]*data-pieza="${id}"[^>]*>([\\s\\S]*?)</g>`))?.[1] ?? '';
      assert.match(pieza, /class="guia"/, `la pieza "${id}" no tiene línea guía`);
    }
    assert.equal((html.match(/<svg/g) ?? []).length, 1, 'debe haber un único SVG en la página');
  });

  test(`${archivo}: sin JavaScript ni recursos externos salvo fuentes`, () => {
    assert.doesNotMatch(html, /<script/i);
    for (const recurso of html.match(/(?:src|href)="https?:[^"]+"/g) ?? []) {
      assert.ok(recurso.includes('fonts.googleapis.com'), `recurso externo no previsto: ${recurso}`);
    }
  });
}

test('las tres variantes son distintas entre sí', () => {
  const dibujos = VARIANTES.map(({ archivo }) => leerTexto(resolve(carpetaDelCv, archivo)).match(/<svg[\s\S]*?<\/svg>/)?.[0] ?? '');
  assert.equal(new Set(dibujos).size, 3);
});

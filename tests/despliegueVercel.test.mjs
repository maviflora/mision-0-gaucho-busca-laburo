// Tests del despliegue en Vercel (spec: specs/despliegueVercel.md).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join, normalize } from 'node:path';

const RAIZ_DEL_REPO = join(import.meta.dirname, '..');
const RUTA_DE_LA_PAGINA = join(RAIZ_DEL_REPO, 'webGaucho', 'index.html');

/** Lee las reglas de .vercelignore (sin comentarios ni líneas vacías). */
function leerReglasDeVercelignore() {
  const ruta = join(RAIZ_DEL_REPO, '.vercelignore');
  if (!existsSync(ruta)) return [];
  return readFileSync(ruta, 'utf8').split(/\r?\n/).map((linea) => linea.trim()).filter((linea) => linea && !linea.startsWith('#'));
}

/** Devuelve las rutas (desde la raíz del repo) de todos los archivos locales que usa la página. */
function archivosQueUsaLaPagina() {
  const html = readFileSync(RUTA_DE_LA_PAGINA, 'utf8');
  const relativas = [...html.matchAll(/(?:src|href)="((?!https?:|#|data:|mailto:)[^"]+)"/g)].map((m) => m[1]);
  return relativas
    .filter((ruta) => /\.(png|jpe?g|ico|svg|webp|gif)$/i.test(ruta))
    .map((ruta) => normalize(join('webGaucho', ruta)).replaceAll('\\', '/'));
}

/** Una regla simple (carpeta o archivo, con comodín *) ¿deja afuera esta ruta? */
function laReglaIgnoraLaRuta(regla, ruta) {
  const sinBarraFinal = regla.replace(/\/$/, '');
  const patron = new RegExp(`^${sinBarraFinal.replace(/[.+?^${}()|[\]\\]/g, '\\$&').replace(/\*/g, '[^/]*')}(/|$)`);
  return patron.test(ruta);
}

/** Comprueba que cada carpeta y archivo de la ruta existe con las mayúsculas EXACTAS (Vercel corre en Linux). */
function existeConMayusculasExactas(rutaDesdeLaRaiz) {
  let carpetaActual = RAIZ_DEL_REPO;
  for (const segmento of rutaDesdeLaRaiz.split('/')) {
    if (!readdirSync(carpetaActual).includes(segmento)) return false;
    carpetaActual = join(carpetaActual, segmento);
  }
  return true;
}

test('todas las rutas de la página coinciden en mayúsculas con los archivos reales (Linux distingue)', () => {
  const archivos = archivosQueUsaLaPagina();
  assert.ok(archivos.length >= 15);
  for (const archivo of archivos) {
    assert.ok(existeConMayusculasExactas(archivo), `${archivo}: las mayúsculas no coinciden con el archivo real, daría 404 en Vercel`);
  }
});

test('vercel.json redirige la raíz a /webGaucho/', () => {
  const ruta = join(RAIZ_DEL_REPO, 'vercel.json');
  assert.ok(existsSync(ruta), 'falta vercel.json');
  const { redirects = [], rewrites = [] } = JSON.parse(readFileSync(ruta, 'utf8'));
  const redireccionDeLaRaiz = redirects.find((r) => r.source === '/');
  assert.ok(redireccionDeLaRaiz, 'falta la redirección de "/"');
  assert.equal(redireccionDeLaRaiz.destination, '/webGaucho/');
  // Un rewrite de "/" rompería las rutas relativas del favicon
  assert.ok(!rewrites.some((r) => r.source === '/'), 'no usar rewrite en "/": rompe las rutas relativas');
});

test('.vercelignore deja afuera notas, docs, tests y videos pesados', () => {
  const reglas = leerReglasDeVercelignore();
  for (const queDebeIgnorar of ['docs/notasDeMavi.md', 'specs/webGaucho.md', 'tests/webGaucho.test.mjs', 'tools/recortarAssets.py',
    'assets/Gaucho/videitos/gaucho_youtube_el_robot_de_los_80s_que_cobro_vida.mp4', 'CLAUDE.md']) {
    assert.ok(reglas.some((regla) => laReglaIgnoraLaRuta(regla, queDebeIgnorar)), `.vercelignore debería ignorar ${queDebeIgnorar}`);
  }
});

test('.vercelignore NO ignora nada de lo que usa la página', () => {
  const reglas = leerReglasDeVercelignore();
  const archivos = archivosQueUsaLaPagina();
  assert.ok(archivos.length >= 15, `se esperaban al menos 15 imágenes, hay ${archivos.length}`);
  for (const archivo of archivos) {
    assert.ok(existsSync(join(RAIZ_DEL_REPO, archivo)), `la página usa ${archivo} pero no existe`);
    const regla = reglas.find((r) => laReglaIgnoraLaRuta(r, archivo));
    assert.equal(regla, undefined, `${archivo} lo usa la página pero lo ignora la regla "${regla}"`);
  }
});

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
const IDS_DE_SECCION_OBLIGATORIOS = ['perfil', 'cinta', 'comunidad', 'taller', 'entrevista'];
const MINIMO_TOKENS_DE_PALETA = 8;
// Hex de docs/designKits/paletas.md (la lima queda afuera a propósito).
const HEX_DE_LA_PALETA = [
  '#0B0F14', '#0A2B46', '#133A51', '#F4E2C4', '#E8C69D', '#F3462E', '#FF6A55',
  '#EAA540', '#74ACDF', '#F28409', '#523823', '#000320',
];

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

test('hay una sección "Comunidad e historia" justo debajo de Laburos', () => {
  const posicionCinta = html.indexOf('id="cinta"');
  const posicionComunidad = html.indexOf('id="comunidad"');
  const posicionTaller = html.indexOf('id="taller"');
  assert.ok(posicionComunidad > posicionCinta, 'comunidad debe ir después de cinta');
  assert.ok(posicionComunidad < posicionTaller, 'comunidad debe ir antes de taller');
  assert.match(html, /<a[^>]+href="#comunidad"/, 'falta el link a #comunidad en la navegación');
  assert.match(html, /Comunidad e historia/);
});

test('la comunidad tiene pelis, juegos, arte de fans y la chinita', () => {
  const comunidad = html.slice(html.indexOf('id="comunidad"'), html.indexOf('id="taller"'));
  for (const dato of ['Gaucho: El Origen', 'Gauchomentary', 'Gaucho Adventures', 'San Gaucho', 'Facundo Burgos', 'GauchoStudio', 'chinita']) {
    assert.ok(comunidad.includes(dato), `falta en comunidad: ${dato}`);
  }
});

test('los laburos y la comunidad están separados', () => {
  const laburos = html.slice(html.indexOf('id="cinta"'), html.indexOf('id="comunidad"'));
  for (const dato of ['Gaucho Adventures', 'San Gaucho', 'Gauchomentary']) {
    assert.ok(!laburos.includes(dato), `${dato} es comunidad, no un laburo`);
  }
});

test('la foto con la chinita es un lugar reservado, no una imagen inventada', () => {
  const reservado = html.match(/<[^>]+class="[^"]*\bfoto-pendiente\b[^"]*"[^>]*>[\s\S]*?chinita/);
  assert.ok(reservado, 'falta el lugar reservado .foto-pendiente para la chinita');
  assert.doesNotMatch(html, /<img[^>]+chinita/i, 'no hay foto real de la chinita todavía');
});

test('las tarjetas de laburos se adelantan al pasar el mouse, solo con movimiento permitido', () => {
  const estilos = html.match(/<style>([\s\S]*?)<\/style>/)[1];
  const bloqueMovimientoPermitido = estilos.match(/@media \(prefers-reduced-motion: no-preference\)\s*{([\s\S]*?)\n    }\n/)[1];
  assert.match(bloqueMovimientoPermitido, /\.ficha:hover[^{]*{[^}]*transform:[^;]*scale/, 'falta el hover con transform en .ficha');
  assert.match(bloqueMovimientoPermitido, /\.ficha:hover[^{]*\.ficha-marco[^{]*{[^}]*box-shadow/, 'falta la sombra al adelantarse');
  assert.match(bloqueMovimientoPermitido, /\.ficha\s*{[^}]*transition/, 'falta la transición suave');
  // El carrusel necesita aire arriba y abajo para que la tarjeta elevada no quede recortada
  assert.match(estilos, /\.carrusel\s*{[^}]*padding-block/, 'el carrusel recorta la tarjeta elevada');
});

test('usa los tokens principales de la paleta de Gaucho', () => {
  const tokensUsados = new Set(html.match(/--gaucho-[a-z-]+/g) ?? []);
  assert.ok(tokensUsados.size >= MINIMO_TOKENS_DE_PALETA, 'pocos tokens --gaucho-*');
  for (const token of ['--gaucho-taller', '--gaucho-azul-omnibot', '--gaucho-crema-tomy', '--gaucho-rojo-ojos']) {
    assert.ok(tokensUsados.has(token), `falta ${token}`);
  }
});

test('todos los colores salen de la paleta de Gaucho (sin hex sueltos ni lima)', () => {
  const estilos = html.match(/<style>([\s\S]*?)<\/style>/)[1];
  const bloqueRaiz = estilos.match(/:root\s*{([\s\S]*?)}/)[1];
  const estilosSinRaiz = estilos.replace(bloqueRaiz, '');
  assert.deepEqual(estilosSinRaiz.match(/#[0-9a-fA-F]{3,8}\b/g) ?? [], [], 'hex suelto fuera de :root');
  const hexDefinidos = (bloqueRaiz.match(/#[0-9a-fA-F]{6}\b/g) ?? []).map((hex) => hex.toUpperCase());
  const desconocidos = hexDefinidos.filter((hex) => !HEX_DE_LA_PALETA.includes(hex));
  assert.deepEqual(desconocidos, [], 'hex que no está en docs/designKits/paletas.md');
  assert.doesNotMatch(html, /--gaucho-lima/, 'la lima es de 108 Supply, no de la paleta de la página');
});

test('es clara como el CV real: papel crema, no fondo oscuro', () => {
  const estilos = html.match(/<style>([\s\S]*?)<\/style>/)[1];
  const reglaDelBody = estilos.match(/\n\s*body\s*{([\s\S]*?)}/)[1];
  assert.match(estilos, /color-scheme:\s*light/, 'falta color-scheme: light');
  assert.match(reglaDelBody, /background[^;]*--gaucho-crema-tomy/, 'el body debe ser crema TOMY');
  assert.doesNotMatch(reglaDelBody, /background[^;]*--gaucho-(taller|azul-omnibot|noche)/, 'el body no puede ser oscuro');
  assert.match(reglaDelBody, /color:\s*var\(--gaucho-azul-omnibot\)/, 'el texto base es azul Omnibot');
  assert.doesNotMatch(estilos, /--superficie-oscura|--texto-sobre-oscuro/, 'quedaron roles de superficie oscura');
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

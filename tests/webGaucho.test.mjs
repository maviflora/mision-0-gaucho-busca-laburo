// Tests de la web de Gaucho (webGaucho/index.html). Nació como réplica del estilo de 108 Supply.
// Spec: specs/webGaucho.md
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';

const RUTA_PAGINA = join(import.meta.dirname, '..', 'webGaucho', 'index.html');
const IDS_DE_SECCION_OBLIGATORIOS = ['perfil', 'cinta', 'comunidad', 'taller', 'entrevista'];
const MINIMO_TOKENS_DE_PALETA = 8;
// Hex de docs/designKits/paletas.md (la lima queda afuera a propósito).
const HEX_DE_LA_PALETA = [
  '#0B0F14', '#0A2B46', '#133A51', '#F4E2C4', '#E8C69D', '#F3462E', '#FF6A55',
  '#EAA540', '#74ACDF', '#F28409', '#523823', '#000320',
];

const html = existsSync(RUTA_PAGINA) ? readFileSync(RUTA_PAGINA, 'utf8') : '';

test('la página existe', () => {
  assert.ok(html.length > 0, 'falta webGaucho/index.html');
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

test('el texto habla como Gaucho: primera persona, sin copiar titulares de 108 Supply', () => {
  // Guía de voz: docs/investigacionGaucho.md sección 3.5 (primera persona, honesto con su cuerpo, vocabulario de taller).
  const visible = html.replace(/<style>[\s\S]*?<\/style>/, '').replace(/<script>[\s\S]*?<\/script>/, '');
  const terceraPersona = ['Contratar a Gaucho', 'Llamar a Gaucho', 'el CV de Gaucho', 'sobre su vida', 'terminó siendo Gaucho', 'Gaucho busca laburo</span>'];
  for (const frase of terceraPersona) {
    assert.ok(!visible.includes(frase) && !html.includes(frase), `habla de Gaucho en tercera persona: "${frase}"`);
  }
  for (const copiado of ['Lo más elegido', 'Y algunos favoritos', 'Most picked']) {
    assert.ok(!html.includes(copiado), `titular copiado de 108 Supply: "${copiado}"`);
  }
  // Microcopy neutro de interfaz: todo tiene que sonar a Gaucho hablando (guía 3.5: "microcopy en voz de Gaucho")
  const microcopyNeutro = ['Ver todos', 'Compartir pantalla', '>Colgar<', '>Jurado<', '>Presentador<', '>Anfitrión<', 'Speaker y embajador', 'Demostración local', 'Actualizado 2026'];
  for (const frase of microcopyNeutro) {
    assert.ok(!html.includes(frase), `microcopy neutro, falta pasarlo a voz de Gaucho: "${frase}"`);
  }
  for (const propia of ['Contratame', 'Charlemos', 'Mi gente', 'protección térmica', 'Raspberry', 'soldadura', 'ruedas y opiniones', 'robot chiquito']) {
    assert.ok(html.includes(propia), `falta una frase propia de Gaucho: "${propia}"`);
  }
  assert.doesNotMatch(visible, /[\u{1F300}-\u{1FAFF}]/u, 'Gaucho casi no usa emojis');
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

test('no carga recursos externos salvo Google Fonts (los links <a> sí pueden ser externos)', () => {
  const recursosExternos = html.match(/<(?:link|script|img|video|source|iframe)\b[^>]*(?:src|href)="https?:\/\/[^"]+"/g) ?? [];
  const noPermitidos = recursosExternos.filter((etiqueta) => !/fonts\.(googleapis|gstatic)\.com/.test(etiqueta));
  assert.deepEqual(noPermitidos, []);
});

test('hay links a lo que hizo Gaucho, todos con URLs de la investigación y abiertos de forma segura', () => {
  const linksExternos = html.match(/<a\b[^>]*href="https?:\/\/[^"]+"[^>]*>/g) ?? [];
  assert.ok(linksExternos.length >= 12, `se esperaban al menos 12 links externos, hay ${linksExternos.length}`);
  for (const etiqueta of linksExternos) {
    assert.match(etiqueta, /rel="noopener noreferrer"/, `link externo sin rel seguro: ${etiqueta}`);
    assert.match(etiqueta, /target="_blank"/, `link externo sin target: ${etiqueta}`);
  }
  // URLs sacadas de docs/investigacionGaucho.md y assets/fuentes.md (no se inventa ninguna)
  const urlsConocidas = [
    'https://www.linkedin.com/in/gaucho-paisano/',
    'https://x.com/gauchopaisano',
    'https://www.youtube.com/watch?v=jlnoMtGMSz4',
    'https://x.com/nays1_/status/2089865919849812091',
    'https://gaucho-studio.vercel.app',
    'https://ofi.paisanos.io/',
    'https://www.labitconf.com/',
    'https://www.paisanos.io/',
    'https://x.com/gauchopaisano/status/2123932261762392088',
    'https://www.instagram.com/reel/DcOi7HYxxXH/',
  ];
  for (const url of urlsConocidas) {
    assert.ok(html.includes(`href="${url}"`), `falta el link a ${url}`);
  }
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

// ---------------------------------------------------------------------------
// Favicon (logo elegido por Mavi: opción 1 "Frente", ver docs/logo/guiaDelLogo.md)
// ---------------------------------------------------------------------------
const CARPETA_DE_LA_PAGINA = join(import.meta.dirname, '..', 'webGaucho');

// Cada ícono que el <head> debe declarar: etiqueta esperada, archivo y medida en píxeles.
const ICONOS_PNG_ESPERADOS = [
  { archivo: 'favicon-32.png', medida: 32, etiqueta: /<link[^>]+rel="icon"[^>]+type="image\/png"[^>]+sizes="32x32"[^>]+href="favicon-32\.png"/ },
  { archivo: 'favicon-16.png', medida: 16, etiqueta: /<link[^>]+rel="icon"[^>]+type="image\/png"[^>]+sizes="16x16"[^>]+href="favicon-16\.png"/ },
  { archivo: 'apple-touch-icon.png', medida: 180, etiqueta: /<link[^>]+rel="apple-touch-icon"[^>]+href="apple-touch-icon\.png"/ },
];

// Lee ancho y alto del bloque IHDR de un PNG (bytes 16-19 y 20-23, big endian).
function leerMedidasDelPng(rutaDelArchivo) {
  const bytes = readFileSync(rutaDelArchivo);
  return { ancho: bytes.readUInt32BE(16), alto: bytes.readUInt32BE(20) };
}

test('el <head> declara los favicon PNG y el apple-touch-icon con rutas relativas', () => {
  const head = html.slice(html.indexOf('<head>'), html.indexOf('</head>'));
  for (const { archivo, etiqueta } of ICONOS_PNG_ESPERADOS) {
    assert.match(head, etiqueta, `el <head> no declara ${archivo} como corresponde`);
  }
});

test('el <head> declara favicon.ico', () => {
  const head = html.slice(html.indexOf('<head>'), html.indexOf('</head>'));
  assert.match(head, /<link[^>]+rel="shortcut icon"[^>]+href="favicon\.ico"/);
});

test('los PNG del favicon existen y miden lo que declaran', () => {
  for (const { archivo, medida } of ICONOS_PNG_ESPERADOS) {
    const ruta = join(CARPETA_DE_LA_PAGINA, archivo);
    assert.ok(existsSync(ruta), `falta webGaucho/${archivo}`);
    assert.deepEqual(leerMedidasDelPng(ruta), { ancho: medida, alto: medida }, `${archivo} no mide ${medida}x${medida}`);
  }
});

test('favicon.ico es un ICO válido con las medidas 16 y 32', () => {
  const ruta = join(CARPETA_DE_LA_PAGINA, 'favicon.ico');
  assert.ok(existsSync(ruta), 'falta webGaucho/favicon.ico');
  const bytes = readFileSync(ruta);
  // Cabecera ICONDIR: reservado (0), tipo (1 = ícono) y cantidad de imágenes.
  assert.equal(bytes.readUInt16LE(0), 0, 'el campo reservado debe ser 0');
  assert.equal(bytes.readUInt16LE(2), 1, 'el tipo debe ser 1 (ícono)');
  const cantidadDeImagenes = bytes.readUInt16LE(4);
  assert.equal(cantidadDeImagenes, 2);
  // Cada ICONDIRENTRY mide 16 bytes; el primer byte es el ancho.
  const medidasEnElIco = [];
  for (let i = 0; i < cantidadDeImagenes; i++) {
    medidasEnElIco.push(bytes.readUInt8(6 + i * 16));
  }
  assert.deepEqual(medidasEnElIco.sort((a, b) => a - b), [16, 32]);
});

test('la cinta infinita tiene dos mitades iguales y lo bastante largas para no cortarse en pantallas anchas', () => {
  // La animación corre la cinta el 50 %: si cada mitad es más corta que la pantalla, queda un hueco a la derecha.
  // Una vuelta de los 6 nombres mide unos 1000 px; con 4 vueltas por mitad se cubren hasta ~4000 px de ancho.
  const VUELTAS_MINIMAS_POR_MITAD = 4;
  const NOMBRES_POR_VUELTA = 6;
  const cinta = html.match(/<div class="marquee"[^>]*>([\s\S]*?)<\/div>\s*<p class="etiqueta"/);
  assert.ok(cinta, 'no se encontró la cinta infinita');
  const mitades = [...cinta[1].matchAll(/<div class="marquee-mitad">([\s\S]*?)<\/div>/g)].map((m) => m[1]);
  assert.equal(mitades.length, 2, 'la cinta necesita exactamente 2 mitades iguales');
  assert.equal(mitades[0], mitades[1], 'las dos mitades tienen que ser idénticas para que el loop no salte');
  const cantidadDeNombres = (mitades[0].match(/<span>/g) ?? []).length;
  assert.ok(cantidadDeNombres >= VUELTAS_MINIMAS_POR_MITAD * NOMBRES_POR_VUELTA, `cada mitad tiene ${cantidadDeNombres} nombres, hacen falta ${VUELTAS_MINIMAS_POR_MITAD * NOMBRES_POR_VUELTA}`);
});

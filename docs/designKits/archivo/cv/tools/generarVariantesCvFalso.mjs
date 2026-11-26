// Genera las 3 variantes del póster del CV falso a partir de cvFalso.html.
// Uso: node tools/generarVariantesCvFalso.mjs
// Spec: specs/cvGaucho.md, sección "Variantes del póster". Tests: tests/cvVariantes.test.mjs
//
// Idea: las piezas del robot se dibujan UNA vez como <symbol> y cada variante las coloca con <use>.
// Así las tres variantes comparten el mismo dibujo de piezas y solo cambia la composición.
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const carpetaDelCv = resolve(dirname(fileURLToPath(import.meta.url)), '../docs/designKits/propuestas/cv');

// ---------- Datos de las piezas (specs reales, ver docs/investigacionGaucho.md) ----------

/** Número de la leyenda, nombre del rótulo y spec corto de cada pieza numerada. */
const PIEZAS = {
  ojos: { numero: 1, nombre: 'OJOS', spec: 'Originales 1984' },
  camara: { numero: 2, nombre: 'CÁMARA', spec: 'De Raspberry Pi' },
  esp32: { numero: 3, nombre: 'ESP32', spec: 'Ojos y motores' },
  driver: { numero: 4, nombre: 'DRIVER', spec: 'Potencia motores' },
  motores: { numero: 5, nombre: 'MOTORES', spec: 'Dos originales' },
  raspberry: { numero: 6, nombre: 'RASPBERRY PI', spec: 'Cámara y audio' },
  respeaker: { numero: 7, nombre: 'RESPEAKER', spec: '2 micrófonos' },
  parlante: { numero: 8, nombre: 'PARLANTE', spec: 'Original 1984' },
};

/** Tamaño natural (ancho, alto) de cada símbolo. */
const TAMANIO = {
  cabeza: [190, 52], ojos: [150, 46], camara: [18, 120], panel: [170, 62],
  esp32: [100, 52], driver: [92, 42], raspberry: [130, 64], respeaker: [130, 38],
  parlante: [76, 76], chasis: [210, 38], motor: [64, 36], rueda: [56, 56],
};

/** Dibujo de cada pieza en su propio sistema de coordenadas. Los colores salen de las clases de cv.css. */
const SIMBOLOS_CON_CLASES = `
    <defs>
      <symbol id="s-cabeza" viewBox="0 0 190 52"><path class="plastico trazo" d="M2 50C2 20 40 2 95 2s93 18 93 48z"/></symbol>
      <symbol id="s-ojos" viewBox="0 0 150 46">
        <rect class="plastico trazo" x="1.5" y="1.5" width="147" height="43" rx="21.5"/>
        <circle class="ojo trazo" cx="38" cy="23" r="17"/><circle class="ojo trazo" cx="112" cy="23" r="17"/>
        <circle class="brillo" cx="33" cy="18" r="4"/><circle class="brillo" cx="107" cy="18" r="4"/>
      </symbol>
      <symbol id="s-camara" viewBox="0 0 18 120">
        <rect class="cobre" x="6" y="29" width="6" height="91"/>
        <rect class="placa trazo" x="1" y="1" width="16" height="28" rx="2"/>
        <circle class="oscuro" cx="9" cy="13" r="5"/>
      </symbol>
      <symbol id="s-panel" viewBox="0 0 170 62">
        <rect class="plastico trazo" x="1.5" y="1.5" width="167" height="59" rx="5"/>
        <rect class="oscuro" x="13" y="10" width="70" height="20" rx="2"/>
        <rect class="placa" x="95" y="10" width="62" height="10"/>
        <rect class="placa" x="13" y="38" width="144" height="16" rx="2"/>
      </symbol>
      <symbol id="s-esp32" viewBox="0 0 100 52">
        <rect class="placa trazo" x="1.5" y="1.5" width="97" height="49" rx="3"/>
        <rect class="cobre" x="14" y="12" width="22" height="22"/>
        <path class="cable" d="M52 12h10v10h10v-10h10v10h8"/>
        <text class="rotulo" x="50" y="45" style="text-anchor: middle">ESP32</text>
      </symbol>
      <symbol id="s-driver" viewBox="0 0 92 42">
        <rect class="placa trazo" x="1.5" y="1.5" width="89" height="39" rx="3"/>
        <rect class="oscuro" x="14" y="11" width="26" height="18"/>
        <text class="rotulo" x="64" y="25" style="text-anchor: middle">DRIVER</text>
      </symbol>
      <symbol id="s-raspberry" viewBox="0 0 130 64">
        <rect class="placa trazo" x="1.5" y="1.5" width="127" height="61" rx="4"/>
        <rect class="oscuro" x="84" y="12" width="34" height="26"/>
        <text class="rotulo" x="38" y="42" style="text-anchor: middle">RASPBERRY</text>
      </symbol>
      <symbol id="s-respeaker" viewBox="0 0 130 38">
        <rect class="placa trazo" x="1.5" y="1.5" width="127" height="35" rx="4"/>
        <circle class="cobre" cx="30" cy="19" r="9"/><circle class="cobre" cx="100" cy="19" r="9"/>
        <text class="rotulo" x="65" y="22" style="text-anchor: middle">HAT</text>
      </symbol>
      <symbol id="s-parlante" viewBox="0 0 76 76">
        <circle class="plastico trazo" cx="38" cy="38" r="36.5"/>
        <circle class="oscuro" cx="38" cy="38" r="23"/><circle class="plastico" cx="38" cy="38" r="8"/>
      </symbol>
      <symbol id="s-chasis" viewBox="0 0 210 38">
        <rect class="plastico trazo" x="1.5" y="1.5" width="207" height="35" rx="7"/>
        <text class="rotulo" x="105" y="24" style="text-anchor: middle; fill: var(--azul-omnibot)">TOMY 1984</text>
      </symbol>
      <symbol id="s-motor" viewBox="0 0 64 36"><rect class="placa trazo" x="1.5" y="1.5" width="61" height="33" rx="3"/></symbol>
      <symbol id="s-rueda" viewBox="0 0 56 56"><circle class="oscuro" cx="28" cy="28" r="28"/><circle class="plastico" cx="28" cy="28" r="9"/></symbol>
    </defs>`;

/**
 * Los estilos por clase de cv.css no llegan adentro de un <symbol> usado con <use>.
 * Por eso cada clase de color se traduce acá a un estilo en línea. Las variables CSS sí cruzan
 * el <use>, y --trazo-color permite que la variante de noche cambie el color del contorno.
 */
const ESTILOS_DE_PIEZA = {
  plastico: 'fill: var(--crema-plastico)',
  placa: 'fill: var(--azul-tinta)',
  oscuro: 'fill: var(--negro-taller)',
  ojo: 'fill: var(--rojo-ojos)',
  brillo: 'fill: var(--rojo-glow)',
  cobre: 'fill: var(--amarillo-sol)',
  trazo: 'stroke: var(--trazo-color, var(--azul-omnibot)); stroke-width: 2.5; stroke-linejoin: round',
  cable: 'fill: none; stroke: var(--rojo-ojos); stroke-width: 2',
  rotulo: "fill: var(--crema-tomy); font: 600 8px 'IBM Plex Mono', monospace",
};

/** Reemplaza cada atributo class por su estilo en línea, conservando el style que ya tuviera la etiqueta. */
const aplicarEstilosEnLinea = (marcado) =>
  marcado.replace(/<(\w+)([^>]*?)(\/?)>/g, (etiqueta, nombre, atributos, cierre) => {
    const clases = atributos.match(/class="([^"]*)"/);
    if (!clases) return etiqueta;
    const estiloPrevio = atributos.match(/style="([^"]*)"/)?.[1] ?? '';
    const estiloNuevo = [...clases[1].split(/\s+/).map((clase) => ESTILOS_DE_PIEZA[clase]), estiloPrevio].filter(Boolean).join('; ');
    const restoDeAtributos = atributos.replace(/\s*class="[^"]*"/, '').replace(/\s*style="[^"]*"/, '');
    return `<${nombre}${restoDeAtributos} style="${estiloNuevo}"${cierre}>`;
  });

const SIMBOLOS = aplicarEstilosEnLinea(SIMBOLOS_CON_CLASES);

// ---------- Helpers de dibujo ----------

/** Coloca un símbolo en (x, y) a escala 1 (o la que se pida). */
const colocar = (simbolo, x, y, escala = 1) => {
  const [ancho, alto] = TAMANIO[simbolo];
  return `<use href="#s-${simbolo}" x="${x}" y="${y}" width="${ancho * escala}" height="${alto * escala}"/>`;
};

/** Texto SVG con una clase de cv.css. */
const texto = (x, y, clase, contenido) => `<text class="${clase}" x="${x}" y="${y}">${contenido}</text>`;

/** Línea guía que sale de la pieza (con un puntito en el origen). */
const guia = (recorrido, puntoX, puntoY) =>
  `<path class="guia" d="${recorrido}"/><circle class="punto" cx="${puntoX}" cy="${puntoY}" r="3"/>`;

/** Insignia redonda con el número de la pieza. */
const insignia = (cx, cy, numero) =>
  `<circle class="insignia" cx="${cx}" cy="${cy}" r="10"/>${texto(cx, cy + 4.5, 'numero', numero)}`;

/**
 * Rótulo al costado de la pieza: la línea guía termina en `extremoX` y ahí van la insignia, el nombre y el spec.
 * `especificacion` permite acortar el spec cuando no entra en el marco.
 * lado 'izquierda': el rótulo queda a la izquierda de la línea. lado 'derecha': a la derecha.
 */
const rotuloLateral = (id, lado, extremoX, y, especificacion) => {
  const { numero, nombre } = PIEZAS[id];
  const spec = especificacion ?? PIEZAS[id].spec;
  if (lado === 'derecha') {
    return insignia(extremoX + 12, y, numero)
      + texto(extremoX + 30, y - 1, 'rotulo-nombre', nombre)
      + texto(extremoX + 30, y + 11, 'rotulo-spec', spec);
  }
  return insignia(extremoX - 12, y, numero)
    + texto(extremoX - 30, y - 1, 'rotulo-nombre rotulo-der', nombre)
    + texto(extremoX - 30, y + 11, 'rotulo-spec rotulo-der', spec);
};

/** Rótulo debajo de la pieza (para la grilla knolling): palito, insignia, nombre y spec centrados. */
const rotuloDebajo = (id, centroX, bordeInferior) => {
  const { numero, nombre, spec } = PIEZAS[id];
  return guia(`M${centroX} ${bordeInferior}v14`, centroX, bordeInferior)
    + insignia(centroX, bordeInferior + 24, numero)
    + texto(centroX, bordeInferior + 46, 'rotulo-nombre rotulo-centro', nombre)
    + texto(centroX, bordeInferior + 58, 'rotulo-spec rotulo-centro', spec);
};

/** Pieza completa: <g data-pieza> con sus dibujos y su rótulo. No se anidan grupos (los tests lo necesitan). */
const pieza = (id, dibujos, rotulo) => `
        <g data-pieza="${id}">
          ${dibujos}
          ${rotulo}
        </g>`;

/** Pieza sin número (carcasa, panel, chasis): solo un rótulo chico, sin insignia. */
const piezaSinNumero = (dibujo, nombre, x, y) => `
        ${dibujo}
        ${texto(x, y, 'rotulo-nombre', nombre)}`;

/** Franjas de colores del merch de Gaucho (rojo, naranja, amarillo, celeste). */
const franjas = (x, y, ancho) =>
  [['ojo', 0], ['franja-naranja', 5], ['cobre', 10], ['franja-celeste', 15]]
    .map(([clase, desplazamiento]) => `<rect class="${clase}" x="${x}" y="${y + desplazamiento}" width="${ancho}" height="5"/>`)
    .join('');

// ---------- Variante 1: cuadro enmarcado con piezas apoyadas en grilla (knolling) ----------

const dibujarVariante1 = () => `
        <svg class="dibujo cuadro" viewBox="0 0 600 820" role="img" aria-labelledby="titulo-dibujo">
          <title id="titulo-dibujo">Cuadro de Gaucho por dentro: las piezas del robot apoyadas en una grilla dentro de un marco negro, cada una con su número y su nombre: ojos, cámara, ESP32, driver de motores, motores, Raspberry Pi, ReSpeaker y parlante</title>
          ${SIMBOLOS}
          <rect class="marco" x="0" y="0" width="600" height="820"/>
          <rect class="papel" x="26" y="26" width="548" height="768"/>
          <rect class="filete" x="38" y="38" width="524" height="744"/>

          <!-- Fila 1: carcasa, ojos, cámara -->
          ${piezaSinNumero(colocar('cabeza', 60, 80), 'CARCASA', 60, 150)}
          ${pieza('ojos', colocar('ojos', 285, 80), rotuloDebajo('ojos', 360, 126))}
          ${pieza('camara', colocar('camara', 495, 72, 0.75), rotuloDebajo('camara', 501, 162))}

          <!-- Fila 2: panel, ESP32, driver -->
          ${piezaSinNumero(colocar('panel', 60, 235), 'PANEL FRONTAL', 60, 315)}
          ${pieza('esp32', colocar('esp32', 270, 235), rotuloDebajo('esp32', 320, 287))}
          ${pieza('driver', colocar('driver', 390, 240), rotuloDebajo('driver', 436, 282))}

          <!-- Fila 3: Raspberry Pi, ReSpeaker, parlante -->
          ${pieza('raspberry', colocar('raspberry', 60, 395), rotuloDebajo('raspberry', 125, 459))}
          ${pieza('respeaker', colocar('respeaker', 225, 410), rotuloDebajo('respeaker', 290, 448))}
          ${pieza('parlante', colocar('parlante', 390, 390), rotuloDebajo('parlante', 428, 466))}

          <!-- Fila 4: chasis y motores con sus ruedas -->
          ${piezaSinNumero(colocar('chasis', 60, 565), 'CHASIS', 60, 625)}
          ${pieza('motores',
            colocar('motor', 305, 560) + colocar('motor', 395, 560) + colocar('rueda', 301, 606) + colocar('rueda', 391, 606),
            guia('M459 578H478', 459, 578) + rotuloLateral('motores', 'derecha', 478, 578, 'Dos, 1984'))}

          <!-- Ficha de abajo, como la tarjeta de los cuadros de teardown -->
          <path class="guia" d="M60 700H540"/>
          ${texto(60, 742, 'titulo-svg', 'GAUCHO POR DENTRO')}
          ${texto(60, 762, 'rotulo-nombre', 'OMNIBOT 5402 · TOMY 1984')}
          ${franjas(380, 716, 160)}
          ${texto(380, 762, 'rotulo-spec', 'Reconvertido en 2026:')}
          ${texto(380, 774, 'rotulo-spec', 'ESP32 + Raspberry Pi + LLM')}
        </svg>`;

// ---------- Variante 2: vista explotada en diagonal sobre azul Omnibot (taller de noche) ----------

const dibujarVariante2 = () => `
        <svg class="dibujo noche" viewBox="0 0 600 800" role="img" aria-labelledby="titulo-dibujo">
          <title id="titulo-dibujo">Vista explotada de Gaucho de noche: las piezas del robot separadas en diagonal sobre un sol naranja, cada una con una línea que apunta a su rótulo: ojos, cámara, ESP32, driver de motores, motores, Raspberry Pi, ReSpeaker y parlante</title>
          ${SIMBOLOS}
          <defs>
            <pattern id="grilla" width="30" height="30" patternUnits="userSpaceOnUse"><path class="eje-fino" d="M30 0H0V30"/></pattern>
          </defs>
          <rect class="fondo-noche" x="0" y="0" width="600" height="800"/>
          <rect x="0" y="0" width="600" height="800" fill="url(#grilla)"/>

          <!-- Sol del merch detrás de las piezas -->
          <circle class="sol-externo" cx="230" cy="340" r="175"/>
          <circle class="sol-medio" cx="230" cy="340" r="130"/>
          <circle class="sol-interno" cx="230" cy="340" r="85"/>
          <path class="eje" d="M215 20L255 790"/>

          ${piezaSinNumero(colocar('cabeza', 125, 30), 'CARCASA', 14, 62)}
          ${pieza('ojos', colocar('ojos', 145, 95), guia('M295 118H462', 295, 118) + rotuloLateral('ojos', 'derecha', 462, 118))}
          ${pieza('camara', colocar('camara', 211, 88), guia('M229 160H462', 229, 160) + rotuloLateral('camara', 'derecha', 462, 160))}
          ${piezaSinNumero(colocar('panel', 165, 180), 'PANEL FRONTAL', 14, 214)}
          ${pieza('esp32', colocar('esp32', 160, 275), guia('M160 301H138', 160, 301) + rotuloLateral('esp32', 'izquierda', 138, 301))}
          ${pieza('driver', colocar('driver', 285, 290), guia('M377 311H462', 377, 311) + rotuloLateral('driver', 'derecha', 462, 311))}
          ${pieza('raspberry', colocar('raspberry', 200, 375), guia('M200 407H138', 200, 407) + rotuloLateral('raspberry', 'izquierda', 138, 407))}
          ${pieza('respeaker', colocar('respeaker', 220, 465), guia('M350 484H462', 350, 484) + rotuloLateral('respeaker', 'derecha', 462, 484))}
          ${pieza('parlante', colocar('parlante', 250, 535), guia('M326 573H462', 326, 573) + rotuloLateral('parlante', 'derecha', 462, 573))}
          ${piezaSinNumero(colocar('chasis', 240, 632), 'CHASIS', 14, 656)}
          ${pieza('motores',
            colocar('motor', 265, 695) + colocar('motor', 385, 695) + colocar('rueda', 261, 740) + colocar('rueda', 381, 740),
            guia('M265 713H138', 265, 713) + rotuloLateral('motores', 'izquierda', 138, 713))}

          <!-- Título -->
          ${texto(586, 44, 'rotulo-nombre rotulo-der', 'OMNIBOT 5402 · TOMY 1984')}
          ${texto(586, 58, 'rotulo-spec rotulo-der', 'VISTA EXPLOTADA · SIN ESCALA')}
          ${texto(586, 768, 'titulo-svg titulo-der', 'GAUCHO')}
          ${texto(586, 786, 'rotulo-nombre rotulo-der', 'POR DENTRO')}
        </svg>`;

// ---------- Variante 3: cuadro con afiche TOMY (vista explotada en columna) ----------

const dibujarVariante3 = () => `
        <svg class="dibujo cuadro" viewBox="0 0 600 960" role="img" aria-labelledby="titulo-dibujo">
          <title id="titulo-dibujo">Afiche enmarcado de Gaucho por dentro: las piezas del robot separadas en columna bajo un sol rojo, cada una con una línea que apunta a su número y nombre: ojos, cámara, ESP32, driver de motores, motores, Raspberry Pi, ReSpeaker y parlante</title>
          ${SIMBOLOS}
          <rect class="marco" x="0" y="0" width="600" height="960"/>
          <rect class="papel" x="24" y="24" width="552" height="912"/>
          <rect class="filete" x="36" y="36" width="528" height="888"/>

          <!-- Encabezado del afiche: título, franjas y caja TOMY -->
          ${texto(54, 112, 'titulo-svg titulo-grande', 'GAUCHO')}
          ${franjas(54, 124, 250)}
          <rect class="caja-tomy" x="400" y="62" width="150" height="64"/>
          ${texto(475, 88, 'rotulo-nombre rotulo-centro', 'TOMY')}
          ${texto(475, 104, 'rotulo-nombre rotulo-centro', 'OMNIBOT')}
          ${texto(475, 118, 'rotulo-spec rotulo-centro', '(1984) · POR DENTRO')}

          <!-- Sol detrás de la cabeza, con rayas de atardecer -->
          <circle class="sol-externo" cx="230" cy="250" r="110"/>
          <rect class="papel" x="110" y="262" width="240" height="3"/>
          <rect class="papel" x="110" y="276" width="240" height="5"/>
          <rect class="papel" x="110" y="292" width="240" height="7"/>
          <path class="eje" d="M230 150V905"/>

          ${piezaSinNumero(colocar('cabeza', 135, 175), 'CARCASA', 54, 205)}
          ${pieza('ojos', colocar('ojos', 155, 240), guia('M305 263H400', 305, 263) + rotuloLateral('ojos', 'derecha', 400, 263))}
          ${pieza('camara', colocar('camara', 221, 233), guia('M239 330H400', 239, 330) + rotuloLateral('camara', 'derecha', 400, 330))}
          ${piezaSinNumero(colocar('panel', 145, 345), 'PANEL FRONTAL', 54, 380)}
          ${pieza('esp32', colocar('esp32', 125, 440), guia('M175 440V420H400', 175, 440) + rotuloLateral('esp32', 'derecha', 400, 420))}
          ${pieza('driver', colocar('driver', 245, 447), guia('M337 468H400', 337, 468) + rotuloLateral('driver', 'derecha', 400, 468))}
          ${pieza('raspberry', colocar('raspberry', 165, 535), guia('M295 567H400', 295, 567) + rotuloLateral('raspberry', 'derecha', 400, 567))}
          ${pieza('respeaker', colocar('respeaker', 165, 620), guia('M295 639H400', 295, 639) + rotuloLateral('respeaker', 'derecha', 400, 639))}
          ${pieza('parlante', colocar('parlante', 192, 690), guia('M268 728H400', 268, 728) + rotuloLateral('parlante', 'derecha', 400, 728))}
          ${piezaSinNumero(colocar('chasis', 125, 790), 'CHASIS', 54, 815)}
          ${pieza('motores',
            colocar('motor', 135, 850) + colocar('motor', 235, 850) + colocar('rueda', 131, 892, 0.6) + colocar('rueda', 231, 892, 0.6),
            guia('M299 868H400', 299, 868) + rotuloLateral('motores', 'derecha', 400, 868))}

          ${texto(550, 922, 'rotulo-spec rotulo-der', 'ROBOT · CASSETTE · ESP32 · LLM')}
        </svg>`;

// ---------- Armado de las páginas ----------

const VARIANTES = [
  { archivo: 'cvFalsoV1_cuadroKnolling.html', clase: 'poster poster-sinmarco', dibujar: dibujarVariante1,
    descripcion: 'V1 · Cuadro knolling: piezas apoyadas en grilla, marco negro y ficha abajo (mezcla del cuadro del iPhone con la paleta de Gaucho).' },
  { archivo: 'cvFalsoV2_explosionNoche.html', clase: 'poster poster-sinmarco', dibujar: dibujarVariante2,
    descripcion: 'V2 · Explosión de noche: piezas flotando en diagonal sobre azul Omnibot, con el sol del merch detrás (mezcla de la foto explotada con el taller de noche).' },
  { archivo: 'cvFalsoV3_afichePorDentro.html', clase: 'poster poster-sinmarco', dibujar: dibujarVariante3,
    descripcion: 'V3 · Afiche TOMY enmarcado: vista explotada en columna bajo un sol rojo, con título y franjas del merch.' },
];

const base = readFileSync(resolve(carpetaDelCv, 'cvFalso.html'), 'utf8');

for (const { archivo, clase, dibujar, descripcion } of VARIANTES) {
  const figura = `<figure class="${clase}">
        <!-- ${descripcion} Generado por tools/generarVariantesCvFalso.mjs -->${dibujar()}
        <figcaption class="etiqueta">Gaucho por dentro. Piezas separadas, sin escala.</figcaption>
      </figure>`;
  const pagina = base.replace(/<figure class="poster">[\s\S]*?<\/figure>/, () => figura);
  writeFileSync(resolve(carpetaDelCv, archivo), pagina);
  console.log(`generado ${archivo}`);
}

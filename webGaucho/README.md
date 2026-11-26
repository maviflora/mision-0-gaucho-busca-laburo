# webGaucho

Web de Gaucho: página única, mobile first, con CSS y JS integrados en `index.html`. Nació como réplica del estilo de 108 Supply y desde el 26/11/2026 es la base sobre la que seguimos construyendo. Se despliega en Vercel.

## Cómo verla

Las fotos viven en `assets/Gaucho/` (se referencian como `../assets/...`), así que hay que servir desde la **raíz del repo**:

```
python -m http.server 8000
```

y abrir <http://localhost:8000/webGaucho/>.

## Qué hay en la carpeta

```
webGaucho/
  index.html           la página entera (CSS y JS integrados)
  favicon-16.png       favicon 16x16
  favicon-32.png       favicon 32x32
  favicon.ico          los dos PNG anteriores en un .ico
  apple-touch-icon.png icono 180x180 para iOS
```

## Secciones de la página

- **Hero**: foto del cartel de neón de Paisanos, título y tarjetas.
- **Quién soy** (`#perfil`): presentación en dos tonos.
- **Me vieron en**: cinta infinita con Paisanos, SLA, LABITCONF, Wallbit, Hackware y La Ofi.
- **Mis laburos** (`#cinta`): carrusel de 4 tarjetas homogéneas (Hackware, LABITCONF, Wallbit, La Ofi) que se adelantan al pasar el mouse.
- **Mi gente** (`#comunidad`): línea de tiempo, pelis y juegos, y arte de fans (con un lugar reservado para la foto con la chinita).
- **Mi taller** (`#taller`): tres empresas candidatas (Toyota Argentina, Bosch Professional, Arbit Ingeniería).
- **Charlemos** (`#entrevista`): llamada simulada con Llamame, Ver mi CV (muestra el CV falso) y Cortar.
- **Pie**: "Dónde encontrarme" con los links, y un aviso flotante "Busco laburo" que se puede cerrar.

La página es clara (colores del CV real y de `docs/designKits/paletas.md`) y todo el texto está en la voz de Gaucho. Las reglas completas y verificables están en la spec.

## Favicon

Logo de Gaucho (opción 1 "Frente"), declarado en el `<head>` de `index.html`. Para regenerarlo desde `docs/logo/`:

```
python tools/generarFaviconGaucho.py
```

(El apple-touch-icon necesita Pillow.)

## Fotos recortadas

Las fotos de `assets/Gaucho/fotitos/` ya están recortadas (sin barras de captura de celular) y dos tienen upscale x2. Se regeneran con `tools/recortarAssets.py` (las cajas de recorte se ubican con `tools/ubicarRecortes.py`). Pasos, medidas y requisitos en [`specs/recortesDeAssets.md`](../specs/recortesDeAssets.md).

## Despliegue en Vercel

**Qué pasaba:** al importar el repo, la URL daba `404 NOT_FOUND`. Vercel sirve la raíz del repo como sitio estático y ahí no hay `index.html` (la web está en `webGaucho/index.html`).

**Cómo está resuelto:**

- `vercel.json` (en la raíz): redirige `/` a `/webGaucho/`.
- `.vercelignore` (en la raíz): deja afuera lo que la web no necesita (`docs/`, `specs/`, `tests/`, `tools/`, los videos de 97 MB, capturas sueltas y los `.md` de instrucciones) para que el despliegue sea chico y rápido.

**Configuración recomendada en Vercel:** Framework preset: **Other**. Root Directory: la raíz del repo. Sin build command ni output directory (se sirve la raíz tal cual).

**Por qué redirect y no rewrite:** con un rewrite el navegador seguiría en `/` y las rutas relativas de la página (`favicon-32.png`, `../assets/...`) se resolverían contra `/` en vez de `/webGaucho/`, y las fotos y el favicon no cargarían. Con el redirect la URL pasa a ser `/webGaucho/` y las rutas relativas funcionan.

**Cosas a tener en cuenta:**

- Cualquier archivo nuevo que use la web (fotos, fuentes, etc.) **no** puede quedar listado en `.vercelignore`; si no, en Vercel daría 404 aunque funcione en local. El test lo verifica.
- Vercel corre en Linux y distingue mayúsculas y minúsculas: `Gaucho.png` y `gaucho.png` son archivos distintos. El test también lo verifica.
- Cada push a `main` redespliega solo.

Spec: [`specs/despliegueVercel.md`](../specs/despliegueVercel.md). Test:

```
node --test tests/despliegueVercel.test.mjs
```

## Tests

```
node --test tests/webGaucho.test.mjs
node --test tests/despliegueVercel.test.mjs
```

## Pendientes

- **Foto de Mavi con la estampita de la chinita**: el lugar reservado (`.foto-pendiente`, "Mavi y la chinita") en `#comunidad` espera el archivo. Cuando llegue, reemplazar el lugar por la foto (en `assets/Gaucho/fotitos/`).
- **Links directos** para SLA Live, Gaucho Adventures y Misión Despertar: hoy enlazan a búsquedas en X porque no hay link directo.
- **CV falso**: ya es una foto (Gaucho en bikini, `assets/Gaucho/cvFalso/gaucho_bikini_cv_falso.png`). Lo que Mavi pidió para la secuencia completa (el archivo en el escritorio, los 5 segundos, la disculpa y el corte) está en `docs/notasDeMavi.md`; hoy la página solo muestra la foto al compartir pantalla.
- **Empresas de "Mi taller"**: contactos y logos sin confirmar (la página lo avisa).

## Specs

- Web: [`specs/webGaucho.md`](../specs/webGaucho.md)
- Despliegue: [`specs/despliegueVercel.md`](../specs/despliegueVercel.md)
- Recortes de fotos: [`specs/recortesDeAssets.md`](../specs/recortesDeAssets.md)
- Logo y favicon: [`specs/logoGaucho16bits.md`](../specs/logoGaucho16bits.md)

Guía de la propuesta original: [`docs/designKits/propuestas/paginaGaucho/guiaDePaginaGaucho.md`](../docs/designKits/propuestas/paginaGaucho/guiaDePaginaGaucho.md).

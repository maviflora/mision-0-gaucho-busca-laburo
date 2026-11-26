# webGaucho

Web de Gaucho: página única, mobile first, con CSS y JS integrados en `index.html`. Nació como réplica del estilo de 108 Supply y desde el 26/11/2026 es la base sobre la que seguimos construyendo.

## Cómo verla

Las fotos viven en `assets/Gaucho/` (se referencian como `../assets/...`), así que hay que servir desde la **raíz del repo**:

```
python -m http.server 8000
```

y abrir <http://localhost:8000/webGaucho/>.

## Favicon

Logo de Gaucho (opción 1 "Frente"): `favicon-16.png`, `favicon-32.png`, `favicon.ico` y `apple-touch-icon.png`, declarados en el `<head>` de `index.html`. Para regenerarlos desde `docs/logo/`:

```
python tools/generarFaviconGaucho.py
```

(El apple-touch-icon necesita Pillow.)

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
```

## Spec

[`specs/webGaucho.md`](../specs/webGaucho.md). Guía de la propuesta original: [`docs/designKits/propuestas/paginaGaucho/guiaDePaginaGaucho.md`](../docs/designKits/propuestas/paginaGaucho/guiaDePaginaGaucho.md).

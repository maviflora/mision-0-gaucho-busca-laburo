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

## Tests

```
node --test tests/webGaucho.test.mjs
```

## Spec

[`specs/webGaucho.md`](../specs/webGaucho.md). Guía de la propuesta original: [`docs/designKits/propuestas/paginaGaucho/guiaDePaginaGaucho.md`](../docs/designKits/propuestas/paginaGaucho/guiaDePaginaGaucho.md).

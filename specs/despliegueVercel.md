# Spec: despliegue de la web de Gaucho en Vercel

Fecha: 26/11/2026. Mavi importó el repo a Vercel y la URL daba `404 NOT_FOUND`.

## Causa

Vercel sirve la raíz del repo como sitio estático y no hay `index.html` en la raíz: la página está en `webGaucho/index.html`. En `/` no hay nada, de ahí el 404.

## Solución

- `vercel.json`: redirige `/` a `/webGaucho/`. Es una redirección (no un rewrite) para que las rutas relativas de la página (`favicon-32.png`, `../assets/...`) se resuelvan contra `/webGaucho/` y no contra `/`.
- `.vercelignore`: deja afuera lo que la web no necesita, para que el despliegue sea chico y rápido: `docs/`, `specs/`, `tests/`, `tools/`, los videos (`assets/Gaucho/videitos`, 97 MB), la foto de referencia del CV falso, las capturas sueltas de la raíz y los `.md` de instrucciones.
- Lo que la página usa (`webGaucho/` y las fotos de `assets/Gaucho/fotitos/` y `assets/Gaucho/cvFalso/gaucho_bikini_cv_falso.png`) **no** puede quedar ignorado.

## Configuración en Vercel

Framework preset: **Other**. Sin build command ni output directory (se sirve la raíz tal cual). Root Directory: la raíz del repo.

## Verificación

`node --test tests/despliegueVercel.test.mjs`

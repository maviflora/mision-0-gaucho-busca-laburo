# CV de Gaucho

Spec: `specs/cvGaucho.md`. Tests: `tests/cv.test.mjs`.

| Archivo | Qué es |
|---|---|
| `cvReal.html` | El CV de verdad: perfil DevRel como titular y proyectos técnicos, solo con hechos confirmados. |
| `cv.css` | Estilos del CV. Todavía usan paleta y tipografías del kit archivado "Catálogo TOMY". |

## Qué pasó con el CV falso

Se archivó (25/11/2026) en `docs/designKits/archivo/cv/`: `cvFalso.html` ("Gaucho por dentro") y sus tres variantes de póster, con el generador y los tests viejos. La idea nueva es otra: una foto de Gaucho en bikini que aparece al compartir pantalla en la llamada. Ver `docs/notasDeMavi.md` y `assets/Gaucho/cvFalso/`.

## Cómo verlo

Abrí `cvReal.html` en el navegador (sin servidor ni JavaScript). Se puede imprimir.

## Cómo correr los tests

```
node --test tests/*.test.mjs
```

## Decisiones que quedan para Mavi

- **Perfil titular:** se usó A (DevRel) como titular y B (hardware) como proyectos (`docs/investigacionGaucho.md` sección 7.2). Falta tu decisión final.
- **Botón "Contratar":** apunta al LinkedIn de Gaucho porque el canal de contratación no está definido con Paisanos.
- **Logros con número:** no se incluyó el "80% menos de tiempo de respuesta" del perfil B porque es inventado.

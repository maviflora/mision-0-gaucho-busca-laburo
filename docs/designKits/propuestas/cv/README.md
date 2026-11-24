# CV de Gaucho (real y falso)

Spec: `specs/cvGaucho.md`. Tests: `tests/cv.test.mjs`.

| Archivo | Qué es |
|---|---|
| `cvReal.html` | El CV de verdad: perfil DevRel como titular y proyectos técnicos, solo con hechos confirmados. |
| `cvFalso.html` | "Gaucho por dentro": parece el mismo CV, pero muestra al robot abierto con sus specs reales (ojos, cámara, ESP32, driver de motores, motores, Raspberry Pi, ReSpeaker, parlante), el pipeline de voz y el modo seguime. |
| `cv.css` | Estilos compartidos. Es la razón de que se vean iguales a primera vista. |

## Cómo verlos

Abrí cualquiera de los dos `.html` en el navegador (no necesitan servidor ni JavaScript). Se pueden imprimir: tienen estilos de impresión.

## Cómo correr los tests

```
node --test tests/
```

## Decisiones que quedan para Mavi

- **Perfil titular del CV real:** se usó A (DevRel) como titular y B (hardware) como proyectos, que es lo sugerido en `docs/investigacionGaucho.md` sección 7.2. Falta tu decisión final.
- **Botón "Contratar":** apunta al LinkedIn de Gaucho porque el canal de contratación no está definido con Paisanos.
- **Specs del CV falso:** salen de los subtítulos automáticos del video de SLA, pueden tener errores. El modelo de la Raspberry y del ReSpeaker no se conoce, por eso no se nombra.
- **Logros con número:** no se incluyó el "80% menos de tiempo de respuesta" del perfil B porque es inventado.

## Pendiente (fuera de esta entrega)

- La secuencia: el reclutador pide el CV, Gaucho manda el falso por error, vergüenza y corte de llamada.
- Interacciones del corte (tocar los ojos para encenderlos, tocar el micrófono para que hable).
- Si querés, un pase de diseño de estas hojas con Codex (se armaron reutilizando el kit "Catálogo TOMY" ya seleccionado, sin decisiones creativas nuevas).

## Variantes del póster de `cvFalso.html`

| Archivo | Idea |
|---|---|
| `cvFalsoV1_cuadroKnolling.html` | Cuadro con piezas apoyadas en grilla (estilo Grid Studio). |
| `cvFalsoV2_explosionNoche.html` | Vista explotada en diagonal sobre azul Omnibot, con el sol del merch. |
| `cvFalsoV3_afichePorDentro.html` | Afiche TOMY enmarcado con vista explotada en columna. |

Se generan con `node tools/generarVariantesCvFalso.mjs` (no editar los HTML de las variantes a mano: se pisan al regenerar). Tests: `node --test tests/cv.test.mjs tests/cvVariantes.test.mjs`.

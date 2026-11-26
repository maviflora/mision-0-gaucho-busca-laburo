# Página de Gaucho (maqueta navegable) — ARCHIVO

**Rechazadas por Mavi (25/11/2026).** Se conservan acá solo para tener trazabilidad del proceso de diseño. Ninguna fue seleccionada. Contexto general en [`guiaDeDesignKits.md`](../../guiaDeDesignKits.md). Spec de las nuevas: `specs/paginaGaucho5Propuestas.md`. Tests: `tests/paginaGaucho5Propuestas.test.mjs`.

| Archivo | Idea |
|---|---|
| `propuesta1_manualDeUsuario.html` | Manual de usuario, sobre el kit Catálogo TOMY. |
| `propuesta2_reticulaTomy.html` | Retícula TOMY: bandas modulares con toggle de grilla, portada partida con retrato. |
| `propuesta3_turnoDeTaller.html` | Turno de taller: metadatos mono, hora de Buenos Aires, CTA persistente y acordeones numerados. |
| `propuesta4_ladoAyLadoB.html` | Lado A y lado B: barrido lateral tipo carrusel, tarjetas redondeadas y selector tipográfico. |
| `propuesta5_archivoDeOficio.html` | Archivo de oficio: bandas con metadatos, galería de objetos y acordeón numerado. |
| `propuesta6_panelOmnibot.html` | Panel Omnibot: retícula conmutable, CTA de entrevista en la cabecera y fichas numeradas. |

Las propuestas 2 a 6 las hizo Codex en modo claro con la paleta `--gaucho-*`. Se apoyan en tres referencias que eligió Mavi, con el mismo peso: [108 Supply](https://108.supply/), [Haptic](https://www.haptic.studio/) y [Michael Pumo](https://michaelpumo.com/) (en modo claro).

## Qué tienen en común

Las seis cuentan lo mismo, con los ids `cv-falso`, `perfil`, `cinta`, `entrevista` y `taller`:

1. **Prólogo corporativo:** un CV serio de "Gaucho Paisano" que se rompe con una acción deliberada.
2. **Presentación:** perfil, "Gaucho por dentro" (el CV falso) y las ofertas de empresas candidatas, que se abren como fichas.
3. **Cinta de 8 bits:** "Laburos anteriores de Gaucho", que se puede jugar.
4. **Entrevista con Gaucho:** dos ramas para probar.
5. **Reserva:** muestra un correo de ejemplo.
6. **Dónde me gustaría laburar** y los easter eggs.

Todo sucede localmente, en el navegador. Respetan la preferencia de movimiento reducido y arrancan en silencio.

## Cómo verlas

Abrí cualquiera de los `.html` en el navegador. No necesitan servidor. Incluyen CSS y JavaScript vanilla en el mismo archivo. Las fotos se cargan con rutas relativas a `assets/Gaucho/fotitos/fotos/` (en la raíz del repo): si movés un HTML de carpeta, revisá esos links.

Tests: `node --test tests/paginaGaucho5Propuestas.test.mjs`.

## Pendiente

El contacto definitivo, el enlace de reunión y la ubicación de Modo seguime y Casa de Gaucho siguen sin definirse. Falta un nuevo rumbo de diseño para la página.

# Spec: réplica del estilo de 108 Supply con la información de Gaucho

Fecha: 26/11/2026. Pedido de Mavi: analizar https://108.supply/ y replicar **su estilo** con los datos de Gaucho ya recolectados. Hecha por Claude directamente (sin Codex).

## Análisis de 108 Supply (lo que se replica)

| Rasgo | Cómo es en 108 Supply | Cómo se traduce a Gaucho |
|---|---|---|
| Base | Página negra pura, texto `#EFF1F0` | Fondo `--gaucho-taller`, texto crema |
| Navegación | Píldoras flotantes y fijas arriba: logo, links, "Sign in", CTA lima | Logo "GAUCHO", Ficha / La cinta / Taller / Entrevista, CTA lima "Contratar a Gaucho" |
| Hero | Panel gigante de esquinas redondeadas (~27px) con foto full-bleed y una tarjeta mono flotante abajo a la derecha | Panel con la foto del cartel de neón de Paisanos y tarjeta mono "Omnibot 5402 · TOMY 1984" |
| Tarjeta de acento | Tarjeta lima con números condensados ultra pesados | Tarjeta lima con la fecha del Hackware en tipografía condensada |
| Tipografía | Grotesca (Diatype) con tracking apretado; etiquetas en mono (Geist Mono) en mayúsculas | Geist + Geist Mono + Anton (Google Fonts) |
| Titulares | Dos tonos: primera frase en color pleno, segunda en gris | Igual |
| Prueba social | Fila "Usado por diseñadores en..." con logos en marquee | "Visto en": Paisanos, SLA, LABITCONF, Wallbit, Hackware, La Ofi, como texto (sin logos de terceros) |
| Panel claro | Panel blanco redondeado con encabezado mono de 3 columnas y carrusel de tarjetas gris claro (`#EFF1F0`, nombre + categoría + precio) | Panel claro "La cinta": tarjetas de laburos (nombre + categoría + fecha) con flechas |
| Aviso inferior | Píldora flotante con punto lima y cierre | "Gaucho busca laburo · Disponible" |

No se copia: logo, textos, imágenes ni la tipografía propietaria de 108 Supply.

## Contenido (de `docs/investigacionGaucho.md` y de la maqueta archivada)

- Perfil: Omnibot 5402 de TOMY (1984), DevRel y creador de contenido en Paisanos.
- Laburos anteriores: Hackware (jurado, 05/09/2026), LABITCONF (speaker y embajador, 31/10/2026), Wallbit (presentador, 19/11/2026), La Ofi (anfitrión), Gaucho Adventures (juego).
- Dónde le gustaría laburar: autos, herramientas, sensores (Toyota Argentina, Bosch Professional, Arbit Ingeniería: empresas candidatas, sin contacto confirmado).
- Entrevista: llamada simulada local. Al compartir pantalla aparece el "CV falso" (`assets/Gaucho/cvFalso/gaucho_bikini_cv_falso.png`), ver `docs/notasDeMavi.md`.
- No se inventan datos: lo no confirmado se rotula "a confirmar".

## Reglas técnicas

- Archivo único: `docs/designKits/propuestas/paginaGaucho/replica108Supply_gaucho.html`, CSS y JS vanilla integrados, mobile first.
- Ids de sección de la maqueta: `perfil`, `cinta`, `taller`, `entrevista`.
- Solo tokens `--gaucho-*` para colores de marca (lima = `--gaucho-lima`).
- Excepción a la regla "modo claro" de la ronda 2: Mavi pidió replicar 108 Supply, que es oscuro. Los paneles claros usan `--gaucho-crema-tomy`/blanco.
- Accesibilidad: `lang="es"`, `prefers-reduced-motion`, arranca en silencio, botones con nombre, contraste AA.
- Sin recursos externos salvo Google Fonts. Fotos por rutas relativas `../../../../assets/Gaucho/...` que existan.

## Verificación

`node --test tests/paginaGauchoReplica108Supply.test.mjs`

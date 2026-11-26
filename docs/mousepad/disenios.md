# Diseños del mousepad de Gaucho (120 x 60 cm)

Spec: `specs/mousepadGaucho.md`. Tests: `tests/mousepad.test.mjs`.

## Idea común

Un mousepad enorme tipo escritorio, con **tiras de cómic de fondo** como en las referencias de estilo, y a Gaucho (Omnibot 5402 de TOMY, 1984, restaurado por Paisanos) como protagonista. Los easter eggs salen de lo que ya sabemos de él en `docs/investigacionGaucho.md`.

### Referencias de estilo (las que pasó Mavi)

- `docs/mousepad/referencias/estilo_tiras_comic_deadpool_mockup.png`: personaje recortado en el centro, sobre un collage de viñetas de cómic viejo con globos y onomatopeyas.
- `docs/mousepad/referencias/estilo_deadpool_acostado_sobre_comic.png`: personaje acostado cruzando todo el ancho, sobre viñetas rotas y explosiones.
- `docs/mousepad/referencias/estilo_gta5_collage_de_vinietas.png`: panel central con el título y viñetas de personajes a los costados, borde rojo.

### Easter eggs disponibles (fuente: `docs/investigacionGaucho.md`)

Ojos rojos que brillan, cámara Raspberry con cable plano naranja entre los ojos, cartel "TOMY", panel "COMPUTER PROGRAMMING", casetera, brazos-pinza negros, base con ruedas, "dos motores, una Raspberry", tornillos perdidos, mate derramado, bandera argentina con Sol de Mayo, cartel de neón PAISANOS, Hackware (Colegiales, 5 de Septiembre), "Misión Despertar", cassette C-60, cartucho SEGA de Gaucho Adventures, "PRESS START", San Gaucho patrono del código y los fierros, "do it for him", ojos que cambian a violeta en modo escenario, ESP32 y ReSpeaker.

### Paleta base (de `docs/investigacionGaucho.md`)

Azul Omnibot `#0A2B46`, rojo ojos `#F3462E`, naranja sol `#F44525`, crema papel `#F4E2C4`, celeste bandera `#74ACDF`, marrón sombrero `#523823`.

### Texto común para todos los prompts

Lienzo horizontal 2:1 (120 x 60 cm). Margen de seguridad de 3 cm sin detalles importantes. El fondo de cómic llega hasta el borde. Sin marcas de agua ni mockups: es el arte plano para imprimir.

---

## Diseño 1: Gaucho Adventures (SEGA 16-bit)

Gaucho como en la portada del juego de Sega Megadrive: sombrero de cowboy, capa y escopeta, saliendo de un muro de ladrillos con explosión naranja. Las tiras de cómic de fondo se dibujan como viñetas pixeladas, con globos de texto en tipografía de 16 bits.

**Referencias:**
- `assets/Gaucho/fotitos/juego/gaucho_adventures_juego_sega_gonzalo_martinese.png`
- `assets/Gaucho/fotitos/juego/gaucho_junto_a_tv_gaucho_adventures_press_start.png`
- `docs/mousepad/referencias/estilo_tiras_comic_deadpool_mockup.png`

**Easter eggs:**
- Lomo rojo vertical con "SEGA" y el cuadradito "P" de Paisanos en el borde izquierdo.
- Cartel "PRESS START" parpadeando en una viñeta.
- Ojos rojos que brillan como lo más luminoso de la escena.
- Globo: "dos motores, una Raspberry".
- Un mate volcado en una viñeta, con la onomatopeya "SPLASH".
- Tornillitos sueltos rodando por el piso, con un contador "TORNILLOS: 3/∞".
- Cartucho de Gaucho Adventures con la leyenda "pronto en cartucho".
- Barra de vida con el texto "BATERÍA".

**Prompt para Codex:** Generá una imagen horizontal 2:1 para un mousepad de 120 x 60 cm. Estilo: portada de juego 16-bit de Sega Megadrive, pixel art con paleta limitada y degradé azul-celeste en los títulos. Protagonista: Gaucho, el robot Omnibot TOMY 1984 de la referencia `gaucho_adventures_juego_sega_gonzalo_martinese.png`, con sombrero de cowboy, capa y escopeta, ojos rojos luminosos, saliendo de un muro de ladrillos con una explosión naranja, ubicado al centro-derecha. Fondo: collage de tiras de cómic pixeladas, con viñetas de distintos tamaños, globos de texto y onomatopeyas, siguiendo la composición de `estilo_tiras_comic_deadpool_mockup.png`. Incluí los easter eggs de la lista. Título "GAUCHO ADVENTURES" en pixel art arriba a la izquierda. Respetá el texto común de lienzo.

---

## Diseño 2: Gaucho pixel art

Retrato del Gaucho detective/cowboy del pixel art: sombrero de ala marrón y sobretodo marrón, ojos naranja-rojo, sobre azul noche. Las tiras de cómic son viñetas pixeladas de escenas de su día a día en la oficina.

**Referencias:**
- `assets/Gaucho/fotitos/arte/gaucho_pixel_art_sombrero_y_saco.png`
- `assets/Gaucho/fotitos/fotos/gaucho_robot_cartel_neon_paisanos_bandera.png`
- `docs/mousepad/referencias/estilo_deadpool_acostado_sobre_comic.png`

**Easter eggs:**
- Una viñeta con el cartel de neón "PAISANOS" y la bandera argentina.
- Globo con la frase "Paper Planes" y avioncitos de papel volando entre las viñetas.
- Raspberry con un cartelito "bien ventilada".
- Una viñeta con Gaucho en el banquito alto de una charla, con micrófono.
- Un sprite de mate con vapor.
- Íconos pixel art de logros: sombrero, mate, Raspberry, soldadora, llave.
- Ojos que parpadean en tres cuadros seguidos, como una animación.
- Marco blanco tipo cuadro, igual al de la imagen original.

**Prompt para Codex:** Generá una imagen horizontal 2:1 para un mousepad de 120 x 60 cm. Estilo: pixel art detallado, paleta marrón tierra (`#523823`), azul noche (`#0A2B46`) y naranja (`#F3462E`). Protagonista: Gaucho con sombrero de ala marrón y sobretodo marrón, tal como en `gaucho_pixel_art_sombrero_y_saco.png`, acostado o apoyado cruzando el centro del lienzo como en `estilo_deadpool_acostado_sobre_comic.png`. Fondo: tiras de cómic en pixel art con escenas de la oficina de Paisanos, globos de texto y onomatopeyas. Incluí los easter eggs de la lista. Respetá el texto común de lienzo.

---

## Diseño 3: Gaucho realista

Gaucho como se ve en las fotos reales y en el render de GauchoStudio: plástico crema, ojos LED rojos, cámara con cable naranja, brazos-pinza. Sobre un fondo de tiras de cómic en tonos viejos, recortado como la figura de Deadpool en la referencia.

**Referencias:**
- `assets/Gaucho/fotitos/fotos/gaucho_robot_cartel_neon_paisanos_bandera.png`
- `assets/Gaucho/fotitos/render3d/gaucho_studio_render_3d_sombrero_pajilla_poncho_y_escopeta.png`
- `assets/Gaucho/fotitos/eventos/charla_fijacion_labitconf_gaucho_en_escenario.png`
- `docs/mousepad/referencias/estilo_tiras_comic_deadpool_mockup.png`

**Easter eggs:**
- Cartel "TOMY" visible en el cuerpo, como en el render.
- Cámara Raspberry con cable plano naranja entre los ojos.
- Poncho marrón y sombrero de paja, de GauchoStudio.
- Una viñeta con el escenario de LABITCONF y la pantalla azul "Fijación", con los ojos violetas.
- Un mate derramado cerca de la base con ruedas.
- Afiche de jurados de la Hackware en una viñeta.
- Cinta C-60 asomando de la casetera.
- Un cable de batería que no llega, con el texto "batería: lo justo".

**Prompt para Codex:** Generá una imagen horizontal 2:1 para un mousepad de 120 x 60 cm. Estilo: ilustración semirrealista con texturas de plástico crema de 1984 y ojos LED rojos brillantes. Protagonista: Gaucho tal como en las fotos de referencia, con sombrero de paja y poncho marrón del render 3D, en pose dinámica al centro-derecha, recortado con un contorno negro grueso como el personaje de `estilo_tiras_comic_deadpool_mockup.png`. Fondo: collage de viñetas de cómic viejo, con papel envejecido, globos y onomatopeyas. Incluí los easter eggs de la lista. Respetá el texto común de lienzo.

---

## Diseño 4: Merch oficial TOMY 1984

Basado en el afiche del merch oficial: sol naranja, planos técnicos con cotas y la franja de cuatro tintas. Las tiras de cómic se vuelven un manual de instrucciones de juguete de los 80.

**Referencias:**
- `assets/Gaucho/fotitos/arte/merch_oficial_gaucho_omnibot_tomy_1984.png`
- `assets/Gaucho/fotitos/arte/do_it_for_him_thecualcaexperience.png`
- `docs/mousepad/referencias/estilo_gta5_collage_de_vinietas.png`

**Easter eggs:**
- Texto "OMNIBOT TOMY (1984) · ROBOT · CASSETTE · BEVERAGE CARRIER".
- Franja de cuatro tintas: rojo `#F3462E`, naranja `#F28409`, dorado `#EAA540` y celeste `#74ACDF`.
- Planos técnicos con cotas y flechas señalando "ojos", "cámara", "ESP32" y "ReSpeaker".
- Viñeta de la tarjeta "do it for him".
- Una etiqueta "Modelo 5402".
- Un cassette C-60 con la etiqueta "Misión Despertar".
- Un tornillo con la cota "casi todos perdidos".
- Un sello "Aprobado: DevRel de Paisanos".

**Prompt para Codex:** Generá una imagen horizontal 2:1 para un mousepad de 120 x 60 cm. Estilo: afiche de merch de los 80 de TOMY, papel crema `#F4E2C4`, azul Omnibot `#0A2B46`, sol naranja grande y la franja de cuatro tintas, copiando la dirección de arte de `merch_oficial_gaucho_omnibot_tomy_1984.png`. Composición: panel central con Gaucho y el título, viñetas con planos técnicos y dibujos del robot a los costados, como en `estilo_gta5_collage_de_vinietas.png`, con borde rojo. Fondo de tiras de cómic de manual de instrucciones. Incluí los easter eggs de la lista. Respetá el texto común de lienzo.

---

## Diseño 5: Gaucho malo (campera de cuero)

El lado "actitud" de Gaucho: campera de cuero negra, lentes de sol sobre los ojos rojos y un cigarrillo de utilería en la pinza. Cómic de acción como la referencia de Deadpool acostado, con explosiones y onomatopeyas.

**Referencias:**
- `assets/Gaucho/fotitos/fotos/gaucho_campera_cuero_y_lentes_gonzalo_martinese.png`
- `assets/Gaucho/fotitos/arte/san_gaucho_estampita_patrono_del_codigo.jpeg`
- `docs/mousepad/referencias/estilo_deadpool_acostado_sobre_comic.png`

**Easter eggs:**
- Ojos rojos asomando detrás de los lentes de sol.
- Viñeta con la estampita de "San Gaucho, patrono del código y los fierros", con la bandera y el Sol de Mayo.
- Onomatopeyas: "RRRRR" de motor y "CLANK" de pinza.
- Globo: "dos motores, una Raspberry y mucha actitud".
- Mochila de fondo, como en la foto original.
- Un mate humeante en una viñeta, con la leyenda "se tiró el mate encima".
- Un cartel "NO CONTRATAR" que se corre solo, referencia al botón que se escapa del cursor.
- Cinta dorada con letras cursivas.

**Prompt para Codex:** Generá una imagen horizontal 2:1 para un mousepad de 120 x 60 cm. Estilo: cómic de acción con tintas gruesas y semitonos, como `estilo_deadpool_acostado_sobre_comic.png`. Protagonista: Gaucho de la foto `gaucho_campera_cuero_y_lentes_gonzalo_martinese.png`, con campera de cuero y lentes de sol, acostado cruzando el ancho del lienzo en pose canchera. Fondo: tiras de cómic con explosiones, globos y onomatopeyas. Incluí los easter eggs de la lista. Respetá el texto común de lienzo.

---

## Diseño 6: Gaucho cordobés

Gaucho "full cordobés": el mismo estilo del diseño 3 (cómic viejo semirrealista, el que más le gustó a Mavi), pero con todo el folclore de Córdoba: tonada, cuarteto, fernet con coca y las sierras. Las tiras de cómic de fondo mezclan viñetas de la Docta y de las sierras.

**Referencias:**
- `assets/Gaucho/fotitos/fotos/gaucho_robot_cartel_neon_paisanos_bandera.png`
- `assets/Gaucho/fotitos/render3d/gaucho_studio_render_3d_sombrero_pajilla_poncho_y_escopeta.png`
- `docs/mousepad/resultados/disenio3_realista.png`
- `docs/mousepad/referencias/estilo_tiras_comic_deadpool_mockup.png`

**Easter eggs:**
- Una jarra de fernet con coca en la pinza, con el hielo y la espuma de la coca.
- Parlante gigante de cuarteto con ondas de sonido y la onomatopeya "¡TUN TUN TUN!".
- Globo con tonada cordobesa: "¡Eeeepa! Dos motores, una Raspberry y a darle, nomás".
- Viñeta con las sierras y un dique con el sol bajo, en tonos naranja.
- Una viñeta con el Cabildo y la Manzana Jesuítica de Córdoba, dibujadas al estilo cómic.
- Cartel de neón "PAISANOS" en una viñeta, con una banderita de Córdoba (franjas celeste, blanca y celeste) al lado de la argentina.
- Un alfajor cordobés y un choripán como "ítems de vida" en una barra de energía.
- Ojos rojos que brillan como el punto más luminoso, con el sombrero de paja de GauchoStudio.
- Cassette C-60 con la etiqueta "Cuarteto Mix".

**Prompt para Codex:** Generá una imagen horizontal 2:1 para un mousepad de 120 x 60 cm. Estilo: el mismo del diseño 3 (`disenio3_realista.png`): cómic viejo semirrealista con tintas gruesas, papel envejecido y colores cálidos. Protagonista: Gaucho tal como en las fotos de referencia, con sombrero de paja y poncho marrón, ojos rojos luminosos y una jarra de fernet con coca en la pinza, en pose de festejo al centro-derecha, recortado con un contorno negro grueso como el personaje de `estilo_tiras_comic_deadpool_mockup.png`. Fondo: collage denso de tiras de cómic con viñetas de Córdoba (sierras, dique, Cabildo, parlante de cuarteto), globos y onomatopeyas. Texto de globos en español cordobés, corto. Incluí los easter eggs de la lista. Respetá el texto común de lienzo.

---

## Resultados (25/11/2026)

Generados por Codex con ImageGen, en `docs/mousepad/resultados/`. Los 5 salieron en 1774 x 887 px (2:1 exacto), muy por debajo de los 7087 x 3543 px ideales: para imprimir a 120 x 60 cm hay que escalarlos (upscaler con IA) o regenerarlos en mayor resolución.

| Diseño | Archivo | Observaciones |
|---|---|---|
| 1 | `disenio1_gaucho_adventures.png` | Cumple los 8 easter eggs. Revisar el texto "SEGA" pegado al borde izquierdo. |
| 2 | `disenio2_pixel_art.png` | Cumple los 8 easter eggs. |
| 3 | `disenio3_realista.png` | Incluye caras de personas reales (la oradora de LABITCONF y los jurados de la Hackware) y textos que no estaban en el brief ("vuelve a recorrer el país, ahora hackeado", "un clásico argentino... con algo más"). Pendiente decidir si se dejan. |
| 4 | `disenio4_merch_tomy.png` | Cumple los 8 easter eggs. Texto cercano al borde inferior. |
| 5 | `disenio5_gaucho_malo.png` | Cumple los 8 easter eggs. La cinta dorada quedó vacía (sin texto). |

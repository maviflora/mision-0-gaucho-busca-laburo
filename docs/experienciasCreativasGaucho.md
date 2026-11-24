# Experiencias creativas de Paisanos y una experiencia "wow" para Gaucho

Documento de inspiración. Primero analiza cómo Paisanos arma experiencias locas y las vuelve algo conciso. Después propone ideas para una experiencia de Gaucho.

Etiquetas: **[C]** confirmado (lo vi yo en el navegador el 23/11/2026), **[A]** autoreportado o de una sola fuente, **[I]** inferencia mía.

## Índice
1. Qué experiencias miré
2. Patrones: cómo hacen algo loco y conciso
3. Receta en 7 pasos
4. Ideas "wow" para Gaucho
5. Mi recomendación
6. Preguntas para Mavi
7. Easter eggs (actualizado 24/11/2026)
8. Estructura narrativa de la webapp (actualizado 24/11/2026)
9. Estrategia de tracción: conseguirle un laburo real a Gaucho (actualizado 24/11/2026)
10. Diseño y dirección de arte (actualizado 24/11/2026)
11. Merch y extras (actualizado 24/11/2026)
12. Misiones y cómo suma cada idea (actualizado 24/11/2026)
13. Dudas abiertas (actualizado 24/11/2026)

---

## 1. Qué experiencias miré

### 1.1 Chiche Night: un hotel que se explora (https://www.chichenight.com/)
- **Qué se ve [C]:** pantalla negra con el logo en letras geométricas crema y rojo y un único botón, "ENTRAR". Al entrar aparece un **hotel en corte, ilustrado en 2D** con estética de película de época: paredes rojas, lámpara, ascensor con indicador de piso, sillón, palmera, llaves en la pared. Es un edificio vertical y se "surfea" con el scroll.
- **Gaucho está adentro [C]:** el conserje de la recepción es el robot, con sombrero y una luz sobre el escritorio. También se lo ve reflejado en el espejo del pasillo. El menú de objetos clickeables incluye "GAUCHO".
- **Cómo funciona [C]:** cada objeto iluminado abre una tarjeta con información. Los objetos son: TIMBRE, GAUCHO, RADIO, BIENVENIDA, HORA, LLAVES, PALMERA y PISOS. Hay un cartel de ayuda ("Haz clic en los objetos iluminados · Surfea con el scroll") y un botón **"Ver info"** que da toda la información en texto.
- **Qué contiene [C]:** un evento real (29/10/2026, Paisanos x mthd_405). La info práctica (hora, lugar, programa, entradas) está repartida en los objetos del hotel.
- **Lo conciso:** un evento entero cabe en una sola metáfora (un hotel) con ocho objetos. No hay menú, ni secciones, ni textos largos.

### 1.2 a better byte: el escritorio de Bukowski (https://a-better-byte.vercel.app/)
- **Qué se ve [C]:** pantalla negra con el título en tipografía de máquina de escribir y "click to begin". Después una **escena 3D** de un escritorio de noche: lámpara naranja, radio, botella de vino, cenicero, libros, una Macintosh y una impresora, con luz que se prende de a poco.
- **Cómo funciona [C]:** se lee el poema en la pantalla de la compu con scroll o arrastrando; se cierra el poema y con doble click se abre otro de la carpeta; se imprime para llevarse la página. Sonido apagado por defecto, "skip intro" y "or read the poems as text".
- **Qué contiene [C]:** poemas de Bukowski sobre su computadora (1990-1994).
- **Autoría [A]:** según Mavi es de Sofi. El sitio no lo dice.
- **Lo conciso:** un solo objeto (la compu) contiene todo el contenido. La escena es el menú.

### 1.3 Otras experiencias de Paisanos, resumidas
Detalle en `docs/investigacionPaisa.md`, sección 7.
- **Hackware [C]:** hackatón de hardware de 12 horas, mismo kit para todos, "volver a lo analógico".
- **Gaucho, el robot [C]:** un juguete de 1984 restaurado, con voz por LLM, cuenta propia y trabajos. Su origen se cuenta en un video de humor ("la historia oficial, o más o menos").
- **Gaucho Adventures [C]:** juego para Sega Megadrive hecho con SGDK que corre en una Retropie, "pronto en cartucho".
- **La Ofi [C]:** coworking de los jueves con una condición simpática: traer algo rico para compartir.
- **Casa Paisanos en Punta Tech 2027 [C]:** una casa entera para founders en el evento más importante de la región.
- **San Gaucho, merch, "do it for him" [C]:** cultura de fans que alimentan los propios usuarios.

---

## 2. Patrones: cómo hacen algo loco y conciso

1. **Una metáfora, un lugar.** El hotel, el escritorio. En vez de un sitio con secciones, hay un solo espacio con cosas adentro. [I]
2. **El objeto es el botón.** El timbre, la radio, la compu, las llaves: lo que se toca es parte de la escena, no un menú. [C]
3. **Una sola entrada, sin fricción.** Una pantalla, un botón ("ENTRAR", "click to begin"). Nada de registros. [C]
4. **Siempre hay salida simple.** "Ver info" y "or read the poems as text". La locura es opcional, la información no se pierde. [C]
5. **Un gesto cierra la experiencia.** Imprimir una página, abrir una tarjeta con la hora y el lugar. Algo útil o que te llevás. [C]
6. **Atmósfera antes que explicación.** Luz, sonido (apagado por defecto), tipografía propia. El tono entra por los sentidos. [C]
7. **Poco contenido, muy cuidado.** Ocho tarjetas, unos poemas, un afiche. [C]
8. **Humor y oficio.** El conserje es Gaucho, "la historia oficial (o… más o menos)", "San Gaucho". Se toman en serio el hacer y no a sí mismos. [A/I]
9. **Publicadas como sitios sueltos.** Un dominio o un subdominio por idea, fáciles de compartir. [I]
10. **Gaucho aparece como personaje, no como logo.** Es el conserje, el jurado, el embajador. [C]

## 3. Receta en 7 pasos (para armar nuestra experiencia)

1. **Elegir un lugar o escena** que cuente algo de Gaucho sin explicarlo.
2. **Escribir en una línea** qué se lleva la persona. Si no entra en una línea, está demasiado grande.
3. **Listar 6 a 8 objetos** de ese lugar. Cada uno abre una sola tarjeta o acción.
4. **Una pantalla de entrada** con un solo botón.
5. **Una versión de texto** con lo mismo, para accesibilidad y para quien no quiere jugar.
6. **Un gesto final** que genere algo compartible: una imagen, una página impresa, un código.
7. **Probar en celular** y con sonido apagado: tiene que funcionar igual.

---

## 4. Ideas "wow" para Gaucho

Todas usan lo que ya sabemos de Gaucho: es un robot de 1984 con voz, cámara y personalidad por LLM, busca laburo y le interesan "fierros con propósito" y una Raspberry. Son ideas mías [I], para elegir y mezclar.

### Idea A. "La entrevista de laburo": Gaucho te entrevista a vos
- **Escena:** una oficina de los 80 con una lámpara, un escritorio y Gaucho del otro lado con su CV.
- **Interacción (versión original, a revisar según la decisión de Mavi de abajo):** el reclutador (la persona) lo entrevista. Cada objeto del escritorio (CV, termo, teléfono, carpeta) abre un tramo de su experiencia real (las 14 de `investigacionGaucho.md`, sección 15.3). Una pregunta de la persona la contesta el chatbot con la voz real de Gaucho.
- **Gesto final:** se imprime su CV como "recibo térmico" o ficha técnica, con un botón "contratar a Gaucho" que lleva al mail de contacto.
- **Por qué sorprende:** invierte el rol (el robot te entrevista) y es el objetivo real del proyecto: que lo contraten.
- **Esfuerzo:** medio. Escena 2D ilustrada + chat con prompt de personalidad.

### Idea B. "Gaucho por dentro": el robot abierto, pieza por pieza
- **Escena:** corte del robot en estilo historieta retro, con ojos que cambian de estado.
- **Interacción:** cada pieza explica un spec real (ESP32, ReSpeaker, cámara Raspberry, parlante original, wake word "Gaucho"). Tocás los ojos y se encienden; tocás el micrófono y habla.
- **Gesto final:** armás una "ficha técnica" tipo manual del Omnibot para compartir.
- **Por qué sorprende:** convierte los specs técnicos del video de SLA en un juguete.
- **Esfuerzo:** medio. Ilustración + datos que ya están en el doc.

### Idea C. "Una tarde en el taller de Gaucho"
- **Escena:** taller retro con herramientas, un auto, sensores, una Raspberry en la mesa. Es lo que dijo que quiere: "fierros con propósito".
- **Interacción:** cada objeto es una empresa o un tipo de laburo al que podría aplicar (auto, herramienta, sensor). Tocás uno y Gaucho te cuenta por qué lo quiere y qué podría aportar.
- **Gesto final:** "armá la oferta de laburo para Gaucho": elegís industria y rol y se genera una propuesta.
- **Por qué sorprende:** muestra el deseo de Gaucho y hace de puente con las empresas candidatas.
- **Esfuerzo:** medio-alto.

### Idea D. "Modo seguime": la experiencia reacciona a la cámara
- **Escena:** Gaucho en pantalla con los ojos que siguen al mouse o, con permiso, a la cámara.
- **Interacción:** dice "Gaucho, seguime" y el personaje te sigue. Con el micrófono, la wake word "Gaucho" lo despierta.
- **Por qué sorprende:** es exactamente lo que hace el robot real, llevado al navegador.
- **Riesgo:** pide permisos de cámara y micrófono; requiere versión alternativa. Es la más "wow" y la más frágil.
- **Esfuerzo:** alto.

### Idea E. "La Cinta de Gaucho": una aventura de 8 bits
- **Escena:** una pantalla de inicio "PRESS START" estilo Sega, como Gaucho Adventures, pero cada nivel es una experiencia laboral.
- **Interacción:** jugás un nivel corto por cada hito (Hackware, LABITCONF, La Ofi). Al terminar, desbloqueás una "estampita" coleccionable.
- **Por qué sorprende:** sigue la línea del juego oficial y de San Gaucho, y el juego es el CV.
- **Riesgo:** el juego oficial es de Gonza Martinese; conviene hacerlo con su permiso o como homenaje.
- **Esfuerzo:** alto.

### Idea F. "Casa de Gaucho": un hotel/depto propio, pero distinto al de Chiche Night
- **Escena:** un lugar nuevo para Gaucho (un depto de los 80, un camarín, un galpón), con objetos de sus experiencias.
- **Ojo:** el hotel ya lo usó Chiche Night. Copiar el formato lo haría parecer derivado; conviene usar la **receta**, no la escena.
- **Esfuerzo:** medio.

---

### Decisión de Mavi (23/11/2026): le gusta la idea A, pero con Gaucho entrevistándote a vos
- **Qué eligió:** la **idea A, "La entrevista de laburo"**, y le gusta que **Gaucho te entreviste a vos**, en vez de que vos lo entrevistes a él.
- **Qué cambia respecto de la versión original de la idea A:** el robot hace las preguntas y la persona responde. Es una inversión de roles más fuerte: Gaucho, el que busca laburo, hace de reclutador.
- **Cómo podría funcionar** [I, para revisar con Mavi]:
  - Gaucho pregunta cosas de su estilo ("¿tenés fierros con propósito?", "¿aceptás una Raspberry en el equipo?").
  - Las respuestas de la persona definen qué experiencias suyas le cuenta de vuelta o qué perfil le "asigna" (DevRel, Hardware/Edge AI, Embajador de eventos, Mascota de producto).
  - El gesto final puede ser el resultado de la entrevista: una ficha con "veredicto de Gaucho" para llevarse, y de paso Gaucho se muestra a sí mismo.
- **Pendiente:** cuántas preguntas, si se responde por texto o por voz, y cómo se vuelve útil para conseguirle laburo a Gaucho (por ejemplo, que dé un contacto si el match es bueno). Sin decidir.

## 5. Mi recomendación
**Idea A con un toque de la B.** Es la que mejor cumple el objetivo del proyecto (que Gaucho consiga laburo), cabe en una sola escena, y reutiliza todo lo investigado (experiencias, voz, paleta, estilo historieta retro). La B se puede sumar como una tarjeta más del escritorio ("ver cómo estoy hecho"). La D queda como un extra opcional si hay tiempo.

Cierre sugerido: el gesto final es una **hoja imprimible** (CV de Gaucho) con su estética, porque combina lo que hizo "a better byte" (imprimir para llevarte algo) con el objetivo real.

## 6. Preguntas para Mavi
1. ¿Cuál de las ideas (A a F) te da más ganas, o querés mezclar? No decidí nada por vos.
2. ¿La experiencia vive dentro de la webapp o como un sitio aparte, como hace Paisanos?
3. ¿Se puede hablar con Gaucho (chat o voz) o es solo para explorar?
4. ¿Querés confirmar con Sofi la autoría de "a better byte" y pedirle cómo la armó?
5. ¿Pedimos permiso a Paisanos para usar el cartel de neón, la bandera y los personajes?

---

## 7. Easter eggs (actualizado 24/11/2026)

Fuente: notas de Mavi (24/11/2026). Son videitos cortos escondidos en la experiencia. Estilo común: estética retro marcada, medio historieta o pixel art, la que caracteriza a Gaucho (referencias en `assets/Gaucho/fotitos/arte/`, por ejemplo `gaucho_pixel_art_sombrero_y_saco.png`). Encajan con la experiencia elegida (idea A, "Gaucho te entrevista a vos") como premios escondidos: aparecen al tocar un objeto del escritorio, al responder cierta cosa o al quedarse un rato sin hacer nada. [I] el cómo se dispara cada uno.

### 7.1 Gaucho hace el check "no soy un robot" para aplicar a un laburo en LinkedIn
- **Idea (de Mavi):** videito de Gaucho, con estética retro/historieta/pixel art, haciendo el check de "no soy un robot" con la extensión de Chrome de Claude para aplicar a un laburo en LinkedIn.
- **Tono:** humor absurdo, autoparodia de robot que busca laburo. Juega con que justo el robot es el que tiene que demostrar que no es un robot.
- **Formato:** clip corto (unos segundos), vertical y horizontal si se puede, con la pantalla de LinkedIn estilizada como ventana retro (no copiar la marca tal cual). [I]
- **Esfuerzo estimado [I]:** bajo-medio. Un solo plano, pocos elementos animados.
- **Cómo encaja:** es el chiste del objetivo del proyecto (que consiga laburo) y sirve de cierre del flujo "contratar" o de contenido suelto para redes. Riesgo a revisar: usar la interfaz de LinkedIn y el nombre de Claude en un video público; conviene estilizar y no mostrar marcas calcadas.

### 7.2 Los primeros días de laburo de Gaucho
- **Idea (de Mavi):** Gaucho en sus primeros días de laburo. La lista de gags que escribió, en orden:
  1. Detona la máquina de café.
  2. Le dice "boludo" a uno.
  3. Se queda sin batería mientras trabaja y todos piensan que se puso a dormir.
  4. Le hace cortocircuito el brazo, abre su garrita mecánica y se le cae el café que recién se sirvió.
  5. Se lleva puesta la mesa y tira una mac.
- **Nota:** la nota de Mavi termina en "tira una mac" (sin punto final). No inventé un final; queda abierto si es una sola escena encadenada o varias viñetas.
- **Tono:** comedia física de "el nuevo en la oficina", cariñosa, tipo historieta muda con globos de texto. Cuidar "boludo": es coloquial rioplatense, ver si se deja o se baja de tono según donde se publique.
- **Formato:** o un video más largo en viñetas, o una tira de varios clips cortos (un gag por clip) que se pueden usar como contenido para redes. [I]
- **Esfuerzo estimado [I]:** medio-alto si es un solo video continuo; medio si se hace por clips.
- **Cómo encaja:** en la narrativa va después del nacimiento y antes de la marca personal ("el ahora"), y también en el TikTok de "día 1 buscando laburo" (sección 9). Muestra la humanidad torpe y simpática que Mavi marca como lo único de Gaucho. Un guiño con la idea del "no lo alimenta una batería, lo alimenta la magia" (el gag de la batería juega al revés).

### 7.3 El gaucho chaqueño cuidando las vacas
- **Idea (de Mavi):** usando https://gaucho-studio.vercel.app/ hizo un gaucho chaqueño cuidando las vacas. Va a ser otro videito easter egg.
- **Estado:** el render ya está en `assets/Gaucho/fotitos/render3d/gaucho_studio_render_3d_sombrero_pajilla_poncho_y_escopeta.png` (es una imagen 3D; el video propiamente dicho aún se arma). [C: el archivo existe]
- **Tono:** contemplativo y humorístico, un respiro de campo entre tanta oficina. Contrasta con la estética de taller y corporativo.
- **Formato:** video corto de vacas y Gaucho de poncho y sombrero de paja, hecho en gaucho-studio. [I]
- **Esfuerzo estimado:** bajo, porque la parte difícil (el render) ya existe. Falta animarlo y sumarle sonido.
- **Cómo encaja:** premio escondido ligado a la parte "gaucho" de Gaucho (paisano, campo). Puede aparecer al tocar un objeto rural en el escritorio o al escribir una palabra.

---

## 8. Estructura narrativa de la webapp (actualizado 24/11/2026)

Mavi anotó que "hay ideas que no estoy llegando a conectar". Esta es la forma de conectarlas en tres actos, con el contenido que ella listó.

### Acto 1. Cómo llegué acá (el antes)
- El taller, donde Gaucho se apaga por la vida corpo blanca y sin sentido y quiere un propósito, "rock and roll".
- Nace de nuevo en Paisanos, por la magia: carga la batería con magia y buena onda.
- Hueco que Mavi detectó: existe la historia de los orígenes desde el punto de vista de Paisanos (el video "Gaucho: El Origen"), pero falta el punto de vista de Gaucho. Este acto lo cubre. Pista de Jez: hacer un throwback de Gaucho naciendo en el taller.

### Acto 2. El ahora
Todo lo que Mavi enumeró, ordenado por tipo:
- **Marca:** tiene marca personal, es un tipo muy piola, la gente lo dibuja, es un santo (San Gaucho).
- **Trayectoria:** es jurado (Hackware), dio charlas (LABITCONF), es presentador y embajador de la tarjeta metálica Wallbit (19/11/2026), labura para Paisanos y en eventos haciendo de sponsor. Mavi lo llama "alta experiencia laboral". Aclaración de Mavi: lo contratan de otras empresas para eventos, colaboraciones y proyectos piolas, pero sigue laburando en Paisanos.
- **Obra propia:** su juego, Gaucho Adventures, y su corto, "Gaucho: Los Orígenes" (nombre como lo escribió Mavi).
- **La clave:** no lo alimenta una batería, lo alimenta la magia de buildear por amor al arte.

### Acto 3. Contratar
- La experiencia interactiva elegida: **"Gaucho te entrevista a vos"** (ver la decisión de Mavi en la sección 4). A Mavi le da "un toque desafiante y medio mandado, bien gauchezco". [Esto es palabra de Mavi.]
- Cómo darle voz y cerebro (opciones, sin decidir):
  1. **Voz con ElevenLabs** (o similar), alimentada con patrones de voz de Gaucho sacados de videos donde habla.
  2. **IA con archivo de personalidad:** un LLM alimentado con videos y tweets de Gaucho más un contexto escrito.
  3. **Conexión directa a Gaucho:** si tiene API, conectarse a Gaucho mismo.
  4. Combinación: texto de la IA + voz de ElevenLabs.
- Dudas de Mavi sobre la conexión:
  - "¿Gaucho tiene API?" Mavi lo anotó como duda. En las investigaciones del repo no tengo confirmación; queda para preguntar a Sofi o a Gonza. [no confirmado]
  - Le va a preguntar a Sofi si es legal/posible que le pase el **archivo con la personalidad de Gaucho** o que le conecte una **API** para la entrevista.
  - Mavi está pensando en replicar el mismo sistema técnico que tiene Gaucho, según lo que se sabe de los videos (en `investigacionGaucho.md` hay specs: ESP32, ReSpeaker, wake word, etc.).
  - Nota de accesibilidad de Mavi: a veces cuesta entenderle el español a Gaucho (lo dijo en tono de humor). Importante para la voz: subtítulos siempre, y una versión de texto como la que ya hacen los sitios de Paisanos ("Ver info").
- **A dónde le llegan las contrataciones a Gaucho:** pregunta abierta de Mavi. Sin respuesta. El botón "contratar" necesita un destino (mail, formulario, DM) acordado con Paisanos.

---

## 9. Estrategia de tracción para conseguirle un laburo real a Gaucho (actualizado 24/11/2026)

Objetivo de Mavi: conseguirle un laburito a Gaucho de verdad, con impacto, alcance y leads nuevos. Y que el portfolio vaya más allá de la webapp: una campaña creativa. No tengo datos de alcance ni resultados; lo siguiente son opciones y riesgos, no promesas.

### Opciones concretas
1. **Serie de TikTok "Día 1 buscando laburo hasta que lo encuentre" (idea de Mavi).** Un video por día hasta que alguien lo contrate posta. Reutiliza los easter eggs (sección 7) como episodios. Cada video termina con el llamado a contratar y el link a la webapp.
   - Riesgos: constancia diaria (hay que producir mucho), burnout, y que el formato dependa de quién lo opere. Habría que acordar con Paisanos quién maneja la cuenta (Gaucho ya tiene @gauchopaisano en X y LinkedIn; una cuenta de TikTok nueva implica acordarlo). Ver si conviene pre-grabar un lote. [I]
2. **Campaña creativa más grande.** Mavi la plantea como "desplegar una campaña creativa, volverse algo mucho más grande". Posibles piezas: el LinkedIn de Gaucho con publicaciones "buscando laburo" (ya tiene perfil), el check "no soy un robot" (7.1) como pieza viral, la entrevista como contenido compartible (la "ficha con veredicto"). [I]
3. **Llegar a empresas nuevas.** Opciones: la entrevista termina en un contacto real si el match es bueno; una versión de la webapp como "oferta de laburo para Gaucho" (idea C); dirigirse a empresas con afinidad (hardware, edge AI, eventos, developer relations), por mensaje directo o mail. Aprovechar la red de Paisanos y las empresas que ya lo contrataron. [I]
4. **SEO.** Mavi notó que al buscar "robot Gaucho Paisanos" aparecen puros gauchos y no el robot. Acciones posibles: título y descripción de la webapp con "Gaucho, el robot de Paisanos", texto en HTML (no solo escena canvas), datos estructurados, enlaces desde las cuentas de Paisanos y Gaucho, nombre y alt de las imágenes. Riesgo: depende de la autoridad del dominio donde viva; en un subdominio de Paisanos suma, en un dominio nuevo cuesta más. Y los resultados de un buscador no se garantizan. [I]
5. **Caso de estudio.** Paisanos publica un caso de estudio por cada producto (ejemplo: https://www.paisanos.io/es/projects/switch-website-case-study). Mavi hará uno del portfolio; es su primer caso de estudio. Sirve de pieza de contenido y de prueba para empresas.

### Riesgos generales
- Mezclar los objetivos (portfolio, experiencia, validación con Paisanos) y no medir. Convendría definir 2 o 3 métricas simples (visitas, clicks en "contratar", contactos recibidos) antes de lanzar. [I]
- Usar cuentas, marca o personaje de Paisanos sin permiso.
- Prometer que alguien lo va a contratar; el objetivo real es "que genere tracción y leads", y se puede medir sin esa promesa.
- Mavi marca que Gaucho es único: "hoy hay muchos robots, pero ninguno tiene la humanidad y simpatía que tiene Gaucho". Cuidar de no sonar como un portfolio aburrido o genérico.

---

## 10. Diseño y dirección de arte (actualizado 24/11/2026)

### 10.1 Referencias y objetivos
- **Chiche Night y otros productos de Paisanos:** la web debe ser "Gaucho paisano core". Para eso hay que hacer una investigación de marca profunda de Paisanos y de Gaucho (documentos `investigacionPaisa.md` y `investigacionGaucho.md`). Mavi: "¿Cómo voy a representar la identidad de Gaucho si no me pongo en el lugar de Gaucho paisano?".
- **"a better byte"** (https://a-better-byte.vercel.app/): lo que le gustó a Mavi, textual en sustancia:
  - La **estética** de la experiencia y los **sonidos**.
  - La sensación de la **primera vez que uno usa una computadora**: la bronca y la desdicha del autor, la emoción de no entender nada. Los poemas que cita: "my first computer poem" y "a computer now".
  - Mavi recuerda su primera compu como un cuadrado blanco, sin internet, con Encarta y un programa como Paint "en drogas".
  - Traducción a diseño [I]: sonido apagado por defecto, tipografía de máquina de escribir, luz cálida, ruido de teclas o de disco. Para Gaucho, un guiño retro (los 80) y sensación de "primera vez que despierta".
- **Evitar el "AI slop":** Mavi no quiere que sea como el de Pacta; quiere "pegar un level up lindo en diseño". Y "diseños menos claudísticos".

### 10.2 Lo que enseña el tweet de DosFocos (abierto con la extensión de Chrome el 24/11/2026)
- Enlace: https://x.com/DosFocos/status/2123204054579036592 (Mavi lo anotó como "cómo hacer diseños menos claudísticos").
- El texto visible del tweet es corto: "Yo veo como un problema que la gente use ia hasta para comer, pero me pongo a pensar soluciones para que dependan menos. Tú eliges si das soluciones o solo buscas más problemas." (publicado el 19/11). El título del tweet figura como "Bésame Claude.".
- **Qué no pude ver:** el contenido de la imagen o del hilo, que parece ser el que enseña el truco de diseño. No capté ningún consejo concreto de diseño en el texto. **Pendiente:** que Mavi lo abra y me diga qué muestra la imagen, o pasarme una captura.

### 10.3 Lo que enseña el video de Higgsfield (abierto el 24/11/2026)
- Enlace: https://www.youtube.com/watch?v=LsfcOoCc88I. Título: "How to Make Ultra Realistic AI Videos - (4 STEPS)", canal Steven Wommack, 7:58 minutos.
- La descripción dice que muestra un flujo simple de 4 pasos para hacer videos ultra realistas y películas con IA usando una sola herramienta (Higgsfield). El link de la descripción es de afiliado.
- **Qué no pude ver:** la transcripción ni el detalle de los cuatro pasos (el video se carga sin texto). **Pendiente:** ver el video o sacarle la transcripción.
- Uso previsto [I]: videos realistas con IA para los easter eggs o para el TikTok. Ojo: el estilo de Gaucho es retro/historieta/pixel art, así que el realismo se reservaría para algo puntual (por ejemplo la escena del campo).

### 10.4 Lo que queda por hacer en diseño
- **Terminar el design kit** antes de empezar la página, y darle una **web de referencia** (decisión de Mavi).
- **Paletas de marca** de Paisanos y de Gaucho, unos diseños y **un Figma** bien lindo.
- Según `CLAUDE.md`, los diseños y paletas se hacen orquestando la app de ChatGPT desktop, y Codex se conecta al conector necesario (Figma o Canva). Si no se puede, se avisa y se resuelve en Claude Code.
- Cuidar el **tipo de escena** de la experiencia: no copiar el hotel de Chiche Night (ver idea F).

---

## 11. Merch y extras (actualizado 24/11/2026)

- **Mousepad de Gaucho estilo historieta:** idea de Mavi. A ella se le rompieron el mouse y el teclado, y su mousepad "vio mejores días"; no encontró ninguno con una estética que le guste. Quiere algo creativo, que represente las cosas que le gustan, y decidió hacer uno de Gaucho, que va a generar ella misma durante la investigación creativa del arte de los easter eggs. Sirve de prueba del estilo.
- **Estampita:** Mavi quiere hacerse "la estampita de chinita". Hay una estampita oficial, "San Gaucho, patrono del código" (`assets/Gaucho/fotitos/arte/san_gaucho_estampita_patrono_del_codigo.jpeg`). Una estampita propia puede ser el premio del juego o de la entrevista. [I]
- **Reunión con Gaucho:** Mavi quiere tener una meeting con Gaucho y hacerle varias preguntas. Se vincula con la misión 3 (preguntarle a Gaucho si esto es lo que busca). Va a necesitar coordinar con Paisanos cómo se hace esa charla (Gaucho habla por su sistema de voz). [I]
- **Validar con el equipo:** Mavi quiere saber qué piensan, cómo lo encararían y qué cambiarían. Para ella es la primera cosita que hace como parte del equipo, "moto robada", y una buena oportunidad para conocerlos.

---

## 12. Misiones y cómo suma cada idea (actualizado 24/11/2026)

### Misiones principales (de Mavi)
1. Hacerle un portfolio web a Gaucho en el que consiga laburo.
2. Contar una historia y generar una experiencia.
3. Preguntarle a Gaucho si eso es lo que él busca.

### Misiones secundarias (de Mavi)
1. Investigar de pies a cabeza a Paisanos, en todas sus redes, para chusmear productos recientes (como la Chiche Night) y obtener su estilo.
2. (queda vacía en las notas de Mavi.)

### Cómo suma cada idea
| Idea | Misión principal | Cómo suma |
|---|---|---|
| Entrevista "Gaucho te entrevista a vos" | 1 y 2 | Es la experiencia y el punto de contacto con empresas. |
| Estructura en tres actos | 2 | Conecta antes, ahora y contratar. |
| Easter eggs (LinkedIn, primeros días, vacas) | 2 | Premios y piezas de contenido, humaniza a Gaucho. |
| TikTok "día 1 buscando laburo" y campaña | 1 | Tracción y leads para el laburo real. |
| SEO "robot Gaucho Paisanos" | 1 | Que lo encuentren. |
| Caso de estudio | 1 y 2 | Prueba y contenido. |
| Design kit, paletas y Figma | 2 | Identidad "gaucho paisano core" sin AI slop. |
| Mousepad y estampita | 2 | Pruebas de estilo y merch. |
| Meeting con Gaucho | 3 | Validar la dirección con el protagonista. |
| Investigación de Paisanos y de Gaucho | secundaria 1 y 2 | Base del estilo y la identidad. |

---

## 13. Dudas abiertas (actualizado 24/11/2026)
1. ¿Gaucho tiene API? Y si no, ¿cómo se le da su personalidad a la entrevista: archivo de personalidad, voz de ElevenLabs, IA con videos y tweets?
2. ¿Es legal o está permitido usar el archivo de personalidad de Gaucho y los videos para entrenar voz? Mavi se lo va a preguntar a Sofi.
3. ¿A dónde llegan las contrataciones de Gaucho?
4. ¿Cuántas preguntas tiene la entrevista, texto o voz, y cómo termina en un contacto útil?
5. ¿El TikTok "día 1" lo maneja Mavi, Paisanos o Gaucho? ¿Qué métricas definimos?
6. ¿El final de la nota de los primeros días de laburo (se lleva puesta la mesa y tira una mac...) tiene más gags?
7. ¿"Boludo" se deja tal cual en el video público?
8. ¿Qué enseña la imagen o el hilo del tweet de DosFocos? ¿Y los cuatro pasos del video de Higgsfield? (no pude verlos.)
9. ¿Cuál es la web de referencia del design kit?
10. ¿Dónde vive la experiencia: dentro de la webapp o como sitio aparte, y en qué dominio (impacta en SEO)?
11. Las preguntas de la sección 6 (autoría de "a better byte", permiso para el cartel de neón, la bandera y los personajes) siguen abiertas.

## Pendientes de esta investigación
- No abrí las tarjetas de Chiche Night una por una (el botón "Ver info" no mostró el texto en esta lectura). Conviene ver el contenido de cada objeto.
- No pude leer el código de ninguna de las dos para saber con qué están hechas. "a better byte" se ve como una escena 3D; Chiche Night, como ilustración 2D con scroll.

---

## 14. Principios y lemas del proyecto (23-24/11/2026)

**Decisión de Mavi:** usar como principios, y como lemas, dos de los servicios de la web de Paisanos: **1. Creatividad del producto** y **2. Brand Creativity**. Fuente: https://www.paisanos.io/es/services (leída el 24/11/2026). Los dos cuelgan del bloque **"Impacto"**, cuya idea central, en palabras de Paisanos, es: "Hacer que funcione está bien, hacer que impacte, es mejor."

Qué se toma de cada uno (parafraseado de la web, **[CONFIRMADO]**) y cómo se aplicaría al portfolio de Gaucho (**[INFERENCIA]**, para validar con Mavi):

### 14.1 Principio 1: Creatividad del producto
Tiene tres servicios en Paisanos. Cada uno se convierte en una regla del proyecto:

| Servicio de Paisanos | Qué es (resumen) | Regla para el portfolio de Gaucho |
|---|---|---|
| **Ideas de producto** | Ideas que potencian lo que ya existe o abren nuevas líneas de valor; pueden mezclar lo digital con lo físico | El portfolio no es solo una página: puede sumar ideas que salgan de la web (mousepad, estampita, TikTok, video, cartucho). |
| **Wow moments** | Detalles inesperados dentro del flujo del producto: animaciones, transiciones, sonidos, interacciones | Cada pantalla tiene al menos un detalle que haga decir "qué bueno está esto": los easter eggs (sección 7) y la experiencia "Gaucho te entrevista a vos". |
| **Storydoing** | Mensajes, microcopys y flujos que le dan alma a la experiencia, con una narrativa que acompaña | Todo texto suena a Gaucho (guía de voz de `investigacionGaucho.md`) y la web cuenta una historia: taller → ahora → contratar (sección 8). |

### 14.2 Principio 2: Brand Creativity
También tiene tres servicios:

| Servicio de Paisanos | Qué es (resumen) | Regla para el portfolio de Gaucho |
|---|---|---|
| **Diseño institucional** | Piezas base de la marca: presentaciones, manuales, materiales | Un design kit y una guía de marca de Gaucho (paleta, tipografías, estilo historieta retro) que mantengan todo consistente, en la web, el Figma y el caso de estudio. |
| **Brand experience** | Experiencias inmersivas: activaciones, eventos, campañas digitales y físicas | La campaña creativa de tracción (TikTok "día 1", videos, merch) y la experiencia interactiva con Gaucho. La marca se vive, no solo se mira. |
| **Brand Websites** | Webs que transmiten quién sos, qué hacés y por qué importás, y que emocionan | La webapp en sí: tiene que ser "Gaucho Paisano core" y conseguirle laburo, no ser un portfolio aburrido. |

### 14.3 Cómo usarlos como lemas
- Son dos criterios de revisión para cada decisión: *¿suma una idea o un wow moment nuevo?* (principio 1) y *¿fortalece la marca de Gaucho y se vive como experiencia?* (principio 2).
- **Posible lema compartido** para el proyecto, inspirado en el de Paisanos: "que funcione está bien, que impacte es mejor". Sin decidir si se usa tal cual, se adapta o se le inventa uno propio a Gaucho; es decisión de Mavi.
- Conexión con el **caso de estudio**: los servicios de Paisanos que se tocan (Brand Websites, Brand experience, Wow moments, Storydoing, Ideas de producto) pueden ir en la ficha como "Service", igual que en el caso de Switch.

### 14.4 Pendiente
- Decidir si los lemas van como frases literales de Paisanos, adaptadas al español rioplatense de Gaucho o con lemas propios.
- Decidir si se suman a `CLAUDE.md` y `AGENTS.md` como guía para el agente (no lo hice sin que lo pidas).

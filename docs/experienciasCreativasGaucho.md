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

## Pendientes de esta investigación
- No abrí las tarjetas de Chiche Night una por una (el botón "Ver info" no mostró el texto en esta lectura). Conviene ver el contenido de cada objeto.
- No pude leer el código de ninguna de las dos para saber con qué están hechas. "a better byte" se ve como una escena 3D; Chiche Night, como ilustración 2D con scroll.

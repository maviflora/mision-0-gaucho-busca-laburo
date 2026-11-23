editado por IA, investigacion de Marca de Gaucho   

REDES DE GAUCHO   
[https://www.linkedin.com/in/gaucho-paisano/](https://www.linkedin.com/in/gaucho-paisano/)  
[https://x.com/gauchopaisano](https://x.com/gauchopaisano)   

COSITAS QUE YA SABEMOS   
Gaucho es un omnibot 5402  
Gonza hizo un juegito llamado Gaucho Adventures   
Hicieron una peli de los gaucho origines, que no se cuales eran los gaucho origines. 


QUE NECESITO SABER DE GAUCHO??   

1. Reunir muchas fotos de el, definir su estilo
2. Definir su lenguaje, eso se puede hacer scrapeando su twitter, linkedin y algunos videitos   
3 . Definir el estilo artistico que se suele usar para gaucho, en esto voy a alimentar yo las imagenes
3. Definir todos los proyectos y experiencias en los que estuvo para generar un perfil (o varios) de experiencia laboral
4. Definir cual es su marca personal en TODOS los aspectos
5. Definir que tipos de empresas y que tipos de eventos o laburos se veria beneficiado gaucho segun su experiencia laboral
6. Estas son las empresas que le interesarian a Gaucho. Que empresas podrian matchear con este deseo?   
![](orca-paste-1795414321106-be7d8f9f-034e-413f-b995-a8f44269d0b5.png)
7. Definir un estilo artistico estilo historieta retro, alimentado por las fotos que voy a depositar de gauchito en la carpeta assets/Gaucho/estiloArtisticoRetro
8. Definir una paleta y estilo de marca de gaucho para el disenio de la webapp

## SPECS TÉCNICOS DE GAUCHO (cómo funciona)
Fuente: video "Gaucho: El robot de los 80s que cobró vida" (SLA TV), minuto 5:25 a 9:19. https://www.youtube.com/watch?v=jlnoMtGMSz4
Notas sacadas de los subtítulos automáticos de YouTube (pueden tener algún error de transcripción). Video local: `assets/Gaucho/videitos/gaucho_youtube_el_robot_de_los_80s_que_cobro_vida.mp4`

**Hardware original que se reutilizó**
- Motores originales, parlante (speaker) original y los ojos (que se iluminan).

**Movimiento y ojos: ESP32**
- Una ESP32 controla el brillo de los ojos y los motores, a través de un driver de motores.
- La ESP32 levanta su propio access point (red WiFi local) y sirve una web con un controlador para manejarlo a distancia.

**Modo "seguime" (seguimiento)**
- Si le decís "Gaucho, seguime", arranca a procesar los frames de la cámara.
- Con ese feedback de la cámara usa los mismos servicios del controlador (avanzar, doblar, etc.) para seguir a la persona.

**Visión: cámara Raspberry Pi**
- Tiene una cámara de Raspberry Pi entre los ojos, con una leve inclinación hacia arriba (por eso ve a la gente desde un poco más lejos).

**Audio: ReSpeaker HAT**
- A la Raspberry le agregaron un HAT ReSpeaker (en los subs sale como "respi y respi"), optimizado para procesar voz.
- Tiene 2 micrófonos, que también sirven para cancelar el ruido externo.
- La salida de audio usa el speaker original.

**Cómo conversa (pipeline de voz)**
1. Funciona como Alexa: su wake word es "Gaucho".
2. Después de la wake word procesa el audio y manda el archivo WAV al servidor.
3. En el servidor se transcribe el audio (speech to text).
4. El texto va a un LLM, que genera la respuesta.
5. La respuesta se va streameando a la salida y se escucha por el speaker.

**Cómo decide qué decir**
- Tiene su personalidad declarada en un archivo propio, que forma parte de su system prompt.
- Además usa el contexto de la sesión de conversación (el ida y vuelta con la persona).
- Con esas dos cosas juntas decide qué responder.

**Detalles de personalidad que se ven en el video**
- Se le puede "apagar el habla" un rato ("Un ratito, Gaucho, nada más").
- Responde en charla natural mientras lo prueban: "Sí, ahí te veo", "Dale, te sigo".

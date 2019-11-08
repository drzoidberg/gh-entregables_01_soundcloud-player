souncloud client_id aa06b0630e34d6055f9c6f8beb8e02eb
<!-- spotify client_id ae3bb8661bc34a04bfb00e0e6d2aa42b -->

<!-- Web Playback SDK access token:
BQDG-y-Ddn1ySi9eJ5ph6p-ulIS_KBTEPkqnMYT9kEZ9H4tqx8WEgyigyJA7s9Y3Qm2-SQXJCVFmyC0DdsFylkYAtGLGTn0D2etTzEIEkpjznVlT-mDR6Q8J4WSB7tbGvDdy2TqvckhyNK4-HBs6xuKY_eaRLRsXVyxs-w -->



<!-- - añadir un generador de tokens de spotify para facilitar el uso de la webapp -->
- añadir scroll infinito a los resultados
- searching --> keyword matching. Order matters
- modulos de control de errores en formularios


<base href="http://127.0.0.1:5500/">
este ABANS del head
jo el tinc aixina...
<link rel="stylesheet" href="./css/styles.css">
   <base href="http://127.0.0.1:5500/">
</head>
I despres el script per a poder posar el reproductor es aquest...
<script src="https://w.soundcloud.com/player/api.js"></script>




# STEP-BY-STEP (20191107-0831)
   - eliminar flujo actual de js [ ]
   - centrarse en mobile por ahora [ ]
   - crear estructura básica de html/css, donde ira cambiando dinamicamente usando js [ ]
   - inyectar el iframeSCPlayer siempre en el mismo nodo [ ]
      *la zona del reproductor y el iframe son 'aparentemente' la misma*

# ROADMAP
   - lógica básica acabada [x]
   - interfaz usando flex fluida + adaptable, 100% pantalla [ ]
   - scroll infinito para los resultados [ ]
   - control de errores en input forms [ ]
   - crear un conjunto de archivos/funciones que manejen los estilos css de los nodos (un React de ir por casa) [NO]
   - controla los min-widths de los elementos [ ]
   - animaciones: inicio, carga de tarjeta/resultado, switch de logo a iframe, "pulsating play" cuando se está reproduciendo una canción [ ]
   - implementar jQuery con los layers de ayuda, los tooltips de cada cancion [ ]
   - cuando se seleccione una búsqueda, ocultar el icono con una transición suave [ ]
   - un funcion que corte texto de descripcion [ ]
   - controlar por js variables de color [NO]
   - conectar con otra API, o consultas avanzadas [ ]
   - consulta de tag
   - consulta de autor
   - incorporar en localstorage una variable que controle el layer de ayuda [ ]
   - carrusel de autores y canciones random [ ]
   - añadir tags y LUEGO 'buscar'
   - limpiar JS [ ]
   - realizar una versión usando el API y el SDK, sin el reproductor widget [ ]
   - realizar una versión usando lo que aprendido hasta la fecha de Angular [ ]


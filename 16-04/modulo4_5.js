let usuario = "gerald";
let contrasena = "12345679";

if (usuario === "") {
    console.log("USUARIO VACIO");
} else if (contrasena.length < 8) {
    console.log("debe tener al menos 8 caracteres");
} else {
    console.log("Login exitoso");
}
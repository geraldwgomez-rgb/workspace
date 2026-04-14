let email = "usuario@dominio.com"

// incluye el caracter @
console.log("el texto incluye el @", email.includes("@"));
// con que indice comienza "dominio" usando indexOf
console.log("el texto comienza con  el @", email.indexOf("dominio"));
// termina con .com usando en endsWith
console.log("el texto termina con el @", email.endsWith(".com"));
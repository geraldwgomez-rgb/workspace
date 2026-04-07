let csv = "manzana,pera,uva,mango,banano"
let frutas = csv.split(",")
console.log(frutas);
console.log(frutas.length)
 

let unido = frutas.join("-");
console.log(unido);
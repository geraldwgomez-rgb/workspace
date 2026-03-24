let x ="estoy fuera";
{ 
  let y="estoy dentro"
}
console.log(x)
console.log(y)
// EXPLICACIÓN:
// Al usar 'let', la variable 'y' tiene un "alcance de bloque" (block scope). 
// Esto significa que solo existe dentro de las llaves donde fue declarada. 
// Al intentar acceder a ella desde fuera, el programa no la reconoce y lanza un error.
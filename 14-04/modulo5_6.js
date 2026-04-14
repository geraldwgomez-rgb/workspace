const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Introduce un número: ", (answer) => {
  const numero = parseInt(answer, 10);

  if (Number.isNaN(numero)) {
    console.log("No ingresaste un número válido.");
  } else {
    for (let i = 1; i <= 10; i++) {
      console.log(`${numero} x ${i} = ${numero * i}`);
    }
  }

  rl.close();
});


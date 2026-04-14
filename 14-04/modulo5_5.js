
for (let i = 1; i <=20; i++) {
    if (i % 3 === 0) {
         continue; // Salta la iteración si es múltiplo de 3
    }
    if( i ===17)
    break; // En cuanto llega a 17, se sale del bucle por completo
    console.log(i);
}


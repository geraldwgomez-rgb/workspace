// Configuración inicial
let saldo = 500000;
const transacciones = [-200000, -150000, -600000, 50000, -100000];

// Procesamiento de transacciones
for (const monto of transacciones) {
    if (monto > 0) {
        saldo += monto;
        console.log(`Depósito de $${monto.toLocaleString()}: Éxito`);
    } else {
        const retiro = Math.abs(monto); // Convertimos el negativo a positivo para comparar
        if (retiro > saldo) {
            console.log(`Retiro de $${retiro.toLocaleString()}: Fondos insuficientes`);
        } else {
            saldo += monto;
            console.log(`Retiro de $${retiro.toLocaleString()}: Éxito`);
        }
    }
}

// Resultado final
console.log("------------------------------");
console.log(`Saldo total final: $${saldo.toLocaleString()}`);

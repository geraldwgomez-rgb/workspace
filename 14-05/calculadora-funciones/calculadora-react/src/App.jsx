import { useState } from "react";

function App() {

  const [numero1, setNumero1] = useState("30");
  const [numero2, setNumero2] = useState("3");
  const [resultado, setResultado] = useState("");

  // =====================================
  // FUNCIONES
  // =====================================

  function sumar(a, b) {
     return a + b;
  }

  function restar(a, b) {
     return a - b;

  }

  function multiplicar(a, b) {
  return a * b ;
  }

  function dividir(a, b) {
    if (b === 0) {
        return "Error: No se puede dividir por cero.";
    }
    
    return a / b;
}
function handleLimpiar() {
  setNumero1("");
  setNumero2("");
  setResultado("");
}


  // =====================================
  // EVENTOS
  // =====================================

  function handleSuma() {
    setResultado(sumar(Number(numero1), Number(numero2)));
    
  }

  function handleResta() {
    setResultado(restar(Number(numero1), Number(numero2)));
  }

  function handleMultiplicacion() {
    setResultado(multiplicar(Number(numero1), Number(numero2)));
  }

  function handleDivision() {
    setResultado(dividir(Number(numero1), Number(numero2)));
  }
  
  return (
    <div style={{ padding: "40px" }}>
      <h1>Calculadora React</h1>

      <input
        type="number"
        placeholder="Número 1"
        value={numero1}
        onChange={(e) => setNumero1(e.target.value)}
      />

      <br />
      <br />

      <input
        type="number"
        placeholder="Número 2"
        value={numero2}
        onChange={(e) => setNumero2(e.target.value)}
      />
        <h2 style={{ marginTop: "20px" }}>
        Resultado: {resultado}
        </h2>
      

      <br />
      <br />

      <button onClick={handleSuma}>
        Sumar
      </button>

      <button onClick={handleResta}>
        Restar
      </button>

      <button onClick={handleMultiplicacion}>
        Multiplicar
      </button>

      <button onClick={handleDivision}>
        Dividir
      </button>
    <button onClick={handleLimpiar}>
  Limpiar
</button>
    </div>
    
  );
}

export default App;
import { Header } from "./components/Header.jsx";
import { ContenedorPPI } from "./components/ ContenedorPPI.jsx";
import { BotonEstado } from "./components/BotonEstado.jsx";

function App() {
  // Datos basados en tu diagrama ER
  const misEntidades = [
    { nombre: "Usuarios", desc: "Almacena credenciales y roles", campos: 8},
    { nombre: "servicios", desc: " cantidad de servicios", campos : 1 },
    { nombre: "SMC", desc: "Fuente del sistema", campos: 4 }

  ];

  return (
    <main>
      <Header titulo="SMC (Sistema monetario contable)" grupo="11B" />
      <BotonEstado texto="Fase de Análisis en prueba " activo={true} />
      <ContenedorPPI entidades={misEntidades} />
    </main>
  );
}

export default App;
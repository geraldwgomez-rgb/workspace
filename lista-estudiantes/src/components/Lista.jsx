import Estudiante from "./Estudiante";

function Lista() {
  const estudiantes = [
    { nombre: "Carlos", edad: 21, carrera: "administracion" },
    { nombre: "Ana", edad: 17, carrera: "negocios" },
    { nombre: "Luis", edad: 23, carrera: "diseño" },
  ];

  return (
    <div>
      {estudiantes.map((est, index) => {
        const esMayor = est.edad > 18;

        return (
          <div key={index}>
            <Estudiante
              nombre={est.nombre}
              edad={est.edad}
              carrera={est.carrera}
            />
            <p>{esMayor ? "Mayor de edad" : "Menor de edad"}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Lista;
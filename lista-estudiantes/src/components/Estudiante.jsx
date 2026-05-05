function Estudiante(props) {
  return (
    <div>
      <p>Nombre: {props.nombre}</p>
      <p>Edad: {props.edad}</p>
      <p>carrera : {props.carrera}</p>
    </div>
  );
}

export default Estudiante;
export function Header({  titulo, grupo }) {
  return (
    <header className="header-main">
      <h1>{titulo}</h1>
      <p> CURSO ;  {grupo} - Periodo De Prueba</p>
    </header>
  );
}
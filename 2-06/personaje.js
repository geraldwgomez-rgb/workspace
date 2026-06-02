async function obtenerPersonaje(id) {
  
  const url = `https://rickandmortyapi.com/api/character/${id}`;

  try {
    console.log(`Consultando API para el personaje con ID: ${id}...`);

    // Fetch hace un GET por defecto, no hace falta pasar 'headers' si no se necesitan
    const response = await fetch(url);

    // Verificamos si la respuesta es correcta (status 200-299)
    if (!response.ok) {
      throw new Error(`Error en la petición: ${response.status}`);
    }

    const data = await response.json();

    console.log("Respuesta de la API:");
    // console.table funciona genial con el objeto del personaje
    console.table(data);

  } catch (error) {
    console.error("Hubo un problema al obtener el personaje:", error.message);
  }
}

// Ahora puedes probar con cualquier ID que quieras
obtenerPersonaje(1); // Traerá a Rick Sanchez
obtenerPersonaje(2); // Traerá a Morty Smith
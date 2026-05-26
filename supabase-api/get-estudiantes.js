const url =
  process.env.SUPABASE_URL ||
  "https://njlxyolottnhjagfpbra.supabase.co/rest/v1/estudiantes";

const headers = {
  // Do not commit secrets. Set SUPABASE_API_KEY in your local environment.
  apikey: process.env.SUPABASE_API_KEY ||
    "<REPLACE_WITH_ENV_VAR_SUPABASE_API_KEY>",
  "Content-Type": "application/json",
};


async function obtenerEstudiantes() {
  try {

    console.log("Consultando API...");

    const response = await fetch(url, {
      method: "GET",
      headers,
    });

    const data = await response.json();

    console.log("Respuesta de la API:");
    console.log(data);

    console.table(data);

  } catch (error) {

    console.log("Error:");
    console.log(error);

  }
}
obtenerEstudiantes();


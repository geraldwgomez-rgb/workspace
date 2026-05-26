const url =
  "https://njlxyolottnhjagfpbra.supabase.co/rest/v1/estudiantes";

fetch('supabase/api/endpoint', {
  method: 'POST',           
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data) 
})
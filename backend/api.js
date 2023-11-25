
const endpointURL = 'http://localhost:3000/products'
fetch(endpointURL, {
  method: 'GET', // Puedes cambiar esto según el tipo de solicitud que necesites (GET, POST, etc.)
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, GET, PUT',
    'Access-Control-Allow-Headers': 'Content-Type'
  },
})
  .then(response => {
    if (!response.ok) {
      throw new Error(`Error al ejecutar la solicitud. Código de estado: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log('Datos de la API externa:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

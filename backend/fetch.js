
const endpointURL = 'http://localhost:3000/products'
fetch(endpointURL, {
  method: 'GET', // Puedes cambiar esto según el tipo de solicitud que necesites (GET, POST, etc.)
  headers: {
    'Content-Type': 'application/json'
  },
})
  .then(response => {
    return response.json();
  })
  .then(data => {
    createProductsCards(data);

    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

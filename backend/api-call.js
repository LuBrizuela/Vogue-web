const express =  require('express')
const  fetch  = require( 'node-fetch')
const cors = require('cors') 
const app = express();
const PORT = 3000
// Middleware para refrescar el token si es necesario
app.use(cors(
    {origin: "http://localhost:5500"}
));

// Endpoint que el frontend utilizará para obtener productos
app.get('/products', async (req, res) => {
  const apiURL = 'https://api.tiendanube.com/v1/3988841/products';
  const accessToken = 'd9cfcce34d55f143bd28e863e03d4b04bbab6eb6'; // Este token deberías obtenerlo del módulo de autenticación

  try {
    const response = await fetch(apiURL, {
      headers: {
        'Authorization': `bearer ${accessToken}`,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, GET, PUT',
        'Access-Control-Allow-Headers': 'Content-Type'
      }
    });

    if (!response.ok) throw new Error('Error en la solicitud a Tienda Nube');

    const products = await response.json();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});

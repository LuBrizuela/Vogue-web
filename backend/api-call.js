const express =  require('express')
const  fetch  = require( 'node-fetch')
const cors = require('cors') 
const app = express();
const PORT = 3000
// Middleware para refrescar el token si es necesario
app.use(cors());

// Endpoint que el frontend utilizará para obtener productos
app.get('/products', async (req, res) => {
  const apiURL = 'https://api.tiendanube.com/v1/3988841/products';
  const accessToken = 'd7d0f06f55277c98dfc2a847bc41863b4fc20088'; // Este token deberías obtenerlo del módulo de autenticación

  try {
    const response = await fetch(apiURL, {
      headers: {
        'Authentication': `bearer ${accessToken}`,
      }
    });
    console.log(response)

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

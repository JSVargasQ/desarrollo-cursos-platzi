const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');

const app = express();
const port = 3000;

app.use(express.json());

/**
const whitelist = [ 'http://localhost:3000', 'http://myapp.co' ];
const options = {
  origin: ( origin, callback ) => {
    if( whitelist.includes( origin ) ) {
      callback(null, true);
    } else {
      callback( new Error('not is possible') );
    }
  }
};
app.use( cors( options ) );
 */

app.get('/', (request, response) => {
    response.send('¡Hello server!');
});

app.get('/nueva-ruta', (request, response) => {
  response.send('¡Hola soy un nuevo EndPoint!');
});

app.get('/categories/:categoryId/products/:productId', (request, response) => {
  const { categoryId, productId } = request.params;
  response.json({
    categoryId,
    productId
  });
});

routerApi(app);

app.use( logErrors );
app.use( boomErrorHandler );
app.use( errorHandler );

app.listen(port, () => {
  console.log('App listen from:', port);
});

const express = require('express');

const ProductsService = require('./../services/product.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { createProductSchema, updateProductSchema, getProductSchema } = require('./../schemas/product.schema');

const router = express.Router();
const service = new ProductsService();

/**
 * Get list of products
 */
router.get('/', async (request, response) => {
  const products = await service.find();
  response.json(products);
});

/**
 * Get product by id
 */
router.get('/:id',
  validatorHandler( getProductSchema, 'params' ),
  async (request, response, next) => {
    try {
      const { id } = request.params;
      const product = await service.findOne(id);

      if( !product ) {
        response.status(404).json({
          message: 'Producto no encontrado'
        });
      } else {
        response.status(200).json(product);
      }
    } catch ( error ) {
      next( error );
    }
  }
);

/**
 * Create a product
 */
router.post('/',
  validatorHandler( createProductSchema, 'body' ),
  async (request, response) => {
    const body = request.body;
    const newProduct = await service.create(body);

    if( newProduct ) {
      response.status(201).json({
        message: 'Se ha creado exitosamente el producto!',
        data: newProduct
      });
    } else {
      response.status(400).json({
        message: 'No se ha podido crear el producto!'
      });
    }
  }
);

/**
 * Update a single attribute of product
 */
router.patch('/:id',
  validatorHandler( getProductSchema, 'params' ),
  validatorHandler( updateProductSchema, 'body' ),
  async (request, response, next) => {
    try {
      const { id } = request.params;
      const body = request.body;

      const status = await service.updateAttributes(id, body);

      if(status) {
        response.json({
          message: 'Se ha actualizado el producto exitosamente!'
        });
      } else {
        response.json({
          message: 'No se ha podido actualizar el producto, verifique los datos.'
        });
      }
    } catch ( error ) {
      next( error );
    }
  }
);

/**
 * Update product
 */
router.put('/:id', async (request, response, next) => {

  try {
    const { id } = request.params;
    const body = request.body;
    const product = await service.update(id, body);
    response.json({
      message: 'Se ha actualizado el producto exitosamente!',
      data: product
    });

  } catch ( error ) {
    next( error );
  }

});

/**
 * Delete a product
 */
router.delete('/:id', async (request, response) => {
  const { id } = request.params;
  const status = await service.delete( id );

  if(status) {

    response.json({
      message: 'Se ha eliminado el producto exitosamente!'
    });

  } else {
    response.json({
      message: 'No se ha podido actualizar el producto, verifique los datos.'
    });

  }

});

module.exports = router;

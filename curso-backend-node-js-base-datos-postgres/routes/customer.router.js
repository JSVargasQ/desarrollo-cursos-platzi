const CustomerService = require('../services/customer.service');
const express = require('express');
const validatorHandler = require('./../middlewares/validator.handler');
const { createCustomerSchema, getCustomerSchema, updateCustomerSchema } = require('./../schemas/customer.schema');

const router = express.Router();
const service = new CustomerService();

router.get('/', async (req, res, next) => {
  try {
    const customers = await service.find();
    res.status(200).json({
      message: 'Consulta exitosa!',
      data: customers
    });
  } catch (error) {
    next(error);
  }
});

/**
 * Create an customer
 */
router.post('/',
  validatorHandler( createCustomerSchema, 'body' ),
  async (request, response, next) => {

    try {
      const body = request.body;
      const newCustomer = await service.create(body);
      response.status(201).json({
        message: 'Se ha creado exitosamente el Cliente!',
        data: newCustomer
      });
    } catch (err) {
      next(err);
    }

  }
);

/**
 * Update a single attribute of customer
 */
router.patch('/:id',
  validatorHandler( getCustomerSchema, 'params' ),
  validatorHandler( updateCustomerSchema, 'body' ),
  async (request, response, next) => {
    try {
      const { id } = request.params;
      const body = request.body;

      const status = await service.update(id, body);

      if(status) {
        response.json({
          message: 'Se ha actualizado el Cliente exitosamente!',
          data: status
        });
      } else {
        response.json({
          message: 'No se ha podido actualizar el Cliente, verifique los datos.',
          data: status
        });
      }
    } catch ( error ) {
      next( error );
    }
  }
);


/**
 * Get customer by id
 */
router.get('/:id',
  validatorHandler( getCustomerSchema, 'params' ),
  async (request, response, next) => {
    try {
      const { id } = request.params;
      const customer = await service.findOne(id);

      if( !customer ) {
        response.status(404).json({
          message: 'Cliente no encontrado'
        });
      } else {
        response.status(200).json(customer);
      }
    } catch ( error ) {
      next( error );
    }
  }
);

/**
 * Delete an customer
 */
  router.delete('/:id',
  validatorHandler(getCustomerSchema, 'params'),
  async (request, response, next) => {
    try {
      const { id } = request.params;
      const data = await service.delete( id );
      response.json({
        message: 'Se ha eliminado el producto exitosamente!',
        data: data
      });
    } catch ( err ) {
      next(err);
    }
});

module.exports = router;

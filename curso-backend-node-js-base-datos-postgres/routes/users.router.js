
const UserService = require('../services/user.service');
const express = require('express');
const validatorHandler = require('./../middlewares/validator.handler');
const { createUserSchema, getUserSchema, updateUserSchema } = require('./../schemas/user.schema');

const router = express.Router();
const service = new UserService();

router.get('/', async (req, res, next) => {
  try {
    const users = await service.find();
    res.status(200).json({
      message: 'Consulta exitosa!',
      data: users
    });
  } catch (error) {
    next(error);
  }
});

/**
 * Create an user
 */
router.post('/',
  validatorHandler( createUserSchema, 'body' ),
  async (request, response, next) => {

    try {
      const body = request.body;
      const newUser = await service.create(body);
      response.status(201).json({
        message: 'Se ha creado exitosamente el usuario!',
        data: newUser
      });
    } catch (err) {
      next(err);
    }

  }
);

/**
 * Update a single attribute of user
 */
router.patch('/:id',
  validatorHandler( getUserSchema, 'params' ),
  validatorHandler( updateUserSchema, 'body' ),
  async (request, response, next) => {
    try {
      const { id } = request.params;
      const body = request.body;

      const status = await service.update(id, body);

      if(status) {
        response.json({
          message: 'Se ha actualizado el usuario exitosamente!',
          data: status
        });
      } else {
        response.json({
          message: 'No se ha podido actualizar el usuario, verifique los datos.',
          data: status
        });
      }
    } catch ( error ) {
      next( error );
    }
  }
);


/**
 * Get user by id
 */
router.get('/:id',
  validatorHandler( getUserSchema, 'params' ),
  async (request, response, next) => {
    try {
      const { id } = request.params;
      const user = await service.findOne(id);

      if( !user ) {
        response.status(404).json({
          message: 'Usuario no encontrado'
        });
      } else {
        response.status(200).json(user);
      }
    } catch ( error ) {
      next( error );
    }
  }
);

/**
 * Delete an user
 */
  router.delete('/:id',
  validatorHandler(getUserSchema, 'params'),
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

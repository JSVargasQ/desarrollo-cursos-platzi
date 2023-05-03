const express = require('express');

const productsRouter = require('./products.router');
const usersRouter = require('./users.router');
const customersRouter = require('./customer.router');

function routerApi(app) {

  // Api - V1
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products', productsRouter);
  router.use('/users', usersRouter);
  router.use('/customers', customersRouter);
}

module.exports = routerApi;

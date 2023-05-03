const faker = require('faker');
const lodash = require("lodash");
const boom = require('@hapi/boom');

const sequelize = require('../libs/sequelize');

class ProductsService {

  constructor() {
    this.products = [];
    this.generate();
  }

  generate() {
    const limit = 10;

    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10) * 100,
        image: faker.image.imageUrl(),
        isBlock: faker.datatype.boolean(),
      });
    }
  }

  async create( product ) {
    const newProduct = {
      id: faker.datatype.uuid(),
      ...product
    };
    this.products.push(newProduct );
    return newProduct;
  }

  async find() {
    const query = 'SELECT * FROM tasks';
    const [ data ] = await sequelize.query(query);
    return data;
  }

  async findOne( id ) {
    const product = this.products.find( element => element.id === id );
    if( !product ) {
      throw boom.notFound('product not found');
    } else if( product.isBlock ) {
      throw boom.conflict('product is block');
    }
    return product;
  }

  async updateAttributes( id, updatedProduct ) {
    let currentProduct = this.products.find( element => element.id === id );

    if( !currentProduct ) {
      throw boom.notFound('product not found');
    }

    const attributes = Object.keys(updatedProduct);
    attributes.forEach( (key) => {
      lodash.set(currentProduct, key, lodash.get(updatedProduct, key));
    });
    return true;
  }



  async update( id, product ) {
    let indexToUpdate = this.products.findIndex( element => element.id === id );

    if( indexToUpdate === -1 ) {
      throw boom.notFound('product not found');
    }

    this.products[indexToUpdate].name = product.name;
    this.products[indexToUpdate].price = product.price;
    this.products[indexToUpdate].image = product.image;

    return this.products[indexToUpdate];
  }

  async delete ( id ) {
    let indexToDelete = this.products.findIndex( element => element.id === id );

    if( indexToDelete === -1 ) {
      throw boom.notFound('product not found');
    }

    this.products.splice( indexToDelete, 1 );
    return { id };
  }

}

module.exports = ProductsService;

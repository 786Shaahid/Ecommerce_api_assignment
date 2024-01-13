// import env from '../src/config/environment.config.js';
process.env.NODE_ENV = 'test';


import * as chai from 'chai';
import chaiHttp from 'chai-http';
import mongoose from 'mongoose';
import { Variant } from '../src/features/products/products.variantSchema.js';
import { Product } from '../src/features/products/products.model.js';

chai.use(chaiHttp);
const { expect } = chai;

describe('Variant Model', () => {
  before(async () => {
    await mongoose.connect(`${process.env.DB_URL}`);
  });


  after(async () => {
    await mongoose.connection.close();
  });

  afterEach(async () => {
    await Variant.deleteMany({});
    await Product.deleteMany({});
  });

  it('should create and retrieve a variant with associated product', async () => {
    const productData = {
      name: 'Test Product',
      description: 'Test Description',
      price: 50,
    };

    const createdProduct = await Product.create(productData);

    const variantData = {
      name: 'Test Variant',
      sku: 'TEST-SKU',
      additionalCost: 10,
      stockCount: 100,
      productId: createdProduct._id,
    };

    const createdVariant = await Variant.create(variantData);
    const retrievedVariant = await Variant.findById(createdVariant._id).populate('productId');

    expect(retrievedVariant).to.be.an('object');
    expect(retrievedVariant.name).to.equal(variantData.name);
    expect(retrievedVariant.sku).to.equal(variantData.sku);
    expect(retrievedVariant.additionalCost).to.equal(variantData.additionalCost);
    expect(retrievedVariant.stockCount).to.equal(variantData.stockCount);
    expect(retrievedVariant.productId).to.be.an('object');
    expect(retrievedVariant.productId.name).to.equal(productData.name);
  });
});

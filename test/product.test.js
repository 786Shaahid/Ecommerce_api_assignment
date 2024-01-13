// // import env from '../src/config/environment.config.js';
// // process.env.NODE_ENV = 'test';

// import * as chai from 'chai';
// import chaiHttp from 'chai-http';
// import mongoose from 'mongoose';
// import { Product } from '../src/features/products/products.model.js';


// chai.use(chaiHttp);
// const { expect } = chai;

// describe('Product Model', () => {
//   before(async () => {
//     await mongoose.connect(`${process.env.DB_URL}`);
//   });

//   after(async () => {
//     await mongoose.connection.close();
//   });

//   afterEach(async () => {
//     await Product.deleteMany({});
//   });

//   it('should create and retrieve a product', async () => {
//     const productData = {
//       name: 'Test Product',
//       description: 'Test Description',
//       price: 50,
//     };

//     const createdProduct = await Product.create(productData);
//     const retrievedProduct = await Product.findById(createdProduct._id);

//     expect(retrievedProduct).to.be.an('object');
//     expect(retrievedProduct.name).to.equal(productData.name);
//     expect(retrievedProduct.description).to.equal(productData.description);
//     expect(retrievedProduct.price).to.equal(productData.price);
//   });
// });

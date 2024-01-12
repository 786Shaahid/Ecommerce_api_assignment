import mongoose  from "mongoose";
/** DEFINE PRODUCT SCHEMA */
 const productSchema= new mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      }
 });

 export const Product=mongoose.model("Product",productSchema);

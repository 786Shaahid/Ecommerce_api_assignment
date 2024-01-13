import mongoose from "mongoose";
// Define the Variant schema
const variantSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required:true
  },
  name: {
    type: String,
    required: true,
  },
  sku: {
    type: String,
    required: true,
    unique: true,
  },
  additionalCost: {
    type: Number,
    default: 0,
  },
  stockCount: {
    type: Number,
    default: 0,
  },
});

export const Variant = mongoose.model("Variant", variantSchema);

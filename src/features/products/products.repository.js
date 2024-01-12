import mongoose from "mongoose";
import { Product } from "./products.model.js";
import { Variant } from "./products.variantSchema.js";

export default class ProductRepository {

  /** 1. Define Repository For The Add Product */
  async createProduct(productDetails) {
    try {
      const result = await Product.create(productDetails);
      return result;
    } catch (error) {
      console.log('Error While Creating Variant', error);
    }
  }

  /** 2. Define Repository For The Add Product */
  async createVariant(productId, variantDetails) {
    try {
      const { name, sku, additionalCost, stockCount } = variantDetails;
      const result = await Variant.create({
        name,
        sku,
        additionalCost,
        stockCount,
        productId
      });
      return result;
    } catch (error) {
      console.log('Error While Creating Variantn', error);
    }
  }
  /** 3. Define Repository For Update The Product */
  async updateProd(productId, productDetails) {
    try {
      const result = await Product.findByIdAndUpdate(productId, productDetails, { new: true });
      return result;
    } catch (error) {
      console.log('Error when updating product', error);
    }
  }
  /** 4. Define Repository For Update The Product */
  async updateVariant(productId, skuName, variantDetails) {
    try {

      const { stockCount, additionalCost } = variantDetails
      const result = await Variant.findOneAndUpdate({ productId, sku: skuName }, {
        $set: {
          stockCount,
          additionalCost
        }
      }, { new: true });
      console.log(result);
      return result;
    } catch (error) {
      console.log('Error when updating product', error);
    }
  }

  /** 5. Define Repository For Delete Product */
  async delete(productId) {
    try {
      const ProductDeleted = await Product.findByIdAndDelete({ _id: productId });
      // Delete associated variants with product
      await Variant.deleteMany({ productId })
      return ProductDeleted;;
    } catch (error) {
      console.log(error);
    }

  }
  /** 6. Define Repository For Retrive Product with their variants */
  async getProduct(id) {
    try {
      const productId = new mongoose.Types.ObjectId(id);
      const result = await Product.aggregate([
        {
          $match: {
            _id: productId,
          },

        }, {
          $lookup: {
            from: 'variants',
            localField: '_id',
            foreignField: 'productId',
            as: 'variants',
          },
        },
        {
          $addFields: {
            variants: {
              $ifNull: ['$variants', []], // Set variants to an empty array if it's null
            },
          },
        },

      ])
      // console.log("getProductFun",result);
      return result;
    } catch (error) {
      console.log("error while getProduct", error);
    }
  }

  /** 7. Define Repository For Search Query */
  async search(productId) {
    try {

    } catch (error) {
      console.log(error);
    }

  }
}
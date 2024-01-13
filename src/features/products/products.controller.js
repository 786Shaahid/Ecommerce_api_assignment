import { ApiResponse } from "../../utility/apiResponse.utility.js";
import { ErrorHandle } from "../../utility/errorResponse.utility.js";
import ProductRepository from "./products.repository.js";

export default class ProductController {
  constructor() {
    this.productRepository = new ProductRepository();
  }
      /** 1. Define Controller For The Adding Product  */
  async addProduct(req, res) {
    try {
      const result = await this.productRepository.createProduct(req.body);
      if (!result) {
        return res.status(404).json(new ErrorHandle(false, "Something went wronge !", {}));
      }
      return res.status(201).json(new ApiResponse(true, "Created New Product Successfully !", result));
    } catch (err) {
      return res.status(err.status ?? 500).json(new ErrorHandle(false, 'Internal Server Error', err ?? err.error[0].msg ?? err.error[0].message))
    }
  }
         /** 2. Define Controller For The Adding Variant  */
  async addVariant(req, res) {
    try {
      const productId = req.params.id;
      const result = await this.productRepository.createVariant(productId, req.body);
      if (!result) {
        return res.status(404).json(new ErrorHandle(false, "Something went wronge !", {}));
      }
      return res.status(201).json(new ApiResponse(true, "Variant Created  Successfully for the product !", result));
    } catch (err) {
      return res.status(err.status ?? 500).json(new ErrorHandle(false, 'Internal Server Error', err ?? err.error[0].msg ?? err.error[0].message))
    }
  }


      /**   3. Define  Controller For The Updating Product  */
  async updateProduct(req, res) {
    try {
      const productId = req.params.id;
      const result = await this.productRepository.updateProd(productId, req.body);
      if (!result) {
        return res.status(400).json(new ErrorHandle(false, 'Product not found',{}));
      }
      return res.status(200).json(new ApiResponse(true, "Product Updated Successfully", result));
    } catch (err) {
      return res.status(err.status ?? 500).json(new ErrorHandle(false, "Internal server error", err ?? err.error[0].msg ?? err.error[0].message))
    }
  }
      /**   4. Define  Controller For The Updating Variant  */
  async updateVariant(req, res) {
    try {
      const productId = req.params.id;
      const skuName=req.query.sku;
      const result = await this.productRepository.updateVariant(productId, skuName,req.body);
      if (!result) {
        return res.status(400).json(new ErrorHandle(false, 'Variant not found',{}));
      }
      return res.status(200).json(new ApiResponse(true, " Variant  Updated  Successfully", result));
    } catch (err) {
      return res.status(err.status ?? 500).json(new ErrorHandle(false, "Internal server error",err ?? err.error[0].msg ?? err.error[0].message))
    }
  }

     /**  5.  Define Controller For The Delete Product and variants */
  async deleteProduct(req, res) {
try {
      const productId= req.params.id;
      const result = await this.productRepository.delete(productId);
      if (!result) {
        return res.status(400).json(new ErrorHandle(false, 'Something went wronge',{}));
      }
      return res.status(202).json(new ApiResponse(true, "Delete Product And Their Varieant Successfully",''));
} catch (err) {
  return res.status(err.status ?? 500).json(new ErrorHandle(false, "Internal server error", err ?? err.error[0].msg ?? err.error[0].message))
}
}


  /**  6.  Define Controller For The Get  Product with their variant */
  async retrieveProduct(req, res) {
try {
      const productId=req.params.id;
      const result = await this.productRepository.getProduct(productId);
      if (!result) {
        return res.status(400).json(new ErrorHandle(false, 'Something went wronge',{}));
      }
      return res.status(200).json(new ApiResponse(true, "Get Product And Their Varieant Successfully",result[0]));
} catch (err) {
  // console.log();
  return res.status(err.status ?? 500).json(new ErrorHandle(false, "Internal server error", err ?? err.error[0].msg ?? err.error[0].message))
}  
  }

  /**  7.  Define Controller For The Get  Product with their variant */
  async searchProduct(req, res) {
try {
      const {query}=req.query;
      const result = await this.productRepository.search(query);
      if (!result) {
        return res.status(400).json(new ErrorHandle(false, 'Something went wronge',{}));
      }
      return res.status(200).json(new ApiResponse(true, "Get Product Or Variant Successfully",result));
} catch (err) {
  // console.log();
  return res.status(err.status ?? 500).json(new ErrorHandle(false, "Internal server error", err ?? err.error[0].msg ?? err.error[0].message))
}  
  }
  /**  8.  Define Controller For The Delete Variant with Query  */
  async deleteVariant(req, res) {
try {
      const {query}=req.query;
      const result = await this.productRepository.deleteVar(query);
      if (!result) {
        return res.status(400).json(new ErrorHandle(false, 'Something went wronge',{}));
      }
      return res.status(202).json(new ApiResponse(true, "Deleted Successfully ",{}));
} catch (err) {
  return res.status(err.status ?? 500).json(new ErrorHandle(false, "Internal server error", err ?? err.error[0].msg ?? err.error[0].message))
}  
  }
}

import express from "express";
import ProductController from "./products.controller.js";
import { validateProduct } from "../../middlewares/validator.middleware.js";




const productController = new ProductController();
const productRouter = express.Router();

productRouter.post("/addProduct", validateProduct,(req, res) => {
    productController.addProduct(req, res);
  });
productRouter.post("/addVariant/:id",(req, res) => {
    productController.addVariant(req, res);
  });
productRouter.post("/updateProduct/:id", (req, res) => {
    productController.updateProduct(req, res);
  });
productRouter.post("/updateVariant/:id", (req, res) => {
    productController.updateVariant(req, res);
  });
productRouter.delete("/deleteProduct/:id", (req, res) => {
    productController.deleteProduct(req, res);
  });
productRouter.get("/getProduct/:id", (req, res) => {
    productController.retrieveProduct(req, res);
  });
productRouter.get("/searchProduct", (req, res) => {
    productController.searchProduct(req, res);
  });
productRouter.get("/deleteVariant", (req, res) => {
    productController.deleteVariant(req, res);
  });



export default productRouter;
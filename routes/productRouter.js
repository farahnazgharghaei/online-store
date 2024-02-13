const express = require("express");
const validateMiddleware = require("../middlewares/validationMiddleware");
const productSchema = require("../utils/validation/productSchema");
const productRouter = express.Router();
const {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");


//api
productRouter.get("/products", getAllProducts); //all
productRouter.get("/products/:id", getProduct); //single
productRouter.post("/products",validateMiddleware(productSchema), createProduct); //create
productRouter.put("/products/:id",validateMiddleware(productSchema), updateProduct); //update
productRouter.delete("/products/:id", deleteProduct); //delete

module.exports = productRouter;

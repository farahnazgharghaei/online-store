const express = require("express");
const {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");
const productRouter = express.Router();

productRouter.get("/products", getAllProducts); //all
productRouter.get("/products/:id/:category", getProduct); //single
productRouter.post("/products", createProduct); //create
productRouter.put("/products/:id", updateProduct); //update
productRouter.delete("/products/:id", deleteProduct); //delete

module.exports = productRouter;

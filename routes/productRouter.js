const express = require("express");
const validateMiddleware = require("../middlewares/validationMiddleware");
const productSchema = require("../utils/validation/productSchema");
const productRouter = express.Router();
const { isLogined, isAdmin } = require("../middlewares/authMiddleware");
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
productRouter.post("/products",validateMiddleware(productSchema),isLogined, isAdmin, createProduct); //create
productRouter.put("/products/:id",validateMiddleware(productSchema),isLogined, isAdmin, updateProduct); //update
productRouter.delete("/products/:id", isLogined, isAdmin, deleteProduct); //delete

module.exports = productRouter;

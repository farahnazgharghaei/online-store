const Product = require("../models/Product");
// const { param } = require("../routes/authRouter");

const getAllProducts = async (req, res) => {
  const productsList = await Product.find({});

  return res.send(productsList);
};

const getProduct = async (req, res) => {
  // console.log(req.params); // path variables
  // console.log(req.query); // query params
  const id = req.params.id;
  console.log(id);

  const product = await Product.findOne({ _id: id });
  if (!product) {
    return res.send({ message: "Not Found" });
  }
  return res.send(product);
};

const createProduct = async (req, res, next) => {
  try {
    const { name, price, image, description } = req.body;

    const newProduct = Product({
      name,
      price,
      image,
      description,
    });

    await newProduct.save();
    return res.send({ message: "Create Product", newProduct });
  } catch (error) {
    // Handle error
    console.error(error);
    // res.status(500).json({ message: "Server error" });
    next(error);
  }
};

const updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    // we cannot find any Student in database
    if (!product) {
      // return res.send({ message: "Not Found" });
      return res
        .status(404)
        .json({ message: `cannot find any Product with ID ${id}` });
    }
    const updateProduct = await Product.findById(id);
    console.log(product);
    // return res.send(product);
    res.status(200).json(updateProduct);
  } catch (error) {
    // Handle error
    console.error(error);
    // res.status(500).json({ message: "Server error" });
    next(error);
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    // we cannot find any Student in database
    if (!product) {
      // return res.send({ message: "Not Found" });
      return res
        .status(404)
        .json({ message: `cannot find any Product with ID ${id}` });
    }
    res.status(200).json(product);
  } catch (error) {
    // Handle error
    console.error(error);
    // res.status(500).json({ message: "Server error" });
    next(error);
  }
};

module.exports = {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};

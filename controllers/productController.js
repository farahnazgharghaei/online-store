const getAllProducts = (req, res) => {
  // console.log(req.baseUrl);
  // console.log(req.url);
  // console.log(req.method);

  //   console.log(req.query); //?sort=DES&filter=Samsung&searchTerm=mobile
//   console.log(req.params); // path variables
  // console.log(req.body);

  return res.send("<h1>All Products</h1>");
};
const getProduct = (req, res) => {
  console.log(req.params); // path variables
  return res.send("single product");
};

const createProduct = (req, res) => {
  return res.send("Create Product");
};

const updateProduct = (req, res) => {
  return res.send("updated Product");
};
const deleteProduct = (req, res) => {
  return res.send("deleted Product");
};

module.exports = {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};

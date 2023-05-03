//GET all products
//@route GET /api/products
//@access public
const getProducts = (req, res) => {
  res.status(200).json({ message: "Get all products" });
};

//CREATE new product
//@route POST /api/products
//@access public
const createProduct = (req, res) => {
  console.log(req.body);
  res.status(201).json({ message: "Create product" });
};
//GET product
//@route GET /api/products
//@access public
const getProduct = (req, res) => {
  res.status(200).json({ message: `Get product by ${req.params.id}` });
};
//UPDATE product
//@route PUT /api/products
//@access public
const updateProduct = (req, res) => {
  res.status(200).json({ message: `Update product for ${req.params.id}` });
};

//DELETE product
//@route DELETE /api/products
//@access public
const deleteProduct = (req, res) => {
  res.status(200).json({ message: `Delete product for ${req.params.id}` });
};

module.exports = {
  getProducts,
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
};

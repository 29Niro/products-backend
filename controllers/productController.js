const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");
//GET all products
//@route GET /api/products
//@access public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find();
  res.status(200).json(products);
});

//CREATE new product
//@route POST /api/products
//@access private
const createProduct = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { name, price, description } = req.body;
  if (!name || !price || !description) {
    res.status(400);
    throw new Error("All fields are mendatory");
  }
  const product = await Product.create({
    name,
    price,
    description,
    user_id: req.user.id,
  });
  res.status(201).json(product);
});
//GET product
//@route GET /api/products
//@access public
const getProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    res.status(404);
    throw new Error("Product not found");
  }
  res.status(200).json(product);
});
//UPDATE product
//@route PUT /api/products
//@access private
const updateProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    res.status(404);
    throw new Error("Product not found");
  }

  const updateProduct = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updateProduct);
});

//DELETE product
//@route DELETE /api/products
//@access private
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    res.status(404);
    throw new Error("Product not found");
  }
  // await Product.remove();
  await Product.findByIdAndRemove(req.params.id);
  // await Product.deleteOne({ _id: req.params.id });
  res.status(200).json(product);
});

module.exports = {
  getProducts,
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
};

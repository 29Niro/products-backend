const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");
//GET all products
//@route GET /api/products
//@access public
const getProducts = asyncHandler(async (req, res) => {
  const products = Product.find();
  res.status(200).json(products);
});

//CREATE new product
//@route POST /api/products
//@access public
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
//@access public
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
//@access public
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    res.status(404);
    throw new Error("Product not found");
  }
  // await Product.remove();
  const remove = await Product.findByIdAndRemove(req.params.id);
  res.status(200).json(remove);
});

module.exports = {
  getProducts,
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
};

import Product from "../models/Product.model.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "An error occurred while fetching products.",
    });
  }
};

export const addProducts = async (req, res) => {
  const product = req.body;

  if (!product.name || !product.price || !product.image) {
    res.status(400).json({
      success: false,
      message: "Please provide all the required fields.",
    });
  }
  const newProduct = new Product(product);
  try {
    await newProduct.save();
    res
      .status(201)
      .json({ success: true, message: "Product created successfully." });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "An error occurred while creating the product.",
    });
  }
};

export const deleteProduct = async (req, res) => {
  const id = req.params.id;
  try {
    await Product.findByIdAndDelete(id);
    res
      .status(200)
      .json({ success: true, message: "Product deleted successfully." });
  } catch (error) {
    res.status(404).json({ success: false, message: "Product not found." });
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;

  const product = req.body;
  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, product, {
      new: true,
    });
    res.status(200).json({
      success: true,
      message: "Product updated successfully.",
      updatedProduct,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      success: false,
      message: "Product not found.",
    });
  }
};
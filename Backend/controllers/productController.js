import mongoose from "mongoose";
import Product from "../models/productsModel.js";

//get all products
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    if (!products) {
      res.status(400).json({ success: false, message: "No Products found" });
    }
    res.status(200).send(products);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

//get single product
export const getSingleProduct = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res
      .status(404)
      .json({ success: false, message: "The product does not exist" });
  }
  try {
    await Product.findById(id);
    res.status(201).json({ success: true, message: "product located" });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(501).json({ success: false, message: "Server Error" });
  }
};
//create new product
export const createProduct = async (req, res) => {
  const product = req.body;

  if (!product.name || !product.price || !product.image) {
    res
      .status(400)
      .json({ success: false, message: "Please input all fields" });
  }

  const newProduct = new Product(product);

  try {
    await newProduct.save();
    res.status(201).json({
      success: true,
      data: newProduct,
      messsage: "Product created Successfully",
    });
  } catch (error) {
    console.error("Error in creating product", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

//Delete Product
export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res
      .status(404)
      .json({ success: false, message: "The product does not exist" });
  }
  try {
    await Product.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "product deleted" });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(501).json({ success: false, message: "Server Error" });
  }
};

//Update Product
export const updateProduct = async (req, res) => {
  const { id } = req.params;

  const product = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res
      .status(404)
      .json({ success: false, message: "The product does not exist" });
  }
  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, product, {
      new: true,
    });
    res.status(200).json({
      success: true,
      data: updatedProduct,
      message: "product updated",
    });
  } catch (error) {
    console.error(`Error: `, error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

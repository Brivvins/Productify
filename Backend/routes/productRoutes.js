import express from "express";
import {
  createProduct,
  deleteProduct,
  getProducts,
  getSingleProduct,
  updateProduct,
} from "../controllers/productController.js";

const router = express.Router();

// get all products
router.get("/", getProducts);

//create a new product
router.post("/", createProduct);

//get one product
router.get("/:id", getSingleProduct);
//delete a  product
router.delete("/:id", deleteProduct);

//update a product
router.put("/:id", updateProduct);

export default router;

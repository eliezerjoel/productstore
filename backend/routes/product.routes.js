import express from "express";
import { addProducts, deleteProduct, getProducts } from "../controllers/product.controller.js";

const router = express.Router();


router.get("/", getProducts );

router.post("/", addProducts);

router.put("/:id", );

router.delete("/:id", deleteProduct);
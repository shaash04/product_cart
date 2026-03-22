import express from "express";
import mongoose from "mongoose";
import Product from "../models/product.model.js";
import { createProducts, deleteProducts, getProducts, updateProducts } from "../controller/product.controller.js";
const router=express.Router();
export default router;

router.get("/",getProducts);
router.post("/",createProducts);
router.put("/:id",updateProducts)
router.delete("/:id",deleteProducts);

import { Router } from "express";
import { ProductService } from "../services/products.js";
import { ProductCtrl } from "../controllers/product.js";
import { Conection } from "../utilities/conexion.js";
import { Container } from "../utilities/container.js";
import { authValidation } from '../middlewares/authValidation.js'
const router = Router();
const db = Conection.conectionDbFile("products");

const product = new Container(ProductService, db, ProductCtrl).Controller;

router.get("/", product.getAll());
router.post("/", authValidation(true), product.create());
router.get("/:id", product.getById());
router.put("/:id", authValidation(), product.updateById());
router.delete("/:id", authValidation(), product.deleteById());

export default router;

import { Router } from "express";
import { ProductService } from "../services/products.js";
import { ProductCtrl } from "../controllers/product.js";
import { Conection } from "../utilities/conexion.js";
import { Container } from "../utilities/container.js";

const router = Router();
const db = Conection.conectionDbFile("products");

const product = new Container(ProductService, db, ProductCtrl).Controller;

router.get("/", product.getAll());
router.post("/", product.create());
router.get("/", product.getAll());
router.get("/:id", product.getById());
router.put("/:id", product.updateById());
router.delete("/:id", product.deleteById());

export default router;

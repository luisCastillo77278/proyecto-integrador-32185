import { Router } from "express";
import { ProductService } from "../services/products.js";
import { ProductCtrl } from "../controllers/product.js";
import { authValidation } from '../middlewares/authValidation.js'

import { Container as Inyectable } from "../utilities/container.js";
import { Contenedor } from '../models/Contenedor.js'

import { CNX_STR } from '../enviroments/dev.enviroment.js'
console.log(CNX_STR)

const router = Router();

const data = new Contenedor("FILE", "products")
const db = data.getContainer()

const product = new Inyectable(ProductService, db, ProductCtrl).Controller;

router.get("/", product.getAll());
router.post("/", authValidation(true), product.create());
router.get("/:id", product.getById());
router.put("/:id", authValidation(), product.updateById());
router.delete("/:id", authValidation(), product.deleteById());

export default router;

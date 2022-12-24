import { Router } from "express";
import { ProductService } from "../services/products.js";
import { ProductCtrl } from "../controllers/product.js";
import { authValidation } from '../middlewares/authValidation.js'

import { enviroment } from '../enviroments/env.js'
import { database } from "../data/database.js";
import { Container } from "../models/Container.js";

const router = Router();

const container = new Container()
container.collection = "products"
container.connection = database[enviroment.persistence];

const product = new ProductCtrl( 
  new ProductService(
    await container.getContainer(
      enviroment.persistence
    )
  )
)

router.get("/", product.getAll());
router.post("/", authValidation(true), product.create());
router.get("/:id", product.getById());
router.put("/:id", authValidation(true), product.updateById());
router.delete("/:id", authValidation(true), product.deleteById());

export default router;

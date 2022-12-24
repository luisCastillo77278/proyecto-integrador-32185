import { Router } from "express";
import { ShoppingCartService } from "../services/shoppingcart.js";
import { ShoppingCartCtlr } from "../controllers/shoppingcart.js";
import { Container } from "../models/Container.js";
import { database } from "../data/database.js";
import { enviroment } from "../enviroments/env.js";

const router = Router();

const container = new Container()
container.collection = "shoppingcart"
container.connection = database[enviroment.persistence]

const shoppingcart = new ShoppingCartCtlr(
  new ShoppingCartService(
    await container.getContainer(
      enviroment.persistence
    )
  )
)

router.post("/", shoppingcart.create());
router.post("/:id_cart/products", shoppingcart.createProduct());
router.get("/:id_cart/products", shoppingcart.getById());
router.delete("/:id_cart", shoppingcart.deleteById());
router.delete("/:id_cart/products/:id_prod", shoppingcart.deleteByIdProduct());

export default router;

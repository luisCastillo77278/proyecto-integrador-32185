import { Router } from "express";
import { ShoppingCartService } from "../services/shoppingcart.js";
import { ShoppingCartCtlr } from "../controllers/shoppingcart.js";
import { Conection } from "../utilities/conexion.js";
import { Container } from "../utilities/container.js";

const router = Router();
const db = Conection.conectionDbFile("shoppingcart");

const shoppingcart = new Container(ShoppingCartService, db, ShoppingCartCtlr)
  .controller;

router.post("/", shoppingcart.create());
router.post("/:id_cart/products", shoppingcart.createProduct());
router.get("/:id_cart/products", shoppingcart.getById());
router.delete("/:id_cart", shoppingcart.deleteById());
router.delete("/:id_cart/products/:id_prod", shoppingcart.deleteByIdProduct());

export default router;

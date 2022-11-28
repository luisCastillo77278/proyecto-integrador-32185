import { ShoppingCart } from "../models/ShoppingCart.js";
import { ProductService } from "../services/products.js";
import { Conection } from "../utilities/conexion.js";

export class ShoppingCartCtlr {
  constructor(service) {
    this.service = service;
  }

  create() {
    return async (req, res) => {
      const { products } = req.body;
      const cart = new ShoppingCart(products || []);
      const shoppingcart = await this.service.save(cart);
      res.json(shoppingcart);
    };
  }

  createProduct() {
    return async (req, res) => {
      const { id_cart } = req.params;
      const { id_product } = req.body;

      const productService = new ProductService(
        Conection.conectionDbFile("products")
      );

      const product = await productService.getById(id_product);
      const { products } = await this.service.getById(id_cart);

      products.push(product);
      const shoppingcart = await this.service.updateById(id_cart, { products });
      res.json(shoppingcart);
    };
  }

  getById() {
    return async (req, res) => {
      const { id_cart } = req.params;
      const { products } = await this.service.getById(id_cart);
      res.json(products);
    };
  }

  deleteById() {
    return async (req, res) => {
      const { id_cart } = req.params;
      const products = await this.service.updateById(id_cart, { products: [] });
      res.json(products);
    };
  }

  deleteByIdProduct() {
    return async (req, res) => {
      const { id_cart, id_prod } = req.params;

      const { products } = await this.service.getById(id_cart);
      const index = products.findIndex((product) => product.id === id_prod);

      const product = products[index];
      products.splice(index, 1);

      await this.service.updateById(id_cart, { products });
      res.json(product);
    };
  }
}

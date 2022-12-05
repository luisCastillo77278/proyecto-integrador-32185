import { ShoppingCart } from "../models/ShoppingCart.js";
import { ProductService } from "../services/products.js";
import { Conection } from "../utilities/conexion.js";
import { HANDLE_404_ERROR, HANDLE_500_ERROR } from "../utilities/handleEstatus.js";

export class ShoppingCartCtlr {
  constructor(service) {
    this.service = service;
  }

  create() {
    return async (req, res) => {
      try {
        const { products } = req.body;
        const cart = new ShoppingCart(products || []);
        const shoppingcart = await this.service.save(cart);
        return res.json(shoppingcart);
      } catch (err) {
        return res.status(HANDLE_500_ERROR).json({
          status: HANDLE_500_ERROR,
          message: err.message
        })
      }
    };
  }

  createProduct() {
    return async (req, res) => {
      try {
        const { id_cart } = req.params;
        const { id_product } = req.body;
  
        const cart = await this.service.getById(id_cart);
        if(!cart) 
          throw {
            status: HANDLE_404_ERROR,
            message: `No se encontro el recurso con el valor ${id_cart}`
          }

        const productService = new ProductService(
          Conection.conectionDbFile("products")
        );
  
        const product = await productService.getById(id_product);
        if(!product) 
          throw {
            status: HANDLE_404_ERROR,
            message: `No se encontro el recurso con el valor ${id_product}`
          }
  
        const { products } = cart;
        products.push(product);
        const shoppingcart = await this.service.updateById(id_cart, { products });
        return res.json(shoppingcart);
      } catch (err) {
        return res.status(err.status || HANDLE_500_ERROR).json({
          status: err.status || HANDLE_500_ERROR,
          message: err.message
        })
      }
    };
  }

  getById() {
    return async (req, res) => {
      try {
        const { id_cart } = req.params;
        const cart = await this.service.getById(id_cart);
        if (!cart)
          throw {
            status: HANDLE_404_ERROR,
            message: `No se encontro el recurso con el valor ${id_cart}`
          }
        const { products } = cart;
        return res.json(products);
      } catch (err) {
        return res.status(err.status || HANDLE_500_ERROR).json({
          status: err.status || HANDLE_500_ERROR,
          message: err.message
        })
      }
    };
  }

  deleteById() {
    return async (req, res) => {
      try {
        const { id_cart } = req.params;
        const products = await this.service.updateById(id_cart, { products: [] });
        if (!products)
          throw {
            status: HANDLE_404_ERROR,
            message: `No se encontro el recurso con el valor ${id_cart}`
          }
        return res.json(products);
      } catch (err) {
        return res.status(err.status || HANDLE_500_ERROR).json({
          status: err.status || HANDLE_500_ERROR,
          message: err.message
        })
      }
    };
  }

  deleteByIdProduct() {
    return async (req, res) => {
      try {
        const { id_cart, id_prod } = req.params;

        const cart = await this.service.getById(id_cart);
        if(!cart)
          throw {
            status: HANDLE_404_ERROR,
            message: `No se encontro el recurso con el valor de ${id_cart}`
          }
        
        const { products } = cart;

        const index = products.findIndex((product) => product.id === id_prod);

        if (index === -1)
          throw {
            status: HANDLE_404_ERROR,
            message: `No se encontro el recurso con el valor ${id_prod}`
          }

        const product = products[index];
        products.splice(index, 1);
        await this.service.updateById(id_cart, { products });

        return res.json(product);
      } catch (err) {
        return res.status(err.status || HANDLE_500_ERROR).json({
          status: err.status || HANDLE_500_ERROR,
          message: err.message
        })
      }
    };
  }
}

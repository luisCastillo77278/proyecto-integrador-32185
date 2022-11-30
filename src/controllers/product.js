import { Product } from "../models/Product.js";
import {
  HANDLE_404_ERROR,
  HANDLE_500_ERROR,
} from "../utilities/handleEstatus.js";

export class ProductCtrl {
  constructor(service) {
    this.service = service;
  }

  create() {
    return async (req, res) => {
      try {
        const { name, price, image, description } = req.body;
        const product = await this.service.save(
          new Product(name, price, image, description)
        );
        return res.status(201).json({ product });
      } catch (err) {
        return res.status(HANDLE_500_ERROR).json({
          status: HANDLE_500_ERROR,
          message: err.message,
        });
      }
    };
  }

  getAll() {
    return async (_req, res) => {
      try {
        const products = await this.service.getAll();
        return res.status(200).json(products);
      } catch (err) {
        return res.status(HANDLE_500_ERROR).json({
          status: HANDLE_500_ERROR,
          message: err.message,
        });
      }
    };
  }

  getById() {
    return async (req, res) => {
      try {
        const { id } = req.params;
        const product = await this.service.getById(id);
        if (!product)
          throw {
            status: HANDLE_404_ERROR,
            message: `No se encontro el recurso con el valor ${id}`,
          };
        return res.json({ product });
      } catch (err) {
        return res.status(err.status || HANDLE_500_ERROR).json({
          status: err.status || HANDLE_500_ERROR,
        });
      }
    };
  }

  updateById() {
    return async (req, res) => {
      try {
        const { id } = req.params;
        const product = await this.service.updateById(id, req.body);
        if (!product)
          throw {
            status: HANDLE_404_ERROR,
            message: `No se encontro el recurso con el valor ${id}`,
          };

        return res.json({ product });
      } catch (err) {
        return res.status(err.status || HANDLE_500_ERROR).json({
          status: err.status || HANDLE_500_ERROR,
          message: err.message,
        });
      }
    };
  }

  deleteById() {
    return async (req, res) => {
      try {
        const { id } = req.params;
        const product = await this.service.deleteById(id);
        if (!product) {
          throw {
            status: HANDLE_404_ERROR,
            message: `No se encontro el recurso con el valor ${id}`,
          };
        }
        return res.json({ product });
      } catch (err) {
        return res.status(err.status || HANDLE_500_ERROR).json({
          status: err.status || HANDLE_500_ERROR,
          message: err.message,
        });
      }
    };
  }
}

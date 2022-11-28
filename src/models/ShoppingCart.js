import { randomUUID } from "crypto";
export class ShoppingCart {
  id;
  products;
  constructor(products) {
    this.id = randomUUID();
    this.products = products;
  }
}

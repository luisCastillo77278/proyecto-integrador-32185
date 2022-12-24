import { randomUUID } from "crypto";
export class Product {
  id;
  name;
  description;
  image;
  price;

  constructor(name, price, image, description) {
    this.id = randomUUID();
    this.name = name;
    this.description = description;
    this.image = image;
    this.price = price;
  }
}

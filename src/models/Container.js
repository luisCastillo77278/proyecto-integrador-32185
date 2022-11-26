//todo a qui importamos el file
import { File } from "../utilities/File.utility.js";

export class Container {
  #file
  constructor(filename) {
    this.#file = new File(filename)
  }

  save(data) {
    this.#file.fileWrite(data)
  }

  getAll() { }
  getById() { }
  updateById() { }

}
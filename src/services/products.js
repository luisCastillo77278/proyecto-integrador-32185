/**
 * llamar a contenedor constructor(container, configure)
 * ejecutar el metodo getConection() para
 * obtener la conection
 */
export class ProductService {
  #container
  constructor(container) {
    this.#container = container
  }

  async getAll(){
    return await this.#container.getAll()
  }

  async getById(id){
    return await this.#container.getById(id)
  }
  
  async updateById(id, data){
    return await this.#container.updateById(id, data)
  }

  async deleteById(id){
    return await this.#container.deleteById(id)
  }
}

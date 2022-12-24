export class Service {
  #container
  constructor(container) {
    this.#container = container
  }

  async save(data){
    return await this.#container.save(data);
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

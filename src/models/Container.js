export class Container {

    constructor(db){
      this.file = db
    }
  
    async getDB(){
      return await this.file.fileReader()
    }
  
    async save(obj) {
      const elements = await this.getDB()
      elements.push(obj)
      await this.file.fileWrite(elements)
      return obj
    }
  
    async getAll() { 
      return await this.getDB()
    }
  
    async getById(id) {
      const elements = await this.getDB()
      return elements.find( element => element.id === id)
    }
    
    async updateById(id, obj) { 
      const elements = await this.getDB()
      const index = elements.findIndex( element => element.id === id)   
  
      const beforedElement = elements[index] 
      elements[index]  = {...beforedElement, ...obj}
      await this.file.fileWrite(elements)
      return elements[index]
    }
  
    async deleteById(id){
      const elements = await this.getDB()
      const index = elements.findIndex( element => element.id === id)   
  
      const element = elements[index]
      elements.splice(index, 1)
      await this.file.fileWrite(elements)
      return element
    }
  }
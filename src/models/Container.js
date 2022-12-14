import { MongoContainer } from "./MongoContainer.js"
import { FileContainer } from './FileContainer.js'
import { FirebaseContainer } from "./FirebaseContainer.js"

export class Container{
  collection
  connection
  #container = {
    mongo: async()=>{
      const db = await this.connection()
      return new MongoContainer(db, this.collection);
    },
    file: async() => {
      return new FileContainer(this.connection(this.collection))
    },
    firebase: async() => {
      const db = await this.connection()
      return new FirebaseContainer(db, this.collection)
    }
  }

  async getContainer(persistence){
    const database = this.#container[persistence]
    return await database()
  }
  
}

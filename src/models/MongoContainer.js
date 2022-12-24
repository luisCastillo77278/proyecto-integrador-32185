
export class MongoContainer {
  #collection
  constructor(db, nameCollection){
    this.#collection = db.collection(nameCollection)
  }

  async save(data) {
    const { insertedId } =  await this.collection.insertOne(data)
    return await this.#collection.findOne({_id: insertedId }, { projection: {_id: 0}})  
  }

  async getAll(){
    return await this.#collection.find({}, { projection: {_id:0}}).toArray()
  }

  async getById(id){
    return await this.#collection.findOne({ id }, { projection: {_id:0}})
  }

  async updateById(id, data){
    const element = await this.getById(id)
    
    if(!element) return 
    
    const beforedElement = { ...element, ...data }
    await this.#collection.replaceOne({ id }, {...beforedElement})
    return beforedElement
  }

  async deleteById(id){
    const element = await this.getById(id)
    if(!element) return

    await this.#collection.deleteOne({ id })
    return element
  }
}
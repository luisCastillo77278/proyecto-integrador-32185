export class FirebaseContainer {
  #collection
  constructor(db, nameCollection){
    this.#collection = db.collection(nameCollection)
  }

  async save(data){
    const ref = await this.#collection.add({...data})
    return { ...data, id: ref.id }
  }
  
  async getAll(){
    const docs = await (await this.#collection.get()).docs
    return docs.map(doc=>({
      id: doc.ref.id,
      name: doc.data().name,
      description: doc.data().description,
      image: doc.data().image,
      price: doc.data().price
    }))
  }

  async getById(id){
    const doc = this.#collection.doc(id)
    const element = await doc.get()
    return element.data()
  }

  async updateById(id, data){
    const element = { id, ...data}
    const doc = this.#collection.doc(id)
    
    const find = await doc.get()
    if(!find.exists) return 

    await doc.update({...element})
    return this.getById(id)
  }

  async deleteById(id){
    const doc = this.#collection.doc(id)
    
    const find = await doc.get()
    if(!find.exists) return 
    
    const element = await this.getById(id)
    await doc.delete()    
    return element
  }
}
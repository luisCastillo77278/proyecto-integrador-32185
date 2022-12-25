import { FileConnection } from "../config/file.js"
import { FirebaseConnection } from "../config/firebase.js"
import { MongoConnection } from "../config/mongo.js"

export const database = {
  mongo: async() => {
    return await MongoConnection()
  },
  file: async(name) =>{
    return FileConnection(name)
  },
  firebase: async() => {
    return await FirebaseConnection() 
  }
}
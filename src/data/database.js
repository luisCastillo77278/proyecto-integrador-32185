import { FileConnection } from "../config/file.js"
import { MongoConnection } from "../config/mongo.js"

export const database = {
  mongo: async() => {
    return await MongoConnection()
  },
  file: async(name) =>{
    return FileConnection(name)
  },
  firebase: () => {}
}
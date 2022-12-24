import { MongoClient } from "mongodb"
import { enviroment } from '../enviroments/env.js'

export const MongoConnection = async() =>{
  const {nameDB, url} = enviroment.databases.mongo;
  const client = new MongoClient(url)
  await client.connect()
  console.log("conectado");
  return client.db(nameDB)
}




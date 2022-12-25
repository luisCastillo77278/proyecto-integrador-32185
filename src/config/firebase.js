import admin from 'firebase-admin'
import fs from "fs"
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export const FirebaseConnection = async() =>{
  return admin.firestore()
}

export const FirebaseInit = async() =>{
  const config = await fs.promises.readFile(join(__dirname, "../enviroments/coderhouse-17f84-firebase-adminsdk-wkqe9-d9d672889e.json"), { encoding: "utf8" })
  const credential = JSON.parse(config);
  admin.initializeApp({
    credential: admin.credential.cert(credential),
    databaseURL: "https://coderhouse-17f84.firebaseio.com"
  }) 
}
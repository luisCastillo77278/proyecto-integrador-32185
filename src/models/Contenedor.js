import { File } from '../utilities/File.utility.js'
import { FileContainer } from './FileContainer.js'
import { 
  ConectionDB,
  ConectionER,
  ConectionMongo,
  ConectionFirebase
} from '../data/config.js'


export class Contenedor {
  #configure
  #name

  #conection = {
    "FILE": () => {
      const db = new ConectionDB(File, this.#configure);
      return db.connection();
    },
    "MONGO": () =>{},
    "RELATIONAL": () => {},
    "FIREBASE": () => {}
  };

  #container = {
    "FILE": () => {
      const conection = this.#getConection()
      return new FileContainer(conection())
    },
    "MONGO": () =>{},
    "RELATIONAL": () => {},
    "FIREBASE": () => {}
  }

  constructor(name, configure){
    this.#name = name
    this.#configure = configure
  }

  #getConection(){
    return this.#conection[this.#name]
  }

  getContainer(){
    return this.#container[this.#name]()
  }
}
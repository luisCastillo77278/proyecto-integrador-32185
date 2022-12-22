/**
 * @export
 * @class conectionDB 
 * @classdesc clase para conexion a mongo
 */
export class ConectionDB {
  constructor(db, configuration = null) {
    this.db = db;
    this.configuration = configuration;
  }
  connection() {
    return new this.db(this.configuration);
  }
}

/**
 * @export
 * @class ConectionMongo
 * @extends {ConectionDB}
 * @classdesc clase para conexion mongo
 */
export class ConectionMongo extends ConectionDB {
  #nameDb
  constructor(db, configuration = null, nameDb){
    super(db, configuration)
    this.#nameDb = nameDb
  }
  async connection(){
    const client = new this.db(this.configuration)
    await client.connect() 
    return client.db(this.#nameDb)
  }
}

/**
 * @export
 * @class ConectionFirebase
 * @extends {ConectionDB}
 * @classdesc clase para conexion a firebase
 */
export class ConectionFirebase extends ConectionDB {
  constructor(db, configuration = null){
    super(db, configuration)
  }
}

/**
 * @export
 * @class ConectionER
 * @extends {ConectionDB}
 * @classdesc clase para conexcion base de datos relacional
 */
export class ConectionER extends ConectionDB {
  constructor(db, configuration = null){
    super(db, configuration)
  }
}
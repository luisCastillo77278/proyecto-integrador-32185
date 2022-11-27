export class ConfigureDb {
    constructor(db, configuration = null) {
        this.db = db
        this.configuration = configuration
    }

    connection(){
        return new this.db(this.configuration)
    }
}

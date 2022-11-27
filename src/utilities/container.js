export class Container {
    constructor(services, dbConfig, controller){
        this.service = new services(dbConfig)  
        this.controller = new controller(this.service)
    }

    get Controller(){
        return this.controller
    }
}

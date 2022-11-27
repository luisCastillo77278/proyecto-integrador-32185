import express from 'express'
import { Routing } from './routes/index.js'

class Server {

  constructor() {
    this.app = express()
    this.middlewares()
    this.routing()
  }


  async routing() {
    const router = new Routing()
    await router.DinamicImportRounting()
    this.app.use('/api', router.routing)
  }

  middlewares(){
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: false}))
    this.app.use(express.static('./public'))
  }


  listen() {
    this.app.listen(3000, () => console.log('3000 corriendo'))
  }

}

const server = new Server()
server.listen()
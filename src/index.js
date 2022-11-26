import express from 'express'
import { Routing } from './routes/index.js'


class Server {

  constructor() {
    this.app = express()
    this.routing()
  }

  async routing() {
    const router = new Routing()
    await router.DinamicImportRounting()
    this.app.use('/api', router.routing)
  }


  listen() {
    this.app.listen(3000, () => console.log('3000 corriendo'))
  }

}

const server = new Server()
server.listen()
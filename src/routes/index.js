import { promises as fs } from 'fs'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { Router } from 'express'

const __dirname = dirname(fileURLToPath(import.meta.url))

export class Routing {

  constructor() {
    this.router = Router()
  }

  get routing() {
    return this.router
  }

  async DinamicImportRounting() {
    const files = await fs.readdir(__dirname)
    files.forEach(async (dir) => {
      const file = dir.split('.')[0]
      if (!'index'.includes(file)) {
        console.log(`Cargando Route --> ${file}`);
        const modulo = await import(`./${file}.js`)
        this.router.use(`/${file}`, modulo.default)
      }
    })
  }

}
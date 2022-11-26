import { promises as fs, existsSync } from 'fs'
import { join } from 'path'

export class File {
  #path
  constructor(filename) {
    this.#path = join(__dirname, `../data/${filename}.txt`)
  }

  async fileReader() {
    try {
      if (!existsSync(this.#path)) return []
      const data = await fs.readFile(this.#path, {
        encoding: 'utf8'
      })
      return JSON.parse(data)
    } catch (error) {
      throw error
    }
  }

  fileWrite(data) {
    try {
      fs.writeFile(this.#path, JSON.stringify(data, null, 2))
    } catch (error) {
      throw error
    }
  }

}
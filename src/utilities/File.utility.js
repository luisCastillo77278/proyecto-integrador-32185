import { promises as fs, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export class File {
  #path;
  constructor(filename) {
    this.#path = join(__dirname, `../database/${filename}.txt`);
  }

  async fileReader() {
    try {
      if (!existsSync(this.#path)) return [];
      const data = await fs.readFile(this.#path, {
        encoding: "utf8",
      });
      return JSON.parse(data);
    } catch (error) {
      throw error;
    }
  }

  fileWrite(data) {
    try {
      fs.writeFile(this.#path, JSON.stringify(data, null, 2));
    } catch (error) {
      throw error;
    }
  }
}

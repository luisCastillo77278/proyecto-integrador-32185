import { ConfigureDb } from '../data/config.js'
import { File } from "./File.utility.js";

export const Conection = {
    conectionDbFile: (configure) => {
        const db = new ConfigureDb(File, configure)
        return db.connection()
    }
}

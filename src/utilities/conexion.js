import { ConectionDB } from "../data/config.js";
import { File } from "./File.utility.js";

export const Conection = {
  conectionDbFile: (configure) => {
    const db = new ConectionDB(File, configure);
    return db.connection();
  },
};

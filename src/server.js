import express from "express";
import { FirebaseInit } from "./config/firebase.js";
import { enviroment } from "./enviroments/env.js";
import { Routing } from "./routes/index.js";
import { HANDLE_404_ERROR } from "./utilities/handleEstatus.js";

export class Server {
  constructor() {
    this.app = express();

    if(enviroment.persistence === "firebase") this.#initFirebase()
    
    this.middlewares();
    this.routing();
  }

  async routing() {
    const router = new Routing();
    await router.DinamicImportRounting();
    this.app.use("/api", router.routing);
    this.app.use("*", (_req, res) => {
      res.status(404).json({
        status: HANDLE_404_ERROR,
        message: "No se econtro ruta con esa caracteristica",
      });
    });
  }

  async #initFirebase(){
    await FirebaseInit()
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(express.static("./public"));
  }

  listen() {
    this.app.listen(8080, () => console.log("8080 corriendo"));
  }
}

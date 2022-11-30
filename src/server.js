import express from "express";
import { Routing } from "./routes/index.js";
import { HANDLE_404_ERROR } from "./utilities/handleEstatus.js";

export class Server {
  constructor() {
    this.app = express();
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

  middlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(express.static("./public"));
  }

  listen() {
    this.app.listen(3000, () => console.log("3000 corriendo"));
  }
}

import express from "express";
import cors from "cors";
import { createServer } from "http";
import { Server } from "socket.io";

// import router from '../routes/userRoute.js';

// Requests: Cuando el usuario hace una peticion
// Response: Cuando el servidor responde a una peticion

//! Creamos un servidor con express con clases

class Servidor {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;
    this.server = createServer(this.app);
    this.io = new Server(this.server); // Socket.io: Servidor de sockets

    this.paths = {};

    // Middlewares
    this.middlewares();

    // Rutas de mi app
    this.routes();

    //sockets
    this.sockets();
  }

  middlewares() {
    // Cors
    this.app.use(cors()); // use: para usar un middleware

    // Directorio carpeta publica
    this.app.use(express.static("public")); // use: para usar un middleware
  }

  // Rutas de mi app
  routes() {
    // this.app.use( this.paths.usuariosPath, router );
  }

  sockets() {
    this.io.on('connection', (socket) => {

      socket.on('disconnect', () => {
      });


      socket.on('send-message', (paypload, ) => {
        this.io.emit("send-message", paypload)

      })
    });
  }

  listen() {
    this.server.listen(this.port, () => {
      console.log(`Servidor corriendo en el puerto ${this.port}`);
    });
  }
}

export { Servidor };

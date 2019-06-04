import dotenv = require("dotenv");
import http = require("http");
import socket = require("socket.io");

dotenv.config();
const portSocket = process.env.PORT_SOCKET || 5000;

let mInstance: Socket = null;

class Socket {
  public io: any = null;

  constructor() {
    const socketServer = http.createServer();
    this.io = socket(socketServer);

    this.io.on("connection", (client) => {
      console.info("[connection] new client connected");

      client.on("disconnect", () => {
        console.info("[disconnect] new client disconected");
       });
    });

    socketServer.listen(portSocket);
  }
}

export function instance(): Socket {
  if (!mInstance) {
    mInstance = new Socket();
  }

  return mInstance;
}

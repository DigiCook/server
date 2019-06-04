import dotenv = require("dotenv");
import http = require("http");
import socket = require("socket.io");

dotenv.config();
const portSocket = process.env.PORT_SOCKET || 5000;

let mInstance: Socket = null;

class Socket {
  public io: any = null;
  private clients: any[] = [];

  constructor() {
    const socketServer = http.createServer();
    this.io = socket(socketServer);

    this.io.on("connection", (client) => {
      this.clients.push(client);
      console.info("[connection] new client connected - all clients", this.clients.length);

      client.on("disconnect", () => {
        const index = this.clients.indexOf(client);
        if (index >= 0) {
          this.clients.splice(index, 1);
        }

        console.info("[disconnect] new client disconected - all clients", this.clients.length);
       });
    });

    socketServer.listen(portSocket);
  }

  public haveClient(): boolean {
    return this.clients.length > 0;
  }
}

export function instance(): Socket {
  if (!mInstance) {
    mInstance = new Socket();
  }

  return mInstance;
}

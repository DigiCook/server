import dotenv = require("dotenv");
import http = require("http");
import socketIo = require("socket.io");

dotenv.config();
const port = process.env.PORT || 4000;

let mInstance: Socket = null;

class Socket {
  public io: any = null;
  public server: any = null;
  private clients: any[] = [];

  constructor(app) {
    this.server = http.createServer(app);
    this.io = socketIo.listen(this.server);

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

    // @ts-ignore
    if (typeof(PhusionPassenger) !== "undefined") {
      this.server.listen("passenger");
    } else {
      this.server.listen(port, () => {
        console.log(`Listening on port ${port}`);
      });
    }
  }

  public haveClient(): boolean {
    return this.clients.length > 0;
  }
}

export function instance(): Socket {
  return mInstance;
}

export function init(app) {
  if (!mInstance && app) {
    console.info("[Socket:init]");

    mInstance = new Socket(app);
  }
}

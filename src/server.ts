import bodyParser = require("body-parser");
import child = require("child_process");
import cors = require("cors");
import dotenv = require("dotenv");
import events = require("events");
import express = require("express");
import Stream = require("node-rtsp-stream");
import router = require("./router");
import sequelize = require("./services/sequelize");
import socket = require("./services/socket");

dotenv.config();
// @ts-ignore
if (typeof(PhusionPassenger) !== "undefined") {
  // @ts-ignore
  PhusionPassenger.configure({ autoInstall: false });
}

const app = express();
const port = process.env.PORT || 4000;

sequelize.getInstance();
socket.instance();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api", (req, res, next) => {
  console.info(`${req.method} ${req.originalUrl} with params: ${JSON.stringify(req.params)} and body: ${JSON.stringify(req.body)}`);
  next();
});

router.load(app);
// TMP
let clientNum: number = 1;

function startffmpeg(clientNumer: number) {
  console.log("Starting FFMPEG for client " + clientNumer);
  let ffmpegString = "-i rtsp://193.168.1.10/11 -f webm -c:v libvpx -an -";
  if (ffmpegString.indexOf("rtsp://") > -1) {
      ffmpegString = `-rtsp_transport tcp ${ffmpegString}`;
  }
  console.log(`Executing : ffmpeg ${ffmpegString}`);
  const ffmpegLive = child.spawn("ffmpeg", ffmpegString.split(" "));
  ffmpegLive.on("close", (buffer) => {
      console.log("ffmpeg died", buffer);
  });

  const emitter = new events.EventEmitter().setMaxListeners(1);
  ffmpegLive.stdout.on("data", (buffer) => {
      emitter.emit("data", buffer);
  });

  return { ffmpegLive, emitter };
}

app.get("/live", (req, res) => {
  const thisclientNum: number = clientNum++;
  const result: any = startffmpeg(thisclientNum);
  const { ffmpegLive, emitter } = result;
  const contentWriter = (buffer) => {
    res.write(buffer);
  };

  res.writeHead(200, {
      "Date": new Date().toUTCString(),
      "Connection": "close",
      "Cache-Control": "no-cache",
      "Pragma": "no-cache",
      "Content-Type": "video/webm",
      "Server": "WebM from rtsp stream",
  });

  emitter.on("data", contentWriter);

  res.on("close", () => {
      emitter.removeListener("data", contentWriter);
      console.log("Connection closed by client " + thisclientNum);
      if (ffmpegLive) {
        ffmpegLive.kill();
        console.log("ffmpeg being killed....");
      } else {
        console.log("no ffmpeg existing");
      }
  });
});

/* const a = new Stream({
  name: "name",
  streamUrl: "rtsp://admin:admin@193.168.1.10/11",
  wsPort: 9998,
  ffmpegOptions: { // options ffmpeg flags
    "-stats": "", // an option with no neccessary value uses a blank string
    "-r": 30 // options with required values specify the value after the key
  }
}); */
// TMP

// @ts-ignore
if (typeof(PhusionPassenger) !== "undefined") {
  app.listen("passenger");
} else {
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
}

app.use((req: any, res: any) => {
  res.status(404).send({url: `${req.originalUrl} not found` });
});

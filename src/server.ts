import bodyParser = require("body-parser");
import cors = require("cors");
import dotenv = require("dotenv");
import express = require("express");
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

sequelize.getInstance();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api", (req, res, next) => {
  console.info(`${req.method} ${req.originalUrl} with params: ${JSON.stringify(req.params)} and body: ${JSON.stringify(req.body)}`);
  next();
});

router.load(app);

// init the socket server and express server on the same port !
socket.init(app);

app.use((req: any, res: any) => {
  res.status(404).send({url: `${req.originalUrl} not found` });
});

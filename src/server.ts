import bodyParser = require("body-parser");
import cors = require("cors");
import dotenv = require("dotenv");
import express = require("express");
import sequelize = require("./services/sequelize");
dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

sequelize.getInstance();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// routes(app);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.use((req: any, res: any) => {
  res.status(404).send({url: `${req.originalUrl} not found` });
});

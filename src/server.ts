import bodyParser = require("body-parser");
import cors = require("cors");
import dotenv = require("dotenv");
import express = require("express");
import sequelize = require("./services/sequelize");
import router = require("./router")
dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

sequelize.getInstance();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', (req, res, next) => {
  console.info(`${req.method} ${req.originalUrl} with params: ${JSON.stringify(req.params)} and body: ${JSON.stringify(req.body)}`);
  next();
});

router.load(app);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.use((req: any, res: any) => {
  res.status(404).send({url: `${req.originalUrl} not found` });
});

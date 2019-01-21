import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes/exampleRoutes';
import cors from 'cors'
import Sequelize from './services/sequelize'
import sequelize from './services/sequelize';

require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000;

sequelize.getInstance();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.get('/', (req, res) => {
  res.status(200).send('Hello World !!');
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})

app.use((req, res) => {
  res.status(404).send({url: `${req.originalUrl} not found` });
})
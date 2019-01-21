import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import Task from './models/exampleModel';
import routes from './routes/exampleRoutes';
import cors from 'cors'

require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000;

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb', { useNewUrlParser: true }); 

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
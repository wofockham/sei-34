const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

global.Vocab = require('./api/models/vocabModel');
const routes = require('./api/routes/vocabRoutes');

mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);
mongoose.connect(
  `mongodb+srv://vocab:${ process.env.MONGOPW }@cluster0-i0cbj.mongodb.net/test?retryWrites=true&w=majority`,
  { useNewUrlParser: true }
);

const port = process.env.PORT || 3000;
const server = express();

server.use(cors());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

routes(server);
server.listen(port);

server.get('/', (req, res) => res.send('hi'));

server.use((req, res) => {
  res.status(404).send({ url: req.originalUrl + ' not found' });
});

console.log(`Server running at http://localhost:${ port }`);

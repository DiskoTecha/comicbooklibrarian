const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const database = require('./database/db');
const path = require('path');

const comicRoute = require('./routes/comic.routes');

mongoose.Promise = global.Promise;
mongoose.set('useUnifiedTopology', true);
mongoose.connect(database.db, {
  useNewUrlParser: true
}).then(() => {
  console.log('Database connected successfully')
},
  error => {
    console.log('Database could not be connected : ' + error)
  }
);

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(express.static(path.join(__dirname, 'build')));
app.use('/api/comics', comicRoute);


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log('Connected to port' + port);
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) {
    err.statusCode = 500;
  }
  res.status(err.statusCode).send(err.message);
});

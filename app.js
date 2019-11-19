const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const api = require('./routes/api'); 

// Set up the express app
const app = express();

// Log requests to the console.
app.use(logger('dev'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

  app.use(bodyParser.urlencoded({
  extended: true
}));
  app.use(bodyParser.json());
// Bundle API routes.
app.use('/', api);

// Setup a default catch-all route that sends back a welcome message in JSON format.
// app.get('*', (req, res) => res.status(200).send({
//   message: 'Welcome to the beginning of nothingness.',
// }));

module.exports = app;
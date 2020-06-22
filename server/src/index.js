// basic express app
const express = require('express');

require('dotenv').config();

// import middle-ware with require
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
// mongoose is providing a validation schema on top of mongoDB,
// so you don't get null into your DB
const mongoose = require('mongoose');

// middle-ware stack; use before error handlers, but use after every other middle-ware & root-route that you set up
const logs = require('../api/logs');

const { notFound, errorHandler } = require('./middlewares');

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();
// setup middle-ware
app.use(morgan('common'));
app.use(helmet());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);

// added json body parsing middle-ware (needed for posting requests with JSON body)
app.use(express.json());

// default route '/'
app.get('/', (req, res) => {
  res.json({
    message: 'Hello World!',
  });
});

// whenever the server gets a request on /api/logs it matches it against the routes that were
// specified in api/logs.js file
app.use('/api/logs', logs);

// next-middle-ware: in middle-ware the next method goes on to call the next middle-ware,
// if you call it with an error it'll first log the error
// 404 Not Found middle-ware
app.use(notFound);

// error handling middle-ware
// general error handler
app.use(errorHandler);

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

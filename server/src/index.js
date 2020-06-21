// basic express app
const express = require('express');

// import middle-ware with require
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

const { notFound, errorHandler } = require('./middlewares');

const app = express();
// setup middle-ware
app.use(morgan('common'));
app.use(helmet());
app.use(
  cors({
    origin: 'http://localhost:8080',
  })
);

// default route '/'
app.get('/', (req, res) => {
  res.json({
    message: 'Hello World!',
  });
});

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

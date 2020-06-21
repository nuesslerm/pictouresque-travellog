const express = require('express');

// import middle-ware with require
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

const app = express();
// setup middle-ware
app.use(morgan('common'));
app.use(helmet());
app.use(
  cors({
    origin: 'http://localhost:8080',
  })
);

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

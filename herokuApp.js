const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;
const herokuApp = express();

// the __dirname is the current directory from where the script is running
herokuApp.use(express.static(__dirname + '/dist'));

// send the user to index html page in spite of the URL
herokuApp.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist/index.html'));
});

herokuApp.listen(port);

/** explanation:
 * 1. __dirname points to the current directory from where the server.js is being run from
 * and that is treated as the root of your project.
 * 2. When we tell the express app to use a directory it automatically picks up the index.html file to serve.
 * 3. We have also added an extra check to redirect the users back to index.html to avoid ‘not found’ errors and for the sake of simplicity.
 **/

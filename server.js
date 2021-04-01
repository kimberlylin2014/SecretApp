require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
var bodyParser = require('body-parser')
const connection = require('./db/index.js')
const router = require('./server/router/router.js');
const PORT = 3000;

const staticHtmlFile = path.join(__dirname, './client/distr');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/', express.static(staticHtmlFile));

app.use('/secret', router);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
});
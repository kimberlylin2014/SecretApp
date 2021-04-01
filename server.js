require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const connection = require('./db/index.js')
const router = require('./server/router/router.js');
const PORT = 3000;

const staticHtmlFile = path.join(__dirname, './client/distr');

app.use('/', express.static(staticHtmlFile));

app.use(express.json());

app.use('/secret', router);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
});
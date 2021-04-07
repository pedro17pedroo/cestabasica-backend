const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const cors = require('cors');

const config = require('./config')
const router = require('./network/routes');

db(config.dbUrl);

var app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
router(app);

app.use(config.publicRoute, express.static('public'));


app.listen(config.port);
console.log('Servidor corriendo en' + config.host +':'+config.port)


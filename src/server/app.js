const path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const requestPost = require('./handleRequest');
const app = express();
require('dotenv').config();

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static('dist'));

app.get('/', function(req, res){
    res.sendFile(path.resolve('dist/index.html'));
    
});

app.post('/article', requestPost.validateRequest, requestPost.registerPostHandler);

module.exports = app;

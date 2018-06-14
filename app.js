const path = require('path');

//express
const express = require('express');

//session
const session = require('express-session');

//create instance
const app = express();

//middleware to process POST data
const bodyParser = require('body-parser');

//set the template engine into ejs
app.set('views', path.join(__dirname, 'views/web'));
app.set('view engine', 'ejs');
app.engine('ejs', require('ejs').renderFile);

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// serve the files out of ./public as our main files
app.use('/static', express.static(path.join(__dirname, 'dist/public/')));

let home = require('./home');
//declare session middleware
app.use(session({
    secret: 'this.is.super.secret.key', //make this unique and keep it somewhere safe
    saveUninitialized: false,
    resave: false
}));

app.use('/', home);

module.exports = app;
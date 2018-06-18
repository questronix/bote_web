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
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('ejs', require('ejs').renderFile);

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// serve the files out of ./public as our main files
app.use('/static', express.static(path.join(__dirname, 'dist/public/')));

const home = require('./home');
const dashboard = require('./dashboard');
const login = require('./login');
const logout = require('./logout');

//declare session middleware
app.use(session({
    secret: 'this.is.super.secret.key', //make this unique and keep it somewhere safe
    saveUninitialized: false,
    resave: false
}));

let clients = ['/mobile', ''];

for (let i in clients){
    app.use(`${clients[i]}`, home);
    app.use(`${clients[i]}/dashboard`, dashboard);
    app.use(`${clients[i]}/login`, login);
    app.use(`${clients[i]}/logout`, logout);
}
module.exports = app;
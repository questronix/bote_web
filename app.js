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

//declare session middleware
app.use(session({
    secret: 'this.is.super.secret.key', //make this unique and keep it somewhere safe
    saveUninitialized: false,
    resave: false
}));

let home = require('./Modules/home');
let login = require('./Modules/login');
let dashboard = require('./Modules/dashboard');
let profile = require('./Modules/profile');
let logout = require('./Modules/logout');
let cart = require('./Modules/cart');
let bars = require('./Modules/bars');
let settings = require('./Modules/settings');


let clients = ['/mobile', ''];
for(let i in clients){
    app.use(`${clients[i]}`, home);
    app.use(`${clients[i]}/dashboard`, dashboard);
    app.use(`${clients[i]}/profile`, profile);
    app.use(`${clients[i]}/logout`, logout);
    app.use(`${clients[i]}/login`, login);
    app.use(`${clients[i]}/cart`, cart);

    app.use(`${clients[i]}/barProfile`, barProfile);
    app.use(`${clients[i]}/bars`, bars);
    app.use(`${clients[i]}/settings`, settings);
}

module.exports = app;

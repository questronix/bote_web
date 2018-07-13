const path = require('path');

//express
const express = require('express');

//session
const session = require('express-session');

const cfenv = require('cfenv');
const appEnv = cfenv.getAppEnv();

console.log(appEnv);

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
app.use('/static', express.static(path.join(__dirname, 'dist/')));
app.use('/static/img', express.static(path.join(__dirname, 'src/assets')));
app.use('/static/css', express.static(path.join(__dirname, 'src/css')));

//declare session middleware
app.use(session({
    secret: 'this.is.super.secret.key', //make this unique and keep it somewhere safe
    saveUninitialized: false,
    resave: false
}));

let home = require('./Modules/Home');
let notFound = require('./Modules/Error');
let login = require('./Modules/Login');
let dashboard = require('./Modules/Dashboard');
let profile = require('./Modules/Profile');
let logout = require('./Modules/Logout');
let cart = require('./Modules/Cart');
let bars = require('./Modules/Bars');
let settings = require('./Modules/Settings');
let inbox = require('./Modules/Inbox');
let notification = require('./Modules/Notification');

let clients = ['/mobile', ''];
for(let i in clients){
    app.use(`${clients[i]}`, home);
    app.use(`${clients[i]}/dashboard`, dashboard);
    app.use(`${clients[i]}/profile`, profile);
    app.use(`${clients[i]}/logout`, logout);
    app.use(`${clients[i]}/login`, login);
    app.use(`${clients[i]}/cart`, cart);
    app.use(`${clients[i]}/bars`, bars);
    app.use(`${clients[i]}/settings`, settings);
    app.use(`${clients[i]}/inbox`, inbox);
    app.use(`${clients[i]}/notification`, notification);
    app.use(`${clients[i]}/*`, notFound);
}

module.exports = app;

const express = require('express');
const app = express();

//Controller Javascript Files
const main = require('./Controller/main.js');
const home = require('./Controller/home.js');
const profile = require('./Controller/profile.js');
const cart = require('./Controller/cart.js');
const settings = require('./Controller/settings.js');

//Login Page
app.get('/', main.loadLogin);

//Register Page
app.get('/Register', main.loadRegister);

//Main/Home Page
app.post('/Home', home.loadHome);
app.get('/Home', home.loadHome);

//Profile Page
app.get('/Profile', profile.loadProfile);

//Profile Settings Page
app.get('/Settings', settings.loadSettings);

//Cart Page
app.get('/Cart', cart.loadCart);

module.exports = app;
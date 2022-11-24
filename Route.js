const express = require('express');
const app = express();

//Controller Javascript Files
const main = require('./Controller/main.js');
const profile = require('./Controller/profile.js');
const cart = require('./Controller/cart.js');
const product = require('./Controller/product.js');
const settings = require('./Controller/settings.js');

//Login Page
app.get('/', main.loadLogin);
app.post('/verify',  main.userVerification);

//Register Page
app.get('/Register', main.loadRegister);
app.post('/createaccount', main.createUser);

//Main/Home Page
app.get('/Home', main.loadHome);
app.post('/Home', main.loadHome);

//Profile Page
app.get('/Profile', profile.loadProfile);

//Profile Settings Page
app.get('/Settings', settings.loadSettings);
app.post('/update', settings.updateCredentials);

//Cart Page
app.get('/cart', cart.loadCart);
app.get('/removeArt/:artName', cart.removeItem);

//Product Page
app.get('/Product', product.loadProduct);
app.get('/addtocart/:artName', cart.addtocart);

module.exports = app;
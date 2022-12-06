const express = require('express');
const app = express();

//Controller Javascript Files
const main = require('./Controller/main.js');
const profile = require('./Controller/profile.js');
const cart = require('./Controller/cart.js');
const product = require('./Controller/product.js');
const settings = require('./Controller/settings.js');
const {checkAuth, isAuth} = require('./Controller/session.js');

//Login Page
app.get('/', checkAuth, main.loadLogin);
app.post('/verify', main.userVerification);

//Logout
app.get('/Logout', isAuth, main.logoutUser);

//Register Page
app.get('/Register', checkAuth, main.loadRegister);
app.post('/createaccount', checkAuth, main.createUser);

//Main/Home Page
app.get('/Home', isAuth, main.loadHome);
app.post('/Home', isAuth, main.loadHome);

app.get('/About', isAuth, main.loadAbout);

//Profile Page
app.get('/Profile', isAuth, profile.loadProfile);

//Profile Settings Page
app.get('/Settings', isAuth, settings.loadSettings);
app.post('/update', isAuth, settings.updateCredentials);

//Cart Page
app.get('/cart', isAuth, cart.loadCart);
app.get('/removeArt/:artName', isAuth, cart.removeItem);

//Product Page
app.get('/Product', isAuth, product.loadProduct);
app.get('/addtocart/:artName', isAuth, cart.addtocart);

module.exports = app;
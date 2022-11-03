const express = require('express');
const app = express();

//Controller Javascript Files
const main = require('./Controller/main.js');

////Login Page
//app.get('/', main.loadLogin);
//
////Register Page
//app.get('/', main.loadRegister);

//Main/Home Page
app.get('/', main.loadHome);

module.exports = app;
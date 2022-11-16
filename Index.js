const express = require("express");
const mongoose = require("mongoose");

const routes = require('./Route.js');

const session = require('express-session');

mongoose.connect("mongodb://localhost/ArtGallery");

const app = new express();

//View .ejs files 
app.set('view engine', 'ejs');
app.set('views', 'view'); 

//The path for static files inside the public folders that consist of the CSS, JS and Images
app.use('/public', express.static((__dirname) + '/public'));

//Start the server
var port = process.env.PORT || 3000;
app.listen(port, function(){
	console.log("server is running at port: " + port);
});

//Routes to server
app.use('/', routes);
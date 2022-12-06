const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); //For .env variables

//Routing file
const routes = require('./Route.js');

//For Session
const session = require('express-session');
const flash = require('connect-flash');
const MongoStore = require('connect-mongo');

//For Localhost MongoDB
//mongoose.connect("mongodb://localhost/ArtGallery");

//For Cloud Mongo Atlas
const mongoAtlasUri = process.env.MONGODB_URI;
try {
    // Connect to the MongoDB cluster
        mongoose.connect(mongoAtlasUri, { useNewUrlParser: true, useUnifiedTopology: true },
        () => console.log("Mongoose is connected")
    );

} catch (e) {
    console.log("could not connect");
}

const app = new express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

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

//Sessions
app.use(session({
    secret: process.env.SECRET,
    //store: MongoStore.create({mongoUrl: "mongodb://localhost/ArtGallery"}), //Localhost
    store: MongoStore.create({mongoUrl: mongoAtlasUri}), //For Atlas
    resave: false,
    saveUninitialized: true,
    cookies:  {secure: false, maxAge: 24 * 60 * 60 * 1000}
}));

// Flash
app.use(flash());
app.use((req, res, next) => {
	res.locals.success_msg = req.flash('success_msg');
	res.locals.error_msg = req.flash('error_msg');
	next();
});

//Routes to server
app.use('/', routes);
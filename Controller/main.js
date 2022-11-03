//const User = require('../Database/Models/ '); //Insert user database here
const Art = require('../Database/Models/Art.js');
const Artist = require('../Database/Models/Artist.js');

const main = {
//    loadLogin: function(req, res){
//        res.render('login page');
//    },
//
//    loadRegister: function(req, res){
//        res.render('create page');
//    },
    
    loadHome: function(req, res){
        res.render('Home');
    }

};

module.exports = main;
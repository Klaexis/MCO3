//const User = require('../Database/Models/ '); //Insert user database here

const main = {
    loadLogin: function(req, res){
        res.render('login page');
    },

    loadRegister: function(req, res){
        res.render('create page');
    }
};

module.exports = main;
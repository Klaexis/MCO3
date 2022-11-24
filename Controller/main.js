const User = require('../Database/Models/User');
const Art = require('../Database/Models/Art.js');
const Artist = require('../Database/Models/Artist.js');

const main = {
    loadLogin: function(req, res){
        res.render('login page');
    },

    loadRegister: function(req, res){
        res.render('create page');
    },
    
    loadHome: async function(req, res){
        const homeArt = await Art.find({});
        const homeArtist = await Artist.find({});
        
        var getUserName = req.body.username;
        var getPassword = req.body.password;
        
        User.findOne({username: getUserName, password: getPassword},
        function(err, result){
            if(result){
                console.log("Login Successful");
                res.render('Home', {homeArt, homeArtist});
            }
            else{
                console.log("Invalid Login");
                res.redirect('/');
            }
        });
    }
};

module.exports = main;
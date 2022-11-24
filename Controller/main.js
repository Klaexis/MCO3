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
    
    createUser: async function(req, res){
        var username = req.body.userName;
        var userFirstName = req.body.firstName;
        var userLastName = req.body.lastName;
        var userPassword = req.body.password;
        var userImage = req.body.profilePic;
        var userGender = req.body.gender;
        var userEmail = req.body.email;
        var userLocation = req.body.location;
        
        User.create({username: username, userFirstName: userFirstName, userLastName: userLastName, userPassword: userPassword,
                    userImage: userImage, userGender: userGender, userEmail: userEmail, userLocation: userLocation, 
                    aboutMe: ""},
            function(err){
            if(err){
                console.log("Register Failed");
                res.redirect('/Register');
            }
            else{
                console.log("Register Success");
                res.redirect('/');
            }
        });
    }, 
    
    loadHome: async function(req, res){
        const homeArt = await Art.find({});
        const homeArtist = await Artist.find({});
        
        res.render('Home', {homeArt, homeArtist});
    },
    
    userVerification: async function(req, res){
        var getUserName = req.body.username;
        var getPassword = req.body.password;
        
        var loginUser = await User.findOne({username: getUserName});

        if(loginUser.userPassword === getPassword){
            console.log("Login Successful");
            res.redirect('/Home');
        }
        else{
            console.log("Invalid Login");
            res.redirect('/');
        }
    }
};

module.exports = main;
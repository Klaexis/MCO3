const User = require('../Database/Models/User');
const Art = require('../Database/Models/Art.js');
const Artist = require('../Database/Models/Artist.js');

const crypto = require("../public/Javascript/crypto.js");

const main = {
    //Render Login Page
    loadLogin: function(req, res){
        res.render('login page');
    },
    
    //Render Register Page
    loadRegister: function(req, res){
        res.render('create page');
    },
    
    //Render Home page
    loadHome: async function(req, res){
        const homeArt = await Art.find({});
        const homeArtist = await Artist.find({});
        
        res.render('Home', {homeArt, homeArtist});
    },
    
    //Render About Page
    loadAbout: async function(req, res){
        res.render('About');
    },
    
    //Function for creating user
    createUser: async function(req, res){
        //Get values that were sent from /Register
        var username = req.body.userName;
        var userFirstName = req.body.firstName;
        var userLastName = req.body.lastName;
        var userPassword = req.body.password;
        var userImage = req.body.profilePic;
        var userGender = req.body.gender;
        var userEmail = req.body.email;
        var userLocation = req.body.location;
        
        //Find username
        var checkUsername = await User.findOne({username : username});
        
        //If username already exists then error
        if(checkUsername !== null){
            req.flash('errorMsg', "USERNAME ALREADY EXISTS");
            res.redirect('/Register');
        }
        //If username does not exist 
        else {
            //Password encryption
            const arr = crypto.encryption(userPassword);
            var password = arr[0];
            var iv = arr[1];
            
            //Create user to be placed inside MongoDB
            User.create({username: username, userFirstName: userFirstName, userLastName: userLastName, userPassword: password, 
                    userIV: iv, userImage: userImage, userGender: userGender, userEmail: userEmail, userLocation: userLocation, 
                    aboutMe: ""},
                function(err){
                if(err){
                    console.log("Register Failed");
                    req.flash('errorMsg', 'REGISTER FAILED');
                    res.redirect('/Register');
                }
                else{
                    console.log("Register Success");
                    res.redirect('/');
                }
            });
        }   
    }, 
    
    //Function for verifying user
    userVerification: async function(req, res){
        //Get value from / or Login Page
        var getUserName = req.body.username;
        var getPassword = req.body.password;
        
        var loginUser = await User.findOne({username: getUserName}); //Find user and create user object
        
        //Find user if user exists
        User.findOne({username: getUserName}, 
            function(err, user){
                if(err){
                    console.log(err);
                    res.redirect('/');
                }
                else{
                    if(user){ //If User exists
                        //Decrypt user password and compare if the password is correct
                        if(crypto.decryption(loginUser.userIV, loginUser.userPassword) === getPassword){
                            req.session.username = getUserName; //Send session
                            console.log(req.session);
                            console.log("Login Successful");
                            res.redirect('/Home');
                        }
                        else{
                            console.log("Invalid Login");
                            req.flash('errorMsg', 'INVALID LOGIN');
                            res.redirect('/');
                        }
                    }
                    else{ //If User does not exist
                        console.log('Username not found');
                        req.flash('errorMsg', 'USERNAME NOT FOUND');
                        res.redirect('/');
                    }
                }
            });
    },
    
    //Function for logging out user
    logoutUser: function(req, res){
        if(req.session){ //If session exists
            req.session.destroy(()=>{ //Destroy current session
                res.clearCookie('connect.sid'); //Clear cookie data
                res.redirect('/'); //Return to login screen
            });
        }
    }
};

module.exports = main;
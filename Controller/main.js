const User = require('../Database/Models/User');
const Art = require('../Database/Models/Art.js');
const Artist = require('../Database/Models/Artist.js');

const crypto = require("crypto");

const algorithm  = 'aes-256-cbc';

// 32 characters
const key = "capdev-grp-16-atrium-art-gallery";

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
        
        res.render('Home', {homeArt, homeArtist});
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
        
        var checkUsername = await User.findOne({username : username});
        
        if(checkUsername !== null){
            req.flash('error_msg', "Username already exists");
            res.redirect('/Register');
        }
        else {
            const iv = crypto.randomBytes(16);

            const cipher = crypto.createCipheriv(algorithm, key, iv);
            let encryptedData = cipher.update(userPassword, "utf-8", "hex");
            encryptedData += cipher.final("hex");

            const base64data = Buffer.from(iv, 'binary').toString('base64');
            User.create({username: username, userFirstName: userFirstName, userLastName: userLastName, userPassword: encryptedData, 
                    userIV: base64data, userImage: userImage, userGender: userGender, userEmail: userEmail, userLocation: userLocation, 
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
        }   
    }, 
    
    userVerification: async function(req, res){
        var getUserName = req.body.username;
        var getPassword = req.body.password;
        var loginUser = await User.findOne({username: getUserName});
        
        User.findOne({username: getUserName}, 
            function(err, user){
                if(err){
                    res.redirect('/');
                }
                else{
                    if(user){
                        const originalData = Buffer.from(loginUser.userIV, 'base64');
                        const decipher = crypto.createDecipheriv(algorithm, key, originalData);
                        let decryptedData = decipher.update(loginUser.userPassword, "hex", "utf-8");
                        decryptedData += decipher.final("utf8");
                        if(decryptedData === getPassword){
                            req.session.username = getUserName;
                            console.log(req.session);
                            console.log("Login Successful");
                            res.redirect('/Home');
                        }
                        else{
                            console.log("Invalid Login");
                            res.redirect('/');
                        }
                    }
                    else{
                        console.log('Username not found');
                        res.redirect('/');
                    }
                }
            });
    },
    
    logoutUser: function(req, res){
        if(req.session){
            req.session.destroy(()=>{
                res.clearCookie('connect.sid');
                res.redirect('/');
            });
        }
    }
};

module.exports = main;
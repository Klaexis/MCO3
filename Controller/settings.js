const User = require('../Database/Models/User');
const crypto = require("../public/Javascript/crypto.js");

const Settings = {
    loadSettings: async function(req, res){
        const username = req.session.username;
        const userDetails = await User.findOne({username : username});   
        
        const password = crypto.decryption(userDetails.userIV, userDetails.userPassword);

        res.render('Profile_Settings', {userDetails, password, isSession: true});
    },
    
    updateCredentials: async function(req, res){
        const user = await User.findOne({username : req.session.username}); //for Session
        
        var getFirstName = req.body.firstName;
        var getLastName = req.body.lastName;
        var getEmail = req.body.email;
        var getGender = req.body.gender;
        var getPassword = req.body.password;
        var getLocation = req.body.location;
        var getPicture = req.body.profileImage;
        var getAboutMe = req.body.aboutMe;
        
        const arr = crypto.encryption(getPassword);
        var password = arr[0];
        var iv = arr[1];

        User.updateOne(user, {$set: {userFirstName:getFirstName, userLastName:getLastName, userIV:iv,
                                    userPassword:password, userImage:getPicture, userGender:getGender, 
                                    userEmail:getEmail, userLocation:getLocation, aboutMe:getAboutMe}}, 
        function(err, result){
           if(result){
               console.log("Credentials successfully updated");
               res.redirect('/Home');
           }
           else if(err){
               console.log(err);
               res.redirect('/Settings');
           }
        }); 
    }
};

module.exports = Settings;
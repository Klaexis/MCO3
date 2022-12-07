const User = require('../Database/Models/User');
const crypto = require("../public/Javascript/crypto.js");

const Settings = {
    //Render Profile Settings
    loadSettings: async function(req, res){
        const username = req.session.username; //Get user in session
        const userDetails = await User.findOne({username : username});   //Get user from database 
        
        //Decrypt user's password for the EJS
        const password = crypto.decryption(userDetails.userIV, userDetails.userPassword); 

        res.render('Profile_Settings', {userDetails, password, isSession: true});
    },
    
    //Function for updating user's credentials
    updateCredentials: async function(req, res){
        //Create user in session object
        const user = await User.findOne({username : req.session.username}); //for Session
        
        //Get value from Profile Settings upon submit
        var getFirstName = req.body.firstName;
        var getLastName = req.body.lastName;
        var getEmail = req.body.email;
        var getGender = req.body.gender;
        var getPassword = req.body.password;
        var getLocation = req.body.location;
        var getPicture = req.body.profileImage;
        var getAboutMe = req.body.aboutMe;
        
        //Encryption of password when updating
        const arr = crypto.encryption(getPassword);
        var password = arr[0];
        var iv = arr[1];
        
        //Updating user's credentials and replace the values inside MongoDB
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
               req.flash('errorMsg', 'UPDATE FAILED');
               res.redirect('/Settings');
           }
        }); 
    }
};

module.exports = Settings;
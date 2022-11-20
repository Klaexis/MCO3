const User = require('../Database/Models/User');
const bcryptjs = require('bcryptjs');

const Settings = {
    loadSettings: async function(req, res){
        //Session Handling Soon
        
        const userDetails = await User.find({});   
            
        res.render('Profile_Settings', {userDetails});
    },
    
    updateCredentials: async function(req, res){
//        const user = await User.findOne({username : req.session.username}); for Session
        let user = await User.findOne({username:'la021802'});
        
        var getFirstName = req.body.firstName;
        var getLastName = req.body.lastName;
        var getEmail = req.body.email;
        var getGender = req.body.gender;
        var getPassword = req.body.password;
        var getLocation = req.body.location;
        var getPicture = req.body.profileImage;
        var getAboutMe = req.body.aboutMe;
        
        User.updateOne(user, {$set: {userFirstName:getFirstName, userLastName:getLastName, 
                                    userPassword:getPassword, userImage:getPicture, userGender:getGender, 
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
const User = require('../Database/Models/User');
const crypto = require("crypto");

const algorithm  = 'aes-256-cbc';

// 32 characters
const key = "capdev-grp-16-atrium-art-gallery";

const Settings = {
    loadSettings: async function(req, res){
        const username = req.session.username;
        const userDetails = await User.findOne({username : username});
        
        const originalData = Buffer.from(userDetails.userIV, 'base64');
        const decipher = crypto.createDecipheriv(algorithm, key, originalData);
        let decryptedData = decipher.update(userDetails.userPassword, "hex", "utf-8");
        decryptedData += decipher.final("utf8");
        
        const password = decryptedData;
            
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
        
        const iv = crypto.randomBytes(16);

        const cipher = crypto.createCipheriv(algorithm, key, iv);
        let encryptedData = cipher.update(getPassword, "utf-8", "hex");
        encryptedData += cipher.final("hex");
        
        const base64data = Buffer.from(iv, 'binary').toString('base64');
        
        User.updateOne(user, {$set: {userFirstName:getFirstName, userLastName:getLastName, 
                                    userPassword:encryptedData, userIV: base64data, userImage:getPicture, userGender:getGender, 
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
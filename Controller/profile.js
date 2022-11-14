const User = require('../Database/Models/User');

const Profile = {
    loadProfile: async function(req, res){
        //Session Handling Soon
        
        const userDetails = await User.find();   
            
        res.render('Profile', {userDetails});
    }
};

module.exports = Profile;
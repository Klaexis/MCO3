const User = require('../Database/Models/User');

const Profile = {
    //Render profile page
    loadProfile: async function(req, res){
        const username = req.session.username;//Get user in session
        const userDetails = await User.findOne({username : username});//Create user in session object   
            
        res.render('Profile', {userDetails, isSession: true});
    }
};

module.exports = Profile;
const User = require('../Database/Models/User');

const Profile = {
    loadProfile: async function(req, res){
        const username = req.session.username;
        const userDetails = await User.findOne({username : username});   
            
        res.render('Profile', {userDetails, isSession: true});
    }
};

module.exports = Profile;
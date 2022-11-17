const User = require('../Database/Models/User');

const Settings = {
    loadSettings: async function(req, res){
        //Session Handling Soon
        
        const userDetails = await User.find({});   
            
        res.render('Profile_Settings', {userDetails});
    }
};

module.exports = Settings;
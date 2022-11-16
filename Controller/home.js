const Art = require('../Database/Models/Art.js');
const Artist = require('../Database/Models/Artist.js');

const Home = {
    loadHome: async function(req, res){
        //Session Handling Soon
        
        const homeArt = await Art.find({});
        const homeArtist = await Artist.find({});
        res.render('Home', {homeArt, homeArtist});
    }
};

module.exports = Home;
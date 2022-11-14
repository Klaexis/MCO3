const Art = require('../Database/Models/Art.js');
const Artist = require('../Database/Models/Artist.js');
const User = require('../Database/Models/User');

const Cart = {
    loadCart: async function(req, res){
        //Session Handling Soon
        
        //TODO: Add user dependent products that gets from the database
        
        res.render('Cart');
    }
};

module.exports = Cart;
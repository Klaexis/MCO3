const art = require('../Database/Models/Art.js');
const artist = require('../Database/Models/Artist.js');
const User = require('../Database/Models/User');
const cart = require('../Database/Models/cart.js');

const product = {
    loadProduct: async function(req, res) {

        //Session Handling Soon
        
        const artDetails = await art.find();
        const artistDetails = await artist.find();
        const userDetails = await User.find();

        art.find({}, function(err, rows) {
            if (err) {
                console.log(err);
            } else {
                res.render('product', {
                    artDetails, artistDetails, userDetails,
                    title : "Products",
                    product : rows
                });
            }
        });
    },

    // addtocart: async function()
};

module.exports = product;
const art = require('../Database/Models/Art.js');
const artist = require('../Database/Models/Artist.js');
const user = require('../Database/Models/User');
const Cart = require('../Database/Models/cart.js');

const cart = {
    loadCart: async function(req, res) {
        //Session Handling Soon
        
        const artDetail = await art.find();
        const artistDetails = await artist.find();
        const userDetails = await user.find();
        const cartDetails = await Cart.find();

        Cart.find({}, function(err, rows) {
            if (err) {
                console.log(err);
            } else {
                res.render('cart', {
                    artDetail, artistDetails, userDetails, cartDetails,
                    title : 'Cart',
                    cart : rows
                });
            }
        });
    }
};

module.exports = cart;
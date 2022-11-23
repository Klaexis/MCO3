const { ObjectId } = require('mongodb');
const Cart = require('../Database/Models/cart.js');
const User = require('../Database/Models/User.js');
const Art = require('../Database/Models/Art.js');

let user = 'lj021803';

const cart = {
    loadCart: async function(req, res) {

        //Session Handling Soon

        const artDetails = await Art.find({});

        Cart.find({username: user} , function(err, rows) {
            if (err) {
                console.log(err);
            } else {
                res.render('cart', {
                    artDetails, 
                    title : 'Cart',
                    cart : rows
                });
            }
        });
    },

    removeItem: ('/removeArt/:artName', (req, res) => {

        const artName = req.params.artName;
        
        Cart.findOneAndUpdate({username : user } , {$pull: {"artNames": artName}}, function(err) {
            if (err) {
                console.log(err);
            } else {
                res.redirect('/product');
            }
        });
    }),

    addtocart: ('/removeArt/:artName', (req, res) => {
        
        const artName = req.params.artName;

        Cart.findOneAndUpdate({username: user}, {$push: {"artNames" : artName}}, function(err) {
            if (err) {
                console.log(err);
            } else {
                res.redirect('/product');
            }
        });
    })
};

module.exports = cart;
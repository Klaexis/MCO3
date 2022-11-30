const { ObjectId } = require('mongodb');
const Cart = require('../Database/Models/cart.js');
const User = require('../Database/Models/User.js');
const Art = require('../Database/Models/Art.js');

const cart = {
    loadCart: async function(req, res) {

        //Session Handling Soon

        const artDetails = await Art.find({});

        Cart.find({username: req.session.username} , function(err, rows) {
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
        
        Cart.findOneAndUpdate({username : req.session.username} , {$pull: {"artNames": artName}}, function(err) {
            if (err) {
                console.log(err);
            } else {
                res.redirect('/cart');
            }
        });
    }),

    addtocart: ('/addtocart/:artName', (req, res) => {
        
        const artName = req.params.artName;

        Cart.findOneAndUpdate({username: req.session.username}, {$push: {"artNames" : artName}}, function(err) {
            if (err) {
                console.log(err);
            } else {
                res.redirect('/product');
            }
        });
    })
};

module.exports = cart;
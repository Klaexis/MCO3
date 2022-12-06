const { ObjectId } = require('mongodb');
const Cart = require('../Database/Models/cart.js');
const User = require('../Database/Models/User.js');
const Art = require('../Database/Models/Art.js');

const cart = {
    //Render cart page
    loadCart: async function(req, res) {
        const artDetails = await Art.find({}); //Create art object
        
        //Get cart of user in session
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
    
    //Function for removing item from cart
    removeItem: ('/removeArt/:artName', (req, res) => {

        const artName = req.params.artName;//get art name from remove button
        
        //Find user in session cart and remove the art value from the remove button
        Cart.findOneAndUpdate({username : req.session.username} , {$pull: {"artNames": artName}}, function(err) {
            if (err) {
                console.log(err);
            } else {
                res.redirect('/cart');
            }
        });
    }),

    addtocart: ('/addtocart/:artName', (req, res) => {
        
        const artName = req.params.artName;//get art name from add button
        
        //Find user in session cart and add the art value from the add button
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
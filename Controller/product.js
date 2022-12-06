const art = require('../Database/Models/Art.js');
const cart = require('../Database/Models/cart.js');

const product = {
    //Render product list page
    loadProduct: async function(req, res) {
        const artDetails = await art.find({});//Create art object
        
        //Find cart of user in session
        cart.find({username: req.session.username}, function(err, rows) {
            if (err) {
                console.log(err);
            } else {
                res.render('product', {
                    artDetails, 
                    title : "Products",
                    cart : rows
                });
            }
        });
    }
};

module.exports = product;
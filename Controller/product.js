const art = require('../Database/Models/Art.js');
const cart = require('../Database/Models/cart.js');

let user = 'lj021803';

const product = {
    loadProduct: async function(req, res) {

        //Session Handling Soon
        
        const artDetails = await art.find({});

        cart.find({username: user}, function(err, rows) {
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
    },
};

module.exports = product;
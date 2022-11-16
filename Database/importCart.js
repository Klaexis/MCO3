
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/ArtGallery");

const cart = require('./Models/cart');

async function run(){
    try{
        const user1_cart = await cart.create({
            userid: "63721048f08624aadbd8d3ae",
            artNames: [
                "Creation of Adam"
            ]
        });
        await user1_cart.save();
        console.log('created ' + user1_cart);
        
        const user2_cart = await cart.create({
            userid: "63721048f08624aadbd8d3b2",
            artNames: [
            ]
        });
        await user2_cart.save();
        console.log('created ' + user2_cart);

        const user3_cart = await cart.create({
            userid: "63721048f08624aadbd8d3b5",
            artNames: [
                "Mona Lisa",
                "Mountain Retreat"
            ]
        });
        await user3_cart.save();
        console.log('created ' + user3_cart);
        
    } catch(e) {
        console.log(e.message);
    }
}
run();
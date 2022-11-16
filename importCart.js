
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/ArtGallery");

const cart = require('./Models/cart');

async function run(){
    try{
        const user1_cart = await cart.create({
            username: "la021802",
            artNames: [
                "Creation of Adam"
            ]
        });
        await user1_cart.save();
        console.log('created ' + user1_cart);
        
        const user2_cart = await cart.create({
            username: "lj021803",
            artNames: [
            ]
        });
        await user2_cart.save();
        console.log('created ' + user2_cart);

        const user3_cart = await cart.create({
            username: "lm021804",
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
// Only run once in CLI to prevent redundancy
const mongoose = require('mongoose');

//For Localhost MongoDB
//mongoose.connect("mongodb://localhost/ArtGallery");

//For Cloud Mongo Atlas
mongoose.connect("mongodb+srv://Aleck:Aleck12345@atrium.l9h6y8u.mongodb.net/ArtGallery"); //MongoDB Atlas get the URL and change password

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
        
        const user4_cart = await cart.create({
            username: "pyrex23",
            artNames: [
                "Starry Night",
                "Last Supper"
            ]
        });
        await user4_cart.save();
        console.log('created ' + user4_cart);
        
        const user5_cart = await cart.create({
            username: "rafprada27",
            artNames: [
                "Scream",
                "Mountain Retreat"
            ]
        });
        await user5_cart.save();
        console.log('created ' + user5_cart);
        
    } catch(e) {
        console.log(e.message);
    }
}
run();
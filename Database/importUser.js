
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/ArtGallery");

const User = require('./Models/User');

async function run(){
    try{
        const user1 = await User.create({
            userFirstName: "Aleck",
            userLastName: "Lim",
            userPassword: "12345",
            userImage: "squirtle.jpg",
            userGender: "Male",
            userEmail: "aleck@email.com",
            userLocation: "Bermuda Triangle"
        });
        await user1.save();
        console.log('created ' + user1);
        
        const user2 = await User.create({
            userFirstName: "Jonathan",
            userLastName: "Lin",
            userPassword: "12345",
            userImage: "squirtle.jpg",
            userGender: "Male",
            userEmail: "jonathan@email.com",
            userLocation: "Bermuda Triangle"
        });
        await user2.save();
        console.log('created ' + user2);
        
        const user3 = await User.create({
            userFirstName: "Matteo",
            userLastName: "Locsin",
            userPassword: "12345",
            userImage: "squirtle.jpg",
            userGender: "Male",
            userEmail: "matteo@email.com",
            userLocation: "Bermuda Triangle"
        });
        await user3.save();
        console.log('created ' + user3);
        
    }catch(e){
        console.log(e.message);
    }
}
run();
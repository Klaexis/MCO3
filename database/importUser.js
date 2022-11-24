
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/ArtGallery");

const User = require('./Models/User');

async function run(){
    try{
        const user1 = await User.create({
            username: "la021802",
            userFirstName: "Aleck",
            userLastName: "Lim",
            userPassword: "12345",
            userImage: "squirtle.jpg",
            userGender: "Male",
            userEmail: "aleck@email.com",
            userLocation: "Bermuda Triangle",
            aboutMe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore \n\
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex \n\
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat \n\
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim \n\
            id est laborum."
        });
        await user1.save();
        console.log('created ' + user1);
        
        const user2 = await User.create({
            username: "lj021803",
            userFirstName: "Jonathan",
            userLastName: "Lin",
            userPassword: "12345",
            userImage: "squirtle.jpg",
            userGender: "Male",
            userEmail: "jonathan@email.com",
            userLocation: "Bermuda Triangle",
            aboutMe: ""
        });
        await user2.save();
        console.log('created ' + user2);
        
        const user3 = await User.create({
            username: "lm021804",
            userFirstName: "Matteo",
            userLastName: "Locsin",
            userPassword: "12345",
            userImage: "squirtle.jpg",
            userGender: "Male",
            userEmail: "matteo@email.com",
            userLocation: "Bermuda Triangle",
            aboutMe: "Hi I am Matteo"
        });
        await user3.save();
        console.log('created ' + user3);

        const user4 = await User.create({
            username: "pyrex23",
            userFirstName: "Virgil",
            userLastName: "Abloh",
            userPassword: "12345",
            userImage: "pyrex.jpg",
            userGender: "Male",
            userEmail: "ablog@email.com",
            userLocation: "Bermuda Triangle",
            aboutMe: "VIRGIL PYREX DON C SNAPBACK"
        });
        await user4.save();
        console.log('created ' + user4);

        const user5 = await User.create({
            username: "rafprada27",
            userFirstName: "Raf",
            userLastName: "Simons",
            userPassword: "12345",
            userImage: "raf.jpg",
            userGender: "Male",
            userEmail: "rafsimons@email.com",
            userLocation: "Bermuda Triangle",
            aboutMe: "All raf is archive now lmao"
        });
        await user5.save();
        console.log('created ' + user5);
        
    }catch(e){
        console.log(e.message);
    }
}
run();
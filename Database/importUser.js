// Only run once in CLI to prevent redundancy
const mongoose = require('mongoose');

//For Localhost MongoDB
//mongoose.connect("mongodb://localhost/ArtGallery");

//For Cloud Mongo Atlas
mongoose.connect(process.env.MONGODB_URI); //MongoDB Atlas

const User = require('./Models/User');

async function run(){
    try{
        const user1 = await User.create({
            username: "la021802",
            userFirstName: "Aleck",
            userLastName: "Lim",
            userPassword: "399ca6089c0881fbc374bd60608229a1",
            userIV:"dW39oWd4ZD1JQkPI6E3WxQ==",
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
            userPassword: "95c7118ac1560b44a4a005bfc3f5bc27",
            userIV:"LQnB/yMlpoSVxOFjzIJPEw==",
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
            userPassword: "4e3fe459c5b4a07fe9035c7d66b165e5",
            userIV:"6gOuTj+eeXyAtlRFdEnAIA==",
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
            userPassword: "906fd27c72a460942756d2f2a2c3e52a",
            userIV:"vw/kPbtjyrqjsij3wEGrDA==",
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
            userPassword: "ec44cef1a065c6e8c9bfcf5854ce31f4",
            userIV:"6rAvJof7K5FGdhcAwx7zqw==",
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
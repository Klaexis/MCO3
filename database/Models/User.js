const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String, required: true, immutable: true
    },
    userFirstName: {
        type: String, required: true, immutable: true
    },
    userLastName: {
        type: String, required: true, immutable: true
    },
    userPassword: {
        type: String, required: true, immutable: true
    },
    userImage: {
        type: String, required: true
    },
    userGender: {
        type: String, required: true, immutable: true
    },
    userEmail: {
        type: String, required: true, immutable: true
    },
    userLocation: {
        type: String, required: true, immutable: true
    },
    aboutMe: {
        type: String
    }
});

module.exports = mongoose.model('User', userSchema);
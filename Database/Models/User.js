//User Schema
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String, required: true, immutable: true, unique: true
    },
    userFirstName: {
        type: String, required: true
    },
    userLastName: {
        type: String, required: true
    },
    userPassword: {
        type: String, required: true
    },
    userIV: {
        type: String, required: true
    },
    userImage: {
        type: String
    },
    userGender: {
        type: String, required: true
    },
    userEmail: {
        type: String, required: true
    },
    userLocation: {
        type: String, required: true
    },
    aboutMe: {
        type: String
    }
});

module.exports = mongoose.model('User', userSchema);
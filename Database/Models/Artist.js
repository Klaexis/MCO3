//Artist Schema
const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema({
    artistID: {
        type: String, required: true, immutable: true
    },
    artistName: {
        type: String, required: true, immutable: true
    },
    artistImage: {
        type: String, required: true
    }
});

module.exports = mongoose.model('Artist', artistSchema);
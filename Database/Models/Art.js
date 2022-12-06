//Art Schema
const mongoose = require('mongoose');

const artSchema = new mongoose.Schema({
    artID: {
        type: String, required: true, immutable: true
    },
    artName: {
        type: String, required: true, immutable: true
    },
    artistName: {
        type: String, required: true, immutable: true
    },
    artImage: {
        type: String, required: true
    },
    cost: Number
});

module.exports = mongoose.model('Art', artSchema);



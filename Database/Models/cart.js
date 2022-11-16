const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    userid: {
        type: String, required: true, immutable: true
    },
    artNames: {
        type: Array, required: true, immutable: true
    }
});

module.exports = mongoose.model('cart', cartSchema);
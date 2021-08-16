const mongoose = require('mongoose');

const trackSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    artist: String,
    album: String,
    length: Number,
    release: Number
})

module.exports = mongoose.model('Track', trackSchema, 'tracks');
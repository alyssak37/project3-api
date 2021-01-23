const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favoriteSchema = new Schema({
    userId: String,
    fact: String
}, { timestamps: true });

module.exports = mongoose.model('Favorite', favoriteSchema);
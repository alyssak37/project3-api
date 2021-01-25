const favorite = require('../models/favorite');
const Favorite = require('./models/favorite');

module.exports = {
    createFavorite,
    showFavorites
};

async function createFavorite(req, res) {
    try {
       await Favorite.create(req.body);
       getFact(req, res);
    } catch(error) {
        console.log(error)
    }
}

function showFavorites(req, res) {
    const favorites = await Favorites.find({});
    res.json(favorites)
}
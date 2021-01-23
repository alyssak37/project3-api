const Favorite = require('./models/favorite');

module.exports = {
    addFavorite
};

async function addFavorite(req, res) {
    try {
       const userId = req.query.userid;
       await Favorite.create({ userId: userId });
       getFact(req, res);
    } catch(error) {
        
    }
}
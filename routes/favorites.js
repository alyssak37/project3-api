const router = require('express').Router();
const favoritesCtrl = require('../../controllers/favorites');

router.post('/favorites', favoritesCtrl.addFavorite);

module.exports = router;
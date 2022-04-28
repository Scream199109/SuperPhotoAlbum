const router = require('express').Router();
const controller = require('../controllers/galController');


router.get('/galery', controller.rendGalery);

router.post('/add/album', controller.addAlbum)

router.post('/add/photo', controller.addPhoto)


module.exports = router;

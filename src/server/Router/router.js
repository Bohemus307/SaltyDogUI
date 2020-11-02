const router = require('express').Router();
const controllers = require('../Controllers/controllers');

router.post('/addUser', controllers.addNewArtist);

// router.delete('/data', );

module.exports = router;

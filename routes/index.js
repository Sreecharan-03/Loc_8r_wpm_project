var express = require('express');
var router = express.Router();
const ctrlLocations = require('../controllers/location');
const ctrlOthers = require('../controllers/others');

/* GET home page. */
router.get('/', ctrlLocations.homelist);

/* GET about page. */
router.get('/about', ctrlOthers.about);

module.exports = router;

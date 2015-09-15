var router = require('express').Router();

var analisysController = require('../app/controller/analisysController');
router.get('/', analisysController.init)

module.exports = router;

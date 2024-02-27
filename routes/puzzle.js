var express = require('express');

var router = express.Router();
const puzzleController = require('../controllers/puzzle')
const GetController = require('../controllers/puzzle')
const UpdateController = require('../controllers/puzzle')
const DeleteController = require('../controllers/puzzle')


router.post('/create', puzzleController.puzzleCreate);
router.get('/find', GetController.puzzleFind);
router.patch('/update', UpdateController.puzzleUpdate);
router.delete('/delete', DeleteController.puzzleDelete);

module.exports = router;
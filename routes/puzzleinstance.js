var express = require('express');

var router = express.Router();
const puzzleinstanceController = require('../controllers/puzzleinstance')
const GetController = require('../controllers/puzzleinstance')
const UpdateController = require('../controllers/puzzleinstance')
const DeleteController = require('../controllers/puzzleinstance')


router.post('/create', puzzleinstanceController.puzzleinstanceCreate);
router.get('/find', GetController.puzzleinstanceFind);
router.patch('/update', UpdateController.puzzleinstanceUpdate);
router.delete('/delete', DeleteController.puzzleinstanceDelete);

module.exports = router;
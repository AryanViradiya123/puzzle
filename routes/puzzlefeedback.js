var express = require('express');

var router = express.Router();
const puzzlefeedbackController = require('../controllers/puzzlefeedback')
const GetController = require('../controllers/puzzlefeedback')
const UpdateController = require('../controllers/puzzlefeedback')
const DeleteController = require('../controllers/puzzlefeedback')


router.post('/create', puzzlefeedbackController.puzzlefeedbackCreate);
router.get('/find', GetController.puzzlefeedbackFind);
router.patch('/update', UpdateController.puzzlefeedbackUpdate);
router.delete('/delete', DeleteController.puzzlefeedbackDelete);

module.exports = router;
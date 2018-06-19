var express = require('express');
var router = express.Router();
var movieController = require('../controller/movieController');
router .get('/all', movieController.getAllMovies);
router .post('/add', movieController.addNewMovie);
router .get('/:moviename',movieController.getMovieDetails);
module.exports = router;

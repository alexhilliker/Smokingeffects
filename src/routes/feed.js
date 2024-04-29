const express = require('express'); 
const feedController = require('../controllers/post');
const router = express.Router(); 
router.get('/list', feedController.getPosts)
router.post('/submit', feedController.createPost)
module.exports = router;
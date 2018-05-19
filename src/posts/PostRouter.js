var express = require('express');
var router = express.Router();

var PostController = require("./PostController");

router.route('/:id').get( PostController.findPost);

/* GET users listing. */
router.route('/').get( PostController.findAllPosts);



module.exports = router;
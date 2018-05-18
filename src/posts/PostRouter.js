var express = require('express');
var router = express.Router();

var PostController = require("./PostController");

/* GET users listing. */
router.route('/').get( PostController.findAllPosts);

router.route("/").post(PostController.insertPost);

module.exports = router;
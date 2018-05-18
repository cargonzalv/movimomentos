var express = require('express');
var router = express.Router();

var PostController = require("./PostController");

/* GET users listing. */
router.route('/').get( PostController.findAllPosts);

router.route("/").post(PostController.insertPost);

router.route("/:id").put(PostController.updateLikes)

module.exports = router;
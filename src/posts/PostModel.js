var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CommentSchema = new Schema({
	text: {type: String, required: true, minlength: 1, maxlength: 150},
	author: {type: String, required: true, minlength: 2, maxlength: 150},
})
var PostSchema = new Schema({
	title: {type: String, required: true, minlength: 2, maxlength: 30},
	comment: {type: String, required: true, minlength: 2, maxlength: 150},
	likes: {type: Number, default: 0},
	dislikes: {type: Number, default: 0},
	registerDate:{type:Date, default: Date.now()},
	comments:{type:[CommentSchema],default:[]}

})

module.exports = mongoose.model("Post", PostSchema);
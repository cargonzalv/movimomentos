var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PostSchema = new Schema({
	title: {type: String, required: true, minlength: 2, maxlength: 30},
	comment: {type: String, required: true, minlength: 2, maxlength: 150},
	likes: {type: Number, default: 0},
	dislikes: {type: Number, default: 0},
	registerDate:{type:Date, default: Date.now()}

})

module.exports = mongoose.model("Post", PostSchema);
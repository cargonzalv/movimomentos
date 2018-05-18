
var Post  = require("./PostModel");

var save = (req,res)=>{
	var post = new Post({
	title:req.body.title,
	comment:req.body.comment

	});

	post.save((err,data)=>{
	if(err){
		console.log("Error: " + err);
		return res.status(500).json({
			message:"Un error ha ocurrido",
			error:err
		})
	}

	res.status(201).json({
		message: "Person saved",
		result:data
	})
})
};

var findAll = (req,res)=>{
	Post.find().exec()
	.then((data)=>{
		res.status(200).json({
			message: "Person saved",
			result:data
		})
	}).catch((err)=>{
		return res.status(500).json({
			message:"Un error ha ocurrido",
			error:err
		})
	})
};

module.exports = {
	insertPost: save,
	findAllPosts: findAll
}
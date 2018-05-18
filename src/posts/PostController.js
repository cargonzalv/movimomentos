
var Post  = require("./PostModel");
var ObjectId = require('mongodb').ObjectID;

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

var update = (req,res)=>{
    var postToUpdate = req.params.id;
    var request = req.body;
    console.log(request)
    Post.findOneAndUpdate({ _id: ObjectId(postToUpdate)}, {$set:request},{new:true} , function (err, result) {
        if(err){
			console.log("Error: " + err);

			return res.status(500).json({
				message:"Un error ha ocurrido",
				error:err
			})
		}

		res.status(201).json({
			message: "Post updated",
			result:result
		})
    });
}

module.exports = {
	insertPost: save,
	findAllPosts: findAll,
	updateLikes: update
}

var Post  = require("./PostModel");
var ObjectId = require('mongodb').ObjectID;

var save = (io,P,id) => {
  let result;
  const newPost = new Post({
	title:P.title,
	comment:P.comment

	});

  newPost.save((err,post) => {
    if(err){
      result = {'success':false,'message':'Some Error','error':err,"id":id};
      io.emit('errorSaving', result);
    }
    else{
      const result = {'success':true,'message':'Post Added Successfully',"newPost":newPost,"id":id}
       io.emit('PostAdded', result);
    }
  })
};

var findAll = (req,res)=>{
	Post.find().exec()
	.then((data)=>{
		res.status(200).json({
			message: "Posts found",
			result:data
		})
	}).catch((err)=>{
		return res.status(500).json({
			message:"Un error ha ocurrido",
			error:err
		})
	})
};

var findOne = (req,res)=>{
  Post.findOne({_id:req.params.id},(err,post)=>{
    if(err){
      return res.status(500).json({
      message:"Un error ha ocurrido",
      error:err
    })
    }
    else{
      res.status(200).json({
      message: "Post found",
      result:post
    })
    }
  })
};

var updateLikesComments = (io,P) => {

	let newPost = P.likes != undefined ? {
		likes:P.likes,
		dislikes:P.dislikes
	} : {
    comments:P.comments
  }
  let result;
  Post.findOneAndUpdate({ _id:P.postId }, newPost, { new:true }, (err,post) => {
    if(err){
      result = {'success':false,'message':'Some Error','error':err};
      io.emit('errorUpdating', result);
    }
    else{
      const result = {'success':true,'message':'Post Added Successfully',"newPost":post, "index":P.index}
      console.log(result)
       io.emit('postUpdated', result);
    }
  })
}

module.exports = {
	addPost: save,
	findAllPosts: findAll,
	updatePost: updateLikesComments,
  findPost: findOne
}
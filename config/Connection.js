var mongoose = require("mongoose");
var bluebird = require("bluebird");

mongoose.Promise = bluebird;

var dbURI = "mongodb://carlox18:carlox1801@ds131340.mlab.com:31340/movimomentos";

//connecting mongoose to our db
mongoose.connect(dbURI);

mongoose.connection.on("connected", ()=>{
	console.log("Mongoose connection success");
});

mongoose.connection.on("error",(err)=>{
	console.log("mongoose connection error" + err);
})


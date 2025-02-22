const mongoose = require("mongoose");

// 1. Make a schema

// const someSchema = new mongoose.Schema(objectDefiningDataRules, SchemaOptions);
const PostSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
		minLength: 4,
		trim: true
	},
	content: String, 
	date: {
		type: Date,
		default: Date.now // Mongoose will run Date.now() every time we make a doc 
		// default: new Date(Date.now()) // Mongoose will run Date.now once when the app loads this file 
	},
});

// 2. Make a model based on the schema
const PostModel = mongoose.model("Post", PostSchema);

// 3. Export the model for the rest of our code to use 
module.exports = {
	PostModel
}
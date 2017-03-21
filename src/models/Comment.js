const mongoose = require('mongoose');
const Schema = mongoose.Schema;



// a CommentSchema

const CommentSchema = new Schema({
	name: {type: String, required: true, trim: true},
	email: {type: String },
	text: {type: String, required: true}

});


const Comment = mongoose.model('Comment', CommentSchema);
module.exports = Comment;


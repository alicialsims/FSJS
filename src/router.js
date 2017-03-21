
// YOU NEED THESE TO RUN THINGS
const express = require('express');
const router  = express.Router();

// MODELS
const Comment = require('./models/Comment');

// READ
router.get('/', (req,res, next)=>{
	console.log('is there a prob in get');
	Comment.find({}, function(err, Comment){
		if(err){
			return res.status(500).json({message: err.message});
			return console.log(err);
		}else{
			// not sure what referencing in video...
			return res.render('index', { title: 'Home' });
			
		}
	});
	console.log("Get Request working!");
});

// POST

router.post('/', (req,res,next)=>{
	let comment = new Comment(req.body);
	comment.save((err, comment)=>{
		if (err) return next(err);
		res.status(201);
		res.json('comment');
	});
	console.log('Post request made!');
});

// PUT --- not sure yet

router.put('/idunnoyet',(req,res)=>{

});

// DELETE

module.exports = router;
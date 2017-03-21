
// YOU NEED THESE TO RUN THINGS
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./src/router');
const app = express();
            require('./src/database');


//view engine setup
app.set('view engine', 'pug');
app.set('views', __dirname + '/src/views');

//serve static files from public
app.use(express.static(__dirname + '/public'));


//Setting up that there router
app.use('/', router);

//HARK! Are you listening???? Dev mode...
app.listen(8080, ()=> {
	console.log("Running on 8080");
});

// parse incoming requests





//include routes

// catch 404 

//error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


// YOU NEED THESE TO RUN THINGS
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./src/router');
const app = express();
            require('./src/database');

//Setting up that there router
app.use('/', router);

//HARK! Are you listening???? Dev mode...
app.listen(8080, ()=> {
	console.log("Running on 8080");
});

// parse incoming requests

//serve static files from public
app.use(express.static(__dirname + '/public'));

//view engine setup
app.set('view engine', 'pug');
app.set('views', __dirname + '/src/views');

//include routes

// catch 404 

//error handler


var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');

var routes = require('./routes/customers.js');

mongoose.connect("mongodb://localhost:27017/mongointro", function(err){

	console.log("Attempting connection....");
	if(err) {
		console.log("Error ----> " + err);
		throw err;
	}

	var app = express();
	app.use(bodyParser.json());
	routes(app);

	app.listen(5000, function(){
		console.log("now listening on http://localhost:5000");
	});
})
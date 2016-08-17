var mongoose = require('mongoose');

var customerSchema = mongoose.Schema({
	name: String,
	phone: String,
	email: String
});

var Customer = mongoose.model('customer', customerSchema);

module.exports = function(app){
	
	app.get('/customers', function(req,res){

		Customer.find({}, function(err, customers){
			if(err)
				res.status(500).send("Error getting customers - " + err.message);
			else
				res.status(200).send(customers);
		})

	});

	app.post('/customers', function(req, res){

		Customer.create(req.body.customer, function(err, newCustomer){
			if(err)
				res.status(500).send("Error creating customer - " + err.message);
			else
				res.status(200).send(newCustomer);
		})

	})
}
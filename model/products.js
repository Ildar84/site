var mongoose = require('mongoose');

var printerSchema = mongoose.Schema({
	name: String,
	category: String,
	slogan: String,
	exhortation: String,
	motivation: String,
	description: String,
	note: String,
	price: Number,
	dimensions: String,
	featureTitle1: String,
	featureDescr1: String,
	featureImage1: String,
	featureTitle2: String, 
	featureDescr2: String, 
	featureImage2: String,
	featureTitle3: String, 
	featureDescr3: String,
	featureImage3: String,
	featureTitle4: String, 
	featureDescr4: String, 
	featureImage4: String,
	featureTitle5: String,
	featureDescr5: String,
	featureImage5: String,
	featureTitle6: String,
	featureDescr6: String,
	featureImage6: String,
});

module.exports 

var Printer = mongoose.model('Printer', printerSchema);
module.exports = Printer;
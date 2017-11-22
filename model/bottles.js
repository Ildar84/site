var mongoose = require('mongoose');
var bottleSchema = mongoose.Schema({
	type: String,
	name: String,
	properties: {hardness: Number, flexibility: Number},
	description: String,
	mainImage: String,
	logoImage: String,
	colors: [String],
	note: String,
	price: Number,
	weight: Number
});

var Bottle = mongoose.model('Bottle', bottleSchema);
module.exports = Bottle;
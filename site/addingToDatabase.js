var http = require('http');
var express = require('express');
var mongoose = require('mongoose');
var Printer = require('./model/products.js');
var credentials = require('./credentials.js');
var Bottle = require('./model/bottles.js');

mongoose.Promise = global.Promise;
var opts = {
	server: {
		socketOptions: {
			keepAlive: 1
		}
	}
};
mongoose.connect(credentials.mongo.development.connectionString, opts);

var db = mongoose.connection;

db.on('error', console.log.bind(console, 'connection error: '));

db.once('open', function callback(){
	console.log('The DataBase connected succesfully!');
});

var LC10 = require("./objects/liquidcrystal10'.js");
var LCPRO = require('./objects/liquidcrystalPro.js');
var LCHR = require('./objects/liquidcrystalHr.js');

var bottles = require('./objects/bottles.js');

function addThe(obj, modelSchema) {
	modelSchema.findOne({name: obj.name}, function(err, prod){
		if(err) console.log('Error', err);
		if(!prod) {
			console.log("I can't find : ", obj.name);
			var product = new modelSchema(obj);
			product.save();
			console.log(obj.name, ' added to database');
		};
		if (prod) {
			console.log(obj.name," already exists in database");
		};
		
	});
};

for (i=0; i<bottles.length; i++){
	addThe(bottles[i], Bottle);
}

addThe(LC10, Printer);
addThe(LCPRO, Printer);
addThe(LCHR, Printer);

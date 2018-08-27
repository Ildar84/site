var http = require('http');
var fs = require('fs');
var path = require('path');
var express = require('express');
var app = express();
var engine = require('ejs-mate');
var config = require('./config/config');
var errorHandler = require('errorhandler');
const browserSync = require('browser-sync');
var credentials = require('./config/credentials.js');
var session = require('express-session');
const favicon = require('express-favicon');
var mongoose = require('mongoose');

var device = require('express-device');

var emailjs = require('emailjs-com');

emailjs.init("user_XkcTd5cwRkg153yV9e18g");

var Printer = require('./model/products.js');
var Bottle = require('./model/bottles.js');
var Cart = require('./model/cart.js');
app.use(favicon(__dirname + '/public/img/favicon.ico'));

console.log(app.get('env') == "development");

if(app.get('env') == "development") {
	app.set('port', config.get("port"))
} else {
	app.set('port', process.env.PORT);
};

console.log("app.get(port) = ",app.get('port'));

app.use(express.static(path.join(__dirname+'/public')));

app.use('/products', express.static(path.join(__dirname+'/public')));

// app.use("localhost:3001/products/", express.static('public'))

app.engine('ejs', engine);
app.set('views', path.join(__dirname + '/views/'));
app.set('view engine', 'ejs');
app.use(require('cookie-parser')(credentials.cookieSecret));
app.use(require('body-parser').urlencoded({ extended: true }));

app.use(device.capture());
var MongoStore = require('connect-mongo')(session);


http.createServer(app).listen(app.get('port'), function(){
	console.log('Environment: ' + app.get('env'));
	console.log('port = ', process.env.PORT);
});

console.log("__dirname = ", __dirname);

var opts = {
	server: {
		socketOptions: {
			keepAlive: 1
		}
	}
};

mongoose.Promise = global.Promise;

mongoose.connect(credentials.mongo.development.connectionString, opts);

var db = mongoose.connection;

db.on('error', function(err){
	console.log('Error connection mongo: ', err);
	next(err);
});

app.use(session({
	resave: false,
	saveUninitialized: false,
	secret: credentials.cookieSecret,
	store: new MongoStore({ mongooseConnection: db }),
	unset: 'destroy',
	cookie: { maxAge: 2 * 60 * 1000 * 60 * 24 }
}));

/* //detecting device type:
app.use((req,res,next)=>{
	res.locals.device = req.device.type;
	next();
}) */

app.get('/', function(req,res,next){
	Printer.find(function(err, printers){
		if(err) next(err);
		res.render('index.ejs', {title: "Photecentric", products: printers});
	})
});

app.get('/products/liquidcrystalHR', function(req,res,next){
	Printer.find({name: "Liquid Crystal HR"}, function(err, product){
		if(err) next(err);
		var printer = product[0];
		res.render('lchr', {title: printer.name, printer: printer});
	})
});

app.get('/products/liquidcrystal10', function(req,res,next){
	Printer.find({name: "Liquid Crystal 10"}, function(err, product){
		if(err) next(err);
		var printer = product[0];
		res.render('lc10', {title: printer.name, printer: printer});
	})
});

app.get('/products/liquidcrystalPro', function(req,res,next){
	Printer.find({name: "Liquid Crystal PRO"}, function(err, product){
		if(err) {
			next(err);
		} else {
		var printer = product[0];
		res.render('lcpro', {title: printer.name, printer: printer});
		};
	})
});

app.get('/products/daylightresins', function(req,res,next){
	Bottle.find({type: "daylight"}, function(err, product){
		if(err) {
			next(err);
		} else {
			res.render('daylightresins', {title: "Daylight resins", products: product});
		};
	})
});

app.get('/products/uvresins', function(req,res,next){
	Bottle.find({type: "uv"}, function(err, product){
		if(err) {
			next(err);
		} else {
			res.render('uvresins', {title: "Daylight resins", products: product});
		};
	})
});

app.get('/add-to-cart/:id', function(req,res,next){
	var productId = req.params.id;
	var cart = new Cart(req.session.cart ? req.session.cart: {});
	Bottle.findById(productId, function(err, product){
		if(err){
			return res.send('error');
		};
		if(!product){
			Printer.findById(productId, function(err, printer){
				if(err){
					return res.send('error');
				};
				cart.add(printer, productId);
				req.session.cart = cart;
				res.render('partials/cart', {cart: cart})
			})
		} else {
			cart.add(product, productId);
			req.session.cart = cart;
			res.render('partials/cart', {cart: cart})
			// res.send(req.session.cart);
		}
	});
});

app.get('/stored-products/', function(req,res,next){
	var storedCart = new Cart(req.session.cart ? req.session.cart : {});
	res.render('partials/cart', {cart: storedCart});
})

app.get('/show-form/', function(req,res,next){
	res.render('./partials/form');
});

app.get('/clear-cart/', function(req,res, next){
	var cart = new Cart(req.session.cart);
	cart.clear();
	req.session.cart = cart;
	res.render('./partials/cart', {cart: cart});
});

app.get('/delete-item/:id', function(req,res,next){
	var id = req.params.id;
	var recountedCart = new Cart(req.session.cart);
	recountedCart.deleteItem(id);
	req.session.cart = recountedCart;
	res.render('./partials/cart', {cart: recountedCart});
})

app.post('/save-cart', function(req,res,next){
	var recountedCart = new Cart(req.session.cart);
	recountedCart.recount(req.body);
	req.session.cart = recountedCart;
	res.render('./partials/cart', {cart: recountedCart});
});

app.post('/send-order/', function(req,res,next){
	var currentCart = new Cart(req.session.cart);
	emailjs.send("gmail", "temp",{ items: currentCart.generateArray() , sum: currentCart.totalPrice, person: req.body})
    .then(function(response) {
       console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
			 currentCart.clear();
			 req.session.cart = currentCart;
       res.send("Спасибо за Ваш заказ. Мы свяжемся с Вами в ближайшее время");
    }, function(err) {
       console.log("FAILED. error=", err);
       res.send("Извините. Что-то пошло не так. Попробуйте отправить позже");
    });
})

app.use(errorHandler());

// mongoose.connection.close(function (err) {
//     if(err) throw err;
// });

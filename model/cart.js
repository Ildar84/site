module.exports = function cart(oldCart){
	this.items = oldCart.items || {};
	this.totalQty = oldCart.totalQty || 0;
	this.totalPrice = oldCart.totalPrice||0;
	this.empty = true;

	this.add = function(product, id){
		var storedItem = this.items[id];
		if(!storedItem){
			storedItem = this.items[id] = {item: product.name, qty: 0, price: product.price};
		};
		storedItem.qty++;
		storedItem.price = product.price * storedItem.qty;
		this.totalQty++;
		this.empty = false;
		this.totalPrice += product.price;
	};

	this.generateArray = function(){
		var arr = [];
		for (var id in this.items){
			arr.push(this.items[id]);
		};
		return arr;
	};

	this.deleteItem = function(id){
		var storedItem = this.items[id];
		this.totalQty  -= storedItem.qty;
		this.totalPrice = this.totalPrice - storedItem.price;
		delete this.items[id];
		if(this.totalQty<1) this.empty = true;
		if(this.totalQty>0) this.empty = false;
	};

	this.recount = function(params){
		for (key in params) {
			difference = params[key] - this.items[key].qty; // на сколько штук изменилось
			price = this.items[key].price/this.items[key].qty; // цена одной единицы
			this.items[key].qty = +params[key]; // сохраняем новое кол-во
			this.totalQty += difference; // пересчитаем общее кол-во
			difPrice = price*difference; // на сколько изменилась сумма данного товара
			this.totalPrice += difPrice; // пересчитаем общую сумму корзины
			this.items[key].price = price*params[key];
			if(this.totalQty<1) this.empty = true;
			if(this.totalQty>0) this.empty = false;
		};
	};

	this.clear = function(){
		this.items = {};
		this.totalQty = 0;
		this.totalPrice = 0;
		this.empty = true;
	}
}
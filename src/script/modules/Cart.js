import {addingMsg, clearCartMsg} from './barMessages'
import sendOrder from './sendOrder'

let elements = {
  bagIcon: $('.nav--scroll .fa-shopping-bag'), // bag icon
  bagMobIcon:  $('.nav--mob .fa-shopping-bag'),// bag icon on mobile screen
  bageQty: $('.fa-shopping-bag .bage'), // label with quantity of products in the cart
  btnAdd: $('[data-id]'), // all buttons with attribute data-id with key of certain product
  cartBody: $('.cart_wrapper'),
   //
}

export default class Cart{
  constructor(){
    this.bageQty = elements.bageQty
    this.bagIcon = elements.bagIcon;
    this.bagMobIcon = elements.bagMobIcon;
    this.buyButton = elements.btnAdd;
    this.body = elements.cartBody;
    this.cart = $(elements.cartBody).html()
    this.init();
  } // constructor

  init() {
    this.clickToBuy();
    this.showHideMobCart();
    this.showOnClick();
    this.checkBage();
    this.yesNoBar();
  }

  req(url, func){
    $.ajax({
      url: url,
      success: func
    })
  }
  // attach events every time after
  attachEvents(){
    this.deleteItem();
    this.clearButton();
    this.recountButton();
    this.showForm();
    this.quantityProducts();
    $(this.cart).find('.fa-times-circle').on('click',()=>{
      $(this.body).hide()
    })
  }

  //check number of products in cart if there're saved cookies
  checkBage() {
    this.req('/stored-products/', (data)=>{
      this.appendBody(data);
    })
  }
  // event that adds item in the cart
  clickToBuy(){
    let self = this; // necessary because "this" inside below function will be clicked element
    $(this.buyButton).on('click', function() {
      let productId = $(this).attr("data-id"); // product key in data-id attr
      self.req('/add-to-cart/'+productId, (data)=>{
        self.appendBody(data);
      })
      addingMsg.show()
    });

  }
  // delete
  deleteItem() {
    let self = this; // necessary because "this" inside below function will be clicked element
    $(this.cart).find('.product-delete').on('click', function() {
      let id = $(this).attr("data-id");
      self.req('/delete-item/' + id, (data)=>{
        if (data == '') $(self.bageQty).fadeOut('slow').html('');
        self.appendBody(data);
      })
    });
  }


  appendBody(texthtml) {
    this.cart = $.parseHTML(texthtml);
    let qty = $(this.cart).find('#totalQty').html()   // find total qty of products

    if (qty>0) $(this.bageQty).fadeIn('slow').html(qty)     // show bage with number if there's a product was added
    if (qty<1) $(this.bageQty).fadeOut('slow');           // hide bage with number if the cart is empty
    $('.js-scrolledMenu').removeClass('nav-up');
    $(this.body).html(this.cart);                     // append rerendered cart
    this.attachEvents();                       // reattach events after receiving new cart-body
  }

  clearButton() {
    let self = this;
    $(this.cart).find('.cart-clear').on('click', function() {
      clearCartMsg.show()
    })
  }

  clear() {
    this.req('/clear-cart/', (data)=>{
      this.appendBody(data)
    })
  }

  recountButton() {
    let self = this;
    // make visible icon-refresh when the cuantity of products was changed
    $(this.cart).find(':input[type="number"]').one('change', function(event) {
      $(self.cart).find('.cart-refresh').fadeIn()
    });
    // attach event to the button
    $(this.cart).find('.cart-refresh').on("click", function() {
      let items = $(self.cart).find('.cart__item');
      let changes = {};
      $(items).each(function(){
        let qty = Number($(this).find('[type="number"]').val())
        let id = $(this).find('[data-id]').attr('data-id')
        changes[id] = qty
      })
      // send changed numbers of products in cart
      $.ajax({
        method: 'POST',
        url: '/save-cart',
        data: changes,
        success: function(data) {
          self.appendBody(data)
        },
      })
    });
  }

  showHideMobCart(){
    let self = this;
    $(this.bagMobIcon).on('click',()=>{
      $(self.body).show()
    })
  }

  showForm() {
    let self = this;
    $(this.body).find('.send-order').on('click', function() {
      let form = $('.order'); /* check if the form is already exists */
      if(form.length) {

        if(form.is(':visible')) {
          form.hide();
        } else {
          form.show()
        }
        return;
      }
      /* if form is doesn't exists yet send request and append it when the form will be received*/
      self.req('/show-form/', (data)=>{
        let form = $.parseHTML(data);
        $(form).find('.fa-times').on('click', function() {
          $(this).parent().remove();
        })
        $('body').append(form);
        sendOrder(self);
      })

    });
  }

  quantityProducts(){
    let self = this;
    let $inputItems = $(this.cart).find('.cart__item-qty');
    $inputItems.each(function(){
      let $quantityArrowMinus = $(this).find(".fa-minus-square");
      let $quantityArrowPlus = $(this).find(".fa-plus-square");
      let $quantityNum = $(this).find("input[type=number]");
      $quantityArrowMinus.click(quantityMinus);
      $quantityArrowPlus.click(quantityPlus);

      function quantityMinus() {
        if ($quantityNum.val() > 1) {
          $quantityNum.val(+$quantityNum.val() - 1);
        }
        $(self.cart).find('.cart-refresh').fadeIn()
      }

      function quantityPlus() {
        $quantityNum.val(+$quantityNum.val() + 1);
        $(self.cart).find('.cart-refresh').fadeIn()
      }
    })
  }

  showOnClick(){
    let self = this;
    $(this.bagIcon).on('click', function(){
      if($(self.body).is(':visible')){
        $(self.body).hide('fast');
      } else {
        // console.log('hidden');
        $(self.body).show('fast')
      }
    })
  }
  yesNoBar(){
    let self = this;
    $('.del-yes').on('click', function(){
      self.clear();
      clearCartMsg.hide()
    });
    $('.del-no').on('click', function(){
      clearCartMsg.hide()
    })
  }
};

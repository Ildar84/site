$(document).ready(function(){function e(){setTimeout(function(){a.removeClass("fadeOut").addClass("animated fadeInUp")},1e3)}function t(){$(r).hide(),m.on("click",function(){$(".nav__menu-list").slideToggle(),u.prop("hidden")||u.hide(),f.prop("hidden")||f.hide(),h.each(function(e){$(this).removeClass("nav__menu-item-active")})}),s.on("click",function(){$(this).hasClass(".menu-active")&&f.hide(),u.prop("hidden")||u.hide(),f.slideToggle()}),d.on("click",function(){f.prop("hidden")||f.hide(),u.slideToggle()}),h.on("click",function(){h.each(function(e){$(this).removeClass("nav__menu-item-active")}),$(this).toggleClass("nav__menu-item-active")}),l.on("click",function(){u.prop("hidden")||u.hide(),f.prop("hidden")||f.hide()}),$(".nav__menu-item>a").addClass("nohover")}function o(){s.off(),d.off(),l.off(),c.off(),h.off(),f.off(),u.off(),m.off(),u.prop("hidden")||u.hide(),f.prop("hidden")||f.hide(),h.each(function(e){$(this).removeClass("nav__menu-item-active")})}function n(){function e(){$(f).is(":hover")&&(clearTimeout($.data(s,"timer")),$(f).one("mouseout",t)),$(f).stop().fadeIn(300),$(f).one("mouseover",e)}function t(){$.data(s,"timer",setTimeout(function(){$(f).stop().fadeOut(300),$(f).off(),console.log("hide")},500))}function o(){$(u).is(":hover")&&(clearTimeout($.data(d,"timer")),$(u).one("mouseout",n)),$(u).stop().fadeIn(300),$(u).one("mouseover",o)}function n(){$.data(d,"timer",setTimeout(function(){$(u).stop().fadeOut(300),$(u).off()},500))}$(r).fadeIn(600);var i,a=0,l=5,c=$("header").outerHeight();$(window).scroll(function(e){i=!0}),setInterval(function(){i&&(!function(){var e=$(this).scrollTop();Math.abs(e)<=l&&$("header").removeClass("scrolledNav"),Math.abs(a-e)<=l||(e>a&&e>c?($("header").removeClass("nav-down").addClass("nav-up"),setTimeout(function(){$("header").addClass("scrolledNav")},800)):e+$(window).height()<$(document).height()&&$("header").removeClass("nav-up").addClass("nav-down"),a=e)}(),i=!1)},250),$(s).hover(e,t),$(d).hover(o,n),$(".nav__menu-item>a").removeClass("nohover")}$(window).on("load",function(){$("footer .fa").mPageScroll2id()}),$("#slider3").stellar({horizontalScrolling:!1}),$("body").imagesLoaded(function(){var e=$("#page-preloader");e.find("spinner").fadeOut(),e.delay(1e3).fadeOut("slow"),$("#slider4").stellar()}).fail(function(e){var t=$("#page-preloader");t.find("spinner").fadeOut(),t.delay(1e3).fadeOut("slow"),console.log("_-_-",e)});if($(".anim-slider").find(".anim-slide").length>1)$(".anim-slider").animateSlider({autoplay:!0,interval:1e4,animations:{0:{li:{show:"fadeIn",hide:"fadeOut"},h1:{show:"zoomIn",delayShow:"delay1s"},button:{show:"zoomIn",delayShow:"delay2s"}},1:{li:{show:"fadeIn",hide:"fadeOut"},figure:{show:"rollIn",hide:"fadeOut",delayShow:"delay1s"},h1:{show:"fadeInUp",hide:"fadeOut",delayShow:"delay2s"},p:{show:"fadeInUp",hide:"fadeOut",delayShow:"delay2-5s"},button:{show:"zoomIn",delayShow:"delay4s"}},2:{li:{show:"fadeIn",hide:"fadeOut"},h1:{show:"fadeInUp",delayShow:"delay1s"},p:{show:"zoomIn",delayShow:"delay2s"},button:{show:"zoomIn",delayShow:"delay3s"}},3:{li:{show:"fadeIn",hide:"fadeOut"},img:{show:"zoomIn",delayShow:"delay2-5s"},h1:{show:"fadeInUp",delayShow:"delay1s"},p:{show:"zoomIn",delayShow:"delay2s"},button:{show:"fadeInLeftLarge",delayShow:"delay4s"}}}});else{e();var a=$(".content-wrapper *");console.log(a),a.waypoint(function(t){"down"===t?a.removeClass("fadeInUp").addClass("fadeOut").css("opacity","0"):e()},{offset:"20%"})}var s=$(".nav__menu-item:first-child"),d=$(".nav__menu-item:nth-child(2)"),l=$(".nav__menu-item:nth-child(3)"),c=$(".nav__menu-item:last-child"),h=$(".nav__menu-item"),f=$(".nav__submenu-product"),u=$(".nav__submenu-ind"),r=$(".nav__menu-list"),m=$("button.tcon");window._ScWidth=document.documentElement.clientWidth,window._ScHeight=document.documentElement.clientHeight,window._ScWidth<751?(console.log("width=",window._ScWidth),t()):(console.log("width=",window._ScWidth),n()),window.onresize=function(){window._ScWidth=document.documentElement.clientWidth,window._ScWidth<751?(o(),console.log("mobile events width=",window._ScWidth),t()):(console.log("desktop events width=",window._ScWidth),o(),n())};var p=$(".btn");$(p).hover(function(){$(this).animate({backgroundColor:"#ececec"},200),$(this).addClass("animated pulse")},function(){$(this).animate({backgroundColor:"transparent"},200),$(this).removeClass("animated pulse").css({opacity:"1"})}),$(".content-wrapper").swipe({swipe:function(e,t,o,n,i,a){console.log(i)},threshold:30}),transformicons.add(".tcon"),$(".concept__image-wrapper").waypoint(function(e){"down"===e&&$(this.element).css({display:"block"})},{offset:"-90%"}),$(".products__wrapper img").waypoint(function(e){"down"===e&&$(this.element).addClass("animated fadeInRight").css({display:"block"})},{offset:"60%"}),$.notify.addStyle("gray",{html:"<div><span data-notify-text/></div>",classes:{base:{"background-color":"#818181",padding:"10px 20px","border-radius":"5px",color:"white","font-size":"16px"}}}),$.notify.addStyle("foo",{html:"<div><div class='clearfix'><div class='title' data-notify-html='title'/><div class='buttons'><button class='no'>Отмена</button><button class='yes' data-notify-text='button'></button></div></div></div>"}),$(document).on("click",".notifyjs-foo-base .no",function(){$(this).trigger("notify-hide")}),$(document).on("click",".notifyjs-foo-base .yes",function(){w.clear(),$(this).trigger("notify-hide")});var w=new function(){this.mainButton=$(".fa-shopping-bag"),this.buyButton=$(".purchase .btn"),this.body=$(".cart_wrapper"),this.templateSchema=$("#entry-template").html(),self=this,this.init=function(){this.clickToBuy(),this.checkBage(),this.deleteItem(),$(this.mainButton).hover(this.show,this.hide)},this.innerEvents=function(){self.deleteItem(),self.clearButton(),self.recountButton(),self.showForm()},this.show=function(){$(self.body).is(":hover")&&(console.log("hovered"),clearTimeout($.data(self.mainButton,"timer")),$(self.body).one("mouseout",self.hide)),$(self.body).stop().css({display:"block"}),$(self.body).one("mouseover",self.show)},this.hide=function(){$.data(self.mainButton,"timer",setTimeout(function(){$(self.body).stop().slideUp(),$(self.body).off()},1e3))},this.clickToBuy=function(){$(".purchase .btn").on("click",function(){var e=$(this).attr("data-id"),t=this;$.ajax({url:"/add-to-cart/"+e,success:function(e,o){$("header").removeClass("nav-up").addClass("nav-down"),$(t).notify("Добавлено в корзину",{position:"right top",style:"gray",showAnimation:"fadeIn",arrowShow:!0}),self.template(e)}})})},this.template=function(e){var t=self.templateSchema,o=Handlebars.compile(t)(e);self.appendBody(o),e.totalQty<1&$(".bage").is(":visible")?$(".bage").fadeOut("slow"):$(".bage").fadeIn("slow"),$(".bage").html(e.totalQty),self.innerEvents()},this.checkBage=function(){$.ajax({url:"/stored-products/",success:function(e,t){""!=e&&$(".bage").fadeIn("slow"),$(".bage").html(e.totalQty),self.template(e),console.log(e.empty),console.log(e.totalQty)}})},this.appendBody=function(e){$(self.body).html(e)},this.deleteItem=function(){$(".product-delete").on("click",function(){var e=$(this).attr("data-id");console.log("id=",e),$.ajax({url:"/recount-cart/"+e,success:function(e,t){""==e&&$(".bage").fadeOut("slow").html(""),console.log(e),self.template(e),self.show()}})})},this.clearButton=function(){$(".cart-clear").on("click",function(){$(this).notify({title:"Вы хотите очистить корзину?",button:"Да"},{style:"foo",position:"bottom right",autoHide:!1,clickToHide:!1})})},this.clear=function(){$.ajax({url:"/clear-cart/",success:function(e,t){self.template(e),self.hide()}})},this.recountButton=function(){$(':input[type="number"]').one("change",function(e){$(".fa-refresh").fadeIn()}),$(".cart-refresh").on("click",function(){var e=$(".cart .cart__item"),t={};for(i=0;i<e.length;i++){var o=Number($(e[i]).find('[type="number"]').val());t[$(e[i]).find("[data-id]").attr("data-id")]=o}$.ajax({method:"POST",url:"/save-cart",data:t,success:function(e,t){self.template(e)}})})},this.showForm=function(){$(".send-order .fa").on("click",function(){$.ajax({url:"/show-form/",dataType:"html",success:function(e,t){var o=$.parseHTML(e);$(o).find(".fa-times").on("click",function(){$(this).parent().remove(),console.log("ok")}),$("body").append(o)}})})}};w.init()});
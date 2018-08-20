//css styles
import '../css/fonts.css'
import '../css/bootstrap-grid.min.css'
import '../css/dragSliderWithParallax.css'
import '../css/animate.min.css'
import '../css/transicons.css'
import '../css/font-awesome-4.7.0/css/font-awesome.css'
import '../css/peekabar.css'

// my sass styles
import '../sass/main_style.sass'

// vendor js modules
import slider from './vendor/dragSliderWithParallax.js' // slider
import './vendor/PageScroll2id.min.js'
import transformicons from './vendor/transicons.js'
import './vendor/jquery.waypoints.js'
import './vendor/animate.min.js'
import './vendor/jquery.color.min.js'
import './vendor/parallax.js'
import './vendor/peekabar.js'
import './vendor/jquery.form.js'

// my modules
import Cart from './modules/Cart'
import HiddenMenu from './modules/ShowHideMenu'
import ScrolledMenu from './modules/ScrolledMenu'
import starsAnimate from './modules/starsAnimate'
import btnAnimate from './modules/btnAnimate'
import notifyPopup from './modules/notifyMessages' // !!!
import showHeaderCaption from './modules/showHeaderCaption'
import fadeInImages from './modules/fadeInImages'
import preloader from './modules/preloader'
import parallaxInit from './modules/parallaxInit'
import hiddenMenuMob from './modules/ShowHideMobMenu'
// import {addingMsg, } from './modules/barMessages'

$(document).ready(function() {
	// find elements
	let itemShowSubProd = $('.js-showSubmenuProd'); // item shows when hover above submenu on desktop screen
	let itemShowSubInd = $('.js-showSubmenuInd'); // item shows when hover above submenu on desktop screen



	let scrolledEl = $('.js-scrolledMenu');

	let item4 = $('.nav__menu-item:last-child');

	let items = $('.nav__menu-item');
	let submenu1 = $('.js-submenuProd__desktopEvent');
	let submenu2 = $('.js-submenuInd__desktopEvent');
	let menu = $('.nav__menu-list');


	// initiate imported modules
	slider();

	var cart = new Cart();

	btnAnimate();

	let bar = new $.peekABar({
		autohide: true,
		padding: '2em'
	})

	starsAnimate();

	fadeInImages();

	preloader();

	showHeaderCaption();

	parallaxInit();

	transformicons.add('.tcon')

	hiddenMenuMob();

		$('.nav__menu-item>a').addClass('nohover');

		$(cart.mainButton).on('click', function(){
			$('.cart_wrapper').css({display: "block"});
		})



			ScrolledMenu(scrolledEl);

			// below I create hide-show elements with class HiddenMenu;

			var firstMenu = new HiddenMenu(submenu1, itemShowSubProd, 500);
			var secondMenu = new HiddenMenu(submenu2, itemShowSubInd, 500);
			firstMenu.init();
			secondMenu.init();

			// var cartAppearing = new HiddenMenu(cart.body, cart.bagIcon, 1000);
			// cartAppearing.init();

			$(cart.cart).find('.fa-trash-0').hover(function(){
				$.notify(this, 'OK')
			})

	}) // end of (document).ready

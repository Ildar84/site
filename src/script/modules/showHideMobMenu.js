let tconBtn = $('button.tcon')
let itemShowSubProdMob = $('.js-showSubmenuProd-mob'); // item which shows when click on submenu on mobile screen
let itemShowSubIndMob = $('.js-showSubmenuInd-mob'); // item which shows when click on submenu on mobile screen
let items = $('.nav__menu-item');
let submenu1 = $('.js-submenuProd__desktopEvent');
let submenu2 = $('.js-submenuInd__desktopEvent');
let body = $('body')

export default ()=>{
  tconBtn.on('click', function() {
    $('.nav__menu-list--mob').toggleClass("hidden");
    if (!submenu2.prop('hidden')) {
      submenu2.hide()
    };
    if (!submenu1.prop('hidden')) {
      submenu1.hide()
    };
    items.each(function(value) {
      $(this).removeClass('nav__menu-item-active')
    });
    if ($('.cart_wrapper').is(':visible')){
      $('.cart_wrapper').hide();
    }
  })

  itemShowSubProdMob.on('click', function() {
    if ($(this).hasClass('.menu-active')) {
      submenu1.hide()
    }
    if (!submenu2.prop('hidden')) {
      submenu2.hide()
    }
    submenu1.slideToggle()
  })

  itemShowSubIndMob.on('click', function() {
    if (!submenu1.prop('hidden')) {
      submenu1.hide()
    }
    submenu2.slideToggle();
  })

  items.on('click', function() {
    items.each(function(value) {
      $(this).removeClass('nav__menu-item-active')
    })
    $(this).toggleClass('nav__menu-item-active');
  })
}

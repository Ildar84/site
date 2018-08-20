import imagesloaded from './../vendor/imagesloaded.js'

export default function(){
  $("a[rel='m_PageScroll2id']").mPageScroll2id();
  imagesloaded($('body'), function(){
    var $preloader = $('#page-preloader');
    $preloader.find('spinner').fadeOut();
    $preloader.delay(1000).fadeOut('slow');
  });

  // $('body').imagesLoaded(function() {
  //   var $preloader = $('#page-preloader');
  //   $preloader.find('spinner').fadeOut();
  //   $preloader.delay(1000).fadeOut('slow');
  //   // showContent();
  //   // $('#slider4').stellar();
  // }).fail(function(instant) {
  //   var $preloader = $('#page-preloader');
  //   $preloader.find('spinner').fadeOut();
  //   $preloader.delay(1000).fadeOut('slow');
  //   console.log("_-_-", instant);
  //   // showContent();
  // })
}

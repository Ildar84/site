export default function(){

  function showContent(content) {
    setTimeout(function() {
      content.removeClass('fadeOut').addClass('fadeIn');
    }, 1000)
  }
  let content = $('.js-showHeaderCaption');

  if(!content.length) return;
  if(!$(content).hasClass('animated')) $(content).addClass('animated');

  showContent(content);

  content.waypoint(function(dir) {
    if (dir === "down") {
      // don't use position changes classes like fadeInUp or fadeOutDown because of the
      // properties conflict translateY in my css and in animation frame
      content.removeClass('fadeIn').addClass('fadeOut');
    } else {
      showContent(content);
    }
  }, {
    offset: "10%"
  });
}

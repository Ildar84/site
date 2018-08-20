export default function(){
  let btn = $('.btn');
  
  $(btn).hover(function() {
    $(this).stop().animate({
      backgroundColor: "#f4867f",
      color: '#7A3A27',
    }, 200);
    $(this).addClass('animated pulse');
  }, function() {
    $(this).stop().animate({
      backgroundColor: "#ececec",
      color: '#818181',

    }, 200)
    $(this).removeClass('animated pulse').css({
      opacity: '1'
    });
  })
}

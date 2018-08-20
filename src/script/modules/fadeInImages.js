
export default ()=>{
  let fadeInElements = $('.js-emergeByQueue')

  $(fadeInElements).each(function(i, el){
    new Waypoint({
      element: el,
      handler: fadeInHandler,
      offset: '70%'
    })
  })

  function fadeInHandler(direction){
    let elements = $(this.element).find('img');
    let i = 0;
    (function cb(){
      if(i<elements.length){
        let el = elements[i];
        $(el).removeClass('fadeOut').addClass('animated fadeInRight')
        setTimeout(function (){
          cb();
        },300)
        i++;
      } else {
        return;
      }
    })()
  }

}

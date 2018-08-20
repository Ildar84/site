
export default function(){
  let ratedElems = $('[data-stars-lighted]');

  $(ratedElems).waypoint(function(dir) {
    let elem = $(this.element);
    let lightedStars = $(elem).attr('data-stars-lighted'); //quantity of stars
    let stars = $(elem).find('i'); // DOM elements

    if (lightedStars != 0) {
      let i = 0;
      (function cb(){
        if(i<lightedStars){
          let el = stars[i];
          $(el).addClass("animated rotateIn star-lighted");
          setTimeout(()=>{
            cb();
          }, 200);
          i++;
        } else {
          return
        }
      })()
    }

  }, {
    offset: "70%"
  });
}

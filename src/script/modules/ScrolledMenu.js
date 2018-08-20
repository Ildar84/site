export default function(el){
  var prevScrollpos = window.pageYOffset;
  var hideArea = screen.height;
  var el = el;
  let initialState = false;
  window.onscroll = showHide;

function turnToInitial(){
  $(el).addClass('nav-up');
  setTimeout(()=>{
    $(el).removeClass('scrolledNav nav-up')
  }, 100)
  initialState = true;
}

function moveBarDown(){
  $(el).removeClass('nav-up')
}

function moveBarUp(){
  $(el).addClass('nav-up');
  setTimeout(()=>{
    $(el).addClass('scrolledNav')
  }, 100)
  initialState = false;
}

function showHide(){
  let currentScrollPos = window.pageYOffset;

  // for safari browser I had to exclude nagative current position -pageYOffset
  if(currentScrollPos<=0) return;
  // below I detect if the page scrolls to top
  if (prevScrollpos > currentScrollPos) {
    if(currentScrollPos > hideArea){
      moveBarDown()
    } else {
      // but if the position is in the hideArea turn to Initial state
      if(!initialState) turnToInitial();
    }
  } else {
    // in other cases hide the navbar
    moveBarUp();
  }
  prevScrollpos = currentScrollPos;
}

}

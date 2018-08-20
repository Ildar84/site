export default function(){
  let img = {
    'lq10': '../img/slider_turbine.jpg',
    'lqHr': '../img/slider_cpro.jpg',
    'pro': '../img/slider_pro.jpg',
    'uv': '../img/slider_uv.jpg',
    'dl':'../img/slider_daylight.jpg'
  }

  $('.header-image__lq10').parallax({
    imageSrc: img.lq10,
    positionX: 'right'
  });
  $('.header-image__lqHr').parallax({
    imageSrc: img.lqHr,
  });
  $('.header-image__pro').parallax({
    imageSrc: img.pro,
    positionX: 'right'
  });
  $('.header-image__uv').parallax({
    imageSrc: img.uv,
    positionX: 'right'
  });
  $('.header-image__dl').parallax({
    imageSrc: img.dl,
    positionX: 'right'
  });
}

var content=$(".content-wrapper img, .content-wrapper h1, .content-wrapper p");content.css("opacity","0"),$(document).ready(function(){var t=$("[data-stars-lighted]");$(t).waypoint(function(t){var a=$(this)[0].element,n=$(a).attr("data-stars-lighted"),e=$(a).find("i"),i=0;if(0!=n)var d=setInterval(function(){$(e[i]).addClass("animated flipInX").animate({color:"#dd3333"},1e3),++i==n&&clearInterval(d)},200)},{offset:"70%"}),$(".product__image img").css("opacity","0").addClass("animated").waypoint(function(t){if("down"===t){var a=$(this)[0].element;$(a).addClass("fadeInRight")}},{offset:"70%"})});
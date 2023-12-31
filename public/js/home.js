$(window).scroll(function () {
  var scr = $(this).scrollTop();
  if (scr > 10) {
    $(".header").css("background", "#fff");
    $(".header .gnb a").css("color", "#000");
    $(".header .search").css("border", "1px solid #ddd");
    $(".search i").css("color", "#000");
    $(".header .gnb .logo img").css("filter", "none");
    $(".header input").css("color", "#000").addClass("PH_color");
  } else {
    $(".header").css("background", "rgba(256, 256, 256, 0)");
    $(".header .gnb a").css("color", "#fff");
    $(".search i").css("color", "#fff");
    $(".header .gnb .logo img").css("filter", "saturate(0%) brightness(1000%)");
  }
});
$(".slides").slick({
  dots: true,
  Infinity: true,
  speed: 600,
  autoplay: true,
  autoplaySpeed: 3500,
  prevArrow: $(".slider .arrows .arrow").eq(0),
  nextArrow: $(".slider .arrows .arrow").eq(1),
  pauseOnHover: true,
});
$(".slides_store").slick({
  Infinity: true,
  speed: 600,
  autoplay: true,
  autoplaySpeed: 3000,
  prevArrow: $(".slider_store .arrows .arrow").eq(0),
  nextArrow: $(".slider_store .arrows .arrow").eq(1),
  pauseOnHover: true,
});
$(".slides_remodeling").slick({
  Infinity: true,
  speed: 600,
  autoplay: true,
  autoplaySpeed: 3000,
  prevArrow: $(".slider_remodeling .arrows .arrow").eq(0),
  nextArrow: $(".slider_remodeling .arrows .arrow").eq(1),
  pauseOnHover: true,
});

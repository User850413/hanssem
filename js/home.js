$(window).scroll(function () {
  var scr = $(this).scrollTop();
  if (scr > 10) {
    $(".header").css("background", "#fff");
    $(".header .gnb a").css("color", "#000");
    $(".header .search").css("border", "1px solid #ddd");
    $(".search i").css("color", "#000");
    $(".header .gnb .logo img").css("filter", "none");
  } else {
    $(".header").css("background", "rgba(256, 256, 256, 0)");
    $(".header .gnb a").css("color", "#fff");
    $(".search i").css("color", "#fff");
    $(".header .gnb .logo img").css("filter", "saturate(0%) brightness(1000%)");
  }
});
$(".heros").slick();

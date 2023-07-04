$(window).scroll(function () {
  $(".scroll").text($(this).scrollTop());
  var scr = $(this).scrollTop();
  if (scr > 803) {
    $(".right .fixed")
      .css("position", "fixed")
      .css("top", "100px")
      .css("width", "285px");
  } else {
    $(".right .fixed").css("position", "inherit");
  }
});

//메뉴 이동
$(".menu .M01").on("click", function () {
  $("body, html").scrollTop(810);
});
$(".menu .M02").on("click", function () {
  $("body, html").scrollTop(3614);
});
$(".menu .M03").on("click", function () {
  $("body, html").scrollTop(3904);
});

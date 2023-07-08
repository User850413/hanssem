// xi-check-square
function toggleS(c) {
  $(c).find("i").toggleClass("xi-check-square");
  $(c).find("i").toggleClass("xi-check-square-o");
}
function toggleC(c) {
  $(c).find("i").toggleClass("xi-check-circle");
  $(c).find("i").toggleClass("xi-check-circle-o");
}
$(".rememberID").on("click", function () {
  toggleS(this);
  $(this).find("i").toggleClass("active");
});

$(".orderN").on("click", function () {
  if ($(this).hasClass("active") == false) {
    $(".phoneN").removeClass("active");
    $(this).addClass("active");
    toggleC(this);
    toggleC(".phoneN");
    $(".phone .cert").css("display", "none");
  }
});
$(".phoneN").on("click", function () {
  if ($(this).hasClass("active") == false) {
    $(".orderN").removeClass("active");
    $(this).addClass("active");

    toggleC(this);
    toggleC(".orderN");
    $(".phone .cert").css("display", "block");
  }
});

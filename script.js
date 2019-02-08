$(window).scroll(function() {
  if ($(document).scrollTop() > 680) {
    $("nav").addClass("shrink");
    $(".logo").addClass("header-change");
    $("nav").addClass("bg-light");
  } else {
    $("nav").removeClass("shrink");
    $(".logo").removeClass("header-change");
    $("nav").removeClass("bg-light");

  }
});

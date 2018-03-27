$(document).ready( function() {
  $(".content-square").on('mouseenter', function() {
    $("h2", this).css("color", "white");
  });

  $(".content-square").on('mouseleave', function() {
    $("h2", this).css("color", "inherit");
  });
});

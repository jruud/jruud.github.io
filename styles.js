$(document).ready( function() {
  $("#photography").on('mouseenter', function() {
    $("#photography > h2").css("color", "white");
  });

  $("#photography").on('mouseleave', function() {
    $("#photography > h2").css("color", "inherit");
  });

  $("#development").on('mouseenter', function() {
    $("#development > h2").css("color", "white");
  });

  $("#development").on('mouseleave', function() {
    $("#development > h2").css("color", "inherit");
  });
});

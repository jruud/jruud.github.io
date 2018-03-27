

$(document).ready( function() {

  //Change content h2 color to white on mouse enter

  $(".content-square").on('mouseenter', function() {
    $("h2", this).css("color", "white");
  });

  //Revert h2 color to inherit on mouse leave
  
  $(".content-square").on('mouseleave', function() {
    $("h2", this).css("color", "inherit");
  });
});

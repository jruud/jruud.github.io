$(document).ready( function(){

  $("#mobile-nav-button").click( function() {
    $("#mobile-nav-wrapper").slideToggle();
    $("#arrow-down").toggle();
    $("#arrow-up").toggle();

  });

  $(window).on('resize', function () {
  if ($(window).width() > 768) {
    $("#mobile-nav-wrapper").hide();
  };
});
});

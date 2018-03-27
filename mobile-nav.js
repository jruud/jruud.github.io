

$(document).ready( function(){


  $("#mobile-nav-button").click( function() {
    $("#mobile-nav-wrapper").slideToggle(); //Show mobile menu
    $("#arrow-down").toggle(); //Hide and show the menu arrow
    $("#arrow-up").toggle();

  });

  //Hide mobile menu on window resize
  
  $(window).on('resize', function () {
  if ($(window).width() > 768) {
    $("#mobile-nav-wrapper").hide();
  };
});
});

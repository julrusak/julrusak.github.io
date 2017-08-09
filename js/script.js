$( document ).ready(function() {
    $('#hamburger').on('click', function(e) {
      $(this).toggleClass("open");  
      $('nav').toggleClass("open");  
      e.preventDefault();
    });


});
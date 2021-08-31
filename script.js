$(function(){
    $('#close').fadeOut();
    $('.fa-bars').click(function() {
        $('#close').fadeIn();
        $('nav').fadeIn();
        $('#icon span,#icon p').hide();       
    });

    $('.fa-times,#menu a').click(function() {
        $('nav').fadeOut();
        $('#close').fadeOut();
        $('#icon span,#icon p').fadeIn();       

    });

    if (window.matchMedia('(max-width: 599px)').matches) {
        $('nav').hide();
    }
    else {
        $('nav').show();
        }

});

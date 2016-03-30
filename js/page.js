$(document).ready(function () {
    $('header').hide();
    $('hr').hide();
    $('.banner').hide();
    $('footer').hide();
    $('header').fadeIn(400, function () {
        $('hr').fadeIn(400, function () {
           $('.banner').fadeIn(400, function () {
               $('footer').fadeIn(400);
           }); 
        });
    });
});

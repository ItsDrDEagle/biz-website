$(document).ready(function(){
    $("#naslovnaBtn").click(function() {
        $('html,body').animate({
            scrollTop: $("#header").offset().top},
            'slow');
    });
    $("#uslugeBtn").click(function() {
        $('html,body').animate({
            scrollTop: $("#usluge").offset().top},
            'slow');
    });
    $("#projektiBtn").click(function() {
        $('html,body').animate({
            scrollTop: $("#second").offset().top},
            'slow');
    });
    $("#oNamaBtn").click(function() {
        $('html,body').animate({
            scrollTop: $("#o-nama").offset().top},
            'slow');
    });


});
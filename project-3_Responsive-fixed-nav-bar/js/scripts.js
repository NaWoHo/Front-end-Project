
$(document).ready(function (){
    $(".icon-menu").on("click",function(){
        $("nav ul").toggleClass("showing");
    });
});
$(window).on("scroll",function(){
    if($(window).scrollTop()) {
        $('nav').addClass('black');
    } else {
        $('nav').removeClass('black');
    }
});
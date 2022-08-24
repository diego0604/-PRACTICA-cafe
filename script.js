$(document).ready(function(){
    $('.menu a').each((i,e)=>{
        $(e).css({
            "top":"-200px"
        });

        $(e).animate({
            "top": "0"
        }, 0 + (i*500));
    });

    if($(window).width() > 800){
        $('header .textos').css({
            "opacity": ".5",
            "marginTop": "0"
        });
        

        $('header .textos').animate({
            "opacity": "1",
            "marginTop": "-52px"
        })
    }

    var acerca_de  = $('#acerca-de').offset().top;
    $('.btn-acerca-de').click(function(e){
       e.preventDefault();
        $('html, body').animate({
            "scrollTop": "380"
        },500);
    })

})
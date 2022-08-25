$(document).ready(function(){
    $('.menu a').each((i,e)=>{
        $(e).css({
            "top":"-200px"
        });

        $(e).animate({
            "top": "0"
        }, 0 + (i*250));
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

    $('.btn-menu').click(function(e){
        e.preventDefault();
         $('html, body').animate({
             "scrollTop": "950"
         },500);
     })
     $('.btn-galeria').click(function(e){
        e.preventDefault();
         $('html, body').animate({
             "scrollTop": "1750"
         },500);
     })
     $('.btn-ubicacion').click(function(e){
        e.preventDefault();
         $('html, body').animate({
             "scrollTop": "9999"
         },500);
     })

     $(window).scroll(function(){
        var windowWidth = $(window).width();
        if(windowWidth > 800){
            var scroll = $(window).scrollTop();

            $('header .textos').css({
                'transform': 'translate(0px,' +scroll/2 + '%)'

            });

            $('.main .contenedor article').css({
                'transform': 'translate(0px,-' +scroll/4 + '%)'

            });
        }
     });
})
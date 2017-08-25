'use strict';
$(document).ready(function(){
    $('.content__info').fadeIn(1000);
    $('.content__window').fadeIn(1000).animate({'top': '50%'});
	$('.content__window-shadow').delay(2000).fadeIn().animate({'top':'57%','right':'-12%'});
    $('.content__window').hover(function(){
        $('.content__window .fa').css('color','#bfad7c');
    }, function(){
        $('.content__window .fa').css('color','#6a0001');
    });

    // $('.content__info2--block div:first-child').animate({'opacity':'1','top':'0'}, 3000 );
    // $('.content__info2--block div:first-child').css({'top':'0','opacity':'1'});

    $('.content__info2--block div:first-child').hover(function(){
        $(this).next().animate({'opacity':'1','top':'2rem','right':'2rem'});
    }, function(){
        $(this).next().animate({'opacity':'0','top':'0','right':'0'});
    });

    $('.advantages .content__info2').slick({
        infinity: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        appendArrows: $('.content__arrows'),
        prevArrow: '<i class="fa fa-long-arrow-left"></i>',
        nextArrow: '<i class="fa fa-long-arrow-right"></i>',
        responsive: [
             {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
        
    });    

    $('.content__menu').click(function(){
        $('.menu').fadeIn(1000);
    });

    $('.menu .content__menu').click(function(){
        $('.menu').fadeOut(1000);
    });
    

});
        function animationOut(i){
            
        }
        function animationIn(i){
            
        }
    
    
    


            
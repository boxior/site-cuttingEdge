'use strict';

$(document).ready(function(){
    $('.content__info').fadeIn(1000);
    $('.content__window').fadeIn(1000).animate({'top': '50%'});
    $('.content__window-shadow').delay(1500).fadeIn().animate({'top':'57%','right':'-12%'});
    $('.content__window').hover(function(){
        $('.content__window .fa').css('color','#bfad7c');
    }, function(){
        $('.content__window .fa').css('color','#6a0001');
    });

    $('.content__info2--block div:first-child').animate({'opacity':'1','top':'0'}, 1000 , function(){
        $('.content__info2--block div:first-child').css({'top':'0','opacity':'1'});
    });

    // $('.content__info2--block div:first-child').hover(function(){
    //     $('.content__info2--block div:last-child').animate({'opacity':'1','top':'2rem','right':'2rem'});
    // }, function(){
    //     $('.content__info2--block div:last-child').animate({'opacity':'0','top':'0','right':'0'});
    // });

    $(document).on("mouseover", ".content__green-zone", function(){
        $('.content__green-zone + .content__shadow').animate({'opacity':'1','top':'2rem','right':'2rem'});
    });
    $(document).on("mouseleave", ".content__green-zone", function(){
        $('.content__green-zone + .content__shadow').animate({'opacity':'0','top':'0','right':'0'});
    });

    $(document).on("mouseover", ".content__parking", function(){
        $('.content__parking + .content__shadow').animate({'opacity':'1','top':'2rem','right':'2rem'});
    });
    $(document).on("mouseleave", ".content__parking", function(){
        $('.content__parking + .content__shadow').animate({'opacity':'0','top':'0','right':'0'});
    });

    $(document).on("mouseover", ".content__infrastructure", function(){
        $('.content__infrastructure + .content__shadow').animate({'opacity':'1','top':'2rem','right':'2rem'});
    });
    $(document).on("mouseleave", ".content__infrastructure", function(){
        $('.content__infrastructure + .content__shadow').animate({'opacity':'0','top':'0','right':'0'});
    });

    $(document).on("mouseover", ".content__four", function(){
        $('.content__four + .content__shadow').animate({'opacity':'1','top':'2rem','right':'2rem'});
    });
    $(document).on("mouseleave", ".content__four", function(){
        $('.content__four + .content__shadow').animate({'opacity':'0','top':'0','right':'0'});
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
        
    });    

   
});

    function animationOut(i){}
    function animationIn(i){}
      //well, you need modify the cubeTransition.js file
      //delete the two functions if you dont need this kind of animation.
    


            
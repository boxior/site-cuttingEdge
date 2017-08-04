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

    $('.advantages__green-zone').animate({'opacity':'1','top':'0'});
    $('.advantages__parking').animate({'opacity':'1','top':'0'});
    $('.advantages__infrastructure').animate({'opacity':'1','top':'0'});
    $('.advantages__four').animate({'opacity':'1','top':'0'});


    $(document).on("mouseover", ".advantages__green-zone", function(){
        $('.advantages__green-zone + .advantages__shadow').animate({'opacity':'1','top':'2rem','right':'2rem'});
    });
    $(document).on("mouseleave", ".advantages__green-zone", function(){
        $('.advantages__green-zone + .advantages__shadow').animate({'opacity':'0','top':'0','right':'0'});
    });

    $(document).on("mouseover", ".advantages__parking", function(){
        $('.advantages__parking + .advantages__shadow').animate({'opacity':'1','top':'2rem','right':'2rem'});
    });
    $(document).on("mouseleave", ".advantages__parking", function(){
        $('.advantages__parking + .advantages__shadow').animate({'opacity':'0','top':'0','right':'0'});
    });

    $(document).on("mouseover", ".advantages__infrastructure", function(){
        $('.advantages__infrastructure + .advantages__shadow').animate({'opacity':'1','top':'2rem','right':'2rem'});
    });
    $(document).on("mouseleave", ".advantages__infrastructure", function(){
        $('.advantages__infrastructure + .advantages__shadow').animate({'opacity':'0','top':'0','right':'0'});
    });

    $(document).on("mouseover", ".advantages__four", function(){
        $('.advantages__four + .advantages__shadow').animate({'opacity':'1','top':'2rem','right':'2rem'});
    });
    $(document).on("mouseleave", ".advantages__four", function(){
        $('.advantages__four + .advantages__shadow').animate({'opacity':'0','top':'0','right':'0'});
    });

            
    $('.advantages .content__info').slick({
        infinity: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        appendArrows: $('.advantages__arrows'),
        prevArrow: '<i class="fa fa-long-arrow-left"></i>',
        nextArrow: '<i class="fa fa-long-arrow-right"></i>',
        
    });    

   
});

    function animationOut(i){}
    function animationIn(i){}
      //well, you need modify the cubeTransition.js file
      //delete the two functions if you dont need this kind of animation.
    


            
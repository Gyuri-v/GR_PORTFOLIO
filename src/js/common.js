$(document).ready(function(){
    
    
    //header nav
    $(".nav_con").css({'right':'-100%'});
    $(".nav_btn").click(function(){
        $(".nav_con").animate({'right':'0'});
    })
    $(".close").click(function(){
        $(".nav_con").animate({'right':'-100%'});
    })
    $(".navigation li").click(function(){
        $(".nav_con").animate({'right':'-100%'});
    })

    
    //window scroll event
    $(window).scroll( function(){
        
        
        //fadein
        $('.fadein1').each( function(i){
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if( bottom_of_window > bottom_of_element/1.3 ){
                $(this).animate({'opacity':'1','margin-top':'0px'},1000);
            }
        });
        $('.fadein2').each( function(i){

            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1','margin-top':'0px'},1000);
            }        
        });
        
        
        //about_letter_따옴표
        $('.letter_left img').each(function(i){
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1','margin-top':'-10%'},1000);
            }
        }); 

        $('.letter_right').each(function(i){
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1','bottom':'0'},1000);
            }
        });
        
        
    });
    
});

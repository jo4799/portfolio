
$(document).ready(function(){

//2차메뉴
    $(".dp2,.dp2_bg").hide();
    $(".gnb>li").mouseenter(function(){
       $(".dp2,.dp2_bg").stop().slideDown(); 
    });
   
    $(".gnb>li").mouseleave(function(){
       $(".dp2,.dp2_bg").stop().slideUp(); 
    });
    
    
    //모바일메뉴
    $(".m_wrap").hide();
    $(".m_menu").click(function(){
        $(".m_wrap").fadeIn();
    });
    $(".close").click(function(){
        $(".m_wrap").fadeOut();
    }); 
    
    
// 메인슬라이드
    $(".mv").bxSlider({
        auto: true
    });
    
    
//gallery
    $(window).scroll(function () {
    $('.ani_stop').each(function (i) {
        var bottom_of_object = $(this).offset().top + $(this).outerHeight() * .3;
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        if (bottom_of_window > bottom_of_object) {
            $(this).removeClass('ani_stop');
        }
        if (bottom_of_window < bottom_of_object) {
            $(this).addClass('ani_stop');
        }
      });
    });
    
//세계지도

   
    
});






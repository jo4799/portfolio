$(document).ready(function(){  //문서준비이벤트
  
  $(window).scroll(function() {
	if ($(this).scrollTop() > 100) {
		$(".gotop").fadeIn();
	} else {
		$(".gotop").fadeOut();
	}
});

$(".gotop").click(function() {
	$("html, body").animate({
		scrollTop: 0
	}, "slow");
	return false;
});
    

   //2차메뉴
    $(".dp2,.dp2_bg").hide();
    $(".gnb>li").mouseenter(function(){
       $(".dp2,.dp2_bg").stop().slideDown(); 
    });
   
    $(".gnb>li").mouseleave(function(){
       $(".dp2,.dp2_bg").stop().slideUp(); 
    });
     
    
    

    
    
//메인배너
  var slider = $(".mb").bxSlider({
	auto: true
  });  
    
  var slider = $(".insta").bxSlider({
	auto: true,
    maxSlides: 5,
    moveSlides: 1,
    slideWidth: 240,
    pager: false
  });
    
    
 
  
    
    
    
    
    
    
});//문서준비이벤트 종료
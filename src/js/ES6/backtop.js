//回到顶部
$(function(){
  $(function () {
    $(document).scroll(function(){
      if ($(document).scrollTop() > 100){
          $(".scrotop").fadeIn(1000);
      }else{
          $(".scrotop").fadeOut(1000);
      }
    });

          
    $(".scrotop").click(function(){
      if ($('html').scrollTop()) {
        $('html').animate({ scrollTop: 0 }, 1000);
        return false;
      }
      $('body').animate({ scrollTop: 0 }, 1000);
      return false;            
    });       
  });    
});

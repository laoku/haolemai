$(document).scroll(function(){
  if ($(document).scrollTop() > 250){
      $(".pull").css('position','fixed');
  }else{
      $(".pull").css('position','relative');
  }
});
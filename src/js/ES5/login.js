$('.font').click(function(){
  $('.font1').css('color','#d70057');
  $('.font_right').css('color','black');
  $('.number').css('display','block');
  $('.scan_code').css('display','none');
})
$('.font_right').click(function(){
  $('.font_right').css('color','#d70057');
  $('.font1').css('color','black');
  $('.scan_code').css('display','block');
  $('.number').css('display','none');
})


$('.remove').mouseenter(function() {
  $(".first").animate({
      left: "0px"
  });
  $(".second").delay(300).fadeIn("800ms").css("opcity", "1")
})
$('.remove').mouseleave(function() {
  $(".first").delay(300).animate({
      left: "80px"
  });
  $(".second").fadeOut("800ms").css("opcity", "0");
})

$('.download').mouseenter(function(){
  $(".down_code").css("display" , "block");
})
$('.download').mouseleave(function(){
  $(".down_code").css("display" , "none");
})
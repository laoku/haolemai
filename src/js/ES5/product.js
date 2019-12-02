"use strict";

//回到顶部
$(function () {
  $(function () {
    $(document).scroll(function () {
      if ($(document).scrollTop() > 100) {
        $(".scrotop").fadeIn(1000);
      } else {
        $(".scrotop").fadeOut(1000);
      }
    });
    $(".scrotop").click(function () {
      if ($('html').scrollTop()) {
        $('html').animate({
          scrollTop: 0
        }, 1000);
        return false;
      }

      $('body').animate({
        scrollTop: 0
      }, 1000);
      return false;
    });
  });
});


$(document).scroll(function () {
  if ($(document).scrollTop() > 550) {
    $(".prolist").css('position', 'fixed');
  } else {
    $(".prolist").css('position', 'relative');
  }
});



$('#seleA').click(function(){
  if($('#sele1').css("height") === "56px"){
      $('#sele1').css({"height":"160px","overflow":"visible"});
  }else if($('#sele1').css("height") === "160px"){
      $('#sele1').css({"height":"56px","overflow":"hidden"});
  }
})



$('#seleB').click(function(){
  if($('#sele2').css("height") === "56px"){
      $('#sele2').css({"height":"160px","overflow":"visible"});
  }else if($('#sele2').css("height") === "160px"){
      $('#sele2').css({"height":"56px","overflow":"hidden"});
  }
})





$('.more').click(function(){
  if($('.js').css('display') === "none"){
      $('.js').css('display','block');
  }else if($('.js').css('display') === "block"){
      $('.js').css('display','none');
  }
})




//选项卡
$('.a').click(function(){
  $('.a').css({"color" :"red","background" : "#fff"});
  $(".b").css({"color" :"#999","background" : "#e9e9e9"});
  $(".c").css({"color" :"#999","background" : "#e9e9e9"});
  $(".d").css({"color" :"#999","background" : "#e9e9e9"});
  $('#default').css("display","block");
  $('#price').css("display","none");
  $('#sales').css("display","none");
  $('#newest').css("display","none");
})
$('.b').click(function(){
  $(".a").css({"color" :"#999","background" : "#e9e9e9"});
  $(".c").css({"color" :"#999","background" : "#e9e9e9"});
  $(".d").css({"color" :"#999","background" : "#e9e9e9"});
  $('.b').css({"color" :"red","background" : "#fff"});
  $('#default').css("display","none");
  $('#price').css("display","block");
  $('#sales').css("display","none");
  $('#newest').css("display","none");
})
$('.c').click(function(){
  $(".a").css({"color" :"#999","background" : "#e9e9e9"});
  $(".b").css({"color" :"#999","background" : "#e9e9e9"});
  $(".d").css({"color" :"#999","background" : "#e9e9e9"});
  $('.c').css({"color" :"red","background" : "#fff"});
  $('#default').css("display","none");
  $('#price').css("display","none");
  $('#sales').css("display","block");
  $('#newest').css("display","none");
})
$('.d').click(function(){
  $(".b").css({"color" :"#999","background" : "#e9e9e9"});
  $(".c").css({"color" :"#999","background" : "#e9e9e9"});
  $(".a").css({"color" :"#999","background" : "#e9e9e9"});
  $('.d').css({"color" :"red","background" : "#fff"});
  $('#default').css("display","none");
  $('#price').css("display","none");
  $('#sales').css("display","none");
  $('#newest').css("display","block");
})



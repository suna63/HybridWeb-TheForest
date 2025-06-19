$(document).ready(function(){

  $(".tab-button li").click(function(){
    var result = $(this).attr("data-alt");

    $(".tab-button li").removeClass("active").fadeIn();
    $(".food-container .yummy-items").removeClass("active");

    $(this).addClass("active");
    $("#"+result).addClass("active").hide().fadeIn();
  });

});
$(document).ready(function(){

  $(".tab-button li").click(function(){
    var result = $(this).attr("data-alt");

    $(".tab-button li").removeClass("active");
    $(".wine-items").removeClass("active");

    $(this).addClass("active");
    $("#"+result).addClass("active").hide().fadeIn();
  });

  $(".wine-binery li").click(function(){
    pageNum = $(this).index();
    $(".wine-modal-page-num span:nth-child(1)").text(pageNum+1); //오른쪽 상단 페이지 번호
    $(".wine-modal-content li").eq(pageNum).stop().fadeIn(); //각 목록의 내용
    $(".wine-modal").stop().fadeIn(); //검은배경
  });

  $("#bottle ul li").slice(0,6).show(); //0,1,2까지 보임

  $(".load-more").click(function(){
    $("#bottle ul li:hidden").slice(0,4).fadeIn();
    if($("#bottle ul li:hidden").length == 0){$(this).addClass("end")}
  });

      const modal = document.querySelector('.wine-modal');
        const btnOpenModal=document.querySelector('.wine-list img');

        btnOpenModal.addEventListener("click", ()=>{
            modal.style.display="flex";
        });

  $(".wine-modal").click(function(){
    $(".wine-modal").stop().fadeOut();
    $(".wine-modal-content li").stop().fadeOut();
  });

});
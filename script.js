$(function() {
    $('.btn-gNav').on("click", function(){
  
      $(this).toggleClass('open');
      $('#bar').toggleClass('open');
    });
  
  });
  
  // メニューをクリックされたら、非表示にする
  $(function() {
    $('.gNav-menu li a').on("click", function(){
       $('#bar,.btn-gNav').removeClass('open');
    });
  });


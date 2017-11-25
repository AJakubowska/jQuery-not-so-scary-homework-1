$(function(){
  $('.rating-circle').mouseover(function(){
    $(this).css('background-color','yellow'); 
    $(this).prevAll().css('background-color','yellow');
    $(this).nextAll().css('background-color','white');
  });
});

$(function(){
  $('.rating-circle').click(function(){
      $(this).css('background-color','green'); 
      $(this).prevAll().css('background-color','green'); 
      $('#ocena').show();
      $('#wynik').text( $(this).index()+1 + '/' + ($(this).siblings().length+1));
  });
});
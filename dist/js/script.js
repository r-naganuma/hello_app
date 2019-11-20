jQuery(function($){
	$(function(){
    $('.in_view').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
        if (isInView) {
            $(this).addClass('on');
        }
    });

    $('.main a').hover(
      function() {
        $(this).parent('li').removeClass('close');
        $(this).parent('li').addClass('open');
        $(this).children('.mask').fadeIn();
      },
      function() {
        $(this).parent('li').removeClass('open');
        $(this).parent('li').addClass('close');
        $(this).children('.mask').fadeOut();
      }
    );
  });
})


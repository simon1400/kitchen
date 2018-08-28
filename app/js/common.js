$(function() {

	$('.hamburger').click(function() {
    $(this).toggleClass('is-active');
    $(this).next().slideToggle()
  })

  $('.dropdown').click(function() {
    $(this).children('ul').slideToggle();
    $(this).toggleClass('active_mnu');
    $(this).siblings('.dropdown').removeClass('active_mnu')
    $(this).siblings('.dropdown').children('ul').slideUp();
    if(window.innerWidth > 768){
      if($('.nav_top li').hasClass('active_mnu')){
        $('header').css('box-shadow', '0 4px 0px 5000px rgba(0,0,0,.2)')
      }else{
        $('header').css('box-shadow', '0 4px 45px 0 rgba(0,0,0,.2)')
      }
    }
  })

  $('.search > img').click(function() {
    $(this).prev().css('width', '100%');
    if(window.innerWidth > 768){
      $('header').css('box-shadow', '0 4px 0px 5000px rgba(0,0,0,.2)')
    }
  })

  $('.search > form > img').click(function() {
    $('.search > form').css('width', '0')
    if(window.innerWidth > 768){
      $('header').css('box-shadow', '0 4px 45px 0 rgba(0,0,0,.2)')
    }
  })

});

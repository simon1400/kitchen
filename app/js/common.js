$(function() {

	$('#hamburger_menu').click(function() {
    $(this).toggleClass('is-active');
    $(this).next('nav').slideToggle()
  })

  $('#hamburder_category').click(function() {
    $(this).toggleClass('is-active');
    $('.category_menu').slideToggle()
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

	$('body > div').click(function() {
		if($('.nav_top li').hasClass('active_mnu')){
			$('.dropdown').siblings('.dropdown').removeClass('active_mnu')
	    $('.dropdown').siblings('.dropdown').children('ul').slideUp();
			$('header').css('box-shadow', '0 4px 45px 0 rgba(0,0,0,.2)')
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

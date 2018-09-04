$(function() {

	new WOW().init();

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
        $('header').css('box-shadow', '0 4px 0px 5000px rgba(0,0,0,.6)')
      }else{
        $('header').css('box-shadow', '0 4px 5000px 0 rgba(0,0,0,0)')
      }
    }
  })

	$('body > div').click(function() {
		if($('.nav_top li').hasClass('active_mnu')){
			$('.dropdown').siblings('.dropdown').removeClass('active_mnu')
	    $('.dropdown').siblings('.dropdown').children('ul').slideUp();
			$('header').css('box-shadow', '0 4px 5000px 0 rgba(0,0,0,0)')
		}
	})

  $('.search > span').click(function() {
    $(this).prev().css('width', '100%');
    $('#input_search').focus();
    if(window.innerWidth > 768){
      $('header').css('box-shadow', '0 4px 0px 5000px rgba(0,0,0,.6)')
    }
  })

  $('.search > form > span').click(function() {
    $('.search > form').css('width', '0')
    if(window.innerWidth > 768){
      $('header').css('box-shadow', '0 4px 5000px 0 rgba(0,0,0,0)')
    }
  })

	/*
	 * Replace all SVG images with inline SVG
	 */
	$('img.svg').each(function(){
	    var $img = $(this);
	    var imgID = $img.attr('id');
	    var imgClass = $img.attr('class');
	    var imgURL = $img.attr('src');

	    $.get(imgURL, function(data) {
	        // Get the SVG tag, ignore the rest
	        var $svg = $(data).find('svg');

	        // Add replaced image's ID to the new SVG
	        if(typeof imgID !== 'undefined') {
	            $svg = $svg.attr('id', imgID);
	        }
	        // Add replaced image's classes to the new SVG
	        if(typeof imgClass !== 'undefined') {
	            $svg = $svg.attr('class', imgClass+' replaced-svg');
	        }

	        // Remove any invalid XML tags as per http://validator.w3.org
	        $svg = $svg.removeAttr('xmlns:a');

	        // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
	        if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
	            $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
	        }

	        // Replace image with new SVG
	        $img.replaceWith($svg);

	    }, 'xml');

	});

});

/*function move_anchor() {
	var anchorLink = parseInt($('.newsWrapper').offset().top) - 70;
	$('html, body').animate({scrollTop: anchorLink}, 900);
	return false;
}
function move_anchor2() {
	var anchorLink2 = parseInt($('.galleryWrapper').offset().top) - 80;
	$('html, body').animate({scrollTop: anchorLink2}, 900);
	return false;
}*/

var sidewrapWidth,
	galleryHeight;

$(document).ready(function(){
	$(".bannerSlider").owlCarousel({
		items:1,
		autoplay:true,
		autoplayHoverPause:true,
		dots: true
	});

	$('.subNav ul li a').click(function(){
		$(this).siblings('.subMenu').slideToggle();
	})
	
	sidewrapWidth = $('.sideWrapper').innerWidth();
	$('.right-widget').css('width', sidewrapWidth);
	
	galleryHeight = $('.lightboxLink').width()*0.665;
	$('.lightboxLink').css('height', galleryHeight);
	
	var hash = window.location.hash;
	// now scroll to element with that id
	if(hash == '#news') {
		$('html, body').animate({ scrollTop: $(hash).offset().top - 120}, 900);
	} else if(hash == '#gallery') {
		$('html, body').animate({ scrollTop: $(hash).offset().top - 130}, 900);
	}
	
	var getUrl = window.location + '';
	getUrl = getUrl.split('?')[0];
	segment = getUrl.split(/[\s/]+/);
	
	if(segment[segment.length-1] == 'ahrtprofile' || segment[segment.length-1] == 'ahrt'){
		$('a[href="'+getUrl+'"]').closest('ul').closest('li').addClass('active');
	}else{
		$('a[href="'+getUrl+'"]').closest('li').addClass('active');	
	}
})
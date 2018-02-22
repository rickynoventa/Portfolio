var loaderHeight,
	logoHeight,
	minilogoHeight;

$(document).ready(function(){
	loaderHeight = ($('.loading').width()*0.365);
	$('.loading').css({height:loaderHeight+'px'});
	
	logoHeight = ($('.logo').width()*0.365);
	$('.logo').css({height:logoHeight+'px'});
	
	minilogoHeight = ($('.miniLogo').width()*0.365);
	$('.miniLogo').css({height:minilogoHeight+'px'});
	
	$('.burgerMenu').click(function(){
		$('.mainNav').addClass('sideMenu');
		$('.headerWrapper').animate({right:0});
		$('.closeMenu').fadeIn();
		return false;
	});
	$('.closeMenu').click(function(){
		$('.headerWrapper').animate({right:'-100%'});
		$('.closeMenu').fadeOut();
		return false;
	});
	
	$('#exp .country ul li a').click(function(){
		if($(this).parent().hasClass('active')){
			$(this).parent().find('.partner').slideUp();
			$(this).parent().removeClass('active');
		}
		else{
			$('#exp .country ul li .partner').slideUp();
			$('#exp .country ul li').removeClass('active');
			$(this).parent().addClass('active');
			$(this).parent().find('.partner').slideDown();
		}
		return false;
	})
});

$(window).resize(function(){
    loaderHeight = ($('.loading').width()*0.365);
	$('.loading').css({height:loaderHeight+'px'});
	
	logoHeight = ($('.logo').width()*0.365);
	$('.logo').css({height:logoHeight+'px'});
	
	minilogoHeight = ($('.miniLogo').width()*0.365);
	$('.miniLogo').css({height:minilogoHeight+'px'});
});
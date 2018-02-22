jQuery(document).ready(function($){

// MODAL DOWNLOAD BROCHURE //
var pagedlbroc = $(".download_brochure a");
pagedlbroc.addClass("overlay-show").attr({"data-overlay-class":"overlay-zoomin", "data-class-id":"content-download-brochure"});

// MODAL DOWNLOAD PART CATALOG //
var pagedlpcat = $(".download_part_catalog a");
pagedlpcat.addClass("overlay-show").attr({"data-overlay-class":"overlay-zoomin", "data-class-id":"content-download-part-catalog"});


// SUPERFISH MENU //

// ---------------------------------------------- //
$('#mobile-topmenu').click(function(){
	$('.sf-topmenu').toggleClass('xactive');
});
// ---------------------------------------------- //

// Consistency product menu with Superfish style:
$('.product_actived').addClass('menu-item-has-children');

$('#mobnav-btn').click(function(){
    $('.sf-menu, .supersearch').toggleClass("xactive");
    if($('.sf-menu, .supersearch').hasClass("xactive")){
		$('.supersearch').before("<div class='clear'></div>");
	} else{
		$('.supersearch').prev('.clear').remove();
	}
});
$('.sf-menu .menu-item-has-children').append('<div class="mobnav-subarrow"><span class="fa fa-angle-down"></span></div>');
$('.mobnav-subarrow').click(function(){
	$('.fa', this).toggleClass("fa-angle-down").toggleClass("fa-angle-up");
    $(this).parent().toggleClass("xpopdrop");
});
$(".supersearch").click(function(){
	$("input", this).focus();
});
var $doc 	= $(document);
$menu 		= $(".superb");
menuClass 	= "goStick"; 
$doc.scroll(function(){
	$menu.toggleClass(menuClass, $doc.scrollTop() >= 200);
});

// Fixin Super Search doesn't coming back to original size when browser resized:
// PRODUCT MENU
function checksize(){
	if ($("#mobile-trigger").css("float") == "none"){
		$('#productList').appendTo('.product_actived');
		//$(".sf-menu, .supersearch").removeClass("xactive");
		//$('#productList').removeClass("active");
		$('.product_actived .mobnav-subarrow').on('click', function(){
			$('#productList').toggleClass("active");
		});
	} else if ($("#mobile-trigger").css("float") != "none"){
		$('#productList').appendTo('.menu_inner');
		//$(".supersearch").removeClass("xactive");
		// $('.motor_icon a').on('mouseenter', function(){
		// 	$('#productList').toggleClass("active");
		// });
		$('.motor_icon, #productList').hover(function(){
			$('#productList').addClass('active');
		},function(){
			$('#productList').removeClass('active');
		});
	}
}

$(window).resize(function(){
	checksize();
});
checksize();


// Fixin: keep aspect rations of embeded Youtube in post.
$(".single_post, .fit-vid").fitVids({
	customSelector: "iframe[src^='http://www.youtube.com']"
});


// $("select").simpleselect();

$(".select_auto_redirect").change(function(){
	$(".select_auto_redirect option:selected").each(function(){
		var target = $(this).val();
		if (target != '') {
			window.location.href = target;
		}
	});
});


// Facebook Size Fixin:
// $(".fb_iframe_widget, .fb_iframe_widget span, .fb_iframe_widget span iframe[style]").css("width", "100%");


// data-overlay-class="overlay-zoomin" data-class-id="content-556810224139f" class="link_text overlay-show"

/*
$('body').addClass('stop-scrolling');
$('body').bind('touchmove', function(e){
	e.preventDefault();
});

var hit = 0;
$('.shakebutton').click(function(){
	hit++;
	console.log("Hit: "+hit);
	$(this).addClass('pulse');
	$(this).on('animationend mozanimationend webkitAnimationEnd oAnimationEnd msanimationend', function () {
	  $(this).removeClass('pulse');
	});
	$('.shakebutton span').html((10-hit));
	if (hit > 9) {
		$('.popup-banner-overlay, .popup-banner').fadeOut();
		$('body').removeClass('stop-scrolling');
		$('body').unbind('touchmove');
	}
	return false;
});

$('.skip-intro').click(function(){
	$('.popup-banner-overlay, .popup-banner').fadeOut();
	$('body').removeClass('stop-scrolling');
	$('body').unbind('touchmove');
	return false;
});

$('.shakebutton').hover(function(){
	$(this).addClass('pulse');
}, function(){
	$(this).removeClass('pulse');
});
*/

});
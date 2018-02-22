function show_video_popup(){
	$('.popupWrapper, #videoPopup, .overlay').fadeIn();
	$('html, body').css('overflow','hidden');
	return false;
}
function show_info_popup(){
	$('.popupWrapper, #infoPopup, .overlay').fadeIn();
	$('html, body').css('overflow','hidden');
	return false;
}
function forgot_password_popup(){
	$('.popupWrapper, #forgotpasswordPopup, .overlay').fadeIn();
	$('html, body').css('overflow','hidden');
	return false;
}

function show_gallery_popup(){
	$('.popupWrapper, #galleryPopup, .overlay').fadeIn();
	$('html, body').css('overflow','hidden');
	return false;
}
function show_signup_popup(){
	$('.popupWrapper, #signupPopup, .overlay').fadeIn();
	$('html, body').css('overflow','hidden');
	return false;
}
function show_login_popup(){
	$('.popupWrapper, #loginPopup, .overlay').fadeIn();
	$('#signupPopup').fadeOut();
	$('html, body').css('overflow','hidden');
	return false;
}
function show_register_popup(){
	$('.popupWrapper, #registerPopup, .overlay').fadeIn();
	$('#signupPopup').fadeOut();
	$('html, body').css('overflow','hidden');
	return false;
}
function show_register2_popup(){
	$('.popupWrapper, #register2Popup, .overlay').fadeIn();
	$('#signupPopup').fadeOut();
	$('html, body').css('overflow','hidden');
	return false;
}
function show_thanks_popup(){
	$('.popupWrapper, #thanksPopup, .overlay').fadeIn();
	$('#registerPopup').fadeOut();
	$('html, body').css('overflow','hidden');
	return false;
}
function hide_popup(){
	$('.popupWrapper, .popupBox').fadeOut();
	$('html, body').css('overflow','auto');
	return false;
}

var headerHeight,
	flagHeight,
	flagminiHeight,
	searchBtn,
	buynowBtn,
	hair,
	cloth,
	envi,
	previewboxImg,
	footerSpace,
	footNote;

$(document).ready(function(){
	$('.howtoPlay').click(function(){
		howtoPlay = parseInt($('.four').offset().top);
		$('html, body').animate({scrollTop: howtoPlay}, 900);
		return false;
	});
	
	flagHeight = ($('.bbFlag').width()*1.608);
	$('.bbFlag').css({height:flagHeight+'px'});
	
	flagminiHeight = ($('.bbFlag.mini').width()*1.32);
	$('.bbFlag.mini').css({height:flagminiHeight+'px'});
	
	searchBtn = $('.searchBtn').height();
	$('.searchBtn').css({width:searchBtn+'px'});
	
	buynowBtn = $('.promo .mainWrapper .buyNow .buttonWrapper img').height();
	$('.buynowBtn').css({height:buynowBtn+'px'});
	
	previewboxImg = ($('.previewBox img').width() - 1);
	$('.previewBox img').css({height:previewboxImg+'px'});
	
	footNote = $('.footNote .kaleng').height()-150;
	$('.satuKaleng').css({paddingBottom:footNote+'px'});
	
	footerSpace = $('footer').innerHeight() - 1;
	$('section').css({'padding-bottom':footerSpace+'px'});
	$('.footNote, .campaign .ornament.bottomLeft, .campaign .ornament.bottomRight').css({bottom:footerSpace+'px'});
	
	if ($(window).width() < 768){
		headerHeight = $('header').height();
		$('nav').css({top:headerHeight+'px'});
	}
	
	$('.burgerIcon').click(function(){
		$('nav').slideToggle();
	})
	
	leftHeight = $('.cekPoin .leaderBoard').innerHeight();
	rightHeight = $('.cekPoin .mainWrapper').innerHeight();
	if ($(window).width() > 960){
		if(leftHeight > rightHeight){
			$('.cekPoin .mainWrapper').css('height',leftHeight);
		} else if(rightHeight > leftHeight){
			$('.cekPoin .leaderBoard').css('height',rightHeight);
		}
	}
	$('#setHair').click(function(){
		// get img attribute
		var hairData = $(this).siblings('.bx-wrapper').find('li.active img').attr('class');
		// disable prev tab
		$("#templateTabs").tabs('enable', 1).tabs( "option", "active", 1 ).tabs('disable', 0);
		if(hairData == 'black_hair'){
			// pindah tab baju
			$('.slidercloth li.blonde_cloth').remove('');
			cloth = $('.slidercloth').bxSlider({
				pager: false,
				onSliderLoad: function () {
					$('.slidercloth > li').eq(1).addClass('active')
				},
				onSlideAfter: function ($slideElement, oldIndex, newIndex) {
					$('.slide').removeClass('active');
					$($slideElement).addClass('active');        
				}
			});
		}
		else{
			// pindah tab baju
			$('.slidercloth li.black_cloth').remove('');
			cloth = $('.slidercloth').bxSlider({
				pager: false,
				onSliderLoad: function () {
					$('.slidercloth > li').eq(1).addClass('active')
				},
				onSlideAfter: function ($slideElement, oldIndex, newIndex) {
					$('.slide').removeClass('active');
					$($slideElement).addClass('active');        
				}
			});
		}
	})
	$('#setCloth').click(function(){
		// disable prev tab
		$("#templateTabs").tabs('enable', 2).tabs( "option", "active", 2 ).tabs('disable', 1);
		envi = $('.sliderenvi').bxSlider({
			pager: false,
			// set active slide
			onSliderLoad: function () {
				$('.sliderenvi > li').eq(1).addClass('active')
			},
			onSlideAfter: function ($slideElement, oldIndex, newIndex) {
				$('.slide').removeClass('active');
				$($slideElement).addClass('active');        
			}
		});
		// get img attribute
		var clothData = $(this).siblings('.bx-wrapper').find('li.active img').attr('alt');
		$("#cloth_data").val(clothData);
	});
	$('#setAll').click(function(){
		// get img attribute
		var enviData = $(this).siblings('.bx-wrapper').find('li.active img').attr('alt');
		$("#envi_data").val(enviData);
		$("#submit_image_form").submit();
	});
	
	$('.type').select2({
		placeholder: 'Pilih',
		minimumResultsForSearch: Infinity
	});
	$('.province').select2({
		placeholder: 'Provinsi',
		minimumResultsForSearch: Infinity
	});
});

$(window).bind('resize', function(){
	if ($(window).width() < 768){
		headerHeight = $('header').height();
		$('nav').css({top:headerHeight+'px'});
	}
	
	flagHeight = ($('.bbFlag').width()*1.608);
	$('.bbFlag').css({height:flagHeight+'px'});
	
	flagminiHeight = ($('.bbFlag.mini').width()*1.32);
	$('.bbFlag.mini').css({height:flagminiHeight+'px'});
	
	searchBtn = $('.searchBtn').height();
	$('.searchBtn').css({width:searchBtn+'px'});
	
	buynowBtn = $('.promo .mainWrapper .buyNow .buttonWrapper img').height();
	$('.buynowBtn').css({height:buynowBtn+'px'});
	
	previewboxImg = ($('.previewBox img').width() - 1);
	$('.previewBox img').css({height:previewboxImg+'px'});
	
	footNote = $('.footNote .kaleng').height();
	$('.satuKaleng').css({paddingBottom:footNote-150+'px'});
	
	footerSpace = $('footer').innerHeight() - 1;
	$('section').css({'padding-bottom':footerSpace+'px'});
	$('.footNote, .campaign .ornament.bottomLeft, .campaign .ornament.bottomRight').css({bottom:footerSpace+'px'});
	
	leftHeight = $('.cekPoin .leaderBoard').innerHeight();
	rightHeight = $('.cekPoin .mainWrapper').innerHeight();
	if ($(window).width() > 960){
		if(leftHeight > rightHeight){
			$('.cekPoin .mainWrapper').css('height',leftHeight);
		} else if(rightHeight > leftHeight){
			$('.cekPoin .leaderBoard').css('height',rightHeight);
		}
	}
});
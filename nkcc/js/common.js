// JavaScript Document


$(document).ready(function() {	
	
	$('.goog-te-menu2 table tbody tr td:last-child a:last-child').on('focusout',function(){
		$('.goog-te-menu-value').focus();
	})
	
	$('#header_area').addClass('blk');
	
	
	$('.section02').on('focus',function(){				
		$('.section_ctrl').addClass('grey');
		$('.bg_frame').addClass('open');
		$('.quick_menu ul').addClass('active');
		$('.bg_line').addClass('active');							
	});	
	$('.section04').on('focus',function(){				
		$('.section_ctrl').addClass('grey');				
	});	
	
	setTimeout(function() { $('.circle01').addClass('active'); }, 500);
	setTimeout(function() { $('.circle01 .ani').addClass('active'); }, 1000);
	setTimeout(function() {	$('.circle02').addClass('active'); }, 1500);
	setTimeout(function() { $('.circle02 .ani').addClass('active'); }, 2000);
	setTimeout(function() { $('.circle03').addClass('active'); }, 2500);
	setTimeout(function() { $('.circle03 .ani').addClass('active'); }, 3000);
	
	
	$('.main_pause').on('click',function(){
		if($(this).hasClass('paused')){
			$(this).attr('title','멈춤');
			$(this).html('<i class="fal fa-pause-circle"></i>');
		} else {
			$(this).attr('title','재생');
			$(this).html('<i class="fal fa-play-circle"></i>')
		}		
	});
	$(function(){
		var total_num = $(".place_list li").length;
		var now_num = $(".place_list li").attr('data-position');
		$('.place_wrap .pagination').html("<em>0"+ now_num + "</em>" + "/0"+ total_num );
	});
	
	$(function(){
		$('.place_list .text_box').addClass('active');
		$('.place_list .thumb').addClass('active');

	});
	
	
	$(function(){		
		
		$("#latest_list02").css('display','none');
		$("#latest_list03").css('display','none');
		$('.latest_box h3 a').on('click',function(){
			var tab_num = $(this).parent().parent().index() + 1;
			$(this).parent().addClass('active');
			$(this).parent().parent().siblings().find('h3').removeClass('active');
			$('.latest_list_wrap').css('display','none');
			$('#latest_list0'+tab_num).css('display','block');
			return false;
		});
	});
	

	$('.bnr_pause').on('click',function(){
		if($(this).hasClass('paused')){
			$(this).attr('title','멈춤');
			$(this).html('<i class="fal fa-pause-circle"></i>');
		} else {
			$(this).attr('title','재생');
			$(this).html('<i class="fal fa-play-circle"></i>')
		}		
	});
	$('.slide_close').on('click',function(){
		$('.slide_notice').slideUp();
		$('#header_area').css('height','auto');
	});
	
	$('.btn_setting').on('click',function(){
		$('.popup_menu_wrap').fadeIn();
	});
	$('.pop_close').on('click',function(){
		$('.popup_menu_wrap').fadeOut();
		$('.btn_setting').focus();
	});
	
	$('.title_place a').on('click',function(){	
		$("#right_slide03").toggleClass('open');		
		if($("#right_slide03").hasClass('open')){
			$('#right_slide03 .open_slide_box').html('<i class="far fa-chevron-right"></i>');
			$('#right_slide03 .open_slide_box').attr('title','슬라이드 닫기');
			//$(this).hide();
		} else {
			$('#right_slide03 .open_slide_box').html('<i class="far fa-chevron-left"></i>');
			$('#right_slide03 .open_slide_box').attr('title','슬라이드 열기');				
		}
	});
	
	
	$('.gnb > ul > li').on('mouseover',function(){	
		$(this).addClass('on');
		$(this).siblings().removeClass('on');
		//$('#header_area').css('height',460).css('overflow','hidden');
		//$('.total_sch_box').fadeOut();
	});
	$('.gnb > ul > li > div').on('mouseout',function(){	
		$(this).parent().removeClass('on');				
		//$('#header_area').css('height',100).css('overflow','visible');;
	});
	$('.etc_menu,.logo').on('mouseover',function(){	
		$('.gnb > ul > li').removeClass('on');
	});
			
	
	$('.gnb > ul > li > a').on('focus',function(){
		$(this).parent().addClass('on');
		$(this).parent().siblings().removeClass('on');
		$('.total_sch_box').fadeOut();
	});
	$('.gnb > ul > li:last-child > div > ul > li:last-child > a').on('focusout',function(){
		$('.gnb > ul > li').find('div').stop().slideUp(100);
		$('#header_area').css('height',100);
	});
	
	$('.language > a').on('click',function(){
		if ( $(this).hasClass("drop-on") ) {
			$(this).attr("title", "언어선택 메뉴 열기");
			$(this).removeClass("drop-on");
			$(this).next().stop().slideToggle();				
		} else {
			$(this).attr("title", "언어선택 메뉴 닫기");
			$(this).addClass("drop-on");
			$(this).next().stop().slideToggle();	
		}
	});
	$('.btn_sch').on('click',function(){
		$('.total_sch_box').fadeIn();
	});
	$('.sch_close_btn').on('click',function(){
		$('.total_sch_box').fadeOut();
		$('.btn_sch').focus();
	});

	$('.menu').on('click',function(){
		$('.gnb_m,.menu').toggleClass('open');
	});
		
	$('.tab_s ul li').on('click',function(){
		$(this).addClass('active');
		$(this).siblings('li').removeClass('active');
		if($(this).hasClass('active')){
			$(this).parent().toggleClass('open');
		};
		var num = $(this).index() + 1;
		//alert(num);
		$('.tab_con').css('display','none');
		$('#tab0'+num).css('display','block');
		return false;
	});

	
	$('.share > a').on('click',function(){
		$('.sns_links_wrap').fadeIn();
	});
	$('.sns_close_btn').on('click',function(){
		$('.sns_links_wrap').fadeOut();
		$('.share > a').focus();
	});
	
	$('.btn_detail_close').on('click',function(){
		$(this).parent().hide();
		return false;
	});
	
	$('.sort_list > li > a').on('click',function(){
		var this_index = $(this).parent().index();
		$(this).parent().addClass('active');
		$(this).parent().siblings().removeClass('active');
		if(this_index == 0){		
			$('#policy_list').removeClass('policy_list');
			$(this).parent().addClass('active');
		} else if(this_index == 1) {
			$('#policy_list').addClass('policy_list');			
		}
		return false;
	});
	
	$('.faq_list > li > a').on('click',function(){		
		if($(this).hasClass('active')){
			$(this).removeClass('active');
			$(this).next().slideUp();
		} else {
			$(this).addClass('active');
			$(this).parent().siblings().find('a').removeClass('active');
			$(this).next().slideDown();
			$(this).parent().siblings().find('div').slideUp();
		}
		return false;
	});
	
	$('.responsive').scroltable();
	
	$('.go_top').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 500);
		return false;
	});
	
	$('.related_site > a').on('click',function(){
		$(this).toggleClass('active')
		$(this).parent().siblings('.related_site').find('> a').removeClass('active')
		$(this).next('ul').slideToggle();
		$(this).parent().siblings('.related_site').find('ul').slideUp();
			if ($('.related_site > a').hasClass("active")) {
		$('.related_site > a').attr("title","관련사이트 메뉴 닫기");
	} else {
		$('.related_site > a').attr("title","관련사이트 메뉴 열기");
	}
		return false;
	});
	

	
	
	
	
	//menu_open
	$('.has_sub.active').addClass('open').children('ul').show();
	$('.has_sub > a').on('click', function(){
		var element = $(this).parent('li');
		if (element.hasClass('open')) {
			element.removeClass('open');
			element.find('a').removeClass('open');
			element.find('li').removeClass('open');
			element.find('ul').slideUp(200);
			return false;
		}
		else {
			element.addClass('open');
			element.find('a').addClass('open');
			element.children('ul').slideDown(200);
			element.siblings('li').children('ul').slideUp(200);
			element.siblings('li').removeClass('open');
			element.siblings('li').children('a').removeClass('open');
			element.siblings('li > a').removeClass('open');
			element.siblings('li').find('ul').slideUp(200);
			return false;
		}
	});	
});

// 구글 번역 관련
function googleTranslateElementInit(){
	var agent = navigator.userAgent.toLowerCase();
	if ( (navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1) ) {
	}else {
		new google.translate.TranslateElement({pageLanguage:'ko', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
	}
}
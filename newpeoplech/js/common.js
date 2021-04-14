// JavaScript Document
$(document).ready(function() {		
	$('.m_menu').on('click',function(){
		$(this).toggleClass('open');
		$('html,body').toggleClass('open');
		$('.m_gnb,.drawer').toggleClass('open');
		var menu_h = $(window).innerHeight()-237;
		$('.m_gnb > ul').css('height',menu_h);
	});
	$('.drawer').on('click',function(){
		$('.m_gnb,.drawer,.m_menu').removeClass('open');
		$('html,body').toggleClass('open');
	});

	$('.gnb > ul > li').hover(function(){
		$(this).find('ul').stop().slideDown(200);
	},function(){
		$(this).find('ul').stop().slideUp(100);
	});

	// sns공유하기
	$('.sns').on('click',function(){		
		$('#sns_list').slideToggle();
	});

	$(".latest_box .title > a").on('click',function(){
		$(this).parent().addClass('active');
		$(this).parent().parent().siblings().find('h3').removeClass('active');
		return false;
	});

	$('.go_link').on('click',function(){
		$('.go_link_list').slideToggle(); 
		$('.go_link_wrap i').toggleClass('revers');
	});
	
	$('.btn_sch').on('click',function(){
		$('.search_box').slideToggle();
	});
	$('.sch_close').on('click',function(){
		$('.search_box').slideUp();
	});
	$('.sub_menu .open').on('click',function(){
		$('.sub_menu ul').slideToggle();
		$(this).toggleClass('close');
	});
	
	var brSize= 1;
	function browserSize(size){
		//if (jQuery.browser.mozilla) {

		brSize = brSize + size;
		$('body').css('transform','scale(' + (brSize) + ')');
		$('body').css('transform-origin','top center');
		//}
		if( brSize >= 1.5 ){
			alert("더이상 확대하실 수 없습니다.");
			$('body').css('transform','scale(1.45)');
			$('body').css('transform-origin','top center0');

		}
		if( brSize <= 0.6 ){
			alert("더이상 축소하실 수 없습니다.");
			$('body').css('transform','scale(0.6)');
			$('body').css('transform-origin','top center');

		}
	}
	$('.normal').click(function(){
			brSize = 1;
			$('body').css('transform','scale(1)');
			$('body').css('transform-origin','top center');
		});

	$('.bigger').on('click',function(){
		browserSize(+0.05);
		return false;
	});
	$('.smaller').on('click',function(){
		browserSize(-0.05);
		return false;
	});


	//location
	$('.has_sub.active').addClass('open').children('ul').show();
	$('.has_sub > a').on('click', function(e){
		e.preventDefault();
		var element = $(this).parent('li');
		if (element.hasClass('open')) {
			element.removeClass('open');
			element.find('a').removeClass('open');
			element.find('li').removeClass('open');
			element.find('ul').slideUp(200);
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
		}
	});


	$('.go_top').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 500);
		return false;
	});

	$('.responsive').scroltable();
	

});




function content_print(){
	window.print();
}
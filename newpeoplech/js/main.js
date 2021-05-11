// JavaScript Document
$(document).ready(function() {
	
	/* 메인 비주얼 슬라이드 */
	$('.visual_slide > li:first-child > .info_box,.visual_slide > li:first-child > .exp_box').addClass('showing');
	var $carousel1 = $(".visual_slide");
	$carousel1.carouFredSel({ 
		responsive:true,
		scroll:1, 
		prev:'#prev1',	
		next:'#next1', 
		auto:{ 
			play:true,
			duration:1500,
			button: ".pause1" 
		}, 	
		scroll : {
			fx : "fade",
			onBefore :
				function(data) {
					$('.visual_slide > li > .info_box,.visual_slide > li > .exp_box').removeClass('showing');
				},
			onAfter :
				function(data) {
					$('.visual_slide > li:first-child > .info_box,.visual_slide > li:first-child > .exp_box').addClass('showing');					
				},
		},
		pagination:"#pager1",
		swipe: {
			//onMouse: true,
			onTouch: true
		 },
		onCreate : function () {
				$(window).on('resize', function(){
				    	var heights = $carousel1.children().map(function() { return $(this).height(); });
					$carousel1.parent().add($carousel1).height(Math.max.apply(null, heights));
				}).trigger('resize');
			    }
	});
	
	$(".pager_wrap .pause1").on('click',function(){
		if($(this).hasClass('paused')){
			$(this).html("<i class='fas fa-play-circle'></i>");
			$(this).attr('title','재생');
		} else{			
			$(this).html("<i class='fas fa-pause-circle'></i>");
			$(this).attr('title','멈춤');
		}
	});
	
	var $carousel2 = $(".alim_banner");
	$carousel2.carouFredSel({  
		width:'100%', 
		responsive:true, 
		scroll:1, 
		prev:'#prev3',
		next:'#next3', 
		auto: { button: ".pause" }, 
		scroll : {
			fx : "slide",
			onAfter :
				function(data) {
					var pager_num = $('#pager03 > a.selected').index()+1;
					var total_num = $('.alim_banner > li').length;
					$('.paging').html(pager_num+"/"+total_num);
				},
		},
		pagination:"#pager03" ,
		swipe: {
			//onMouse: true,
			onTouch: true
		 },
		onCreate : function () {
				$(window).on('resize', function(){
				    	var heights = $carousel2.children().map(function() { return $(this).height(); });
					$carousel2.parent().add($carousel2).height(Math.max.apply(null, heights));
				}).trigger('resize');
			    }
	});
	$(function(){
		var pager_num = $('#pager03 a.selected').index()+1;
		var total_num = $('.alim_banner > li').length;
		$('.paging').html(pager_num+"/"+total_num);
	});	
	
	
	$(".alim_controll .pause").on('click',function(){
		if($(this).hasClass('paused')){
			$(this).html("<i class='fas fa-play-circle'></i>");
			$(this).attr('title','재생');
		} else{			
			$(this).html("<i class='fas fa-pause-circle'></i>");
			$(this).attr('title','멈춤');
		}
	});
	var $carousel3 = $(".exhbt_list") ;
	$carousel3.carouFredSel({ 
		width:'100%', 
		responsive:false, 
		scroll:1, 
		prev:'#prev2',
		next:'#next2', 
		auto:false, 
		pagination:"#pager2",
		swipe: {  onTouch: true  },
		onCreate : function () {
			$(window).on('resize', function(){
				var heights = $carousel3.children().map(function() { return $(this).height(); });
				$carousel3.parent().add($carousel3).height(Math.max.apply(null, heights));
			}).trigger('resize');
		    }
	});
	var $carousel4 = $(".collect_list") ;
	$carousel4.carouFredSel({ 
		width:'100%', 
		responsive:false, 
		scroll:1, 
		prev:'#prev4',
		next:'#next4', 
		auto:false, 
		pagination:"#pager4" ,
		swipe: { onTouch: true  },
		onCreate : function () {
				$(window).on('resize', function(){
				    	var heights = $carousel4.children().map(function() { return $(this).height(); });
					$carousel4.parent().add($carousel4).height(Math.max.apply(null, heights));
				}).trigger('resize');
			    }
	});
  
  	var swiper = new Swiper('.sermon_list', {
        pagination: {
          el: '.sermon_paging',
          clickable:true,
        },
        loop: true,
        autoplay: true,
       speed: 5000,
      });
});
// a href # 이동 막기
$(document).on('click', 'a[href="#"]', function(e){
	e.preventDefault();
});
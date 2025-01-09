const ui = (function () {
  "use strict";
  console.log('ui.js')

  // 메인 비주얼 슬라이드 슬로건 gif 이미지 hover 처리
  const $listSlogan = $('.list_slogan')
  if ($listSlogan.length) {
    $listSlogan.on('mouseenter', 'a', function () {
      const imageUrl = this.querySelector('img').src
      const domain = new URL(imageUrl).origin
      const relativePath = imageUrl.replace(domain, '')
      
      const gifImg = new Image()
      gifImg.alt = ''
      gifImg.src = relativePath.replace(/(\.\w+)$/i, "_hover.gif") + '?' + new Date().getTime()
      gifImg.classList = 'img_hover'
      $(this).find('.box_img').append(gifImg)
  
    }).on('mouseleave', 'a', function () {
      $(this).find('.box_img .img_hover').remove()
    })
  }

  // SNS 탭
  const $listSnsMain = $('.list_sns_main')
  if ($listSnsMain.length) {
    const $tabs = $listSnsMain.find('a')
    const $wrapper = $('.area_sns_main')
    const $tabPanels = $wrapper.find('.tab_panel')

    $tabs.on('click', function (e) {
      const $self = $(this);
      if ($self.attr('target') !== '_blank') {
        e.preventDefault();
        const dataSnsTab = $self.parent().data('snsTab');
  
        $tabPanels.removeClass('on').filter(function () {
          return $(this).data('snsTabpanel') === dataSnsTab;
        }).addClass('on');
  
        $tabs.attr('aria-selected', 'false');
        $self.attr('aria-selected', 'true');
      }
    });
  }
  
  // GJFEZ 소식 탭
  const $areaRecent = $('.area_recent')
  if ($areaRecent.length) {
    const $listTabRecent = $('.list_tab_recent')
    const $listTabLink = $listTabRecent.find('a')
    
    $listTabRecent.on('click', 'a', function (e) {
      e.preventDefault();
      const $self = $(this)
      const index = $listTabLink.index(this)
  
      if ($self.attr('aria-selected') !== 'true') {
        $listTabLink.attr('aria-selected', 'false')
        $self.attr('aria-selected', 'true')
      }
  
      $areaRecent.find('.tab_panel').removeClass('on')
      $areaRecent.find('.tab_panel').eq(index).addClass('on')
    })
  }
  
  /**
   * 슬라이드가 움직였을 때 정지 버튼(재생중)을 활성화(.active) 하고 재생 버튼(정지중)을 비활성화
   * 즉 정지 된 상태를 재생중 상태로 버튼 변경
   * @param {HTMLElement} play - Play 버튼 요소
   * @param {HTMLElement} pause - Pause 버튼 요소
   */
  const updatePlayPauseButtonIcon = (play, pause) => {
    if (play && pause && play.classList.contains('active')) {
      play.classList.remove('active')
      pause.classList.add('active')
    }
  }

  // 정지/재생 버튼 토글 기능
  const handlePauseAndResume = (btn, callback) => {
    if (btn) {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        this.classList.remove('active') // 클릭한 버튼 remove active
        const siblings = Array.from(this.parentNode.children).filter(child => child.classList.contains('btn_ctrl'));
        const arr = siblings.filter(btn => btn !== this)
        arr[0].classList.add('active') // 클릭한 버튼 형제요소 add active (클릭한 요소 이외에 .btn_ctrl 요소가 1개일 때만 유호)
  
        callback();
      });
    }
  };

  // 메인 비주얼 슬라이드
  const $slideMainVisual = $('.slide_main_visual')
  if ($slideMainVisual.length) {
    const slideMainVisual = $slideMainVisual.get(0)
    const prevEl = slideMainVisual.querySelector('.btn_prev')
    const nextEl = slideMainVisual.querySelector('.btn_next')
    const pause = slideMainVisual.querySelector('.pause')
    const play = slideMainVisual.querySelector('.play')
    const pagingEl = slideMainVisual.querySelector('.wrap_paging')
    const barProgress = slideMainVisual.querySelector('.bar_progress');

    const swiperOptions = {
      on: {
        init: (swiper) => {
          const animationDuration = swiper.params.autoplay.delay / 1000
          if (barProgress) {
            barProgress.style.animationDuration = `${animationDuration}s`;
            barProgress.classList.add('active');
          }
        },
        transitionStart: () => { // 다음이든 이전이든 슬라이드가 넘어가지 않아도 트렌지션이 시작되면 발생함
          updatePlayPauseButtonIcon(play, pause)
          barProgress.classList.remove('active')
          if (play && pause) {
            pause.disabled = true
            play.disabled = true
          }
        },
        transitionEnd: () => { // 다음이든 이전이든 슬라이드가 넘어가지 않아도 트렌지션이 끝나면 발생함
          barProgress.classList.add('active')
          if (play && pause) {
            pause.disabled = false
            play.disabled = false
          }
        },
        autoplayPause: () => {
          barProgress.classList.add('pause')
        },
        autoplayResume: () => {
          barProgress.classList.remove('pause')
        },
        lock: (swiper) => {
          swiper.el.classList.add('inactive')
          swiper.params.loop = false
        },
        unlock: (swiper) => {
          swiper.el.classList.remove('inactive')
          swiper.params.loop = true
        },
      },
      a11y: {
        containerMessage: '메인 비주얼 슬라이드', // 슬라이드 컨테이너의 제목(기본값 null)
        prevSlideMessage: '이전 슬라이드',
        nextSlideMessage: '다음 슬라이드',
        slideLabelMessage: '현재 슬라이드 : {{index}} / 전체 슬라이드 : {{slidesLength}}',
      },
      speed: 500,
      effect: "fade",
      loop: true,
      autoplay: {
        delay: 6000, // autoplay 간격
      },
      preventInteractionOnTransition: true, // 트렌지션 중에 슬라이드 변경 막기 (기본값 false) - 제이쿼리의 .stop() 역할
      navigation: { prevEl, nextEl },
      pagination: {
        el: pagingEl,
        type: 'custom',
        renderCustom: (swiper, current, total) => {
          return `<span class="blind">현재 슬라이드 번호 : </span><em>${current}</em>/<span class="blind">총 슬라이드 : </span>${total}`;
        }
      },
    }

    const swiper = new Swiper('.slide_main_visual', swiperOptions)
    
    handlePauseAndResume(pause, () => swiper.autoplay.pause())
    handlePauseAndResume(play, () => swiper.autoplay.resume())
  }

  // 팝업존 슬라이드
  if ($('.slide_popup_zone').length) {
    const areaSlide = document.querySelector('.area_popup_zone')
    const slide = areaSlide.querySelector('.swiper')
    const prevEl = areaSlide.querySelector('.btn_prev')
    const nextEl = areaSlide.querySelector('.btn_next')
    const pause = areaSlide.querySelector('.pause')
    const play = areaSlide.querySelector('.play')
    
    const swiperOptions = {
      on: {
        transitionStart: () => { // 다음이든 이전이든 슬라이드가 넘어가지 않아도 트렌지션이 시작되면 발생함
          updatePlayPauseButtonIcon(play, pause)
          if (play && pause) {
            pause.disabled = true
            play.disabled = true
          }
        },
        transitionEnd: () => { // 다음이든 이전이든 슬라이드가 넘어가지 않아도 트렌지션이 시작되면 발생함
          if (play && pause) {
            pause.disabled = false
            play.disabled = false
          }
        },
        lock: (swiper) => {
          swiper.el.parentNode.classList.add('inactive')
          swiper.params.loop = false
        },
        unlock: (swiper) => {
          swiper.el.parentNode.classList.remove('inactive')
          swiper.params.loop = true
        },
      },
      a11y: {
        containerMessage: 'Popup Zone 배너 슬라이드', // 슬라이드 컨테이너의 제목(기본값 null)
        prevSlideMessage: '이전 슬라이드',
        nextSlideMessage: '다음 슬라이드',
        slideLabelMessage: '현재 슬라이드 : {{index}} / 전체 슬라이드 : {{slidesLength}}',
      },
      loop: true,
      autoplay: {
        delay: 4000, // autoplay 간격
        pauseOnMouseEnter: true, // 자동재생시 마우스 올리면 정지 (기본값 false)
      },
      navigation: { prevEl, nextEl },
      
    }
    const swiper = new Swiper(slide, swiperOptions)
    
    handlePauseAndResume(pause, () => swiper.autoplay.pause())
    handlePauseAndResume(play, () => swiper.autoplay.resume())
  }
  
  // 카드뉴스, 뉴스레터
  const $slideMainGallery = $('.slide_main_gallery')
  if ($slideMainGallery.length) {
    const $slide = $slideMainGallery
    
    $slide.each(function (idx, el) {
      const $el = $(el)
      const areaSlide = $el.parent('.gallery_news').get(0)
      const prevEl = areaSlide.querySelector('.btn_prev')
      const nextEl = areaSlide.querySelector('.btn_next')
      const pause = areaSlide.querySelector('.pause')
      const play = areaSlide.querySelector('.play')

      const swiperOptions = {
        a11y: {
          containerMessage: idx === 0 ? '카드뉴스 슬라이드' : '뉴스레터', // 슬라이드 컨테이너의 제목(기본값 null)
          prevSlideMessage: '이전 슬라이드',
          nextSlideMessage: '다음 슬라이드',
          slideLabelMessage: idx === 0 ? '현재 슬라이드 : {{index}} / 전체 슬라이드 : {{slidesLength}}' : '',
        },
        on: {
          transitionStart: () => { // 다음이든 이전이든 슬라이드가 넘어가지 않아도 트렌지션이 시작되면 발생함
            updatePlayPauseButtonIcon(play, pause)
            if (play && pause) {
              pause.disabled = true
              play.disabled = true
            }
          },
          transitionEnd: () => { // 다음이든 이전이든 슬라이드가 넘어가지 않아도 트렌지션이 시작되면 발생함
            if (play && pause) {
              pause.disabled = false
              play.disabled = false
            }
          },
          lock: (swiper) => {
            swiper.el.classList.add('inactive')
            swiper.params.loop = false
          },
          unlock: (swiper) => {
            swiper.el.classList.remove('inactive')
            swiper.params.loop = true
          },
        },
        loop: true,
        autoplay: {
          delay: 4000, // autoplay 간격
          pauseOnMouseEnter: true, // 자동재생시 마우스 올리면 정지 (기본값 false)
        },
        navigation: { prevEl, nextEl },
        slidesPerView: 1, // 화면에 슬라이드를 몇개 노출 시킬 것인지 ('auto'는 요소(.swiper-slide) 자체 너비)
        spaceBetween: '10', // 슬라이드간 간격 너비(px)
      }

      const swiper = new Swiper(el, swiperOptions)
      handlePauseAndResume(pause, () => swiper.autoplay.pause())
      handlePauseAndResume(play, () => swiper.autoplay.resume())
    })

  }

  // 비전/사역 슬라이드
  const $slideVisionWrap = $('.slide_vision_wrap')
  if ($slideVisionWrap.length) {
    const $slide = $slideVisionWrap
    
    $slide.each(function (idx, el) {
      const $el = $(el)
      const areaSlide = $el.parent('.sector_box').get(0)
      const prevEl = areaSlide.querySelector('.btn_prev')
      const nextEl = areaSlide.querySelector('.btn_next')
      const pause = areaSlide.querySelector('.pause')
      const play = areaSlide.querySelector('.play')

      const swiperOptions = {
        a11y: {
          containerMessage: idx === 0 ? '카드뉴스 슬라이드' : '뉴스레터', // 슬라이드 컨테이너의 제목(기본값 null)
          prevSlideMessage: '이전 슬라이드',
          nextSlideMessage: '다음 슬라이드',
          slideLabelMessage: idx === 0 ? '현재 슬라이드 : {{index}} / 전체 슬라이드 : {{slidesLength}}' : '',
        },
        on: {
          transitionStart: () => { // 다음이든 이전이든 슬라이드가 넘어가지 않아도 트렌지션이 시작되면 발생함
            updatePlayPauseButtonIcon(play, pause)
            if (play && pause) {
              pause.disabled = true
              play.disabled = true
            }
          },
          transitionEnd: () => { // 다음이든 이전이든 슬라이드가 넘어가지 않아도 트렌지션이 시작되면 발생함
            if (play && pause) {
              pause.disabled = false
              play.disabled = false
            }
          },
          lock: (swiper) => {
            swiper.el.classList.add('inactive')
            swiper.params.loop = false
          },
          unlock: (swiper) => {
            swiper.el.classList.remove('inactive')
            swiper.params.loop = true
          },
        },
        loop: true,
        autoplay: {
          delay: 4000, // autoplay 간격
          pauseOnMouseEnter: true, // 자동재생시 마우스 올리면 정지 (기본값 false)
        },
        navigation: { prevEl, nextEl },
        slidesPerView: 1, // 화면에 슬라이드를 몇개 노출 시킬 것인지 ('auto'는 요소(.swiper-slide) 자체 너비)
        spaceBetween: '10', // 슬라이드간 간격 너비(px)
      }

      const swiper = new Swiper(el, swiperOptions)
      handlePauseAndResume(pause, () => swiper.autoplay.pause())
      handlePauseAndResume(play, () => swiper.autoplay.resume())
    })

  }

  function MoveResponse( options ) {
		this.setting = {
			section: window,
			transition: '0s'
		},
		this.options = $.extend( {}, this.setting, options ),
		this.screenX, this.screenY, this.x, this.y, this.x2, this.y2, this.targetElementArr, this.transition, this.targetName, this.offsetX, this.offsetY, this.targetRrangeValue, this.moveX, this.moveY;
		this._init( this.options );
		this._initEvent();
	}
	MoveResponse.prototype = {
		_init: function( options ) {
			this.screenX = 0,
			this.screenY = 0,
			this.x = 0,
			this.y = 0,
			this.x2 = 0,
			this.y2 = 0,
			this.targetElementArr = options.target;
			this.transition = options.transition;
			this.section = $( options.section );
		},
		_initEvent: function() {
			this._area();
			this._start();
		},
		_area: function () {
			var self = this;
			this.section.on('mousemove', function (e) {
				self.offsetX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX)),
				self.offsetY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
				self.screenX = 20 * self.offsetX / 100;
				self.screenY = 20 * self.offsetY / 100;
			});
		},
		_start: function() {
			var self = this;
			function moveIn() {
				self.x += (self.screenX - self.x) / 20;
				self.y += (self.screenY - self.y) / 20;
				self.x2 += (self.screenX - self.x) / 10;
				self.y2 += (self.screenY - self.y) / 10;
				self.x2 = parseFloat(self.x2.toFixed(2), 10);
				self.y2 = parseFloat(self.y2.toFixed(2), 10);

				for ( self.targetName in self.targetElementArr ) {
					self.targetRrangeValue = self.targetElementArr[ self.targetName ];
					if ( typeof self.targetRrangeValue === 'number' ) {
						self.moveX = self.targetRrangeValue,
						self.moveY = 0;
					} else {
						self.moveX = self.targetRrangeValue[0],
						self.moveY = self.targetRrangeValue[1];
					}
					$( self.targetName ).css({
						'transform': 'translate3d(' + self.x2 * self.moveX +'px, ' + self.y2 * self.moveY + 'px, 0px)',
						'transition': self.transition
					});
				}
				window.requestAnimationFrame( moveIn );
			}
			setTimeout( moveIn, 1500);
		}
	}
	
  new MoveResponse({
		section: '.section_main1',
		target: {
			'.list_slogan .item_slogan1 a': [0.35, 0.35],
			'.list_slogan .item_slogan2 a': [-0.45, 0.45],
			'.list_slogan .item_slogan3 a': [-0.55, -0.55],
		}
	});

  AOS.init({
    easing: 'ease-out-back',
    duration: 1000,
    disable: () => window.innerWidth < 1400,
  })

  return {}
})()

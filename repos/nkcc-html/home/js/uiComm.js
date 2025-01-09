const uiComm = (function () {
  "use strict";
  console.log('uiComm.js')

  // 공통 화면 fixed / unfixed
  let currentScrollTop = null;
  const $body = $('body');
  const $window = $(window);

  const unfixedBody = () => {
    $body.removeAttr('style');
    $window.scrollTop(currentScrollTop);
  }

  const fixedBody = () => {
    const isOverflow = $body.get(0).clientHeight < $body.get(0).scrollHeight;

    currentScrollTop = $window.scrollTop();
    const styles = {
      position: 'fixed',
      top: -currentScrollTop,
      left: 0,
      right: 0,
      bottom: 0,
      overflowY: isOverflow ? 'scroll' : '',
    }
    $body.css(styles)
  }
  
  /**
   * 슬라이드가 회전할 수 없는 상태의 슬라이드 아이템 갯수일 경우 inactive 클래스 추가 기능
   * @param {Object} swiper - Swiper 객체
   * @param {String | jQuery | HTMLElement | Function} [classTarget] - (옵션) inactive 클래스가 추가될 HTMLElement 요소(기본값 : 해당 슬라이드의 .swiper 요소)
   */
  const inactiveStatusCheck = (swiper, classTarget) => {
    const { el, slides, params } = swiper
    let target = null
    
    try {
      if (typeof classTarget === 'function') {
        target = classTarget(swiper)
      } else if (typeof classTarget === 'string') {
        // 셀렉터
        target = document.querySelector(classTarget)
      } else if (!classTarget) {
        // 인자 없음
        target = el
      } else if (classTarget instanceof jQuery) {
        // jQuery 객체
        if (classTarget.length) {
          target = classTarget.get(0)
        } else {
          throw new Error('jQuery 객체 대상 요소를 찾을 수 없습니다.')
        }
      } else if (classTarget.nodeType && classTarget.nodeType === 1) {
        // HTMLElement
        target = classTarget
      } else {
        throw new Error('올바르지 않은 대상입니다.')
      }
      const isInactive = target.classList.contains('inactive')
      if (params.slidesPerView >= slides.length) {
        if (!isInactive) target.classList.add('inactive')
      } else {
        if (isInactive) target.classList.remove('inactive')
      }
    } catch (error) {
      console.log('오류 발생', error)
    }
  }
  /**
   * 슬라이드가 움직였을 때 정지 버튼(재생중)을 활성화(.active) 하고 재생 버튼(정지중)을 비활성화
   * @param {HTMLElement} play - Play 버튼 요소
   * @param {HTMLElement} pause - Pause 버튼 요소
   */
  const updatePlayPauseButtonIcon = (play, pause) => {
    if (play && pause && play.classList.contains('active')) {
      play.classList.remove('active')
      pause.classList.add('active')
    }
  }

  // pc gnb
  const $pcGnbArea = $('.pc_gnb_area')
  if ($pcGnbArea.length) {
    const $gnbLinkDepth1 = $('.pc_gnb > li')
    
    $('.pc_gnb').on('focusin mouseenter', function () {
      $pcGnbArea.addClass('on')
    })

    $gnbLinkDepth1.on('focusin mouseenter', function () {
      $gnbLinkDepth1.removeClass('on')
      $(this).addClass('on')
    })
    
    const gnbClose = () => {
      $pcGnbArea.removeClass('on')
      $gnbLinkDepth1.removeClass('on')
    }
    $pcGnbArea.on('mouseleave', gnbClose)
    $('.pc_gnb_area h1 a, .info_menus .link_lang').on('focus', gnbClose)
  }

  // pc 언어설정
  const $setLang = $('.set_lang')
  if ($setLang.length) {
    const $linkLang = $setLang.find('.link_lang')
    $setLang.on('click', function () {
      const isExpanded = $linkLang.attr('aria-expanded') === 'true'
      $linkLang.attr('aria-expanded', isExpanded ? 'false' : 'true')
    })
    $('.btn_sitemap, .pc_gnb').on('focusin', function () {
      $linkLang.attr('aria-expanded', 'false')
    })
  }

  // 모바일 메뉴 열고 닫는 토글
  const $btnSitemap = $('.m_gnb_area .btn_sitemap')
  if ($btnSitemap.length) {
    $btnSitemap.click(function() {
      const $self = $(this)
      if ($self.attr('aria-expanded') === 'true') {
        $self.attr('aria-expanded', 'false');
        unfixedBody()
      } else {
        $self.attr('aria-expanded', 'true');
        fixedBody()
      }
    });
  }

  // 모바일 Gnb - 1뎁스 메뉴 클릭
  const $mGnb = $('.m_gnb')
  if ($mGnb.length) {
    const toggleSpeed = 250
    $mGnb.on('click', '.link_depth1', function () {
      const $self = $(this)
      if ($self.attr('aria-expanded') === 'true') {
        // 펼쳐져 있는 메뉴 클릭 했을 경우
        $self.attr('aria-expanded', 'false')
        $self.next().stop().slideUp(toggleSpeed)
      } else {
        // 접혀져 있는 메뉴 클릭 했을 경우
        $mGnb.find('.link_depth1').attr('aria-expanded', 'false')
        $mGnb.find('.m_gnb_depth2').stop().slideUp(toggleSpeed)
        $self.attr('aria-expanded', 'true')
        $self.next().stop().slideDown(toggleSpeed)
      }
    })
  }

  // 모바일 메뉴 열려진 상황에서 pc 화면 전환시 스크롤 고정 해제 기능
  $window.on('resize', function () {
    const $btnMenu = $('.m_gnb_area .btn_sitemap')
    const isLargeScreen = $window.outerWidth() >= 1400;
    const isMenuOpen = $btnMenu.attr('aria-expanded') === 'true'
    
    if (isLargeScreen && isMenuOpen) {
      $btnMenu.attr('aria-expanded', 'false')
      unfixedBody()
    }
  })

  // Footer - 맨 위로 버튼
  const $btnTop = $('.footer_comm .btn_top');
  if ($btnTop.length) {
    const $window = $(window);
    const $footer = $('.footer_comm');

    function btnScrollTop() {
      $('html, body').animate({
        scrollTop: 0
      }, 300)
    }
    // Footer - 맨 위로 버튼 > 버튼 고정 시점 체크
    function isBtnTopFixed() {
      const windowHeight = $window.outerHeight();
      const documentHeight = $(document).outerHeight();
      const footerHeight = $footer.outerHeight();
      const windowScroll = $window.scrollTop();
      const btnFixedValue = $btnTop.outerHeight() / 2 + parseFloat($btnTop.css('bottom'));
      const fixedBtnTop = documentHeight - windowHeight - footerHeight + btnFixedValue;
      
      $btnTop.toggleClass('btn_fix', windowScroll >= fixedBtnTop)
    }
    // Footer - 맨 위로 버튼 > 버튼 노출 시점 체크
    function isBtnTopVisible (scrollThreshold) {
      const $header = $('.header_comm');
      const windowScroll = $window.scrollTop();
      const headerHeight = $header.outerHeight();

      // 기본값으로 헤더의 높이를 사용
      const threshold = typeof scrollThreshold === 'number' ? scrollThreshold : headerHeight;

      // 스크롤 위치가 scrollThreshold 값을 초과하면 버튼 노출
      const isVisible = windowScroll > threshold;
      $btnTop.toggleClass('on', isVisible)
    }
    // Footer - 맨 위로 버튼 > 이벤트 등록
    function handleBtnTopScroll() {
      isBtnTopFixed();
      isBtnTopVisible();
    }
    $btnTop.on('click', btnScrollTop);
    $window.on('scroll', handleBtnTopScroll);
    handleBtnTopScroll();
  }

  // 관련사이트
  const $slideRelateSite = $('.slide_relate_site')
  if ($slideRelateSite.length) {
    const areaSlide = document.querySelector('.area_relate')
    const slide = $slideRelateSite.get(0)
    const prevEl = areaSlide.querySelector('.btn_prev')
    const nextEl = areaSlide.querySelector('.btn_next')
    const pause = areaSlide.querySelector('.pause')
    const play = areaSlide.querySelector('.play')

    const swiperOptions = {
      a11y: {
        containerMessage: '관련사이트 모음 슬라이드', // 슬라이드 컨테이너의 제목(기본값 null)
        prevSlideMessage: '이전 슬라이드',
        nextSlideMessage: '다음 슬라이드',
        slideLabelMessage: '현재 슬라이드 : {{index}} / 전체 슬라이드 : {{slidesLength}}',
      },
      on: {
        init: (swiper) => {
          inactiveStatusCheck(swiper)
        },
        slideChange: (swiper) => {
          inactiveStatusCheck(swiper)
          updatePlayPauseButtonIcon(play, pause)
        },
      },
      loop: true,
      autoplay: {
        delay: 1000, // autoplay 간격
        pauseOnMouseEnter: true, // 자동재생시 마우스 올리면 정지 (기본값 false)
      },
      navigation: { prevEl, nextEl },
      slidesPerView: 'auto',
      spaceBetween: '20',
    }

    const swiper = new Swiper(slide, swiperOptions)
    

    $(pause).on('click', (e) => {
      e.preventDefault()
      swiper.autoplay.pause()
      pause.classList.remove('active')
      play.classList.add('active')
    })

    $(play).on('click', (e) => {
      e.preventDefault()
      swiper.autoplay.resume()
      play.classList.remove('active')
      pause.classList.add('active')
    })
  }

  return {}
})()
$(document).ready(function() {
    // NFT Ship Slide
    var sliderWidth, spaceWidth = 0;
    if (window.innerWidth < 1024){
        sliderWidth = (window.innerWidth * 0.6);
        spaceWidth = (window.innerWidth * 0.05);
    } else {
        sliderWidth = 300;
        spaceWidth = 40;
    }
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: spaceWidth,
        width: sliderWidth,
        initialSlide: 1,
        centeredSlides: true,
        loop: true,
        loopAdditionalSlides : 8,
        autoplay: {     //자동슬라이드 (false-비활성화)
            delay: 5000, // 시간 설정
            disableOnInteraction: false, // false-스와이프 후 자동 재생
        },
    });
});

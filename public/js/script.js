
/*
 * 2021.04.14 Nuga Jang
 */
document.oncontextmenu=function(){return false;} // 우클릭 방지
document.onselectstart=function(){return false;} // 드래그 방지
document.ondragstart=function(){return false;} // 선택 방지
$(document).ready(function() {
    // a href # 이동 막기
    $(document).on('click', 'a[href="#"]', function(e){
        e.preventDefault();
    });

    // 작업 진행내용 있는 경우
    if($('.co-progress')){
        // 작업 진행도 바
        var taskNum = $('.co-list > li').length;
        var checkNum = $('.co-list > li').has('.fa-check-circle').length;
        var progress = checkNum / taskNum * 100
        // 소수점 표시
        // $('#progressNum').text(progress.toFixed(1)+'%');
        // $('#progressBar').progressbar({ value: progress });
        // 정수 표시
        $('#progressNum').text(Math.round(progress) + '%');
        $('#progressBar').progressbar({ value: Math.round(progress) });

        // 작업 진행상태 클릭
        $('.progress').on('click',function(){
            $(this).siblings('a').removeClass('active');
            $(this).addClass('active');
            
            var progress = $(this).data('progress');
            if( progress == 'done') {
                $('.co-list > li').hide();
                $('.co-list > li').has('.fa-check-circle').fadeIn();
            } else if (progress == 'working') {
                $('.co-list > li').hide();
                $('.co-list > li').has('.fa-tools').fadeIn();
            } else {
                $('.co-list > li').fadeIn();
            }
        });
    }

    // 사이트맵 메뉴 숨김 버튼
    if($('.btn_hide1') || $('.btn_hide2')){
        var btn_hide1_click=0;
        var btn_hide2_click=0;
        $('.btn_hide1').on('click',function(){
            $('.sitemap > li > ul > li > ul').slideToggle(200);		
            btn_hide1_click++;
            if(btn_hide1_click % 2 == 0){
                $(this).removeClass('hide');
                $(this).html('2차메뉴 <i class="fas fa-eye">');
            } else {
                $(this).addClass('hide');
                $(this).html('2차메뉴 <i class="fas fa-eye-slash">');
            }
        });
        $('.btn_hide2').on('click',function(){
            $('.sitemap > li > ul > li > ul > li > ul').slideToggle(200);				
            btn_hide2_click++;
            if(btn_hide2_click % 2 == 0){
                $(this).removeClass('hide');
                $(this).html('3차메뉴 <i class="fas fa-eye">');
            } else {
                $(this).addClass('hide');
                $(this).html('3차메뉴 <i class="fas fa-eye-slash">');
            }
        });
    }
});
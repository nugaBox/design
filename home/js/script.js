
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

    // 작업 진행도 바
    var taskNum = $('li').length;
    var checkNum = $('.fa-check-circle').length;
    var progress = checkNum / taskNum * 100
    $('#progressNum').text(progress.toFixed(1)+'%');
    $('#progressBar').progressbar({ value: progress });
    
    // 사이트맵 메뉴 숨김 버튼
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
});

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
});
/********************************************************************************************************* 
## Sub Script ## 
* 본 스크립트의 저작권은 (주)웹스리퍼블릭에 있습니다. 
* 본 스크립트를 무단으로 이용(또는 도용)하거나 복제 또는 수정 사용시 저작권법에 의거 처벌받을 수 있습니다. 
* 구매 후에도 제 2차 사이트 등 라이선스가 적용되지 않는 사이트에 대하여 사용은 금지되어 있습니다. 
* 위 사항에 대하여 위반시 절대 합의는 없습니다 ! 
* date : 2017-03-15 
* author : Park Soo Hyun (shpark7502@naver.com) 
*********************************************************************************************************/ 
// 파라메터 값 가져오기 
var getUrlParameter = function getUrlParameter(sParam) { 
var sPageURL = decodeURIComponent(window.location.search.substring(1)), 
sURLVariables = sPageURL.split('&'), 
sParameterName, 
i; 
for (i = 0; i < sURLVariables.length; i++) { 
sParameterName = sURLVariables[i].split('='); 
if (sParameterName[0] === sParam) { 
return sParameterName[1] === undefined ? true : sParameterName[1]; 
} 
} 
}; 
// 서브페이지 공통 함수 
$(function() { 
var $container = $("#container"); 
// 서브 비주얼 이미지 페이드 변수 정의 
var $slides = $("#sub_visual > ul > li"); 
var $sIndex = 0; 
var $stayTime = 4; 
var $slideTime = 1.3; 
// 1차 드롭다운 메뉴 자동 생성 
function majorCreate() { 
var $d1url = []; 
var $d1title = []; 
var $d1html; 
var i = 0; 
$("#gnb > li").each(function() { 
$d1url[i] = $(this).children('a').attr('href'); 
$d1title[i] = $(this).children('a').text(); 
i++; 
}); 
for(n=0; n<i; n++) { 
$d1html = '<li><a href="' + $d1url[n] + '"><span>' + $d1title[n] + '</span></a></li>'; 
$("#nav .depth1 .mnuList").append($d1html); 
} 
} 
majorCreate(); 
// 2차 드롭다운 메뉴 자동 생성 
function minorCreate() { 
var $d2url = []; 
var $d2title = []; 
var $d2html; 
var $currIndex = 0; 
if($container.data('menu-special')) { 
$currIndex = $container.data('menu-special') - 1; 
} else { 
$currIndex = getUrlParameter('top') - 1; 
} 
var i = 0; 
$("#gnb ul.sub").each(function() { 
if($(this).parent().index() == $currIndex) { 
for(i=0; i<$(this).children().length; i++) { 
$d2url[i] = $(this).children().eq(i).find('a').attr('href'); 
$d2title[i] = $(this).children().eq(i).find('a').text(); 
} 
} 
}); 
for(n=0; n<i; n++) { 
$d2html = '<li><a href="' + $d2url[n] + '"><span>' + $d2title[n] + '</span></a></li>'; 
$("#nav .depth2 .mnuList").append($d2html); 
} 
} 
minorCreate(); 
// 1차 드롭다운 메뉴 활성화 
function majorActive() { 
var currIndex = 0; 
if($container.data('menu-special')) { 
currIndex = $container.data('menu-special') - 1; 
} else { 
currIndex = getUrlParameter('top') - 1; 
} 
var currMenu = $("#nav .depth1 ul.mnuList li").eq(currIndex).text(); 
$("#nav .depth1 > a > span").text(currMenu); 
} 
// 2차 드롭다운 메뉴 활성화 
function minorActive() { 
var currIndex = 0; 
if($container.data('sub-special')) { 
currIndex = $container.data('sub-special') - 1; 
} else { 
currIndex = getUrlParameter('sub') - 1; 
} 
var currMenu = $("#nav .depth2 ul.mnuList li").eq(currIndex).text(); 
$("#nav .depth2 > a > span").text(currMenu); 
} 
// 서브 비주얼 텍스트 자동 동기화 
function initTitle() { 
var majorTitle = $("#nav .depth1 > a > span").text(); 
var minorTitle = $("#nav .depth2 > a > span").text(); 
$("#sub_visual > .title > .inner > h2").text(majorTitle); 
$("#sub_visual > .title > .inner > h3").text(minorTitle); 
} 
// 드롭박스 메뉴 클릭 처리 
$("#nav .dropdown > a").click(function() { 
if(!$(this).parent('.dropdown').hasClass('open')) { 
$("#nav .dropdown").removeClass('open'); 
$("#nav .dropdown > ul.mnuList").stop(true,false).fadeOut(200); 
$(this).parent('.dropdown').addClass('open'); 
$(this).siblings('ul.mnuList').stop(true,false).fadeIn(200); 
} else { 
$(this).parent('.dropdown').removeClass('open'); 
$(this).siblings('ul.mnuList').stop(true,false).fadeOut(200); 
} 
}); 
// 모바일 드롭박스 메뉴 클릭 처리 
$("#leftBar a.dropdown").click(function(e) { 
e.preventDefault(); 
if(!$(this).hasClass('open')) { 
$(this).addClass('open'); 
$("#lnb").stop(true,false).slideDown(300); 
} else { 
$(this).removeClass('open'); 
$("#lnb").stop(true,false).slideUp(300); 
} 
}); 

function activeMobileNav() { 
var topIndex = getUrlParameter('top') - 1; 
var subIndex = getUrlParameter('sub') - 1; 
$(".menuzord-menu > li").eq(topIndex).addClass('active'); 
$(".menuzord-menu > li").eq(topIndex).find('ul').css('display', ''); 
$(".menuzord-menu > li").eq(topIndex).find('ul').children().eq(subIndex).addClass('active'); 
} 



// 드롭박스 메뉴 동기화 
$(window).load(function() { 
majorActive(); 
minorActive(); 
initTitle(); 
activeMobileNav(); 
}); 
}); 
// 포토갤러리 커스터마이징 
$(function() { 
var subject = new Array(); // 갤러리 썸네일 제목 배열변수 선언 
var content = new Array(); // 갤러리 썸네일 내용 배열변수 선언 
var url = new Array(); // 각 썸네일별 링크 저장용 변수 
var thumbCount; // 썸네일 개수 (추출개수) 
var refHeight; // 높이 동기화를 위한 변수 
// 갤러리 초기세팅 
function galleryInit() { 
if($(".bbsnewf5").length > 0) { 
thumbCount = $(".gallery_inner .bbsnewf5").length; 
if($(".hoverBox").length > 0) { 
$(".hoverBox").parent('a').remove(); 
} 
for(i=0; i<thumbCount; i++) { 
url[i] = $(".gallery_inner .bbsnewf5").eq(i).find('a:first').attr('href'); 
subject[i] = $(".gallery_inner .bbsnewf5").eq(i).find('.gallery_title').text(); 
content[i] = $(".gallery_inner .bbsnewf5").eq(i).find('.gallery_etc').text().replace('[간략설명 : ','').replace(', 작성자 :' ,'<br><br>').replace(']' ,'').replace(', 작성일자 :' ,'&nbsp;&nbsp;|&nbsp;'); 
// 썸네일 있는 td 내부에 hover 효과를 주기 위한 박스 태그 생성 (각각 썸네일 내에 반복문으로 삽입) 
//$(".gallery_inner .bbsnewf5").eq(i).find('table td:first').append('<a href="' + url[i] + '"><div class="hoverBox"><div class="inner"><h3>' + subject[i] + '</h3><p>' + $.trim(content[i]) + '</p></div></div></a>'); 
$(".gallery_inner .bbsnewf5").eq(i).find('table td:first').append('<div class="inner post-details padding-40px-all sm-padding-20px-all"><a href="' + url[i] + '" class="alt-font post-title text-medium text-extra-dark-gray width-100 display-block md-width-100 margin-15px-bottom">' + subject[i] + '</a><p>' + $.trim(content[i]) + '</p></div>'); 
} 
// 기존에 보여지는 별도 td 의 제목, 내용은 숨김 
$(".gallery_subject, .gallery_etc").css('display','none'); 
} 
} 
// 갤러리 호버박스 높이 동기화 
/* 
function syncHeight() { 
if($(".bbsnewf5").length > 0) { 
refHeight = $(".hoverBox").parents('.bbsnewf5').height(); 
$(".hoverBox").css('height',refHeight + 'px'); 
} 
} 
*/ 
// 갤러리 호버박스 높이 동기화 타이머 
/* 
if($(".bbsnewf5").length > 0) { 
var tmrSync = setInterval(function() { syncHeight() }, 30); 
} 
*/ 
// 테이블 애니메이션 
function tableShow() { 
if($(".gallery_inner").length > 0) { 
$(".gallery_inner > table").each(function() { 
if(!$(this).hasClass('-shown')) { 
$(this).addClass('-shown'); 
} 
$(this).addClass('scrollreveal'); 
}); 
} 
} 
// 더보기버튼 생성 
/*function createMoreBtn() { 
var pageCount = $(".brd_paging").find('a').length; 
if($(".gallery_inner").length > 0) { 
if(pageCount > 0) { 
var btn = '<button type="button" class="btn-more scrollreveal" id="btnMoreLoad">더보기 +</button>'; 
$(".board_bottom").before(btn); 
} 
} 
}*/ 
galleryInit(); 
tableShow(); 
/*createMoreBtn();*/ 
// 모든 엘리먼트 로드 후 
$(window).load(function() { 
var loadIndex = 1; 
var wrapper; 
var moreFlag = false; 
var path = $(location).attr('pathname'); 
if($(".gallery_inner").length > 0) { 
wrapper = $(".gallery_inner"); 
} 
// 관리자버튼 삭제 
function adminRemove() { 
$(".gallery_inner > table").each(function() { 
if($(this).attr('bordercolor')) { 
$(this).remove(); 
} 
}); 
} 
// 빈 테이블 삭제 
function emptyRemove() { 
$(".gallery_inner > table").each(function() { 
if($(this).find('td').length < 1) { 
$(this).remove(); 
} 
}); 
} 
// 마지막 페이지인지 체크 
function isLastPage() { 
var currPage = parseInt($(".brd_paging b").text()); 
var pages = $(".brd_paging a"); 
var maxPage = 0; 
pages.each(function() { 
var cnt = parseInt($(this).text()); 
if(cnt >= maxPage) maxPage = cnt; 
}); 
if(currPage >= maxPage) { 
return true; 
} else { 
return false; 
} 
} 
// ajax 로드 처리 
function photoLoadByURL(link) { 
var temp; 
var paging; 
adminRemove(); 
emptyRemove(); 
$.ajax({ 
url: link, 
contentType: 'application/x-www-form-urlencoded;charset=euc-kr', 
beforeSend: function(x) { 
x.overrideMimeType('application/x-www-form-urlencoded;charset=euc-kr'); 
}, 
success:function(data) { 
temp = $(data).find('.gallery_inner').html(); 
paging = $(data).find('.brd_paging').html(); 
$(".brd_paging").html(''); 
$(".brd_paging").html(paging); 
var pageCount = $(".brd_paging").find('a').length; 
if(loadIndex >= pageCount) $("#btnMoreLoad").remove(); 
if(moreFlag === true) { 
wrapper.append(temp); 
} else { 
wrapper.html(temp); 
} 
tableShow(); 
wrapper.children().css('opacity','0'); 
wrapper.children().animate({'opacity':'1'}, 400, function() { 
wrapper.children().css({'opacity':''}); 
}); 
emptyRemove(); 
galleryInit(); 
admBtnReplace(); 
if(pageCount > 0 && !isLastPage() && $("#btnMoreLoad").length < 1) createMoreBtn(); 
}, 
error:function() { 
wrapper.html('오류 : 정상적으로 로드되지 않았습니다.'); 
} 
}); 
} 
// 더보기 버튼 클릭시 
$(document).on('click', '#btnMoreLoad', function() { 
var pageCount = $(".brd_paging").find('a').length; 
var catePath = $(".board_tab > ul > li.on a").attr('href'); 
if(loadIndex < pageCount) { 
loadIndex++; 
} else { 
loadIndex++; 
$("#btnMoreLoad").attr('disabled','disabled'); 
} 
var url = catePath + '&com_board_page=' + loadIndex; 
moreFlag = true; 
photoLoadByURL(url); 
}); 
// 카테고리 탭 클릭시 
$(document).on('click', '.board_tab > ul > li > a', function(e) { 
var url = $(this).attr('href'); 
moreFlag = false; 
loadIndex = 1; 
if(!isPC()) { 
$(".board_tab > a").removeClass('open'); 
$(".board_tab > a").text($(this).text()); 
$(".board_tab > ul").css('display','none'); 
} 
e.preventDefault(); 
$(".board_tab > ul > li").removeClass('on'); 
$(this).parent().addClass('on'); 
photoLoadByURL(url); 
}); 
emptyRemove(); 
}); 
// 카테고리 관련 변수 선언 
var cate_link = [], 
cate_title = [], 
currentURL = $(location).attr('pathname'), 
param = "?&com_board_category_code=", 
currentParam = "", 
insertHTML = "", 
idx = 0; 
// 셀렉트박스 링크화 
if($("select[name='com_board_category_code']").length > 0) { 
currentParam = getUrlParameter('com_board_category_code'); 
$("select[name='com_board_category_code'] > option").each(function() { 
cate_link[idx] = $(this).val(); 
cate_title[idx] = $(this).text(); 
idx++; 
}); 
insertHTML = '<div class="board_tab scrollreveal">'; 
insertHTML += '<a href="javascript:;">' + cate_title[0] + '</a>'; 
insertHTML += '<ul class="clearfix">'; 
for(i=0; i<idx; i++) { 
insertHTML += '<li data-category="' + cate_link[i] + '"><a href="' + currentURL + param + cate_link[i] + '">' + cate_title[i] + '</a></li>'; 
} 
insertHTML += '</ul>'; 
insertHTML += '</div>'; 
$(".cate_select").before(insertHTML); 
$.each(cate_link, function(m, key) { 
if(key == currentParam) { 
$(".board_tab > a").text(cate_title[m]); 
$(".board_tab > ul > li[data-category='" + key + "']").addClass('on'); 
} 
}); 
if(!currentParam) { $(".board_tab > ul > li:first").addClass('on'); } 
} 
// 카테고리 링크 클릭시 
$(document).on('click', '.board_tab > a', function() { 
if(!isPC()) { 
if(!$(this).hasClass('open')) { 
$(this).addClass('open'); 
$(this).next('ul').css('display','block'); 
} else { 
$(this).removeClass('open'); 
$(this).next('ul').css('display','none'); 
} 
} 
}); 
// 윈도우 리사이징 처리 (카테고리 항목 enable/disable) 
$(window).bind('resize', function() { 
if(isPC() && $(".board_tab").length > 0) { 
$(".board_tab > ul").css('display','block'); 
} else if(!isPC()) { 
if(!$(".board_tab > a").hasClass('open')) { 
$(".board_tab > ul").css('display','none'); 
} 
} 
}); 
// 관리자 전용 버튼 replace (ajax 로드시마다 호출) 
function admBtnReplace() { 
var $url = window.location.href; 
var $readpage = $url.indexOf('read_form'); 
$("section .container img").each(function() { 
var $src = $(this).attr('src'); 
// 삭제 
if($src.indexOf('btn_sdel.gif') > -1 && $readpage < 0) { 
var $opt = $(this).attr('onclick'); 
var $link = "<a href='javascript:;' class='btn_w btn-default btn-sm' onclick='" + $opt + "'>삭제</a>"; 
$(this).before($link); 
$(this).remove(); 
} 
// 이동 
if($src.indexOf('move.gif') > -1 && $readpage < 0) { 
var $opt = $(this).attr('onclick'); 
var $link = "<a href='javascript:;' class='btn_w btn-default btn-sm' onclick='" + $opt + "'>이동</a>"; 
$(this).before($link); 
$(this).remove(); 
} 
// 복사 
if($src.indexOf('copy.gif') > -1 && $readpage < 0) { 
var $opt = $(this).attr('onclick'); 
var $link = "<a href='javascript:;' class='btn_w btn-default btn-sm' onclick='" + $opt + "'>복사</a>"; 
$(this).before($link); 
$(this).remove(); 
} 
// 이동 (뷰페이지) 
if($src.indexOf('move.gif') > -1 && $readpage > -1) { 
$(this).parent('a').addClass('btn_w btn-default btn-sm'); 
$(this).parent('a').html('이동'); 
$(this).remove(); 
} 
// 복사 (뷰페이지) 
if($src.indexOf('copy.gif') > -1 && $readpage > -1) { 
$(this).parent('a').addClass('btn_w btn-default btn-sm'); 
$(this).parent('a').html('복사'); 
$(this).remove(); 
} 
// 수정 (뷰페이지) 
if($src.indexOf('modify.gif') > -1 && $readpage > -1) { 
$(this).parent('a').addClass('btn_w btn-default'); 
$(this).parent('a').html('수정'); 
$(this).remove(); 
} 
// 삭제 (뷰페이지) 
if($src.indexOf('delete.gif') > -1 && $readpage > -1) { 
$(this).parent('a').addClass('btn_w btn-default'); 
$(this).parent('a').html('삭제'); 
$(this).remove(); 
} 
// 답글 (뷰페이지) 
if($src.indexOf('reply.gif') > -1 && $readpage > -1) { 
$(this).parent('a').addClass('btn_w btn-default'); 
$(this).parent('a').html('답글쓰기'); 
$(this).remove(); 
} 
}); 
} 
// 일반 기능버튼 replace 
function btnReplace() { 
$("section .container img").each(function() { 
var $src = $(this).attr('src'); 
// 글쓰기 
if($src.indexOf('write.gif') > -1) { 
$(this).parent('a').addClass('btn_w btn-primary'); 
$(this).parent('a').html('<i class="fa fa-pencil"></i>글쓰기'); 
$(this).remove(); 
} 
// 이전 
if($src.indexOf('prev.gif') > -1) { 
$(this).parent('a').addClass('btn_w btn-default btn-sm'); 
$(this).parent('a').html('<i class="fa fa-angle-left"></i>이전'); 
$(this).remove(); 
} 
// 목록보기 
if($src.indexOf('list.gif') > -1) { 
$(this).parent('a').addClass('btn_w btn-default btn-sm'); 
$(this).parent('a').html('<i class="fa fa-list-ul"></i>목록'); 
$(this).remove(); 
} 
// 다음 
if($src.indexOf('next.gif') > -1) { 
$(this).parent('a').addClass('btn_w btn-default btn-sm'); 
$(this).parent('a').html('다음<i class="fa fa-angle-right right"></i>'); 
$(this).remove(); 
} 
// 스팸신고 
if($src.indexOf('spam.gif') > -1) { 
var $opt = $(this).attr('onclick'); 
var $link = '<a href="javascript:;" class="btn_w btn-danger" onclick="' + $opt + '"><i class="fa fa-exclamation-triangle"></i>스팸신고</a>'; 
$(this).before($link); 
$(this).remove(); 
} 
}); 
// 검색 
$("#ext_search input[type=image]").before('<input type="submit" class="btn_w btn-default btn-sm" value="검색" />'); 
$("#ext_search input[type=image]").css('display','none'); 
$(document).on('click', '#ext_search input[type=submit]', function() { 
$("#ext_search input[type=image]").trigger('click'); 
}); 
// 댓글달기 
if($(".board_comment_bgcolor input[type=image]").length > 0) { 
var $link = '<input type="submit" class="btn btn-default btn-lg" value="댓글달기" />'; 
$(".board_comment_bgcolor input[type=image]").before($link); 
$(".board_comment_bgcolor input[type=image]").css('display','none'); 
} 
$(document).on('click', '.board_comment_bgcolor input[type=submit]', function() { 
$(".board_comment_bgcolor input[type=image]").trigger('click'); 
}); 
} 
admBtnReplace(); 
btnReplace(); 
});
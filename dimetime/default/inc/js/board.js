/********************************************************************************************************* 
## Sub Script ## 
* �� ��ũ��Ʈ�� ���۱��� (��)�������ۺ��� �ֽ��ϴ�. 
* �� ��ũ��Ʈ�� �������� �̿�(�Ǵ� ����)�ϰų� ���� �Ǵ� ���� ���� ���۱ǹ��� �ǰ� ó������ �� �ֽ��ϴ�. 
* ���� �Ŀ��� �� 2�� ����Ʈ �� ���̼����� ������� �ʴ� ����Ʈ�� ���Ͽ� ����� �����Ǿ� �ֽ��ϴ�. 
* �� ���׿� ���Ͽ� ���ݽ� ���� ���Ǵ� �����ϴ� ! 
* date : 2017-03-15 
* author : Park Soo Hyun (shpark7502@naver.com) 
*********************************************************************************************************/ 
// �Ķ���� �� �������� 
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
// ���������� ���� �Լ� 
$(function() { 
var $container = $("#container"); 
// ���� ���־� �̹��� ���̵� ���� ���� 
var $slides = $("#sub_visual > ul > li"); 
var $sIndex = 0; 
var $stayTime = 4; 
var $slideTime = 1.3; 
// 1�� ��Ӵٿ� �޴� �ڵ� ���� 
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
// 2�� ��Ӵٿ� �޴� �ڵ� ���� 
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
// 1�� ��Ӵٿ� �޴� Ȱ��ȭ 
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
// 2�� ��Ӵٿ� �޴� Ȱ��ȭ 
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
// ���� ���־� �ؽ�Ʈ �ڵ� ����ȭ 
function initTitle() { 
var majorTitle = $("#nav .depth1 > a > span").text(); 
var minorTitle = $("#nav .depth2 > a > span").text(); 
$("#sub_visual > .title > .inner > h2").text(majorTitle); 
$("#sub_visual > .title > .inner > h3").text(minorTitle); 
} 
// ��ӹڽ� �޴� Ŭ�� ó�� 
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
// ����� ��ӹڽ� �޴� Ŭ�� ó�� 
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



// ��ӹڽ� �޴� ����ȭ 
$(window).load(function() { 
majorActive(); 
minorActive(); 
initTitle(); 
activeMobileNav(); 
}); 
}); 
// ���䰶���� Ŀ���͸���¡ 
$(function() { 
var subject = new Array(); // ������ ����� ���� �迭���� ���� 
var content = new Array(); // ������ ����� ���� �迭���� ���� 
var url = new Array(); // �� ����Ϻ� ��ũ ����� ���� 
var thumbCount; // ����� ���� (���ⰳ��) 
var refHeight; // ���� ����ȭ�� ���� ���� 
// ������ �ʱ⼼�� 
function galleryInit() { 
if($(".bbsnewf5").length > 0) { 
thumbCount = $(".gallery_inner .bbsnewf5").length; 
if($(".hoverBox").length > 0) { 
$(".hoverBox").parent('a').remove(); 
} 
for(i=0; i<thumbCount; i++) { 
url[i] = $(".gallery_inner .bbsnewf5").eq(i).find('a:first').attr('href'); 
subject[i] = $(".gallery_inner .bbsnewf5").eq(i).find('.gallery_title').text(); 
content[i] = $(".gallery_inner .bbsnewf5").eq(i).find('.gallery_etc').text().replace('[�������� : ','').replace(', �ۼ��� :' ,'<br><br>').replace(']' ,'').replace(', �ۼ����� :' ,'&nbsp;&nbsp;|&nbsp;'); 
// ����� �ִ� td ���ο� hover ȿ���� �ֱ� ���� �ڽ� �±� ���� (���� ����� ���� �ݺ������� ����) 
//$(".gallery_inner .bbsnewf5").eq(i).find('table td:first').append('<a href="' + url[i] + '"><div class="hoverBox"><div class="inner"><h3>' + subject[i] + '</h3><p>' + $.trim(content[i]) + '</p></div></div></a>'); 
$(".gallery_inner .bbsnewf5").eq(i).find('table td:first').append('<div class="inner post-details padding-40px-all sm-padding-20px-all"><a href="' + url[i] + '" class="alt-font post-title text-medium text-extra-dark-gray width-100 display-block md-width-100 margin-15px-bottom">' + subject[i] + '</a><p>' + $.trim(content[i]) + '</p></div>'); 
} 
// ������ �������� ���� td �� ����, ������ ���� 
$(".gallery_subject, .gallery_etc").css('display','none'); 
} 
} 
// ������ ȣ���ڽ� ���� ����ȭ 
/* 
function syncHeight() { 
if($(".bbsnewf5").length > 0) { 
refHeight = $(".hoverBox").parents('.bbsnewf5').height(); 
$(".hoverBox").css('height',refHeight + 'px'); 
} 
} 
*/ 
// ������ ȣ���ڽ� ���� ����ȭ Ÿ�̸� 
/* 
if($(".bbsnewf5").length > 0) { 
var tmrSync = setInterval(function() { syncHeight() }, 30); 
} 
*/ 
// ���̺� �ִϸ��̼� 
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
// �������ư ���� 
/*function createMoreBtn() { 
var pageCount = $(".brd_paging").find('a').length; 
if($(".gallery_inner").length > 0) { 
if(pageCount > 0) { 
var btn = '<button type="button" class="btn-more scrollreveal" id="btnMoreLoad">������ +</button>'; 
$(".board_bottom").before(btn); 
} 
} 
}*/ 
galleryInit(); 
tableShow(); 
/*createMoreBtn();*/ 
// ��� ������Ʈ �ε� �� 
$(window).load(function() { 
var loadIndex = 1; 
var wrapper; 
var moreFlag = false; 
var path = $(location).attr('pathname'); 
if($(".gallery_inner").length > 0) { 
wrapper = $(".gallery_inner"); 
} 
// �����ڹ�ư ���� 
function adminRemove() { 
$(".gallery_inner > table").each(function() { 
if($(this).attr('bordercolor')) { 
$(this).remove(); 
} 
}); 
} 
// �� ���̺� ���� 
function emptyRemove() { 
$(".gallery_inner > table").each(function() { 
if($(this).find('td').length < 1) { 
$(this).remove(); 
} 
}); 
} 
// ������ ���������� üũ 
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
// ajax �ε� ó�� 
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
wrapper.html('���� : ���������� �ε���� �ʾҽ��ϴ�.'); 
} 
}); 
} 
// ������ ��ư Ŭ���� 
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
// ī�װ� �� Ŭ���� 
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
// ī�װ� ���� ���� ���� 
var cate_link = [], 
cate_title = [], 
currentURL = $(location).attr('pathname'), 
param = "?&com_board_category_code=", 
currentParam = "", 
insertHTML = "", 
idx = 0; 
// ����Ʈ�ڽ� ��ũȭ 
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
// ī�װ� ��ũ Ŭ���� 
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
// ������ ������¡ ó�� (ī�װ� �׸� enable/disable) 
$(window).bind('resize', function() { 
if(isPC() && $(".board_tab").length > 0) { 
$(".board_tab > ul").css('display','block'); 
} else if(!isPC()) { 
if(!$(".board_tab > a").hasClass('open')) { 
$(".board_tab > ul").css('display','none'); 
} 
} 
}); 
// ������ ���� ��ư replace (ajax �ε�ø��� ȣ��) 
function admBtnReplace() { 
var $url = window.location.href; 
var $readpage = $url.indexOf('read_form'); 
$("section .container img").each(function() { 
var $src = $(this).attr('src'); 
// ���� 
if($src.indexOf('btn_sdel.gif') > -1 && $readpage < 0) { 
var $opt = $(this).attr('onclick'); 
var $link = "<a href='javascript:;' class='btn_w btn-default btn-sm' onclick='" + $opt + "'>����</a>"; 
$(this).before($link); 
$(this).remove(); 
} 
// �̵� 
if($src.indexOf('move.gif') > -1 && $readpage < 0) { 
var $opt = $(this).attr('onclick'); 
var $link = "<a href='javascript:;' class='btn_w btn-default btn-sm' onclick='" + $opt + "'>�̵�</a>"; 
$(this).before($link); 
$(this).remove(); 
} 
// ���� 
if($src.indexOf('copy.gif') > -1 && $readpage < 0) { 
var $opt = $(this).attr('onclick'); 
var $link = "<a href='javascript:;' class='btn_w btn-default btn-sm' onclick='" + $opt + "'>����</a>"; 
$(this).before($link); 
$(this).remove(); 
} 
// �̵� (��������) 
if($src.indexOf('move.gif') > -1 && $readpage > -1) { 
$(this).parent('a').addClass('btn_w btn-default btn-sm'); 
$(this).parent('a').html('�̵�'); 
$(this).remove(); 
} 
// ���� (��������) 
if($src.indexOf('copy.gif') > -1 && $readpage > -1) { 
$(this).parent('a').addClass('btn_w btn-default btn-sm'); 
$(this).parent('a').html('����'); 
$(this).remove(); 
} 
// ���� (��������) 
if($src.indexOf('modify.gif') > -1 && $readpage > -1) { 
$(this).parent('a').addClass('btn_w btn-default'); 
$(this).parent('a').html('����'); 
$(this).remove(); 
} 
// ���� (��������) 
if($src.indexOf('delete.gif') > -1 && $readpage > -1) { 
$(this).parent('a').addClass('btn_w btn-default'); 
$(this).parent('a').html('����'); 
$(this).remove(); 
} 
// ��� (��������) 
if($src.indexOf('reply.gif') > -1 && $readpage > -1) { 
$(this).parent('a').addClass('btn_w btn-default'); 
$(this).parent('a').html('��۾���'); 
$(this).remove(); 
} 
}); 
} 
// �Ϲ� ��ɹ�ư replace 
function btnReplace() { 
$("section .container img").each(function() { 
var $src = $(this).attr('src'); 
// �۾��� 
if($src.indexOf('write.gif') > -1) { 
$(this).parent('a').addClass('btn_w btn-primary'); 
$(this).parent('a').html('<i class="fa fa-pencil"></i>�۾���'); 
$(this).remove(); 
} 
// ���� 
if($src.indexOf('prev.gif') > -1) { 
$(this).parent('a').addClass('btn_w btn-default btn-sm'); 
$(this).parent('a').html('<i class="fa fa-angle-left"></i>����'); 
$(this).remove(); 
} 
// ��Ϻ��� 
if($src.indexOf('list.gif') > -1) { 
$(this).parent('a').addClass('btn_w btn-default btn-sm'); 
$(this).parent('a').html('<i class="fa fa-list-ul"></i>���'); 
$(this).remove(); 
} 
// ���� 
if($src.indexOf('next.gif') > -1) { 
$(this).parent('a').addClass('btn_w btn-default btn-sm'); 
$(this).parent('a').html('����<i class="fa fa-angle-right right"></i>'); 
$(this).remove(); 
} 
// ���ԽŰ� 
if($src.indexOf('spam.gif') > -1) { 
var $opt = $(this).attr('onclick'); 
var $link = '<a href="javascript:;" class="btn_w btn-danger" onclick="' + $opt + '"><i class="fa fa-exclamation-triangle"></i>���ԽŰ�</a>'; 
$(this).before($link); 
$(this).remove(); 
} 
}); 
// �˻� 
$("#ext_search input[type=image]").before('<input type="submit" class="btn_w btn-default btn-sm" value="�˻�" />'); 
$("#ext_search input[type=image]").css('display','none'); 
$(document).on('click', '#ext_search input[type=submit]', function() { 
$("#ext_search input[type=image]").trigger('click'); 
}); 
// ��۴ޱ� 
if($(".board_comment_bgcolor input[type=image]").length > 0) { 
var $link = '<input type="submit" class="btn btn-default btn-lg" value="��۴ޱ�" />'; 
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
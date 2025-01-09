// Æû¸ÞÀÏ placehold Ãß°¡
$(function() {
if ($(".tbl_formmail").length > 0) {
var $form = $(".tbl_formmail");
$form.find('input[name=name]').attr('placeholder', 'Name');
$form.find('input[name=receiver_email]').attr('placeholder', 'Email');
$form.find('textarea[name=description1]').attr('placeholder', 'Message');
}
});
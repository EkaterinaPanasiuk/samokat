
$(document).ready(function(){
$('.popup-open').click(function(){
$('.popup-fade').addClass('popup-fade-active');
$('body').addClass('body-block');
})

$('.popup-close').click(function(){
	$('.popup-fade').removeClass('popup-fade-active');
	$('body').removeClass('body-block');
	})
	
})



$(function() {
	var tab = $('.tabs__content'); 
	tab.hide().filter(':first').show(); 
	
	// Клики по вкладкам.
	$('.tabs__title').click(function(){
		tab.hide(); 
		tab.filter(this.hash).show(); 
		$('.tabs__title').removeClass('tabs__title-active');
		$(this).addClass('tabs__title-active');
		return false;
	}).filter(':first').click();
 
});



$(document).ready(function(){
	$(document).ready(function () {
		$('.tabs__content__item-row1').click(function () {
			$(this).parent('.tabs__content__item').toggleClass('tabs__content__item-active');

        });
    });
})
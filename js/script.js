var menu_toggle = document.querySelector('.page-header__btn');
var menu = document.querySelector('.main-nav__list');
var menu_btn_vehicle = document.querySelector('.main-nav__btn--vehicle');
var menu_btn_action = document.querySelector('.main-nav__btn--action');
var menu_btn_service = document.querySelector('.main-nav__btn--service');
var menu_link_vehicle = document.querySelector('.main-nav__link--vehicle');
var menu_list_vehicle = document.querySelector('.main-nav__sublist--vehicle');
var menu_link_action = document.querySelector('.main-nav__link--action');
var menu_list_action = document.querySelector('.main-nav__sublist--action');
var menu_link_service = document.querySelector('.main-nav__link--service');
var menu_list_service = document.querySelector('.main-nav__sublist--service');
var form = document.forms[0];
var select = form.elements.select_brand;
var brand_btn_jacket = document.querySelector('.brand__add--jacket');
var brand_btn_snowboard = document.querySelector('.brand__add--snowboard');
var brand_jacket = document.querySelector('.brand__item--jacket');
var brand_snowboard = document.querySelector('.brand__item--snowboard');
var vehicle_price = document.querySelector('.vehicle__title--price');


menu_toggle.addEventListener('click', function(event){
	event.preventDefault();
	menu_toggle.classList.toggle('page-header__btn--close');
	menu.classList.toggle('main-nav__list-show');
})

menu_btn_vehicle.addEventListener('click', function(event) {
	event.preventDefault();
	menu_btn_action.classList.remove('main-nav__btn--open');
	menu_btn_service.classList.remove('main-nav__btn--open');
	menu_btn_vehicle.classList.toggle('main-nav__btn--open');
	menu_list_action.classList.remove('main-nav__sublist-show');
	menu_list_service.classList.remove('main-nav__sublist-show');
	menu_list_vehicle.classList.toggle('main-nav__sublist-show');
});
menu_btn_action.addEventListener('click', function(event) {
	event.preventDefault();
	menu_btn_vehicle.classList.remove('main-nav__btn--open');
	menu_btn_service.classList.remove('main-nav__btn--open');
	menu_btn_action.classList.toggle('main-nav__btn--open');
	menu_list_vehicle.classList.remove('main-nav__sublist-show');
	menu_list_service.classList.remove('main-nav__sublist-show');
	menu_list_action.classList.toggle('main-nav__sublist-show');
});
menu_btn_service.addEventListener('click', function(event) {
	event.preventDefault();
	menu_btn_action.classList.remove('main-nav__btn--open');
	menu_btn_vehicle.classList.remove('main-nav__btn--open');
	menu_btn_service.classList.toggle('main-nav__btn--open');
	menu_list_vehicle.classList.remove('main-nav__sublist-show');
	menu_list_action.classList.remove('main-nav__sublist-show');
	menu_list_service.classList.toggle('main-nav__sublist-show');
});

menu_link_vehicle.addEventListener('click', function(event) {
	event.preventDefault();
	menu_btn_action.classList.remove('main-nav__btn--open');
	menu_btn_service.classList.remove('main-nav__btn--open');
	menu_btn_vehicle.classList.toggle('main-nav__btn--open');
	menu_list_action.classList.remove('main-nav__sublist-show');
	menu_list_service.classList.remove('main-nav__sublist-show');
	menu_list_vehicle.classList.toggle('main-nav__sublist-show');
});
menu_link_action.addEventListener('click', function(event) {
	event.preventDefault();
	menu_btn_vehicle.classList.remove('main-nav__btn--open');
	menu_btn_service.classList.remove('main-nav__btn--open');
	menu_btn_action.classList.toggle('main-nav__btn--open');
	menu_list_vehicle.classList.remove('main-nav__sublist-show');
	menu_list_service.classList.remove('main-nav__sublist-show');
	menu_list_action.classList.toggle('main-nav__sublist-show');
});
menu_link_service.addEventListener('click', function(event) {
	event.preventDefault();
	menu_btn_action.classList.remove('main-nav__btn--open');
	menu_btn_vehicle.classList.remove('main-nav__btn--open');
	menu_btn_service.classList.toggle('main-nav__btn--open');
	menu_list_vehicle.classList.remove('main-nav__sublist-show');
	menu_list_action.classList.remove('main-nav__sublist-show');
	menu_list_service.classList.toggle('main-nav__sublist-show');
});

(function($) {
$(function() {
  $('select').styler({
		onFormStyled: function() {
			$('.jq-selectbox').css('width', '210px');
			$('.jq-selectbox__select').css('background', '#ffffff');
			$('.jq-selectbox__select').css('border-radius', '0');
			$('.jq-selectbox__select').css('box-shadow', 'none');
			$('.jq-selectbox__select').css('font', '700 12px/12px Arial, sans-serif');
			$('.jq-selectbox__select-text').css('color', '#000000');
			$('.jq-selectbox__select').css('text-transform', 'uppercase');
			$('.jq-selectbox__select').css('height', '0px');
			$('.jq-selectbox__select').css('padding-left', '7px');
			$('.jq-selectbox__select').css('padding-top', '10px');
			$('.jq-selectbox__select').css('padding-bottom', '20px');
			$('.jq-selectbox__trigger').css('border-left', 'none');
			$('.jq-selectbox__dropdown').css('box-shadow', 'none');
			$('.jq-selectbox__dropdown').css('border-radius', '0');
			$('.jq-selectbox__dropdown').css('margin', '0');
			$('.jq-selectbox__dropdown').css('padding-top', '15px');
			$('.jq-selectbox__dropdown').css('padding-bottom', '22px');
			$('.jq-selectbox__dropdown').css('padding-left', '10px');
			$('.jq-selectbox__dropdown').css('text-transform', 'uppercase');
			$('.jq-selectbox__dropdown').css('font', '300 12px/12px Arial, sans-serif');
			$('.jq-selectbox li.selected').css('background-color', '#ffffff');
			$('.jq-selectbox li').css('background-color', '#ffffff');
		},
		onSelectOpened: function() {
			$('.jq-selectbox__dropdown ul').css('overflow', 'auto');
			$('.jq-selectbox__dropdown ul').css('width', '100%');
			$('.jq-selectbox__dropdown ul').css('height', '410px');
			$(this).find('.jq-selectbox__dropdown ul').jScrollPane({
				autoReinitialise: true,
				mouseWheelSpeed: 5
			});
		}
	});

});
})(jQuery);

brand_btn_jacket.addEventListener('click', function(event) {
	event.preventDefault();
	brand_jacket.classList.toggle('brand-show');
});
brand_btn_snowboard.addEventListener('click', function(event) {
	event.preventDefault();
	brand_snowboard.classList.toggle('brand-show');
});

vehicle_price.addEventListener('click', function(event){
	event.preventDefault();
	$('.vehicle__item--one').css('order', '6');
	$('.vehicle__item--two').css('order', '3');
	$('.vehicle__item--three').css('order', '4');
	$('.vehicle__item--four').css('order', '5');
	$('.vehicle__item--five').css('order', '1');
	$('.vehicle__item--six').css('order', '2');
})

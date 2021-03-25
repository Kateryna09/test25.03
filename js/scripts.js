jQuery(document).ready(function(){
	jQuery('.slider-for').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  fade: true,
	  asNavFor: '.slider-nav'
	});
	jQuery('.slider-nav').slick({
	  slidesToShow: 6,
	  slidesToScroll: 1,
	  asNavFor: '.slider-for',
	  vertical: true,
	  arrows: true,
	  focusOnSelect: true
	});
})
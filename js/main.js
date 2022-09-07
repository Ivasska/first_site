$ (function(){
	$('.gallery__slider').slick({
		arrows: false,
		// dots: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
	});

	$('.accsessories__box-wrapper').slick({
		// arrows: true,
		// dots: true,
		slidesToShow: 7,
		// slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		prevArrow: '<button type="button" class="slick-prev"><img src="images/slider/left.svg" alt=""></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="images/slider/right.svg" alt=""></button>'
	});

});

AOS.init({
	disable: 'phone', /* Відключає анімацію на телефонах */
	// once: true /* Анімація лише один раз показується */
});
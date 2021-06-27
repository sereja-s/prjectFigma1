$(function () {

	// работа стрелочек (лево-право)
	$('.header__slider').slick({
		infinite: true,
		fade: true,
		prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/arrows-left.svg" alt="">',
		nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/arrows-right.svg" alt="">',
		asNavFor: '.slider-dotshead' //связь
	});

	// работа полосочек внизу 1-го экрана
	$('.slider-dotshead').slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		asNavFor: '.header__slider' //связь
	});

	// работа слайдов-картинок 2-го экрана и стрелочки (лево-право)
	$('.surf-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/arrows-left.svg" alt="">',
		nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/arrows-right.svg" alt="">',
		asNavFor: '.slider-map' //связь
	});

	// работа слайдов (точек и таблички) на карте
	$('.slider-map').slick({
		slidesToShow: 8,
		slidesToScroll: 1,
		arrows: false,
		asNavFor: '.surf-slider', //связь
		focusOnSelect: true // при щелчке в табличке находит нужный слайд(картинку)
	});


});
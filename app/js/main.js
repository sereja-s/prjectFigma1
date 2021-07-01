$(function () {

	// работа стрелочек (лево-право)
	$('.header__slider').slick({
		infinite: true,
		fade: true,
		prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/arrows-left.svg" alt="">',
		nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/arrows-right.svg" alt="">',
		asNavFor: '.slider-dotshead' //связь
	});

	// лниии(дотсы) снизу 1-го экрана окрашиваются в соответствии с наименованием на экране
	$('.slider-dotshead').slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		asNavFor: '.header__slider' //связь с работой стрелочек(вверху)
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

	// работа стрелочек (лево-право) на третьем и пятом экране  
	$('.holder__slider, .shop__slider').slick({
		infinite: true,
		fade: true,
		prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/arrows-left.svg" alt="">',
		nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/arrows-right.svg" alt="">'
	});

	//  Для кастомизации счётчиков на 4-ом экране (добавит + и -)
	// ( код с сайта: https://codepen.io/komarovdesign/pen/PPRbgb )

	// прописали картинки + и - в коде html
	$('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="images/plus.svg" alt=""></div><div class="quantity-button quantity-down"><img src="images/minus.svg" alt=""></div></div>').insertAfter('.quantity input');
	$('.quantity').each(function () {
		var spinner = $(this),
			input = spinner.find('input[type="number"]'),
			btnUp = spinner.find('.quantity-up'),
			btnDown = spinner.find('.quantity-down'),
			min = input.attr('min'),
			max = input.attr('max');

		btnUp.click(function () {
			var oldValue = parseFloat(input.val());
			if (oldValue >= max) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue + 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});

		btnDown.click(function () {
			var oldValue = parseFloat(input.val());
			if (oldValue <= min) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue - 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});

	});

	// Формула расчёта суммы за проживание в гостинице (при нажатии на + или - калькулятора) 4-го экрана

	$('.quantity-button').on('click', function () {

		let summ = $('.nights').val() * $('.summ').data('nights') + ($('.guests').val() - 1) * $('.summ').data('guests');

		$('.summ').html('$' + summ);

	});

	let summ = $('.nights').val() * $('.summ').data('nights') + ($('.guests').val() - 1) * $('.summ').data('guests');

	$('.summ').html('$' + summ);

	// условие (при клике на кружке (ссылка активна) плюс превращается в минус)
	$('.surfboard-box__circle').on('click', function () {
		$(this).toggleClass('active') // класс добавляет активной ссылке: класс active
	});





});
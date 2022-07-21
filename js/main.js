const mainSlider = new Swiper('.main__slider', {
	speed: 600,
	slidesPerView: 1,
	spaceBetween: 120,
	grabCursor: true,
	centeredSlides: true,
	pagination: {
		el: '.swiper-pagination',
	},
})

window.onload = function () {
	TweenMax.to('.overlay-preloader', 1.5, {
		delay: 3.5,
		width: 0,
		ease: Expo.easeInOut
	})
	TweenMax.to('.overlay-preloader-el01', 1.5, {
		delay: 3.2,
		right: "100%",
		ease: Expo.easeInOut
	})
	TweenMax.to('.main__slider-item-image', 1.7, {
		delay: 4,
		width: "728px",
		ease: Expo.easeInOut
	})
	TweenMax.to('.main__slider-item-heading', 2, {
		delay: 4.3,
		y: 0,
		ease: Expo.easeInOut
	})
	TweenMax.to('.main__slider-item-text', 2, {
		delay: 4.35,
		y: 0,
		ease: Expo.easeInOut
	})
};

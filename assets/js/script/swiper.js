jQuery( function( $ ) {

	'use strict';

	/******************************************************************
	 * Home
	 * @type {{init: SwiperSliders.init, install: SwiperSliders.install}}
	 * @since 1.0
	 * @author Alex Cherniy
	 */
	var SwiperSliders = {

		/**
		 * Init
		 */
		init: function ()
		{

			this.install  = this.install( this )
			this.labsTab  = this.labsTab( this )
			this.signsTab  = this.signsTab( this )
			this.imagingScroll  = this.imagingScroll( this )
			this.roundsScroll  = this.roundsScroll( this )
			this.hoursScroll  = this.hoursScroll( this )
			this.daysScroll  = this.daysScroll( this )
			this.weeksScroll  = this.weeksScroll( this )
			this.monthsScroll  = this.monthsScroll( this )
			this.labsSwiper  = this.labsSwiper( this )

		},

		/**
		 * Install
		 */
		install: function()
		{


		},

		/**
		 * labsTab
		 */
		labsTab: function()
		{

			var wLabs = new Swiper(".wLabsSliderTab", {
				slidesPerView: "auto",
				spaceBetween: 30,
				loop: false,
				slideToClickedSlide: false,
				slidesOffsetBefore: 30,
				slidesOffsetAfter: 30,
			});

		},

		/**
		 * signsTab
		 */
		signsTab: function()
		{

			var wLabs = new Swiper(".wSignsSliderTab", {
				slidesPerView: "auto",
				spaceBetween: 15,
				loop: false,
				slideToClickedSlide: false,
				//slidesOffsetAfter: 30,
			});

		},

		/**
		 * imagingScroll
		 */
		imagingScroll: function()
		{

			var swiper = new Swiper(".imagingScroll .swiper", {
				direction: "horizontal",
				slidesPerView: "auto",
				observer: true,
				observeParents: true,
				freeMode: {

				},
				scrollbar: {
					el: ".imagingScroll .scroll_line__handle",
					draggable: true,
					snapOnRelease: false,
					dragClass: 'scroll_line__handle-drag',
					horizontalClass: 'scroll_line__handle',
				},
				mousewheel: true,
			})

			//swiper.changeLanguageDirection('rtl')


		},

		/**
		 * roundsScroll
		 */
		roundsScroll: function()
		{

			var swiper = new Swiper(".roundsScroll .swiper", {
				direction: "horizontal",
				slidesPerView: "auto",
				observer: true,
				observeParents: true,
				freeMode: {

				},
				scrollbar: {
					el: ".roundsScroll .scroll_line__handle",
					draggable: true,
					snapOnRelease: false,
					dragClass: 'scroll_line__handle-drag',
					horizontalClass: 'scroll_line__handle',
				},
				mousewheel: true,
			})

			//swiper.changeLanguageDirection('rtl')


		},

		/**
		 * hoursScroll
		 */
		hoursScroll: function()
		{

			var swiper = new Swiper(".hoursScroll .swiper", {
				direction: "horizontal",
				slidesPerView: "auto",
				observer: true,
				observeParents: true,
				freeMode: {

				},
				scrollbar: {
					el: ".hoursScroll .scroll_line__handle",
					draggable: true,
					snapOnRelease: false,
					dragClass: 'scroll_line__handle-drag',
					horizontalClass: 'scroll_line__handle',
				},
				mousewheel: true,
			})

			//swiper.changeLanguageDirection('rtl')


		},

		/**
		 * daysScroll
		 */
		daysScroll: function()
		{

			var swiper = new Swiper(".daysScroll .swiper", {
				direction: "horizontal",
				slidesPerView: "auto",
				observer: true,
				observeParents: true,
				freeMode: {

				},
				scrollbar: {
					el: ".daysScroll .scroll_line__handle",
					draggable: true,
					snapOnRelease: false,
					dragClass: 'scroll_line__handle-drag',
					horizontalClass: 'scroll_line__handle',
				},
				mousewheel: true,
			})

			//swiper.changeLanguageDirection('rtl')


		},

		/**
		 * weeksScroll
		 */
		weeksScroll: function()
		{

			var swiper = new Swiper(".weeksScroll .swiper", {
				direction: "horizontal",
				slidesPerView: "auto",
				observer: true,
				observeParents: true,
				freeMode: {

				},
				scrollbar: {
					el: ".weeksScroll .scroll_line__handle",
					draggable: true,
					snapOnRelease: false,
					dragClass: 'scroll_line__handle-drag',
					horizontalClass: 'scroll_line__handle',
				},
				mousewheel: true,
			})

			//swiper.changeLanguageDirection('rtl')


		},

		/**
		 * monthsScroll
		 */
		monthsScroll: function()
		{

			var swiper = new Swiper(".monthsScroll .swiper", {
				direction: "horizontal",
				slidesPerView: "auto",
				observer: true,
				observeParents: true,
				freeMode: {

				},
				scrollbar: {
					el: ".monthsScroll .scroll_line__handle",
					draggable: true,
					snapOnRelease: false,
					dragClass: 'scroll_line__handle-drag',
					horizontalClass: 'scroll_line__handle',
				},
				mousewheel: true,
			})

			//swiper.changeLanguageDirection('rtl')


		},

		/**
		 * labsSwiper
		 */
		labsSwiper: function()
		{

			var labsSwiper = new Swiper(".labsSwiper .swiper", {
				slidesPerView: "auto",
				spaceBetween: 66,
				loop: false,
				grabCursor: true,
				slidesOffsetAfter: 66,
			});

		},

	}

	SwiperSliders.init()


});

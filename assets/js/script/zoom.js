jQuery( function( $ ) {

	'use strict';

	let level = {}

	/******************************************************************
	 * Home
	 * @type {{init: Zoom.init, install: Zoom.install}}
	 * @since 1.0
	 * @author Alex Cherniy
	 */
	var Zoom = {

		/**
		 * Init
		 */
		init: function ()
		{

			this.install  = this.install( this )


		},

		/**
		 * Install
		 */
		install: function()
		{

			$( document ).on(
				'click',
				'.zoomPlus',
				this.plus )

			$( document ).on(
				'click',
				'.zoomMinus',
				this.minus )

		},

		/**
		 * Plus
		 */
		plus: function(e)
		{

			let $this = $(this),
				target = $this.data('zoom-target'),
				$container = $('[data-zoom=' + target + ']'),
				$btnMinus = $this.parent().find('.zoomMinus')

			if (typeof level[target] !== "undefined")
			{
				level[target]++
			}else{
				level[target] = 4
			}

			if( $btnMinus.hasClass('disabled') ) $btnMinus.removeClass('disabled')

			$container.attr('data-zoom-level', level[target])
			if( level[target] === 6 )
			{
				$this.addClass('disabled')
			}


			const swiper = document.querySelector('.' + target + 'Scroll .swiper').swiper

			setTimeout(function() {
				swiper.update()
				swiper.scrollbar.setTranslate()
			}, 200);

			e.preventDefault()

		},

		/**
		 * Minus
		 */
		minus: function(e)
		{

			let $this = $(this),
				target = $this.data('zoom-target'),
				$container = $('[data-zoom=' + target + ']'),
				$btnPlus = $this.parent().find('.zoomPlus')

			if (typeof level[target] !== "undefined")
			{
				level[target]--
			}else{
				level[target] = 2
			}

			if( $btnPlus.hasClass('disabled') ) $btnPlus.removeClass('disabled')

			$container.attr('data-zoom-level', level[target])
			if( level[target] === 0 )
			{
				$this.addClass('disabled')
			}

			const swiper = document.querySelector('.' + target + 'Scroll .swiper').swiper
			setTimeout(function() {
				swiper.update()
				swiper.scrollbar.setTranslate()
			}, 200);

			e.preventDefault()

		},

	}

	Zoom.init()


});

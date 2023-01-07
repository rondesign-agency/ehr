jQuery( function( $ ) {

	'use strict';

	/******************************************************************
	 * Home
	 * @type {{init: Linkes.init, install: Linkes.install}}
	 * @since 1.0
	 * @author Alex Cherniy
	 */
	var Linkes = {

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
				'.linkes__item',
				this.show_timeline )


		},

		/**
		 * Show Timeline
		 */
		show_timeline: function(e)
		{

			let $this = $(this),
				$content = $this.data('content')

			if( $this.hasClass('active') )
			{

				$this.removeClass('active')
				$('.linkes-content.active').removeClass('active')

			}else{

				$this.parent().parent().find('.active').removeClass('active')

				$this.addClass('active')

				$('.linkes-content.active').removeClass('active')
				$($content).addClass('active')

			}

			e.preventDefault()

		},

	}

	Linkes.init()

});

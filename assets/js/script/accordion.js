jQuery( function( $ ) {

	'use strict';

	/******************************************************************
	 * Home
	 * @type {{init: Accordion.init, install: Accordion.install}}
	 * @since 1.0
	 * @author Alex Cherniy
	 */
	var Accordion = {

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
				'[data-accordion]',
				this.open )

		},

		/**
		 * Open
		 */
		open: function(e)
		{

			let $this = $(this),
				$accordion = $this.data('accordion'),
				$item = $this.closest('.accordion__item')

			//$($accordion).find('.active').removeClass('active')

			$item.toggleClass('active')

			e.preventDefault()

		},


	}

	Accordion.init()


});

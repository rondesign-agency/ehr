jQuery( function( $ ) {

	'use strict';

	/******************************************************************
	 * Home
	 * @type {{init: History.init, install: History.install}}
	 * @since 1.0
	 * @author Alex Cherniy
	 */
	var History = {

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
				'.w_history__timeline-years-item',
				this.years )

			$( document ).on(
				'click',
				'.w_history__nav-list-item',
				this.nav )

		},

		/**
		 * Years
		 */
		years: function(e)
		{

			let $this = $(this)

			$this.parent().addClass('active')

			$this.parent().closest('li').prevAll().addClass('active');
			$this.parent().closest('li').nextAll().removeClass('active')

			e.preventDefault()

		},

		/**
		 * Navigation
		 */
		nav: function(e)
		{

			let $this = $(this)

			$this.parent().parent().find('.active').removeClass('active')
			$this.parent().addClass('active')

			e.preventDefault()

		},

	}

	History.init()

});

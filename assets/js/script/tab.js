jQuery( function( $ ) {

	'use strict';

	/******************************************************************
	 * Home
	 * @type {{init: TabControl.init, install: TabControl.install}}
	 * @since 1.0
	 * @author Alex Cherniy
	 */
	var TabControl = {

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
				'[data-tab]',
				this.tab )

		},

		/**
		 * Tab
		 */
		tab: function(e)
		{

			let $this = $(this),
				$tabContainer = '#' + $this.data('tab'),
				$tb = $this.attr('href')

			$($tabContainer).find('.active').removeClass('active')

			$this.addClass('active')

			$($tb).parent().find('.active').removeClass('active')
			$($tb).addClass('active')

			e.preventDefault()

		},

	}

	TabControl.init()


});

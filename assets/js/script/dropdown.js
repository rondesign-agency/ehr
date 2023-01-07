jQuery( function( $ ) {

	'use strict';

	/******************************************************************
	 * Home
	 * @type {{init: Dropdown.init, install: Dropdown.install}}
	 * @since 1.0
	 * @author Alex Cherniy
	 */
	var Dropdown = {

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
				'.dropdown__item',
				this.open )

			$( document ).on(
				'click',
				'.dropdown__list a',
				this.close )

		},

		/**
		 * Open
		 */
		open: function(e)
		{

			let $this = $(this),
				$container = $this.parent().parent().parent()

			if( $this.parent().hasClass('active') )
			{
				$container.removeClass('active')
				$this.parent().parent().find('.active').removeClass('active')
			}else {

				$(document)
					.find('.dropdown')
					.removeClass('active')
					.find('active')
					.removeClass('active')

				$this.parent().toggleClass('active')
			}

			e.preventDefault()

		},

		/**
		 * Close
		 */
		close: function(e)
		{

			let $this = $(this),
				$container = $this.parent().parent().parent()

			$container.removeClass('active')
			$this.parent().parent().find('.active').removeClass('active')
			$this.parent().addClass('active')

			$container.find('.dropdown__item span').html($this.html())

			e.preventDefault()

		},


	}

	Dropdown.init()


});

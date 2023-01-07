jQuery( function( $ ) {

	'use strict';

	/******************************************************************
	 * Home
	 * @type {{init: Modal.init, install: Modal.install}}
	 * @since 1.0
	 * @author Alex Cherniy
	 */
	var Modal = {

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
				'[data-modal]',
				this.open )

			$( document ).on(
				'click',
				'[data-modal-close]',
				this.close )

		},

		/**
		 * Open
		 */
		open: function(e)
		{

			let $this = $(this),
				$modal = $this.data('modal')

			$($modal).toggleClass('active')

			e.preventDefault()

		},

		/**
		 * Close
		 */
		close: function(e)
		{

			let $this = $(this),
				$modal = $this.data('modal-close')

			$($modal).removeClass('active')

			e.preventDefault()

		},


	}

	Modal.init()

});

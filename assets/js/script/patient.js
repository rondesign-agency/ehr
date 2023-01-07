jQuery( function( $ ) {

	'use strict';

	/******************************************************************
	 * Home
	 * @type {{init: Patient.init, install: Patient.install}}
	 * @since 1.0
	 * @author Alex Cherniy
	 */
	var Patient = {

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
				'.w_patient__tabs-list--item',
				this.placeholder )

		},

		/**
		 * Placeholder
		 */
		placeholder: function(e)
		{

			let $this = $(this),
				position = $this.offset().top - $('.w_patient__tabs-list').offset().top

			$('.w_patient__tabs-list--placeholder').css('top', position)

			e.preventDefault()

		},

	}

	Patient.init()

});

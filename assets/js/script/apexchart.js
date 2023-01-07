jQuery( function( $ ) {

	'use strict';

	/******************************************************************
	 * Home
	 * @type {{init: ApexChart.init, install: ApexChart.install}}
	 * @since 1.0
	 * @author Alex Cherniy
	 */
	var ApexChart = {

		/**
		 * Init
		 */
		init: function ()
		{

			this.install  = this.install( this )
			this.wLabs  = this.wLabs( this )
			this.wSigns  = this.wSigns( this )

		},

		/**
		 * Install
		 */
		install: function()
		{


		},

		/**
		 * wLabs
		 */
		wLabs: function(e)
		{

			var options = {
				chart: {
					type: "line",
					height: 50,
					sparkline: {
						enabled: !0
					}
				},
				stroke: {
					width: 2,
					curve: "smooth"
				},
				markers: {
					size: 0
				},
				tooltip: {
					fixed: {
						enabled: !1
					},
					x: {
						show: !1
					},
					y: {
						title: {
							formatter: function(e)
							{
								return ""
							}
						}
					},
					marker: {
						show: !1
					}
				}
			};

			if($('#wLabsChart1').length)
			{

				let wLabsChart1_options_1 = options

				//Color Line
				Object.assign(wLabsChart1_options_1,{colors: ["#9ACAA1"]});

				//Points
				Object.assign(wLabsChart1_options_1,{series: [{
						data: [
							3844,
							3848,
							3845,
							3850,
							3845,
							3848,
							3847
						]
					}]
				});

				new ApexCharts(document.querySelector("#wLabsChart1"), wLabsChart1_options_1).render();
			}

			if($('#wLabsChart2').length)
			{

				let wLabsChart1_options_2 = options

				//Color Line
				Object.assign(wLabsChart1_options_2,{colors: ["#9ACAA1"]});

				//Points
				Object.assign(wLabsChart1_options_2,{series: [{
						data: [
							3850,
							3851,
							3849,
							3852,
							3848,
							3853
						]
					}]
				});

				new ApexCharts(document.querySelector("#wLabsChart2"), wLabsChart1_options_2).render();
			}

			if($('#wLabsChart3').length)
			{

				let wLabsChart1_options_3 = options

				//Color Line
				Object.assign(wLabsChart1_options_3,{colors: ["#D27E7B"]});

				//Points
				Object.assign(wLabsChart1_options_3,{series: [{
						data: [
							3840,
							3844,
							3841,
							3842,
							3838,
							3843
						]
					}]
				});

				new ApexCharts(document.querySelector("#wLabsChart3"), wLabsChart1_options_3).render();
			}

			if($('#wLabsChart4').length)
			{

				let wLabsChart1_options_4 = options

				//Color Line
				Object.assign(wLabsChart1_options_4,{colors: ["#9ACAA1"]});

				//Points
				Object.assign(wLabsChart1_options_4,{series: [{
						data: [
							3840,
							3844,
							3841,
							3837,
							3838,
							3841
						]
					}]
				});

				new ApexCharts(document.querySelector("#wLabsChart4"), wLabsChart1_options_4).render();
			}

			if($('#wLabsChart5').length)
			{

				let wLabsChart1_options_5 = options

				//Color Line
				Object.assign(wLabsChart1_options_5,{colors: ["#9ACAA1"]});

				//Points
				Object.assign(wLabsChart1_options_5,{series: [{
						data: [
							3840,
							3841,
							3839,
							3841,
							3839,
							3841,
							3839
						]
					}]
				});

				new ApexCharts(document.querySelector("#wLabsChart5"), wLabsChart1_options_5).render();
			}

			if($('#wLabsChart6').length)
			{

				let wLabsChart1_options_6 = options

				//Color Line
				Object.assign(wLabsChart1_options_6,{colors: ["#9ACAA1"]});

				//Points
				Object.assign(wLabsChart1_options_6,{series: [{
						data: [
							3844,
							3848,
							3845,
							3850,
							3845,
							3848,
							3847
						]
					}]
				});

				new ApexCharts(document.querySelector("#wLabsChart6"), wLabsChart1_options_6).render();
			}

			if($('#wLabsChart7').length)
			{

				let wLabsChart1_options_7 = options

				//Color Line
				Object.assign(wLabsChart1_options_7,{colors: ["#9ACAA1"]});

				//Points
				Object.assign(wLabsChart1_options_7,{series: [{
						data: [
							3850,
							3851,
							3849,
							3852,
							3848,
							3853
						]
					}]
				});

				new ApexCharts(document.querySelector("#wLabsChart7"), wLabsChart1_options_7).render();
			}

			if($('#wLabsChart8').length)
			{

				let wLabsChart1_options_8 = options

				//Color Line
				Object.assign(wLabsChart1_options_8,{colors: ["#D27E7B"]});

				//Points
				Object.assign(wLabsChart1_options_8,{series: [{
						data: [
							3840,
							3844,
							3841,
							3842,
							3838,
							3843
						]
					}]
				});

				new ApexCharts(document.querySelector("#wLabsChart8"), wLabsChart1_options_8).render();
			}

			if($('#wLabsChart9').length)
			{

				let wLabsChart1_options_9 = options

				//Color Line
				Object.assign(wLabsChart1_options_9,{colors: ["#9ACAA1"]});

				//Points
				Object.assign(wLabsChart1_options_9,{series: [{
						data: [
							3840,
							3844,
							3841,
							3837,
							3838,
							3841
						]
					}]
				});

				new ApexCharts(document.querySelector("#wLabsChart9"), wLabsChart1_options_9).render();
			}

			/**
			 * Page Labs
			 */

			var options_page = {
				chart: {
					type: "line",
					height: 40,
					sparkline: {
						enabled: !0
					}
				},
				stroke: {
					width: 3,
					curve: "smooth"
				},
				markers: {
					size: 0
				},
				tooltip: {
					enabled: false,
				},

			};

			if($('#wLabsChart10').length)
			{

				let wLabsChart10_options_1 = options_page

				//Color Line
				Object.assign(wLabsChart10_options_1,{colors: ["#9ACAA1"]});

				//Points
				Object.assign(wLabsChart10_options_1,{series: [{
						data: [
							3840,
							3852,
							3841,
							3850,
							3842,
							3854,
							3847
						]
					}]
				});

				new ApexCharts(document.querySelector("#wLabsChart10"), wLabsChart10_options_1).render();
			}

			if($('#wLabsChart11').length)
			{

				let wLabsChart11_options_1 = options_page

				//Color Line
				Object.assign(wLabsChart11_options_1,{colors: ["#9ACAA1"]});

				//Points
				Object.assign(wLabsChart11_options_1,{series: [{
						data: [
							3851,
							3840,
							3848,
							3839,
							3850,
							3842,
							3854,
							3841
						]
					}]
				});

				new ApexCharts(document.querySelector("#wLabsChart11"), wLabsChart11_options_1).render();
			}

			if($('#wLabsChart12').length)
			{

				let wLabsChart12_options_1 = options_page

				//Color Line
				Object.assign(wLabsChart12_options_1,{colors: ["#D27E7B"]});

				//Points
				Object.assign(wLabsChart12_options_1,{series: [{
						data: [
							3852,
							3839,
							3848,
							3842,
							3855,
							3832,
							3847,
							3831
						]
					}]
				});

				new ApexCharts(document.querySelector("#wLabsChart12"), wLabsChart12_options_1).render();
			}

			if($('#wLabsChart13').length)
			{

				let wLabsChart13_options_1 = options_page

				//Color Line
				Object.assign(wLabsChart13_options_1,{colors: ["#D27E7B"]});

				//Points
				Object.assign(wLabsChart13_options_1,{series: [{
						data: [
							3840,
							3852,
							3841,
							3850,
							3842,
							3854,
							3847
						]
					}]
				});

				new ApexCharts(document.querySelector("#wLabsChart13"), wLabsChart13_options_1).render();
			}

			if($('#wLabsChart14').length)
			{

				let wLabsChart14_options_1 = options_page

				//Color Line
				Object.assign(wLabsChart14_options_1,{colors: ["#9ACAA1"]});

				//Points
				Object.assign(wLabsChart14_options_1,{series: [{
						data: [
							3851,
							3840,
							3848,
							3839,
							3850,
							3842,
							3854,
							3841
						]
					}]
				});

				new ApexCharts(document.querySelector("#wLabsChart14"), wLabsChart14_options_1).render();
			}

			if($('#wLabsChart15').length)
			{

				let wLabsChart15_options_1 = options_page

				//Color Line
				Object.assign(wLabsChart15_options_1,{colors: ["#D27E7B"]});

				//Points
				Object.assign(wLabsChart15_options_1,{series: [{
						data: [
							3852,
							3839,
							3848,
							3842,
							3855,
							3832,
							3847,
							3831
						]
					}]
				});

				new ApexCharts(document.querySelector("#wLabsChart15"), wLabsChart15_options_1).render();
			}


			if($('#wLabsChart16').length)
			{

				let wLabsChart16_options_1 = options_page

				//Color Line
				Object.assign(wLabsChart16_options_1,{colors: ["#9ACAA1"]});

				//Points
				Object.assign(wLabsChart16_options_1,{series: [{
						data: [
							3840,
							3852,
							3841,
							3850,
							3842,
							3854,
							3847
						]
					}]
				});

				new ApexCharts(document.querySelector("#wLabsChart16"), wLabsChart16_options_1).render();
			}

			if($('#wLabsChart17').length)
			{

				let wLabsChart17_options_1 = options_page

				//Color Line
				Object.assign(wLabsChart17_options_1,{colors: ["#9ACAA1"]});

				//Points
				Object.assign(wLabsChart17_options_1,{series: [{
						data: [
							3851,
							3840,
							3848,
							3839,
							3850,
							3842,
							3854,
							3841
						]
					}]
				});

				new ApexCharts(document.querySelector("#wLabsChart17"), wLabsChart17_options_1).render();
			}

			if($('#wLabsChart18').length)
			{

				let wLabsChart18_options_1 = options_page

				//Color Line
				Object.assign(wLabsChart18_options_1,{colors: ["#D27E7B"]});

				//Points
				Object.assign(wLabsChart18_options_1,{series: [{
						data: [
							3852,
							3839,
							3848,
							3842,
							3855,
							3832,
							3847,
							3831
						]
					}]
				});

				new ApexCharts(document.querySelector("#wLabsChart18"), wLabsChart18_options_1).render();
			}

			if($('#wLabsChart19').length)
			{

				let wLabsChart19_options_1 = options_page

				//Color Line
				Object.assign(wLabsChart19_options_1,{colors: ["#D27E7B"]});

				//Points
				Object.assign(wLabsChart19_options_1,{series: [{
						data: [
							3840,
							3852,
							3841,
							3850,
							3842,
							3854,
							3847
						]
					}]
				});

				new ApexCharts(document.querySelector("#wLabsChart19"), wLabsChart19_options_1).render();
			}

			if($('#wLabsChart20').length)
			{

				let wLabsChart20_options_1 = options_page

				//Color Line
				Object.assign(wLabsChart20_options_1,{colors: ["#9ACAA1"]});

				//Points
				Object.assign(wLabsChart20_options_1,{series: [{
						data: [
							3851,
							3840,
							3848,
							3839,
							3850,
							3842,
							3854,
							3841
						]
					}]
				});

				new ApexCharts(document.querySelector("#wLabsChart20"), wLabsChart20_options_1).render();
			}

			if($('#wLabsChart21').length)
			{

				let wLabsChart21_options_1 = options_page

				//Color Line
				Object.assign(wLabsChart21_options_1,{colors: ["#D27E7B"]});

				//Points
				Object.assign(wLabsChart21_options_1,{series: [{
						data: [
							3852,
							3839,
							3848,
							3842,
							3855,
							3832,
							3847,
							3831
						]
					}]
				});

				new ApexCharts(document.querySelector("#wLabsChart21"), wLabsChart21_options_1).render();
			}


			if($('#wLabsChart22').length)
			{

				let wLabsChart22_options_1 = options_page

				//Color Line
				Object.assign(wLabsChart22_options_1,{colors: ["#9ACAA1"]});

				//Points
				Object.assign(wLabsChart22_options_1,{series: [{
						data: [
							3840,
							3852,
							3841,
							3850,
							3842,
							3854,
							3847
						]
					}]
				});

				new ApexCharts(document.querySelector("#wLabsChart22"), wLabsChart22_options_1).render();
			}

			if($('#wLabsChart23').length)
			{

				let wLabsChart23_options_1 = options_page

				//Color Line
				Object.assign(wLabsChart23_options_1,{colors: ["#9ACAA1"]});

				//Points
				Object.assign(wLabsChart23_options_1,{series: [{
						data: [
							3851,
							3840,
							3848,
							3839,
							3850,
							3842,
							3854,
							3841
						]
					}]
				});

				new ApexCharts(document.querySelector("#wLabsChart23"), wLabsChart23_options_1).render();
			}

			if($('#wLabsChart24').length)
			{

				let wLabsChart24_options_1 = options_page

				//Color Line
				Object.assign(wLabsChart24_options_1,{colors: ["#D27E7B"]});

				//Points
				Object.assign(wLabsChart24_options_1,{series: [{
						data: [
							3852,
							3839,
							3848,
							3842,
							3855,
							3832,
							3847,
							3831
						]
					}]
				});

				new ApexCharts(document.querySelector("#wLabsChart24"), wLabsChart24_options_1).render();
			}

			if($('#wLabsChart25').length)
			{

				let wLabsChart25_options_1 = options_page

				//Color Line
				Object.assign(wLabsChart25_options_1,{colors: ["#D27E7B"]});

				//Points
				Object.assign(wLabsChart25_options_1,{series: [{
						data: [
							3840,
							3852,
							3841,
							3850,
							3842,
							3854,
							3847
						]
					}]
				});

				new ApexCharts(document.querySelector("#wLabsChart25"), wLabsChart25_options_1).render();
			}

			if($('#wLabsChart26').length)
			{

				let wLabsChart26_options_1 = options_page

				//Color Line
				Object.assign(wLabsChart26_options_1,{colors: ["#9ACAA1"]});

				//Points
				Object.assign(wLabsChart26_options_1,{series: [{
						data: [
							3851,
							3840,
							3848,
							3839,
							3850,
							3842,
							3854,
							3841
						]
					}]
				});

				new ApexCharts(document.querySelector("#wLabsChart26"), wLabsChart26_options_1).render();
			}

			if($('#wLabsChart27').length)
			{

				let wLabsChart27_options_1 = options_page

				//Color Line
				Object.assign(wLabsChart27_options_1,{colors: ["#D27E7B"]});

				//Points
				Object.assign(wLabsChart27_options_1,{series: [{
						data: [
							3852,
							3839,
							3848,
							3842,
							3855,
							3832,
							3847,
							3831
						]
					}]
				});

				new ApexCharts(document.querySelector("#wLabsChart27"), wLabsChart27_options_1).render();
			}


			if($('#wLabsChart28').length)
			{

				let wLabsChart28_options_1 = options_page

				//Color Line
				Object.assign(wLabsChart28_options_1,{colors: ["#9ACAA1"]});

				//Points
				Object.assign(wLabsChart28_options_1,{series: [{
						data: [
							3840,
							3852,
							3841,
							3850,
							3842,
							3854,
							3847
						]
					}]
				});

				new ApexCharts(document.querySelector("#wLabsChart28"), wLabsChart28_options_1).render();
			}

			if($('#wLabsChart29').length)
			{

				let wLabsChart29_options_1 = options_page

				//Color Line
				Object.assign(wLabsChart29_options_1,{colors: ["#9ACAA1"]});

				//Points
				Object.assign(wLabsChart29_options_1,{series: [{
						data: [
							3851,
							3840,
							3848,
							3839,
							3850,
							3842,
							3854,
							3841
						]
					}]
				});

				new ApexCharts(document.querySelector("#wLabsChart29"), wLabsChart29_options_1).render();
			}

			if($('#wLabsChart30').length)
			{

				let wLabsChart30_options_1 = options_page

				//Color Line
				Object.assign(wLabsChart30_options_1,{colors: ["#D27E7B"]});

				//Points
				Object.assign(wLabsChart30_options_1,{series: [{
						data: [
							3852,
							3839,
							3848,
							3842,
							3855,
							3832,
							3847,
							3831
						]
					}]
				});

				new ApexCharts(document.querySelector("#wLabsChart30"), wLabsChart30_options_1).render();
			}

			if($('#wLabsChart31').length)
			{

				let wLabsChart31_options_1 = options_page

				//Color Line
				Object.assign(wLabsChart31_options_1,{colors: ["#9ACAA1"]});

				//Points
				Object.assign(wLabsChart31_options_1,{series: [{
						data: [
							3840,
							3852,
							3841,
							3850,
							3842,
							3854,
							3847
						]
					}]
				});

				new ApexCharts(document.querySelector("#wLabsChart31"), wLabsChart31_options_1).render();
			}

			if($('#wLabsChart32').length)
			{

				let wLabsChart32_options_1 = options_page

				//Color Line
				Object.assign(wLabsChart32_options_1,{colors: ["#9ACAA1"]});

				//Points
				Object.assign(wLabsChart32_options_1,{series: [{
						data: [
							3851,
							3840,
							3848,
							3839,
							3850,
							3842,
							3854,
							3841
						]
					}]
				});

				new ApexCharts(document.querySelector("#wLabsChart32"), wLabsChart32_options_1).render();
			}

			if($('#wLabsChart33').length)
			{

				let wLabsChart33_options_1 = options_page

				//Color Line
				Object.assign(wLabsChart33_options_1,{colors: ["#D27E7B"]});

				//Points
				Object.assign(wLabsChart33_options_1,{series: [{
						data: [
							3852,
							3839,
							3848,
							3842,
							3855,
							3832,
							3847,
							3831
						]
					}]
				});

				new ApexCharts(document.querySelector("#wLabsChart33"), wLabsChart33_options_1).render();
			}

		},

		/**
		 * wSigns
		 */
		wSigns: function(e)
		{

			if( $('#wSignsChart1').length )
			{

				var options = {
					series: [
						{
							data: [
								{
									x: 2010,
									y: 68,
								},
								{
									x: 2011,
									y: 80,
								},
								{
									x: 2012,
									y: 60,
								},
								{
									x: 2013,
									y: 86,
								},
								{
									x: 2014,
									y: 53,
								},
								{
									x: 2015,
									y: 96,
								},
								{
									x: 2016,
									y: 60,
								},
								{
									x: 2017,
									y: 78,
								},
								{
									x: 2018,
									y: 55,
								},
								{
									x: 2019,
									y: 74,
								},
								{
									x: 2020,
									y: 25,
								},
								{
									x: 2021,
									y: 80,
								},
								{
									x: 2012,
									y: 50,
								},
							]
						}
					],
					zoom: {
						//enabled: false
						autoScaleYaxis: true
					},
					chart: {
						height: 450,
						type: 'line',
						stacked: true,
						toolbar: {
							show: false,
							//autoSelected: 'pan',
						},
						animations: {
							enabled: true,
							easing: 'easeinout',
							speed: 400,
						},
						zoom: {
							enabled: false,
							autoScaleYaxis: true
						}

					},
					colors: ['#9ACAA1', '#545454'],
					dataLabels: {
						enabled: true,
						offsetY: -10,
						style: {
							fontSize: '14px',
							fontFamily: 'Poppins',
							fontWeight: '300',
							colors: ['#000']
						},
						background: {
							enabled: false,
						},
					},
					stroke: {
						width: 4,
						curve: "smooth"
					},
					grid: {
						//strokeDashArray: 2,
						borderColor: '#ECECEC',
						// row: {
						// 	colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
						// 	opacity: 1
						// },
					},
					markers: {
						size: 6,
						colors: '#FFF',
						strokeColors: '#9ACAA1',
						strokeWidth: 4,
						shape: "circle",
						radius: 10,
						showNullDataPoints: true,
					},
					tooltip: {
						enabled: false,
					},
					xaxis: {
						type: 'category',
						labels: {
							show: true,
							style: {
								colors: ['#4A4A4A'],
								fontSize: '14px',
								fontFamily: 'Poppins',
								fontWeight: 300,
								rotateAlways: false,
							},
							minWidth: 800,
							offsetY: 8,
							offsetX: -5,
						},
						//min: 2010,
						//max: 2022,
						min: 0,
						axisTicks: {
							show: false,
						},
						axisBorder: {
							show: false,
						},
						//tickAmount: 1,
						floating: false,
					},
					yaxis: {
						opposite: true,
						min: 0,
						max: 160,
						tickAmount: 4,
						labels: {
							show: true,
							style: {
								colors: ['#000000'],
								fontSize: '14px',
								fontFamily: 'Poppins',
								fontWeight: 300,
							},
							offsetX: -10,
							offsetY: 2,
						},
					},
				};
				var chart = new ApexCharts(document.querySelector("#wSignsChart1"), options).render();

			}

		},

	}

	ApexChart.init()


});

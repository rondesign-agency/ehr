jQuery(function(t){"use strict";({init:function(){this.install=this.install(this)},install:function(){t(document).on("click","[data-accordion]",this.open)},open:function(e){var s=t(this);s.data("accordion");s.closest(".accordion__item").toggleClass("active"),e.preventDefault()}}).init()}),jQuery(function(a){"use strict";({init:function(){this.install=this.install(this),this.wLabs=this.wLabs(this),this.wSigns=this.wSigns(this)},install:function(){},wLabs:function(e){var s,t={chart:{type:"line",height:50,sparkline:{enabled:!0}},stroke:{width:2,curve:"smooth"},markers:{size:0},tooltip:{fixed:{enabled:!1},x:{show:!1},y:{title:{formatter:function(e){return""}}},marker:{show:!1}}},t=(a("#wLabsChart1").length&&(s=t,Object.assign(s,{colors:["#9ACAA1"]}),Object.assign(s,{series:[{data:[3844,3848,3845,3850,3845,3848,3847]}]}),new ApexCharts(document.querySelector("#wLabsChart1"),s).render()),a("#wLabsChart2").length&&(s=t,Object.assign(s,{colors:["#9ACAA1"]}),Object.assign(s,{series:[{data:[3850,3851,3849,3852,3848,3853]}]}),new ApexCharts(document.querySelector("#wLabsChart2"),s).render()),a("#wLabsChart3").length&&(s=t,Object.assign(s,{colors:["#D27E7B"]}),Object.assign(s,{series:[{data:[3840,3844,3841,3842,3838,3843]}]}),new ApexCharts(document.querySelector("#wLabsChart3"),s).render()),a("#wLabsChart4").length&&(s=t,Object.assign(s,{colors:["#9ACAA1"]}),Object.assign(s,{series:[{data:[3840,3844,3841,3837,3838,3841]}]}),new ApexCharts(document.querySelector("#wLabsChart4"),s).render()),a("#wLabsChart5").length&&(s=t,Object.assign(s,{colors:["#9ACAA1"]}),Object.assign(s,{series:[{data:[3840,3841,3839,3841,3839,3841,3839]}]}),new ApexCharts(document.querySelector("#wLabsChart5"),s).render()),a("#wLabsChart6").length&&(s=t,Object.assign(s,{colors:["#9ACAA1"]}),Object.assign(s,{series:[{data:[3844,3848,3845,3850,3845,3848,3847]}]}),new ApexCharts(document.querySelector("#wLabsChart6"),s).render()),a("#wLabsChart7").length&&(s=t,Object.assign(s,{colors:["#9ACAA1"]}),Object.assign(s,{series:[{data:[3850,3851,3849,3852,3848,3853]}]}),new ApexCharts(document.querySelector("#wLabsChart7"),s).render()),a("#wLabsChart8").length&&(s=t,Object.assign(s,{colors:["#D27E7B"]}),Object.assign(s,{series:[{data:[3840,3844,3841,3842,3838,3843]}]}),new ApexCharts(document.querySelector("#wLabsChart8"),s).render()),a("#wLabsChart9").length&&(s=t,Object.assign(s,{colors:["#9ACAA1"]}),Object.assign(s,{series:[{data:[3840,3844,3841,3837,3838,3841]}]}),new ApexCharts(document.querySelector("#wLabsChart9"),s).render()),{chart:{type:"line",height:40,sparkline:{enabled:!0}},stroke:{width:3,curve:"smooth"},markers:{size:0},tooltip:{enabled:!1}});a("#wLabsChart10").length&&(s=t,Object.assign(s,{colors:["#9ACAA1"]}),Object.assign(s,{series:[{data:[3840,3852,3841,3850,3842,3854,3847]}]}),new ApexCharts(document.querySelector("#wLabsChart10"),s).render()),a("#wLabsChart11").length&&(s=t,Object.assign(s,{colors:["#9ACAA1"]}),Object.assign(s,{series:[{data:[3851,3840,3848,3839,3850,3842,3854,3841]}]}),new ApexCharts(document.querySelector("#wLabsChart11"),s).render()),a("#wLabsChart12").length&&(s=t,Object.assign(s,{colors:["#D27E7B"]}),Object.assign(s,{series:[{data:[3852,3839,3848,3842,3855,3832,3847,3831]}]}),new ApexCharts(document.querySelector("#wLabsChart12"),s).render()),a("#wLabsChart13").length&&(s=t,Object.assign(s,{colors:["#D27E7B"]}),Object.assign(s,{series:[{data:[3840,3852,3841,3850,3842,3854,3847]}]}),new ApexCharts(document.querySelector("#wLabsChart13"),s).render()),a("#wLabsChart14").length&&(s=t,Object.assign(s,{colors:["#9ACAA1"]}),Object.assign(s,{series:[{data:[3851,3840,3848,3839,3850,3842,3854,3841]}]}),new ApexCharts(document.querySelector("#wLabsChart14"),s).render()),a("#wLabsChart15").length&&(s=t,Object.assign(s,{colors:["#D27E7B"]}),Object.assign(s,{series:[{data:[3852,3839,3848,3842,3855,3832,3847,3831]}]}),new ApexCharts(document.querySelector("#wLabsChart15"),s).render()),a("#wLabsChart16").length&&(s=t,Object.assign(s,{colors:["#9ACAA1"]}),Object.assign(s,{series:[{data:[3840,3852,3841,3850,3842,3854,3847]}]}),new ApexCharts(document.querySelector("#wLabsChart16"),s).render()),a("#wLabsChart17").length&&(s=t,Object.assign(s,{colors:["#9ACAA1"]}),Object.assign(s,{series:[{data:[3851,3840,3848,3839,3850,3842,3854,3841]}]}),new ApexCharts(document.querySelector("#wLabsChart17"),s).render()),a("#wLabsChart18").length&&(s=t,Object.assign(s,{colors:["#D27E7B"]}),Object.assign(s,{series:[{data:[3852,3839,3848,3842,3855,3832,3847,3831]}]}),new ApexCharts(document.querySelector("#wLabsChart18"),s).render()),a("#wLabsChart19").length&&(s=t,Object.assign(s,{colors:["#D27E7B"]}),Object.assign(s,{series:[{data:[3840,3852,3841,3850,3842,3854,3847]}]}),new ApexCharts(document.querySelector("#wLabsChart19"),s).render()),a("#wLabsChart20").length&&(s=t,Object.assign(s,{colors:["#9ACAA1"]}),Object.assign(s,{series:[{data:[3851,3840,3848,3839,3850,3842,3854,3841]}]}),new ApexCharts(document.querySelector("#wLabsChart20"),s).render()),a("#wLabsChart21").length&&(s=t,Object.assign(s,{colors:["#D27E7B"]}),Object.assign(s,{series:[{data:[3852,3839,3848,3842,3855,3832,3847,3831]}]}),new ApexCharts(document.querySelector("#wLabsChart21"),s).render()),a("#wLabsChart22").length&&(s=t,Object.assign(s,{colors:["#9ACAA1"]}),Object.assign(s,{series:[{data:[3840,3852,3841,3850,3842,3854,3847]}]}),new ApexCharts(document.querySelector("#wLabsChart22"),s).render()),a("#wLabsChart23").length&&(s=t,Object.assign(s,{colors:["#9ACAA1"]}),Object.assign(s,{series:[{data:[3851,3840,3848,3839,3850,3842,3854,3841]}]}),new ApexCharts(document.querySelector("#wLabsChart23"),s).render()),a("#wLabsChart24").length&&(s=t,Object.assign(s,{colors:["#D27E7B"]}),Object.assign(s,{series:[{data:[3852,3839,3848,3842,3855,3832,3847,3831]}]}),new ApexCharts(document.querySelector("#wLabsChart24"),s).render()),a("#wLabsChart25").length&&(s=t,Object.assign(s,{colors:["#D27E7B"]}),Object.assign(s,{series:[{data:[3840,3852,3841,3850,3842,3854,3847]}]}),new ApexCharts(document.querySelector("#wLabsChart25"),s).render()),a("#wLabsChart26").length&&(s=t,Object.assign(s,{colors:["#9ACAA1"]}),Object.assign(s,{series:[{data:[3851,3840,3848,3839,3850,3842,3854,3841]}]}),new ApexCharts(document.querySelector("#wLabsChart26"),s).render()),a("#wLabsChart27").length&&(s=t,Object.assign(s,{colors:["#D27E7B"]}),Object.assign(s,{series:[{data:[3852,3839,3848,3842,3855,3832,3847,3831]}]}),new ApexCharts(document.querySelector("#wLabsChart27"),s).render()),a("#wLabsChart28").length&&(s=t,Object.assign(s,{colors:["#9ACAA1"]}),Object.assign(s,{series:[{data:[3840,3852,3841,3850,3842,3854,3847]}]}),new ApexCharts(document.querySelector("#wLabsChart28"),s).render()),a("#wLabsChart29").length&&(s=t,Object.assign(s,{colors:["#9ACAA1"]}),Object.assign(s,{series:[{data:[3851,3840,3848,3839,3850,3842,3854,3841]}]}),new ApexCharts(document.querySelector("#wLabsChart29"),s).render()),a("#wLabsChart30").length&&(s=t,Object.assign(s,{colors:["#D27E7B"]}),Object.assign(s,{series:[{data:[3852,3839,3848,3842,3855,3832,3847,3831]}]}),new ApexCharts(document.querySelector("#wLabsChart30"),s).render()),a("#wLabsChart31").length&&(s=t,Object.assign(s,{colors:["#9ACAA1"]}),Object.assign(s,{series:[{data:[3840,3852,3841,3850,3842,3854,3847]}]}),new ApexCharts(document.querySelector("#wLabsChart31"),s).render()),a("#wLabsChart32").length&&(s=t,Object.assign(s,{colors:["#9ACAA1"]}),Object.assign(s,{series:[{data:[3851,3840,3848,3839,3850,3842,3854,3841]}]}),new ApexCharts(document.querySelector("#wLabsChart32"),s).render()),a("#wLabsChart33").length&&(s=t,Object.assign(s,{colors:["#D27E7B"]}),Object.assign(s,{series:[{data:[3852,3839,3848,3842,3855,3832,3847,3831]}]}),new ApexCharts(document.querySelector("#wLabsChart33"),s).render())},wSigns:function(e){a("#wSignsChart1").length&&new ApexCharts(document.querySelector("#wSignsChart1"),{series:[{data:[{x:2010,y:68},{x:2011,y:80},{x:2012,y:60},{x:2013,y:86},{x:2014,y:53},{x:2015,y:96},{x:2016,y:60},{x:2017,y:78},{x:2018,y:55},{x:2019,y:74},{x:2020,y:25},{x:2021,y:80},{x:2012,y:50}]}],zoom:{autoScaleYaxis:!0},chart:{height:450,type:"line",stacked:!0,toolbar:{show:!1},animations:{enabled:!0,easing:"easeinout",speed:400},zoom:{enabled:!1,autoScaleYaxis:!0}},colors:["#9ACAA1","#545454"],dataLabels:{enabled:!0,offsetY:-10,style:{fontSize:"14px",fontFamily:"Poppins",fontWeight:"300",colors:["#000"]},background:{enabled:!1}},stroke:{width:4,curve:"smooth"},grid:{borderColor:"#ECECEC"},markers:{size:6,colors:"#FFF",strokeColors:"#9ACAA1",strokeWidth:4,shape:"circle",radius:10,showNullDataPoints:!0},tooltip:{enabled:!1},xaxis:{type:"category",labels:{show:!0,style:{colors:["#4A4A4A"],fontSize:"14px",fontFamily:"Poppins",fontWeight:300,rotateAlways:!1},minWidth:800,offsetY:8,offsetX:-5},min:0,axisTicks:{show:!1},axisBorder:{show:!1},floating:!1},yaxis:{opposite:!0,min:0,max:160,tickAmount:4,labels:{show:!0,style:{colors:["#000000"],fontSize:"14px",fontFamily:"Poppins",fontWeight:300},offsetX:-10,offsetY:2}}}).render()}}).init()}),jQuery(function(a){"use strict";({init:function(){this.install=this.install(this)},install:function(){a(document).on("click",".dropdown__item",this.open),a(document).on("click",".dropdown__list a",this.close)},open:function(e){var s=a(this),t=s.parent().parent().parent();s.parent().hasClass("active")?(t.removeClass("active"),s.parent().parent().find(".active").removeClass("active")):(a(document).find(".dropdown").removeClass("active").find("active").removeClass("active"),s.parent().toggleClass("active")),e.preventDefault()},close:function(e){var s=a(this),t=s.parent().parent().parent();t.removeClass("active"),s.parent().parent().find(".active").removeClass("active"),s.parent().addClass("active"),t.find(".dropdown__item span").html(s.html()),e.preventDefault()}}).init()}),jQuery(function(t){"use strict";({init:function(){this.install=this.install(this)},install:function(){t(document).on("click",".w_history__timeline-years-item",this.years),t(document).on("click",".w_history__nav-list-item",this.nav)},years:function(e){var s=t(this);s.parent().addClass("active"),s.parent().closest("li").prevAll().addClass("active"),s.parent().closest("li").nextAll().removeClass("active"),e.preventDefault()},nav:function(e){var s=t(this);s.parent().parent().find(".active").removeClass("active"),s.parent().addClass("active"),e.preventDefault()}}).init()}),jQuery(function(e){"use strict";({init:function(){this.install=this.install(this)},install:function(){},intro:function(e){e.preventDefault()}}).init()}),jQuery(function(a){"use strict";({init:function(){this.install=this.install(this)},install:function(){a(document).on("click",".linkes__item",this.show_timeline)},show_timeline:function(e){var s=a(this),t=s.data("content");s.hasClass("active")?(s.removeClass("active"),a(".linkes-content.active").removeClass("active")):(s.parent().parent().find(".active").removeClass("active"),s.addClass("active"),a(".linkes-content.active").removeClass("active"),a(t).addClass("active")),e.preventDefault()}}).init()}),jQuery(function(t){"use strict";({init:function(){this.install=this.install(this)},install:function(){t(document).on("click","[data-modal]",this.open),t(document).on("click","[data-modal-close]",this.close)},open:function(e){var s=t(this).data("modal");t(s).toggleClass("active"),e.preventDefault()},close:function(e){var s=t(this).data("modal-close");t(s).removeClass("active"),e.preventDefault()}}).init()}),jQuery(function(t){"use strict";({init:function(){this.install=this.install(this)},install:function(){t(document).on("click",".w_patient__tabs-list--item",this.placeholder)},placeholder:function(e){var s=t(this).offset().top-t(".w_patient__tabs-list").offset().top;t(".w_patient__tabs-list--placeholder").css("top",s),e.preventDefault()}}).init()}),jQuery(function(e){"use strict";({init:function(){this.install=this.install(this),this.labsTab=this.labsTab(this),this.signsTab=this.signsTab(this),this.imagingScroll=this.imagingScroll(this),this.roundsScroll=this.roundsScroll(this),this.hoursScroll=this.hoursScroll(this),this.daysScroll=this.daysScroll(this),this.weeksScroll=this.weeksScroll(this),this.monthsScroll=this.monthsScroll(this),this.labsSwiper=this.labsSwiper(this)},install:function(){},labsTab:function(){new Swiper(".wLabsSliderTab",{slidesPerView:"auto",spaceBetween:30,loop:!1,slideToClickedSlide:!1,slidesOffsetBefore:30,slidesOffsetAfter:30})},signsTab:function(){new Swiper(".wSignsSliderTab",{slidesPerView:"auto",spaceBetween:15,loop:!1,slideToClickedSlide:!1})},imagingScroll:function(){new Swiper(".imagingScroll .swiper",{direction:"horizontal",slidesPerView:"auto",observer:!0,observeParents:!0,freeMode:{},scrollbar:{el:".imagingScroll .scroll_line__handle",draggable:!0,snapOnRelease:!1,dragClass:"scroll_line__handle-drag",horizontalClass:"scroll_line__handle"},mousewheel:!0})},roundsScroll:function(){new Swiper(".roundsScroll .swiper",{direction:"horizontal",slidesPerView:"auto",observer:!0,observeParents:!0,freeMode:{},scrollbar:{el:".roundsScroll .scroll_line__handle",draggable:!0,snapOnRelease:!1,dragClass:"scroll_line__handle-drag",horizontalClass:"scroll_line__handle"},mousewheel:!0})},hoursScroll:function(){new Swiper(".hoursScroll .swiper",{direction:"horizontal",slidesPerView:"auto",observer:!0,observeParents:!0,freeMode:{},scrollbar:{el:".hoursScroll .scroll_line__handle",draggable:!0,snapOnRelease:!1,dragClass:"scroll_line__handle-drag",horizontalClass:"scroll_line__handle"},mousewheel:!0})},daysScroll:function(){new Swiper(".daysScroll .swiper",{direction:"horizontal",slidesPerView:"auto",observer:!0,observeParents:!0,freeMode:{},scrollbar:{el:".daysScroll .scroll_line__handle",draggable:!0,snapOnRelease:!1,dragClass:"scroll_line__handle-drag",horizontalClass:"scroll_line__handle"},mousewheel:!0})},weeksScroll:function(){new Swiper(".weeksScroll .swiper",{direction:"horizontal",slidesPerView:"auto",observer:!0,observeParents:!0,freeMode:{},scrollbar:{el:".weeksScroll .scroll_line__handle",draggable:!0,snapOnRelease:!1,dragClass:"scroll_line__handle-drag",horizontalClass:"scroll_line__handle"},mousewheel:!0})},monthsScroll:function(){new Swiper(".monthsScroll .swiper",{direction:"horizontal",slidesPerView:"auto",observer:!0,observeParents:!0,freeMode:{},scrollbar:{el:".monthsScroll .scroll_line__handle",draggable:!0,snapOnRelease:!1,dragClass:"scroll_line__handle-drag",horizontalClass:"scroll_line__handle"},mousewheel:!0})},labsSwiper:function(){new Swiper(".labsSwiper .swiper",{slidesPerView:"auto",spaceBetween:66,loop:!1,grabCursor:!0,slidesOffsetAfter:66})}}).init()}),jQuery(function(r){"use strict";({init:function(){this.install=this.install(this)},install:function(){r(document).on("click","[data-tab]",this.tab)},tab:function(e){var s=r(this),t="#"+s.data("tab"),a=s.attr("href");r(t).find(".active").removeClass("active"),s.addClass("active"),r(a).parent().find(".active").removeClass("active"),r(a).addClass("active"),e.preventDefault()}}).init()}),jQuery(function(i){"use strict";let l={};({init:function(){this.install=this.install(this)},install:function(){i(document).on("click",".zoomPlus",this.plus),i(document).on("click",".zoomMinus",this.minus)},plus:function(e){var s=i(this),t=s.data("zoom-target"),a=i("[data-zoom="+t+"]"),r=s.parent().find(".zoomMinus");void 0!==l[t]?l[t]++:l[t]=4,r.hasClass("disabled")&&r.removeClass("disabled"),a.attr("data-zoom-level",l[t]),6===l[t]&&s.addClass("disabled");const n=document.querySelector("."+t+"Scroll .swiper").swiper;setTimeout(function(){n.update(),n.scrollbar.setTranslate()},200),e.preventDefault()},minus:function(e){var s=i(this),t=s.data("zoom-target"),a=i("[data-zoom="+t+"]"),r=s.parent().find(".zoomPlus");void 0!==l[t]?l[t]--:l[t]=2,r.hasClass("disabled")&&r.removeClass("disabled"),a.attr("data-zoom-level",l[t]),0===l[t]&&s.addClass("disabled");const n=document.querySelector("."+t+"Scroll .swiper").swiper;setTimeout(function(){n.update(),n.scrollbar.setTranslate()},200),e.preventDefault()}}).init()});
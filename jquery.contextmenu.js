/*******************************************************************************
 * jquery.contextmenu.js plugin.
 *
 * jQuery plugin that provides a context menu (based on the jQueryUI menu widget).
 *
 * @see https://github.com/mar10/jquery-contextmenu
 *
 * Copyright (c) 2013, Martin Wendt (http://wwWendt.de). Licensed MIT.
 */

(function ($) {
	function getMenuFromEvent(event){
		var menu = $(event.target).closest(":ui-menu"),
		$menu = $(menu);
		return $menu.data("ui-menu") || $menu.data("menu");
	}
/*
	var startTime, endTime;
	var gbMove = false;

	window.addEventListener('touchstart',function(event) {
		startTime = new Date().getTime();
		gbMove = false;
		alert('tap hold s event');
	}, false);

	window.addEventListener('touchmove',function(event) {
	  gbMove = true;
	}, false);

	window.addEventListener('touchend',function(event) {
		endTime = new Date().getTime();
		if(!gbMove && (endTime-startTime)/1000 > 2){
			alert('tap hold event');
		}
	}, false);
*/
	$.widget("ui.contextmenu", {
		version: "0.0.1",
		options: {
			delegate: "[data-menu]",  // selector
			ignoreParentSelect: true, // Don't trigger 'select' for sub-menu parents
			menu: null,      // selector or jQuery or a function returning such
			taphold: 800, // open menu after 2000 ms long touch
			// Events:
			beforeOpen: $.noop, // menu about to open; return `false` to prevent opening
			blur: $.noop,       // menu option lost focus
			close: $.noop,      // menu was closed
			create: $.noop,     // menu was initialized
			focus: $.noop,      // menu option got focus
			init: $.noop,       // ui-contextmenu was initialized
			open: $.noop,       // menu was opened
			select: $.noop      // menu option was selected; return `false` to prevent closing
		},
		_create: function () {
//			var self = this;
			this.element.delegate(this.options.delegate, "contextmenu.contextmenu", $.proxy(this._openMenu, this));
			// emulate a 'taphold' event
/*
			var tapStartHandler = function(event){
				console.log("Event ", event.type, this.tapTimer);
				tapClearHandler(event);
				this.tapTimer = setTimeout(function(){
					console.log("Timeout ", event.type, this.tapTimer, event.target);
					alert("Timeout " + event.type + this.tapTimer + " " + $(event.target).text());
					this.open.call(this, $(event.target));
					this.tapTimer = null;
				}, this.options.taphold);
				console.log("Event started ", event.type, this.tapTimer);
			};
			var tapClearHandler = function(event){
				if(this.tapTimer){
					console.log("clear " + this.tapTimer);
					clearTimeout(this.tapTimer);
					this.tapTimer = null;
				}
			};
			var tapEndHandler = function(event){
				if(this.tapTimer){
					tapClearHandler(event);
					return false;
				}
			};
			this.element
				.delegate(this.options.delegate, "touchstart.contextmenu", $.proxy(tapStartHandler, this))
				.delegate(this.options.delegate, "touchend.contextmenu", $.proxy(tapEndHandler, this))
				.delegate(this.options.delegate, "touchmove.contextmenu", $.proxy(tapClearHandler, this));
*/
//			this.element.delegate(this.options.delegate, "touchstart.contextmenu", $.proxy(function(event, ui){
//				var self = this;
//				console.log("Event ", event.type, this.tapTimer);
//				if(this.tapTimer){
//					console.log(" clear " + this.tapTimer);
//					clearTimeout(this.tapTimer);
//					thi

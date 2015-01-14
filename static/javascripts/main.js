var robotron;
var root, debug;
var player;
var canvas, context;


function init() {
	/*
	root = document.getElementById("play-area");
	debug = document.getElementById("debug");
	*/
	canvas = document.getElementById("blinky-canvas");
	canvas.width = 1280;
	canvas.height = 100;
	context = canvas.getContext("2d");
	initAnimationFrame();
	app = new App();
	app.init();
}

function initAnimationFrame() {
	var lastTime = 0;
	var vendors = ['ms', 'moz', 'webkit', 'o'];
	for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
		window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
		window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || 
		window[vendors[x] + 'CancelRequestAnimationFrame'];
	}
	
	if (!window.requestAnimationFrame)
		window.requestAnimationFrame = function(callback, element) {
			var currTime = new Date().getTime();
			var timeToCall = Math.max(0, 16 - (currTime - lastTime));
			var id = window.setTimeout(function() {
				callback(currTime + timeToCall);
			}, timeToCall);
			lastTime = currTime + timeToCall;
			return id;
		};

	if (!window.cancelAnimationFrame)
		window.cancelAnimationFrame = function(id) {
			clearTimeout(id);
		};
}

document.addEventListener("DOMContentLoaded", function() {
	init();
});

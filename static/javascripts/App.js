var App = function(canvas, context) {
	this.canvas = canvas;
	this.context = context;
	this.blinkytape = null;
};

App.prototype.init = function() {
	this.blinkytape = new BlinkyTape(this.canvas, this.context);
	this.blinkytape.init();
};

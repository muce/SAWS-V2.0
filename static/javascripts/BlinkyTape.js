var BlinkyTape = function(canvas, context) {
	this.NUM_BLOCKS = LENGTHS.length;
	this.NUM_LEDS = MAX_LEDS;
	
	//alert(COLOURS);
	
	this.canvas = canvas;
	this.context = context;
	this.blocks = [];
	this.leds = 0;
};

BlinkyTape.prototype.init = function() {
	alert("BlinkyTape.init BLOCKS:"+this.NUM_BLOCKS);
	this.blocks = new Array(this.NUM_BLOCKS);
	this.leds = 20;//this.NUM_LEDS/this.NUM_BLOCKS;
	var cell_width = Math.floor(this.canvas.width/this.leds);
	var ox = 20;
	var oy = 50;
	var r = 8;
	var c = COLOURS.green; //"#00ffff";
	//for (var i=0; i<this.blocks.length; i++) {
	for (var i=0; i<this.blocks.length; i++) {
		alert("fucking write block "+i);
		ox += cell_width*5; 
		if (i>0) {
			c = COLOURS.red;
		}
		this.blocks[i] = new BlinkyBlock(this.canvas, this.context, 8);//this.leds);
		this.blocks[i].init(ox, oy, r, c);
	}
};

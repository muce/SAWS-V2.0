var BlinkyBlock = function(canvas, context, leds) {
	//alert("BlinkyBlock x"+x+", y"+y+", r"+r);
	this.canvas = canvas;
	this.context = context;
	this.x = 0;
	this.y = 0;
	this.r = 0;
	this.c = "#ffff00";
	this.leds = leds;
};

BlinkyBlock.prototype.init = function(x, y, r, c) {
	this.x = x;
	this.y = y;
	this.r = r;
	this.c = c;
	for (var i=0; i<this.leds; i++) {
		this.drawCircle(i);	
	}
};

BlinkyBlock.prototype.drawCircle = function(i) {
      var centerX = this.x;
      var centerY = this.y;
      var radius = this.r;
      
      this.context.beginPath();
      this.context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
      this.context.fillStyle = this.c;
      this.context.fill();
      
      this.x += 20; 
      
      //this.context.lineWidth = 1;
      //this.context.strokeStyle = "#ffffff";
      //this.context.stroke();
};
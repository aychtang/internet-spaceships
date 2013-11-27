var ViewPort = function(x, y, following, vpWidth, vpHeight) {
	this.x = x;
	this.y = y;
	this.vpWidth = vpWidth;
	this.vpHeight = vpHeight;
	this.following = following;
};

ViewPort.prototype.follow = function(obj) {
	this.following = obj;
};

ViewPort.prototype.update = function() {
	var following = this.following;
	if (following) {
		var newPositionX = following.x - this.vpWidth / 2;
		if (newPositionX > 0) {
			this.x = newPositionX;
		}
		var newPositionY = following.y - this.vpHeight / 2;
		if (newPositionY > 0) {
			this.y = newPositionY;
		}
	}
};
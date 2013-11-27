var Bullet = function(x, y, rotation) {
    this.x = x;
    this.y = y;
    this.rotation = rotation;
    this.vx = Math.sin(degreesToRad(this.rotation)) * 10;
    this.vy = Math.cos(degreesToRad(this.rotation)) * 10;
    this.size = 60;
};

Bullet.prototype.update = function() {
    this.x += this.vx;
    this.y -= this.vy;
};

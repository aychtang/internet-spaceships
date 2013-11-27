var Ship = function(x, y, maxThrust, turnrate, size) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.thrust = 0;
    this.maxThrust = maxThrust;
    this.turnrate = turnrate;
    this.rotation = 0;
    this.size = size;
    this.hp = 100;
};

Ship.prototype.update = function(keyMap) {
    if (keyMap.left) {
        this.left();
    }
    if (keyMap.right) {
        this.right();
    }
    if (keyMap.up) {
        this.accelerate();
    }

    this.x += this.vx;
    this.y -= this.vy;
    if (this.x < 0) this.vx = 2;
    if (this.y <= 0) this.vy = - 2;
    if (this.x > document.body.clientWidth) this.vx = - 2;
    if (this.y > document.body.clientHeight) this.vy = 2;
};

Ship.prototype.accelerate = function() {
    this.thrust += 0.1;
    if (this.thrust >= this.maxThrust) {
        this.thrust = this.maxThrust;
    }
    this.vx += Math.sin(degreesToRad(this.rotation)) * this.thrust;
    this.vy += Math.cos(degreesToRad(this.rotation)) * this.thrust;
};

Ship.prototype.left = function() {
    this.rotation -= this.turnrate;
};

Ship.prototype.right = function() {
    this.rotation += this.turnrate;
};

Ship.prototype.fire = function(bullets) {
    bullets.push(new Bullet(this.x + this.size / 4, this.y + this.size / 4, this.rotation));
};

Ship.prototype.takeDamage = function(dmg) {
    this.hp -= dmg;
};

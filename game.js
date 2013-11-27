var Game = function(canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext('2d');
    this.gameWidth = 10000;
    this.gameHeight = 10000;
    this.spaceshipImage = this.setImage('grumpy.png', function() {
        window.gameView.init();
    });
    this.spaceShipAccelImage = this.setImage('smileCat.png');
    this.bulletImage = this.setImage('bullet.jpg');
    this.keyMap = {
        left: undefined,
        right: undefined,
        up: undefined,
        down: undefined
    };
    this.bullets = [];
    this.ships = [];
    this.canvas.height = document.body.clientHeight;
    this.canvas.width = document.body.clientWidth;
    this.viewPort = new ViewPort(0, 0, undefined, this.canvas.height, this.canvas.width);
};

Game.prototype.setImage = function(src, cb) {
    var image = new Image();
    image.src = src;
    if (cb) {
        image.onload = cb;
    }
    return image;
};

Game.prototype.init = function() {
    this.ships.push(new Ship(canvas.width / 2, canvas.height / 2, 0.1, 5, 128));
    this.gameLoop = setInterval(function() {
        this.loop();
    }.bind(this), 14);
};

Game.prototype.clear = function() {
    this.canvas.width = this.canvas.width;
};

Game.prototype.renderObj = function(obj, img) {
    var halfSize = obj.size / 2;
    var c = this.context;
    c.save();
    c.translate(obj.x, obj.y);
    c.translate(halfSize, halfSize);
    c.rotate(degreesToRad(obj.rotation));
    c.drawImage(img, -halfSize, -halfSize);
    c.restore();
};

Game.prototype.loop = function() {
    this.clear();
    for (var i = 0; i < this.bullets.length; i++) {
        this.bullets[i].update();
        this.renderObj(this.bullets[i], this.bulletImage);
    }
    for (var i = 0; i < this.ships.length; i++) {
        this.ships[i].update(this.keyMap);
        this.renderObj(this.ships[i], this.keyMap.up ? this.spaceShipAccelImage : this.spaceshipImage);
    }
};

Game.prototype.fire = function() {
    for (var i = 0; i < this.ships.length; i++) {
        this.ships[i].fire(this.bullets);
    }
};
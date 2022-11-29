const MovingObject = require("./moving_object");
const Util = require("./util");

const COLOR = "red";
const RADIUS = 10;

class Asteroid extends MovingObject{
    constructor(options) {
        super(options);
        this.pos = options.pos;
        this.color = COLOR;
        this.radius = RADIUS;
        this.vel = Util.randomVec(1);
    }
}

module.exports = Asteroid;

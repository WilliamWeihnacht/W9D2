// const Game = require("./game");

const Util = require("./util");

class MovingObject {
    constructor (options) {
        this.pos = options.pos;
        this.vel = options.vel;
        this.radius = options.radius;
        this.color = options.color;
        this.game = options.game;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.pos[0],this.pos[1],this.radius,0,2*Math.PI, true);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    move() {
        let newPos = [this.pos[0] + this.vel[0],this.pos[1] + this.vel[1]];
        this.pos = this.game.wrap(newPos);
    }

    isCollidedWith(otherObject) {
        let sumOfRadii = this.radius + otherObject.radius;
        if (Util.distance(this.pos,otherObject.pos) < sumOfRadii) return true;
        return false;
    }
}
module.exports = MovingObject;
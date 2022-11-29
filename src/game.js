const Asteroid = require("./asteroid");

const DIM_X = 500;
const DIM_Y = 500;
const NUM_ASTEROIDS = 5;

class Game {


    constructor() {
        this.asteroids = [];
        this.addAsteroids();
    }

    draw(ctx) {
        ctx.clearRect(0,0,DIM_X,DIM_Y);
        this.asteroids.forEach((el)=>{
            el.draw(ctx);
        });
    }

    addAsteroids(){
        for (let i = 0; i < NUM_ASTEROIDS; i++) {
            let a = new Asteroid({pos: this.randomPosition()});
            this.asteroids.push(a);
        }
    }

    randomPosition(){
        const x = Math.floor(Math.random() * DIM_X);
        const y = Math.floor(Math.random() * DIM_Y);
        return [x,y];
    }

    moveObjects() {
        this.asteroids.forEach(astr => astr.move()) // we haven't created method MOVE yet
    }

}

module.exports = Game;
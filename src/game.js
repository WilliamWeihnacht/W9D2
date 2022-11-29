const Asteroid = require("./asteroid");

const DIM_X = 500;
const DIM_Y = 500;
const NUM_ASTEROIDS = 4;

class Game {


    constructor() {
        this.asteroids = [];
        this.addAsteroids();
        // this.checkCollisions();
    }

    draw(ctx) {
        ctx.clearRect(0,0,DIM_X,DIM_Y);
        this.asteroids.forEach((el)=>{
            el.draw(ctx);
        });
    }

    addAsteroids(){
        for (let i = 0; i < NUM_ASTEROIDS; i++) {
            let a = new Asteroid({pos: this.randomPosition(), game: this});
            this.asteroids.push(a);
        }
    }

    randomPosition(){
        const x = Math.floor(Math.random() * DIM_X);
        const y = Math.floor(Math.random() * DIM_Y);
        return [x,y];
    }

    moveObjects() {
        this.asteroids.forEach(astr => astr.move());
    }

    wrap(pos) {
        if (pos[0] > DIM_X) {
            pos[0] = 0;
        }

        if (pos[0] < 0) {
            pos[0] = DIM_X;
        }

        if (pos[1] > DIM_Y) {
            pos[1] = 0;
        }

        if (pos[1] < 0) {
            pos[1] = DIM_Y;
        }
        return pos;
    }

    checkCollisions(){
        for(let i = 0; i < this.asteroids.length; i++){
            for(let j= i+1; j < this.asteroids.length; j++){
                if(this.asteroids[i].isCollidedWith(this.asteroids[j])) alert("COLLISION");
            }
        }

    }

    step(){
        this.moveObjects();
        this.checkCollisions();
    }

    remove(asteroid) {

    } 

    collideWith() {
        
    }

}

module.exports = Game;
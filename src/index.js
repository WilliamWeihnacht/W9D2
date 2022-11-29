const MovingObject = require("./moving_object.js");
const Util = require("./util.js");
const Asteroid = require("./asteroid.js");
const GameView = require("./game_view.js");

window.MovingObject = MovingObject;

const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");
window.ctx = ctx;

const gameView = new GameView();
canvas.width = 500;
canvas.height = 500;
//canvas.strokeStyle = "black";
// canvas.setAttribute("width",gameView.game.DIM_X);
// canvas.setAttribute("height",gameView.game.DIM_Y);
gameView.start();

const mo = new MovingObject({
    pos: [30, 30],
    vel: [10, 10],
    radius: 5,
    color: "black"
});

mo.draw(ctx);
const asteroid = new Asteroid({ pos: [170, 170] });
asteroid.draw(ctx);

console.log("Webpack is working!")
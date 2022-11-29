const Game = require("./game");

class GameView {
    constructor(ctx) {
        this.ctx = ctx;
        this.game = new Game();
    }

    start(){
        // setInterval(this.game.moveObjects(),20);
        // setInterval(this.game.draw(ctx), 20)
        setInterval(()=>{
            this.game.moveObjects();
            this.game.draw(ctx);
        }, 20);
    }


}

module.exports = GameView;
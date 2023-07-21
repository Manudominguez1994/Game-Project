class Game{
    constructor(){
        this.player = new Hero();
    }



    gameLoop = () =>{
        console.log("hola");
        requestAnimationFrame(this.gameLoop);
    }
}
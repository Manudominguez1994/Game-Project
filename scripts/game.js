class Game{
    constructor(){
       
        this.player = new Hero();


    }
    


    gameLoop = () =>{
        
        requestAnimationFrame(this.gameLoop);
    }
}
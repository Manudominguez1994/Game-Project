class Hero{
    constructor(){

        this.playerNode = document.createElement('img')
        this.playerNode.src = "./images/player.png";
        gameBoxNode.append(this.playerNode)

        this.x=400;
        this.y=550;
        this.w=40;
        this.h=40;

        this.playerNode.style.width = `${this.w}px`
        this.playerNode.style.height = `${this.h}px`
        this.playerNode.style.position = "absolute"
        this.playerNode.style.top = `${this.y}px`
        this.playerNode.style.left = `${this.x}px`
    }

}
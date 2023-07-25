class Exitwin{
constructor(){
    
    this.exitNode = document.createElement("img");
    this.exitNode.src = "./images/player.png";
    gameBoxNode.append(this.exitNode);

    this.x = 750;
    this.y = 15;
    this.w = 45;
    this.h = 45;

    this.exitNode.style.width = `${this.w}px`;
    this.exitNode.style.height = `${this.h}px`;
    this.exitNode.style.position = "absolute";
    this.exitNode.style.top = `${this.y}px`;
    this.exitNode.style.left = `${this.x}px`;

}



}
class Hero {
  constructor() {

    this.playerNode = document.createElement("img");
    this.playerNode.src = "./images/player.png";
    gameBoxNode.append(this.playerNode);

    this.x = 400;
    this.y = 550;
    this.w = 45;
    this.h = 45;
    this.movementHero = 66.6;
    this.movimiento = true;

    this.playerNode.style.width = `${this.w}px`;
    this.playerNode.style.height = `${this.h}px`;
    this.playerNode.style.position = "absolute";
    this.playerNode.style.top = `${this.y}px`;
    this.playerNode.style.left = `${this.x}px`;
    
  }

  walkEffect = () => {
    if(this.x < 800 || this.x > 0 || this.y < 600 || this.y > 0){
    if (event.key === "ArrowUp") {
      this.y -= this.movementHero;
    } else if (event.key === "ArrowDown") {
      this.y += this.movementHero;
    } else if (event.key === "ArrowRight") {
      this.x += this.movementHero;
    } else if (event.key === "ArrowLeft") {
      this.x -= this.movementHero;
    }
    this.movementHeroUpdate();
  }else {this.movementHero = 0}
}
  movementHeroUpdate = () => {
    // if(this.movimiento === true){
    this.playerNode.style.top = `${this.y}px`;
    this.playerNode.style.left = `${this.x}px`;
  
}
  
}

 

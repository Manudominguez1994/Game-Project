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

    this.playerNode.style.width = `${this.w}px`;
    this.playerNode.style.height = `${this.h}px`;
    this.playerNode.style.position = "absolute";
    this.playerNode.style.top = `${this.y}px`;
    this.playerNode.style.left = `${this.x}px`;
  }

  walkEffect = () => {
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
  };

  movementHeroUpdate = () => {
    this.playerNode.style.top = `${this.y}px`;
    this.playerNode.style.left = `${this.x}px`;
  };
}

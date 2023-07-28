class Shoot {
  constructor(x, y) {
    this.shootNode = document.createElement("img");
    this.shootNode.src = "./images/boladefuego.png";
    gameBoxNode.append(this.shootNode);

    this.x = x;
    this.y = y;
    this.w = 20;
    this.h = 20;

    this.shootNode.style.width = `${this.w}px`;
    this.shootNode.style.height = `${this.h}px`;
    this.shootNode.style.position = "absolute";
    this.shootNode.style.top = `${this.y}px`;
    this.shootNode.style.left = `${this.x}px`;
  }
  automaticMovementShootFlower = () => {
    this.x -= 3;
    this.y -= 5;
    this.positionUpdateShootFlower();
  };

  positionUpdateShootFlower = () => {
    this.shootNode.style.top = `${this.y}px`;
    this.shootNode.style.left = `${this.x}px`;
    this.shootNode.style.position = "absolute";
  };
}

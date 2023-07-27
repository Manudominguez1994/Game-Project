class Exitwin {
  constructor() {
    this.exitNode = document.createElement("img");
    this.exitNode.src = "./images/puerta.png";
    gameBoxNode.append(this.exitNode);

    this.x = 740;
    this.y = 8;
    this.w = 55;
    this.h = 55;

    this.exitNode.style.width = `${this.w}px`;
    this.exitNode.style.height = `${this.h}px`;
    this.exitNode.style.position = "absolute";
    this.exitNode.style.top = `${this.y}px`;
    this.exitNode.style.left = `${this.x}px`;
  }
}

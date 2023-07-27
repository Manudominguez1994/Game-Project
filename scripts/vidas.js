class Vida {
  constructor(positionX,) {
    this.numVidaNode = document.createElement("img");
    this.numVidaNode.src = "./images/llamavida.png";
    gameBoxNode.append(this.numVidaNode);

    this.x = positionX;
    this.y = 6;
    this.w = 40;
    this.h = 52;

    this.numVidaNode.style.width = `${this.w}px`;
    this.numVidaNode.style.height = `${this.h}px`;
    this.numVidaNode.style.position = "absolute";
    this.numVidaNode.style.top = `${this.y}px`;
    this.numVidaNode.style.left = `${this.x}px`;
  }

  removeVidaNode = () => {
    this.numVidaNode.remove();
    this.numVidaNode = gameBoxNode.firstElementChild;
  };
}

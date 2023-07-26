class Vida {
    constructor(positionX, positionY){
            
            this.numVidaNode = document.createElement("img");
            this.numVidaNode.src = "./images/corazoncalavera.png";
            gameBoxNode.append(this.numVidaNode);
        
            this.x = positionX;
            this.y = positionY;
            this.w = 52;
            this.h = 52;
        
            this.numVidaNode.style.width = `${this.w}px`;
            this.numVidaNode.style.height = `${this.h}px`;
            this.numVidaNode.style.position = "absolute";
            this.numVidaNode.style.top = `${this.y}px`;
            this.numVidaNode.style.left = `${this.x}px`;
    
        }
    
    
        removeVidaNode = () =>{
              this.numVidaNode.remove();
              this.numVidaNode = gameBoxNode.firstElementChild;
              
          }
    }
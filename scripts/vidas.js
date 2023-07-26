class Vida {
    constructor(positionX, positionY, width, height){
            
            this.numVidaNode = document.createElement("img");
            this.numVidaNode.src = "./images/corazoncalavera.png";
            gameBoxNode.append(this.numVidaNode);
        
            this.x = positionX;
            this.y = positionY;
            this.w = width;
            this.h = height;
        
            this.numVidaNode.style.width = `${this.w}px`;
            this.numVidaNode.style.height = `${this.h}px`;
            this.numVidaNode.style.position = "absolute";
            this.numVidaNode.style.top = `${this.y}px`;
            this.numVidaNode.style.left = `${this.x}px`;
    
        }
    
    
    
    }
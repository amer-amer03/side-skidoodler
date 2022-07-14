import platformSheet from "../img/platform-sheet.png";
import { createImage } from "../js/utils";
const c = canvas.getContext("2d");

let image = createImage(platformSheet);

class PlatformNew {
  constructor({ startingPosX, startingPosY, framesX, framesY }) {
    this.position = {
      x: startingPosX,
      y: startingPosY,
    };
    this.spriteWidth = 50;
    this.spriteHeight = 50;
    this.width = this.spriteWidth;
    this.height = this.spriteHeight;
    this.image = image;
    this.framesX = framesX;
    this.framesY = framesY;
    this.blocks = [];
    this.platformWidth = this.width * this.framesX;
    this.platformHeight = this.height * this.framesY;
    this.platformPositionX = startingPosX;
    this.platformPositionY = startingPosY;
  }

  drawCollisionBox() {
    c.beginPath();
    c.rect(
      this.platformPositionX,
      this.platformPositionY,
      this.platformWidth,
      this.platformHeight
    );
    c.stroke();
  }
  draw() {
    this.platformPositionX = this.position.x + this.blocks[0].positionX;
    this.platformPositionY = this.position.y + this.blocks[0].positionY;

    this.blocks.map((el) => {
      c.drawImage(
        this.image,
        el.frameX,
        el.frameY,
        this.spriteWidth,
        this.spriteHeight,
        this.position.x + el.positionX,
        this.position.y + el.positionY,
        this.width,
        this.height
      );
    });
  }

  update() {
    this.draw();
    // this.drawCollisionBox();
  }
}

export default PlatformNew;

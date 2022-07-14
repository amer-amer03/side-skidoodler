import necoArcSheet from "../img/neco-arc-sheet.png";
import { createImage } from "../js/utils";

const canvas = document.querySelector("canvas");

const c = canvas.getContext("2d");

const gravity = 0.35;
const staggerFrames = 15;

class Player {
  constructor() {
    this.gameFrame = 0;
    this.speed = 3;
    this.isJumping = false;
    this.position = {
      x: 100,
      y: 300,
    };
    this.rectPosition = {
      x: this.position.x + 70,
      y: this.position.y + 38,
    };
    this.velocity = {
      x: 0,
      y: 0,
    };
    this.spriteWidth = 400;
    this.spriteHeight = 400;
    this.width = this.spriteWidth / 1.5;
    this.height = this.spriteHeight / 1.5;
    this.rectWidth = this.width - 210;
    this.rectHeight = this.height - 70;
    this.isAnimationfinished = false;
    this.frameX = 0;
    this.frameY = 0;
    this.playerState = "idle";
    this.spriteAnimations = [];
    this.animationStates = [
      {
        name: "idle",
        frames: 5,
        isLoop: true,
        animationRate: staggerFrames,
      },
      {
        name: "walk",
        frames: 8,
        isLoop: true,
        animationRate: staggerFrames,
      },
      {
        name: "walkReverse",
        frames: 8,
        isLoop: true,
        animationRate: staggerFrames,
      },
      {
        name: "jump",
        frames: 8,
        isLoop: false,
        animationRate: 12,
      },
      {
        name: "crouch",
        frames: 3,
        isLoop: false,
        animationRate: staggerFrames,
      },
      {
        name: "sleep",
        frames: 10,
        isLoop: true,
        animationRate: staggerFrames,
      },
      {
        name: "punch",
        frames: 4,
        isLoop: false,
        animationRate: staggerFrames,
      },
    ];
    this.image = createImage(necoArcSheet);
  }

  draw() {
    c.drawImage(
      this.image,
      this.frameX,
      this.frameY,
      this.spriteWidth,
      this.spriteHeight,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
  drawCollisionBox() {
    c.beginPath();
    c.rect(
      this.rectPosition.x,
      this.rectPosition.y,
      this.rectWidth,
      this.rectHeight
    );
    c.stroke();
  }

  update() {
    if (this.isAnimationfinished && this.playerState === "punch") {
      this.playerState = "idle";
    }
    let position = 0;
    position =
      Math.floor(
        this.gameFrame / this.spriteAnimations[this.playerState].animationRate
      ) % this.spriteAnimations[this.playerState].loc.length;
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    if (this.position.y + this.height + this.velocity.y <= canvas.height) {
      this.velocity.y += gravity;
    }
    this.rectPosition.x = this.position.x + 110;
    this.rectPosition.y = this.position.y + 38;
    this.draw();
    // this.drawCollisionBox();
    if (this.spriteAnimations[this.playerState].isLoop) {
      this.isAnimationfinished = false;
      this.frameX = this.spriteAnimations[this.playerState].loc[position].x;
      this.frameY = this.spriteAnimations[this.playerState].loc[position].y;
    } else if (
      !this.spriteAnimations[this.playerState].isLoop &&
      !this.isAnimationfinished
    ) {
      if (position === this.spriteAnimations[this.playerState].loc.length - 1) {
        this.isAnimationfinished = true;
      }
      this.frameX = this.spriteAnimations[this.playerState].loc[position].x;
      this.frameY = this.spriteAnimations[this.playerState].loc[position].y;
    }
    this.gameFrame++;
  }
}

export default Player;

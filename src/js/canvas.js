import platformImg from "../img/plat.png";
import background from "../img/back.png";
import Player from "./character";
import PlatformNew from "./platform";
const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
import { createImage } from "../js/utils";

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

canvas.width = 1000;
canvas.height = 1000;

let crouch = "";
class Platform {
  constructor({ x, y, image }) {
    this.position = {
      x,
      y,
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }
  draw() {
    c.drawImage(this.image, this.position.x, this.position.y);
  }
}
class genericObject {
  constructor({ x, y, image }) {
    this.position = {
      x,
      y,
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }
  draw() {
    c.drawImage(this.image, this.position.x, this.position.y);
  }
}

let platformImage = createImage(platformImg);

let player = new Player();

let platforms = [];
let platformsNew = [];
let genericObjects = [];

let keys = {
  right: {
    hold: false,
  },
  left: {
    hold: false,
  },
  up: {
    hold: false,
  },
  down: {
    pressed: false,
    hold: false,
  },
};
let scrollOffset = 0;

const init = () => {
  let block = [];

  platformImage = createImage(platformImg);

  player = new Player();
  player.animationStates.forEach((state, index) => {
    let frames = {
      loc: [],
      isLoop: false,
    };
    for (let j = 0; j < state.frames; j++) {
      let positionX = j * player.spriteWidth;
      let positionY = index * player.spriteHeight;
      frames.loc.push({ x: positionX, y: positionY });
      frames.isLoop = state.isLoop;
      frames.animationRate = state.animationRate;
    }
    player.spriteAnimations[state.name] = frames;
  });

  platformsNew = [
    new PlatformNew({
      startingPosX: -50,
      startingPosY: 900,
      framesX: 30,
      framesY: 3,
    }),

    new PlatformNew({
      startingPosX: 700,
      startingPosY: 750,
      framesX: 7,
      framesY: 2,
    }),

    // new PlatformNew({
    //   startingPosX: 700,
    //   startingPosY: 750,
    //   framesX: 7,
    //   framesY: 2,
    // }),

    // new PlatformNew({
    //   startingPosX: 50 * 33,
    //   startingPosY: 900,
    //   framesX: 15,
    //   framesY: 3,
    // }),

    // new PlatformNew({
    //   startingPosX: 50 * 52,
    //   startingPosY: 800,
    //   framesX: 30,
    //   framesY: 5,
    // }),
  ];

  platformsNew.forEach((platformNew) => {
    for (let i = 0; i < platformNew.framesX; i++) {
      for (let j = 0; j < platformNew.framesY; j++) {
        const frameX = undefined;
        const frameY = undefined;
        if (i === 0) {
          frameX = platformNew.width * 0;
          if (j === 0) {
            frameY = platformNew.spriteHeight * 0;
          } else if (j + 1 !== platformNew.framesY) {
            frameY = platformNew.spriteHeight * 1;
          } else if (j + 1 === platformNew.framesY) {
            frameY = platformNew.spriteHeight * 2;
          }
        } else if (i + 1 !== platformNew.framesX) {
          frameX = platformNew.spriteWidth * 1;
          if (j === 0) {
            frameY = platformNew.spriteHeight * 0;
          } else if (j + 1 !== platformNew.framesY) {
            frameY = platformNew.spriteHeight * 1;
          } else if (j + 1 === platformNew.framesY) {
            frameY = platformNew.spriteHeight * 2;
          }
        } else if (i + 1 === platformNew.framesX) {
          frameX = platformNew.spriteWidth * 2;
          if (j === 0) {
            frameY = platformNew.spriteHeight * 0;
          } else if (j + 1 !== platformNew.framesY) {
            frameY = platformNew.spriteHeight * 1;
          } else if (j + 1 === platformNew.framesY) {
            frameY = platformNew.spriteHeight * 2;
          }
        }
        block = {
          frameX,
          frameY,
          positionX: platformNew.width * i,
          positionY: platformNew.height * j,
        };
        platformNew.blocks.push(block);
      }
    }
  });
  genericObjects = [
    new genericObject({
      x: -createImage(background).width,
      y: 0,
      image: createImage(background),
    }),
    new genericObject({
      x: 0,
      y: 0,
      image: createImage(background),
    }),
    new genericObject({
      x: createImage(background).width,
      y: 0,
      image: createImage(background),
    }),
    new genericObject({
      x: createImage(background).width * 2,
      y: 0,
      image: createImage(background),
    }),
  ];

  scrollOffset = 0;
};
function animate() {
  platformsNew.forEach((platform) => {
    if (
      player.velocity.y > 0 &&
      player.rectPosition.y + player.rectHeight <= platform.platformPositionY &&
      player.rectPosition.y + player.rectHeight + player.velocity.y >=
        platform.platformPositionY &&
      player.rectPosition.x + player.rectWidth >= platform.platformPositionX &&
      player.rectPosition.x <=
        platform.platformPositionX + platform.platformWidth
    ) {
      player.velocity.y = 0;
      player.isJumping = false;
    }
    if (platform.platformPositionY === 750) {
      console.log(
        player.rectPosition.y + player.rectHeight >=
          platform.platformPositionY &&
          player.rectPosition.y <=
            platform.platformPositionY + platform.platformHeight &&
          player.rectPosition.x + player.rectWidth >= platform.platformPositionX
      );
    }
    // if (
    //   player.velocity.x > 0 &&
    //   player.rectPosition.y + player.rectHeight >= platform.platformPositionY &&
    //   player.rectPosition.y <=
    //     platform.platformPositionY + platform.platformHeight &&
    //   player.rectPosition.x + player.rectWidth >= platform.platformPositionX
    // ) {
    //   player.velocity.x = 0;
    // }

    // if (
    //   player.velocity.x < 0 &&
    //   player.rectPosition.y + player.rectHeight >= platform.platformPositionY &&
    //   player.rectPosition.x <=
    //     platform.platformPositionX + platform.platformWidth &&
    //   player.rectPosition.x >= platform.platformPositionX
    // ) {
    //   player.velocity.x = 0;
    // }
  });

  requestAnimationFrame(animate);

  genericObjects.forEach((genericObject) => {
    genericObject.draw();
  });

  platforms.forEach((platform) => {
    platform.draw();
  });

  platformsNew.forEach((platformNew) => {
    platformNew.update();
  });
  player.update();

  if (player.playerState !== "punch") {
    player.playerState = "idle";
  }

  if (keys.down.hold) {
    player.playerState = crouch;
  }
  if (player.isJumping) {
    player.playerState = "jump";
  }
  if (keys.right.hold && player.rectPosition.x < 500) {
    if (!player.isJumping) {
      player.playerState = "walk";
    }
    player.velocity.x = player.speed;
  } else if (
    (keys.left.hold && player.rectPosition.x > 150) ||
    (keys.left.hold && scrollOffset === 0 && player.rectPosition.x > 0)
  ) {
    if (!player.isJumping) {
      player.playerState = "walkReverse";
    }
    player.velocity.x = -player.speed;
  } else {
    player.velocity.x = 0;
    if (keys.right.hold) {
      if (!player.isJumping) {
        player.playerState = "walk";
      }
      scrollOffset += player.speed;
      platformsNew.forEach((platformNew) => {
        platformNew.position.x -= player.speed;
      });
      platforms.forEach((platform) => {
        platform.position.x -= player.speed;
      });
      genericObjects.forEach((genericObject) => {
        genericObject.position.x -= player.speed * 0.2;
      });
    } else if (keys.left.hold && scrollOffset > 0) {
      if (!player.isJumping) {
        player.playerState = "walkReverse";
      }
      scrollOffset -= player.speed;
      platformsNew.forEach((platformNew) => {
        platformNew.position.x += player.speed;
      });

      platforms.forEach((platform) => {
        platform.position.x += player.speed;
      });
      genericObjects.forEach((genericObject) => {
        genericObject.position.x += player.speed * 0.2;
      });
    }
  }

  if (player.rectPosition.y > canvas.height) {
    init();
  }
}

init();
animate();

let timer;
const myTimeout = () => {
  timer = setTimeout(() => {
    player.gameFrame = 0;
    crouch = "sleep";
  }, 1000);
};

addEventListener("keydown", ({ code }) => {
  // console.log(code);
  switch (code) {
    // movement controls

    case "KeyA":
      keys.right.hold = false;
      keys.left.hold = true;
      break;
      a;
    case "KeyS":
      if (player.playerState !== "jump") {
        if (keys.down.pressed === false) {
          keys.right.hold = false;
          keys.left.hold = false;

          player.gameFrame = 0;
          if ((crouch = "crouch")) {
            myTimeout();
          }
          keys.down.pressed = true;
        }
        keys.down.hold = true;
      }

      break;
    case "KeyD":
      keys.left.hold = false;
      keys.right.hold = true;
      break;
    case "KeyW":
      if (
        !player.isJumping &&
        !(player.playerState === "crouch") &&
        !(player.playerState === "sleep")
      ) {
        player.gameFrame = 0;
        player.isJumping = true;
        player.velocity.y -= 15;
      }
      break;

    // attack controls

    case "KeyJ":
      player.gameFrame = 0;
      player.playerState = "punch";
  }
});

addEventListener("keyup", ({ code }) => {
  switch (code) {
    // movement controls

    case "KeyA":
      keys.left.hold = false;
      break;
    case "KeyS":
      keys.down.pressed = false;
      keys.down.hold = false;
      crouch = "crouch";
      clearTimeout(timer);
      break;
    case "KeyD":
      keys.right.hold = false;
      break;
    case "KeyW":
      keys.up.hold = false;
      break;

    // attack controls
  }
});

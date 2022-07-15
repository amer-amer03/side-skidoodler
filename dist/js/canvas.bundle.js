/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/img/back.png":
/*!**************************!*\
  !*** ./src/img/back.png ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "e958dcee882c007c4c2784fdd006a616.png");

/***/ }),

/***/ "./src/img/neco-arc-sheet.png":
/*!************************************!*\
  !*** ./src/img/neco-arc-sheet.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "1ddd04fcf031ecb71fc25b0207d73e27.png");

/***/ }),

/***/ "./src/img/plat.png":
/*!**************************!*\
  !*** ./src/img/plat.png ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "6f40701a9e8da8507a9f6627291a1405.png");

/***/ }),

/***/ "./src/img/platform-sheet.png":
/*!************************************!*\
  !*** ./src/img/platform-sheet.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "7909fdb0d7360158b96b741b58ac1a25.png");

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_plat_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/plat.png */ "./src/img/plat.png");
/* harmony import */ var _img_back_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/back.png */ "./src/img/back.png");
/* harmony import */ var _character__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./character */ "./src/js/character.js");
/* harmony import */ var _platform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./platform */ "./src/js/platform.js");
/* harmony import */ var _js_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../js/utils */ "./src/js/utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.width = 1000;
canvas.height = 1000;
var crouch = "";

var Platform = /*#__PURE__*/function () {
  function Platform(_ref) {
    var x = _ref.x,
        y = _ref.y,
        image = _ref.image;

    _classCallCheck(this, Platform);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  _createClass(Platform, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return Platform;
}();

var genericObject = /*#__PURE__*/function () {
  function genericObject(_ref2) {
    var x = _ref2.x,
        y = _ref2.y,
        image = _ref2.image;

    _classCallCheck(this, genericObject);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  _createClass(genericObject, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return genericObject;
}();

var player = new _character__WEBPACK_IMPORTED_MODULE_2__["default"]();
var platforms = [];
var platformsNew = [];
var genericObjects = [];
var keys = {
  right: {
    hold: false
  },
  left: {
    hold: false
  },
  up: {
    hold: false
  },
  down: {
    pressed: false,
    hold: false
  }
};
var scrollOffset = 0;

var init = function init() {
  var block = [];
  player = new _character__WEBPACK_IMPORTED_MODULE_2__["default"]();
  player.animationStates.forEach(function (state, index) {
    var frames = {
      loc: [],
      isLoop: false
    };

    for (var j = 0; j < state.frames; j++) {
      var positionX = j * player.spriteWidth;
      var positionY = index * player.spriteHeight;
      frames.loc.push({
        x: positionX,
        y: positionY
      });
      frames.isLoop = state.isLoop;
      frames.animationRate = state.animationRate;
    }

    player.spriteAnimations[state.name] = frames;
  }); // platforms

  platformsNew = [new _platform__WEBPACK_IMPORTED_MODULE_3__["default"]({
    startingPosX: -50,
    startingPosY: 900,
    framesX: 30,
    framesY: 3
  }), new _platform__WEBPACK_IMPORTED_MODULE_3__["default"]({
    startingPosX: 700,
    startingPosY: 750,
    framesX: 7,
    framesY: 2
  }), new _platform__WEBPACK_IMPORTED_MODULE_3__["default"]({
    startingPosX: 700,
    startingPosY: 750,
    framesX: 7,
    framesY: 2
  }), new _platform__WEBPACK_IMPORTED_MODULE_3__["default"]({
    startingPosX: 50 * 33,
    startingPosY: 900,
    framesX: 15,
    framesY: 3
  }), new _platform__WEBPACK_IMPORTED_MODULE_3__["default"]({
    startingPosX: 50 * 52,
    startingPosY: 800,
    framesX: 30,
    framesY: 5
  })]; // platform generator

  platformsNew.forEach(function (platformNew) {
    for (var i = 0; i < platformNew.framesX; i++) {
      for (var j = 0; j < platformNew.framesY; j++) {
        var frameX = undefined;
        var frameY = undefined;

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
          frameX: frameX,
          frameY: frameY,
          positionX: platformNew.width * i,
          positionY: platformNew.height * j
        };
        platformNew.blocks.push(block);
      }
    }
  });
  genericObjects = [new genericObject({
    x: -Object(_js_utils__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_img_back_png__WEBPACK_IMPORTED_MODULE_1__["default"]).width,
    y: 0,
    image: Object(_js_utils__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_img_back_png__WEBPACK_IMPORTED_MODULE_1__["default"])
  }), new genericObject({
    x: 0,
    y: 0,
    image: Object(_js_utils__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_img_back_png__WEBPACK_IMPORTED_MODULE_1__["default"])
  }), new genericObject({
    x: Object(_js_utils__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_img_back_png__WEBPACK_IMPORTED_MODULE_1__["default"]).width,
    y: 0,
    image: Object(_js_utils__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_img_back_png__WEBPACK_IMPORTED_MODULE_1__["default"])
  }), new genericObject({
    x: Object(_js_utils__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_img_back_png__WEBPACK_IMPORTED_MODULE_1__["default"]).width * 2,
    y: 0,
    image: Object(_js_utils__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_img_back_png__WEBPACK_IMPORTED_MODULE_1__["default"])
  })];
  scrollOffset = 0;
};

function animate() {
  platformsNew.forEach(function (platform) {
    // collision detection
    if (player.velocity.y > 0 && player.rectPosition.y + player.rectHeight <= platform.platformPositionY && player.rectPosition.y + player.rectHeight + player.velocity.y >= platform.platformPositionY && player.rectPosition.x + player.rectWidth >= platform.platformPositionX && player.rectPosition.x <= platform.platformPositionX + platform.platformWidth) {
      player.velocity.y = 0;
      player.isJumping = false;
    } // TODO: optimize sides collision
    // if (
    //   keys.right.hold &&
    //   player.rectPosition.y + player.rectHeight >= platform.platformPositionY &&
    //   player.rectPosition.y <=
    //     platform.platformPositionY + platform.platformHeight &&
    //   player.rectPosition.x + player.rectWidth >= platform.platformPositionX &&
    //   player.rectPosition.x + player.rectWidth <=
    //     platform.platformPositionX + platform.platformWidth
    // ) {
    //   keys.right.hold = false;
    // }
    // if (
    //   keys.left.hold &&
    //   player.rectPosition.y + player.rectHeight >= platform.platformPositionY &&
    //   player.rectPosition.x <=
    //     platform.platformPositionX + platform.platformWidth &&
    //   player.rectPosition.x >= platform.platformPositionX
    // ) {
    //   keys.left.hold = false;
    // }

  });
  requestAnimationFrame(animate);
  genericObjects.forEach(function (genericObject) {
    genericObject.draw();
  });
  platforms.forEach(function (platform) {
    platform.draw();
  });
  platformsNew.forEach(function (platformNew) {
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
  } else if (keys.left.hold && player.rectPosition.x > 150 || keys.left.hold && scrollOffset === 0 && player.rectPosition.x > 40) {
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
      platformsNew.forEach(function (platformNew) {
        platformNew.position.x -= player.speed;
      });
      platforms.forEach(function (platform) {
        platform.position.x -= player.speed;
      });
      genericObjects.forEach(function (genericObject) {
        genericObject.position.x -= player.speed * 0.2;
      });
    } else if (keys.left.hold && scrollOffset > 0) {
      if (!player.isJumping) {
        player.playerState = "walkReverse";
      }

      scrollOffset -= player.speed;
      platformsNew.forEach(function (platformNew) {
        platformNew.position.x += player.speed;
      });
      platforms.forEach(function (platform) {
        platform.position.x += player.speed;
      });
      genericObjects.forEach(function (genericObject) {
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
var timer;

var myTimeout = function myTimeout() {
  timer = setTimeout(function () {
    player.gameFrame = 0;
    crouch = "sleep";
  }, 1000);
};

addEventListener("keydown", function (_ref3) {
  var code = _ref3.code;
  console.log(code);

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

          if (crouch = "crouch") {
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
      if (!player.isJumping && !(player.playerState === "crouch") && !(player.playerState === "sleep")) {
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
addEventListener("keyup", function (_ref4) {
  var code = _ref4.code;

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

/***/ }),

/***/ "./src/js/character.js":
/*!*****************************!*\
  !*** ./src/js/character.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_neco_arc_sheet_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/neco-arc-sheet.png */ "./src/img/neco-arc-sheet.png");
/* harmony import */ var _js_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/utils */ "./src/js/utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");
var gravity = 0.35;
var staggerFrames = 15;

var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);

    this.gameFrame = 0;
    this.speed = 3;
    this.isJumping = false;
    this.position = {
      x: 100,
      y: 300
    };
    this.rectPosition = {
      x: this.position.x + 70,
      y: this.position.y + 38
    };
    this.velocity = {
      x: 0,
      y: 0
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
    this.animationStates = [{
      name: "idle",
      frames: 5,
      isLoop: true,
      animationRate: staggerFrames
    }, {
      name: "walk",
      frames: 8,
      isLoop: true,
      animationRate: staggerFrames
    }, {
      name: "walkReverse",
      frames: 8,
      isLoop: true,
      animationRate: staggerFrames
    }, {
      name: "jump",
      frames: 8,
      isLoop: false,
      animationRate: 12
    }, {
      name: "crouch",
      frames: 3,
      isLoop: false,
      animationRate: staggerFrames
    }, {
      name: "sleep",
      frames: 10,
      isLoop: true,
      animationRate: staggerFrames
    }, {
      name: "punch",
      frames: 4,
      isLoop: false,
      animationRate: staggerFrames
    }];
    this.image = Object(_js_utils__WEBPACK_IMPORTED_MODULE_1__["createImage"])(_img_neco_arc_sheet_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
  }

  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.frameX, this.frameY, this.spriteWidth, this.spriteHeight, this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "drawCollisionBox",
    value: function drawCollisionBox() {
      c.beginPath();
      c.rect(this.rectPosition.x, this.rectPosition.y, this.rectWidth, this.rectHeight);
      c.stroke();
    }
  }, {
    key: "update",
    value: function update() {
      if (this.isAnimationfinished && this.playerState === "punch") {
        this.playerState = "idle";
      }

      var position = 0;
      position = Math.floor(this.gameFrame / this.spriteAnimations[this.playerState].animationRate) % this.spriteAnimations[this.playerState].loc.length;
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;

      if (this.position.y + this.height + this.velocity.y <= canvas.height) {
        this.velocity.y += gravity;
      }

      this.rectPosition.x = this.position.x + 110;
      this.rectPosition.y = this.position.y + 38;
      this.draw(); // this.drawCollisionBox();

      if (this.spriteAnimations[this.playerState].isLoop) {
        this.isAnimationfinished = false;
        this.frameX = this.spriteAnimations[this.playerState].loc[position].x;
        this.frameY = this.spriteAnimations[this.playerState].loc[position].y;
      } else if (!this.spriteAnimations[this.playerState].isLoop && !this.isAnimationfinished) {
        if (position === this.spriteAnimations[this.playerState].loc.length - 1) {
          this.isAnimationfinished = true;
        }

        this.frameX = this.spriteAnimations[this.playerState].loc[position].x;
        this.frameY = this.spriteAnimations[this.playerState].loc[position].y;
      }

      this.gameFrame++;
    }
  }]);

  return Player;
}();

/* harmony default export */ __webpack_exports__["default"] = (Player);

/***/ }),

/***/ "./src/js/platform.js":
/*!****************************!*\
  !*** ./src/js/platform.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_platform_sheet_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/platform-sheet.png */ "./src/img/platform-sheet.png");
/* harmony import */ var _js_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/utils */ "./src/js/utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var c = canvas.getContext("2d");
var image = Object(_js_utils__WEBPACK_IMPORTED_MODULE_1__["createImage"])(_img_platform_sheet_png__WEBPACK_IMPORTED_MODULE_0__["default"]);

var PlatformNew = /*#__PURE__*/function () {
  function PlatformNew(_ref) {
    var startingPosX = _ref.startingPosX,
        startingPosY = _ref.startingPosY,
        framesX = _ref.framesX,
        framesY = _ref.framesY;

    _classCallCheck(this, PlatformNew);

    this.position = {
      x: startingPosX,
      y: startingPosY
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

  _createClass(PlatformNew, [{
    key: "drawCollisionBox",
    value: function drawCollisionBox() {
      c.beginPath();
      c.rect(this.platformPositionX, this.platformPositionY, this.platformWidth, this.platformHeight);
      c.stroke();
    }
  }, {
    key: "draw",
    value: function draw() {
      var _this = this;

      this.platformPositionX = this.position.x + this.blocks[0].positionX;
      this.platformPositionY = this.position.y + this.blocks[0].positionY;
      this.blocks.map(function (el) {
        c.drawImage(_this.image, el.frameX, el.frameY, _this.spriteWidth, _this.spriteHeight, _this.position.x + el.positionX, _this.position.y + el.positionY, _this.width, _this.height);
      });
    }
  }, {
    key: "update",
    value: function update() {
      this.draw(); // this.drawCollisionBox();
    }
  }]);

  return PlatformNew;
}();

/* harmony default export */ __webpack_exports__["default"] = (PlatformNew);

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/*! exports provided: createImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createImage", function() { return createImage; });
var createImage = function createImage(imageSrc) {
  var image = new Image();
  image.src = imageSrc;
  return image;
};

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map
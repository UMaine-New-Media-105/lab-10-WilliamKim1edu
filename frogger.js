rowHeights = [425, 375, 325, 225, 175, 125];
rowSpeeds = [3, -4, 2, -4, 2, -1];
function setup() {
  createCanvas(500, 500);
  rectMode(CENTER);
  frameRate(60);
  
  vehicles = [];
  for (let rowYDrawn = 0; rowYDrawn < 6; rowYDrawn++) {
    let y = rowHeights[rowYDrawn];
    let spd = rowSpeeds[rowYDrawn];
    for (let rowXDrawn = 0; rowXDrawn < 3; rowXDrawn++) {
      vehicles.push(new Cars(y, spd));
    }
  }
}

function draw() {
  background(50);

  for (let rowMade = 0; rowMade < vehicles.length; rowMade++) {
    vehicles[rowMade].show();
    vehicles[rowMade].drive();
  }
}

class Frog {
    constructor(y, sped) {
    this.x = 475;
    this.y = 250;
    this.siz = 50;
    this.sped = sped;
  }
  drive() {
  if (keyIsDown(LEFT_ARROW)) {
        this.x = this.x - this.sped;
  }
  if (keyIsDown(RIGHT_ARROW)) {
        this.x = this.x + this.sped;
  }

    let isTooFarLeft = this.x < -25;
    let isTooFarRight = this.x > width + 25;
    if (isTooFarLeft) {
      this.x = width + 25;
    }
    if (isTooFarRight) {
      this.x = -25;
    }
  }
  show() {
    push();
    noStroke();
    rectMode(CENTER);
    translate(this.x, this.y);
    fill("green");
    rect(0, 0, this.siz);
    pop();
  }
}

class Cars {
  constructor(y, sped) {
    this.x = random(width);
    this.y = y;
    this.siz = 50;
    this.sped = sped;
  }
  drive() {
    this.x = this.x + this.sped;
    let isTooFarLeft = this.x < -25;
    let isTooFarRight = this.x > width + 25;
    if (isTooFarLeft) {
      this.x = width + 25;
    }
    if (isTooFarRight) {
      this.x = -25;
    }
  }
  show() {
    push();
    noStroke();
    rectMode(CENTER);
    translate(this.x, this.y);
    rect(0, 0, this.siz);
    pop();
  }
}

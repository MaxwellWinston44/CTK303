let rain = [];
let img1;
let s1;

function preload(){
    s1 = loadSound("assets/men.mp3");
}

function setup() {
  createCanvas(800, 600);
    img1= loadImage("assets/arnold.png");
  for (let i = 0; i < 100; i++) {
    rain.push(new Rain());
  }
  
            if (!s1.isPlaying()) {
        s1.play();
      }
  
}

function draw() {
  background("white");
  for (let i = 0 ; i<rain.length; i++){
    rain[i].display();
    rain[i].move();
  }
  
  fill("grey");
  noStroke();
  ellipse(600, 25, 150, 150)
  
  fill("grey");
  noStroke();
  ellipse(500, 25, 150, 150)
  
  fill("grey");
  noStroke();
  ellipse(400, 25, 150, 150)
  
  fill("grey");
  noStroke();
  ellipse(300, 25, 150, 150)
  
  fill("grey");
  noStroke();
  ellipse(200, 25, 150, 150)
}

class Rain {
  // The class's constructor and attributes
  constructor() {
    this.pos = createVector(random(width),random(height));
    this.vel = createVector(0, random (10,5));
  }

  display() {
    image(img1, this.pos.x, this.pos.y, 50, 50);
  }
  move() {
   this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }
}
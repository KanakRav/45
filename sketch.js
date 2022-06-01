var bg,bg2,form,system,code,security;
var score=0;

function preload() {
  bg = loadImage("gate.png");
  bg2 = loadImage("gcity.jpg")
}

function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security()
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);

  if(score === 3) {
    clear()
    background(bg2)
    fill("purple")
    textSize(40);
    text("Welcome to the mysterious city of gold",150, 200);
    text('They need a worthy ruler like you', 150, 250)
  }

  drawSprites()
}
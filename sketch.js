var bg,bgImg;

var astronaut;

var sleep;
var brush;
var gym;
var eat;
var drink;
var move;
var bath;


function preload() {
  bgImg = loadImage("images/iss.png");

  sleep = loadAnimation("images/sleep.png");
  brush = loadAnimation("images/brush.png");
  gym = loadAnimation("images/gym1.png","images/gym2.png","images/gym11.png","images/gym12.png");
  bath = loadAnimation("images/bath1.png","images/bath2.png");
  eat = loadAnimation("images/eat1.png","images/eat2.png");
  drink = loadAnimation("images/drink1.png","images/drink2.png");
  move = loadAnimation("images/move.png","images/move1.png");

}

function setup() {
  createCanvas(800,400);

  bg = createSprite(370,200);
  bg.addImage(bgImg);
  bg.scale = 0.15;

  astronaut = createSprite(300,230)
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale = 0.05;
}

function draw() {
  background(255,255,255);

  //astronaut.bounceOff(edges);
  
  if(keyDown("UP_ARROW")) {
    astronaut.addAnimation("brushing",brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityX = 0;
  }

  if(keyDown("DOWN_ARROW")) {
    astronaut.addAnimation("gymming",gym);
     astronaut.changeAnimation("gymming");
     astronaut.y = 350;
     astronaut.velocityX = 0;
     astronaut.velocityX = 0;
  }

  if(keyDown("LEFT_ARROW")) {
    astronaut.addAnimation("eating",eat);
     astronaut.changeAnimation("eating");
     astronaut.y = 350;
     astronaut.velocityX = 0;
     astronaut.velocityX = 0;
  }

  if(keyDown("RIGHT_ARROW")) {
    astronaut.addAnimation("bathing",bath);
     astronaut.changeAnimation("bathing");
     astronaut.y = 350;
     astronaut.velocityX = 0;
     astronaut.velocityX = 0;
  }

  if(keyDown("m")) {
    astronaut.addAnimation("moving",move);
    astronaut.changeAnimation("moving");
    astronaut.y = 350;
    astronaut.velocityX = 1;
    astronaut.velocityY = 1;
  }

  createEdgeSprites();
  drawSprites();
}
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var PLAY = 1;
var END = 0;
var gameState = PLAY;


var mario, mario_running,mario_running1,mario_running2 ,mario_running3, mario_collided;
var ground, invisibleGround, groundImage;

var coin, coinsGroup, coinImage;
var obstaclesGroup, obstacle1, obstacle2, obstacle3;

var gameOver,gameOverImage;
var restart,restartImage;
var bg1,bg2,bg3;
var name;
var score;

function preload() {
  mario_running1 = loadAnimation("images/Capture1.png","images/Capture3.png","images/Capture4.png");
  
  background = loadImage("images/level 1.jpg")
  coinImage = loadImage("images/coin.png");
  obstacle2 = loadImage("images/obstacle2.png");
  obstacle1 = loadImage("images/obstacle1.png");
  obstacle3 = loadImage("images/obstacle3.png");
 
}

function setup(){
    var canvas = createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;
    
   level1 = createSprite(600,200,1200,400);
   level1.addImage("background",background);
   level1.scale= 0.3
   level1 = level1.x
   level1.x = level1.width / 2;
   level1.velocityX = -4;
   

    mario = createSprite(400,315,20,20);
    mario.addAnimation("mario1",mario_running1);
    mario.scale= 0.7

    obstaclesGroup = new Group();
    



}

function draw(){
  //background("yellow")
  if (level1.x < 0) {
    level1.x = level1.width / 2;
  }
  
  spawnObstacles()
    drawSprites()
    


function spawnObstacles() {
  if (frameCount % 60 === 0) {
    var obstacle = createSprite(900, 400);
    //generate random obstacles
    var rand = Math.round(random(1, 3));
    switch (rand) {
      case 1:
        obstacle.addImage(obstacle2);
        break;
      case 2:
        obstacle.addImage(obstacle1);
        break;
      case 3:
        obstacle.addImage(obstacle3);
        break;
    }
    console.log(obstacle.x)
    obstacle.velocityX = -(6 + 3 * score / 100);

    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 300;
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
}
}

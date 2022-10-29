var shooterImage,shooter;
var backgroundImage;
var laser,laserImage;
var obstacle,obstacleGroup,obImg1,obImg2;

function preload(){

  backgroundImage=loadImage("background.jpg");
  shooterImage=loadImage("spaceship.png");
  laserImage=loadImage("laser.png");
  obImg1=loadImage('comet.png');
  obImg2=loadImage('ufo.webp');
}

function setup(){
  createCanvas(1500,1000);
  bg=createSprite(750,450,1500,900);
  bg.addImage("bgImg",backgroundImage);
  bg.scale=1.5;
  bg.velocityY=2;
  

  shooter=createSprite(700,760,100,100);
  shooter.addImage("shooterImg",shooterImage);

  obstacleGroup=new Group();
  
}

function draw(){

  background('black');
  drawSprites();
  if(bg.y>400){
    bg.y=300;
  }

  if(keyDown(LEFT_ARROW)){
    shooter.x=shooter.x-3;
  }

  if(keyDown(RIGHT_ARROW)){
    shooter.x=shooter.x+3;
  }

  if(keyDown(UP_ARROW)){
   laser=createSprite(shooter.x,shooter.y,5,50);
   laser.addImage("laserImage",laserImage);
   laser.scale=0.5;
   laser.velocityY=-5;
  }
  
  spawnObstacles();
}

function spawnObstacles(){
  var x=random(50,width-100);
  obstacle=createSprite(x,20,50,50);
  obstacle.addImage("comet",obImg1);
  obstacle.scale=0.3;

}
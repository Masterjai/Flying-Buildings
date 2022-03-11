var balloon, balloonIMG;
var bg, bgIMG;
var obs1, obs2, obs3;
var obstacles;

function preload(){
bgIMG = loadImage("assets/bg.png");
balloonIMG = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png");

obs1 = loadImage("assets/obsBottom1.png");
obs2 = loadImage("assets/obsBottom2.png");
obs3 = loadImage("assets/obsBottom3.png");
}

function setup(){
  createCanvas(1000,1000);
  bg = createSprite(400,400,1000,1000);
  bg.addImage(bgIMG);

  balloon = createSprite(200,600,50,50);
  balloon.addAnimation("balloon",balloonIMG);
  balloon.scale = 0.3
}

function draw(){
background("green");
 

  if(keyDown("left")){
    balloon.x = balloon.x -3
  }

  if(keyDown("right")){
    balloon.x = balloon.x +3
  }

  if(keyDown("up")){
    balloon.y = balloon.y -3
  }

if(keyDown("down")){
  balloon.y = balloon.y +3
}
 spawnObstacles();
 drawSprites();
}

function spawnObstacles(){
  if(frameCount%60===0){
    obstacles = createSprite(800,600,50,50);
    obstacles.addImage(obs1);
    obstacles.velocityX = -3

    obstacles.x = Math.round(random(100,800));
    obstacles.y = Math.round(random(100,800));

    var rand = Math.round(random(1,3));
  switch(rand){
    case 1:obstacles.addImage(obs1);
    break;
    case 2:obstacles.addImage(obs2);
    break;
    case 3:obstacles.addImage(obs3);
    break;
    default: break;
  }
  obstacles.scale = 0.1
  }
  
}
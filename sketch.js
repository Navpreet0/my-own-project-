var bird,birdImage;
var pipeTop,pipeBottom;
var pipeTopImg,pipeBottomImg;
var base,baseImg;
var backgroundImage;

function preload()
{
birdImage = loadImage("sound and images/flappybird-animation.gif");
pipeTopImg = loadImage("sound and images/pipe-top.png");
pipeBottomImg = loadImage("sound and images/pipe-bottom.png");
backgroundImage = loadImage("sound and images/background.png");
baseImg = loadImage("sound and images/base.png");

}

function setup() {
createCanvas(windowWidth,windowHeight);

bird = createSprite(100,300,100,100);
bird.addImage(birdImage);

base = createSprite(800,1150,width,100);
base.addImage(baseImg);
base.scale=9;
base.velocityX=-4; 


}


function draw() {
  rectMode(CENTER);
  background(backgroundImage);
  
if(base.x<0){
  base.x = base.width;
}
if(keyDown(32)){
  bird.velocityY=-10;

}
bird.velocityY+=0.8;
bird.collide(base);
SpawnPipeTop();
SpawnPipeBottom();

drawSprites();

}

function SpawnPipeTop(){
  if (frameCount % 120 === 0){
    pipeTop1 = createSprite(width,height/8);
    pipeTop1.y = Math.round(random(50,110));
    pipeTop1.addImage(pipeTopImg);
    pipeTop1.velocityX= -4;
    pipeTop1.lifetime= 800;
  
}
}

function SpawnPipeBottom(){
  if (frameCount % 120 === 0){
    pipeBottom1 = createSprite(width,height);
    pipeBottom1.y = Math.round(random(500,570));
    pipeBottom1.addImage(pipeBottomImg);
    pipeBottom1.velocityX= -4;
    pipeBottom1.lifetime= 800;
    pipeBottom1.depth = base.depth ; 
    base.depth=base.depth+1;
    pipeBottom1.depth = base.depth ; 
    base.depth=base.depth+1;

}
}



















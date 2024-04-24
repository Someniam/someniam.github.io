var ballx = 300;
var bally = 300;
var ballSize = 40;
var score = 0;
var gameState = "L1"

function preload() {
    yoyo = loadImage('https://someniam.github.io/game/yoyo.png')
    kickball = loadImage('https://someniam.github.io/game/kickball.png')
    golfball = loadImage('https://someniam.github.io/game/golfball.png')
    trophy = loadImage('https://someniam.github.io/game/trophy.png')
}
function setup() {
  createCanvas(600,600);
  textAlign(CENTER);
  textSize(20);
}//end of setup


function draw() {
background(220);
 if(gameState == "L1"){
   levelOne(); 
 }
 
 if(gameState == "L2"){
   levelTwo();
 }
 
 if(gameState == "L3"){
   levelThree();
 }
   if(gameState == "win"){
   youWin();
 }
 text(("Score: " + score),width/2,40);
}//end of draw

function levelOne(){
  background(227,158,39);
  text("Level 1", width/2,height-20);
  var distToBall = dist(ballx,bally,mouseX,mouseY);
  if(distToBall < ballSize/2){
   ballx = random(width);
   bally = random(height);
   score = score + 1;
  }
  
  if(score> 10){
    gameState = "L2";
  }
  line(ballx,bally,mouseX,mouseY);
  img = loadImage('https://someniam.github.io/diyphotoshop/yoyo.png')
    image(yoyo, ballx-20, bally-20, 40, 40);
  
}//end of level 1

function levelTwo(){
  text("Level 2", width/2,height-20);
  var distToBall = dist(ballx,bally,mouseX,mouseY);
  if(distToBall < ballSize/2){
   ballx = random(width);
   bally = random(height);
   score = score + 1;
   ballSize = 60;
  }
  
  if(score> 30){
    gameState = "L3";
  }
  img = loadImage('https://someniam.github.io/diyphotoshop/kickball.png')
    image(kickball, ballx-32, bally-32, 60, 60);
}//end of level 2

function levelThree(){
  background(100,200,3);
  text("Level 3", width/2,height-20);
  var distToBall = dist(ballx,bally,mouseX,mouseY);
  if(distToBall < ballSize/2){
   ballx = random(width);
   bally = random(height);
   score = score + 1;
   ballSize = 20;
  }
  
  if(score> 50){
    gameState = "win";
    //scoreover to win
  
  }
  img = loadImage('https://someniam.github.io/diyphotoshop/golfball.png')
    image(golfball, ballx-10, bally-10, 20, 20); 
}//end of level 3

function youWin(){
  background(175,20,150);
  text("You Win! Refresh to play again.", width/2,height-60);
 
  
  img = loadImage('https://someniam.github.io/diyphotoshop/trophy.png')
    image(trophy, 200, 200, 177,300); 
    
  
}//end of winscreen

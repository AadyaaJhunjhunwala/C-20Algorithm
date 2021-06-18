
var fixedRect, movingRect, fixedRect1, fixedRect2 ,fixedRect3, square;
var gameObject1, gameObject2;

function setup() {
  createCanvas(2000,1500);
 
 
  movingRect = createSprite(750, 100,60,100);
  movingRect.shapeColor = "green";
  movingRect.debug=true
  
  fixedRect = createSprite(250, 100, 60, 100);
  fixedRect.shapeColor = "green";
  fixedRect.debug=true
  
  fixedRect1 = createSprite(550, 100, 60, 100);
  fixedRect1.shapeColor = "green";
  fixedRect1.debug=true
  
  fixedRect2 = createSprite(800, 100, 60, 100);
  fixedRect2.shapeColor = "green";
  fixedRect2.debug=true

  fixedRect3 = createSprite(1000, 100, 60, 100);
  fixedRect3.shapeColor = "green";
  fixedRect3.debug=true

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else if(isTouching(movingRect,fixedRect1)){
    movingRect.shapeColor = "aquamarine";
    fixedRect1.shapeColor = "aquamarine";
  }
  else if(isTouching(movingRect,fixedRect2)){
    movingRect.shapeColor = "white";
    fixedRect2.shapeColor = "white";
  }

  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green"
    fixedRect1.shapeColor = "green"
    fixedRect2.shapeColor = "green"
  }


if(isTouching(movingRect,fixedRect3)){

  square=createSprite(800, 220, 50, 50);
  square.shapeColor = "orange";

  fixedRect3.destroy();
}



//bounceOff(movingRect,fixedRect)
  drawSprites();
}


function isTouching(movingRect,fixedRect){
  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2) {
    
    return true;
  }
  else {
    return false;
  } 
}



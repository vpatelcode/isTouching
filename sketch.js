var fixedRect,movingRect;







function setup() {
  createCanvas(800,800);
  fixedRect=createSprite(200,400,50,80);
  movingRect=createSprite(200,600,80,30);
  fixedRect.shapeColor="Pink";
  movingRect.shapeColor="Pink";
}

function draw() {
  background(0,0,0);  

movingRect.x=World.mouseX;

movingRect.y=World.mouseY;

if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 && fixedRect.x-movingRect.x< movingRect.width/2+fixedRect.width/2  
  && movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2 && fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2   )
{

  fixedRect.shapeColor="yellow";
  movingRect.shapeColor="yellow";
}
else {
  fixedRect.shapeColor="Pink";
  movingRect.shapeColor="Pink";
}




  drawSprites();
}
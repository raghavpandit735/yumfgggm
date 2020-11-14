var ball 


function setup()
{
  createCanvas(400, 400);
  ball = createSprite(200, 200, 10, 10);
  ball.shapeColor = "red";
}

function draw()
{
  if (keyDown(LEFT_ARROW))
  {
    ball(-1,0);
  }
  drawSprites();
}
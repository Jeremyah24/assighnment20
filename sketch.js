var car,wall
var speed,weight




function setup() {
  createCanvas(800,400);
 car= createSprite(100, 200, 50, 50);
wall= createSprite(750,200,20,150);
speed=random(5,20)
weight=random(15,40)
car.velocityX=speed
}

function draw() {
  background("black"); 
  var deformation=(0.5 *weight*speed*speed )/2250;
  if(car.isTouching(wall))
  {
    car.velocityX=0
    if(deformation<100)
    car.shapeColor=("green");
    if(deformation>=100)
    car.shapeColor=("red");
  }
  drawSprites();
}
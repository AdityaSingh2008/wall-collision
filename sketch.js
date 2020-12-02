var bullet, wall
var weight,speed, thickness

function setup() {
  createCanvas(1600,400);

  speed = random(30,90)
  weight = random(200,1500)
  thickness = random(10,83);

  bullet = createSprite(50, 200, 50, 5);
  bullet.velocityX = speed;
  bullet.shapeColor = color("white");

  wall = createSprite(1450, 200, thickness , height/2);
  wall.shapeColor = color("grey");
  
}

function draw() {
  background(0);  
  if(wall.x-bullet.x < (bullet.width+wall.width)/2){
    bullet.velocityX = 0;
  }
  var damage = 0.5* weight * speed * speed/thickness * thickness *thickness;
  if(damage>10 && wall.x-bullet.x < (bullet.width+wall.width)/2){
    wall.shapeColor=color(255, 0, 0);
  }
  if(damage<10 && wall.x-bullet.x < (bullet.width+wall.width)/2){
    wall.shapeColor=color(0, 255, 0);
  }
  drawSprites();
}
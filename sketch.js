var wall, bullet;

var speed,weight;

var deformation;

function setup() {
  createCanvas(2000,800);
  wall = createSprite(1300, 400, 60, height/2);
  wall.shapeColor = "green";
  //wall.debug = true;
  bullet = createSprite(100,400,80,20);
  //bullet.debug = true;

  speed = random(55,90);  
  weight = random(400,1500);

  bullet.velocityX = speed;

  wall.shapeColor = 80,80,80; 
}

function draw() {
  background(100,50,20);  
  
  if(wall.x - bullet.x < 100){
    bullet.velocityX = 0;
    deformation = (0.5*weight*speed*speed)*22500;
  }

 
  
  if(deformation <20000){
    wall.shapeColor = "yellow";
  }

  if(deformation >100){
    wall.shapeColor = "red";
  }
  drawSprites();
}


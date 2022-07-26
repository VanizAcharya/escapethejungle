var player, playerImage;
var background, ground, backgroundImage;
var invisibleGround;
var obstacleGroup, obstacle1, obstacle2, obstacle3, obstacle4;

function preload() {
  backgroundImage = loadImage("background.jpg")
  playerImage = loadImage("player.jpg")
  obstacle1 = loadImage("bird.jpg")
  obstacle2 = loadImage("cheetah.jpg")
  obstacle3 = loadImage("deer.jpg")
  obstacle4 = loadImage("deer2.jpg")

}

function setup() {
  createCanvas(600, 200);


  ground = createSprite(0, 0, 600, 200)
  ground.addImage("ground", backgroundImage)
  ground.x = ground.width / 2;

  player = createSprite(80, 80, 100, 60)
  player.addImage("player", playerImage)
  player.scale = 0.3

  invisibleGround = createSprite(200, 190, 400, 10)
  invisibleGround.visible = false;

  obstaclesGroup = createGroup();
}

function draw() {
  //set background to white
  background(180);

  // to jump the player
  if (keyDown("UP_ARROW")) {
    player.velocityY = -10
  }

  // add gravity to player
  player.velocityY = player.velocityY + 0.8

  // give velocity to ground to move
  ground.velocityX = -4;
  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }

  // make player collide with invisible ground
  player.collide(invisibleGround)

  spawnObstacles();
  drawSprites();
}
function spawnObstacles(){
  if (frameCount % 60 === 0){
    var obstacle = createSprite(400,165,10,40);
    obstacle.velocityX = -6 ;
    
     //generate random obstacles
     var rand = Math.round(random(1,6));
     switch(rand) {
       case 1: obstacle.addImage(obstacle1);
               break;
       case 2: obstacle.addImage(obstacle2);
               break;
       case 3: obstacle.addImage(obstacle3);
               break;
       case 4: obstacle.addImage(obstacle4);
               break;
       
     }
    
     //assign scale and lifetime to the obstacle           
     obstacle.scale = 0.5;
     obstacle.lifetime = 300;
    
    //add each obstacle to the group
     obstaclesGroup.add(obstacle);
  }
 }
 
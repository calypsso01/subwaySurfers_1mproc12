var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  //loadImage de path (camino)
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Jake1.png","Jake2.png", "jake3.png", "jake4.PNG", "jake5.png");

  //loadAnimation de boy (niño)
 
}

function setup(){
  
  createCanvas(400,400);
 //crear sprite de path (camino) 
 path=createSprite(200,200);
path.addImage(pathImg);


//agregar imagen de path
//Hacer que la pista sea un fondo en movimiento al darle velocidad Y.
path.velocityY = 4;
path.scale=1.2;

//crear sprite de boy (niño)
boy = createSprite(70,380,20,20);
boy.addAnimation("JakeRunning",boyImg);
boy.scale= 1;

//agregar animación para boy
boy.velocityX= -4;
boy.scale=1;
  
// crear  left Boundary (límite izquierdo)
leftBoundary=createSprite(0,0,100,800);
////establecer visibilidad como false (falso) para límite izquierdo
invisibleGround = createSprite(0,0,100,800);
  invisibleGround.visible = false;

//crear right Boundary (límite derecho)
rightBoundary=createSprite(410,0,100,800);
//establecer visibilidad como false (falso) para límite izquierdo
invisibleGround = createSprite(410,0,100,800);
  invisibleGround.visible = false;

}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // boy moviéndose en el eje X con el mouse
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  // colisión de boy con los límites derecho e izquierdo invisibles 
  
  //código para reiniciar el fondo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}

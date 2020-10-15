var mrect ,frect;

function setup() {
  createCanvas(800,400);
 mrect= createSprite(400, 200, 50, 50);
 mrect.shapeColor="red"
 mrect.debug=true;
frect=createSprite(500,300,50,50);
frect.shapeColor="red";
frect.debug=true;

}

function draw() {
  background(0);  
  mrect.x=mouseX;
  mrect.y=mouseY;

  if(mrect.x-frect.x<mrect.width/2+frect.width/2
    && frect.x-mrect.x<mrect.width/2+frect.width/2 && 
    mrect.y-frect.y<mrect.height/2+frect.height/2 && 
    frect.y-mrect.y<mrect.height/2+frect.height/2){
    mrect.shapeColor="blue"
    frect.shapeColor="blue"
  }
  else{
    mrect.shapeColor="red"
    frect.shapeColor="red"
  }

  drawSprites();
}
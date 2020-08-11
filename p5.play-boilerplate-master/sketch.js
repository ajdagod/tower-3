const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var circ;
var engine,world;
function preload() {
  getBackgroundImg();
}
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  slingshot1=new slingshot(circ,{x:100,y:200});
  engine = Engine.create();
  world = engine.world;

  box1=new box(300,275,30,40);
  box2=new box(330,275,30,40);
  box3=new box(360,275,30,40);
  box4=new box(390,275,30,40);
  box5=new box(420,275,30,40);
  box6=new box(450,275,30,40);
  box7=new box(480,275,30,40);
  box8=new box(330,235,30,40);
  box9=new box(360,235,30,40);
  box10=new box(390,235,30,40);
  box11=new box(420,235,30,40);
  box12=new box(450,235,30,40);
  box13=new box(360,195,30,40);
  box14=new box(390,195,30,40);
  box15=new box(420,195,30,40);
  box16=new box(390,155,30,40);

  circ=Bodies.circle(100,200,20);
  World.add(world,circ);


}

function draw() {
  if(backgroundImg)
        background(backgroundImg);
    
        noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)
     Engine.update(engine);
  drawSprites();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();

}
function mouseDragged(){

  Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY});


}
function mouseReleased(){

  slingshot1.fly();

}
async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=0600 && hour<=1900){
      bg = "sprites/bg1.png";
  }
  else{
      bg = "sprites/bg2.jpg";
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}
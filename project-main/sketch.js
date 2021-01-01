const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;
var engine,world,bodies;
var ball,basketballFloorImage,hoopImage,hoop,boyImage,boy;
var chain;
var ground;
var hoop,top;
function preload(){
basketballFloorImage=loadImage("floor.jpg");
hoopImage=loadImage("basketballhoop.png");
//boyImage=loadAnimation("boy1.png","boy2.png","boy3.png","boy4.png","boy5.png","boy6.png","boy7.png","boy8.png");

}

function setup(){
    createCanvas(1000,1000);
engine=Engine.create();
world=engine.world;
ball=new Ball(500,500);
//hoop=createSprite(900,500,20,20);
//hoop.addImage(hoopImage);
boy=new Boynew(70,500);
//chain=new Chain(boy.body,ball.body)
ground=new Ground(200,990,1600,20);
wall1=new Ground(990,990,20,2000);
wall2=new Ground(0,990,20,2000);
ground1=new Ground(200,10,1600,20);
hoop=new Hoop(800,500);
}

function draw(){
    background(basketballFloorImage);
Engine.update(engine);



ball.display();
boy.display();
ground.display();
ground1.display();
hoop.display();
wall1.display()
wall2.display()

//drawSprites();
}



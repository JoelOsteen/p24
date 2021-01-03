
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rectangle1,rectangle2,rectangle3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	rectangle1=createSprite(900,685,200,20);
	rectangle2=createSprite(800,645,20,100);
 	rectangle3 = createSprite(1000,645,20,100);
	paper= new Paper(x,y);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  keyPressed();
  paper.display();
  drawSprites();
 
}




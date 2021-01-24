
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	roofObject=new Roof(500,100, 90, 20);

	bobDiameter=40;

  bobObject1=new Bob(465,300,50);
  bobObject2=new Bob(515,300,50);
  bobObject3=new Bob(565,300,50);
  bobObject4=new Bob(615,300,50);
  bobObject5=new Bob(665,300,50);

  rope1=new Rope(bobObject1.body,roofObject.body,-bobDiameter*2, 0)
  rope2=new Rope(bobObject2.body,roofObject.body,-bobDiameter*2, 0)
  rope3=new Rope(bobObject3.body,roofObject.body,-bobDiameter*2, 0)
  rope4=new Rope(bobObject4.body,roofObject.body,-bobDiameter*2, 0)
  rope5=new Rope(bobObject5.body,roofObject.body,-bobDiameter*2, 0)
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
}




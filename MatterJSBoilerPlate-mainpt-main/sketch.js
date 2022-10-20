
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    
	
	
    var block1_options = {
		restitution:0.5,
		friction:0.02,
		frictionAir:0
	}

	var block2_options = {
		restitution:0.7,
		friction:0.01,
		frictionAir:0.1
	}
	
	
	

	var block3_options = {
		restitution:0.1,
		friction:1,
		frictionAir:0.3
	}
    
	

	//Crie os Corpos Aqui.
    block1 = Bodies.circle(220,10,10,block1_options);
	World.add(world, block1);

	block2 = Bodies.rectangle(110,50,10,10,block2_options);
	World.add(world, block2);

	block3 = Bodies.rectangle (350,50,10,10,block3_options);
	World.add(world, block3);
	
	var plane_options={
		isStatic : true


	}
    
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("green");
  
  drawSprites();
 
}





const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var ball1;
var ground1;

function setup()
{
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var ball_options={
    restitution: 0.90,
    firctionAir: 0.01
  }
  ball = Bodies.circle(100,10,20, ball_options);
  World.add(world, ball);

  ball1 = Bodies.circle(250,10,20, ball_options);
  World.add(world, ball1);
  
  var ground_options={
    isStatic: true
  }
  ground= Bodies.rectangle(0,390,400,20, ground_options);
  World.add(world,ground)

  ground1= Bodies.rectangle(300,200,100,10, ground_options);
  World.add(world,ground1)
} 

function draw() 
{
  background(51);
  Engine.update(engine);

  ellipse(ball.position.x, ball.position.y, 20,20);

  rect(ground.position.x, ground.position.y, 400,20);

  ellipse(ball1.position.x, ball1.position.y, 20,20)

  rect(ground1.position.x, ground1.position.y, 400,10)
}



const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;

function setup() {
  createCanvas(800,400);
  
  
  engine = Engine.create();


  Engine.run(engine);
}

function draw() {
  background(0);  

}
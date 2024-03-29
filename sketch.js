const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    box2 = new Box(300,200,50,50);
    ground = new Ground(200,350,400,10);
}

function draw(){
    background(0);
    Engine.update(engine);
    // push();
    //fill("pink")
    box1.display();
    box2.display();
   // pop();
    ground.display();
}
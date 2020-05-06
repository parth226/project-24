// You could have multiple flags like: start, launch to indicate the state of the game.

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var tanker,shooter;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    
    tanker1 = new Tanker(100,350,100,100);
    shooter1 = new Shooter(200,200,10,50);
    
    ground = new Ground(200,height,400,20)
    
}

function draw(){
    background(0);
    Engine.update(engine);
    
    tanker1.display();
    shooter1.display();

    ground.display();
}




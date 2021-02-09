const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var surviver,zombieGroup;

function setup(){
    var canvas = createCanvas(di,400);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    background(0);
    Engine.update(engine);

}
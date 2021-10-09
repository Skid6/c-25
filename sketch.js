const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var bgImg
function preload(){
    bgImg=loadImage("bg.png")
}


function setup(){
    var canvas = createCanvas(1097,400);
    engine = Engine.create();
    world = engine.world;
    bird = new Bird(100,100)
    
    ground = new Ground(600,height,1200,20)
    
    box1 = new Box(700,370,70,70)
    box2 = new Box(920,370,70,70)
    pig1 = new Pig(810,370)
    log1 = new Log(810,300,300,PI/2)
    box3 = new Box(700,290,70,70)
    box4 = new Box(920,290,70,70)
    pig2 = new Pig(810,290)
    log2 = new Log(810,220,300,PI/2)
    box5 = new Box(810,200,70,70)
    log3 = new Log(760,150,150,PI/7)
    log4 = new Log(860,150,150,-PI/7)
}

function draw(){
    background(0)
    background(bgImg);
    Engine.update(engine);

    ground.display();
    bird.display();
    box1.display();
    box2.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
}

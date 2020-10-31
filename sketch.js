
const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var Box1,Box2,Base1,box3,box4,box5,pig1,pig2,log1,log2
var object,ground,ball
var engine,world
function setup() {
  createCanvas(1200,400);
  engine = Engine.create()
  world = engine.world
  Box1 = new Box(700,350,70,70)
  Box2 = new Box(920,350,70,70)
  box3 = new Box(700,240,70,70)
  box4 = new Box(920,240,70,70)
  Base1 = new Base(600,380,1200,20)
  pig1 = new Pig(810,350,50,50)
  log1 = new Log(810,260,300,15,PI)
}
function draw() {
  background(255,255,255); 
  Engine.update(engine)
Box1.display()
Box2.display()
box3.display()
box4.display()
Base1.display()
pig1.display()
log1.display()
}

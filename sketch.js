const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine,myWorld, obj_rect,obj_ball;

function setup(){
  createCanvas(400,400);

  myEngine = Engine.create();
  myWorld = myEngine.world;

  obj_box1 = new Box(200,300,50,50);
  obj_box2 = new Box(240,100,50,100);
  ground = new Ground(200,390,400,20);
 /* obj_rect = Bodies.rectangle(200,390,400,20);
  obj_ball = Bodies.circle(200,200,20);
  World.add(myWorld,obj_rect);
  World.add(myWorld,obj_ball);
  console.log(obj_ball);

  obj_rect.isStatic = true;
  //obj_ball.isStatic = true;
  obj_ball.restitution = 1.0;*/

}
function draw(){
  background("pink");
  Engine.update(myEngine);
  /*rectMode(CENTER);
  rect(obj_rect.position.x,obj_rect.position.y,obj_rect.bounds.max.x-obj_rect.bounds.min.x,obj_rect.bounds.max.y-obj_rect.bounds.min.y);
  ellipseMode(RADIUS);
  ellipse(obj_ball.position.x,obj_ball.position.y,20,20);*/
  obj_box1.display();
  obj_box2.display();
  ground.display();
}
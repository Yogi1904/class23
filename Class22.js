const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, ground;

function setup(){
createCanvas(400, 400);

engine = Engine.create();
world = engine.world;

var option1 = {
    isStatic: true
}
ground = Bodies.rectangle(200, 390, 400, 20, option1);
World.add(world, ground);

var option2 = {
    restitution: 1
}

bodies = Bodies.circle(200, 150, 50, option2);
World.add(world, bodies);

option3 = {
    restitution: 1
}
ball = Bodies.circle(50, 100, 10, option3);
World.add(world, ball);

console.log(ball);
}

function draw(){

    background(rgb(182, 232, 243));

    Engine.update(engine);
  
    stroke(rgb(0, 199, 7));
    fill(rgb(0, 199, 7));
    ellipseMode(RADIUS);
    ellipse(bodies.position.x, bodies.position.y, 50);

    stroke(rgb(255, 0, 0));
    fill(rgb(255, 0, 0));
    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 10);

    stroke(rgb(139, 69, 19))
    fill(rgb(139, 69, 19))
    rectMode(CENTER);
    rect(ground.position.x, ground.position.y, 400, 20);

    drawSprites();

}
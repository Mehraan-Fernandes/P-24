// You could have multiple flags like: start, launch to indicate the state of the game.
//const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.
/*
const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine
*/

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
    var canvas = createCanvas(800,400)
    
    engine = Engine.create();
    
    world = engine.world;
    
    shooter = new Shooter(160,280,60,10)
    tankBase = new Tanker(100,320,145,45);
    upperBody = new Tanker(100,278,115,40);
    
    ground = new Ground(400,380,900,30);
    wheel1 = new Wheel(100,352,27)
    wheel2 = new Wheel(127,352,27)
    wheel3 = new Wheel(154,352,27)
    wheel4 = new Wheel(73,352,27)
    wheel5 = new Wheel(46,352,27)
    
    // ball = new Ball(50,50,50);
   // shootball = new ShootBall(75,50,50);
   // canonball = new CanonBall(75,50,50);
    
}

function draw() {
// Remember to update the Matter Engine and set the background.
background(0);

Engine.update(engine);
shooter.display();
tankBase.display();
upperBody.display();

ground.display();
wheel1.display();
wheel2.display();
wheel3.display();
wheel4.display();
wheel5.display();


//ball.display();
//shootball.display();
//canonball.display();
}


//function keyReleased() {
    // Call the shoot method for the cannon.
//}
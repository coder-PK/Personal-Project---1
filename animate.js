const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ob1Sprite, ground, ground2, ob1, ob1Spr;

function preload()
{
	ob1 = loadImage("glowing-soccer-ball.jpg")
}
function setup() {
	createCanvas(1000, 600);
	rectMode(CENTER);
	
    ob1Sprite=createSprite(width/2, height-50, 200, 20);
    ob1Sprite.addImage(ob1);
    ob1Sprite.shapeColor=color(255, 0, 0);
    ob1Sprite.scale = 0.05;

    groundSprite=createSprite(width/2, height-35, width,10);
    groundSprite.shapeColor=color(255);
    
    groundSprite2 = createSprite(width/2, height-500, width,10);
	groundSprite2.shapeColor=color(255);

	engine = Engine.create();
    world = engine.world;

	//Create a Ground
    ground = Bodies.rectangle(width/2, height-38, width, 10 , {isStatic:true} );
    ground2 = Bodies.rectangle(width/2, height-500, width, 10 , {isStatic:true} );
    ob1Spr = Bodies.circle(width/2 , 200 , 5 , {restitution: 1.78, isStatic:true});
    World.add(world, ground);
    World.add(world, ground2);
    World.add(world, ob1Spr);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ob1Sprite.x= ob1Spr.position.x 
  ob1Sprite.y= ob1Spr.position.y 

  drawSprites();
 
}

function keyPressed() {
    if (keyCode === DOWN_ARROW) {
       Matter.Body.setStatic(ob1Spr,false);
       
     }
   }



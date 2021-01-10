
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boyI, boy;

function preload()
{
  boyI = loadImage("boy.png")
  

}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
    boy = createSprite(200,630,100,50)
    boy.addImage(boyI);
    boy.scale = 0.1
    
    tree = new Tree(500,500);
    ground = new Ground(500,700,1000,20)
    stone= new Stone(150,560,30)
    Mango1 = new mango(400,400,30)
    Mango2 = new mango(490,330,30)
    Mango3 = new mango(500,430,30)
    Mango4 = new mango(580,260,30)
    Mango5 = new mango(640,350,30)
    Mango6 = new mango(700,285,30)
    Mango7 = new mango(790,350,30)
    Mango8 = new mango(730,400,30)

    sling = new SlingShot(stone.body,{x:150, y:550})
Engine.run(engine);
  
}




function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  tree.display();
  ground.display();
  stone.display();
  Mango1.display();
  Mango2.display();
  Mango3.display();
  Mango4.display();
  Mango5.display();
  Mango6.display();
  Mango7.display();
  Mango8.display();
  sling.display();
 
  detectCollision(stone,Mango1)
  detectCollision(stone,Mango2)
  detectCollision(stone,Mango3)
  detectCollision(stone,Mango4)
  detectCollision(stone,Mango5)
  detectCollision(stone,Mango6)
  detectCollision(stone,Mango7)
  detectCollision(stone,Mango8)
}


function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
}

function detectCollision(lstone,lmango){

  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  //console.log(distance)
 // console.log(lmango.r+lstone.r)
  	if(distance<=lmango.r+lstone.r)
    {
      console.log(distance);
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase;
var computer, computerBase;
var pArcher,cArcher;
var arrow;
var angle;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
  engine = Engine.create();
  world = engine.world;

  playerBase = new PlayerBase(300, random(450, windowHeight - 300), 180, 150);
  player = new Player(285, playerBase.body.position.y - 153, 50, 180);
 
  angle = - PI / 4;
  //Create Player Archer Object
  pArcher = new PersonArcher(270,player.body.position.y-50 ,60,140,angle);
  computerBase = new ComputerBase(
    width - 300,
    random(450, height - 300),
    180,
    150
  );
  computer = new Computer(
    width - 280,
    computerBase.body.position.y - 153,
    50,
    180
  );
  computerArcher = new ArtificialArcher(width-270,computer.body.position.y-50,60,140,angle);
  
  //Create an arrow Object
  arrow = new PlayerArrow(pArcher.body.position.x,pArcher.body.position.y,100,10,pArcher.body.angle);
  
}

function draw() {
  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

 
  playerBase.display();
  player.display();
  

  computerBase.display();
  computer.display();
  
  pArcher.display();
  computerArcher.display()


  //Display arrow();
  
  //if Space (32) key is pressed call shoot function of playerArrow
  

  }
  
  function keyReleased(){
    if(keyCode === 32){
    
      arrow.shoot();
    }
  }
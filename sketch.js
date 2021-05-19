const Engine = Matter.Engine;
const  World = Matter.World;
const Events = Matter.Events;
const  Bodies = Matter.Bodies;

  var maxDrops = 100;
  var drops = [];
  var boy_img;

var num = math.random(1,4) ;
  
function preload(){
    thunder1_img=loadImage("1.png");
    thunder2_img=loadImage("2.png");
    thunder3_img=loadImage("3.png");
    thunder4_img=loadImage("4.png");
    
}

function setup(){
    canvas = createCanvas(400,400);

    engine = Engine.create();
  world = engine.world;

 
    for(var i=0 ; i<maxDrops ; i++){
        drops.push(new Drops(random(0,400),random(0,400)));
  }
    umbrella = new Umbrella(10,250,50,50);

  switch(num){
    case 1 : 
      addImage(thunder1_img);
      break;
    case 2:
      addImage(thunder2_img);
      break;
    case 3:
      addImage(thunder3_img);
      break;
    case 4:
      addImage(thunder4_img);
      break;
      
  }
  

}

function draw(){
    background("black");  
    Engine.update(engine);

 umbrella.display();
 
}   




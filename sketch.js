const Bodies=Matter.Bodies;
const Engine=Matter.Engine;
const World=Matter.World;

var engine, world;

var particles=[];
var plinkos=[];
var divisions=[];

var score=0;

var particle;

var gameState;

var divisionHeight=300;

function setup() {
  var canvas = createCanvas(480,700);
  engine = Engine.create();
  world = engine.world;

  ground= new Divisions(240,690,480,20);

  for (var k = 0;k<=innerWidth;k=k+80){
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight))
  }
  for(var j = 40; j <=innerWidth; j=j+50){
    plinkos.push(new Plinko(j,75));
  }
  for (var j = 15;j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,175));
  }
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10));
  }
  if (gameState=="end"){
    text("GAME OVER",240,400);
  }
  if(particle=null){
    particle.display();
    if(particle.body.position.y>760){
      if(particle.body.position.x<300){
        score=score+500;
        particle=null;
        if(count>=5)gameState="end"
      }
    }
  }
  
  }

function draw() {
  background("black"); 
  Engine.update(engine);
  
ground.display();


}
function mousePressed(){
  if(gameState=="end"){
    count++;
    particle=new Particle(mouseX,10,10,10);
  }
}

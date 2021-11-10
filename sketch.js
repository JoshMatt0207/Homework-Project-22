const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase, playerArcher;
var baseimage;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

  var opt={
    isStatic:true
  }

  var opti={
    isStatic:true
  }
  //create player base body
  playerBase=Bodies.rectangle(100,40,30,70,opti)
  World.add(world,playerBase)
  //create player body
  player=Bodies.rectangle(40,50,60,70,opt)
  World.add(world,player)


}

function draw() {
  background(backgroundImg);

  //show the player image using image() function

  //show the playerbase image using image() function


  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

  rect(player.position.x,player.position.y,60,70)

  rect(playerBase.position.x,playerBase.position.y,30,70)
}

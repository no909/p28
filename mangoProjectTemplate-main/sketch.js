
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3;
var world,boy;


//var options={
	//isStatic:false,
	//restitution:0,
	//friction:1,
	//density:1.2
//}

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(900,90,30);
	mango3=new mango(1000,95,30);
    stoneObj=new stone(190,340,50,50);
	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  stoneObj.display();
  groundObject.display();
  mango2.display();
  mango3.display();
}

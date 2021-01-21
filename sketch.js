var canvas;
var music;
var sur1;
var sur2;
var sur3;
var sur4;
var box;
var edges;
//function preload(){

    music = loadSound("music.mp3");
//}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
   sur1=createSprite(690,580,200,10);
  

   sur2=createSprite(480,580,200,10);
   

   sur3=createSprite(270,580,200,10);
   

   sur4=createSprite(80,580,160,10);
   sur4.shapeColor="red";
   sur3.shapeColor="black";
   sur2.shapeColor="orange";
   sur1.shapeColor="green";


    //create box sprite and give velocity
box=createSprite(random(20,750));
box.velocityY=5;
  box.velocityX=3;
edges=createEdgeSprites(edges);
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
 drawSprites();
 createEdgeSprites();
 

    //add condition to check if box touching surface and make it box
    box.bounceOff(edges);
    
    if(sur1.isTouching(box) && box.bounceOff(sur1)){
        box.shapeColor="green";
        music.play();
    }

    if(sur2.isTouching(box) && box.bounceOff(sur2)){
        box.shapeColor="orange";
        music.play();
   }

    if(sur3.isTouching(box) && box.bounceOff(sur3)){
        box.shapeColor="black";
        music.play();
   }

   if(sur4.isTouching(box) && box.bounceOff(sur4)){
       box.shapeColor="red";
       music.play();
   }
}

var dog, dogImg;
var happyDog, happyDogImg;
var database;
var foodStock,foodS;


function preload()
{
   dogImg      = loadImage("images/dogImg.png");
   happyDogImg = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  dog = createSprite(250,250,20,20);
  dog.addImage(dogImg);
  dog.scale = 0.2;
  foodStock = database.ref("Food");
  foodStock.on("value",readStock);


}


function draw() {  
background(46,139,87);

 if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDogImg);  
 } 

  drawSprites();
  
  textSize(16);
  fill("red");
  text("Note: Press UP_ARROW key to feed Drago Milk!",100,50)

}
function readStock(data){
    foodS = data.val();
}

function writeStock(x){
   if(x<=0){
     x = 0;
   }
   else{
     x = x+1;
   }
  database.ref("/").update({
    Food:x
  })
}




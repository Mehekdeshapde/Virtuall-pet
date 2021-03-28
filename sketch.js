var dog;
var happydog;

var foods,foodstock,database,count;


function preload()
{
dogImg = loadImage("images/dogImg.png");
happydogImg = loadImage("images/dogImg1.png");

}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(250,250,40,40);
  dog.addImage(dogImg);
  dog.scale = 0.3;
  database = firebase.database();
  foodstock = database.ref('food');
  foodstock.on("value",readStock);
  count = 20;


}


function draw() { 
  background(255);
  if(keyWentDown(UP_ARROW)){
    writeStock();
    dog.addImage(happydogImg);

  } 

  drawSprites();

  textSize(5);
  strokeWeight (2);
  text("food remaining "+ count,30,30);
 

}

function readStock(data){
  foods = data.val();
}
function writeStock(){
  if(count<1){
   count=0;
  }
else{
  count = count-1;
}
}



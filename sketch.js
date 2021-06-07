//Create variables here
var dog,happyDog,database,foodS,foodStock
function preload()
{
	//load images here
  dogImg = loadImage ("Images/dogImg.png")
  happydogImg = loadImage ("Images/dogImg1.png")
}

function setup() {
  database =firebase.database();
createCanvas(500, 500);
  dog = createSprite(250,250,100,100)
  dog.addImage(dogImg)
  dog.scale = 0.2
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87)
if(keyWentDown(UP_ARROW)){
  writeStock(foodS)
  dog.addImage(happydogImg)
}
  drawSprites();
  //add styles here
  fill("white")
  stroke("black")
  textSize("30")
  text("food Remaining :" + foodS, 170,100)
  text("note : press up arrow key to feed the dog", 130,150)


}
function readStock(data){
  foodS = data.val();
}

function writeStock(x) {
if(x<=0){
  x=0;
}else{
  x=x-1;
}
  database.ref('/').update({
    Food : x
  })
}




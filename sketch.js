//Create variables here
var dog,hdog,database,foodS,foodStock,dogImg;

function preload()
{
	//load images here
 dogImg= loadImage("images/dogImg.png");
 hdog = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);

  dog=createSprite(250,250,50,50);
  dog.addImage(dogImg);
  dog.scale = 0.3;

  database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);



  
}


function draw() {  
  background(46,138,97);
  drawSprites();

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(hdog);
  }
  //add styles here
   drawSprites();
   textSize(25);
   fill("red")
   text("Note: Press Up arrow to feed drago milk!",30,390);
   
   
}

//function to read values int he database
function readStock(data){
  foodS = data.val();
}

//function to write values in database
function writeStock(x){
   if(x<=0){
     x=0;
   }else{
     x=x-1;
   }

  database.ref('/').update({
    Food:x
  })
}


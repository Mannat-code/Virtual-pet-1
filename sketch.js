//Create variables here
var dog;
var dogImg;
var happyDog;
var happyDogImg;
var database;
var foodS;
var foodStock;


function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png");
  happyDogImg = loadImage("images/dogImg1.png")
}

function setup()
 {
  

  createCanvas(500, 500);
  dog = createSprite(250 , 350 , 10 , 10);
  dog.addImage(dogImg);
  dog.scale=0.25;
   database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on("value" , readStock);
  foodStock.set(20);
}


function draw()
{  
  background(46, 139, 87)
  //add styles here

    fill("white");
    stroke("red");
    textSize(20);
    text("Note : Press Up_ARROW to feed Drago Milk!!!", 50 , 50);
    
    fill("White");
    stroke("red");
    textSize(20);
    text( " food stock : " +foodStock , 0 , 250)
    
  if(keyWentDown(UP_ARROW))
  {
    writeStock(foodS);
    dog.addImage(happyDogImg);
  }
    drawSprites();
}
function readStock(data)
{
  foodS = data.val();
}
function writeStock(x)
{
  if(x<=0)
  {
        x = 0;
  }
  else
  {
         x=x-1 ;
  }
  database.ref('/').update({

        Food : x  

  })
}


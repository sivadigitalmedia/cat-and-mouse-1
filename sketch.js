var garden,gardenImg;
var cat;
var mouse;

function preload() {
    //load the images here
    gardenImg = loadImage("images/garden.png");
    catImg1 = loadAnimation("images/cat1.png");
    mouseImg1 = loadAnimation("images/mouse1.png");
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    catImg3 = loadAnimation("images/cat4.png");
    mouseImg3 = loadAnimation("images/mouse4.png");
    
}

function setup(){
    createCanvas(981,712);
    //createing the background Image
    garden = createSprite(490,357);
    garden.addImage("garden",gardenImg);
    //create cat and mouse sprites here
    cat = createSprite(700,500);
    cat.addAnimation("cat_sitting",catImg3);
    cat.scale = 0.2;

    mouse = createSprite(100,560);
    mouse.addAnimation("mouse_standing",mouseImg1);
    mouse.scale = 0.1;

}

function draw() {

    background("images/garden.png");
    //Write condition here to evalute if tom and jerry collide
    
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.addAnimation("cat_Running",catImg2);
        cat.changeAnimation("cat_Running");
    }

    drawSprites();
}



function keyPressed(){

  //For moving and changing animation write code here


  if(keyCode === RIGHT_ARROW){
    mouse.addAnimation("mouseTeasing",mouseImg2);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay = 10;
    cat.x = cat.x + 20;
}

  if(keyCode === LEFT_ARROW){
      mouse.addAnimation("mouseTeasing",mouseImg2);
      mouse.changeAnimation("mouseTeasing");
      mouse.frameDelay = 10;
      cat.x = cat.x - 20;
  }


}

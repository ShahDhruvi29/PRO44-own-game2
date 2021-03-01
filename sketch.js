//THERE IS A CHANGE IN THE PROJECT - NO TARZAN INSTEAD A MONSTER AS A VILLAN
//I HAVE ADDED NEW BACKGROUND THAT LOOKS INFINITE
//NOTICE- I SEARCHED A LOT BUT AM UNABLE TO GET A BACK FACING TRAVELLER'S ANIMATION (RUNNING)
//                                                                    - DHRUVI SHAH
var loggy,log;
var bg,b5,mainBg;
function preload(){
  frozenMusic=loadSound("Frozen.mp3")
  bgMusic=loadSound("SkySummit.mp3")
  djMusic=loadSound("Disco.mp3")
  b5=loadAnimation("bg/bg3.png","bg/bg4.png")
  mainBg=loadImage("bg/origonal.png")
  cactus1=loadImage("objects/cactus_01.png")
  cactus2=loadImage("objects/cactus_02.png")
  cactus3=loadImage("objects/cactus_03.png")
  cactus4=loadImage("objects/cactus_04.png")
  cactus5=loadImage("objects/cactus_05.png")
  cactus6=loadImage("objects/cactus_06.png")
  cactus7=loadImage("objects/cactus_07.png")
  cactus8=loadImage("objects/cactus_08.png")
  cactus9=loadImage("objects/cactus_09.png")
  flower1=loadImage("objects/flower1.png")
  flower2=loadImage("objects/flower2.png")
  flower3=loadImage("objects/flower3.png")
  flower4=loadImage("objects/flower4.png")
  flower5=loadImage("objects/flower5.png")
  gem1=loadImage("objects/gem1.png")
  gem2=loadImage("objects/gem2.png")
  gem3=loadImage("objects/gem3.png")
  gem4=loadImage("objects/gem4.png")
  gem5=loadImage("objects/gem5.png")
  gem6=loadImage("objects/gem6.png")
  gem7=loadImage("objects/gem7.png")
  gem8=loadImage("objects/gem8.png")
}
function setup(){
 createCanvas(500,600)
  bg=createSprite(250,300)
  //bg.velocityY=-3
  bg.addAnimation( "background",b5)
  bg.scale=3.0;
  cactusGroup= new Group()
  flowersGroup= new Group()
  gemsGroup=new Group()
}
function draw(){
  background("pink") 
  if(bg.y<100){
 //  bg.y=  300;
  }
  spawnPlants();
  spawnFlowers();
  spawnGems();
  drawSprites();
}
function spawnPlants(){
  if (frameCount%250===0) {
    cactus = createSprite(200, 0);
    cactus.velocityY=4;
    var rand = Math.round(random(1,9))
    switch (rand) {
      case 1: cactus.addImage(cactus1)   
        break;
      case 2: cactus.addImage(cactus2)   
        break;
      case 3: cactus.addImage(cactus3)   
        break;
      case 4: cactus.addImage(cactus4)   
        break;
      case 5: cactus.addImage(cactus5)   
        break;
      case 6: cactus.addImage(cactus6)   
        break;
      case 7: cactus.addImage(cactus7)   
        break;
      case 8: cactus.addImage(cactus8)   
        break;
       case 9: cactus.addImage(cactus9)   
        break;
      default: break;
    }
    cactus.x=Math.round(random(170,450))
    cactus.lifetime=150;
 //   cactus.debug = true;
    cactus.scale = 0.4
    cactusGroup.add(cactus)
  }
}

function spawnFlowers(){
  if (frameCount%450===0) {
    flora=createSprite(300,0)
    flora.velocityY=5;
    
    var rand = Math.round(random(1,5))
    switch (rand) {
      case 1: flora.addImage(flower1)   
        break;
      case 2: flora.addImage(flower2)   
        break;
      case 3: flora.addImage(flower3)   
        break;
      case 4: flora.addImage(flower4)   
        break;
      case 5: flora.addImage(flower5)   
        break;
      default:  break;
    }
    flora.x=Math.round(random(170,450))
    flora.lifetime=120
  //  flora.debug=true;
    flora.scale=0.4
    flowersGroup.add(flora)
  }
}

function spawnGems(){
  if (frameCount%500===0) {
    gemy=createSprite(220,0)
    gemy.velocityY=7;

    var rand = Math.round(random(1,8))
    switch (rand) {
      case 1: gemy.addImage(gem1)
        break;
      case 2: gemy.addImage(gem2)
        break;
      case 3: gemy.addImage(gem3)
        break;
      case 4: gemy.addImage(gem4)
        break;
      case 5: gemy.addImage(gem5)
        break;
      case 6: gemy.addImage(gem6)
        break;
      case 7: gemy.addImage(gem7)
        break;
        case 8: gemy.addImage(gem8)
        break; 
      default: break;
    }
    gemy.x = Math.round(random(170,300));
    gemy.lifetime = 120;  
    gemy.scale=0.2
    gemsGroup.add(gemy)
  }
}
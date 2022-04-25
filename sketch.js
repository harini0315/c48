var player,playerDownImg,playerRightImg,playerUpImg,playerLeftImg;
var e1,e2,e3,e4, e1Img, e2Img, e3Img, e4Img
var w1,w2,w3,w4,w5,w6,w7,w8,w9,w10,w11,w12,w13,w14,w15,w16,w17,w18,w19,w20,w21,w22,w23,w24,w25,w26
var edges
var d1,d2,d3,d4,d5,d6,d7,d8,d9,d10,d11,d12,d13,d14,d15,d16,d17,d18,d19,d20,d21,d22,d23,d24,d25,d26,d27,d28,d29,d30,d31,d32,d33,d34,d35,d36,d37,d38,d39,d40,d41,d42,d43,d44,d45,d46,d47,d48,d49
var coin, coinImg
var score 
var PLAY = 1
var END = 0
var gameState = PLAY
var restart, restartImg
function preload(){
coinImg = loadImage("coin.png")
e1Img = loadImage("e1.png")
e2Img = loadImage("e2.png")
e3Img = loadImage("e3.png")
e4Img = loadImage("e4.png")
playerImg = loadImage("player-start.png")
playerLeftImg = loadImage("playerLeft.png")
playerDownImg = loadImage("playerDown.png")
playerUpImg = loadImage("playerUp.png")
playerRightImg = loadImage("playerRight.png")
restartImg = loadImage("restart.png")
}
function setup() {
  createCanvas(1000,640);
  score = 0
  player = createSprite(500,340,30,30);
  player.addImage(playerImg)
  player.scale = 0.06
  player.visible = true
  restart = createSprite(500,300,10,10)
  restart.addImage(restartImg)
  restart.scale = 0.25
  restart.visible = false
  w1 = createSprite(10,320,15,612)
  w2 = createSprite(500,20,990,15)
  w3 = createSprite(990,320,15,612)
  w4 = createSprite(500,620,990,15)
  w5 = createSprite(150,200,15,150)
  w6 = createSprite(200,130,100,15)
  w7 = createSprite(500,130,260,15)
  w8 = createSprite(851,200,15,150)
  w9 = createSprite(806,130,100,15)
  w10 = createSprite(270,300,50,15)
  w11 = createSprite(730,300,50,15)
  w12 = createSprite(400,300,50,15)
  w13 = createSprite(600,300,50,15)
  w14 = createSprite(370,345,15,100) 
  w15 = createSprite(630,345,15,100)
  w16 = createSprite(500,400,270,15)
  w17 = createSprite(270,400,50,15)
  w18 = createSprite(730,400,50,15)
  w19 = createSprite(150,500,15,150)
  w20 = createSprite(851,500,15,150)
  w21 = createSprite(200,570,100,15)
  w22 = createSprite(806,570,100,15)
  w23 = createSprite(700,550,15,150)
  w24 = createSprite(300,550,15,150)
  w25 = createSprite(300,100,15,150)
  w26 = createSprite(700,100,15,150)
  e1 = createSprite(500,500,30,30)
  //e1.shapeColor = "yellow"
  e1.addImage(e1Img)
  e1.scale = 0.5
  e2 = createSprite(600,400,30,30)
  //e2.shapeColor = "green"
  e2.addImage(e2Img)
  e2.scale = 0.5
  e3 = createSprite(900,100,30,30)
  //e3.shapeColor = "purple"
  e3.addImage(e3Img)
  e3.scale = 0.5
  e4 = createSprite(200,100,30,30)
  //e4.shapeColor = "red"
  e4.addImage(e4Img)
  e4.scale = 0.5
  w1.shapeColor = "blue"
  w2.shapeColor = "blue"
  w3.shapeColor = "blue"
  w4.shapeColor = "blue"
  w5.shapeColor = "blue"
  w6.shapeColor = "blue"
  w7.shapeColor = "blue"
  w8.shapeColor = "blue"
  w9.shapeColor = "blue"
  w10.shapeColor = "blue"
  w11.shapeColor = "blue"
  w12.shapeColor = "blue"
  w13.shapeColor = "blue"
  w14.shapeColor = "blue"
  w15.shapeColor = "blue"
  w16.shapeColor = "blue"
  w17.shapeColor = "blue"
  w18.shapeColor = "blue"
  w19.shapeColor = "blue"
  w20.shapeColor = "blue"
  w21.shapeColor = "blue"
  w22.shapeColor = "blue"
  w23.shapeColor = "blue"
  w24.shapeColor = "blue"
  w25.shapeColor = "blue"
  w26.shapeColor = "blue"
  edges = createEdgeSprites()
  d1 = createSprite(50,70,20,20)
  d1.addImage(coinImg)
  d1.scale = 0.1
  d2 = createSprite(50,150,20,20)
  d2.addImage(coinImg)
  d2.scale = 0.1
  d3 = createSprite(50,230,20,20)
  d3.addImage(coinImg)
  d3.scale = 0.1
  d4 = createSprite(50,310,20,20)
  d4.addImage(coinImg)
  d4.scale = 0.1
  d5 = createSprite(50,390,20,20)
  d5.addImage(coinImg)
  d5.scale = 0.1
  d6 = createSprite(50,470,20,20)
  d6.addImage(coinImg)
  d6.scale = 0.1
  d7 = createSprite(50,550,20,20)
  d7.addImage(coinImg)
  d7.scale = 0.1
  d8 = createSprite(930,70,20,20)
  d8.addImage(coinImg)
  d8.scale = 0.1
  d9 = createSprite(930,150,20,20)
  d9.addImage(coinImg)
  d9.scale = 0.1
  d10 = createSprite(930,230,20,20)
  d10.addImage(coinImg)
  d10.scale = 0.1
  d11= createSprite(930,310,20,20)
  d11.addImage(coinImg)
  d11.scale = 0.1
  d12= createSprite(930,390,20,20)
  d12.addImage(coinImg)
  d12.scale = 0.1
  d13= createSprite(930,470,20,20)
  d13.addImage(coinImg)
  d13.scale = 0.1
  d14= createSprite(930,550,20,20)
  d14.addImage(coinImg)
  d14.scale = 0.1
  d15 = createSprite(130,70,20,20)
  d15.addImage(coinImg)
  d15.scale = 0.1
  d16 = createSprite(210,70,20,20)
  d16.addImage(coinImg)
  d16.scale = 0.1
  d17 = createSprite(290,70,20,20)
  d17.addImage(coinImg)
  d17.scale = 0.1
  d18 = createSprite(370,70,20,20)
  d18.addImage(coinImg)
  d18.scale = 0.1
  d19 = createSprite(450,70,20,20)
  d19.addImage(coinImg)
  d19.scale = 0.1
  d20 = createSprite(530,70,20,20)
  d20.addImage(coinImg)
  d20.scale = 0.1
  d21 = createSprite(610,70,20,20)
 d21.addImage(coinImg)
  d21.scale = 0.1
  d22 = createSprite(690,70,20,20)
  d22.addImage(coinImg)
  d22.scale = 0.1
  d23 = createSprite(770,70,20,20)
  d23.addImage(coinImg)
  d23.scale = 0.1
  d24 = createSprite(850,70,20,20)
  d24.addImage(coinImg)
  d24.scale = 0.1
  d25 = createSprite(850,595,20,20)
  d25.addImage(coinImg)
  d25.scale = 0.1
  d26 = createSprite(770,595,20,20)
  d26.addImage(coinImg)
  d26.scale = 0.1
  d27 = createSprite(690,595,20,20)
  d27.addImage(coinImg)
  d27.scale = 0.1
  d28= createSprite(610,595,20,20)
  d28.addImage(coinImg)
  d28.scale = 0.1
  d29= createSprite(530,595,20,20)
  d29.addImage(coinImg)
  d29.scale = 0.1
  d30 = createSprite(450,595,20,20)
  d30.addImage(coinImg)
  d30.scale = 0.1
  d31 = createSprite(370,595,20,20)
  d31.addImage(coinImg)
  d31.scale = 0.1
  d32 = createSprite(290,595,20,20)
  d32.addImage(coinImg)
  d32.scale = 0.1
  d33 = createSprite(210,595,20,20)
  d33.addImage(coinImg)
  d33.scale = 0.1
  d34 = createSprite(130,595,20,20)
  d34.addImage(coinImg)
  d34.scale = 0.1
  d35 = createSprite(930,595,20,20)
  d35.addImage(coinImg)
  d35.scale = 0.1
  d36 = createSprite(50,595,20,20)
  d36.addImage(coinImg)
  d36.scale = 0.1
  d37 = createSprite(330,270,20,20)
  d37.addImage(coinImg)
  d37.scale = 0.1
  d38 = createSprite(330,350,20,20)
  d38.addImage(coinImg)
  d38.scale = 0.1
  d39 = createSprite(330,430,20,20)
  d39.addImage(coinImg)
  d39.scale = 0.1
  d40 = createSprite(670,270,20,20)
  d40.addImage(coinImg)
  d40.scale = 0.1
  d41 = createSprite(670,350,20,20)
  d41.addImage(coinImg)
  d41.scale = 0.1
  d42= createSprite(670,430,20,20)
  d42.addImage(coinImg)
  d42.scale = 0.1
  d43= createSprite(570,270,20,20)
  d43.addImage(coinImg)
  d43.scale = 0.1
  d44= createSprite(490,270,20,20)
  d44.addImage(coinImg)
  d44.scale = 0.1
  d45= createSprite(410,270,20,20)
  d45.addImage(coinImg)
  d45.scale = 0.1
  d46= createSprite(570,430,20,20)
  d46.addImage(coinImg)
  d46.scale = 0.1
  d47= createSprite(490,430,20,20)
  d47.addImage(coinImg)
  d47.scale = 0.1
  d48= createSprite(410,430,20,20)
  d48.addImage(coinImg)
  d48.scale = 0.1
  d49= createSprite(50,430,20,20)
  d49.addImage(coinImg)
  d49.scale = 0.1
  e1.velocityX = -2
  e2.velocityY = 2
  e3.velocityX = -2
  e4.velocityY = -2
  
  //d21.shapeColor = "orange"
}

function draw() 
{
   background(0);
  
  if(gameState===PLAY){

  if (keyIsDown(RIGHT_ARROW)) 
  {
    player.position.x = player.position.x +5;
    player.addImage(playerLeftImg)
    player.scale = 0.06
  }

    if (keyIsDown(LEFT_ARROW)) 
  {
    player.position.x= player.position.x -5;
    player.addImage(playerRightImg)
    player.scale = 0.08
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    player.position.y = player.position.y - 5;
   player.addImage(playerUpImg)
    player.scale = 0.06
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    player.position.y = player.position.y + 5;
    player.addImage(playerDownImg)
    player.scale = 0.08
  }
  player.bounceOff(w1)
  player.bounceOff(w2)
  player.bounceOff(w3)
  player.bounceOff(w4)
  player.bounceOff(w5)
  player.bounceOff(w6)
  player.bounceOff(w7)
  player.bounceOff(w8)
  player.bounceOff(w9)
  player.bounceOff(w10)
  player.bounceOff(w11)
  player.bounceOff(w12)
  player.bounceOff(w13)
  player.bounceOff(w14)
  player.bounceOff(w15)
  player.bounceOff(w16)
  player.bounceOff(w17)
  player.bounceOff(w18)
  player.bounceOff(w19)
  player.bounceOff(w20)
  player.bounceOff(w21)
  player.bounceOff(w22)
  player.bounceOff(w23)
  player.bounceOff(w24)
  player.bounceOff(w25)
  player.bounceOff(w26)


 
  e1.bounceOff(edges)
  e2.bounceOff(edges)
  e3.bounceOff(edges)
  e4.bounceOff(edges)

  e1.bounceOff(e2)
  e1.bounceOff(e3)
  e1.bounceOff(e4)
  e2.bounceOff(e3)
  e2.bounceOff(e4)
  e3.bounceOff(e4)

 if(player.isTouching(d1)){
   d1.destroy()
   score = score+1
 }
 if(player.isTouching(d2)){
  d2.destroy()
  score = score+1
}
if(player.isTouching(d3)){
  d3.destroy()
  score = score+1
}
if(player.isTouching(d4)){
  d4.destroy()
  score = score+1
}
if(player.isTouching(d5)){
  d5.destroy()
  score = score+1
}
if(player.isTouching(d6)){
  d6.destroy()
  score = score+1
}
if(player.isTouching(d7)){
  d7.destroy()
  score = score+1
}
if(player.isTouching(d8)){
  d8.destroy()
  score = score+1
}
if(player.isTouching(d9)){
  d9.destroy()
  score = score+1
}
if(player.isTouching(d10)){
  d10.destroy()
  score = score+1
}
if(player.isTouching(d11)){
  d11.destroy()
  score = score+1
}
if(player.isTouching(d12)){
  d12.destroy()
  score = score+1
}
if(player.isTouching(d13)){
  d13.destroy()
  score = score+1
}
if(player.isTouching(d14)){
  d14.destroy()
  score = score+1
}
if(player.isTouching(d15)){
  d15.destroy()
  score = score+1
}
if(player.isTouching(d16)){
  d16.destroy()
  score = score+1
}
if(player.isTouching(d17)){
  d17.destroy()
  score = score+1
}
if(player.isTouching(d18)){
  d18.destroy()
  score = score+1
}
if(player.isTouching(d19)){
  d19.destroy()
  score = score+1
}
if(player.isTouching(d20)){
  d20.destroy()
  score = score+1
}
 if(player.isTouching(d21)){
   d21.destroy()
   score = score+1
 }
 if(player.isTouching(d22)){
  d22.destroy()
  score = score+1
}
if(player.isTouching(d23)){
  d23.destroy()
  score = score+1
}
if(player.isTouching(d24)){
  d24.destroy()
  score = score+1
}
if(player.isTouching(d25)){
  d25.destroy()
  score = score+1
}
if(player.isTouching(d27)){
  d27.destroy()
  score = score+1
}
if(player.isTouching(d28)){
  d28.destroy()
  score = score+1
}
if(player.isTouching(d26)){
  d26.destroy()
  score = score+1
}
if(player.isTouching(d29)){
  d29.destroy()
  score = score+1
}
if(player.isTouching(d30)){
  d30.destroy()
  score = score+1
}
if(player.isTouching(d31)){
  d31.destroy()
  score = score+1
}
if(player.isTouching(d32)){
  d32.destroy()
  score = score+1
}
if(player.isTouching(d33)){
  d33.destroy()
  score = score+1
}
if(player.isTouching(d34)){
  d34.destroy()
  score = score+1
}
if(player.isTouching(d35)){
  d35.destroy()
  score = score+1
}
if(player.isTouching(d36)){
  d36.destroy()
  score = score+1
}
if(player.isTouching(d37)){
  d37.destroy()
  score = score+1
}
if(player.isTouching(d38)){
  d38.destroy()
  score = score+1
}
if(player.isTouching(d39)){
  d39.destroy()
  score = score+1
}
if(player.isTouching(d40)){
  d40.destroy()
  score = score+1
}
if(player.isTouching(d41)){
  d41.destroy()
  score = score+1
}
if(player.isTouching(d42)){
  d42.destroy()
  score = score+1
}
if(player.isTouching(d43)){
  d43.destroy()
  score = score+1
}
if(player.isTouching(d44)){
  d44.destroy()
  score = score+1
}
if(player.isTouching(d45)){
  d45.destroy()
  score = score+1
}
if(player.isTouching(d46)){
  d46.destroy()
  score = score+1
}
if(player.isTouching(d47)){
  d47.destroy()
  score = score+1
}
if(player.isTouching(d48)){
  d48.destroy()
  score = score+1
}
if(player.isTouching(d49)){
  d49.destroy()
  score = score+1
}
 if(player.isTouching(e1)||player.isTouching(e2)||player.isTouching(e3)||player.isTouching(e4)){
   gameState = END
   
 }
}
else{
if(gameState===END){
  textSize(100)
    fill("white")
    text("GAME OVER!",200,250)
   restart.visible = true
  
  player.visible = false
  e1.velocityX = 0
  e2.velocityY = 0
  e3.velocityX = 0
  e4.velocityY = 0
}
}
if(mousePressedOver(restart)){
  reset()
}
  drawSprites();
  textSize(30)
  fill ("white")
  text ("Score: "+score,50,50)
  
}
function reset(){
  gameState = PLAY
  restart.visible = false
  player.visible = true
  e1.velocityX = -2
  e2.velocityY = 2
  e3.velocityX = -2
  e4.velocityY = -2
 
}
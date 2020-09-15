var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;
var score = 0;
var score1 = 0;

var player, form,game;
var player1,player2;
var players;
var fruits;
var fruitsGroup;
var fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img;
var player_img;
var banana,pineapple,watermelon,apple,orange;



function preload(){
  back_img = loadImage("images/jungle.jpg");
  player_img = loadImage("images/basket2.png");
  fruit1_img = loadImage("images/apple2.png");
  fruit2_img = loadImage("images/banana2.png");
  fruit3_img = loadImage("images/melon2.png");
  fruit4_img = loadImage("images/orange2.png");
  fruit5_img = loadImage("images/pineapple2.png");
  
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  

  game = new Game();
  game.getState();
  game.start();
  
  players = new Game();
  fruits = createSprite(); 
  fruitsGroup = createGroup();
  fruitsGroup.add(fruits);

  player1 = createSprite(20,500);
  player1.addImage("player1",player_img);
  
  player2 = createSprite(100,500);
  player2.addImage("player2", player_img);
  players=[player1,player2];
 
}

function draw() {
  background(back_img);

  player1.display();
     player2.display();
  
   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
     form.hide();  
     fill("red");
     text("player 1:"+score,50,40);
     fill("blue");
     text("player 2:"+score1,50,80);
     
  
   }
   if (gameState === 2) {
    
     game.end();
   }

   

   if(fruitsGroup.isTouching(player1)){
     
   }

   if(fruitsGroup.isTouching(player2)){
    
  }
   


   
}
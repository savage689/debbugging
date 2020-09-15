class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }

            
   

    }
    
    play(){
        
                form.hide();

                Player.getPlayerInfo();
                 image(back_img, 0, 0, 1000, 800);
                 var x =100;
                 var y=200;
                 var index =0;
                 drawSprites();
                 for(var plr in players){
                    
                    
                     index = index+1;
                     x = 500-players[plr].distance;
                     y=500;
                     
                     
                       
                     if(index === player.index){
                         
                         fill("black");
                         textSize(25);
                         text(players[plr].name ,50,100);

                         
                     }

                     player1.x = mouseX;
                     player2.x = mouseX;
                    
                     
                 
                 }
                
                
                 

                if (keyIsDown(RIGHT_ARROW)) {
                    player.distance -= 10
                    player.update();
                }
                if (keyIsDown(LEFT_ARROW)) {
                    player.distance += 10
                    player.update();
                }
            
                 if (frameCount % 20 === 0) {
                     fruits = createSprite(random(100, 1000), 0, 100, 100);
                     fruits.velocityY = 6;
                     var rand = Math.round(random(1,5));
                     switch(rand){
                         case 1: fruits.addImage("fruit1",fruit1_img);
                         break;
                         case 2: fruits.addImage("fruit1", fruit2_img);
                         break;
                         case 3: fruits.addImage("fruit1", fruit3_img);
                         break;
                         case 4: fruits.addImage("fruit1", fruit4_img);
                         break;
                         case 5: fruits.addImage("fruit1", fruit5_img);
                         break;
                     }
                     fruitsGroup.add(fruits);
                     
                 }
                 
                  if (fruitsGroup.isTouching(player1)) {
                    fruitsGroup.destroyEach();
                    score = score+1;
                    player1.display();
                    player1.x = mouseX;
                  }

                  if (fruitsGroup.isTouching(player2)) {
                    fruitsGroup.destroyEach();
                    score1 = player2; 
                    score1 = score1+1;
                    player2.display();
                    player2.x = mouseX;
                  }
                

                

         
         
        
         

    }

    end(){
       console.log("Game Ended");
    }

    
}

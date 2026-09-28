// TANK TROUBLES
// laser counters speedy
// strong counters laser
// speedy counters strong
// normal does not counter, is not countered by anything

playSound("Sonic---Green-Hill-Zone-(Rukasu-Remix).mp3", true);
/*
depth list- (game screen)
background
barriers - 1 DONE
player - 2 DONE
player image - 3 DONE
powerups - 4 CANT DO
toxic cloud - 5 DONE
health - 6 DONE
ammo - 7 DONE
countDown - 8 DONE
weapons - 9 DONE (including lasers)
mega laser - 10 DONE
*/

if(true) // lists (not all lists, just some)
{
var startScreenList = []; // has all sprites from choosing screen

var barrierList = []; // barriers

var gameScreenList = []; // has all sprites from creating game and playing game (excluding bullets and walls)

var bulletList = []; // list for bullets

var numMatchCheck = []; // check box for amount of matches to be played

var powerUpList = []; // list for powerUps

var toxicCloudList = [];
}

if(true) // tank vars
{
var player1Tank; // tank type, speed, damage, health, ammo
var p1CurrentAmmo = 0; // tracks p1 current ammo (p1 max ammo is stored in player1Tank)
var p1AmmoImage = []; // list used by updateAmmo to change the images of each ammo sprite
var p1Reloading = false; // checks if the player is reloading, if they are, then they cannot fire
var p1CurrentHealth; // tracks p1 current health 
var p1HealthImage = []; // list used by updateHealth
var p1Invicible = false;
var p1DamageBonus = 0;
var p1ReloadTime = 1.5;
var p1MegaLaser = createSprite(0,0);
p1MegaLaser.visible = false;
p1MegaLaser.depth = 10;
var p1CanControl = true;
// p2 var does the same things as p1 var, but are just for p2
var player2Tank;
var p2CurrentAmmo = 0;
var p2AmmoImage = [];
var p2Reloading = false;
var p2CurrentHealth;
var p2HealthImage = [];
var p2Invicible = true;
var p2DamageBonus = 0;
var p2ReloadTime = 1.5;
var p2MegaLaser = createSprite(0,0);
p2MegaLaser.visible = false;
p2MegaLaser.depth = 10;
var p2CanControl = true;
}

if(true) // start screen varibles
{ // nice
var tankList = ["Strong", "Laser", "Normal", "Speedy"]; // the tank types the player can choose from
var tankDesc = ["A slow, heavy beast, but it packs quite a punch.", "A unique tank, firing a laser. Has the added bonus of slowing down time.", "Your run of the mill tank, but don't underestimate it.", "Quick and nimble, but lacks in health and damage."]; // desc for each tank type
var tankStatsDesc = ["Speed = 3   Damage = 10 Health = 8     Ammo = 3", "Speed = 6   Damage = 7 Health = 5     Ammo = 4", "Speed = 6   Damage = 6 Health = 6     Ammo = 6", "Speed = 10   Damage = 3 Health = 4     Ammo = 10"]; // stats for each tank type
var tankStats = [3,10,8,3,6,7,5,4,6,6,6,6,9,3,4,10]; // list of tank stats used by getTankStats
var player1Chooser = createSprite(120, 190); // creates sprite which shows which tank p1 is currently selected
player1Chooser.setAnimation("Normal");
player1Chooser.scale = 1;
var player2Chooser = createSprite(280, 190); // creates sprite which shows which tank p2 is currently selected
player2Chooser.setAnimation("Normal");
player2Chooser.scale = 1;
var player1CurrentChoosen = 2; // which tank p1 is currently selected (numbers from tankList)
var player2CurrentChoosen = 2;
for(var index = 0; index < 2; index ++) // creates the L/R buttons (these buttons don't work)
{
  var buttonR = createSprite(83 + 160 * index, 210);
  buttonR.setAnimation("choose");
  var buttonL = createSprite(163 + 160 * index, 210);
  buttonL.setAnimation("choose");
  buttonR.mirrorX(-1);
  startScreenList.push(buttonR);
  startScreenList.push(buttonL);
}
var start = createSprite(200, 350); // creates the start image at the bottom
start.setAnimation("start");
var ready1 = createSprite(171, 350); // creates a red/green sprite that indicates if p1 is ready
ready1.setAnimation("ready");
ready1.pause();
var player1Ready = false; // stores if p1 is ready via a boglean
var ready2 = createSprite(229, 350); // does the same thing as ready1, but tracks p2 instead
ready2.setAnimation("ready");
ready2.pause();
var player2Ready = false; // stores if p2 is ready via a boglean
for(var checkBoxIndex = 0; checkBoxIndex < 4; checkBoxIndex++)
{
  var checkBox = createSprite(320, 320 + 20 * checkBoxIndex);checkBox.setAnimation("checkBox");
  checkBox.pause();
  if(checkBoxIndex == 0)
  {
    checkBox.setFrame(1);
  }
  numMatchCheck.push(checkBox);
  
}

var logo = createSprite(200, 50);
logo.setAnimation("logo");

var instructionsButton = createSprite(50, 350);
instructionsButton.setAnimation("instructionsButton");
var instructions = createSprite(200, 200);
instructions.setAnimation("instructions");
instructions.visible = false;
instructions.pause();
var exit = createSprite(370, 30);
exit.setAnimation("exit");
exit.visible = false;

// adds the sprites to the startScreenList
startScreenList.push(player1Chooser);
startScreenList.push(player2Chooser);
startScreenList.push(start);
startScreenList.push(ready1);
startScreenList.push(ready2);
startScreenList.push(instructionsButton);
startScreenList.push(instructions);
startScreenList.push(exit);
startScreenList.push(logo);
}

if(true) // create game varibles
{
var p1TankBase = createSprite(37, 200); // the hitbox for p1
p1TankBase.setAnimation("playerTank");
p1TankBase.pause();
p1TankBase.setFrame(5);
p1TankBase.depth = 2;
gameScreenList.push(p1TankBase);
var p1Image = createSprite(40, 200); // turrent image for p1
p1Image.depth = 3;
gameScreenList.push(p1Image);

var p2TankBase = createSprite(363, 200); // the hitbox for p2
p2TankBase.setAnimation("playerTank");
p2TankBase.pause();
p2TankBase.setFrame(5);
p2TankBase.rotation = 180;
p2TankBase.tint = "rgb(245, 61, 20)"; 
p2TankBase.depth = 2;
gameScreenList.push(p2TankBase);
var p2Image = createSprite(360, 200); // turrent image for p2
p2Image.depth = 3;
gameScreenList.push(p2Image);

}

if(true) // border images and colliders
{
var edgeImage = createSprite(200, 200); // out wall image
edgeImage.setAnimation("border");
gameScreenList.push(edgeImage);
edgeImage.depth = 0;

createEdgeSprites(); // collider for the edge, but for some reason they are not always working
topEdge.setCollider("rectangle", 0, 10);
bottomEdge.setCollider("rectangle", 0, -10);
leftEdge.setCollider("rectangle", 10, 0);
rightEdge.setCollider("rectangle", -10, 0);
}

if(true) // laser sprites
{
var p1laserLeaderList = []; // see laser functions to see how these works
var p1laserFollowerList = [];

var p2laserLeaderList = [];
var p2laserFollowerList = [];
}

if(true) // functions to be called before the program starts
{
var stage = "chooseScreen"; // controls what stage the game is, chooseScreen, createGameScreen, startScreen
hideGameScreen(false); // hides the game screen
}

if(true) // sprites for once someone wins
{
var p1WinScreen = createSprite(200, 200);
p1WinScreen.visible = false;
p1WinScreen.depth = 50;
p1WinScreen.setAnimation("p1Wins");

var p2WinScreen = createSprite(200, 200);
p2WinScreen.visible = false;
p2WinScreen.depth = 50;
p2WinScreen.setAnimation("p2Wins");
}

if(true) // useful vars to have thoughout the entire program
{
  var p1Wins = 0;
  var p2Wins = 0;
  var matchesToBePlayed = 1;
  var inGameTimer = createSprite(-100, -100);
  var constantClock = 0;
}

function draw()
{
  constantClock++;
  if(stage == "chooseScreen")
  {
    background(173, 147, 81);
    chooseTank();
  }
  if(stage == "createGameScreen" || stage == "playGame")
  {
    background(173, 147, 81);
    createGame();
    if(stage == "playGame")
    {
      testPowerUps(p1TankBase, p1CurrentHealth, player1Tank, p1DamageBonus, p1CurrentAmmo, "p1");
      testPowerUps(p2TankBase, p2CurrentHealth, player2Tank, p2DamageBonus, p2CurrentAmmo, "p2");
      genPowerUps();
      physics();
      controls();
      updateAmmo();
      createToxic();
      updateHealth(p1CurrentHealth, player1Tank, p1HealthImage);
      updateHealth(p2CurrentHealth, player2Tank, p2HealthImage);
    }
  }
  if(stage == "match end")
  {
    inGameTimer.lifetime = -1;
    if(p1Wins + p2Wins == matchesToBePlayed || p1Wins + p2Wins > matchesToBePlayed)
    {
      stage = "end game";
    }
    else
    {
      stage = "next game";
    }
  }
  
  if(stage == "end game")
  {
    inGameTimer.lifetime = -1;
    if(matchesToBePlayed != 1)
    {
      background("green");
      textAlign(CENTER, CENTER);
      if(p1Wins > p2Wins)
      {
        textSize(50);
        fill("rgb(209, 123, 123)");
        text("Player 1 Wins!", 200, 200);
      }
      else
      {
        textSize(50);
        fill("rgb(145, 235, 235)");
        text("Player 2 Wins!", 200, 200);
      }
      textSize(20);
      fill("white");
      text("Score- " + p1Wins + " to " + p2Wins, 200, 250);
    }
  }
  
  if(stage == "next game")
  {
    player1Ready = true;
    player2Ready = true;
    testForStart();
  }
  drawSprites();
}

                    // general functions

function physics() // collisions
{
  p1TankBase.collide(edges);
  p2TankBase.collide(edges);
  for(var index3 = 0; index3 < barrierList.length; index3++)
  {
    p1TankBase.collide(barrierList[index3]);
    p2TankBase.collide(barrierList[index3]);
    p1Image.collide(barrierList[index3]);
    p2Image.collide(barrierList[index3]);
    for(var index = 0; index < bulletList.length; index++)
    {
      if(bulletList[index].getSpeed() > 9.8 && bulletList[index].getSpeed() < 10.2)
      {
        if(bulletList[index].isTouching(edges))
        {
          explode(bulletList[index].x, bulletList[index].y);
          bulletList[index].destroy();
        }
      }
      else
      {
        bulletList[index].bounceOff(barrierList[index3]);
        bulletList[index].bounceOff(edges);
      }
    }
  }
  updateLaser(p1laserLeaderList, p1laserFollowerList, "p1");
  updateLaser(p2laserLeaderList, p2laserFollowerList, "p2");
  bulletDetection();
  if(toxicCloudList.length == 4)
  {
    var p1X = p1TankBase.x;
    var p1Y = p1TankBase.y;
    var p2X = p2TankBase.x;
    var p2Y = p2TankBase.y;
    if(p1X < toxicCloudList[1].x || p1X > toxicCloudList[2].x || p1Y < toxicCloudList[0].y || p1Y > toxicCloudList[3].y)
    {
      if(constantClock % 30 == 0)
      {
        p1CurrentHealth -= 2;
      }
    }
    if(p2X < toxicCloudList[1].x || p2X > toxicCloudList[2].x || p2Y < toxicCloudList[0].y || p2Y > toxicCloudList[3].y)
    {
      if(constantClock % 30 == 0)
      {
        p2CurrentHealth -= 2;
      }
    }
  }
}

function clear(list) // clearing lists
{
  for(var index = 0; index < list.length; index++)
  {
    list[index].destroy();
  }
  list.length = 0;
}

                    // start screen functions

function chooseTank() // main function for choosing tank screen, creates most of the sprites you see on the start screen
{
  fill("black");
  textFont("Courier New");
  textSize(16);
  text(tankList[player1CurrentChoosen], 95, 213);
  text(tankList[player2CurrentChoosen], 255, 213);
  textSize(11);
  text(tankDesc[player1CurrentChoosen], 63, 130, 160, 135);
  text(tankStatsDesc[player1CurrentChoosen], 90, 235, 115, 240);
  text(tankDesc[player2CurrentChoosen], 223, 130, 160, 135);
  text(tankStatsDesc[player2CurrentChoosen], 250, 235, 115, 240);
  text("Best of 1", 335, 325);
  text("Best of 3", 335, 345);
  text("Best of 5", 335, 365);
  text("Best of 7", 335, 385);
  if(keyWentDown("left") && player2Ready == false)
  {
    changeTanks(2, player2CurrentChoosen, -1);
  }
  if(keyWentDown("right") && player2Ready == false)
  {
    changeTanks(2, player2CurrentChoosen, 1);
  }
  if(keyWentDown("a") && player1Ready == false)
  {
    changeTanks(1, player1CurrentChoosen, -1);
  }
  if(keyWentDown("d") && player1Ready == false)
  {
    changeTanks(1, player1CurrentChoosen, 1);
  }
  if(mousePressedOver(instructionsButton))
  {
    instructionsButton.visible = false;
    instructions.visible = true;
    exit.visible = true;
  }
  if(instructions.visible == true)
  {
    if(keyWentDown("v"))
    {
      instructions.previousFrame();
    }
    if(keyWentDown("b"))
    {
      instructions.nextFrame();
    }
    if(mousePressedOver(exit))
    {
      instructions.visible = false;
      exit.visible = false;
      instructionsButton.visible = true;
    }
  }
  changeMatchAmount();
  if(instructions.visible == false)
  {
    testForStart();
  }
}

function testForStart() // starts the game when both players are ready, as well as show the next stage sprites and start the count down
{
  if(player1Ready == true && player2Ready == true)
  {// used for things in the next stage that only need to be called once
    resetChar();
    createGround();
    getTankStats();
    hideStartScreen(false);
    stage = "createGameScreen";
    var index = 0;
    createAmmo();
    createHealth();
    hideGameScreen(true);
    var yeet = setInterval(function()
    {
      if(index == 3)
      {
        stage = "playGame";
        clearInterval(yeet);
      }
      index ++;
    }, 1000);
  }
  else
  {
    if(keyWentDown("e"))
    {
      ready1.nextFrame();
      if(player1Ready == false)
      {
        player1Ready = true;
      }
      else
      {
        player1Ready = false;
      }
    }
    if(keyWentDown("p"))
    {
      ready2.nextFrame();
      if(player2Ready == false)
      {
        player2Ready = true;
      }
      else
      {
        player2Ready = false;
      }
    }
  }
}

function changeTanks(playerChooser, playerCurrent, direction) // allows for players to change what tank they want to use
{
  var increment = 0;
  if(direction == 1)
  {
    if(playerCurrent == tankList.length - 1)
    {
      increment = -3;
    }
    else
    {
      increment = 1;
    }
  }
  if(direction == -1)
  {
    if(playerCurrent == 0)
    {
      increment = 3;
    }
    else
    {
      increment = -1;
    }
  }
  
  if(playerChooser == 1)
  {
    player1CurrentChoosen += increment;
    player1Chooser.setAnimation(tankList[player1CurrentChoosen]);
  }
  else
  {
    player2CurrentChoosen += increment;
    player2Chooser.setAnimation(tankList[player2CurrentChoosen]);
  }
}

function getTankStats() // once the game stage becomes createGameScreen, gets the stats of the tanks the player choose
{
  var i1 = player1CurrentChoosen * 4;
  player1Tank = [tankList[player1CurrentChoosen], tankStats[i1], tankStats[i1 + 1], tankStats[i1 + 2], tankStats[i1 + 3]];
  p1CurrentAmmo = player1Tank[4];
  p1CurrentHealth = player1Tank[3];
  var i2 = player2CurrentChoosen * 4;
  player2Tank = [tankList[player2CurrentChoosen], tankStats[i2], tankStats[i2 + 1], tankStats[i2 + 2], tankStats[i2 + 3]];
  p2CurrentAmmo = player2Tank[4];
  p2CurrentHealth = player2Tank[3];
}

function changeMatchAmount()
{
  if(mouseWentDown("left"))
  {
    for(var boxIndex = 0; boxIndex < numMatchCheck.length; boxIndex++)
    {
      if(mousePressedOver(numMatchCheck[boxIndex]))
      {
        numMatchCheck[boxIndex].setFrame(1);
        matchesToBePlayed = boxIndex * 2 + 1;
        for(var boxIndex2 = 0; boxIndex2 < numMatchCheck.length; boxIndex2++)
        {
          if(numMatchCheck[boxIndex2] != numMatchCheck[boxIndex])
          {
            numMatchCheck[boxIndex2].setFrame(0);
          }
        }
        break;
      }
    }
  }
}

function hideStartScreen(hide) // once the game stage becomes createGameScreen, hides the chooseScreen sprites
{
  for(var index = 0; index < startScreenList.length; index ++)
  {
    startScreenList[index].visible = hide;
  }
  for(var boxIndex = 0; boxIndex < numMatchCheck.length; boxIndex++)
  {
    numMatchCheck[boxIndex].visible = hide;
  }
}

                  // create game functions

function createGame() // main function for the creation of the game, creates the walls and players, as well as other things related to it
{
  createPlayers();
}

function createGround() // creates the walls
{
  var whichGround = randomNumber(0,6);
  for(var barrierIndex = 0; barrierIndex < barrierList.length; barrierIndex++)
  {
    barrierList[barrierIndex].destroy();
  }
  barrierIndex.length = 0;
  if(whichGround == 0)
  {
    var wall1 = createSprite(80, 200);
    wall1.setAnimation("barrierWall");
    wall1.visible = false;
    barrierList.push(wall1);
    
    var wall2 = createSprite(320, 200);
    wall2.setAnimation("barrierWall");
    wall2.visible = false;
    barrierList.push(wall2);
  }
  if(whichGround == 1)
  {
    var wall1 = createSprite(200, 200);
    wall1.setAnimation("barrierWall");
    wall1.rotation = 45;
    wall1.visible = false;
    barrierList.push(wall1);
    
    var wall2 = createSprite(200, 200);
    wall2.setAnimation("barrierWall");
    wall2.rotation = -45;
    wall2.visible = false;
    barrierList.push(wall2);
  }
  if(whichGround == 2)
  {
    var wall1 = createSprite(200, 200);
    wall1.setAnimation("barrierWall");
    wall1.visible = false;
    barrierList.push(wall1);
  }
  if(whichGround == 3)
  {
    var wall1 = createSprite(200, 200);
    wall1.setAnimation("barrierWall");
    wall1.rotation = 45;
    wall1.visible = false;
    barrierList.push(wall1);
    
    var block1 = createSprite(100, 200);
    block1.setAnimation("barrierBlock");
    block1.visible = false;
    barrierList.push(block1);
    
    var block2 = createSprite(300, 200);
    block2.setAnimation("barrierBlock");
    block2.visible = false;
    barrierList.push(block2);
  }
  if(whichGround == 4)
  {
    var wall1 = createSprite(200, 200);
    wall1.setAnimation("barrierWall");
    wall1.rotation = 45;
    wall1.visible = false;
    wall1.rotationSpeed = 1;
    barrierList.push(wall1);
    
    var wall2 = createSprite(200, 200);
    wall2.setAnimation("barrierWall");
    wall2.rotation = -45;
    wall2.visible = false;
    wall2.rotationSpeed = 1;
    barrierList.push(wall2);
  }
  if(whichGround == 5)
  {
    var wall1 = createSprite(200, 200);
    wall1.setAnimation("barrierWallShort");
    wall1.visible = false;
    barrierList.push(wall1);
    
    var wall2 = createSprite(200, 200);
    wall2.setAnimation("barrierWallShort");
    wall2.rotation = 90;
    wall2.visible = false;
    barrierList.push(wall2);
  }
  if(whichGround == 6)
  {
    var wall1 = createSprite(135, 100);
    wall1.setAnimation("barrierWallShort");
    wall1.rotation = 90;
    wall1.visible = false;
    barrierList.push(wall1);
    
    var wall2 = createSprite(265, 100);
    wall2.setAnimation("barrierWallShort");
    wall2.rotation = 90;
    wall2.visible = false;
    barrierList.push(wall2);
    
    var wall3 = createSprite(135, 300);
    wall3.setAnimation("barrierWallShort");
    wall3.rotation = 90;
    wall3.visible = false;
    barrierList.push(wall3);
    
    var wall4 = createSprite(265, 300);
    wall4.setAnimation("barrierWallShort");
    wall4.rotation = 90;
    wall4.visible = false;
    barrierList.push(wall4);
    
    var wall5 = createSprite(100, 200);
    wall5.setAnimation("barrierWall");
    wall5.visible = false;
    barrierList.push(wall5);
    
    var wall6 = createSprite(300, 200);
    wall6.setAnimation("barrierWall");
    wall6.visible = false;
    barrierList.push(wall6);
  }
  for(var changeDepth = 0; changeDepth < barrierList.length; changeDepth++)
  {
    barrierList[changeDepth].depth = 1;
  }
}

function createPlayers() // creates the players
{
  p1Image.setAnimation("playerTank");
  p1Image.pause();
  p1Image.setFrame(player1CurrentChoosen);
  p2Image.setAnimation("playerTank");
  p2Image.pause();
  p2Image.setFrame(player2CurrentChoosen);
  p2Image.rotation = 180;
}

function hideGameScreen(hide) // hides the game screen sprites
{
  for(var index = 0; index < gameScreenList.length; index ++)
  {
    gameScreenList[index].visible = hide;
  }
  
  for(var p1Bullet = 0; p1Bullet < p1AmmoImage.length; p1Bullet++)
  {
    p1AmmoImage[p1Bullet].visible = hide;
  }
  
  for(var p2Bullet = 0; p2Bullet < p2AmmoImage.length; p2Bullet++)
  {
    p2AmmoImage[p2Bullet].visible = hide;
  }
  
  for(var barrierIndex = 0; barrierIndex < barrierList.length; barrierIndex++)
  {
    barrierList[barrierIndex].visible = hide;
  }
  
  for(var healthIndex1 = 0; healthIndex1 < p1HealthImage.length; healthIndex1++)
  {
    p1HealthImage[healthIndex1].visible = hide;
  }
  
  for(var healthIndex2 = 0; healthIndex2 < p2HealthImage.length; healthIndex2++)
  {
    p2HealthImage[healthIndex2].visible = hide;
  }
  p1MegaLaser.visible = false;
  p2MegaLaser.visible = false;
  clear(toxicCloudList);
}

                // play game functions

// player control functions
function controls() // main function for play game stage
{
  if(p1CanControl == true)
  {
    p1Controls();
  }
  p1Image.x = p1TankBase.x;
  p1Image.y = p1TankBase.y;
  p1Image.rotation = p1TankBase.rotation;
  if(p2CanControl == true)
  {
    p2Controls();
  }
  p2Image.x = p2TankBase.x;
  p2Image.y = p2TankBase.y;
  p2Image.rotation = p2TankBase.rotation;
}

function p1Controls() // controls for player 1
{
  if(keyDown("w"))
  {
    p1TankBase.setSpeedAndDirection(player1Tank[1] - 2, p1TankBase.rotation);
  }
  else
  {
    p1TankBase.velocityX = 0;
    p1TankBase.velocityY = 0;
  }
  if(keyDown("s"))
  {
    p1TankBase.setSpeedAndDirection(-1 * (player1Tank[1] - 2), p1TankBase.rotation);
  }
  if(keyDown("a"))
  {
    p1TankBase.rotation -= player1Tank[1];
  }
  if(keyDown("d"))
  {
    p1TankBase.rotation += player1Tank[1];
  }
  if(keyWentDown("space") && p1CurrentAmmo > 0 && p1Reloading == false)
  {
    shoot(p1TankBase.rotation, p1TankBase.x, p1TankBase.y, player1Tank[1] * 1.2, player1Tank[2], player1Tank[0], "p1");
    p1CurrentAmmo --;
  }
  if(keyWentDown("r") && p1CurrentAmmo != player1Tank[4])
  {
    reload("p1");
  }
  if(keyWentDown("e"))
  {
    doAblities("p1", player1Tank, p1DamageBonus, p1TankBase, p1CurrentHealth);
  }
}

function p2Controls() // controls for player 2
{
  if(keyDown("up"))
  {
    p2TankBase.setSpeedAndDirection((player2Tank[1] - 2), p2TankBase.rotation);
  }
  else
  {
    p2TankBase.velocityX = 0;
    p2TankBase.velocityY = 0;
  }
  if(keyDown("down"))
  {
    p2TankBase.setSpeedAndDirection(-1 * (player2Tank[1] - 2), p2TankBase.rotation);
  }
  if(keyDown("left"))
  {
    p2TankBase.rotation -= player2Tank[1];
  }
  if(keyDown("right"))
  {
    p2TankBase.rotation += player2Tank[1];
  }
  if(keyWentDown("enter") && p2CurrentAmmo > 0)
  {
    shoot(p2TankBase.rotation, p2TankBase.x, p2TankBase.y, player2Tank[1] * 1.2, player2Tank[2], player2Tank[0], "p2");
    p2CurrentAmmo --;
  }
  if(keyWentDown("shift") && p2CurrentAmmo != player2Tank[4])
  {
    reload("p2");
  }
  if(keyWentDown("l"))
  {
    doAblities("p2", player2Tank, p2DamageBonus, p2TankBase, p2CurrentHealth);
  }
}

function reload(player) // reloads the players ammo
{
  if(player == "p1")
  {
    p1Reloading = true;
    var p1Reload = createSprite(60, 385);
    p1Reload.setAnimation("reloading");
    setTimeout(function()
    {
      p1Reloading = false;
      p1CurrentAmmo = player1Tank[4];
      p1Reload.destroy();
    }, p1ReloadTime * 1000);
  }
  else
  {
    p2Reloading = true;
    var p2Reload = createSprite(340, 385);
    p2Reload.setAnimation("reloading");
    setTimeout(function()
    {
      p2Reloading = false;
      p2CurrentAmmo = player2Tank[4];
      p2Reload.destroy();
    }, p2ReloadTime * 1000);
  }
}

function resetChar()
{
  p1TankBase.x = 37;
  p1TankBase.y = 200;
  p2TankBase.x = 363;
  p2TankBase.y = 200;
  
  p1TankBase.velocityY = 0;
  p1TankBase.velocityX = 0;
  p2TankBase.velocityY = 0;
  p2TankBase.velocityX = 0;
  
  p1Image.x = p1TankBase.x;
  p1Image.y = p1TankBase.y;
  p2Image.x = p2TankBase.x;
  p2Image.y = p2TankBase.y;
  
  p1Image.rotation = 0;
  p2Image.rotation = 180;
  
  p1TankBase.rotation = 0;
  p2TankBase.rotation = 180;
  
  p1DamageBonus = 0;
  p2DamageBonus = 0;
  
  clear(p1laserFollowerList);
  clear(p1laserLeaderList);
  clear(p2laserFollowerList);
  clear(p2laserLeaderList);
}

// player helper functions

function createHealth() // creates the health sprites for each player
{
  clear(p1HealthImage);
  clear(p2HealthImage);
  var x = 20;
  for(var p1Health = 0; p1Health < player1Tank[3]; p1Health++)
  {
    var healthImage = createSprite(x, 20);
    healthImage.setAnimation("health");
    healthImage.pause();
    healthImage.setFrame(2);
    healthImage.depth = 6;
    p1HealthImage.push(healthImage);
    x += 18;
  }
  x = 380;
  for(var p2Health = 0; p2Health < player2Tank[3]; p2Health++)
  {
    var healthImage2 = createSprite(x, 20);
    healthImage2.setAnimation("health2");
    healthImage2.pause();
    healthImage2.setFrame(2);
    healthImage2.depth = 6;
    p2HealthImage.push(healthImage2);
    x -= 18;
  }
}

function updateHealth(pCurrentHealth, playerTank, pHealthImage) // updates the health sprite animation to show the amount of health the player has left
{
  var upto = pCurrentHealth;
  var halfHealth = false;
  if(pCurrentHealth % 2 == 0.5 || pCurrentHealth % 2 == 1.5)
  {
    upto -= 0.5;
    halfHealth = true;
  }
  for(var index = 0; index < playerTank[3]; index ++)
  {
    if(index >= upto)
    {
      pHealthImage[index].setFrame(0);
    }
    else
    {
      pHealthImage[index].setFrame(2);
    }
  }
  if(halfHealth == true)
  {
    pHealthImage[upto].setFrame(1);
  }
  if(p1CurrentHealth <= 0)
  {
    deathScreen("p1");
  }
  if(p2CurrentHealth <= 0)
  {
    deathScreen("p2");
  }
}

function deathScreen(player) // death screen for both players
{
  stage = "showing death screen";
  hideGameScreen(false);
  if(player == "p1")
  {
    p2WinScreen.visible = true;
    p2Wins += 0.5;
  }
  else
  {
    p1WinScreen.visible = true;
    p1Wins += 0.5;
  }
  clear(powerUpList);
  clear(bulletList);
  setTimeout(function()
  {
    if(matchesToBePlayed != 1)
    {
      stage = "match end";
      p2WinScreen.visible = false;
      p1WinScreen.visible = false;
    }
    else
    {
      if(p1Wins + p2Wins == matchesToBePlayed || p1Wins + p2Wins >= matchesToBePlayed) // bug, called twice, idk why
      {
        stage == "end game";
      }
    }
  },2000);
}

// bullet functions

function bulletDetection() // collisions for bullets and lasers
{
  for(var index = 0; index < bulletList.length; index++)
  {
    bulletList[index].rotation = bulletList[index].getDirection();
    if(bulletList[index].lifetime == 0)
    {
      bulletList[index].destroy();
    }
    if(bulletList[index].isTouching(p1TankBase))
    {
      hitPlayer("p1", bulletList[index]);
      bulletList[index].destroy();
    }
    if(bulletList[index].isTouching(p2TankBase))
    {
      hitPlayer("p2", bulletList[index]);
      bulletList[index].destroy();
    }
  }
  for(var laserIndex1 = 0; laserIndex1 < p1laserFollowerList.length; laserIndex1++)
  {
    if(p1laserFollowerList[laserIndex1].isTouching(p2TankBase) && p2Invicible == false)
    {
      p2CurrentHealth -= 3.5;
      p2Invicible = true;
      setTimeout(function()
      {
        p2Invicible = false;
      }, 1500);
    }
  }
  for(var laserIndex2 = 0; laserIndex2 < p2laserFollowerList.length; laserIndex2++)
  {
    if(p2laserFollowerList[laserIndex2].isTouching(p1TankBase) && p1Invicible == false)
    {
      p1CurrentHealth -= 3.5;
      p1Invicible = true;
      setTimeout(function()
      {
        p1Invicible = false;
      }, 1500);
    }
  }
  if(p2TankBase.isTouching(p1MegaLaser) == true && p2Invicible == false && p1MegaLaser.visible == true)
  {
    p2Invicible = true;
    p2CurrentHealth -= 4;
    setTimeout(function()
    {
      p2Invicible = false;
    }, 1000);
  }
  if(p1TankBase.isTouching(p2MegaLaser) == true && p1Invicible == false && p2MegaLaser.visible == true)
  {
    p1Invicible = true;
    p1CurrentHealth -= 4;
    setTimeout(function()
    {
      p1Invicible = false;
    }, 1000);
  }
}

function shoot(direction, x1, y1, speed, strength, bulletType, player) // shooting for player 1 and 2
{
  if(bulletType != "Laser")
  {
    var bullet = createSprite(x1, y1);
    bullet.depth = 9;
    if(bulletType == "Strong")
    {
      bullet.setAnimation("strongBullet");
      bullet.setSpeedAndDirection(7, direction);
      if(player == "p1")
      {
        if(p1DamageBonus == -1)
        {
          bullet.setSpeedAndDirection(10, direction);
        }
      }
      if(player == "p2")
      {
        if(p2DamageBonus == -1)
        {
          bullet.setSpeedAndDirection(10, direction);
        }
      }
      bullet.rotation = direction;
      bullet.x += bullet.velocityX * (speed/1.1);
      bullet.y += bullet.velocityY * (speed/1.1);
    }
    else
    {
      bullet.setAnimation("bullet");
      bullet.setCollider("circle");
      if(bulletType == "Speedy")
      {
        bullet.setSpeedAndDirection(8, direction);
        bullet.x += bullet.velocityX * (speed/3.5);
        bullet.y += bullet.velocityY * (speed/3.5);
      }
      else
      {
        bullet.setSpeedAndDirection(7.5, direction);
        bullet.x += bullet.velocityX * (speed/2.5);
        bullet.y += bullet.velocityY * (speed/2.5);
      }
    }
    bullet.lifetime = 150;
    bulletList.push(bullet);
  }
  else
  {
    if(player == "p1")
    {
      createLeaderLaser(direction, x1, y1, "p1");
    }
    else
    {
      createLeaderLaser(direction, x1, y1, "p2");
    }
  }
}

function hitPlayer(player, bullet) // outputs the amount of damage that should be done to a player
{
  var damageDone = 0;
  if(bullet.getSpeed() > 6.8 && bullet.getSpeed() < 7.2)
  {
    console.log("player hit");
    damageDone = 5;
  }
  if(bullet.getSpeed() > 7.3 && bullet.getSpeed() < 7.7)
  {
    console.log("player hit");  
    damageDone = 3;
  }
  if(bullet.getSpeed() > 7.8 && bullet.getSpeed() < 8.2)
  {
    console.log("player hit");  
    damageDone = 1.5;
  }
  if(bullet.getSpeed() > 9.8 && bullet.getSpeed() < 10.2)
  {
    console.log("player hit");
    damageDone = 8;
    explode(bullet.x, bullet.y);
  }
  if(bullet.getSpeed() > 14.8 && bullet.getSpeed() < 15.2)
  {
    console.log("player hit");
    damageDone = 3;
  }
  if(player == "p1")
  {  
    p1CurrentHealth -= damageDone + p2DamageBonus;
  }
  else
  {
    p2CurrentHealth -= damageDone + p1DamageBonus;
  }
  console.log(damageDone + " damage done because the bullet is going at " + bullet.getSpeed() + " speed.");
}

// bullet helper functions

function createLeaderLaser(direction, x1, y1, player) // creates the bullet, which the laser sprite follows.
{
  var laserLeader = createSprite(x1, y1);
  laserLeader.setAnimation("bullet");
  laserLeader.setSpeedAndDirection(9, direction);
  laserLeader.lifetime = 60;
  laserLeader.scale = 0.3;
  if(player == "p1")
  {
    p1laserLeaderList.push(laserLeader);
  }
  else
  {
    p2laserLeaderList.push(laserLeader);
  }
}

function createFollowerLaser(direction, x1, y1, player) // creates the laser which "follows" the lead bullet
{
  var laserFollower = createSprite(x1, y1);
  laserFollower.setAnimation("laserImage");
  laserFollower.rotation = direction;
  laserFollower.lifetime = 75;
  laserFollower.depth = -1;
  if(player == "p1")
  {
    p1laserFollowerList.push(laserFollower);
  }
  else
  {
    p2laserFollowerList.push(laserFollower); 
  }
}

function updateLaser(plaserLeaderList, plaserFollowerList, player) // plaserrrrrrrrrrrrrrrrr
{
  for(var leaderIndex = 0; leaderIndex < plaserLeaderList.length; leaderIndex++)
  {
    plaserLeaderList[leaderIndex].bounceOff(edges);
    plaserLeaderList[leaderIndex].rotation = plaserLeaderList[leaderIndex].getDirection();
    plaserLeaderList[leaderIndex].depth = -2;
    if(plaserLeaderList[leaderIndex].lifetime == 1)
    {
      plaserLeaderList[leaderIndex].destroy();
    }
    if(plaserLeaderList[leaderIndex].lifetime % 2 == 0)
    {
      createFollowerLaser(plaserLeaderList[leaderIndex].rotation, plaserLeaderList[leaderIndex].x, plaserLeaderList[leaderIndex].y, player);
    }
    for(var barrierIndex = 0; barrierIndex < barrierList.length; barrierIndex++)
    {
      plaserLeaderList[leaderIndex].bounceOff(barrierList[barrierIndex]);
    }
  }
  for(var followerIndex = 0; followerIndex < plaserFollowerList.length; followerIndex++)
  {
    if(plaserFollowerList[followerIndex].lifetime <= 3)
    {
      plaserFollowerList.splice(plaserFollowerList.indexOf(plaserFollowerList[followerIndex]), 1);
    }
  }
}

function createAmmo() // creates the ammo sprites for both players
{
  clear(p1AmmoImage);
  clear(p2AmmoImage);
  var x = 15;
  var y = 385;
  for(var p1Ammo = 0; p1Ammo < player1Tank[4]; p1Ammo++)
  {
    var ammoImage = createSprite(x, y);
    ammoImage.setAnimation("p1Bullets");
    ammoImage.pause();
    ammoImage.setFrame(1);
    ammoImage.depth = 7;
    p1AmmoImage.push(ammoImage);
    
    y -= 10;
  }
  
  x = 385;
  y = 385;
  for(var p2Ammo = 0; p2Ammo < player2Tank[4]; p2Ammo++)
  {
    var ammoImage2 = createSprite(x, y);
    ammoImage2.setAnimation("p2Bullets");
    ammoImage2.pause();
    ammoImage2.setFrame(1);
    ammoImage2.depth = 7;
    p2AmmoImage.push(ammoImage2);
    y -= 10;
  }
}

function updateAmmo() // updates the images of the bullet sprites
{
   for(var p1Ammo = 0; p1Ammo < player1Tank[4]; p1Ammo++)
   {
     if(p1Ammo >= p1CurrentAmmo)
     {
       p1AmmoImage[p1Ammo].setFrame(0);
     }
     else
     {
       p1AmmoImage[p1Ammo].setFrame(1);
     }
   }
   for(var p2Ammo = 0; p2Ammo < player2Tank[4]; p2Ammo++)
   {
     if(p2Ammo >= p2CurrentAmmo)
     {
       p2AmmoImage[p2Ammo].setFrame(0); // empty
     }
     else
     {
       p2AmmoImage[p2Ammo].setFrame(1);
     }
   }
}

// powerup functions

function genPowerUps()
{
  if(randomNumber(1, 90) == 25 && powerUpList.length < 5)
  {
    var powerUp = createSprite(randomNumber(20, 380), randomNumber(20, 380));
    powerUp.setAnimation("powerUps");
    powerUp.pause();
    var i = randomNumber(0, 3);
    powerUp.setFrame(i);
    powerUp.depth = i + 10;
    var isInWall = true;
    while(isInWall == true)
    {
      var index = 0;
      for(var barrierIndex = 0; barrierIndex < barrierList.length; barrierIndex++)
      {
        if(powerUp.isTouching(barrierList[barrierIndex]))
        {
          index ++;
        }
      }
      if(index == 0)
      {
        isInWall = false;
      }
      else
      {
        powerUp.x = randomNumber(20, 380);
        powerUp.y = randomNumber(20, 380);
      }
    }
    powerUpList.push(powerUp);
  }
}

function testPowerUps(pTankBase, pCurrentHealth, playerTank, pDamageBonus, pCurrentAmmo, player)
{
  for(var powerUpIndex = 0; powerUpIndex < powerUpList.length; powerUpIndex++)
  {
    if(pTankBase.isTouching(powerUpList[powerUpIndex]))
    {
      if(powerUpList[powerUpIndex].depth == 10)
      {
        if(pCurrentHealth != playerTank[3])
        {
          if(player == "p1")
          {
            p1CurrentHealth++;
          }
          else
          {
            p2CurrentHealth++;
          }
        }
      }
      if(powerUpList[powerUpIndex].depth == 11)
      {
        playerTank[1]++;
      }
      if(powerUpList[powerUpIndex].depth == 12)
      {
          if(player == "p1")
          {
            p1DamageBonus++;
          }
          else
          {
            p2DamageBonus++;
          }
      }
      if(powerUpList[powerUpIndex].depth == 13)
      {
        if(player == "p1")
        {
          p1CurrentAmmo = playerTank[4];
        }
        else          
        {
          p1CurrentAmmo = playerTank[4];             
        }
      }
      powerUpList[powerUpIndex].destroy();
      powerUpList.splice(powerUpList.indexOf(powerUpList[powerUpIndex]), 1);
      
    }
  }
}

// special ablities

function doAblities(player, playerTank, pDamageBonus, pTankBase, pCurrentHealth)
{
  if(playerTank[0] == "Laser" && removeAmmo(4, player) == true)
  {
    laserSpecial(player, pTankBase);
  }
  if(playerTank[0] == "Strong" && removeAmmo(2, player) == true)
  {
    strongSpecial(player, pDamageBonus);
  }
  if(playerTank[0] == "Speedy" && removeAmmo(3, player) == true)
  {
    speedySpecial(player, pTankBase);
  }
  if(playerTank[0] == "Normal" && removeAmmo(4, player) == true && pCurrentHealth != playerTank[3])
  {
    normalSpecial(player);
  }
}

function normalSpecial(player) // insta regens all health
{
  if(player == "p1")
  {
    p1CurrentHealth = player1Tank[3];
  }
  else
  {
    p2CurrentHealth = player2Tank[3];
  }
}

function speedySpecial(player, pTankBase) // dashes
{
  pTankBase.setSpeedAndDirection(3, pTankBase.rotation);
  pTankBase.x += pTankBase.velocityX * 20;
  pTankBase.y += pTankBase.velocityY * 20;
  if(pTankBase.isTouching(edgeImage) == false)
  {
    pTankBase.x -= pTankBase.velocityX * 20;
    pTankBase.y -= pTankBase.velocityY * 20;
  }
}

function strongSpecial(player, pDamageBonus) // high damage bullet, explodes into shards
{
  var oldDamageBonus = pDamageBonus;
  
  if(player == "p1" && p1DamageBonus != -1)
  {
    p1DamageBonus = -1;
    setTimeout(function()
    {
      p1DamageBonus = oldDamageBonus;
    }, 5000);
  }
  if(player == "p2" && p2DamageBonus != -1)
  {
    p2DamageBonus = -1;
    setTimeout(function()
    {
      p2DamageBonus = oldDamageBonus;
    }, 5000);
  }
}

function laserSpecial(player, pTankBase)
{
  if(player == "p1")
  {
    p1MegaLaser.depth = 50;
    p1MegaLaser.setAnimation("laserWideP1");
    p1MegaLaser.x = pTankBase.x;
    p1MegaLaser.y = pTankBase.y;
    p1MegaLaser.rotation = p1TankBase.rotation;
    p1CanControl = false;
    p1TankBase.velocityY = 0;
    p1TankBase.velocityX = 0;
    var index = 0;
    var windUpSprite = createSprite(p1TankBase.x, p1TankBase.y);
    windUpSprite.rotation = p1TankBase.rotation;
    windUpSprite.setAnimation("laserOpening");
    windUpSprite.pause();
    var windUp = setInterval(function()
    {
      windUpSprite.nextFrame();
      index++;
      if(index == 6)
      {
        clearInterval(windUp);
        p1MegaLaser.visible = true;
        setTimeout(function()
        {
          p1MegaLaser.visible = false;
          p1CanControl = true;
          windUpSprite.destroy();
        }, 2000);
      }
    }, 200);
  }
  else
  {
    p2MegaLaser.depth = 50;
    p2MegaLaser.visible = false;
    p2MegaLaser.setAnimation("laserWideP2");
    p2MegaLaser.x = pTankBase.x;
    p2MegaLaser.y = pTankBase.y;
    p2MegaLaser.rotation = p2TankBase.rotation;
    p2CanControl = false;
    p2TankBase.velocityY = 0;
    p2TankBase.velocityX = 0;
    var index2 = 0;
    var windUpSprite2 = createSprite(p2TankBase.x, p2TankBase.y);
    windUpSprite2.rotation = p2TankBase.rotation;
    windUpSprite2.setAnimation("laserOpening");
    windUpSprite2.pause();
    var windUp2 = setInterval(function()
    {
      windUpSprite2.nextFrame();
      index2++;
      if(index2 == 6)
      {
        clearInterval(windUp2);
        p2MegaLaser.visible = true;
        setTimeout(function()
        {
          p2MegaLaser.visible = false;
          p2CanControl = true;
          windUpSprite2.destroy();
        }, 2000);
      }
    }, 200);

  }
}

// special ablities helper functions

function explode(x, y)
{
  for(var i = 0; i < 8; i++)
  {
    var shard = createSprite(x, y);
    shard.setSpeedAndDirection(15, i * 45);
    shard.setAnimation("shard");
    bulletList.push(shard);
    shard.lifetime = 5;
  }
}

function removeAmmo(amount, player)
{
  if(player == "p1")
  {
    p1CurrentAmmo -= amount;
    if(p1CurrentAmmo < 0)
    {
      p1CurrentAmmo += amount;
      return false;
    }
    else
    {
      return true;
    }
  }
  else
  {
    p2CurrentAmmo -= amount;
    if(p2CurrentAmmo < 0)
    {
      p2CurrentAmmo += amount;
      return false;
    }
    else
    {
      return true;
    }
  }
}

// toxic cloud function

function createToxic()
{
  if(inGameTimer.lifetime == 1)
  {
    inGameTimer.lifetime = -1;
    var toxic1 = createSprite(200, 0); // top
    toxic1.setAnimation("purpleLaser");
    toxic1.rotation = 90;
    var toxic2 = createSprite(0, 200); // left
    toxic2.setAnimation("purpleLaser");
    var toxic3 = createSprite(400, 200); // right
    toxic3.setAnimation("purpleLaser");
    toxic3.rotation = 180;
    var toxic4 = createSprite(200, 400); // bottom
    toxic4.setAnimation("purpleLaser");
    toxic4.rotation = -90;
    toxicCloudList.push(toxic1, toxic2, toxic3, toxic4);
    updateToxic();
    toxic1.depth = 5;
    toxic2.depth = 5;
    toxic3.depth = 5;
    toxic4.depth = 5;
  }
}

function updateToxic()
{
  for(var index = 0; index < toxicCloudList.length; index++)
  {
    toxicCloudList[index].setSpeedAndDirection(0.2, toxicCloudList[index].rotation);
  }
}

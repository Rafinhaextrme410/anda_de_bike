var Jump = 0;
var Lives = 3;
var Player = createSprite(170, 200);
Player.setAnimation("Player_right");
Player.scale = 0.001;
Player.setCollider("Rectangle");
//Parkour x=940 y=-100
//End of parkour x=200 y=-1290
//Player x=170 y= 200
Player.height = 50;
Player.debug = false;
Player.scale = 0.5999;
var Lava = createSprite(800, 800);
Lava.setAnimation("Lava");
Lava.width = 1000000;
var Belowlava = createSprite(800, 1200);
Belowlava.setAnimation("Below_lava");
Belowlava.width = 1000000;
Belowlava.height = 800;
var Platform1 = createSprite(200, 200);
Platform1.setAnimation("Platform_1");
var Platform2 = createSprite(350, 300);
Platform2.setAnimation("Platform_2");
var Platform3 = createSprite(500, 400);
Platform3.setAnimation("Platform_3");
var Platform4 = createSprite(650, 500);
var Platform5 = createSprite(800, 600);
Platform5.setAnimation("Platform_5");
var Platform6 = createSprite(1100, 700);
Platform6.setAnimation("Platform_6");
Platform6.width = 500;
var Projectile1 = createSprite(1333, 675);
Projectile1.setAnimation("Projectile_1");
var Projectile2 = createSprite(1083, 675);
Platform4.setAnimation("Platform_4");
Projectile2.setAnimation("Projectile_2");
var Stop = createSprite(850, 690);
Stop.setAnimation("Stop");
var Platform7 = createSprite(1475, 600);
Platform7.setAnimation("Platform_7");
Platform7.width = 150;
var Platform8 = createSprite(1750, 650);
Platform8.setAnimation("Platform_8");
Platform8.width = 250;
Platform8.height = 300;
var Platform9 = createSprite(2090, 500);
Platform9.setAnimation("Platform_9");
Platform9.width = 350;
Platform9.rotation = -10;
var Platform10 = createSprite(2050, 380);
Platform10.setAnimation("Platform_10");
Platform10.width = 300;
Platform10.rotation = 10;
var Platform11 = createSprite(1750, 370);
Platform11.setAnimation("Platform_11");
Platform11.width = 250;
var Platform12 = createSprite(1600, 346);
Platform12.setAnimation("Platform_12");
Platform12.width = 600;
var Platform13 = createSprite(1375, 246);
Platform13.setAnimation("Platform_13");
var Platform14 = createSprite(1525, 146);
Platform14.setAnimation("Platform_14");
var Platform15 = createSprite(1375, 46);
Platform15.setAnimation("Platform_15");
var Platform16 = createSprite(1525, -54);
Platform16.setAnimation("Platform_16");
var Platform17 = createSprite(1375, -154);
Platform17.setAnimation("Platform_17");
var Platform18 = createSprite(1525, -254);
Platform18.setAnimation("Platform_18");
var Platform19 = createSprite(1600, 508);
Platform19.setAnimation("Platform_19");
Platform19.debug = false;
var Platform20 = createSprite(1240, -354);
Platform20.setAnimation("Platform_20");
Platform20.width = 200;
var Platform21 = createSprite(940, -100);
Platform21.setAnimation("Platform_21");
Platform21.width = 400;
var Platform22 = createSprite(640, -200);
Platform22.setAnimation("Platform_22");
var Platform23 = createSprite(480, -320);
Platform23.setAnimation("Platform_23");
var Platform24 = createSprite(673, -460);
Platform24.setAnimation("Platform_24");
var Platform25 = createSprite(536, -613);
Platform25.setAnimation("Platform_25");
var Platform26 = createSprite(443, -759);
Platform26.setAnimation("Platform_26");
var Platform27 = createSprite(296, -867);
Platform27.setAnimation("Platform_27");
var Platform28 = createSprite(75, -991);
Platform28.setAnimation("Platform_28");
var Platform29 = createSprite(300, -1124);
Platform29.setAnimation("Platform_29");
var Platform30 = createSprite(199, -1286);
Platform30.setAnimation("Platform_30");
var Platform31 = createSprite(350, -1350);
Platform31.setAnimation("Platform_31");
var Platform32 = createSprite(500, -1450);
Platform32.setAnimation("Platform_32");
var Platform33 = createSprite(650, -1550);
Platform33.setAnimation("Platform_33");
var Portal = createSprite(1423, -1746);
Portal.setAnimation("Portal");
Portal.rotation = 90;
Portal.scale = 0.5;
var Stop1 = createSprite(305, -1357);
Stop1.setAnimation("Stop_1");
var Projectile4 = createSprite(350, -1350);
Projectile4.setAnimation("Projectile_4");
Projectile4.bounciness=0.2;
var Projectile5 = createSprite(515, -1450);
Projectile5.setAnimation("Projectile_5");
Projectile5.bounciness = 0.2;
var Projectile6 = createSprite(900, 9000);
Projectile6.setAnimation("Projectile_6");
Projectile6.bounciness = 0.2;
var Platform34 = createSprite(1023, -1649);
Platform34.setAnimation("Platform_34");
Platform34.width = 600;
var Knock1 = createSprite(1023, -1690);
Knock1.setAnimation("Knock_1");
var Knock2 = createSprite(1027, -1710);
Knock2.setAnimation("Knock_2");
var Platform35 = createSprite(1423, -1649);
Platform35.setAnimation("Platform_35");
var Platform36 = createSprite(1900, -1649);
Platform36.setAnimation("Platform_36");
var Riser = createSprite(1450, 346);
Riser.setAnimation("Riser");
Riser.width = 250;
var Wall1 = createSprite(1275, 4);
Wall1.setAnimation("Wall_1");
Wall1.width = 125;
Wall1.height = 700;
var Wall2 = createSprite(1625, -96);
Wall2.setAnimation("Wall_2");
Wall2.width = 125;
Wall2.height = 600;
var Spinner1 = createSprite(1650, 451);
Spinner1.setAnimation("Spinner_1");
var Spinner2 = createSprite(1750, 451);
Spinner2.setAnimation("Spinner_2");
var Spinner3 = createSprite(1850, 451);
Spinner3.setAnimation("Spinner_3");
var Spinners = createGroup();
Spinners.add(Spinner1);
Spinners.add(Spinner2);
Spinners.add(Spinner3);
var Projectiles = createGroup();
Projectiles.add(Projectile1);
Projectiles.add(Projectile2);
Projectiles.add(Projectile4);
Projectiles.add(Projectile5);
Projectiles.add(Projectile6);
Projectile1.scale = 1.45;
Projectile2.scale = 1.45;
var Knocks = createGroup();
Knocks.add(Knock1);
Knocks.add(Knock2);
var Bounceo = createGroup();
Bounceo.add(Projectile4);
Bounceo.add(Projectile5);
Bounceo.add(Projectile6);
var Walls = createGroup();
Walls.add(Wall1);
Walls.add(Wall2);
var Platforms = createGroup();
Platforms.add(Platform1);
Platforms.add(Platform2);
Platforms.add(Platform3);
Platforms.add(Platform4);
Platforms.add(Platform5);
Platforms.add(Platform6);
Platforms.add(Platform7);
Platforms.add(Platform8);
Platforms.add(Platform9);
Platforms.add(Platform10);
Platforms.add(Platform11);
Platforms.add(Platform12);
Platforms.add(Platform13);
Platforms.add(Platform14);
Platforms.add(Platform14);
Platforms.add(Platform15);
Platforms.add(Platform16);
Platforms.add(Platform17);
Platforms.add(Platform18);
Platforms.add(Platform19);
Platforms.add(Platform20);
Platforms.add(Platform21);
Platforms.add(Platform22);
Platforms.add(Platform23);
Platforms.add(Platform24);
Platforms.add(Platform25);
Platforms.add(Platform26);
Platforms.add(Platform27);
Platforms.add(Platform28);
Platforms.add(Platform29);
Platforms.add(Platform30);
Platforms.add(Platform30);
Platforms.add(Platform31);
Platforms.add(Platform32);
Platforms.add(Platform33);
Platforms.add(Platform34);
Platforms.add(Platform35);
Platforms.height = 20;
var Lazers = createGroup();
var Blocks = createGroup();
function draw() {
  World.frameRate = 30;
  function Kill() {
    Riser.y = 346;
    Player.x = 200;
    Player.y = 200;
    Lives = Lives - 1;
  }
  if (Platform35.isTouching(Platform36)) {
    Platform35.bounceOff(Platform36);
  }
  if (Platform35.isTouching(Platform34)) {
    Platform35.bounceOff(Platform34);
  }
  if (keyDown("Down")) {
    Player.velocityY = 23;
    playSound("ytmp3free.cc_naruto-shippuden-opening-3-blue-bird-hd-youtubemp3free.org.mp3", false);
  }
  if (keyDown("P")) {
    var Block = createSprite(Player.x, Player.y+25);
    Block.setAnimation("Knock_1");
    Block.lifetime = 10;
    Blocks.add(Block);
    Platforms.add(Block);
  }
  if (Player.isTouching(Portal)) {
    var You_Win = createSprite(Portal.x, Portal.y);
    You_Win.setAnimation("You_Win");
  }
  Blocks.velocityY = Blocks.velocityY+1;
  if (keyWentDown("5")) {
    var Lazer = createSprite(Player.x+15, Player.y+-25);
    Lazer.setAnimation("Platform_15");
    Lazers.add(Lazer);
    Lazer.velocityX = 19;
    Lazer.lifetime = 10;
    Lazer.scale = 1;
    Lazer.rotationSpeed = 36;
  }
  if (Lazers.isTouching(Platforms)) {
    Lazers.displace(Platforms);
  }
  if (Lazers.isTouching(Projectiles)) {
    Projectiles.bounciness = 1;
  }
  if (Lazers.isTouching(Walls)) {
    Walls.bounceOff(Lazers);
  }
  Projectile4.velocityX = -2.9;
  Projectile5.velocityX = -2.9;
  Projectile6.velocityX = -2.9;
  Spinner1.rotation = Spinner1.rotation + -4.5;
  Spinner2.rotation=Spinner2.rotation+-4.5;
  Spinner3.rotation = Spinner3.rotation + -4.5;
  if (Player.isTouching(Spinners)) {
    Kill();
  }
  if (Player.isTouching(Projectiles)) {
    Kill();
  }
  if (Bounceo.isTouching(Platforms)) {
    Bounceo.bounceOff(Platforms);
  }
  if (Player.isTouching(Platform13)) {
    Riser.velocityY = -3.8;
  }
  if (Riser.isTouching(Platform20)) {
    Riser.velocityY=0;
    Riser.y = 346;
  }
  if (Projectile1.isTouching(Stop)) {
    Projectile1.x = 1333;
  }
  if (Projectile2.isTouching(Stop)) {
    Projectile2.x=1333;
  }
  if (Projectile4.isTouching(Stop1)) {
    Projectile4.x = 615;
    Projectile4.y = -1550;
  }
  if (Projectile5.isTouching(Stop1)) {
    Projectile5.x = 615;
    Projectile5.y = -1550;
  }
  if (Projectile6.isTouching(Stop1)) {
    Projectile6.x = 615;
    Projectile6.y = -1550;
  }
  if (Player.isTouching(Riser)) {
    Kill();
  }
  if (Bounceo.isTouching(Platforms)) {
    Bounceo.bounceOff(Platforms);
  }
  Projectile1.velocityX = -5;
  Projectile2.velocityX = -5;
  Projectile4.velocityY = Projectile4.velocityY + 1;
  Projectile5.velocityY = Projectile5.velocityY + 1;
  Projectile6.velocityY = Projectile6.velocityY + 1;
  Knock1.velocityY = Knock1.velocityY + 1;
  Knock2.velocityY = Knock2.velocityY+1;
  if (Knock1.isTouching(Platforms)) {
    Knock1.collide(Platforms);
  }
  if (Knock2.isTouching(Platforms)) {
    Knock2.collide(Platforms);
  }
  if (Knock1.isTouching(Knock2)) {
    Knock1.displace(Knock2);
  }
  if (Knock2.isTouching(Knock1)) {
    Knock2.displace(Knock1);
  }
  if (Player.isTouching(Blocks)) {
    Player.displace(Blocks);
  }
  if (Player.isTouching(Knock2)) {
    Player.displace(Knock2);
  }
  if (keyDown("Right")) {
    if (Player.velocityX<6) {
      Player.setAnimation("Player_running_right");
      Player.velocityX=Player.velocityX+1;
    }
  } else {
    if (Player.velocityX > 0) {
      Player.setAnimation("Player_right");
      Player.velocityX=Player.velocityX-1;
    }
  }
  if (keyDown("Left")) {
    if (Player.velocityX>-6) {
      Player.setAnimation("Player_running_left");
      Player.velocityX=Player.velocityX-1;
    }
  } else {
    if (Player.velocityX<0) {
      Player.setAnimation("Player_left");
      Player.velocityX=Player.velocityX+1;
    }
  }
  if (keyDown("up")) {
    if (Jump == 0) {
      Player.velocityY = -17;
      Jump = 5;
      playSound("sound://category_human/character_kimberly_yes_1.mp3", false);
    }
    if (Jump=5) {
      Player.setFrame(1);
    }
  }
  if (Player.isTouching(Platforms)) {
    Jump = 0;
  }
  if (Player.isTouching(Lava)) {
    Kill();
  }
  if (Player.isTouching(Walls)) {
    Kill();
  }
  if (Lives == 0) {
    var Gameover = createSprite(Player.x, Player.y);
    Gameover.setAnimation("Gameover");
    Gameover.scale = 1.25;
    Player.destroy();
  }
  if (Player.velocityY < 17) {
    Player.velocityY = Player.velocityY + 1;
  }
  background("Turquoise");
  fill("White");
  textSize(25);
  text("Lives left:", 110, 100);
  text(Lives, 218, 100);
  camera.x = Player.x;
  camera.y = Player.y;
  Player.bounciness = 0;
  if (Player.isTouching(Platforms)) {
    Player.bounceOff(Platforms);
  }
  drawSprites();
}

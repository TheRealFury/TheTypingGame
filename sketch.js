var score = 0;
var time = 30;
var frames = 0;
let letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var charVal = 0;
var typed = 1;
let key;

function setup() {
  createCanvas(1300,600);
  start = createButton('Start');
  start.position(650,500);
}

function draw() {
  background(0);
  if(time == 30){
    if(start.mousePressed(function(){
      time = 29;
      start.position(1000,1000);
    }));
  }
  if(30 > time > 0){
    if(typed == 1){
      charVal = random(letters);
      typed = 0;
    }
    textSize(40);
    text('Score - ' + score,window.width/2-125,550);
    text('Seconds Left - ' + time,800, 50);
    textSize(200);
    text(charVal,window.width/2-100,window.height/2);
    frames += 1;
    if(frames % 60 == 0){
      frames = 0;
      time -= 1;
    }
  }
  else if(time == 0){
    textSize(80);
    text('Your score was - ' + score,50,window.height/2);
  }
}

function keyPressed(){
  key = String.fromCharCode(keyCode);
  if(charVal == key){
    score += 1;
    typed = 1;
  }
}
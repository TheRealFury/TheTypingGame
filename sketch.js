// Variable to store the score obtained during the game.
var score = 0;

// Variable to store the time elapsed during the game.
var time = 30;

// Variable to take count of frames elapsed during the game.
var frames = 0;

// Array to store the characters that are can be asked.
let letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

// Variable to temporarily store the character that is asked.
var charVal = 0;

// Variable to store the state of whether or not a key has been pressed.
var typed = 1;

// Variable to store the value of the character entered by the means of the keyboard.
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
      start.remove();
    }));
  }
  if(30 > time && time > 0){
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
  if(time == 0){
    charVal = '';
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
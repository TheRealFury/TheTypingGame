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
  //Create Canvas for the game elements.
  createCanvas(1300,600);
  //Creating a button to initiate the start of the game.
  start = createButton('Start');
  start.position(650,500);
}

function draw() {
  background(0);
  //At the start of the game, the time does not progress to xero, and thus it is set at 30. First IF statement to detect if the game is at it's starting state.
  if(time == 30){
    //IF statement to detect if button is pressed.
    if(start.mousePressed(function(){
      //Time does not elapse, so time is manually set to 29, which will trigger next IF statement where game will start and time will pass as normal.
      time = 29;
      //Button that initiates the game to be removed.
      start.remove();
    }));
  }
  //As soon as the 'time' value gets below 30, main game starts.
  if(30 > time && time > 0){
    //IF statement to check if the correct key is pressed in accordance with the character on the screen.
    if(typed == 1){
      //New character is choosen from array of chooseable ones.
      charVal = random(letters);
      //Value of variable is reset so that next time a correct key is pressed, it is detected.
      typed = 0;
    }
    //Next few lines change the size of the text to display different things at different places and in different sizes.
    textSize(40);
    text('Score - ' + score,window.width/2-125,550);
    text('Seconds Left - ' + time,800, 50);
    textSize(200);
    text(charVal,window.width/2-100,window.height/2);
    //Frame value is incremented.
    frames += 1;
    //IF statement to check if frames value hits 60.
    if(frames == 60){
      //Frames value is reset.
      frames = 0;
      //Time value is decreased by one.
      time -= 1;
    }
  }
  //As soon as the time hits zero, the game ends. IF statement to check that follows.
  if(time == 0){
    //Requested character is reset so that after the game ends, players can no longer gain points by pressing the last character over and over again.
    charVal = '';
    //Text size is changed and score is diplayed.
    textSize(80);
    text('Your score was - ' + score,50,window.height/2);
  }
}

//This is an inbuilt function in JS that detects whenever a key is pressed, irrespective of the type. It also returns the keyCode of the key pressed.
function keyPressed(){
  //Character is taken in accordance with keyCode.
  key = String.fromCharCode(keyCode);
  //IF statement to check if the correct key has been pressed.
  if(charVal == key){
    //Score is incremented.
    score += 1;
    //Variable is altered to show that correct value has been entered.
    typed = 1;
  }
}
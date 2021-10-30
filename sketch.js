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

// Variable to store the state of whether or not the correct key has been pressed.
var typed = 1;

// Variable to store the value of the character entered by the means of the keyboard.
let key;

function setup() {
  //Creating a canvas for the game.
  createCanvas(1300,600);

  //Creating a button and assinging it a position. This will later help in initiating the game.
  start = createButton('Start');
  start.position(650,500);
}

function draw() {
  //Setting background colour.
  background(0);

  //From here onwards, everything is governed by time. When the game starts, the time variable is set to 30, and does not progress. Here's when the game setup starts and the Main Screen appears.
  
  //At this point, the game has just started, and since the time variable will not change before the 'start' button is pressed, the main screen remains as it is.
  if(time == 30){
    //This function checks if the 'start' button has been pressed and starts the game if it has.
    checkStart();
  }

  //The game has now started, and now time will progress to zero, and now letters will appear on the screen, and the game's main programming will take hold.
  if(30 > time && time > 0){
    //This function will check if the correct key is pressed.
    checkNchange();

    //This function displays the various elements of the game, like the letter required, score, and time.
    display();

    //This function takes care of the way the time progresses.
    frames();
  }

  if(time == 0){
    //This function displays the score that was achieved at the end of the game, when the time runs out.
    displayScore();
  }
}

function checkStart(){
  //The IF statement detects of the 'start' button has been pressed.
  if(start.mousePressed(function(){
    //The time is then set to '29', because then the 'draw' function will shift into the part where time start to automatically decrease, and the game starts.
    time = 29;
    //The 'start' button is then sent out of the screen, where it cannot be accessed or seen.
    start.position(1000,1000);
  }));
}

function checkNchange(){
  //The IF statement checks if the correct key has been pressed according to the character on the screen.
  if(typed == 1){
    //A random letter is choosen from an array called 'letters'.
    charVal = random(letters);
    //The variable is reset so that the next time a correct key is pressed, it is detected.
    typed = 0;
  }
}

function display(){
  //Sets the text size to '40' which is only slightly bigger than the traditional size.
  textSize(40);
  //Prints the score and time on different sections of the screen.
  text('Score - ' + score,window.width/2-125,550);
  text('Seconds Left - ' + time,800, 50);
  //Sets the text size to '200' which is quite big and eye-catching.
  textSize(200);
  //Prints the character on the screen.
  text(charVal,window.width/2-100,window.height/2);
}

function frames(){
  //Increases the value of 'frames' variable by 1.
  frames += 1;

  //Once the value is equal to 60, the time is decreased by 1 and the 'frames' variable is reset.
  if(frames == 60){
    frames = 0;
    time -= 1;
  }
}

function displayScore(){
  //The text size is set to '80' which is more than enough to be visible at the end.
  textSize(80);
  // Dislays the score when the time ends.
  text('Your score was - ' + score,50,window.height/2);
}

//This is an inbuilt function inside JS (I think, correct me if I am wrong), which autmatically detects if a key has been pressed, regardless of the type.
function keyPressed(){
  //The function returns a variable called 'keyCode' which contains the Character Code of the key pressed. The next line converts that into a normal character and stores it in a variable.
  key = String.fromCharCode(keyCode);
  //The IF statement checks if the key pressed corresponds to the letter on the screen.
  if(charVal == key){
    //The score is increased by 1.
    score += 1;
    //The 'typed' variable's value is changed indicating that the correct character has been entered.
    typed = 1;
  }
}
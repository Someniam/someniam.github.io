var img;
var initials ='pr'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 250; // off white background
var lastscreenshot=61; // last screenshot never taken

function preload() {
// preload() runs once, it may make you wait
//  img = loadImage('cat.jpg');  // cat.jpg needs to be next to this .js file
// you can link to an image on your github account
concertstage = loadImage('https://someniam.github.io/diyphotoshop/concertstage.jpg');
  img = loadImage('https://someniam.github.io/diyphotoshop/waffle.png');
  wafer = loadImage('https://someniam.github.io/diyphotoshop/wafer.png')
  watermelon = loadImage('https://someniam.github.io/diyphotoshop/watermelon.png')
  marshmallow = loadImage('https://someniam.github.io/diyphotoshop/marshmallow.png')
  waffle = loadImage('https://someniam.github.io/diyphotoshop/waffle.png')
  macaron = loadImage('https://someniam.github.io/diyphotoshop/macaron.png')
  blueberryjelly = loadImage('https://someniam.github.io/diyphotoshop/blueberryjelly.png')
  raisin = loadImage('https://someniam.github.io/diyphotoshop/raisin.png')
  leeks = loadImage('https://someniam.github.io/diyphotoshop/leeks.png')
  bananas = loadImage('https://someniam.github.io/diyphotoshop/bananas.png')
  orange = loadImage('https://someniam.github.io/diyphotoshop/orange.png')
  mikulogo = loadImage('https://someniam.github.io/diyphotoshop/mikulogo.png')
}

function setup() {
createCanvas(1100, 750);  // canvas size
background(concertstage);   // use our background screen color

}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

 if (toolChoice == '1' ) {  // first tool
   
    img = loadImage('https://someniam.github.io/diyphotoshop/wafer.png')
    image(wafer, mouseX, mouseY, 40, 40);
    
  } else if (toolChoice == '2') { // second tool

    img = loadImage('https://someniam.github.io/diyphotoshop/watermelon.png')
    image(watermelon, mouseX, mouseY, 60, 60);
  } else if (toolChoice == '3') { // third tool

    img = loadImage('https://someniam.github.io/diyphotoshop/marshmallow.png')
    image(marshmallow, mouseX, mouseY, 50, 50);
  } else if (toolChoice == ' ') {
    
    img = loadImage('https://someniam.github.io/diyphotoshop/waffle.png')
    image(waffle, mouseX, mouseY, 50, 50);
  } else if (toolChoice == '4') {

    img = loadImage('https://someniam.github.io/diyphotoshop/macaron.png')
    image(macaron, mouseX, mouseY, 40, 40);
  } else if (key == '5') { // this tool calls a function
    img = loadImage('https://someniam.github.io/diyphotoshop/blueberryjelly.png')
    image(blueberryjelly, mouseX, mouseY, 40, 40);
    
 // make testbox do something!
 //   line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '6') {

    img = loadImage('https://someniam.github.io/diyphotoshop/raisin.png')
    image(raisin, mouseX, mouseY, 40, 40);
  } else if (toolChoice == '7') {

    img = loadImage('https://someniam.github.io/diyphotoshop/leeks.png')
    image(leeks, mouseX, mouseY, 50, 50);
  } else if (toolChoice == '8') {

    img = loadImage('https://someniam.github.io/diyphotoshop/bananas.png')
    image(bananas, mouseX, mouseY, 50, 50);
  } else if (toolChoice == '9') {

    img = loadImage('https://someniam.github.io/diyphotoshop/orange.png')
    image(orange, mouseX, mouseY, 50, 50);
  } else if (toolChoice == '0') {
    
    img = loadImage('https://someniam.github.io/diyphotoshop/mikulogo.png')
    image(mikulogo, mouseX, mouseY, 150, 42);
  } else if (toolChoice == 'g' || toolChoice == 'G') { // g places the image we pre-loaded
    image(img, mouseX, mouseY);
    
  }
 }
 
function testbox(r, g, b) {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;
  fill(r, g, b);
  rect(x-50, y-50, 100, 100);

}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(concertstage); // set the screen back to the background color
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
    key="";
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
  
}

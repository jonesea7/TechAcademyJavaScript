window.alert("Hello World!"); //this creates an alert box at the top of the web page and prints what in the ()

document.write("Hello World!"); //this prints what is in the () on the webpage as text

var codingGreeting = "Hello World!"; //this is how to create a variable in jS
var codingGreeting = codingGreeting.fontcolor("orange"); //this is how you alter a previously created variable

document.write(codingGreeting); //this is how you print what's in a variable on the webpage

//alertBoxMessage would be more appropriate in the future
var createAlertBox = "Ahh, Real Monsters!" //var the name is misleading because it does not actually create an alert box
var createAlertBox = createAlertBox.fontcolor("purple"); //change the text to purple here

window.alert(createAlertBox); //this method actually creates an alert box

document.write("Whaddup tho\'"); //printing in JS

document.write("I just want to say "
+createAlertBox
+codingGreeting
+"-Me");; //concatenating a string to two established var

document.write("I just want to say "
+"I love you and "
+"I mean it from the bottom of my heart."); //concat three str

var concatenatedString = "This string " + "is now one." //concat inside a var to be used as a unified str later
var concatenatedString = concatenatedString.fontcolor("orange"); //change font color

document.write(concatenatedString); //print created str from above var

var eddysFavoriteGames = "Strategy RPG", //name multiple var in one "line"
    newGame = "Griftlands", 
    bestGame="Cultist Simulator", 
    nostalgiaGame="Final Fantasy Tactics"; //always end with a ; as proper syntax or the browser won't recognize everything else that follows.

var eddysFavoriteGames = eddysFavoriteGames.fontcolor("purple"); //call var in itself to change color

var bestGame = bestGame.fontcolor("orange");

document.write(bestGame); //print altered var

document.write(3 - 14); //prints the result of this expression to the webpage

function getBestGameName(){ //create a function name by first calling function method don't forget () after the name
    document.getElementsByClassName("button-event").innerHTML = //method with class name from connected HTML file . inner... method that alters the webpage
    document.write(bestGame); //function tells the browser to print this variable when the event happens
}

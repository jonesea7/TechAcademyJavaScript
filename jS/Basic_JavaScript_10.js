

// function getUserFood() {
//     var userFood = document.getElementById("user-food").value;
//     function teaseUser() {
//         while (userFood != /pizza/i) {
//             document.getElementById('user-message').innerHTML = "Nope."
//         }
//         if (userFood == /pizza/i) {
//             document.getElementById('user-message').innerHTML = "There you go. It's always " + userFood + "!";
//         }
//     }
//     teaseUser();
// }

var isPizza = true;
var counter = 0;

//get the user's input from html
function judgeUserFood() {

//place user input in a var container
    var userFood = document.getElementById('user-food').value;
    document.getElementById('user-message').innerHTML = "You chose " + userFood +".";

//compare user input to pizza
    if (userFood == "pizza") {
        document.getElementById('user-message2').innerHTML = "There you go. It's always " + userFood + "!" 
    }
    else {
        document.getElementById('user-message2').innerHTML = "Nope. Try again."  ;
    }

//if not send back that the answer is in correct
//
}

//start countdown function that is called when submit button is pushed
function countDown() {

// establish a counter variable starting a 3
    var counter = 1000;

    // establish variable to place a message?
    var userCounterMessage;

//while counter is greater than zero
    while (counter > 0) {
        document.getElementById('user-message').innerHTML = "...loading";
        console.log(counter);
        counter--;
    }
    judgeUserFood();
    
}

//collect the string from the user
function collectStr() {

    //save str to a var
    var userStr = document.getElementById('user-str').value;


    //create a new var that holds the str.length
    var userStrLength = userStr.length;

//send the length back to the user
    document.getElementById('user-str-count').innerHTML = userStr + " has " + userStrLength + " characters.";
}



var foodArray = ["pizza", "chocolate", "smoothies", "sushi", "whiskey"];
var listContainer = "";
var loopCounter;

function startListLoop() {
    for (loopCounter = 0; (loopCounter < foodArray.length); loopCounter++) {
        listContainer += foodArray[loopCounter] + "<br>";
    }
    document.getElementById('loop-list-output').innerHTML = listContainer;
}

//gather user array in function isolateIndexInUserArray()
function isolateIndexInUserArray() {

    //establish var basket to catch an array []
    var nastyFoodBasket = [];

    //collect user array from 'user-array' and store in var basket, had to add more inputs from user
    nastyFoodBasket[0] = document.getElementById('user-index0').value;
    nastyFoodBasket[1] = document.getElementById('user-index1').value;
    nastyFoodBasket[2] = document.getElementById('user-index2').value;

    //print the index one item to the document at 'isolated-index-output'
    document.getElementById('isolated-index-output').innerHTML = "So, " + "'" + nastyFoodBasket[1] + "'" + " is your second worst or second best worst food?";
}

//take user input into functin returnConstantMessage()
//establish greatestFood as constant
//place user input in var container
//create conditional if pizza positive response else
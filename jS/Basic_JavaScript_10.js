

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
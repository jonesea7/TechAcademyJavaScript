/*Objectives:
    create global variable
    create local variable
    break a function and observe it with console.log()
    */

var favoriteGame = "Slay the Spire";

function nameFavGame() {
    var favoriteGame = ''; //this will bring undefined in console.log() on web page
    document.getElementById('title-destination').innerHTML = favoriteGame;
}

function checkForNight() {
    var estDate = new Date();
    var timeOfDay;
    timeOfDay = document.getElementById('time-of-day-message').innerHTML = estDate.getHours();
        if (timeOfDay > 19) {
            document.getElementById('time-of-day-message').innerHTML = "Night time is the right time to game.";
        }
        else {
            document.getElementById('time-of-day-message').innerHTML = "It's still day. Business before pleasure.";
        }
}

function printRockReadiness() {
    var userAnswer;
    userAnswer = document.getElementById('user-input').value;
    if (userAnswer=="Yes") {
        document.getElementById('ready-message').innerHTML = "Alexa, play Tenacious D!";
    }
    else {
        document.getElementById('ready-message').innerHTML = 
            "Dude, you must be hungry. Get some grub and you will be ready to jam.";
    }
}

//create a function that gives the user a message as to what time of day it is
function replyWithTimeOfDayMessage() {
//create a variable that will capture the hour
    var time = new Date().getHours();
//create a var that will be the message to the user
    var replyToUser;
    //begin a loop
    //set parameters for the morining using info from time variable 
    if (time>=0 && time<12) {
        //establish message and add it to the replytouser var
        replyToUser = "Good morning, Sunshine.";
    }
    else if (time>=12 && time<6) {
        replyToUser = "Good afternoon.";
    }
    else {
        replyToUser = "Good evening.";
    }
    //send reply to user's message container in html
    document.getElementById("user-message").innerHTML = replyToUser;

}

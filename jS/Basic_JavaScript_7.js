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
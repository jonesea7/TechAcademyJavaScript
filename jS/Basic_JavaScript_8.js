//set up the function that is linked to button press on html that will slice string
function sliceString() {

//set up var that will establish the string
    var sampleStr = "All work and no play makes Johnny a dull boy.";

//set up var that will use slice() to extract portion of the string we want
    var slicedStr = sampleStr.slice( 27, 33);
//return slice string to html and concat a message with it for fun
    document.getElementById("sliced-str-container").innerHTML = "Here's " + slicedStr;
}

//set up function
function superSizeStr() {

//var that will catch user input
    var userInput = document.getElementById('user-str').value;

//assign var that will take user input and run thru toUpperCase method
    var upperStr = userInput.toUpperCase();

//put new user-str back into html
    document.getElementById('user-str-upper').innerHTML = upperStr;
}

//create function to extract a str
function extractStr() {

//est a var that will capture the str from user
    var userSentence = document.getElementById('user-sentence').value;

//establish a var that will search the user str for a the letter
    var searchedStr = userSentence.search('e');

//create a conditional statement that will give the user a message that their str has the letter
    //since the searched str returns a number we will create an if statement looking for a number in a range
    if (searchedStr >= 0) {
        document.getElementById('extracted-str-message').innerHTML = "There's the 'e' I was looking for. It's position is " + searchedStr + '.';
    } 
    else {
        document.getElementById('extracted-str-message').innerHTML = "How did you write a sentence without an 'e'!?!"
    }
//else write how did you make a sentence without the letter e?

}

//create stringTheInteger()
function stringTheInteger() {

//assign a var to collect the user-int
    var userInt = document.getElementById('user-int').value;

//assign a var to the user-int being operated on by the toString()
    var intStr = userInt.toString();

//assign new strInt to a concat-message
    document.getElementById('concat-message').innerHTML = "Now " + intStr + " is a string."
}

//to prove it's a string we will search it a label its position
    //create searchIntStr()
function searchIntStr() {
    
    //collect user-int
    var userInt = document.getElementById('user-int').value;

    //toString() the user-int and collect in var
    var intStr = userInt.toString();

    //created the concat-message here
    concatMessage = "Now " + intStr + " is a string."

    //take the strInt and create a third var with the search()
    var strPosition = concatMessage.search(intStr);

    //post a message with the new str and it's position to str-pos-message
    document.getElementById('str-pos-message').innerHTML = intStr + " is in index position " + strPosition;
}

// function fixNumberLength() {
//     var userFloater = document.getElementById('user-floater').value;
//     var fixedFloater = userFloater.toFixed(4);
//     document.getElementById('fixed-number-container').innerHTML = "The new fixed number is " + fixedFloater + ".";
// }

function fixNumberLength() {
    var userFloater = 0.5544115184145;
    var fixedFloater = userFloater.toFixed(4);
    document.getElementById('fixed-number-container').innerHTML = "The new fixed number is " + fixedFloater + ".";
}

function setPrecision() {
    var userFloater = 0.5544115184145;
    var fixedFloater = userFloater.toPrecision(7);
    document.getElementById('precision-outcome').innerHTML = "The more precise number is " + fixedFloater + ".";
}

function getPrimValue() {
    var str = "Hello from JavaScript.";
    var primValue = str.valueOf();
    document.getElementById('print-prim-value').innerHTML = primValue;
}

function concatVerb() {
    var userVerb = document.getElementById('user-verb').value;
    var myStr = "Or was it the dancing potatoes that liked to ";
    var userMessage = myStr.concat(userVerb);
    document.getElementById('concat-verb-message').innerHTML = userMessage + ' the small tigers?';
}
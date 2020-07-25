function addTwoIntegers (int1, int2) {
    return int1 + int2;
}

document.getElementById("demo").innerHTML = addTwoIntegers(3526,5654);

function concat(){
    var sentence = "I am learning ";
    sentence += "a lot from this course.";
    document.getElementById("concat").innerHTML = sentence;
}

function anotherConcat() {
    var myString = "This is meant ";
    myString += "to practice what I am learning.";
    document.getElementById("concat-two").innerHTML = myString;
}

document.write("This is good to review too.");
/*Create a function that returns the result of an 
addition operation to the paragraph element with the id “Math”. 
Save the file.*/

function addTwoIntegers(int1,int2) {
    return int1 + int2;
    
}

document.getElementById("Math").innerHTML = addTwoIntegers(86,86);

function subtractFunction() {
    var subtractionExpression = 5 - 2;
    document.getElementById("Math").innerHTML = "Five minus two equals " + subtractionExpression;
}

function multiplyFunction() {
    var product = 12 * 12;
    document.getElementById("Math3").innerHTML = "The product is " + product;
}

function divideTwoIntegers() {
    var dividedIntegers = 6 / 3;
    document.getElementById("Math2").innerHTML = "The result is " + dividedIntegers;
}

function solveMultiOperatorEquation() {
    var multiOperatedEquation = (184 + 5)/(6*4);
    document.getElementById("Math4").innerHTML = "189 divided by 24 is: " + multiOperatedEquation;
}

function getModulus() {
    var modulatedExpression = 33 % 4;
    document.getElementById("Math5").innerHTML = "The modulus of 33/4 is: " + modulatedExpression;
}
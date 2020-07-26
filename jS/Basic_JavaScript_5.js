document.write(typeof "String");
document.write(typeof True);

function getNaN() {
    var notNumber = 0/0;
    document.getElementById("Test1").innerHTML = notNumber;
}

//get true out of isNaN operator

function identifyNotNumber() {
    document.getElementById("Test2").innerHTML = isNaN("hello");
}

//get false out of isNaN operator

function identifyNumber() {
    document.getElementById("Test3").innerHTML = isNaN(44);
}

//get infinity from the browser

document.write(3E444);

//get -infinity from the browser

document.write(-3E444);

document.write("three is greater than two?" + (3>2));


document.write("two is greater than three? " + (2>3));
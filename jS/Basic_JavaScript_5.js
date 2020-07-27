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

console.log(2+2);

console.log("Hello Console."); 

document.write("10" + 5);

document.write("ten" + 5);

document.write(10 + 5);

console.log(5<2);

console.log(4>(2+16));

document.write(10==11);
document.write(10==10);
document.write("10 is equal to ten?")
document.write("10 is equal to 10?" + 10==10);

document.write(10===10);

document.write("eleven"===11);

document.write('10'===10);

document.write(11===9);

function testBothTrueWithAnd() {
    var par1 = 10>5;
    var par2 = 4>54;
    document.getElementById("Test4").innerHTML = par1&&par2;
}

function testBothTrueWithAnd2() {
    var par1 = 5>2;
    var par2 = 10>2;
    document.getElementById("Test5").innerHTML = par1&&par2;
}



function testOrOperator() {
    var par1 = (10==10);
    var par2 = (5 > 2);
    document.getElementById("Test6").innerHTML = par1 || par2;
}



function testOrOperator2() {
    par1 = (4>5);
    par2 = (3>5);
    document.getElementById("Test7").innerHTML = par1 || par2;
}


/*
function testOrOperator(par1,par2) {
    var par1 = '';
    var par2 = '';
    document.getElementById("Test6").innerHTML = par1 || par2;
}
*/

function makeNot() {
    document.getElementById("Test8").innerHTML = !(20>5);
}

function makeNot2() {
    document.getElementById("Test9").innerHTML = !(5>20);
}
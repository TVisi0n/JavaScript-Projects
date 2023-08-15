function addition() { // all these functions are examples of using operators like +,-,%,/, etc.
    var add = 4 + 6;
    document.getElementById("math").innerHTML = "4 + 6 = " + add;
}

function subtraction () {
    var sub = 20 - 6;
    document.getElementById("subtract").innerHTML = "20 - 6 = " + sub;
}

function multiplication() {
    var multi = 4 * 8;
    document.getElementById("multiply").innerHTML = "4 * 8 = " + multi;
}

function division() {
    var div = 10 / 5;
    document.getElementById("divid").innerHTML = "10 / 5 = " + div;
}

function multi_math() {
    var math_op = 15 * 5 / 10 + 28 - 7;
    document.getElementById("multi_math").innerHTML = "Fifteen times five, divided by ten, plus twenty eight, subtract seven equals " + math_op
}

function remainder() {
    var rem = 26 % 7;
    document.getElementById("remainder").innerHTML = "47 divided by 8 has a remainder of " + rem;
}

function negation_operator() {
    var neg = 14;
    document.getElementById("negation").innerHTML = -neg;
}

var x = 7;
x++;
document.write("One above 7 is " + x); // Adds 1 to x

document.write("<br>"); // Line Break

var y = 7;
y--;
document.write("One below 7 is " + y); // Subtracts 1 from y

document.write("<br>"); // Line Break

document.write(Math.random() * 100) // Picks a random # between 0 and 100

document.write("<br>"); // Line Break

document.write(Math.round(8.9)); // Rounds the number given
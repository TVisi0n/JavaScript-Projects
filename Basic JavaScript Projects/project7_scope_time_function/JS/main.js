// Created my own funtions to show global and local variables
var X = 15;
function multiply() {
    document.write(X * 10 + "<br>");
}

function add() {
    var Y = 5;
    document.write(X + Y);
}
// Example of an if
function dateFunction() {
    if (new Date().getHours() < 18) {
        document.getElementById("date").innerHTML = "How are you this evening?";
    }
}

if (4 < 5) {
    console.log("4 is less than 5")
}

// Example of an if and else
function ageFunction() {
    age = document.getElementById("age").value;
    if (age <= 2002) {
        entrance = "You are old enough to enter!";
    }
    else {
        entrance = "You are not old enough to enter!";
    }
    document.getElementById("entrance_age").innerHTML = entrance;
}

// Example of an if, else, and else if
function time_function() {
    var time = new Date().getHours();
    var reply;
    if (time < 12 == time > 0) {
        reply = "It is morning time!";
    }
    else if (time >= 12 == time < 18) {
        reply = "It is afternoon.";
    }
    else {
        reply = "It is evening time.";
    }
    document.getElementById("time_of_day").innerHTML = reply;
}
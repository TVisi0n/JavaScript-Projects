var X = 15;
function multiply() {
    document.write(X * 10 + "<br>");
}

function add() {
    var Y = 5;
    document.write(X + Y);
}

function dateFunction() {
    if (new Date().getHours() < 18) {
        document.getElementById("date").innerHTML = "How are you this evening?";
    }
}

if (4 < 5) {
    console.log("4 is less than 5")
}

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
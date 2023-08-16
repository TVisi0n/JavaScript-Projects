// Doc.write Section
document.write(typeof "Hi");

document.write("<br>");

document.write("2064" + 49);

document.write("<br>");

document.write(2E310);

document.write("<br>");

document.write(-3E310);

document.write("<br>");

document.write(105 < 68);

document.write("<br>");

document.write(105 > 68);

document.write("<br>");

document.write(26 === 26);

document.write("<br>");

document.write(26 === 21);

document.write("<br>");

A = 5;
B = 5;
document.write(A === B);

document.write("<br>");

C = 5;
D = "Word";
document.write(C === D);

document.write("<br>");

E = 5;
F = "five";
document.write(E === F);

document.write("<br>");

G = 5;
H = "10";
document.write(G === H);

document.write("<br>");

document.write(6 > 3 && 38 > 24)

document.write("<br>");

document.write(3 > 6 && 38 > 24)

document.write("<br>");

document.write(3 > 6 || 38 > 24)

document.write("<br>");

document.write(3 > 6 || 24 > 38)

// Function Section
function myfunction() {
    document.getElementById("test").innerHTML = 0/0;
}

function myfunction2() {
    document.getElementById("test2").innerHTML = isNaN('Hello World');
}

function myfunction3() {
    document.getElementById("test3").innerHTML = isNaN(400);
}

function notFunction() {
    document.getElementById("not").innerHTML = !(25 > 15);
}

function notFunction2() {
    document.getElementById("not2").innerHTML = !(25 < 15);
}

// Console Log Section
console.log(10 * 6);

console.log(10 < 6);


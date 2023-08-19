var instruments = ["Trumpet", "Flute", "Piano", "Saxophone", "Triangle", "Guitar", "Bass"];
var content = "";
var Y;
function for_loop () {
    for (Y = 0; Y < instruments.length; Y++) {
        content += instruments[Y] + "<br>";
    } 
    document.getElementById("list_of_instruments").innerHTML = content;
}

function arrayFunction() {
    var fruits = [];
    fruits[0] = "apples";
    fruits[1] = "bananas";
    fruits[2] = "pears";
    fruits[3] = "watermelons";
    document.getElementById("array").innerHTML = "This is one of my favorite fruits, " + fruits[3] + "."
}

function constantFunction() {
    const carsAvaiable = {Brand: "Hyundai", Type: "Sedan", Color: "Blue"}
    carsAvaiable.Brand = "Ford"
    carsAvaiable.New_or_Used = "New"
    document.getElementById("constant").innerHTML = "We have a " + carsAvaiable.Brand + " avaiable, in the color " + carsAvaiable.Color + "." + "It's brand spanking " + carsAvaiable.New_or_Used + " as well!"
}

var A = 32;
document.write(A);
{
    let A = 54
    document.write("<br>" + A);
}
document.write("<br>" + A)

function aFunction() {
    return Math.PI;
}

document.getElementById("return").innerHTML = aFunction();

let vehicle = {
    make: "Ford",
    model: "Fusion",
    year: "2019",
    color: "Red",
    description: function() {
        return "The is a " + this.year + " " + this.color + " " + this.make + " " + this.model + "."
    }
};
document.getElementById("object").innerHTML = vehicle.description();

function myBreak() {
    let text = "";
    for (i = 0; i < 10; i++) {
        if (i === 3) { break; }
        text += "The number is " + i + "<br>";
    }
    document.getElementById("break").innerHTML = text;
}

function myContinue() {
    let text = "";
    for (i = 0; i < 10; i++) {
        if (i === 3) { continue; }
        text += "The number is " + i + "<br>";
    }
    document.getElementById("continue").innerHTML = text;
}
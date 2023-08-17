// Example of concatenating a sentence
function wholeSentence() {
    var part1 = "Hello World, ";
    var part2 = "My name is Tanner.";
    var part3 = " How are you today?";
    var everything = part1.concat(part2, part3);
    document.getElementById("sentence").innerHTML = everything
}
// Example of the slice method
function sliceMethod() {
    var sentence = "This is a sentence!";
    var section = sentence.slice(10,19);
    document.getElementById("slice").innerHTML = section;
}
// Touppercase method
function touppercase() {
    var sentence = "I want this sentence to be uppercase"
    var result = sentence.toUpperCase();
    document.getElementById("uppercase").innerHTML = result;
}
// Search Metod
function searchMethod() {
    var sentence = "I want this sentence to be searched";
    var result = sentence.search("want");
    document.getElementById("search").innerHTML = result;
}
// Precision Method
function precisionMethod() {
    var a = 15627.68723814;
    document.getElementById("precision").innerHTML = a.toPrecision(12);
}
// Fixed Method
function fixedMethod() {
    var a = 15.7584;
    document.getElementById("fixed").innerHTML = a.toFixed();
}
// Value Method
function valueMethod() {
    var a = "My name is Tanner!";
    document.getElementById("value").innerHTML = a.valueOf();
}
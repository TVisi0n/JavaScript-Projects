// Using ternary operators
function ride_function() {
    var height, can_ride;
    height = document.getElementById("height").value;
                            //  If true than say    If false than say 
    can_ride = (height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("ride").innerHTML = can_ride + " to ride.";
}

function ageFunction() {
    var age, vote_age;
    age = document.getElementById("age").value;
    vote_age = (age < 18) ? "You cannot":"You can";
    document.getElementById("vote").innerHTML = vote_age + " vote.";
}

// Using new keyword
function vehicle(make, model, year, color) {
    this.vehicle_make = make;
    this.vehicle_model = model;
    this.vehicle_year = year;
    this.vehicle_color = color;
}
var Jack = new vehicle("Dodge", "Viper", 2020, "Red")
var Emily = new vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("keywords_and_consturctors").innerHTML =
    "Erik drives a " + Erik.vehicle_color + "-colored " + Erik.vehicle_model + " manufactured in " + Erik.vehicle_year;
}

function fruit(taste, color, size) {
    this.fruit_taste = taste;
    this.fruit_color = color;
    this.fruit_size = size;
}
var apple = new fruit("sweet", "red", "small")
var watermelon = new fruit("sweet", "green", "large")
var green_grape = new fruit("tart", "green", "extra small")
function newFunction() {
    document.getElementById("new_and_this").innerHTML =
    "An apples taste is " + apple.fruit_taste + " and a watermelons size is " + watermelon.fruit_size + " and a green grapes colors is " + green_grape.fruit_color + "."
}

// Add one to number function
function countFunction() {
    document.getElementById("nestedFunction").innerHTML = Count()
    function Count() {
        var starting_point = 9;
        function plus_one() {starting_point += 1;}
        plus_one();
        return starting_point;
    }
}
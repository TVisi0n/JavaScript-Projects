function my_first_function() {
    var str = "This is the button text!";
    document.getElementById("button_text").innerHTML = str;
}

function myFunction() { // Creating a function and giving it's parameters
    var Concatenate = "This is an example of concatenating a sentence,"; // Created a variable and then concatenting it w/ the sentence below
    Concatenate += " I find these very interesting!";
    document.getElementById("concatenating").innerHTML = Concatenate; // Linking the function here in the JS to the HTML
}
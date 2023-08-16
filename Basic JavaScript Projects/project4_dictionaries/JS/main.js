function mydictionary() { // Created a dicitonary for fruits I used an apple for my var fruit
    var fruit = {
        Fruit: "Apple",
        Color: "Red",
        Type: "Red Delicious",
        Sound: "Crunch",
        Size: "Small"
    };
    delete fruit.Color; // This deletes the fruit color before it is called to the web page
    document.getElementById("dictionary").innerHTML = fruit.Color;
}
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
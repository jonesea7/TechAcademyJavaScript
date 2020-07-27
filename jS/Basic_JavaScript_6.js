function getHeightDetermineEligibility() {
    var height, canRide;
    height = document.getElementById('height').value;
    canRide = (height < 52) ? "You are too short":"You are tall enough";
    document.getElementById('ride').innerHTML = canRide + " to ride."

}

function determineVoterEligible() {
    var age, canVote;
    age = document.getElementById("age").value;
    canVote = (age < 18) ? "You are too young" : "Exercise democracy. You are eligible";
    document.getElementById("voter-result").innerHTML = canVote + " to vote."
}

function Vehicle(Make,Model,Year,Color) {
    this.vehicleMake = Make;
    this.vehicleModel = Model;
    this.vehicleYear = Year;
    this.vehicleColor = Color;
}

var Paris = new Vehicle("Chevy","Cobalt",2004,"Tan");
var Kennikki = new Vehicle("Hyundai","Sonata", 2008, "Dark-Blue");
var Eddy = new Vehicle("Hyundai", "Ioniq", 2017, "White");


//to this to truly work we'd do an if ownerName=== the Eddy vehicle then ownerName = Eddy.Vehicle? i dunno 
function identifyVehicleWithOwner() {
    var ownerName;
    ownerName = document.getElementById("owner-name").value;
    document.getElementById("owner-and-vehicle").innerHTML = ownerName + " owns the " + Eddy.vehicleColor + "-colored "
+ Eddy.vehicleMake; 
}
/*
html would like like this:

<p> Riders must be 52 centimeters to ride.</p>
<input id="Height" value="52"/>
<button onclick="Ride_Function()">Click here.</button>
<p id="Ride"></p>

*/


function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

//getHeightDetermineRideEligibiltyPrintResult()

function getHeightFromInput() {
    var Height;
    Height = document.getElementById("Height").value;
}

//Now for some OOP

function Vehicle(Make,Model,Year,Color) {
    this.vehicleMake = Make;
    this.vehicleModel = Model;
    this.vehicleYear = Year;
    this.vehicleColor = Color;
}

var Paris = new Vehicle("Chevy","Cobalt",2004,"Tan");
var Kennikki = new Vehicle("Hyundai","Sonata", 2008, "Dark-Blue");
var Eddy = new Vehicle("Hyundai", "Ioniq", 2017, "White");

function identifyVehicleWithOwner() {
    var ownerName;
    ownerName = document.getElementById("owner-name").value;
    document.getElementById("owner-and-vehicle").innerHTML = ownerName + " owns the " + ownerName.vehicleColor + "-colored "
    + ownerName.vehicleMake; 
}
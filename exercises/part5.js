"use strict";
exports.__esModule = true;
// Add your import statement here:
var SpaceLocation_1 = require("./SpaceLocation");
var kilometersToMars = 225000000;
var kilometersToTheMoon = 384400;
var Spacecraft = /** @class */ (function () {
    function Spacecraft(name, speedMph) {
        this.milesPerKilometer = 0.621;
        this.name = name;
        this.speedMph = speedMph;
    }
    Spacecraft.prototype.getDaysToLocation = function (kilometersAway) {
        var milesAway = kilometersAway * this.milesPerKilometer;
        var hours = milesAway / this.speedMph;
        return hours / 24;
    };
    // Add the printDaysToLocation function here.
    Spacecraft.prototype.printsDaysToLocation = function (location) {
        console.log(this.name + " will make it to " + location.name + " in " + this.getDaysToLocation(location.kilometersAway) + " days");
    };
    return Spacecraft;
}());
// Paste in the code from step 6 here:
var biggerShip = new Spacecraft("Big Bot 452", 17500);
var mars = new SpaceLocation_1.Spacelocation('Mars', kilometersToMars);
biggerShip.printsDaysToLocation(mars);

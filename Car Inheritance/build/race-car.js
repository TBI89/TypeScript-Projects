import Car from "./car.js";
class RaceCar extends Car {
    constructor(sn, manufacturer, color, engineVolume, maxSpeed, numberOfRaces) {
        super(sn, manufacturer, color, engineVolume);
        this.maxSpeed = maxSpeed;
        this.numberOfRaces = numberOfRaces;
    }
    displayProps() {
        super.displayProps();
        console.log("Max Speed: " + this.maxSpeed);
        console.log("Number of Races: " + this.numberOfRaces);
    }
}
export default RaceCar;

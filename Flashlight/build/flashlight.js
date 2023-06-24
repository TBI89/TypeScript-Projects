// New flashlight object
class Flashlight {
    // Initialize object properties:
    constructor(color, brightness, length, numberOfBatteries) {
        this.color = color;
        this.brightness = brightness;
        this.length = length;
        this.numberOfBatteries = numberOfBatteries;
    }
    // Display properties:
    displayProps() {
        console.log("Color: " + this.color);
        console.log("Brightness: " + this.brightness);
        console.log("Length: " + this.length);
        console.log("Number of batteries: " + this.numberOfBatteries);
    }
    // On Switch:
    isOn() {
        console.log("On");
    }
    // Off Switch:
    isOff() {
        console.log("Off");
    }
    // Change batteries:
    changeBatteries() {
        console.log("Change batteries");
    }
}
// Export and use in the main file:
export default Flashlight;

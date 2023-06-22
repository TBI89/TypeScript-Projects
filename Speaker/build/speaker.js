// New speaker object
class Speaker {
    // Initialize object properties:
    constructor(color, volume) {
        this.color = color;
        this.volume = volume;
    }
    // Display properties:
    displayProps() {
        console.log("Color: " + this.color);
        console.log("Volume: " + this.volume);
    }
    // On Switch:
    isOn() {
        console.log("On");
    }
    // Off Switch:
    isOff() {
        console.log("Off");
    }
    // Sound is on:
    soundIsOn() {
        console.log("Sound is on");
    }
}
// Export and use in the main file:
export default Speaker;

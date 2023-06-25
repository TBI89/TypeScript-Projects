import Instrument from "./instrument.js";
class GrandPiano extends Instrument {
    // Initiate the new member with the others:
    constructor(model, manufacturer, color, numberOfKeyboards, length) {
        super(model, manufacturer, color);
        this.numberOfKeyboards = numberOfKeyboards;
        this.length = length;
    }
    // Add the new member to the display function:
    displayProps() {
        super.displayProps();
        console.log("Number of Keyboards:" + this.numberOfKeyboards);
        console.log("Length:" + this.length);
    }
    // Function for the specific sound:
    makeSound() {
        console.log("Grand Piano sounds...");
    }
}
export default GrandPiano;

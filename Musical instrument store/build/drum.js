import Instrument from "./instrument.js";
class Drum extends Instrument {
    // Initiate the new member with the others:
    constructor(model, manufacturer, color, diameter) {
        super(model, manufacturer, color);
        this.diameter = diameter;
    }
    // Add the new member to the display function:
    displayProps() {
        super.displayProps();
        console.log("Diameter:" + this.diameter);
    }
    // Function for the specific sound:
    makeSound() {
        console.log("Drum sounds...");
    }
}
export default Drum;

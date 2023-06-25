import Instrument from "./instrument.js";
class Guitar extends Instrument {
    // Initiate the new member with the others:
    constructor(model, manufacturer, color, numberOfStrings) {
        super(model, manufacturer, color);
        this.numberOfStrings = numberOfStrings;
    }
    // Add the new member to the display function:
    displayProps() {
        super.displayProps();
        console.log("Number of Strings:" + this.numberOfStrings);
    }
    // Function for the specific sound:
    makeSound() {
        console.log("Guitar sounds...");
    }
}
export default Guitar;

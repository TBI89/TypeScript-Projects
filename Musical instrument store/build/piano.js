import Instrument from "./instrument.js";
class Piano extends Instrument {
    // Initiate the new member with the others:
    constructor(model, manufacturer, color, numberOfKeyboards) {
        super(model, manufacturer, color);
        this.numberOfKeyboards = numberOfKeyboards;
    }
    // Add the new member to the display function:
    displayProps() {
        super.displayProps();
        console.log("Number of Keyboards:" + this.numberOfKeyboards);
    }
    // Function for the specific sound:
    makeSound() {
        console.log("Piano sounds...");
    }
    // Tool interface:
    test() {
        console.log("Testing piano");
    }
    tune() {
        console.log("Tuning piano");
    }
}
export default Piano;

import Instrument from "./instrument.js";

class Drum extends Instrument {
  
    // New data member:
    public diameter: number;

    // Initiate the new member with the others:
    constructor(model: string, manufacturer: string, color: string, diameter: number) {
       super(model, manufacturer, color);
       this.diameter = diameter;
    }

    // Add the new member to the display function:
    public displayProps(): void {
        super.displayProps();
        console.log("Diameter:" + this.diameter);
    }

    // Function for the specific sound:
    makeSound(): void {
       console.log("Drum sounds...");
    }
    
}

export default Drum;
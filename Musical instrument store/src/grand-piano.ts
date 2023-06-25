import Instrument from "./instrument.js";

class GrandPiano extends Instrument {
  
    // New data member:
    public numberOfKeyboards: number;
    public length: number;

    // Initiate the new member with the others:
    constructor(model: string, manufacturer: string, color: string, numberOfKeyboards: number, length: number) {
       super(model, manufacturer, color);
       this.numberOfKeyboards = numberOfKeyboards;
       this.length = length;
    }

    // Add the new member to the display function:
    public displayProps(): void {
        super.displayProps();
        console.log("Number of Keyboards:" + this.numberOfKeyboards);
        console.log("Length:" + this.length);
    }

    // Function for the specific sound:
    makeSound(): void {
       console.log("Grand Piano sounds...");
    }
    
}

export default GrandPiano;
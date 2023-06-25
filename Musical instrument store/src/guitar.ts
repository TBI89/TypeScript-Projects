import Instrument from "./instrument.js";

class Guitar extends Instrument {
  
    // New data member:
    public numberOfStrings: number;

    // Initiate the new member with the others:
    constructor(model: string, manufacturer: string, color: string, numberOfStrings: number) {
       super(model, manufacturer, color);
       this.numberOfStrings = numberOfStrings;
    }

    // Add the new member to the display function:
    public displayProps(): void {
        super.displayProps();
        console.log("Number of Strings:" + this.numberOfStrings);
    }

    // Function for the specific sound:
    makeSound(): void {
       console.log("Guitar sounds...");
    }

}

export default Guitar;


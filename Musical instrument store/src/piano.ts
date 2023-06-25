import Instrument from "./instrument.js";
import Tool from "./tool.js";

class Piano extends Instrument implements Tool {
  
    // New data member:
    public numberOfKeyboards: number;

    // Initiate the new member with the others:
    constructor(model: string, manufacturer: string, color: string, numberOfKeyboards: number) {
       super(model, manufacturer, color);
       this.numberOfKeyboards = numberOfKeyboards;
    }

    // Add the new member to the display function:
    public displayProps(): void {
        super.displayProps();
        console.log("Number of Keyboards:" + this.numberOfKeyboards);
    }

    // Function for the specific sound:
    makeSound(): void {
       console.log("Piano sounds...");
    }

    // Tool interface:
    public test(): void {
        console.log("Testing piano");
        
    }
   public tune(): void {
        console.log("Tuning piano");
        
    }
}

export default Piano;
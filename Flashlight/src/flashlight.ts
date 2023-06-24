
// New flashlight object
class Flashlight {

    // Data members:
    public color: string;
    public brightness: number;
    public length: number;
    public numberOfBatteries: number;

    // Initialize object properties:
    public constructor(color: string, brightness: number, length: number, numberOfBatteries: number) {
        this.color = color;
        this.brightness = brightness;
        this.length = length;
        this.numberOfBatteries = numberOfBatteries;
    }

    // Display properties:
    public displayProps(): void {
        console.log("Color: " + this.color);
        console.log("Brightness: " + this.brightness);
        console.log("Length: " + this.length);
        console.log("Number of batteries: " + this.numberOfBatteries);  
    }

    // On Switch:
    public isOn(): void {
        console.log("On");
    }

    // Off Switch:
    public isOff(): void {
        console.log("Off");
    }

    // Change batteries:
    public changeBatteries(): void {
        console.log("Change batteries");
    }

}

// Export and use in the main file:
export default Flashlight;
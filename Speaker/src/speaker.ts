
// New speaker object
class Speaker {

    // Data members:
    public color: string;
    public volume: number;

    // Initialize object properties:
    public constructor(color: string, volume: number) {
        this.color = color;
        this.volume = volume;
    }

    // Display properties:
    public displayProps(): void {
        console.log("Color: " + this.color);
        console.log("Volume: " + this.volume); 
    }

    // On Switch:
    public isOn(): void {
        console.log("On");
    }

    // Off Switch:
    public isOff(): void {
        console.log("Off");
    }

    // Sound is on:
    public soundIsOn(): void {
        console.log("Sound is on");
    }

}

// Export and use in the main file:
export default Speaker;

// New car object (super class)
class Car {

    // Data members:
    public readonly sn: number;
    public manufacturer: string;
    public color: string;
    public engineVolume: number;

    // Initialize object properties:
    public constructor(sn: number, manufacturer: string, color: string, engineVolume: number) {
        this.sn = sn;
        this.manufacturer = manufacturer;
        this.color = color;
        this.engineVolume = engineVolume;
    }

    // Display properties:
    public displayProps(): void {
        console.log("Serial number: " + this.sn);
        console.log("Manufacturer: " + this.manufacturer);
        console.log("Color: " + this.color);
        console.log("Engine Volume: " + this.engineVolume);  
    }

}

// Export and use in the main file:
export default Car;
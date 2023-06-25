// New abstract (super) class to create variety of musical instruments:
abstract class Instrument {

    // Data members:
    public model: string;
    public manufacturer: string;
    public color: string;

    // Initializing the variables:
    constructor(model: string, manufacturer: string, color: string) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.color = color;
    }

    // Function to show the properties of the whole class:
    public displayProps(): void {
        console.log("Model: " + this.model);
        console.log("Manufacturer: " + this.manufacturer);
        console.log("Color: " + this.color);
    }

    // Abstract function for all the sounds that the instruments make:
    abstract makeSound(): void;
}

export default Instrument;
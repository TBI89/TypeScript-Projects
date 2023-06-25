// New abstract (super) class to create variety of musical instruments:
class Instrument {
    // Initializing the variables:
    constructor(model, manufacturer, color) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.color = color;
    }
    // Function to show the properties of the whole class:
    displayProps() {
        console.log("Model: " + this.model);
        console.log("Manufacturer: " + this.manufacturer);
        console.log("Color: " + this.color);
    }
}
export default Instrument;

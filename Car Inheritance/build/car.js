// New car object (super class)
class Car {
    // Initialize object properties:
    constructor(sn, manufacturer, color, engineVolume) {
        this.sn = sn;
        this.manufacturer = manufacturer;
        this.color = color;
        this.engineVolume = engineVolume;
    }
    // Display properties:
    displayProps() {
        console.log("Serial number: " + this.sn);
        console.log("Manufacturer: " + this.manufacturer);
        console.log("Color: " + this.color);
        console.log("Engine Volume: " + this.engineVolume);
    }
}
// Export and use in the main file:
export default Car;

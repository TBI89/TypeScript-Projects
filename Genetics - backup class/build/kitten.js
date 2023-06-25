class Kitten {
    // Initiate with constructor:
    constructor(name, age, sterilized) {
        this.name = name;
        this.age = age;
        this.sterilized = sterilized;
    }
    // Display the members properly (calling the backup display function):
    toString() {
        return `Kitten Name: ${this.name}\nAge: ${this.age}\nSterilized: ${this.sterilized}`;
    }
}
export default Kitten;

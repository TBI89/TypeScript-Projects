
class Kitten {

    // Members:
    public name: string;
    public age: number;
    public sterilized: boolean;

    // Initiate with constructor:
    constructor(name: string, age: number, sterilized: boolean) {
        this.name = name;
        this.age = age;
        this.sterilized = sterilized;
    }

    // Display the members properly (calling the backup display function):
    public toString(): string {
        return `Kitten Name: ${this.name}\nAge: ${this.age}\nSterilized: ${this.sterilized}`;
    }
}

export default Kitten;
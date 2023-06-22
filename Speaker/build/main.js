import Book from "./speaker.js";
// Creating 2 new hard-coded objects(speakers) and displaying there properties & status:
const bose = new Book("Black", 23);
bose.displayProps();
bose.isOn();
bose.soundIsOn();
console.log("-----------------");
const marley = new Book("Red", 0);
marley.displayProps();
marley.isOff();

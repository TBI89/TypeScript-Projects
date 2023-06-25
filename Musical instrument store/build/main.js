import Guitar from "./guitar.js";
import Drum from "./drum.js";
import Piano from "./piano.js";
import GrandPiano from "./grand-piano.js";
const jayTerser = new Guitar("JT-300M", "JayTerser", "Black", 9);
jayTerser.displayProps();
jayTerser.makeSound();
console.log("-----------------");
const jinbao = new Drum("JINBAO", "J1042", "Red", 69);
jinbao.displayProps();
jinbao.makeSound();
console.log("-----------------");
const ringway = new Piano("RingWay", "TB100", "White", 42);
ringway.displayProps();
ringway.makeSound();
ringway.test(); // Piano's interface: won't work on other classes (grand piano for example).
ringway.tune(); // Same.
console.log("-----------------");
const gp6100 = new GrandPiano("GP6100", "Peral River", "Brown", 42, 216);
gp6100.displayProps();
gp6100.makeSound();

import Flashlight from "./flashlight.js";

// Creating 2 new hard-coded objects(flashlight.js) and displaying there properties & status:
const philipsZoom = new Flashlight("Black", 1200, 39, 3);
philipsZoom.displayProps();
philipsZoom.isOn();
philipsZoom.changeBatteries();

console.log("-----------------");

const rothcoMini  = new Flashlight("Blue", 17, 1500, 2);
rothcoMini.displayProps();
rothcoMini.isOff();
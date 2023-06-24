import Car from "./car.js";
import RaceCar from "./race-car.js";
// Creating 2 new hard-coded objects(Car/RaseCar.js) and displaying there properties & status:
const honda = new Car(48399263, "Honda", "White", 2000);
honda.displayProps();
console.log("-----------------");
const arturaGT4 = new RaceCar(47356475, "McLaren", "Orange", 8000, 470, 24);
arturaGT4.displayProps();

import Car from "./car.js";


class RaceCar extends Car {
    public readonly maxSpeed: number;
    public readonly numberOfRaces: number;

    public constructor(sn: number, manufacturer: string, color: string, engineVolume: number, maxSpeed: number, numberOfRaces: number) {
      super(sn, manufacturer, color, engineVolume);
      this.maxSpeed = maxSpeed
      this.numberOfRaces = numberOfRaces
    }

    public displayProps(): void {
        super.displayProps();
        console.log("Max Speed: " + this.maxSpeed);
        console.log("Number of Races: " + this.numberOfRaces);
    }

}

export default RaceCar


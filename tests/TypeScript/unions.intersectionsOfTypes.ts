import {expect} from 'chai';

describe ('unions and intersections of types', () => {
    it ('unions with common fields', () => {
        interface Car {
            wheels: number;
            maxSpeed: number;
        }

        interface Bike {
            wheels: number;
            power: number;
        }

        function getCarOrBike() : Car | Bike {
            let car = {} as Car;
            car.wheels = 4;
            return car;
        }

        const vehicle = getCarOrBike();

        expect(typeof vehicle.wheels).to.be.equal('number');
    });

    it ('discriminating unions with switch', () => {
        type Bike = {
            isBroken: boolean;
            wheels: 2;
            maxSpeed: number;
        }

        type Car = {
            isBroken: boolean;
            wheels: 4;
            maxPower: string;
        }

        type Vehicle = Bike | Car;

        function FixVehicle (vehicle: Vehicle): Vehicle {
            switch(vehicle.wheels) {
                case 2:
                    vehicle.maxSpeed = 170;
                    break;
                case 4:
                    vehicle.maxPower = "200hp";
                    break;
            }
            vehicle.isBroken = false;
            return vehicle;
        }

        let bike: Vehicle = {} as Bike;
        bike.isBroken = true;

        bike = FixVehicle(bike);

        expect(bike.isBroken).to.be.false;
    });

    it ('intersections of types', () => {
        interface Vehicle {
            wheels: number;
        }

        interface Condition {
            isBroken: boolean;
        }

        type Item = Vehicle & Condition;

        const item: Item = {} as Item;
        item.wheels = 4;
        item.isBroken = false;

        expect(item).to.have.property('wheels');
        expect(item).to.have.property('isBroken');

    });

    it ('mixin via intersection of types', () => {
        class Car {
            wheels: number = 4;
        }

        class Condition {
            isBroken = false;
        }

        type FixableCar = Car & Condition;

        function createFixableCar(car: Car, condition: Condition): FixableCar {
            const fixableCar = car as FixableCar;
            fixableCar.isBroken = condition.isBroken;
            return fixableCar;
        }

        const car = new Car();
        const condition = new Condition();
        condition.isBroken = true;

        const fixableCar = createFixableCar(car, condition);

        expect(fixableCar.isBroken).to.be.true;

    })

})
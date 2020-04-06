import {expect} from 'chai';

describe('literal types', () => {
    it ('string literal types', () => {
        type Cars = "CityCar" | "SUV";
        let getCar: (car: Cars) => Cars = function (car: Cars) {
            return car;
        }
        expect(() => getCar("CityCar")).not.to.throw();
    });

    it ('numeral literal types', () => {
        type Wheels = 2 | 3 | 4 | 6 | 8;

        interface Vehicle {
            wheels: Wheels;
        }

        let getVehicle: (wheels: Wheels) => Vehicle = function (wheels: Wheels) {
            let v =  {} as Vehicle;
            v.wheels = wheels;
            return v;
        }

        expect(getVehicle(3).wheels).to.be.equal(3);
    });
});
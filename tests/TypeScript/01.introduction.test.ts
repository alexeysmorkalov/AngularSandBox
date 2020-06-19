import {expect} from 'chai';

declare var document: number;

describe('01 introduction', () => {
    it ('infer types1', () => {
        // from the following statement, TypeScript will infer that the variable 'i' has the type number.
        var i = 0;
        expect(typeof i).to.be.equal('number');
    });
    it ('infer types2', () => {
        // TypeScript will infer from the following function definition that the function f has return type string.
        function f() {
            return "result";
        }
        expect(typeof f()).to.be.equal('string');
    });
    it ('ambient declaration', () => {
        expect(typeof document).to.be.equal('undefined');
    });
    it ('function types', () => {
        interface Car {
            brand: string;
        }
        function createCar(brand: string, callback: (car: Car) => Car): Car {
            let car: Car = {} as Car;
            car.brand = brand;
            return callback(car);
        }

        let car: Car = createCar('audi', 
            function (car: Car) { 
                car.brand = car.brand + '_';
                return car;
            });

        expect(car.brand).to.be.equal('audi_');
    });
    it ('object types 1', () => {
        // the same as anonimous interfaces
        let point: {x: number, y: number} = {} as {x: number, y: number};
        point.x = -2;
        point.y = -1;
        expect(point.x).to.be.equal(-2);
    });
    it ('object types 2', () => {
        interface Car {
            brand: string;
            (brand: string): Car;
        }

        let f: {(): string} = () => "";
        let f2: () => string = f; // different declaration for the same 

        let res = f2();

        expect(res).to.be.equal("");

    });

});
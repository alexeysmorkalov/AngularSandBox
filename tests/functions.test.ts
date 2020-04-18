import {expect} from 'chai';

describe('typescript functions', () => {
    it ('named function', () => {
        function add(x1: number, x2: number): number {
            return x1 + x2;
        }
        expect(add(1, 2)).to.be.equal(3);
    });

    it ('anonymos function', () => {
        let add = function(x1: number, x2: number): number {
            return x1 + x2;
        }

        const res = add(1, 2);
        expect(res).to.be.equal(3);
    });

    it ('capturing values outsize the function', () => {
        const x2: number = 1;
        function addTox2(x1: number) : number {
            return x1 + x2;
        }

        const res = addTox2(2);
        expect(res).to.be.equal(x2 + 2);
    });

    it ('default function type', () => {
        function doNothing() {};
        const res = doNothing();

        expect(res).to.be.undefined;
    });

    it ('writing function type', ()=> {
        let add: (x1:number, x2:number) => number = function (x1: number, x2: number): number {return x1 + x2};
        expect(add(1,2)).to.be.equal(3);
    });

    it ('figuring out types', () => {
        let add: (x1:number, x2:number) => number = function(x1, x2) {return x1 + x2};
        expect(add(1,3)).to.be.equal(4);
    });

    it ('optional parameters', ()=> {
        let add: (x1: number, x2?: number) => number;
        add = function(x1, x2?) {
            let result = x1;
            if (x2) result += x2;
            return result;
        }
    });

    it ('default parameters', () => {
        let add: (x1: number, x2?: number) => number = function(x1, x2 = 0) {return x1 + x2};
        expect(add(1)).to.be.equal(1);
    });

    it ('rest parameters', () => {
        let sum: (x1: number, ...xx: number[]) => number;
        sum = function(x1, ...xx) {
            let res: number = x1;
            xx.forEach((x, i) => {
                res += x;
            });
            return res;
        }
        expect(sum(1,2,3)).to.be.equal(6);
    });

    it ('overloads', () => {

        class Car {

        }
        function drive(car: Car): Car;
        function drive(value: number): number;
        function drive(x: Car | number): Car | number {
            if (typeof x == 'object') {
                return (x as Car);
            } else {
                return (x as number) + 1;
            }
        }
        const res = drive(0);
        expect(res).to.be.equal(1);

        const car = new Car();
        const car2 = drive(car);
        expect(car2).to.be.equal(car);
    });
    it ('rest parameters2', () => {
        interface Car {
            brand: string;
            power: number;
            maxSpeed: number;
            color: string;
        }
        function buildCar(brand: string, ...params: (string | number)[]) : Car {
            const car = {} as Car;
            car.brand = brand;
            car.power = params[0] as number;
            car.color = params[1] as string;
            return car;
        }

        const car = buildCar("Audi", 200, "Red");

        expect(car.power).to.be.equal(200);
        expect(car.color).to.be.equal("Red");
    });
});
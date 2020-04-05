import {expect} from 'chai';

describe('generics intro', () => {
    it ('the most generic generic :)', () => {
        function MySelf<T>(arg: T): T {
            return arg;
        }

        const x = MySelf(1);
        expect(typeof x).to.be.equal('number');
    });

    it ('generic arrays1', () => {
        function CalcArray<T>(arg: T[]): number {
            return arg.length;
        }

        const res = CalcArray<number>([1,2]);

        expect(res).to.be.equal(2);
    });

    it ('generic arrays2', () => {
        function CalcArray<T>(arg: Array<T>): Array<T> {
            return arg.reverse();
        }

        const res = CalcArray<number>(Array<number>(1,2));

        expect(res.join(',')).to.be.equal('2,1');
    });
});

describe('generics types', () => {

    function Calc<T>(arg: T): T {
        return arg;
    }

    it ('generic type1', () => {

        let calc: <T>(arg: T) => T = Calc;

        const res = calc("1");

        expect(res).to.be.equal("1");
    });

    it ('generic type2', () => {
        let calc: <U>(arg: U) => U = Calc;

        const res = calc(1);

        expect(res).to.be.equal(1);
    });

    it ('generic type3', () => {
        let calc : {<T>(arg: T): T } = Calc;

        const res = calc(null);

        expect(res).to.be.null;
    });

    it ('generic interface', () => {
        interface CalcEngine {
            <T>(arg: T): T;
        }

        let calc: CalcEngine = Calc;

        const res = calc(0);

        expect(res).to.be.equal(0);
    });

    it ('generic interface2', () => {
        interface CalcEngine<T> {
            (arg: T): T;
        }

        let calc: CalcEngine<number> = Calc;

        const res = 2;

        expect(res).to.be.equal(2);
    });

    it ('generic class', () => {
        class CalcEngine<T> {
            constructor () {
                this.eval = function (expression: string, param: T) : T {
                    return param;
                }
            }
            eval: (expression: string, param: T) => T;
        }

        let stringEngine = new CalcEngine<string> ();

        const res = stringEngine.eval('', '1');

        expect(res).to.be.equal('1');
    });

    it ('generic constraints', () => {
        interface Expression {
            expression: string;
            isValid: boolean;
        }

        function evaluate<T extends Expression> (expression: T): T {
            if (!expression.isValid)
                throw new Error('Expression must be valid');
            return expression;
        }

        let expr: Expression = {} as Expression;
        expect(() => {evaluate(expr)}).to.throw();
        expr.isValid = true;
        expect(() => {evaluate(expr)}).to.not.throw();
    });

    it ('type parameter Keyof', () => {
        function getProperty<T, K extends keyof T>(obj: T, key: K) {
            return obj[key];
        }

        class Car {
            brand: string;
            constructor (brand: string) {
                this.brand = brand;
            }
        }

        const car: Car = new Car('Audi');

        expect(getProperty(car, 'brand')).to.be.equal('Audi');
    });

    it ('using class types in generics', () => {

        class Vehicle {
        }

        class CarEngine {
            cylinders: number[] = [];
        }

        class BikeEngine {
            maxPower: number = 120;
        }
        
        class Car extends Vehicle {
            engine: CarEngine = new CarEngine();
        }
        
        class Bike extends Vehicle {
            engine: BikeEngine = new BikeEngine();
        }

        function createVehicle<V extends Vehicle>(c: new () => V): V {
            return new c();
        }

        const car = createVehicle(Car);
        const bike = createVehicle(Bike);

        expect(car.engine).to.have.property('cylinders');
        expect(bike.engine).not.to.have.property('cylinders');
        expect(bike.engine).to.have.property('maxPower');
    });
});
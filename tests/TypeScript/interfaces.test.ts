import {expect} from 'chai';

describe('Typescript interfaces', () => {
    it('basic', ()=> {
        interface Car {
            Brand: string;
        }

        var c: Car = {Brand: 'Lada'}; 

        expect(c).to.have.property('Brand');
    });

    it ('optional property', () => {
        interface Car {
            Brand: string;
            Color?: string
        }

        var c: Car = {Brand: 'Lada'};

        expect(c).not.to.have.property('Color');
    });

    it ('readonly property', () => {
        interface Car {
            readonly Brand: string;
        }

        var c: Car = {Brand: 'Lada'};
        // not sure how to test
    });

    it ('readonly array', () => {
        const ra : ReadonlyArray<number> = [1, 2];
    });

    it ('excess property check', () => {
        interface Car {
            Brand: string;
            [propName: string]: string | boolean;

        }

        let car : Car = {Brand: 'Lada', Color: 'red', InStock: true};

        expect(car).to.have.property('Color');
    });

    it ('type assertion', () => {
        interface Car {
            Brand: string;
        }

        let car : Car = {Brand: 'Lada', Color: 'red'} as Car;

        expect(car).to.have.property('Color');
    });

    it ('function type', () => {
        interface Search {
            (arr : number[], value: number) : boolean;
        }

        let mySearch: Search = function(arr: number[], value: number): boolean {
            return arr.indexOf(value) >= 0;
        }

        const b = mySearch([1,2], 1);

        expect(b).to.be.true;
    });

    it ('indexible 1', () => {
        interface Car {
            [index: number]: string;
        }

        let car: Car = ['Lada', 'Niva'];

        expect(car[0]).to.be.equal('Lada');
    });

    it ('indexible 2', () => {
        interface Car {
            [index: string]: string;
        }

        let car: Car = {'k0': 'kk0', 'k1': 'kk1'};

        expect(car['k0']).to.be.equal('kk0');
    });

    it ('indexible mixed types', () => {
        interface Car {
            [index: string]: number | string;
            brand: string;
            wheels: number;
        }

        let car: Car = {'brand' : 'Lada', 'wheels': 4, 'price': 240000 };

        expect(car['brand']).to.be.equal(car.brand);
        expect(car['price']).to.be.equal(240000);
        expect(car['wheels']).to.be.equal(car.wheels);
    });

    it ('implementing interface', () => {
        interface Car {
            brand: string;
            wheels(): number;
        }
        class CityCar implements Car {
            constructor (public brand: string) {};
            wheels() {return 4;}
        }

        let car: Car = new CityCar('Lada');

        expect(car.wheels()).to.be.equal(4);
    });

    it ('fabric method', ()=>{
        interface Car {
            brand(): string;
        } 
        interface CarBuilder {
            new (brand: string): Car;
        }
        class CityCar implements Car {
            #brand: string;
            constructor (brand: string) {
                this.#brand = brand;
            }
            brand(): string {
                return this.#brand;
            }
        }
        function createCityCar(
            ctor: CarBuilder,
            brand: string
        ) : Car {
            return new ctor(brand);
        }
        let car : Car = createCityCar(CityCar, 'Lada');

        expect(car.brand()).to.be.equal('Lada');
    })

    it ('fabric method 2', () => {
        interface Car {
            brand(): string;
        }
        interface CarBuilder {
            new (brand: string): Car;
        }

        let carBuilder: CarBuilder = class CityCar implements Car {
            constructor(private _brand: string) { };

            brand(): string {
                return this._brand;
            }
        }

        let car: Car = new carBuilder('Lada');

        expect(car.brand()).to.be.equal('Lada');

    });

    it ('exteding interfaces', () => {
        interface Vehicle {
            readonly brand: string;
        }

        interface Car extends Vehicle {
            readonly color: string;
        }

        class CityCar implements Car {
            readonly color: string;
            readonly brand: string;
            constructor(color: string, brand: string) {
                this.brand = brand;
                this.color = color;
            }
        }

        const car = new CityCar('Red', 'Ferrari');

        expect(car).to.have.property('color');
    });

    it ('{} as ...', () => {
        interface Car {
            color: string;
        }

        const car = {} as Car;
        expect(car).not.to.have.property('color');
        car.color = 'red';

        expect(car).to.have.property('color');
    });

    it ('function type 2', () => {
        interface Car {
            speed: number;
            start(): void;
        }

        const car = {} as Car;
        car.start = function() { this.speed = 1; };

        car.start();
        expect(car.speed).to.be.equal(1);
    });

    it ('hybrid types', ()=> {
        interface Car {
            (speed: number): void;
            maxSpeed: number;
        }

        function buildCar(): Car {
            const car: Car = function(speed: number) {} as Car;
            car.maxSpeed = 100;
            return car;
        }

        var car = buildCar();
        car(10);

        expect(car.maxSpeed).to.be.equal(100);
    });

    it ('interface extends a class', () => {
        class CityCar {
            getBrand() : string { return 'Any'};
        }

        //inherits the members of the class but not their implementations. 
        interface Car extends CityCar {

        }

        class RenaultCar implements Car {
            getBrand(): string { return 'Renault';  }
        }

        var car = new RenaultCar() as Car;
        expect(car.getBrand()).to.be.equal('Renault');

    });
});
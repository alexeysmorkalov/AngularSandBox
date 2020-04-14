import {expect} from 'chai';

describe ('typescript classes', () => {
    it ('basic class', ()=> {
        class Car {
            color: string;
            constructor (color:string) {
                this.color = color;
            }
            canBeep() {
                return true;
            }
        }

        expect(new Car('green').canBeep()).to.be.true;
    });

    it ('inheritance', () => {
        class Vehicle {
            canBeep() {return true};
        }

        class Car extends Vehicle {
            numberOfWheels() {
                return 4;
            }
        };

        var c = new Car();
        expect(c.canBeep() && c.numberOfWheels() == 4).to.be.true;
    });

    it ('inheritance + super', () => {
        class Vehicle {
            brand: string;
            numberOfWheels: number;
            constructor(brand: string, numberOfWheels: number) {
                this.brand = brand;
                this.numberOfWheels = numberOfWheels;
            }
            getBrand(): string {
                return this.brand;
            }
            getNumberOfWheels(): number {
                return this.numberOfWheels;
            }

            setNumberOfWheels(value: number) : void {
                this.numberOfWheels = value; 
            }
        }

        class Bike extends Vehicle {
            constructor(brand : string) {
                super(brand, 2);
            }

            upgrade() : void {
                super.setNumberOfWheels(3);
            }
        }

        var b = new Bike('Harley');
        expect(b.getNumberOfWheels()).to.be.equal(2);
        // it's bad testing practice to make 2 assertions in a test bud 
        // for learning it's OK
        b.upgrade();
        expect(b.getNumberOfWheels()).to.be.equal(3);
    });
});

describe ('public, protected, private, readonly modifiers', () => {
    it ('ECMA private field', () => {
        class Car {
            readonly #brand: string;
            constructor(brand: string) {
                this.#brand = brand;
            } 

            setBrand(newBrand: string) : void {
                // Cannot assign to '#brand' because it is a read-only property.ts(2540)
                // this.#brand = '';
            } 
        }

        var car = new Car('Lada');
        // Property '#brand' is not accessible outside class 'Car' because it has a private identifier.ts(18013)
        // car.#brand
    });

    it ('private modifier', () => {
        class Car {
            private brand: string;
            constructor(brand: string) {
                this.brand = brand;
            } 

            private setBrand(value: string): void {
                this.brand = value;
            }

            getBrand(): string {
                return this.brand;
            }
        }

        let car : Car = new Car('Lada');
        // Property 'brand' is private and only accessible within class 'Car'.ts(2341)
        // let b = car.brand;

        //Property 'setBrand' is private and only accessible within class 'Car'.ts(2341)
        // car.setBrand('new');

        expect(car.getBrand()).to.be.not.null;

    });

    it ('protected ctor & method', () => {
        class Vehicle {
            #brand: string;
            protected constructor(brand: string) {
                this.#brand = brand;
            }

            protected m(v: string) {

            }
        }

        class Car extends Vehicle {
            constructor() {
                super('Car');
            }

            public m() {
                super.m('Car');
            }
        }
    });

    it ('parameter properties', () => {
        class Car {
            constructor(private readonly brand: string) {

            }
            getBrand() : string {
                return this.brand;
            }
        }

        var c = new Car('C');
        expect(c.getBrand()).to.be.equal('C');
    });

    it ('getters & setters', () => {
        enum CarTypes {CityCar, SUV};

        class Car {
            #carType: CarTypes = CarTypes.CityCar;


            get carType() : CarTypes {
                return this.#carType;
            }
            set carType(value: CarTypes) {
                this.#carType = value;
            }
            get drivingWheels(): number {
                return this.carType == CarTypes.CityCar ? 2 : 4;
            }
        }

        let car: Car = new Car();
        car.carType = CarTypes.SUV;
        expect(car.drivingWheels).to.be.equal(4);
    });

    it ('static properties', () => {
        class Wheel {

        }
        class Car {
            static wheels = 4;

            getWheels(): Wheel[] {
                return new Array<Wheel>(Car.wheels);
            }
        }

        class CityCar extends Car {
            getTyres(): number {
                return Car.wheels;
            }
        }

        const cityCar: CityCar = new CityCar();

        expect(cityCar.getWheels().length).to.be.equal(4);
        expect(cityCar.getTyres()).to.be.equal(4);

    });
});